export const experiments = [
  {
    id: '001',
    number: 'EXP-001',
    company: 'MasterClass',
    title: 'Can a consumer brand sell structured learning to enterprises?',
    hypothesis: 'Enterprise buyers would adopt guided learning if positioned around career outcomes — not celebrity appeal.',
    keyMetric: '47%',
    keyMetricLabel: 'higher NPS than existing product',
    tags: ['PM', 'GTM', 'CROSS-FUNCTIONAL', '0→1'],
    role: 'Product Manager',
    timeline: '2023–2024',
    problem:
      'MasterClass at Work had a content library problem disguised as a retention crisis. L&D admins had access to celebrity-led video content but didn\'t know what to assign, to whom, or how to structure it into learning programs. CS was spending hours per client manually curating content — a model that didn\'t scale.',
    method: [
      {
        phase: 'Discovery',
        content:
          'Synthesized CS feedback, sales call recordings, and a UXR study with 10 L&D professionals. Found three root problems: admins didn\'t know what to assign, spent too long assembling content, and lacked awareness of existing tools.',
      },
      {
        phase: 'Build approach',
        content:
          'Evaluated four options (2–26 weeks effort range), recommended a landing page approach that shipped in 8 weeks while preserving existing infrastructure. Principle: time-box investment until we have conviction of value.',
      },
      {
        phase: 'Scoping',
        content:
          'Defined P0/P1/P2 priorities. Deliberately descoped features stakeholders wanted (drip emails, badging) because they\'d add 4+ weeks without validating the core concept.',
      },
      {
        phase: 'Execution',
        content:
          'Led a 15-person cross-functional pod across Product, Engineering, Content, Creative, Marketing, Sales Enablement, and CS. Resolved a CS-vs-Content tension by reframing around the user need rather than picking sides. Managed coverage when two key team members went on leave mid-project. Zero escalations to leadership.',
      },
      {
        phase: 'Phased GTM',
        content:
          'Pre-launched at an industry conference with a prototype demo before the product existed. Soft-launched over summer with staggered releases. Hard-launched in fall when buyers returned — with 6–8 weeks of live data already informing positioning.',
      },
      {
        phase: 'Feedback engine',
        content:
          'Built four-layer post-launch measurement: product analytics, passive sales call tracking (auto-flagged mentions), structured qualitative feedback from CS/Sales, and module-level effectiveness surveys. Synthesized into 30-day and 90-day Product Reviews with clear invest/hold/pivot recommendations.',
      },
    ],
    results: [
      { metric: '47%', label: 'NPS — higher than existing product' },
      { metric: '50–60%', label: 'Module completion (vs. ~14% for prior content)' },
      { metric: '$M+', label: 'Multi-million dollar enterprise pipeline influenced' },
      { metric: '~50%', label: 'Sales calls mentioning Programs' },
      { metric: '+51%', label: 'Increase in weekly active admins' },
      { metric: '60%', label: 'Engaged admins had been inactive in prior months' },
      { metric: '143%', label: 'OKR exceeded — beat quarterly revenue target' },
    ],
    keyFinding:
      'The celebrity brand got meetings. Outcome-focused positioning closed deals. The biggest unlock wasn\'t the product — it was the systems around it: phased GTM, passive sales tracking, and multi-source feedback loops that built conviction before going broad.',
  },
  {
    id: '002',
    number: 'EXP-002',
    company: 'MasterClass',
    title: 'Can you eliminate engineering dependency from a content workflow?',
    hypothesis: 'A self-service tool would unlock CSM autonomy and drive higher engagement than manual processes.',
    keyMetric: '98%',
    keyMetricLabel: 'reduction in creation time',
    tags: ['PM', 'TPM', 'INTERNAL TOOLING', 'OPS'],
    role: 'Product Manager',
    timeline: 'Q4 2023–Q2 2024',
    problem:
      'CSMs were curating custom learning playlists for enterprise clients. Each playlist took 4–5 hours — hunting through spreadsheets for video IDs across multiple systems, then submitting to Engineering to run a script. Every creation and edit required Eng support.\n\nCSMs were afraid of the existing admin tool — no guardrails, no validation, real risk of breaking things. A previous attempt to solve this with documentation failed: 1 out of 6 CSMs adopted it. The problem was the tool, not the training.',
    method: [
      {
        phase: 'Options analysis',
        content:
          'Evaluated three approaches at a formal Product Review. Enhancing ingestion sheets still required Eng. Enhancing the admin tool was "an uphill fight" with worse UX. Building a dedicated creator in the admin platform was the clear winner — and architecturally close to eventually being customer-facing.',
      },
      {
        phase: 'Fear-first design',
        content:
          'The core UX insight was that CSMs were afraid of breaking things. Every design decision addressed this: a two-phase publishing workflow (publish to internal demo account first, then to client), validation modals showing exactly what\'s missing, double-confirm on edits to published playlists, and a CSM-scoped role that hid dangerous permissions.',
      },
      {
        phase: 'Delivery under constraints',
        content:
          'One of five concurrent initiatives. Shared FE resources with a partnership that had a non-negotiable deadline. Accepted the constraint, adjusted timeline, and overlapped UAT with test engineering when FE fell behind — rather than cutting scope.',
      },
      {
        phase: 'Chaos testing',
        content:
          'Ran deliberate break-the-tool sessions before launch. Caught 14 bugs including critical ones (publishing with no lessons, instructors not updating on removal). All critical bugs resolved before launch.',
      },
      {
        phase: 'Brand quality',
        content:
          'Authored a Creative Brief for 40 brand-approved assets across 10 skill categories — not in my job description, but without it CSMs would have shipped off-brand thumbnails.',
      },
      {
        phase: 'Enablement',
        content:
          'Wrote a comprehensive guide with screen recordings, content rights restrictions, and the two-phase publishing workflow. Set up feedback channels, peer-review process, and ongoing CSM syncs.',
      },
    ],
    results: [
      { metric: '98%', label: 'Creation time reduction (4–5 hours → under 5 minutes)' },
      { metric: '#1', label: 'Highest 30D/90D engagement of all enterprise content types' },
      { metric: 'Top', label: 'NPS — higher than both existing playlists and Programs' },
      { metric: '100%', label: 'CSM team self-sufficient from day one' },
      { metric: '50%+', label: 'Consumers were admin-assigned (intentional learning)' },
      { metric: '14', label: 'Pre-launch bugs caught, all critical issues resolved' },
    ],
    keyFinding:
      'The best internal tools eliminate fear, not just friction. Two-phase publishing, validation modals, scoped permissions, and peer review all addressed one root issue: CSMs were afraid of breaking things. The failed documentation attempt proved the problem was never training — it was the tool. Once fear was removed, adoption was instant.',
  },
  {
    id: '003',
    number: 'EXP-003',
    company: 'Altus Group',
    title: 'Can segmented positioning unlock a fragmented market?',
    hypothesis: 'Speaking differently to each buyer segment would drive adoption against entrenched competitors.',
    keyMetric: '750+',
    keyMetricLabel: 'companies adopted',
    tags: ['PMM', 'GTM', 'POSITIONING', 'SALES ENABLEMENT'],
    role: 'Senior Product Owner (de facto PMM)',
    timeline: '2019–2022',
    problem:
      'Altus Group was building a unified CRE data platform to replace two aging, siloed legacy systems. The market was dominated by entrenched players. The platform needed to serve fundamentally different buyers — valuators, brokers, and developers — each with different workflows and definitions of "valuable."\n\nThere was no product marketing function. The gap between what we built and what the field could articulate grew with every release.',
    method: [
      {
        phase: 'Customer research',
        content:
          'Conducted 15 interviews across four personas using an unbiased framework I designed. One session uncovered seven distinct pain points — including that users relied on search 90% of the time and the map only 10%, directly reshaping engineering priorities.',
      },
      {
        phase: 'Usage analysis',
        content:
          'Analyzed 12 months of legacy platform data (17,000+ page views) to build a prioritization map grounded in actual behavior, not stakeholder opinions.',
      },
      {
        phase: 'Three positioning strategies',
        content:
          'Developed distinct value propositions for valuators (historical data depth), CRE professionals (market intelligence), and developers (economic forecasting). Refined based on Sales feedback — they flagged that "comprehensive" mattered less to builders than "forecasting."',
      },
      {
        phase: 'GTM engine',
        content:
          'Operated as de facto PMM, building three systems. First, a product marketing brief template for every release — Marketing could draft communications without deep product knowledge. Second, one-page competitive battlecards in "If they say / You say" format, objection handlers, and persona-specific demo scripts. Third, 30+ help articles and 10 tutorial videos reducing support burden and improving time-to-value.',
      },
      {
        phase: 'Release sequencing',
        content:
          'Organized releases around use-case completion, not feature shipping. Each release fully served a user segment so Sales could migrate clients with confidence. Built company-level adoption dashboards and flagged at-risk accounts to CS with specific context.',
      },
      {
        phase: 'Quality',
        content:
          'Personally QA\'d 15+ calculated metrics (vacancy rates, rental rates) against legacy definitions. One miscalculated number would have destroyed trust with professional users.',
      },
    ],
    results: [
      { metric: '750+', label: 'Companies on platform (0 → 750+ in 3 years)' },
      { metric: '8,000+', label: 'Active users' },
      { metric: '+ARR', label: 'Meaningful increase in annual recurring revenue' },
      { metric: '+15%', label: 'Feature adoption through education and enablement' },
      { metric: '+40%', label: 'Sales confidence in competitive deals' },
      { metric: '100%', label: 'Battlecard usage by reps (vs. <10% for prior materials)' },
      { metric: '-20%', label: 'Fewer repetitive support inquiries' },
    ],
    keyFinding:
      'One message for all buyers means no message resonates deeply with anyone. Segmented positioning worked because it was paired with practical enablement — one-page battlecards Sales actually used, objection handlers grounded in real conversations, and content that helped customers get to value faster. Operating as the bridge between Product, Sales, Marketing, and CS created compounding growth.',
  },
  {
    id: '004',
    number: 'EXP-004',
    company: 'Yelp',
    title: 'What actually drives long-term business owner engagement?',
    hypothesis: 'Engagement behaviors — not profile completion — predict business owner success.',
    keyMetric: '19%',
    keyMetricLabel: 'engagement lift',
    tags: ['PM', 'GROWTH', 'EXPERIMENTATION', 'DATA SCIENCE'],
    role: 'Product Manager',
    timeline: '2022–2023',
    problem:
      'Yelp for Business had flat WAU growth. The team assumed onboarding was the bottleneck — get business owners to complete setup, and engagement follows. Meanwhile, a recently launched recommendations feature was underperforming despite working well technically.',
    method: [
      {
        phase: 'Predictive modeling',
        content:
          'Partnered with Data Science to build models identifying success predictors for business owners. Used Poisson regression with confounding variable controls. The result contradicted the team\'s core assumption: responding to reviews created a 2.76x pageview multiplier and responding to messages created 2.28x — but setup completion was NOT a significant predictor of long-term engagement.',
      },
      {
        phase: 'Onboarding A/B testing',
        content:
          'Despite setup not being the primary driver, the flow still had 40% drop-off. Tested three variants across 5,000 users each. The winner: reordering steps so users saw value before being asked to pay. Combined best elements from multiple variants and iterated across all platforms to achieve +10% setup rate improvement.',
      },
      {
        phase: 'Messaging experimentation',
        content:
          'The recommendations feature was underperforming due to positioning, not product quality. Tested three messaging approaches with 10,000 users each. Functional messaging ("You have 3 actions"): low engagement. Value messaging ("Respond faster to attract customers"): moderate. ROI messaging ("Businesses that do this get 20% more messages"): 4x the action rate of functional. Repositioned the entire feature around data-driven business improvement.',
      },
      {
        phase: 'Opportunity sizing',
        content:
          'Identified a large pool of dormant business owners visiting the consumer site but not engaging with their business profiles. Launched a feature targeting them, generating statistically significant increases in engagement. Built self-service dashboards and a 1-year roadmap targeting 10% WAU growth.',
      },
    ],
    results: [
      { metric: '+19%', label: 'Recommendations engagement (exceeded target)' },
      { metric: '+10%', label: 'Onboarding completion across all platforms' },
      { metric: '+10%', label: 'WAU growth (met annual target)' },
      { metric: '+15%', label: 'Homepage engagement across combined initiatives' },
      { metric: '+49–51%', label: 'Relative CTR improvement on mobile' },
      { metric: '4x', label: 'Action rate — ROI messaging vs. functional' },
      { metric: '2.76x', label: 'Pageview multiplier for review responders' },
    ],
    keyFinding:
      'The predictive model told a completely different story than our assumptions. Setup didn\'t predict success — engagement behaviors did. That single insight shifted the entire team\'s strategy. And the messaging test proved positioning matters as much as product: same feature, better framing, 4x the results.',
  },
];

export const sideSkills = [
  {
    id: 'competitive-analysis',
    name: 'Competitive Analysis Skill',
    description:
      'Automates end-to-end competitive analysis for 2\u20135 companies across 13 dimensions. Researches positioning, pricing, features, and customer proof, then generates a 16-slide deck. One command replaces hours of manual research.',
    link: 'https://github.com/elnagdie/competitive-analysis',
  },
];

export const sideProjects = [
  {
    id: 'youtube-transcriber',
    name: 'YouTube Transcriber',
    description:
      'Paste a URL, get the transcript. Supports videos, playlists, and channels.',
    link: 'https://github.com/elnagdie/youtube-transcriber',
  },
  {
    id: 'trivia-engine',
    name: 'Trivia Engine',
    description:
      'Reusable trivia game engine with themed editions.',
    link: 'https://github.com/elnagdie/trivia-engine',
  },
  {
    id: 'duck-hunt',
    name: 'Duck Hunt',
    description:
      'Browser game. My first AI-assisted build with Claude Code.',
    link: 'https://github.com/elnagdie/duck-hunt',
  },
];
