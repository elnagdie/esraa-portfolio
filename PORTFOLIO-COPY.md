# Esraa Elnagdi — Portfolio Copy

All text content from the live portfolio at https://esraa-elnagdi-portfolio.netlify.app

---

## NAVIGATION

- E.E. | The Lab
- Field Notes
- Experiments
- Side Lab
- Inquire

---

## HERO

**Label:** Field Researcher — Product, Growth & GTM

**Name:** Esraa Elnagdi

**Headline:** Biochemist turned product builder.

**Subheadline:** I run experiments that grow businesses.

**Bio:** I studied Biochemistry at the University of Toronto — not for the career path, but for the way of thinking. Hypothesize. Test. Follow the evidence. Think in systems. I've been applying that scientific method to product strategy, go-to-market, and growth ever since.

**Buttons:** View Experiments | The Full Story

**Metrics:**
- 8+ yrs — in product & GTM
- 750+ — companies on platforms I've launched
- 98% — reduction in creation time
- 19% — engagement lift from my last experiment

---

## FIELD NOTES — The Origin Story

I've always been a translator.

As a teenager and newcomer to Canada, I translated for my mom at doctor's appointments, turning medical jargon into decisions we could act on. That instinct never left.

I studied Biochemistry at the University of Toronto. I loved it not for the career path, but for the way of thinking. Form hypotheses. Test them. Follow the evidence. Think in systems. I led research and co-authored a published paper, translating questions into experiments and experiments into findings.

My first job in tech was answering phones at a call centre at Propel Holdings. I talked to customers all day, hearing their bugs, feature requests, and what they wished the product could do. I got curious about the online application flow and customer dashboard I was helping them navigate every day. I understood the customer web experience inside out, which earned me a move to Business Analyst, then Scrum Master leading a team of 8 engineers.

That's been my pattern ever since: start with the customer, understand the system, then translate complexity into something people can actually use.

At Altus Group, I was the Product Owner on a commercial real estate data platform, and with no PMM function, I built that too. I interviewed customers, developed segmented positioning for three buyer personas, created 30+ help articles, and trained Sales on persona-specific selling. The platform grew from 0 to 750+ companies and 8,000+ users.

At Yelp, I learned the power of experimentation, partnering with Data Science to build predictive models and running A/B tests that drove a 19% engagement lift.

At MasterClass, I brought it all together: leading cross-functional teams of 10+, shipping enterprise learning programs with completion rates 4x the existing product, building an internal tool that cut content curation by 98%, developing GTM strategy, and beating revenue targets by 10% YoY.

I've translated across languages, industries, and audiences. From Arabic to English, from biochemistry labs to engineering sprints, from technical complexity to business outcomes. I'm a first-generation Canadian, Egyptian by origin, fluent in Arabic and English. I lead with active listening and empathy. I thrive in the space between chaos and clarity, building the systems that turn one into the other.

### Lab Profile — The Planner / Translator
PRIOS Assessment, 2025

**Traits:**
- Systematic: 92%
- Driven: 89%
- Logical: 82%
- Visionary: 75%
- Empathetic: 60%

**Languages:** English, Arabic

**Trained In:**
- Biochemistry (HBSc, UofT)
- Advanced Product Management (Product Faculty)
- Pragmatic Institute, PMC Level I

**Product & Analytics:**
Jira, Figma, Miro, Amplitude, Google Analytics, Looker

**AI & Automation:**
Claude Code, Lovable, n8n

**Companies I've Worked With:**
MasterClass, Yelp, Altus Group, Propel Holdings

---

## EXPERIMENTS — Hypothesize. Test. Ship. Measure.

Each project started with a question. Here's what I found.

---

### EXP-001 | MasterClass
**Can a consumer brand sell structured learning to enterprises?**

Product Manager | 2023–2024
Tags: PM, GTM, CROSS-FUNCTIONAL, 0→1

**Hero Metric:** 47% higher NPS than existing product

