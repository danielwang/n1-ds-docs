---
id: voice-and-tones
title: Voice & Tone Writing
description: The six roles nebulaONE's UX and UI guidelines are designed around — for humans and AI.
sidebar_position: 8
hide_title: true
---


# Voice & Tone Writing

## Purpose

N1 helps people across universities use, create, manage, and govern AI. Its users range from students and academic staff to administrators, moderators, executives, and AI engineers.

The language should make a sophisticated AI platform feel understandable and dependable.

N1 writing should reflect the same principles as the product experience:

> **Human first. Clear over clever. Confidence over complexity.**

The interface should help people complete their work without requiring them to understand how AI works behind the scenes. This supports N1's principles of designing around the user's job, reducing cognitive load, explaining AI decisions, and earning trust through predictable experiences.

---

# 1. Our Voice

N1's **voice is consistent** across the product.

It should feel:

### Clear

Use familiar words. Write for understanding, not technical accuracy alone.

**Prefer**

> Choose who can use this agent.

**Avoid**

> Configure agent-level access control permissions.

---

### Calm

N1 manages AI, organisational data, costs, permissions, moderation, and governance. The language should create confidence rather than anxiety.

**Prefer**

> This agent couldn't connect to the file library. Try again.

**Avoid**

> Connection failed! Critical error detected.

---

### Helpful

Tell users what happened and what they can do next.

**Prefer**

> This file can't be added because it exceeds the 50 MB limit. Choose a smaller file and try again.

**Avoid**

> Upload failed.

Errors should teach users what happened, why it happened, and how to recover.

---

### Human

Write for people doing real work.

Avoid language that sounds like system logs, developer documentation, or AI marketing.

**Prefer**

> Ask N1 to summarise this document.

**Avoid**

> Execute LLM summarisation.

---

### Direct

Put the important information first.

**Prefer**

> Your agent is ready to publish.

**Avoid**

> The configuration process has now been successfully completed and your agent may therefore be published.

---

### Trustworthy

Be precise about what N1 knows, does, and controls.

Do not exaggerate AI capability.

**Prefer**

> N1 may make mistakes. Check important information before using it.

**Avoid**

> Get perfect answers instantly.

Trust should come from predictable behaviour, transparency, governance, and clear explanations rather than from confident-sounding claims.

---

# 2. Voice Principles

## Human first, AI second

Start with the user's goal.

Do not make the technology the centre of the sentence unless understanding the technology is necessary.

**Instead of**

> Select an AI model to begin.

**Use**

> What would you like to do?

Or, where capabilities are available:

> Create an image  
> Research a topic  
> Analyse a document

N1 supports multiple AI models, and administrators determine which models are available to users. The experience should therefore focus primarily on the task rather than expecting every user to understand individual models.

---

## Don't make users decode AI

Avoid unnecessary technical terms such as:

- LLM
- inference
- embedding
- vector
- context window
- tokenisation
- system prompt
- temperature

Translate them into the user's language wherever possible.

**Instead of**

> Context window exceeded.

**Use**

> This conversation is too long for the selected model. Start a new chat or remove some earlier content.

Technical terminology is appropriate when the intended user genuinely needs it, such as an AI engineer or administrator configuring advanced settings.

---

## Explain what the system is doing

N1 should not behave mysteriously.

When the system blocks, changes, refuses, validates, or limits an action, explain the reason when it is useful.

**Instead of**

> Action unavailable.

**Use**

> You can't publish this agent yet. Add at least one authorised user or group first.

---

## Give users a clear next step

Messages should help users move forward.

Whenever practical, answer:

**What happened? → Why? → What can I do?**

For example:

> **The file couldn't be uploaded.**  
> This file type isn't supported. Upload a PDF, Word document, or text file instead.

---

## Reveal complexity progressively

Simple language should come first.

Advanced concepts can appear when a user enters an advanced workflow.

A student should not need to understand infrastructure terminology to start a chat. An administrator working with API Access Profiles or Foundry Models can reasonably see more specialised language because those concepts are part of their task. N1 includes both everyday experiences and specialised administrative areas such as Budget, Foundry Models, Audit Logs, Guidelines, Moderation, and API Access Profiles.

---

# 3. Voice Is Consistent. Tone Adapts.

N1 has one voice, but its **tone changes with the situation**.

