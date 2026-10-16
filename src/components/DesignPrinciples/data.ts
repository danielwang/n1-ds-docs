/**
 * Source content: "Cloudforce + nebulaONE — Design Principles" (v1, Sep
 * 2026). Universal principles govern how Cloudforce thinks and decides;
 * product principles govern how nebulaONE behaves.
 */

export interface Principle {
  number: number;
  title: string;
  kicker: string;
  body: string;
}

export const philosophyPillars: Array<{title: string; body: string}> = [
  {
    title: 'Understand before building',
    body: 'Real context, real constraints, real motivations — not assumptions about them.',
  },
  {
    title: 'Validate continuously',
    body: 'Learning does not end at discovery. It runs through delivery and beyond release.',
  },
  {
    title: 'Protect human agency',
    body: 'People stay informed, in control, and able to change their mind.',
  },
];

export const universalPrinciples: Principle[] = [
  {
    number: 1,
    title: 'Start With Human Needs',
    kicker: 'Understand the person and their real work before proposing a solution.',
    body: 'Requirements describe what someone asked for. Needs describe what they are trying to accomplish, under what pressure, with what constraints. We invest in understanding context, role, environment, expertise, and consequence of failure before deciding what to build.',
  },
  {
    number: 2,
    title: 'Learn Continuously, Decide With Evidence',
    kicker: 'Confidence comes from validation, not from conviction.',
    body: 'We put work in front of real users early, measure what happens, and change course when the evidence says so. Research, testing, telemetry, and feedback are ongoing obligations across the life of a product, not a gate we pass through once.',
  },
  {
    number: 3,
    title: 'Be Radically Transparent',
    kicker: 'People deserve to know what is happening, what it costs, and why.',
    body: 'Systems explain themselves in plain language: what ran, what data was used, what it consumed in cost and energy, and what happens next. We surface uncertainty rather than hide it. Transparency is how trust is earned and how agency is preserved.',
  },
  {
    number: 4,
    title: 'Inclusion Is the Baseline',
    kicker: 'Accessibility is a quality standard, not a feature request.',
    body: 'Every experience supports differences in ability, device, language, bandwidth, culture, and technical confidence. Excluding someone is a defect. We design for the widest reasonable range of people from the start, because retrofitting inclusion never fully works.',
  },
  {
    number: 5,
    title: 'Own the Whole Experience',
    kicker: 'The product is only part of what someone experiences.',
    body: 'Onboarding, support, documentation, communication, implementation, pricing, and handoffs between people and systems all shape how our work feels. We take responsibility for the full arc, including the unintended consequences of what we ship.',
  },
];

export const productPrinciples: Principle[] = [
  {
    number: 1,
    title: 'Design for Real Work',
    kicker: 'People come to nebulaONE to accomplish something, not to learn AI.',
    body: 'Workflows are built to minimize effort and maximize progress toward the user\u2019s actual goal. The technology stays in the background. Sophistication is something the user benefits from, not something they have to operate.',
  },
  {
    number: 2,
    title: 'Reduce Before You Add',
    kicker: 'Simplicity is achieved through thoughtful subtraction.',
    body: 'The first question about any new element is whether something can be removed instead. Fewer choices, fewer surfaces, fewer decisions. Every addition raises the cost of everything already there, so additions must earn their place against removal.',
  },
  {
    number: 3,
    title: 'Reveal Complexity Progressively',
    kicker: 'Start simple. Deepen as the user\u2019s need deepens.',
    body: 'The first experience helps someone succeed at the common task with confidence. Advanced controls, configuration, and power emerge as they become relevant to the user\u2019s role, goals, and expertise — never all at once, and never before it means something.',
  },
  {
    number: 4,
    title: 'Guide Attention With Hierarchy',
    kicker: 'Clarity is a design decision, not a byproduct.',
    body: 'Layout, typography, spacing, and color establish what matters most on every surface. Users should be able to scan, understand, and act without effort. If everything is emphasized, nothing is.',
  },
  {
    number: 5,
    title: 'Make Exploration Safe',
    kicker: 'Confidence comes from knowing mistakes are recoverable.',
    body: 'Undo, redo, version history, previews, and clear escape routes wherever practical. Destructive and irreversible actions are rare, obvious, and deliberate. People should never be afraid to try something in our product.',
  },
  {
    number: 6,
    title: 'Make Governance Actionable',
    kicker: 'Oversight should produce decisions, not inspection work.',
    body: 'Administrators see what is compliant, what needs attention, and what to do about it without auditing item by item. Governance data is presented as guidance with a next step, never as a report the human has to interpret alone.',
  },
  {
    number: 7,
    title: 'Borrow Wisely, Never Blindly',
    kicker: 'Popular is not the same as good.',
    body: 'Familiar patterns lower the cost of learning, so we use them deliberately. But we interrogate every convention we inherit: is this actually clear, actually pleasant, actually right for this user? We never copy a pattern simply because a well-known product uses it.',
  },
  {
    number: 8,
    title: 'The Customer Is Not Always Right',
    kicker: 'We serve the end user, even when the buyer asks otherwise.',
    body: 'Our requests often come from admins and executives who will never use the feature daily. We take those requests seriously, then trace them back to the underlying need and design for the person actually doing the work. Saying no with a better answer attached is part of the job.',
  },
];
