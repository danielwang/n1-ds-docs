---
id: colours
title: Colours
sidebar_position: 6
---

# Colours

Color tokens exist in four tiers: **primitives** (raw ramps), **core** (semantic roles that alias
primitives), **brand** (literal marketing/brand colors), and **theme** (surface-level roles — text,
background, actions — that alias core colors). See [How to Use](./how-to-use.md) for how the tiers relate.

## Primitive color ramps

Nine-step ramps (`100` lightest → `900` darkest), named `cf-color-<family>-<step>` in the source file.

### Grey

| Swatch | Step | Hex | Token |
| --- | --- | --- | --- |
| <div style={{backgroundColor: '#000000ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `black` | `#000000` | `[primitives] colors.system.grey.cf-color-black` |
| <div style={{backgroundColor: '#f9fafbff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `100` | `#f9fafb` | `[primitives] colors.system.grey.cf-color-grey-100` |
| <div style={{backgroundColor: '#ecf0f3ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `200` | `#ecf0f3` | `[primitives] colors.system.grey.cf-color-grey-200` |
| <div style={{backgroundColor: '#dfe2e8ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `300` | `#dfe2e8` | `[primitives] colors.system.grey.cf-color-grey-300` |
| <div style={{backgroundColor: '#c4cdd5ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `400` | `#c4cdd5` | `[primitives] colors.system.grey.cf-color-grey-400` |
| <div style={{backgroundColor: '#919eabff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `500` | `#919eab` | `[primitives] colors.system.grey.cf-color-grey-500` |
| <div style={{backgroundColor: '#637381ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `600` | `#637381` | `[primitives] colors.system.grey.cf-color-grey-600` |
| <div style={{backgroundColor: '#454f5bff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `700` | `#454f5b` | `[primitives] colors.system.grey.cf-color-grey-700` |
| <div style={{backgroundColor: '#212b36ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `800` | `#212b36` | `[primitives] colors.system.grey.cf-color-grey-800` |
| <div style={{backgroundColor: '#161c24ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `900` | `#161c24` | `[primitives] colors.system.grey.cf-color-grey-900` |
| <div style={{backgroundColor: '#ffffffff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `white` | `#ffffff` | `[primitives] colors.system.grey.cf-color-white` |

### Blue

| Swatch | Step | Hex | Token |
| --- | --- | --- | --- |
| <div style={{backgroundColor: '#dff6f5ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `100` | `#dff6f5` | `[primitives] colors.system.blue.cf-color-blue-100` |
| <div style={{backgroundColor: '#bbf0f1ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `200` | `#bbf0f1` | `[primitives] colors.system.blue.cf-color-blue-200` |
| <div style={{backgroundColor: '#91e7efff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `300` | `#91e7ef` | `[primitives] colors.system.blue.cf-color-blue-300` |
| <div style={{backgroundColor: '#6addf3ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `400` | `#6addf3` | `[primitives] colors.system.blue.cf-color-blue-400` |
| <div style={{backgroundColor: '#44addaff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `500` | `#44adda` | `[primitives] colors.system.blue.cf-color-blue-500` |
| <div style={{backgroundColor: '#289bceff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `600` | `#289bce` | `[primitives] colors.system.blue.cf-color-blue-600` |
| <div style={{backgroundColor: '#1b76acff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `700` | `#1b76ac` | `[primitives] colors.system.blue.cf-color-blue-700` |
| <div style={{backgroundColor: '#11548bff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `800` | `#11548b` | `[primitives] colors.system.blue.cf-color-blue-800` |
| <div style={{backgroundColor: '#0a3c73ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `900` | `#0a3c73` | `[primitives] colors.system.blue.cf-color-blue-900` |

### Green

| Swatch | Step | Hex | Token |
| --- | --- | --- | --- |
| <div style={{backgroundColor: '#cff9ccff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `100` | `#cff9cc` | `[primitives] colors.system.green.cf-color-green-100` |
| <div style={{backgroundColor: '#9cf4a0ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `200` | `#9cf4a0` | `[primitives] colors.system.green.cf-color-green-200` |
| <div style={{backgroundColor: '#66de77ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `300` | `#66de77` | `[primitives] colors.system.green.cf-color-green-300` |
| <div style={{backgroundColor: '#3dbd5cff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `400` | `#3dbd5c` | `[primitives] colors.system.green.cf-color-green-400` |
| <div style={{backgroundColor: '#0f913bff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `500` | `#0f913b` | `[primitives] colors.system.green.cf-color-green-500` |
| <div style={{backgroundColor: '#0a7c3cff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `600` | `#0a7c3c` | `[primitives] colors.system.green.cf-color-green-600` |
| <div style={{backgroundColor: '#07683bff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `700` | `#07683b` | `[primitives] colors.system.green.cf-color-green-700` |
| <div style={{backgroundColor: '#045437ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `800` | `#045437` | `[primitives] colors.system.green.cf-color-green-800` |
| <div style={{backgroundColor: '#024533ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `900` | `#024533` | `[primitives] colors.system.green.cf-color-green-900` |

### Orange

| Swatch | Step | Hex | Token |
| --- | --- | --- | --- |
| <div style={{backgroundColor: '#fdf0ceff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `100` | `#fdf0ce` | `[primitives] colors.system.orange.cf-color-orange-100` |
| <div style={{backgroundColor: '#fcdd9eff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `200` | `#fcdd9e` | `[primitives] colors.system.orange.cf-color-orange-200` |
| <div style={{backgroundColor: '#f8c46dff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `300` | `#f8c46d` | `[primitives] colors.system.orange.cf-color-orange-300` |
| <div style={{backgroundColor: '#f1aa48ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `400` | `#f1aa48` | `[primitives] colors.system.orange.cf-color-orange-400` |
| <div style={{backgroundColor: '#e88310ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `500` | `#e88310` | `[primitives] colors.system.orange.cf-color-orange-500` |
| <div style={{backgroundColor: '#c7660bff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `600` | `#c7660b` | `[primitives] colors.system.orange.cf-color-orange-600` |
| <div style={{backgroundColor: '#a74d08ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `700` | `#a74d08` | `[primitives] colors.system.orange.cf-color-orange-700` |
| <div style={{backgroundColor: '#863705ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `800` | `#863705` | `[primitives] colors.system.orange.cf-color-orange-800` |
| <div style={{backgroundColor: '#6f2803ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `900` | `#6f2803` | `[primitives] colors.system.orange.cf-color-orange-900` |

### Red

| Swatch | Step | Hex | Token |
| --- | --- | --- | --- |
| <div style={{backgroundColor: '#fde0d4ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `100` | `#fde0d4` | `[primitives] colors.system.red.cf-color-red-100` |
| <div style={{backgroundColor: '#fbbaa9ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `200` | `#fbbaa9` | `[primitives] colors.system.red.cf-color-red-200` |
| <div style={{backgroundColor: '#f38a7dff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `300` | `#f38a7d` | `[primitives] colors.system.red.cf-color-red-300` |
| <div style={{backgroundColor: '#e75e5aff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `400` | `#e75e5a` | `[primitives] colors.system.red.cf-color-red-400` |
| <div style={{backgroundColor: '#d82934ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `500` | `#d82934` | `[primitives] colors.system.red.cf-color-red-500` |
| <div style={{backgroundColor: '#b91d35ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `600` | `#b91d35` | `[primitives] colors.system.red.cf-color-red-600` |
| <div style={{backgroundColor: '#9b1435ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `700` | `#9b1435` | `[primitives] colors.system.red.cf-color-red-700` |
| <div style={{backgroundColor: '#7d0d32ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `800` | `#7d0d32` | `[primitives] colors.system.red.cf-color-red-800` |
| <div style={{backgroundColor: '#670730ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `900` | `#670730` | `[primitives] colors.system.red.cf-color-red-900` |

### Purple

| Swatch | Step | Hex | Token |
| --- | --- | --- | --- |
| <div style={{backgroundColor: '#ece1faff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `100` | `#ece1fa` | `[primitives] colors.system.purple.cf-color-purple-100` |
| <div style={{backgroundColor: '#d9c5f5ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `200` | `#d9c5f5` | `[primitives] colors.system.purple.cf-color-purple-200` |
| <div style={{backgroundColor: '#b99fe3ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `300` | `#b99fe3` | `[primitives] colors.system.purple.cf-color-purple-300` |
| <div style={{backgroundColor: '#967dc7ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `400` | `#967dc7` | `[primitives] colors.system.purple.cf-color-purple-400` |
| <div style={{backgroundColor: '#6b52a2ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `500` | `#6b52a2` | `[primitives] colors.system.purple.cf-color-purple-500` |
| <div style={{backgroundColor: '#523b8bff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `600` | `#523b8b` | `[primitives] colors.system.purple.cf-color-purple-600` |
| <div style={{backgroundColor: '#3c2974ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `700` | `#3c2974` | `[primitives] colors.system.purple.cf-color-purple-700` |
| <div style={{backgroundColor: '#281a5dff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `800` | `#281a5d` | `[primitives] colors.system.purple.cf-color-purple-800` |
| <div style={{backgroundColor: '#1b0f4dff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `900` | `#1b0f4d` | `[primitives] colors.system.purple.cf-color-purple-900` |

### Data-visualization palette (`viz/*`)

| Swatch | Name | Hex | Token |
| --- | --- | --- | --- |
| <div style={{backgroundColor: '#003f5cff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Astronaut Blue | `#003f5c` | `[primitives] colors.viz.cf-color-astronaut-blue` |
| <div style={{backgroundColor: '#a1a600ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Barf Green | `#a1a600` | `[primitives] colors.viz.cf-color-barf-green` |
| <div style={{backgroundColor: '#dfa800ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Burnt Yellow | `#dfa800` | `[primitives] colors.viz.cf-color-burnt-yellow` |
| <div style={{backgroundColor: '#f95d6aff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Carmine Pink | `#f95d6a` | `[primitives] colors.viz.cf-color-carmine-pink` |
| <div style={{backgroundColor: '#096adcff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Celtic Blue | `#096adc` | `[primitives] colors.viz.cf-color-celtic-blue` |
| <div style={{backgroundColor: '#0f913bff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Irish Green | `#0f913b` | `[primitives] colors.viz.cf-color-irish-green` |
| <div style={{backgroundColor: '#665191ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Lavender | `#665191` | `[primitives] colors.viz.cf-color-lavender` |
| <div style={{backgroundColor: '#9cbaecff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Lavender Blue | `#9cbaec` | `[primitives] colors.viz.cf-color-lavender-blue` |
| <div style={{backgroundColor: '#43982cff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Lime Green | `#43982c` | `[primitives] colors.viz.cf-color-lime-green` |
| <div style={{backgroundColor: '#ff7c43ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Mango | `#ff7c43` | `[primitives] colors.viz.cf-color-mango` |
| <div style={{backgroundColor: '#37c5f0ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Medium Turquoise | `#37c5f0` | `[primitives] colors.viz.cf-color-medium-turquoise` |
| <div style={{backgroundColor: '#c0a700ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Muddy Yellow | `#c0a700` | `[primitives] colors.viz.cf-color-muddy-yellow` |
| <div style={{backgroundColor: '#2f4b7cff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Navy Blue | `#2f4b7c` | `[primitives] colors.viz.cf-color-navy-blue` |
| <div style={{backgroundColor: '#649e1aff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Onion Green | `#649e1a` | `[primitives] colors.viz.cf-color-onion-green` |
| <div style={{backgroundColor: '#ffa600ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Orange | `#ffa600` | `[primitives] colors.viz.cf-color-orange` |
| <div style={{backgroundColor: '#83a200ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Pea Green | `#83a200` | `[primitives] colors.viz.cf-color-pea-green` |
| <div style={{backgroundColor: '#6da2faff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Periwinkle Blue | `#6da2fa` | `[primitives] colors.viz.cf-color-periwinkle-blue` |
| <div style={{backgroundColor: '#41b6faff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Picton Blue | `#41b6fa` | `[primitives] colors.viz.cf-color-picton-blue` |
| <div style={{backgroundColor: '#e32f6cff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Pink Lemonade | `#e32f6c` | `[primitives] colors.viz.cf-color-pink-lemonade` |
| <div style={{backgroundColor: '#a05195ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Plum | `#a05195` | `[primitives] colors.viz.cf-color-plum` |
| <div style={{backgroundColor: '#d45087ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Raspberry | `#d45087` | `[primitives] colors.viz.cf-color-raspberry` |
| <div style={{backgroundColor: '#c36dcdff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Rich Lilac | `#c36dcd` | `[primitives] colors.viz.cf-color-rich-lilac` |
| <div style={{backgroundColor: '#d82934ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | Rose Madder | `#d82934` | `[primitives] colors.viz.cf-color-rose-madder` |

## Core semantic colors (`[core] colors`)

Each role aliases a step from the primitive ramps above.

| Role | darker | dark | main | light | lighter |
| --- | --- | --- | --- | --- | --- |
| `primary` | <div style={{backgroundColor: '#161c24ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#161c24` | <div style={{backgroundColor: '#212b36ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#212b36` | <div style={{backgroundColor: '#637381ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#637381` | <div style={{backgroundColor: '#c4cdd5ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#c4cdd5` | <div style={{backgroundColor: '#ecf0f3ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#ecf0f3` |
| `secondary` | <div style={{backgroundColor: '#0a3c73ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#0a3c73` | <div style={{backgroundColor: '#1b76acff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#1b76ac` | <div style={{backgroundColor: '#44addaff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#44adda` | <div style={{backgroundColor: '#91e7efff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#91e7ef` | <div style={{backgroundColor: '#dff6f5ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#dff6f5` |
| `info` | <div style={{backgroundColor: '#0a3c73ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#0a3c73` | <div style={{backgroundColor: '#1b76acff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#1b76ac` | <div style={{backgroundColor: '#44addaff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#44adda` | <div style={{backgroundColor: '#91e7efff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#91e7ef` | <div style={{backgroundColor: '#dff6f5ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#dff6f5` |
| `success` | <div style={{backgroundColor: '#024533ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#024533` | <div style={{backgroundColor: '#07683bff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#07683b` | <div style={{backgroundColor: '#0f913bff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#0f913b` | <div style={{backgroundColor: '#66de77ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#66de77` | <div style={{backgroundColor: '#cff9ccff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#cff9cc` |
| `warning` | <div style={{backgroundColor: '#6f2803ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#6f2803` | <div style={{backgroundColor: '#a74d08ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#a74d08` | <div style={{backgroundColor: '#e88310ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#e88310` | <div style={{backgroundColor: '#f8c46dff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#f8c46d` | <div style={{backgroundColor: '#fdf0ceff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#fdf0ce` |
| `error` | <div style={{backgroundColor: '#670730ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#670730` | <div style={{backgroundColor: '#9b1435ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#9b1435` | <div style={{backgroundColor: '#d82934ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#d82934` | <div style={{backgroundColor: '#f38a7dff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#f38a7d` | <div style={{backgroundColor: '#fde0d4ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#fde0d4` |

| Swatch | Token | Hex |
| --- | --- | --- |
| <div style={{backgroundColor: '#000000ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `black.main` | `#000000` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `white.main` | `#ffffff` |

`primary` aliases the grey ramp directly (not a hue); `secondary` and `info` currently alias the same
blue steps.

## Brand colors (`color.brand.*`)

Literal (non-aliased) brand colors:

| Swatch | Token | Hex |
| --- | --- | --- |
| <div style={{backgroundColor: '#37c5f0ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `color.brand.blue light` | `#37c5f0` |
| <div style={{backgroundColor: '#4759a7ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `color.brand.blue` | `#4759a7` |
| <div style={{backgroundColor: '#000041ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `color.brand.blue dark` | `#000041` |
| <div style={{backgroundColor: '#6b52a2ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `color.brand.purple` | `#6b52a2` |
| <div style={{backgroundColor: '#1e2529ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `color.brand.black` | `#1e2529` |
| <div style={{backgroundColor: '#767676ff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `color.brand.grey` | `#767676` |
| <div style={{backgroundColor: '#16213eff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `color.brand.client.color.1` | `#16213e` |
| <div style={{backgroundColor: '#efc07bff', width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `color.brand.client.color.2` | `#efc07b` |

The `client.color.*` pair are example white-label/customer-branding swatches (used on the Figma file's
"Branding customisation" page) rather than nebulaONE's own brand palette.

## Theme tokens (`[themes]`)

The file currently defines a single theme, and its `background.default` (`#161c24`, the darkest grey)
indicates it's a **dark theme**. Each token aliases a core color above.

### Text

| Swatch | Token | Resolved |
| --- | --- | --- |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].text.primary` | `#ffffff` |
| <div style={{backgroundColor: '#919eabff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].text.secondary` | `#919eab` |
| <div style={{backgroundColor: '#637381ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].text.disabled` | `#637381` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].text.white` | `#ffffff` |

### Background

| Swatch | Token | Resolved |
| --- | --- | --- |
| <div style={{backgroundColor: '#161c24ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].background.default` | `#161c24` |
| <div style={{backgroundColor: '#212b36ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].background.paper` | `#212b36` |
| <div style={{backgroundColor: '#161c24cc', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].background.backdrop` | `#161c24` (80%) |
|  | `[themes].background.thead` | _unresolved: `{[core] colors.grey.12%}`_ |

### Action

| Swatch | Token | Resolved |
| --- | --- | --- |
| <div style={{backgroundColor: '#919eabff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].action.active` | `#919eab` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].action.selected` | `#ffffff` |
| <div style={{backgroundColor: '#919eabcc', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].action.disabled` | `#919eab` (80%) |
|  | `[themes].action.hover` | _unresolved: `{[core] colors.grey.8%}`_ |
|  | `[themes].action.disabled-bg` | _unresolved: `{[core] colors.grey.20%}`_ |
|  | `[themes].action.focus` | _unresolved: `{[core] colors.grey.24%}`_ |

### Components

| Swatch | Token | Resolved |
| --- | --- | --- |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].components.textfield.bg-disable` | `#ffffff` |
|  | `[themes].components.textfield.outline` | _unresolved: `{[core] colors.grey.20%}`_ |
|  | `[themes].components.textfield.underline` | _unresolved: `{[core] colors.grey.32%}`_ |
|  | `[themes].components.textfield.filled` | _unresolved: `{[core] colors.grey.8%}`_ |
|  | `[themes].components.button.outlined` | _unresolved: `{[core] colors.grey.32%}`_ |
|  | `[themes].components.paper.outlined` | _unresolved: `{[core] colors.grey.16%}`_ |
| <div style={{backgroundColor: '#212b36e6', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].components.paper.bg-blur` | `#212b36` (90%) |
| <div style={{backgroundColor: '#454f5bff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].components.tooltip.bg` | `#454f5b` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].components.tooltip.color` | `#ffffff` |
| <div style={{backgroundColor: '#212b36ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].components.conversation.chat` | `#212b36` |
| <div style={{backgroundColor: '#44addaff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].components.stepper.active` | `#44adda` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].components.navitem.label` | `#ffffff` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].components.navitem.icon` | `#ffffff` |

### Border

| Swatch | Token | Resolved |
| --- | --- | --- |
| <div style={{backgroundColor: '#919eab33', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].border.divider` | `#919eab` (20%) |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].border.border` | `#ffffff` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].border.border-light` | `#ffffff` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].border.border-dark` | `#ffffff` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].border.border-black` | `#ffffff` |

### Global nav item states

| Swatch | Token | Resolved |
| --- | --- | --- |
| <div style={{backgroundColor: '#212b36ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].global.inherit.color` | `#212b36` |
| <div style={{backgroundColor: '#ffffffff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].global.inherit.bg` | `#ffffff` |
| <div style={{backgroundColor: '#c4cdd5ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].global.inherit.bg-hovered` | `#c4cdd5` |
| <div style={{backgroundColor: '#212b36ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].global.default.color` | `#212b36` |
| <div style={{backgroundColor: '#dfe2e8ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].global.default.bg` | `#dfe2e8` |
| <div style={{backgroundColor: '#c4cdd5ff', width: '1.5rem', height: '1.5rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> | `[themes].global.default.bg-hovered` | `#c4cdd5` |

### Feedback color pairs

| Pair | `primary` | `secondary` | `info` | `success` | `warning` | `error` |
| --- | --- | --- | --- | --- | --- | --- |
| `main <-> light` | <div style={{backgroundColor: '#c4cdd5ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#c4cdd5` | <div style={{backgroundColor: '#91e7efff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#91e7ef` | <div style={{backgroundColor: '#91e7efff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#91e7ef` | <div style={{backgroundColor: '#66de77ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#66de77` | <div style={{backgroundColor: '#f8c46dff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#f8c46d` | <div style={{backgroundColor: '#f38a7dff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#f38a7d` |
| `dark <-> light` | <div style={{backgroundColor: '#c4cdd5ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#c4cdd5` | <div style={{backgroundColor: '#91e7efff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#91e7ef` | <div style={{backgroundColor: '#91e7efff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#91e7ef` | <div style={{backgroundColor: '#66de77ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#66de77` | <div style={{backgroundColor: '#f8c46dff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#f8c46d` | <div style={{backgroundColor: '#f38a7dff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#f38a7d` |
| `darker <-> lighter` | <div style={{backgroundColor: '#ecf0f3ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#ecf0f3` | <div style={{backgroundColor: '#dff6f5ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#dff6f5` | <div style={{backgroundColor: '#dff6f5ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#dff6f5` | <div style={{backgroundColor: '#cff9ccff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#cff9cc` | <div style={{backgroundColor: '#fdf0ceff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#fdf0ce` | <div style={{backgroundColor: '#fde0d4ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#fde0d4` |
| `lighter <-> darker` | <div style={{backgroundColor: '#161c24ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#161c24` | <div style={{backgroundColor: '#0a3c73ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#0a3c73` | <div style={{backgroundColor: '#0a3c73ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#0a3c73` | <div style={{backgroundColor: '#024533ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#024533` | <div style={{backgroundColor: '#6f2803ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#6f2803` | <div style={{backgroundColor: '#670730ff', width: '1.25rem', height: '1.25rem', borderRadius: '50%', border: '1px solid rgba(128,128,128,0.35)'}}></div> `#670730` |

:::note[Internal Figma-documentation tokens omitted]
The `[themes]` set also includes a handful of `_local-docs/*` tokens (e.g. layout background/padding for
the Figma file's own documentation page). These are prefixed with an underscore in the source — a
convention for internal/unpublished assets — and aren't part of the product-facing token set, so they're
omitted here.
:::