| Situation | Tone | Example |
|---|---|---|
| Everyday task | Simple and neutral | **Upload a file** |
| Successful action | Positive but restrained | **Agent published** |
| Guidance | Helpful | **Add instructions to help your agent understand what it should do.** |
| Warning | Calm and clear | **Changing this setting will affect everyone in your organisation.** |
| Error | Direct and constructive | **The file couldn't be uploaded. Try again or choose another file.** |
| Destructive action | Serious and explicit | **Delete this agent? This can't be undone.** |
| AI limitation | Transparent | **N1 couldn't find enough information in the selected sources to answer confidently.** |
| Security or governance | Precise | **You don't have permission to change this setting. Contact an administrator if you need access.** |
| Cost-related | Neutral and factual | **This request is estimated to cost $0.08.** |

---

# 4. Write for the Person, Not the Persona Name

N1 serves several distinct audiences: students, academic staff, administrators, moderators, executives, and AI engineers.

The vocabulary can adapt to their work without creating completely different product personalities.

### Student experience

Keep language especially simple and task-focused.

**Use**

> Upload your assignment notes.

> Ask a follow-up question.

> Create an image.

Avoid exposing administration or AI infrastructure concepts unless needed.

---

### Academic staff and agent creators

Use clear language while providing enough context for configuration decisions.

**Use**

> Add instructions that define how this agent should respond.

> Choose the files this agent can use when answering questions.

---

### Administrators

Be concise, precise, and transparent about scope.

Administrators need to know **who or what will be affected**.

**Use**

> This model will no longer be available to users in your organisation.

Rather than:

> Disable model?

---

### Moderators

Use neutral language.

Do not imply that flagged content is automatically a violation.

**Prefer**

> This conversation was flagged for review.

**Avoid**

> This user posted prohibited content.

The moderator should make the judgement when appropriate.

---

### Executives and analytics users

Lead with meaning rather than implementation details.

**Prefer**

> AI usage increased 18% this month.

**Avoid**

> Total inference requests increased 18%.

---

### AI engineers

Technical terminology is acceptable when it improves precision.

Do not simplify technical concepts so far that they become inaccurate.

---

# 5. Write Around Jobs to Be Done

Labels and instructions should describe what people are trying to accomplish.

**Prefer**

> Share this agent

over

> Agent permissions

when the immediate task is sharing.

**Prefer**

> Control AI spending

over

> Token budget configuration

when describing the purpose of a feature.

N1 page descriptions already follow this approach. For example, **Budget** is about setting spending budgets and monitoring costs, while **Foundry Models** is about controlling which models users and agents can access.

---

# 6. Use Plain Language

Use the shortest wording that remains clear.

### Prefer everyday verbs

Use:

- Add
- Remove
- Create
- Edit
- Share
- Publish
- Try again
- Turn on
- Turn off
- Choose
- Review
- Download
- Upload

Avoid unnecessarily formal alternatives such as:

- utilise
- initiate
- terminate
- execute
- facilitate
- modify, when **edit** works
- commence

---

### Prefer active voice

**Use**

> N1 couldn't connect to SharePoint.

**Avoid**

> A connection to SharePoint could not be established.

---

### Address the user directly when useful

**Use**

> You can change this later.

Rather than:

> This setting can be changed at a later time.

But do not overuse **you** when a simple label is enough.

**Button**

> Save changes

not

> Save your changes

---

# 7. Be Concise, but Don't Remove Meaning

Short writing is useful only when it remains understandable.

**Too short**

> Invalid configuration.

**Better**

> This agent needs instructions before you can publish it.

Similarly:

**Too long**

> In order to continue with the publishing operation, you will first need to provide the agent with instructions.

**Better**

> Add instructions before publishing this agent.

---

# 8. Name Things Consistently

Use the same term for the same concept everywhere.

N1 currently uses concepts such as:

- Agents
- File Libraries
- Connections
- Skills
- Moderation
- Agent Brands
- Guidelines
- User Management
- API Access Profiles
- Budget
- Foundry Models
- Audit Logs
- Instance Settings

Do not casually introduce synonyms.

For example, if the product calls something a **File Library**, avoid switching between:

> repository  
> knowledge base  
> document library  
> library

unless they genuinely represent different concepts.

Consistency reduces learning effort and helps users build confidence.

---

# 9. Talk About AI Carefully

## Don't personify AI unnecessarily

N1 can feel conversational without pretending the technology is human.

**Prefer**

