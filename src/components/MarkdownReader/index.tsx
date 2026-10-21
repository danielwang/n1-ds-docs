import type {HTMLAttributes, ReactNode} from 'react';
import {useEffect, useRef, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import {Highlight, themes} from 'prism-react-renderer';

import styles from './styles.module.css';

export type MarkdownReaderView = 'preview' | 'ai';

export type MarkdownReaderProps = {
  content: string;
  filename?: string;
  title?: string;
  initialView?: MarkdownReaderView;
};

const fallbackFilename = 'document.md';

function CodeBlock({className, children, node: _node, ...props}: HTMLAttributes<HTMLElement> & {children?: ReactNode; node?: unknown}) {
  const [copied, setCopied] = useState(false);
  const language = /language-(\w+)/.exec(className ?? '')?.[1];
  const code = String(children).replace(/\n$/, '');

  if (!language) return <code className={className} {...props}>{children}</code>;

  const copy = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch { setCopied(false); }
  };

  return (
    <div className={styles.codeBlock}>
      <button type="button" className={styles.codeCopy} onClick={copy} aria-label={copied ? 'Code copied' : 'Copy code'}>
        {copied ? 'Copied' : 'Copy'}
      </button>
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({className: highlightedClassName, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={highlightedClassName} style={{...style, margin: 0, padding: '1.25rem', overflow: 'auto'}} {...props}>
            {tokens.map((line, index) => <div key={index} {...getLineProps({line})}>{line.map((token, tokenIndex) => <span key={tokenIndex} {...getTokenProps({token})} />)}</div>)}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default function MarkdownReader({content, filename = fallbackFilename, title, initialView = 'preview'}: MarkdownReaderProps): ReactNode {
  const [view, setView] = useState<MarkdownReaderView>(initialView);
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncFullscreen = () => setIsFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener('fullscreenchange', syncFullscreen);
    return () => document.removeEventListener('fullscreenchange', syncFullscreen);
  }, []);

  const copyMarkdown = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) { setCopyState('error'); return; }
    try { await navigator.clipboard.writeText(content); setCopyState('success'); }
    catch { setCopyState('error'); }
    window.setTimeout(() => setCopyState('idle'), 2200);
  };

  const downloadMarkdown = () => {
    const url = URL.createObjectURL(new Blob([content], {type: 'text/markdown;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename.endsWith('.md') ? filename : `${filename}.md`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  const toggleFullscreen = async () => {
    if (typeof document === 'undefined') return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (rootRef.current?.requestFullscreen) await rootRef.current.requestFullscreen();
    } catch { setIsFullscreen(false); }
  };

  return (
    <section ref={rootRef} className={styles.reader} aria-label={title ?? filename}>
      <header className={styles.header}>
        <div><strong>{title ?? filename}</strong>{title && <span>{filename}</span>}</div>
        <div className={styles.toolbar}>
          <button type="button" onClick={() => setView('preview')} aria-pressed={view === 'preview'}>Preview</button>
          <button type="button" onClick={() => setView('ai')} aria-pressed={view === 'ai'}>AI View</button>
          <button type="button" onClick={downloadMarkdown}>Download Markdown</button>
          <button type="button" onClick={copyMarkdown} aria-live="polite">{copyState === 'success' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy Markdown'}</button>
          <button type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}>{isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}</button>
        </div>
      </header>
      <div className={styles.body}>
        {view === 'preview' ? (
          <div className={styles.preview}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]} components={{code: CodeBlock, pre: ({children}) => <>{children}</>}}>{content}</ReactMarkdown>
          </div>
        ) : <pre className={styles.raw}><code>{content}</code></pre>}
      </div>
    </section>
  );
}