**Hypothesis:** Enterprise buyers would adopt guided learning if positioned around career outcomes — not celebrity appeal.

**The Problem:**
MasterClass at Work had a content library problem disguised as a retention crisis. L&D admins had access to celebrity-led video content but didn't know what to assign, to whom, or how to structure it into learning programs. CS was spending hours per client manually curating content — a model that didn't scale.

**Method:**

**Discovery:** Synthesized CS feedback, sales call recordings, and a UXR study with 10 L&D professionals. Found three root problems: admins didn't know what to assign, spent too long assembling content, and lacked awareness of existing tools.

**Build approach:** Evaluated four options (2–26 weeks effort range), recommended a landing page approach that shipped in 8 weeks while preserving existing infrastructure. Principle: time-box investment until we have conviction of value.

**Scoping:** Defined P0/P1/P2 priorities. Deliberately descoped features stakeholders wanted (drip emails, badging) because they'd add 4+ weeks without validating the core concept.

**Execution:** Led a 15-person cross-functional pod across Product, Engineering, Content, Creative, Marketing, Sales Enablement, and CS. Resolved a CS-vs-Content tension by reframing around the user need rather than picking sides. Managed coverage when two key team members went on leave mid-project. Zero escalations to leadership.

**Phased GTM:** Pre-launched at an industry conference with a prototype demo before the product existed. Soft-launched over summer with staggered releases. Hard-launched in fall when buyers returned — with 6–8 weeks of live data already informing positioning.

**Feedback engine:** Built four-layer post-launch measurement: product analytics, passive sales call tracking (auto-flagged mentions), structured qualitative feedback from CS/Sales, and module-level effectiveness surveys. Synthesized into 30-day and 90-day Product Reviews with clear invest/hold/pivot recommendations.

**Results:**
- 47% — NPS — higher than existing product
- 50–60% — Module completion (vs. ~14% for prior content)
- $M+ — Multi-million dollar enterprise pipeline influenced
- ~50% — Sales calls mentioning Programs
- +51% — Increase in weekly active admins
- 60% — Engaged admins had been inactive in prior months
- 143% — OKR exceeded — beat quarterly revenue target

**Key Finding:**
The celebrity brand got meetings. Outcome-focused positioning closed deals. The biggest unlock wasn't the product — it was the systems around it: phased GTM, passive sales tracking, and multi-source feedback loops that built conviction before going broad.

---

### EXP-002 | MasterClass
**Can you eliminate engineering dependency from a content workflow?**

Product Manager | Q4 2023–Q2 2024
Tags: PM, TPM, INTERNAL TOOLING, OPS

**Hero Metric:** 98% reduction in creation time

**Hypothesis:** A self-service tool would unlock CSM autonomy and drive higher engagement than manual processes.

**The Problem:**
CSMs were curating custom learning playlists for enterprise clients. Each playlist took 4–5 hours — hunting through spreadsheets for video IDs across multiple systems, then submitting to Engineering to run a script. Every creation and edit required Eng support.

CSMs were afraid of the existing admin tool — no guardrails, no validation, real risk of breaking things. A previous attempt to solve this with documentation failed: 1 out of 6 CSMs adopted it. The problem was the tool, not the training.

**Method:**

**Options analysis:** Evaluated three approaches at a formal Product Review. Enhancing ingestion sheets still required Eng. Enhancing the admin tool was "an uphill fight" with worse UX. Building a dedicated creator in the admin platform was the clear winner — and architecturally close to eventually being customer-facing.

**Fear-first design:** The core UX insight was that CSMs were afraid of breaking things. Every design decision addressed this: a two-phase publishing workflow (publish to internal demo account first, then to client), validation modals showing exactly what's missing, double-confirm on edits to published playlists, and a CSM-scoped role that hid dangerous permissions.

