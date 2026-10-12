---
id: breakpoints
title: Breakpoints
sidebar_position: 5
---

# Breakpoints

:::note[No explicit breakpoint tokens in the current export]
`src/design-tokens.tokens.json` does not define a named breakpoint scale (there is no `sm` / `md` / `lg` /
`xl` style token set). The closest related data in the file is the grid definition and a set of layout
container widths, visualized below. If/when breakpoint tokens are added to the Figma file and
re-exported, this page should be updated with the real `breakpoint.*` values instead of this placeholder.
:::

## Grid

The `grid` token set defines a single 12-column grid (24px gutter):

<div style={{display: 'flex', gap: '6px', width: '100%', maxWidth: '360px'}}><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div></div>

| Property | Value |
| --- | --- |
| Pattern | `columns` |
| Column count | `12` |
| Gutter size | `24px` |
| Alignment | `stretch` |
| Offset | `0` |

## Layout container widths

These are the reference container widths used across the layout sizing tokens (`[core] sizings`,
`[layout].container.*`), scaled 1:8 below. They aren't formally declared as "breakpoints", but they
indicate the widths each layout is designed for:

| Demo (scaled 1:8) | Layout | Width |
| --- | --- | --- |
| <div style={{backgroundColor: '#44addaff', width: '43px', height: '1.5rem'}}></div> | Mobile | 343px |
| <div style={{backgroundColor: '#44addaff', width: '145px', height: '1.5rem'}}></div> | Vertical nav layout | 1160px |
| <div style={{backgroundColor: '#44addaff', width: '169px', height: '1.5rem'}}></div> | Mini nav layout | 1352px |
| <div style={{backgroundColor: '#44addaff', width: '180px', height: '1.5rem'}}></div> | Horizontal nav layout | 1440px |

Grid demo (12 columns, 24px gutter, scaled 1:4):\n
<div style={{display: 'flex', gap: '6px', width: '100%', maxWidth: '360px'}}><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div><div style={{backgroundColor: '#44addaff', height: '2rem', flex: '1 1 0'}}></div></div>

## Header heights by layout

| Layout | Height |
| --- | --- |
| Main header | 80px |
| Mobile main header | 64px |
| Dashboard header | 80px |
| Dashboard header (horizontal nav) | 64px |
| Mobile dashboard header | 64px |