> N1 couldn't find an answer in these files.

**Avoid**

> N1 doesn't know what you're talking about.

---

## Don't imply certainty when certainty doesn't exist

**Prefer**

> Based on the available information…

> I couldn't verify this from the selected sources.

> This answer may be incomplete.

**Avoid**

> This is definitely correct.

unless N1 can genuinely establish that certainty.

---

## Explain limitations in useful terms

**Instead of**

> The model reached its context limit.

**Use**

> This conversation is too long for this model. Start a new chat to continue.

---

## Avoid AI hype

Do not use words such as:

- magical
- revolutionary
- flawless
- limitless
- genius
- superhuman

unless they appear in quoted source material.

N1 should demonstrate value through outcomes rather than marketing language.

---

# 10. Model Names Are Supporting Information

N1 is model-agnostic and can expose different models depending on what an organisation's administrator has enabled.

For most users, describe the **capability first** and the model second.

**Prefer**

> **Deep research**  
> Research a topic using multiple sources  
> *Powered by [model]*

rather than:

> **[Model name]**  
> Select this model to perform deep research

Advanced users can still access model information where it helps them make meaningful choices.

---

# 11. Buttons Should Describe the Action

Buttons should tell users what will happen.

### Good

> Create agent

> Publish

> Add files

> Save changes

> Review flagged content

> Remove access

> Delete agent

### Avoid

> OK

> Yes

> Continue

> Confirm

when a more specific action is available.

For confirmations:

> **Delete agent?**  
> This permanently deletes the agent and its configuration. This action can't be undone.

Buttons:

> **Delete agent**  
> **Cancel**

---

# 12. Titles Should Help Users Orient Themselves

Page and section titles should answer:

> Where am I?

Use nouns for destinations:

> Agents  
> File Libraries  
> Budget  
> Audit Logs

Use verbs for tasks or workflows:

> Create an agent  
> Add a connection  
> Review flagged conversation

Avoid decorative titles such as:

> Supercharge your AI journey

when:

> Create an agent

describes the task more clearly.

---

# 13. Descriptions Should Explain Value

Descriptions should explain what users can accomplish, not repeat the title.

**Weak**

> **File Libraries**  
> Manage your file libraries.

**Better**

> **File Libraries**  
> Organise the files and knowledge sources your agents can use when answering questions.

This matches the existing purpose of File Libraries within N1.

---

# 14. Empty States Should Help Users Begin

An empty state should explain:

1. What belongs here.
2. Why it is useful.
3. What the user can do next.

**Example**

> **No agents yet**  
> Create an agent to help people complete common tasks using approved AI, instructions, and knowledge.  
> **Create agent**

Avoid:

> No data.

---

# 15. Success Messages Should Be Quiet

Successful actions are expected behaviour.

Do not celebrate routine actions excessively.

**Prefer**

> Changes saved.

> Agent published.

> File uploaded.

**Avoid**

> 🎉 Amazing! Your settings have been successfully saved!

Use stronger positive feedback only when the user completes a meaningful milestone.

---

# 16. Errors Should Help Recovery

Every useful error should communicate:

### What happened

> The agent couldn't be published.

### Why

> One of its connections is no longer available.

### What to do

> Remove the connection or choose another one, then try again.

Avoid exposing internal codes unless they help technical users or support teams.

Instead of:

> Error 0x80131500

Use:

> We couldn't complete that request. Try again.  
> **Error ID:** 0x80131500

The human-readable explanation comes first.

---

# 17. Warnings Should Describe Consequences

Do not use vague warnings.

**Avoid**

> Are you sure?

**Use**

> **Remove this model?**  
> Users and agents that currently use this model will need to choose another available model.

N1 governance should help people make safe decisions without making ordinary work unnecessarily difficult.

---

# 18. Destructive Actions Need Extra Clarity

Use the exact object and consequence.

**Use**

> **Delete "Student Support Agent"?**  
> This permanently deletes the agent. People will no longer be able to use it. This action can't be undone.

Do not soften destructive actions with vague wording such as:

> Remove item?

---

# 19. Permission Messages Should Explain Access

Avoid treating permissions like unexplained system failures.

**Instead of**

> Forbidden.

**Use**

> You don't have permission to edit this agent.

When useful:

> Ask an N1 administrator for edit access.

---

# 20. Moderation Language Must Remain Neutral

A flag represents a signal for review, not necessarily a final judgement.

