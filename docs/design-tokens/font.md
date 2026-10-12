---
id: font
title: Font
sidebar_position: 3
---

# Font

## Typeface

Every typography token in the source file (`font` and `typography` sets) specifies the same font family:

<div style={{fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", fontSize: '1.75rem'}}>
The quick brown fox jumps over the lazy dog — Segoe UI
</div>

| Token property | Value |
| --- | --- |
| `fontFamily` | `Segoe UI` |

Recommended CSS stack (adds safe fallbacks for platforms where Segoe UI isn't installed):

```css
font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```

> `font-weight`, `font-style`, `font-stretch`, `text-decoration`, and `text-transform` are all set
> per text style — see [Font Sizes](./font-sizes.md) for the full scale.

## Font weight

The source file only names one weight explicitly, in the `font weight` token set: `font weight.bold` → `700`.

In practice, the full type scale (see [Font Sizes](./font-sizes.md)) uses three weights. The other two
aren't given their own named token in the current export, but are used consistently enough across the
scale to document here:

| Demo | Weight | Value | Used for |
| --- | --- | --- | --- |
| <span style={{fontSize: '1.5rem', fontWeight: 400}}>Segoe UI Regular</span> | Regular | `400` | Body text, captions, default nav/menu items |
| <span style={{fontSize: '1.5rem', fontWeight: 600}}>Segoe UI Semibold</span> | Semibold | `600` | Subtitles, labels, table headers, active nav items |
| <span style={{fontSize: '1.5rem', fontWeight: 700}}>Segoe UI Bold</span> | Bold | `700` | Headings (h1-h6), overline, buttons |
