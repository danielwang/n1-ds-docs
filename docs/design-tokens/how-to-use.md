---
id: how-to-use
title: How to Use
sidebar_position: 2
---

# How to Use

## Source file

All tokens documented in this section come from one file:
[`src/design-tokens.tokens.json`](https://github.com/danielwang/onedesign/tree/main/src/design-tokens.tokens.json),
exported from the nebulaONE Figma file. It follows the
[Tokens Studio for Figma](https://docs.tokens.studio/) export format: a JSON object whose top-level keys
are **token sets**, and whose leaf nodes are token objects shaped like:

```json
{
  "type": "color",
  "value": "#44addaff",
  "description": ""
}
```

## Token sets in the file

| Set | Contents |
| --- | --- |
| `color` | Literal brand colors (not aliased to anything else) |
| `[primitives] colors` | Raw system color ramps (grey, blue, green, orange, red, purple) and the data-visualization palette |
| `[core] colors` | Semantic color roles (`primary`, `secondary`, `info`, `success`, `warning`, `error`, `black`, `white`) that alias the primitives |
| `[core] spacing` | The spacing scale |
| `[core] radius` | The border-radius scale |
| `[core] sizings` | Component-specific dimensions (button heights, icon sizes, container widths, etc.) |
| `[themes]` | Semantic, surface-level tokens (`text`, `background`, `action`, `components`) that alias `[core] colors` |
| `font` / `typography` | The type scale, as composite styles (`font`) and as individual properties (`typography`) |
| `font weight` | Named font-weight values |
| `effect` | Shadow/elevation styles |
| `grid` | The layout grid definition |

## Aliases

A token value can reference another token instead of a literal value, written as `{set name.path.to.token}`,
for example:

```json
"primary": {
  "main": {
    "type": "color",
    "value": "{[core] colors.grey.600}"
  }
}
```

This means `[core] colors.primary.main` always resolves to whatever `[core] colors.grey.600` currently
is — change the primitive once, and every semantic/theme token built on top of it updates automatically.
The tables in this section show the final **resolved** value (after following every alias) next to the
token name, so you don't have to chase the chain by hand.

## Consuming tokens in code

When implementing UI against these tokens:

1. **Prefer the most specific tier available.** Use a theme token (`themes.background.paper`) over a core
   token (`core.colors.grey.800`) over a primitive (`primitives.colors.system.grey.cf-color-grey-800`)
   whenever one exists for your use case — it carries the most intent and survives palette changes.
2. **Never hard-code a hex value, px value, or shadow string** that already has a token. If you find
   yourself typing `#44addaff` or `16px`, check the [Colours](./colours.md) and [Spaces](./spaces.md)
   pages first.
3. **Treat primitives as implementation details.** They exist so core/theme tokens have something to
   alias — product code should very rarely reference a `[primitives]` token directly.

## Regenerating this documentation

If `src/design-tokens.tokens.json` is updated (for example, after re-exporting from Figma), the pages
under `docs/design-tokens/` should be regenerated from the new file rather than hand-edited, so the
documented values stay in sync with the source of truth.
