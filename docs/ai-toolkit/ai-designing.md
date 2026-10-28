import MarkdownReader from '@site/src/components/MarkdownReader';
import source from '@site/src/generated/designMarkdown';

# AI designing

## Design.md

Follows Google’s official DESIGN.md spec

Works with your AI tools:

<div className="ai-tool-list">
  <span>Claude Code</span>
  <span>Cursor</span>
  <span>Codex</span>
  <span>Gemini</span>
  <span>ChatGPT</span>
  <span>and other AI coding assistants</span>
</div>


<MarkdownReader content={source} filename="design.md" title="Design system guidance" initialView="ai" />


Where do I put the file?
In your project root, next to README.md. Then point to it from CLAUDE.md, AGENTS.md or your Cursor rules.

>Put DESIGN.md in your project root, then tell your agent to follow it in AGENT.md.

>Copy and paste into a skill in your AI tools

>Attach DESIGN.md file in your prompt