**Delivery under constraints:** One of five concurrent initiatives. Shared FE resources with a partnership that had a non-negotiable deadline. Accepted the constraint, adjusted timeline, and overlapped UAT with test engineering when FE fell behind — rather than cutting scope.

**Chaos testing:** Ran deliberate break-the-tool sessions before launch. Caught 14 bugs including critical ones (publishing with no lessons, instructors not updating on removal). All critical bugs resolved before launch.

**Brand quality:** Authored a Creative Brief for 40 brand-approved assets across 10 skill categories — not in my job description, but without it CSMs would have shipped off-brand thumbnails.

**Enablement:** Wrote a comprehensive guide with screen recordings, content rights restrictions, and the two-phase publishing workflow. Set up feedback channels, peer-review process, and ongoing CSM syncs.

**Results:**
- 98% — Creation time reduction (4–5 hours → under 5 minutes)
- #1 — Highest 30D/90D engagement of all enterprise content types
- Top — NPS — higher than both existing playlists and Programs
- 100% — CSM team self-sufficient from day one
- 50%+ — Consumers were admin-assigned (intentional learning)
- 14 — Pre-launch bugs caught, all critical issues resolved

**Key Finding:**
The best internal tools eliminate fear, not just friction. Two-phase publishing, validation modals, scoped permissions, and peer review all addressed one root issue: CSMs were afraid of breaking things. The failed documentation attempt proved the problem was never training — it was the tool. Once fear was removed, adoption was instant.

---

### EXP-003 | Altus Group
**Can segmented positioning unlock a fragmented market?**

Senior Product Owner (de facto PMM) | 2019–2022
Tags: PMM, GTM, POSITIONING, SALES ENABLEMENT

**Hero Metric:** 750+ companies adopted

**Hypothesis:** Speaking differently to each buyer segment would drive adoption against entrenched competitors.

**The Problem:**
Altus Group was building a unified CRE data platform to replace two aging, siloed legacy systems. The market was dominated by entrenched players. The platform needed to serve fundamentally different buyers — valuators, brokers, and developers — each with different workflows and definitions of "valuable."

There was no product marketing function. The gap between what we built and what the field could articulate grew with every release.

**Method:**

**Customer research:** Conducted 15 interviews across four personas using an unbiased framework I designed. One session uncovered seven distinct pain points — including that users relied on search 90% of the time and the map only 10%, directly reshaping engineering priorities.

**Usage analysis:** Analyzed 12 months of legacy platform data (17,000+ page views) to build a prioritization map grounded in actual behavior, not stakeholder opinions.

**Three positioning strategies:** Developed distinct value propositions for valuators (historical data depth), CRE professionals (market intelligence), and developers (economic forecasting). Refined based on Sales feedback — they flagged that "comprehensive" mattered less to builders than "forecasting."

**GTM engine:** Operated as de facto PMM, building three systems. First, a product marketing brief template for every release — Marketing could draft communications without deep product knowledge. Second, one-page competitive battlecards in "If they say / You say" format, objection handlers, and persona-specific demo scripts. Third, 30+ help articles and 10 tutorial videos reducing support burden and improving time-to-value.

**Release sequencing:** Organized releases around use-case completion, not feature shipping. Each release fully served a user segment so Sales could migrate clients with confidence. Built company-level adoption dashboards and flagged at-risk accounts to CS with specific context.

**Quality:** Personally QA'd 15+ calculated metrics (vacancy rates, rental rates) against legacy definitions. One miscalculated number would have destroyed trust with professional users.

**Results:**
- 750+ — Companies on platform (0 → 750+ in 3 years)
- 8,000+ — Active users
- +ARR — Meaningful increase in annual recurring revenue
- +15% — Feature adoption through education and enablement
- +40% — Sales confidence in competitive deals
- 100% — Battlecard usage by reps (vs. <10% for prior materials)
- -20% — Fewer repetitive support inquiries

