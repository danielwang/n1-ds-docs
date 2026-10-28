---
id: example-component
title: Example Component
sidebar_position: 1
---

# Example Component

This is an example documentation page for the **UI Components** section.
Use it as a template for documenting an individual component (props, usage,
variants, accessibility notes, etc.).

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
See the [Introduction](../overview/intro.md) guide for setup steps.
```

See the [Introduction](../overview/intro.md) guide for setup steps.

## Adding images

Place images in the `static/img/` directory and reference them with an
absolute path starting with `/img/...` so they resolve correctly even when
the site is served from a subpath (such as GitHub Pages' `/onedesign/`).
