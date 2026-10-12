---
id: example-guide
title: Example Guide
sidebar_position: 1
---

# Example Guide

This is a second example documentation page, grouped under a **Guides**
category. Use it as a template for task-oriented, how-to style content.

## Markdown basics

Standard Markdown works as expected:

- Bulleted lists
- **Bold** and *italic* text
- `inline code`

```js
// Fenced code blocks with syntax highlighting
function greet(name) {
  return `Hello, ${name}!`;
}
```

> Blockquotes are also supported for callouts or notes.

## Linking between pages

Link to other docs using relative paths, so links keep working no matter
where the site is hosted:

```md
See the [Getting Started](../getting-started.md) guide for setup steps.
```

See the [Getting Started](../getting-started.md) guide for setup steps.

## Adding images

Place images in the `static/img/` directory and reference them with an
absolute path starting with `/img/...` so they resolve correctly even when
the site is served from a subpath (such as GitHub Pages' `/n1-ds-docs/`).
