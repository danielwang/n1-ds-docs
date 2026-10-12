---
id: radius
title: Radius
sidebar_position: 10
---

# Radius

The `[core] radius` token set defines the border-radius scale:

| Demo | Token | Value |
| --- | --- | --- |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '4px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-0,5` | 4px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '6px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-0,75` | 6px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '8px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-1` | 8px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '10px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-1,25` | 10px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '12px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-1,5` | 12px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '14px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-1,75` | 14px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '16px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-2` | 16px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '24px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-3` | 24px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '32px', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-4` | 32px |
| <div style={{backgroundColor: '#dfe2e8ff', width: '4rem', height: '4rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[core] radius.radius-50%` | 500px (pill/circle) |

`radius-50%` is intentionally a large fixed pixel value rather than a percentage — applying a very large
`border-radius` is a common technique to force a fully rounded (pill or circle) shape regardless of the
element's own size, without relying on CSS percentage radius (which behaves inconsistently for
non-square elements). Use it for pills, circular avatars, and icon buttons.

Components reference this scale rather than hard-coded values, e.g. `button.radius` →
`{[core] radius.radius-1}` (8px), `card.radius` → `{[core] radius.radius-2}` (16px), `dialog.radius` →
`{[core] radius.radius-2}` (16px), `fab.radius` / `icon button.radius` → `{[core] radius.radius-50%}`.
