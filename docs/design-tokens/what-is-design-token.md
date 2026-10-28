---
id: what-is-design-token
title: What is a Design Token
sidebar_position: 1
---

# What is a Design Token

A **design token** is a single, named value that stores a design decision — a color, a font size, a
spacing unit, a border radius, a shadow, and so on. Instead of hard-coding a raw value like `#44addaff`
or `16px` directly inside a component, you reference the token (for example `colors.secondary.main` or
`spacing-2`) wherever that value is needed.

Tokens are the smallest building blocks of the nebulaONE design system. Components, patterns, and
whole product surfaces are composed from them, which keeps the UI visually consistent and makes
systemic changes (a new brand color, a denser spacing scale, a revised type ramp) a single-source-of-truth
edit instead of a find-and-replace across the codebase.

## Where these tokens come from

The tokens documented in this section are extracted directly from the nebulaONE Figma design file
([`📖 nebulaONE.design`](https://www.figma.com/design/01imXcjljmBfqXhqFmv4kz)), exported as
[`src/design-tokens.tokens.json`](https://github.com/danielwang/onedesign/tree/main/src/design-tokens.tokens.json)
in the repository. That file is the source of truth — the pages in this section are a human-readable
reference generated from it, grouped the same way a token consumer (engineer or designer) would look
them up:

- [How to Use](./how-to-use.md) — the file format, naming/aliasing conventions, and how to consume tokens
- [Font](./font.md) — typeface and weight tokens
- [Font Sizes](./font-sizes.md) — the full type scale (size, line-height, letter-spacing, case)
- [Breakpoints](./breakpoints.md) — responsive layout widths and the grid system
- [Colours](./colours.md) — primitive palettes, semantic core colors, brand colors, and theme colors
- [Elevations](./elevations.md) — the shadow/elevation scale
- [Motion](./motion.md) — animation duration/easing tokens
- [Opacity](./opacity.md) — opacity/alpha tokens
- [Radius](./radius.md) — border-radius scale
- [Spaces](./spaces.md) — the spacing scale
- [Z Index](./z-index.md) — stacking-order tokens

## Token tiers used in this system

The source file organizes tokens into a few tiers, which this documentation follows:

| Tier | Example | Purpose |
| --- | --- | --- |
| **Primitive** | `[primitives] colors.system.blue.cf-color-blue-500` | Raw, context-free values (a specific hex color, a specific pixel size). Rarely used directly in product UI. |
| **Core / semantic** | `[core] colors.secondary.main` | Named by role ("secondary", "spacing-2", "radius-1"), aliasing one or more primitives. This is what components are built from. |
| **Theme** | `[themes].text.primary`, `[themes].background.default` | Maps core tokens to a concrete surface meaning (text color, background color, action state) for the current theme. |

Not every category in the sidebar above has token data defined in the current export — where that's the
case, the page says so explicitly rather than inventing values.
