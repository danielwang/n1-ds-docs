---
id: spaces
title: Spaces
sidebar_position: 11
---

# Spaces

The `[core] spacing` token set defines the spacing scale used for padding, margin, and gaps throughout
the system:

| Demo | Token | Value |
| --- | --- | --- |
| <div style={{backgroundColor: '#44addaff', width: '4px', height: '1.5rem'}}></div> | `[core] spacing.spacing-0,5` | 4px |
| <div style={{backgroundColor: '#44addaff', width: '6px', height: '1.5rem'}}></div> | `[core] spacing.spacing-0,75` | 6px |
| <div style={{backgroundColor: '#44addaff', width: '8px', height: '1.5rem'}}></div> | `[core] spacing.spacing-1` | 8px |
| <div style={{backgroundColor: '#44addaff', width: '12px', height: '1.5rem'}}></div> | `[core] spacing.spacing-1,5` | 12px |
| <div style={{backgroundColor: '#44addaff', width: '16px', height: '1.5rem'}}></div> | `[core] spacing.spacing-2` | 16px |
| <div style={{backgroundColor: '#44addaff', width: '24px', height: '1.5rem'}}></div> | `[core] spacing.spacing-3` | 24px |
| <div style={{backgroundColor: '#44addaff', width: '32px', height: '1.5rem'}}></div> | `[core] spacing.spacing-4` | 32px |
| <div style={{backgroundColor: '#44addaff', width: '48px', height: '1.5rem'}}></div> | `[core] spacing.spacing-5` | 48px |
| <div style={{backgroundColor: '#44addaff', width: '64px', height: '1.5rem'}}></div> | `[core] spacing.spacing-6` | 64px |
| <div style={{backgroundColor: '#44addaff', width: '96px', height: '1.5rem'}}></div> | `[core] spacing.spacing-7` | 96px |

The scale is based on an 8px unit (`spacing-1` = 8px), with two smaller half/three-quarter steps
(`spacing-0,5`, `spacing-0,75`) for fine adjustments below 8px, and it roughly doubles from `spacing-4`
onward for large layout gaps.

Components reference this scale instead of raw pixel values wherever possible, e.g.
`button.spacing` → `{[core] spacing.spacing-1}` (8px), `card.[content]--p` → `{[core] spacing.spacing-3}`
(24px), `dialog.[header]--py` → `{[core] spacing.spacing-3}` (24px).
