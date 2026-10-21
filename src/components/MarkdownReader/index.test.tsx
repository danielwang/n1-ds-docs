import {cleanup, render, screen, fireEvent, waitFor} from '@testing-library/react';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import MarkdownReader from './index';

const content = '# Hello\n\n```js\nconst answer = 42;\n```';

beforeEach(() => {
  Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: vi.fn().mockResolvedValue(undefined)}});
  Object.defineProperty(URL, 'createObjectURL', {configurable: true, value: vi.fn().mockReturnValue('blob:test')});
  Object.defineProperty(URL, 'revokeObjectURL', {configurable: true, value: vi.fn()});
});
afterEach(() => cleanup());

describe('MarkdownReader', () => {
  it('switches between preview and the exact AI view', () => {
    render(<MarkdownReader content={content} />);
    expect(screen.getByRole('heading', {name: 'Hello'})).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name: 'AI View'}));
    expect(screen.getByText((_, element) => element?.tagName === 'CODE' && element.textContent === content)).toBeInTheDocument();
  });

  it('copies the complete Markdown and reports success', async () => {
    render(<MarkdownReader content={content} />);
    fireEvent.click(screen.getByRole('button', {name: 'Copy Markdown'}));
    await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalledWith(content));
    expect(screen.getByRole('button', {name: 'Copied'})).toHaveTextContent('Copied');
  });

  it('downloads the supplied filename', () => {
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => undefined);
    render(<MarkdownReader content={content} filename="guide.md" />);
    fireEvent.click(screen.getByRole('button', {name: 'Download Markdown'}));
    expect(click).toHaveBeenCalled();
    expect(URL.createObjectURL).toHaveBeenCalled();
  });

  it('uses the Fullscreen API', async () => {
    const requestFullscreen = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', {configurable: true, value: requestFullscreen});
    render(<MarkdownReader content={content} />);
    fireEvent.click(screen.getByRole('button', {name: 'Enter fullscreen'}));
    await waitFor(() => expect(requestFullscreen).toHaveBeenCalled());
  });
});
