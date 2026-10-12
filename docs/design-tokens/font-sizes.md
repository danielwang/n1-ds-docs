---
id: font-sizes
title: Font Sizes
sidebar_position: 4
---

# Font Sizes

The type scale is defined twice in the source file — as composite styles under `font` (one object per
style, matching a Figma text style) and as individual properties under `typography`. Both resolve to the
same values; the tables below show the combined, resolved result, rendered live at actual size/weight so
you can compare them directly. All styles use the [`Segoe UI`](./font.md) family.

### Type scale (`font.desktop.*`)

| Demo | Token | Size | Weight | Line height |
| --- | --- | --- | --- | --- |
| <span style={{fontSize: '64px', fontWeight: 700, lineHeight: '80px'}}>Aa</span> | `font.desktop.h1` | 64px | 700 | 80px |
| <span style={{fontSize: '48px', fontWeight: 700, lineHeight: '64px'}}>Aa</span> | `font.desktop.h2` | 48px | 700 | 64px |
| <span style={{fontSize: '32px', fontWeight: 700, lineHeight: '48px'}}>Aa</span> | `font.desktop.h3` | 32px | 700 | 48px |
| <span style={{fontSize: '24px', fontWeight: 700, lineHeight: '36px'}}>Aa</span> | `font.desktop.h4` | 24px | 700 | 36px |
| <span style={{fontSize: '20px', fontWeight: 700, lineHeight: '30px'}}>Aa</span> | `font.desktop.h5` | 20px | 700 | 30px |
| <span style={{fontSize: '14px', fontWeight: 700, lineHeight: '21px', textTransform: 'capitalize'}}>Aa</span> | `font.desktop.h6` | 14px | 700 | 21px |
| <span style={{fontSize: '16px', fontWeight: 600, lineHeight: '24px'}}>Aa</span> | `font.desktop.subtitle1` | 16px | 600 | 24px |
| <span style={{fontSize: '14px', fontWeight: 600, lineHeight: '22px'}}>Aa</span> | `font.desktop.subtitle2` | 14px | 600 | 22px |
| <span style={{fontSize: '16px', fontWeight: 400, lineHeight: '24px'}}>Aa</span> | `font.desktop.body1` | 16px | 400 | 24px |
| <span style={{fontSize: '14px', fontWeight: 400, lineHeight: '22px'}}>Aa</span> | `font.desktop.body2` | 14px | 400 | 22px |
| <span style={{fontSize: '14px', fontWeight: 400, lineHeight: '16.8px', textDecoration: 'underline'}}>Aa</span> | `font.desktop.link` | 14px | 400 | 16.8px |
| <span style={{fontSize: '12px', fontWeight: 400, lineHeight: '18px'}}>Aa</span> | `font.desktop.caption` | 12px | 400 | 18px |
| <span style={{fontSize: '12px', fontWeight: 700, lineHeight: '18px', textTransform: 'uppercase'}}>Aa</span> | `font.desktop.overline` | 12px | 700 | 18px |

### Component text styles (`font.components.*`)

| Demo | Token | Size | Weight | Line height |
| --- | --- | --- | --- | --- |
| <span style={{fontSize: '12px', fontWeight: 700, lineHeight: '22px'}}>Aa</span> | `font.components.button-small` | 12px | 700 | 22px |
| <span style={{fontSize: '14px', fontWeight: 700, lineHeight: '24px'}}>Aa</span> | `font.components.button-medium` | 14px | 700 | 24px |
| <span style={{fontSize: '14px', fontWeight: 600, lineHeight: '20px'}}>Aa</span> | `font.components.label-text` | 14px | 600 | 20px |
| <span style={{fontSize: '15px', fontWeight: 700, lineHeight: '26px'}}>Aa</span> | `font.components.button-large` | 15px | 700 | 26px |
| <span style={{fontSize: '12px', fontWeight: 400, lineHeight: '18px'}}>Aa</span> | `font.components.avatar-group` | 12px | 400 | 18px |
| <span style={{fontSize: '20px', fontWeight: 400, lineHeight: '36px'}}>Aa</span> | `font.components.carousel-text` | 20px | 400 | 36px |
| <span style={{fontSize: '12px', fontWeight: 400, lineHeight: '18px'}}>Aa</span> | `font.components.settings-label` | 12px | 400 | 18px |
| <span style={{fontSize: '12px', fontWeight: 400, lineHeight: '24px'}}>Aa</span> | `font.components.chart-legend` | 12px | 400 | 24px |
| <span style={{fontSize: '12px', fontWeight: 400, lineHeight: '18px'}}>Aa</span> | `font.components.chip-text-sm` | 12px | 400 | 18px |
| <span style={{fontSize: '14px', fontWeight: 400, lineHeight: '20px'}}>Aa</span> | `font.components.chip-text-md` | 14px | 400 | 20px |
| <span style={{fontSize: '14px', fontWeight: 600, lineHeight: '24px'}}>Aa</span> | `font.components.table-head` | 14px | 600 | 24px |
| <span style={{fontSize: '14px', fontWeight: 400, lineHeight: '14px'}}>Aa</span> | `font.components.input-label` | 14px | 400 | 14px |
| <span style={{fontSize: '12px', fontWeight: 700, lineHeight: '18px', textTransform: 'uppercase'}}>Aa</span> | `font.components.nav-subheader` | 12px | 700 | 18px |
| <span style={{fontSize: '14px', fontWeight: 400, lineHeight: '22px'}}>Aa</span> | `font.components.nav-item-default` | 14px | 400 | 22px |
| <span style={{fontSize: '14px', fontWeight: 600, lineHeight: '22px'}}>Aa</span> | `font.components.nav-item-active` | 14px | 600 | 22px |
| <span style={{fontSize: '10px', fontWeight: 400, lineHeight: '16px'}}>Aa</span> | `font.components.nav-item-mini-default` | 10px | 400 | 16px |
| <span style={{fontSize: '10px', fontWeight: 600, lineHeight: '16px'}}>Aa</span> | `font.components.nav-item-mini-active` | 10px | 600 | 16px |
| <span style={{fontSize: '18px', fontWeight: 700, lineHeight: '21.6px'}}>Aa</span> | `font.components.dialog-title` | 18px | 700 | 21.6px |

All letter-spacing values in the current export are `0`.