**Key Finding:**
One message for all buyers means no message resonates deeply with anyone. Segmented positioning worked because it was paired with practical enablement — one-page battlecards Sales actually used, objection handlers grounded in real conversations, and content that helped customers get to value faster. Operating as the bridge between Product, Sales, Marketing, and CS created compounding growth.

---

### EXP-004 | Yelp
**What actually drives long-term business owner engagement?**

Product Manager | 2022–2023
Tags: PM, GROWTH, EXPERIMENTATION, DATA SCIENCE

**Hero Metric:** 19% engagement lift

**Hypothesis:** Engagement behaviors — not profile completion — predict business owner success.

**The Problem:**
Yelp for Business had flat WAU growth. The team assumed onboarding was the bottleneck — get business owners to complete setup, and engagement follows. Meanwhile, a recently launched recommendations feature was underperforming despite working well technically.

**Method:**

**Predictive modeling:** Partnered with Data Science to build models identifying success predictors for business owners. Used Poisson regression with confounding variable controls. The result contradicted the team's core assumption: responding to reviews created a 2.76x pageview multiplier and responding to messages created 2.28x — but setup completion was NOT a significant predictor of long-term engagement.

**Onboarding A/B testing:** Despite setup not being the primary driver, the flow still had 40% drop-off. Tested three variants across 5,000 users each. The winner: reordering steps so users saw value before being asked to pay. Combined best elements from multiple variants and iterated across all platforms to achieve +10% setup rate improvement.

**Messaging experimentation:** The recommendations feature was underperforming due to positioning, not product quality. Tested three messaging approaches with 10,000 users each. Functional messaging ("You have 3 actions"): low engagement. Value messaging ("Respond faster to attract customers"): moderate. ROI messaging ("Businesses that do this get 20% more messages"): 4x the action rate of functional. Repositioned the entire feature around data-driven business improvement.

**Opportunity sizing:** Identified a large pool of dormant business owners visiting the consumer site but not engaging with their business profiles. Launched a feature targeting them, generating statistically significant increases in engagement. Built self-service dashboards and a 1-year roadmap targeting 10% WAU growth.

**Results:**
- +19% — Recommendations engagement (exceeded target)
- +10% — Onboarding completion across all platforms
- +10% — WAU growth (met annual target)
- +15% — Homepage engagement across combined initiatives
- +49–51% — Relative CTR improvement on mobile
- 4x — Action rate — ROI messaging vs. functional
- 2.76x — Pageview multiplier for review responders

**Key Finding:**
The predictive model told a completely different story than our assumptions. Setup didn't predict success — engagement behaviors did. That single insight shifted the entire team's strategy. And the messaging test proved positioning matters as much as product: same feature, better framing, 4x the results.

---

## SIDE EXPERIMENTS — After-Hours Lab Work

Not every experiment happens in the office. I also code with AI, create content, and build things for fun.

- Duck Hunt Game [Live] — A browser-based duck hunt game. Built with Claude Code for fun.
- Toronto Tech Map [In Progress] — Interactive data visualization of Toronto's startup ecosystem.
- Trivia Engine [In Progress] — A reusable trivia game engine. First editions: Stranger Things & Harry Potter.
- AI Search Tool [In Progress] — Natural language search across 116 product leader interviews from Behind the Craft.

---

## FIELD DISPATCHES — Building in Public

I create content about AI, the future of work, and career growth — because I learn best by building and sharing. Follow along:

- TikTok — @esraacreates — AI tutorials, career advice, vlogs
- MISHKA — shopmishka.com — My physical product brand for Muslim women on the go

---

## INQUIRE — Ready to run an experiment together?

I'm currently exploring Senior PM, PMM, and TPM opportunities at ambitious companies. Let's see if there's a fit.

- Email: esraa.y.elnagdi@gmail.com
- LinkedIn: linkedin.com/in/esraa-elnagdi
- GitHub: github.com/elnagdie

---

(c) 2026 Esraa Elnagdi
Built with curiosity and Claude Code.
