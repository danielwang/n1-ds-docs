---
id: opacity
title: Opacity
sidebar_position: 9
---

# Opacity

:::note[No formal opacity scale tokens in the current export]
`src/design-tokens.tokens.json` doesn't define a standalone `opacity` token set. However, several
[theme tokens](./colours.md) *reference* percentage-suffixed color variants (for example
`{[core] colors.grey.8%}`) that aren't themselves defined as tokens anywhere in the file — the alias
points at a value that doesn't exist in the export, so it can't be resolved to a color. The percentage
itself is still meaningful as an opacity value, visualized below against a checkered backdrop.
:::

## Opacity steps referenced (unresolved as colors)

| Demo | Referenced step | Opacity |
| --- | --- | --- |
| <div style={{backgroundColor: '#ffffff', backgroundImage: 'repeating-conic-gradient(#9994 0% 25%, transparent 0% 50%)', backgroundSize: '12px 12px', width: '6rem', height: '3rem', borderRadius: '4px', overflow: 'hidden'}}><div style={{backgroundColor: '#637381', width: '6rem', height: '3rem', opacity: 0.08}}></div></div> | `grey.8%` | 0.08 |
| <div style={{backgroundColor: '#ffffff', backgroundImage: 'repeating-conic-gradient(#9994 0% 25%, transparent 0% 50%)', backgroundSize: '12px 12px', width: '6rem', height: '3rem', borderRadius: '4px', overflow: 'hidden'}}><div style={{backgroundColor: '#637381', width: '6rem', height: '3rem', opacity: 0.12}}></div></div> | `grey.12%` | 0.12 |
| <div style={{backgroundColor: '#ffffff', backgroundImage: 'repeating-conic-gradient(#9994 0% 25%, transparent 0% 50%)', backgroundSize: '12px 12px', width: '6rem', height: '3rem', borderRadius: '4px', overflow: 'hidden'}}><div style={{backgroundColor: '#637381', width: '6rem', height: '3rem', opacity: 0.16}}></div></div> | `grey.16%` | 0.16 |
| <div style={{backgroundColor: '#ffffff', backgroundImage: 'repeating-conic-gradient(#9994 0% 25%, transparent 0% 50%)', backgroundSize: '12px 12px', width: '6rem', height: '3rem', borderRadius: '4px', overflow: 'hidden'}}><div style={{backgroundColor: '#637381', width: '6rem', height: '3rem', opacity: 0.2}}></div></div> | `grey.20%` | 0.2 |
| <div style={{backgroundColor: '#ffffff', backgroundImage: 'repeating-conic-gradient(#9994 0% 25%, transparent 0% 50%)', backgroundSize: '12px 12px', width: '6rem', height: '3rem', borderRadius: '4px', overflow: 'hidden'}}><div style={{backgroundColor: '#637381', width: '6rem', height: '3rem', opacity: 0.24}}></div></div> | `grey.24%` | 0.24 |
| <div style={{backgroundColor: '#ffffff', backgroundImage: 'repeating-conic-gradient(#9994 0% 25%, transparent 0% 50%)', backgroundSize: '12px 12px', width: '6rem', height: '3rem', borderRadius: '4px', overflow: 'hidden'}}><div style={{backgroundColor: '#637381', width: '6rem', height: '3rem', opacity: 0.32}}></div></div> | `grey.32%` | 0.32 |

| Referenced step | Used by |
| --- | --- |
| `grey.8%` | `action.hover`, `components.textfield.filled`, `_local-docs.[layout][header]--bg` |
| `grey.12%` | `background.thead` |
| `grey.16%` | `components.paper.outlined` |
| `grey.20%` | `action.disabled-bg`, `components.textfield.outline`, `border.divider` |
| `grey.24%` | `action.focus` |
| `grey.32%` | `components.textfield.underline`, `components.button.outlined` |

A handful of theme tokens resolve to a literal color *with* an alpha channel already baked in (not a
percentage alias) — those are documented inline in [Colours](./colours.md) (e.g.
`background.backdrop` at 80% opacity, `action.disabled` at 80% opacity, `components.paper.bg-blur` at
90% opacity, `shadow` colors at 16–24% opacity in [Elevations](./elevations.md)).
