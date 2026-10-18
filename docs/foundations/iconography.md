---
id: iconography
title: Iconography
description: Human-centered design principles for Cloudforce and nebulaONE — guidance for humans and AI.
sidebar_position: 5
hide_title: false
---

## Overview

N1 uses a consistent visual language to create a familiar, accessible, and cohesive experience across the product.

Two visual libraries form the foundation of N1's iconography and illustrations:

- **Icons:** [Solar Icons](https://icon-sets.iconify.design/solar/)
- **Illustrations:** [unDraw](https://undraw.co/illustrations)

These libraries should be the default sources for visual assets across ONEchat, agent experiences, and administration interfaces.

## 1. Icons

### Official icon library

**Solar Icons**, available through Iconify, is the standard icon library for N1.

**Reference:** https://icon-sets.iconify.design/solar/

Solar provides a consistent visual style suitable for navigation, actions, controls, status indicators, and other interface elements.

### Usage guidelines

- **Consistency:** Use Solar icons throughout the product. Avoid mixing different icon libraries.
- **Style:** Prefer the `Linear` variant for standard UI elements. Use other variants only when they communicate a meaningful difference.
- **Sizing:** Use consistent sizes based on the component and context. Recommended sizes are 16px, 20px, and 24px.
- **Colour:** Use N1 design tokens rather than hardcoded colours.
- **Meaning:** Choose icons based on familiar user expectations. Avoid abstract or ambiguous metaphors.
- **Accessibility:** Provide accessible names for interactive icon-only controls. Decorative icons should be hidden from assistive technologies.

### Recommended usage

| Context | Guideline |
|---|---|
| Navigation | Use recognisable icons with a consistent style and size. |
| Buttons | Use icons to reinforce actions, not replace clear labels. |
| Toolbars | Use compact icons with accessible labels or tooltips. |
| Status indicators | Pair icons with text or other contextual information. |
| Empty states | Use simple icons when a full illustration is unnecessary. |
| Selected states | Use colour, background, or another visible treatment to indicate selection. |

### Implementation

Use Iconify's Solar collection in frontend applications.

Example using Iconify for React:

```jsx
import { Icon } from '@iconify/react';

<Icon icon="solar:settings-linear" width={20} />
<Icon icon="solar:magnifer-linear" width={20} />
<Icon icon="solar:trash-bin-trash-linear" width={20} />
```

Use design tokens to control icon colours, and avoid embedding fixed colour values.

## 2. Illustrations

### Official illustration library

**unDraw** is the standard illustration library for N1.

**Reference:** https://undraw.co/illustrations

unDraw provides a cohesive illustration style that helps make the product feel approachable and human.

Illustrations should support understanding and create a welcoming experience without distracting users from their tasks.

### Usage guidelines

- **Consistency:** Use unDraw as the default illustration source.
- **Purpose:** Every illustration should support the content or user experience.
- **Colour:** Apply N1 brand colours where supported by the illustration asset.
- **Simplicity:** Prefer clean compositions with minimal visual complexity.
- **Accessibility:** Use meaningful alternative text when an illustration communicates information. Use empty alternative text for purely decorative illustrations.
- **Responsiveness:** Ensure illustrations scale appropriately across screen sizes without distortion.

### Recommended usage

| Context | Guideline |
|---|---|
| Empty states | Help users understand the situation and what to do next. |
| Onboarding | Introduce features and concepts in a friendly, approachable way. |
| Welcome screens | Create a positive first impression without overwhelming the interface. |
| Success states | Reinforce meaningful achievements or completed milestones. |
| Feature introductions | Help explain unfamiliar concepts or capabilities. |
| Error states | Use sparingly. Prioritise clear explanations and recovery actions. |

### Illustration principles

**Purpose before decoration**

Illustrations should communicate meaning or improve the experience. Avoid adding them simply to fill empty space.

**Keep the interface focused**

Illustrations should support the content hierarchy. They must not compete with primary actions or important information.

**Create a cohesive visual identity**

Use consistent illustration styles, proportions, and brand colour treatments across the product.

**Respect the context**

Use illustrations in welcoming and educational moments. Avoid playful illustrations in serious situations involving security, permissions, moderation, or critical errors.

## 3. Icons vs. Illustrations

Use the appropriate visual asset based on the user's task.

| Icons | Illustrations |
|---|---|
| Represent actions and functions | Communicate concepts and situations |
| Support navigation and controls | Support onboarding and empty states |
| Small and functional | Larger and expressive |
| Frequently repeated | Used selectively |
| Optimised for quick recognition | Optimised for understanding and engagement |

**General rule:** Use icons for interaction and illustrations for communication.

## 4. AI-Assisted Design & Development

When AI tools generate or modify N1 interfaces, they must follow these visual asset standards.

### Instructions for AI coding agents

1. Use **Solar Icons from Iconify** for all standard interface icons.
2. Use **unDraw** as the default source for illustrations.
3. Do not introduce alternative icon or illustration libraries without explicit approval.
4. Prefer Solar's `Linear` icon variants unless another variant is specified.
5. Apply N1 design tokens for icon colours and visual styling.
6. Maintain consistent icon sizing, alignment, and visual weight.
7. Ensure icons and illustrations meet accessibility requirements.
8. Do not invent unverified icon names or illustration asset paths. Check that each asset exists before using it.
9. Do not substitute emoji for standard UI icons.
10. Check asset licensing and attribution requirements before distributing illustrations or bundling assets.

## 5. Quality Checklist

Before delivering an interface, confirm that:

- [ ] All standard UI icons come from Solar.
- [ ] Icon variants and sizes are consistent.
- [ ] Icon colours use design tokens.
- [ ] Icon-only interactive controls have accessible names.
- [ ] Illustrations use unDraw or an approved exception.
- [ ] Illustrations have a clear purpose.
- [ ] Illustrations do not compete with primary content.
- [ ] Visual assets work in supported responsive layouts and themes.
- [ ] Asset licensing requirements have been reviewed.

---

## Design System References

**Solar Icons — Iconify**  
https://icon-sets.iconify.design/solar/

**unDraw Illustrations**  
https://undraw.co/illustrations/

These sources establish the default visual asset standards for N1. Any exceptions should be documented and reviewed to preserve consistency across the product.