**Use**

> Flagged for review

> Possible policy match

> Review conversation

> No action needed

> Take action

Avoid language that presumes wrongdoing before the review is complete.

This is particularly important because N1 includes a dedicated moderation experience for reviewing flagged conversations and determining appropriate actions.

---

# 21. Cost Language Should Be Transparent

Cost is useful information, not a warning by default.

Use neutral language.

**Use**

> Estimated cost: $0.08

> You've used 72% of this month's AI budget.

> At the current rate, this budget may be reached before the end of the month.

Avoid:

> Warning! You're spending too much on AI.

N1's Budget experience is designed to help organisations set budgets and understand AI expenditure.

---

# 22. Notifications Should Lead With Meaning

A notification should quickly communicate:

**What changed → Why it matters → What to do, if anything**

### Chat user

> **Agent updated**  
> Research Assistant now has access to two additional file libraries.

### Agent creator

> **Your agent needs attention**  
> One of Research Assistant's connections is no longer available.  
> **Review agent**

### Administrator

> **Budget nearing its limit**  
> Your organisation has used 85% of its monthly AI budget.  
> **View budget**

### Moderator

> **3 conversations need review**  
> New conversations were flagged by your organisation's moderation rules.  
> **Review conversations**

Do not make every notification sound urgent.

---

# 23. Write Accessibly

Accessibility is part of N1's product quality, not an optional writing layer.

### Don't rely on colour

Avoid:

> Fix the fields highlighted in red.

Use:

> Enter a name for the agent.

---

### Write meaningful links

Avoid:

> Click here

Use:

> View audit log

---

### Avoid directional language when possible

Avoid:

> Select the button on the right.

Use:

> Select **Save changes**.

---

### Keep instructions scannable

Break complex tasks into clear steps rather than long paragraphs.

---

# 24. Capitalisation

Use **sentence case** across the interface.

### Use

> Create an agent

> Instance settings

> Save changes

### Avoid

> Create An Agent

> Instance Settings

> Save Changes

Proper nouns and established N1 feature names can retain their official capitalisation where required.

---

# 25. Punctuation

Keep UI punctuation light.

### Buttons

No full stop.

> Save changes

### Page titles

No full stop.

> Agent settings

### Descriptions

Use full sentences and punctuation.

> Choose which users and groups can access this agent.

### Tooltips

Use complete sentences when the tooltip explains something.

> Users can only access models enabled by an administrator.

---

# 26. Numbers and Dates

Make numbers easy to scan.

**Use**

> 1,250 users

> 85%

> $42.18

Use the user's locale for dates, times, currency, and number formatting wherever N1 supports localisation.

When relative dates may become ambiguous, show the actual date.

**Useful**

> Updated 3 hours ago

**Useful for audit records**

> 18 Aug 2026, 2:34 pm

---

# 27. Recommended N1 Vocabulary

| Prefer | Avoid when possible |
|---|---|
| AI | artificial intelligence technology |
| Agent | bot / chatbot |
| Create | instantiate |
| Use | utilise |
| Choose | select from available options |
| Instructions | system prompt |
| Files | data assets |
| Connection | integration endpoint |
| Available models | deployed model inventory |
| AI usage | inference consumption |
| Cost | token expenditure |
| Couldn't | failed to, when human language is clearer |
| Turn on / Turn off | enable / disable for everyday users |
| Enable / Disable | acceptable in administrator settings |
| People / users | end users |
| Organisation | tenant, except in technical contexts |

---

# 28. A Simple Writing Test

Before shipping any piece of N1 copy, ask:

### Is it human?

Would a student, lecturer, or administrator naturally understand it?

### Is it clear?

Can someone understand it on the first read?

### Is it necessary?

Does every sentence help the user?

### Is it actionable?

Does the user know what they can do next?

### Is it transparent?

Does the language explain important AI, governance, cost, or system behaviour?

### Is it calm?

Does the tone match the seriousness of the situation without creating unnecessary alarm?

### Is it consistent?

Does it use established N1 terminology and patterns?

### Does it build confidence?

Does the user understand what happened and feel in control?

---

# N1 Writing in One Sentence

> **Write like a knowledgeable university colleague: clear enough for someone new to AI, precise enough to earn an administrator's trust, and helpful enough to keep people moving.**

The goal is not to make N1 *sound intelligent*.

The goal is to make people **feel capable when using it**.
