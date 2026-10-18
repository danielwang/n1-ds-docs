import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const audiences = [
  ['Designers', 'Make informed design decisions and create consistent experiences.', '/img/personas/peter-professor.svg'],
  ['Developers', 'Build interfaces using shared components, tokens, and patterns.', '/img/personas/dora-developer.svg'],
  ['Product managers', 'Understand design principles and align product decisions.', '/img/personas/cyrus-cio.svg'],
  ['Content designers', 'Write clear, consistent, and helpful UI language.', '/img/personas/molly-moderator.svg'],
  ['Marketers', 'Create on-brand experiences across campaigns and channels.', '/img/personas/sarah-student.svg'],
  ['AI assistants and coding agents', 'Generate and review interfaces using N1 standards and guidelines.', '/img/personas/robot-ai.png'],
];

export default function OverviewIntro(): ReactNode {
  return (
    <div className={styles.page}>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionNumber}>01</span>
          <Heading as="h2">What is it?</Heading>
        </div>
        <div className={styles.sectionBody}>
          <p className={styles.statement}>More than a component library.</p>
          <p>The N1 Design System defines how N1 should look, feel, behave, and communicate.</p>
          <div className={styles.cardGrid}>
            {[
              ['Design principles', 'The thinking behind our design decisions.'],
              ['Foundations', 'Colours, typography, spacing, icons, and design tokens.'],
              ['Components', 'Reusable UI elements and usage guidelines.'],
              ['Patterns', 'Consistent solutions to common interaction problems.'],
              ['Content guidelines', 'Our voice, tone, terminology, and UX writing standards.'],
              ['AI resources', 'Structured guidance that helps AI tools understand and follow our system.'],
            ].map(([title, body]) => <article className={styles.card} key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className={styles.aiCompatibility}>
            <p className={styles.aiCompatibilitySpec}>Follows Google&apos;s official DESIGN.md spec</p>
            <p className={styles.aiCompatibilityTools}><strong>Works with your AI tools</strong><span>Claude Code</span><span>Cursor</span><span>Codex</span><span>Gemini</span><span>ChatGPT</span><span>and other AI coding assistants</span></p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSplit}`}>
        <div className={styles.sectionHeading}><span className={styles.sectionNumber}>02</span><Heading as="h2">Why does it exist?</Heading></div>
        <div className={styles.sectionBody}>
          <p className={styles.statement}>Make it easier to build great experiences.</p>
          <p>As N1 grows, consistency becomes harder to maintain. The design system helps us build consistently, move faster, improve quality, and scale with AI.</p>
          <div className={styles.quote}>“Whether the work is done by people, AI, or both.”</div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}><span className={styles.sectionNumber}>03</span><Heading as="h2">Who is it for?</Heading></div>
        <div className={styles.sectionBody}>
          <div className={styles.audienceGrid}>{audiences.map(([title, body, avatar], index) => <article className={styles.audience} key={title}><span>0{index + 1}</span><img className={styles.audienceAvatar} src={useBaseUrl(avatar)} alt="" width={64} height={64} loading="lazy" /><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <div className={styles.sectionHeading}><span className={styles.sectionNumber}>04</span><Heading as="h2">How to use it</Heading></div>
        <div className={styles.sectionBody}>
          <div className={styles.useGrid}><article><span className={styles.eyebrow}>For people</span><p>Explore the documentation based on what you’re working on. Start with the <Link to="/docs/foundations/design-principles">design principles</Link>, then use foundations, components, and patterns when designing or building features.</p></article><article><span className={styles.eyebrow}>For AI tools</span><p>Use the AI resources and machine-readable documentation to give your assistant the right design context—not generic interfaces.</p></article></div>
        </div>
      </section>
    </div>
  );
}
