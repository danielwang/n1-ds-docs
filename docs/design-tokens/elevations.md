---
id: elevations
title: Elevations
sidebar_position: 7
---

# Elevations

Elevation is expressed as drop shadows (the `effect.shadow.*` token set). All shadows use the same
base color (`#919eab`, the mid grey) at a low alpha, with increasing offset/blur for higher elevation.

### Elevation scale

Demo boxes are shown on a fixed light panel so the shadow stays visible regardless of the site's light/dark mode.

| Demo | Token | box-shadow |
| --- | --- | --- |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 1px 2px 0px #919eab29'}}></div></div> | `effect.shadow.z1` | `0px 1px 2px 0px #919eab29` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 4px 8px 0px #919eab29'}}></div></div> | `effect.shadow.z4` | `0px 4px 8px 0px #919eab29` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 8px 16px 0px #919eab29'}}></div></div> | `effect.shadow.z8` | `0px 8px 16px 0px #919eab29` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 12px 24px -4px #919eab29'}}></div></div> | `effect.shadow.z12` | `0px 12px 24px -4px #919eab29` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 16px 32px -4px #919eab29'}}></div></div> | `effect.shadow.z16` | `0px 16px 32px -4px #919eab29` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 20px 40px -4px #919eab29'}}></div></div> | `effect.shadow.z20` | `0px 20px 40px -4px #919eab29` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 24px 48px 0px #919eab29'}}></div></div> | `effect.shadow.z24` | `0px 24px 48px 0px #919eab29` |

### Component shadows

| Demo | Token | box-shadow |
| --- | --- | --- |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 0px 16px 0px #919eab33'}}></div></div> | `effect.shadow.card` | `0px 0px 16px 0px #919eab33` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '-40px 40px 80px -8px #0000003d'}}></div></div> | `effect.shadow.dialog` | `-40px 40px 80px -8px #0000003d` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '-20px 20px 40px -4px #919eab3d'}}></div></div> | `effect.shadow.dropdown.0` | `-20px 20px 40px -4px #919eab3d` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '0px 0px 2px 0px #919eab3d'}}></div></div> | `effect.shadow.dropdown.1` | `0px 0px 2px 0px #919eab3d` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '40px 40px 80px -8px #919eab3d'}}></div></div> | `effect.shadow.drawer-left` | `40px 40px 80px -8px #919eab3d` |
| <div style={{backgroundColor: '#eceef1', padding: '1.5rem', display: 'inline-block', borderRadius: '12px'}}><div style={{backgroundColor: '#ffffff', width: '4rem', height: '4rem', borderRadius: '8px', boxShadow: '-40px 40px 80px -8px #919eab3d'}}></div></div> | `effect.shadow.drawer-right` | `-40px 40px 80px -8px #919eab3d` |

`dropdown` is a two-layer shadow — apply both `dropdown.0` and `dropdown.1` together (comma-separated in
CSS) for the full dropdown elevation effect.
