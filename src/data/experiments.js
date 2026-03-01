export const experiments = [
  {
    id: '001',
    number: 'EXP-001',
    company: 'MasterClass',
    title: 'Can a consumer brand sell structured learning to enterprises?',
    hypothesis:
      'Enterprise buyers would adopt guided learning if positioned around career outcomes — not celebrity appeal.',
    keyMetric: '47%',
    keyMetricLabel: 'NPS improvement over existing formats',
    tags: ['PM', 'GTM', 'CROSS-FUNCTIONAL', '0→1'],
    role: 'Product Manager',
    problem:
      'MasterClass at Work had a rich content library — celebrity instructors, beautifully produced videos — but enterprise L&D admins were overwhelmed. They didn\'t know what content to assign, to whom, or how to structure it into a learning program. The CS team was spending hours per client manually curating content and mapping it to customer goals, and that model didn\'t scale. The result: deals stalled, customers churned, and the number-one reason cited by Sales was that admins didn\'t know how to use the platform.',
    method: [
      {
        phase: 'Discovery',
        content:
          'I synthesized feedback from CS, sales call recordings, admin survey data, and a UXR study I designed with 10 L&D professionals. The research revealed three core sub-problems: admins didn\'t know what content to assign, they spent too much time piecing together resources, and they lacked awareness of existing admin tools.',
      },
      {
        phase: 'Build approach',
        content:
          'I evaluated four technical approaches in a Product Review with engineering leadership. We could build Programs as (a) an enhanced viewing experience, (b) a landing page with curated content collections, (c) an entirely new content type, or (d) leverage existing infrastructure. Each had different effort levels (2\u201326 weeks of engineering) and tradeoffs. I recommended the landing page approach \u2014 it let us ship in 8 weeks while preserving existing analytics and content infrastructure. I framed the decision around a principle: time-box investment until we have conviction of value.',
      },
      {
        phase: 'Scoping',
        content:
          'I defined clear P0/P1/P2 prioritization. P0 included the admin program page with resources, ability to share programs, learner experience across web/iOS/Android, progress monitoring, and NPS surveys. I deliberately descoped features like scheduled drip emails and badging as P2 \u2014 even though stakeholders wanted them \u2014 because they would have added 4+ weeks and we needed to validate the core concept first.',
      },
      {
        phase: 'Execution',
        content:
          'I orchestrated a cross-functional pod of 15+ people spanning Product, Engineering (FE/BE/iOS/Android), Content/Learning Design, Creative, Marketing, Sales Enablement, and Customer Success. I ran weekly pod meetings to coordinate dependencies and track blockers. When the CS team and Content team disagreed on how facilitator resources should work (configurable per client vs. single format), I reframed the decision around the user need: what does the admin need to deploy successfully? We shipped admin-facing defaults with CS tailoring per client relationship. Two key team members went on leave mid-project \u2014 I proactively set up coverage and handoff plans so launches proceeded without escalation.',
      },
      {
        phase: 'Phased GTM',
        content:
          'I designed a three-phase launch strategy to work around the constraint that summer is historically dead for L&D buyers. Phase 1: pre-launch at the ATD industry conference with a Figma prototype and demo environment, generating early market validation. Phase 2: staggered soft launch of three programs across web, iOS, and Android, timed to engineering readiness. Phase 3: hard launch with prospect email campaigns and admin newsletter inclusion, timed to the fall buying season. This gave us 6\u20138 weeks of live data and customer feedback before the big push.',
      },
      {
        phase: 'Positioning & enablement',
        content:
          'Developed outcome-focused positioning around career development \u2014 not celebrity appeal \u2014 to resonate with L&D buyers evaluating ROI. Ran an unmoderated UXR survey with 10 participants comparing three merchandising variants (instructor-forward, outcome-forward, and information-dense) to inform in-product placement: light merchandising on mobile, aggressive on web with homepage, skill page, and dedicated Programs page placement. For the ATD conference pre-launch, created a sales brief, talk track, Figma prototype with a custom demo environment, and one-pager \u2014 giving the sales team a way to demo the concept before the product existed. Ahead of soft launch, built enablement slides, SDR outbound copy, and messaging templates, and ran a sales training kickoff so the team was actively selling before go-live. For hard launch, planned prospect email campaigns and inclusion in the admin newsletter. Post-launch, evolved positioning from \u201cstructured learning paths\u201d to \u201cmeasurable learning outcomes\u201d based on customer feedback showing buyers cared more about completion and skill application than program structure.',
      },
      {
        phase: 'Feedback engine',
        content:
          'I built a four-layer measurement system to generate a build/hold/pivot recommendation within 90 days. Layer 1: quantitative product data (completion rates, NPS, Weekly Active Admins). Layer 2: passive sales call tracking via Gong smart trackers that auto-flagged Programs mentions \u2014 a creative approach that avoided relying on self-reporting. Layer 3: structured qualitative feedback sheet where CS and Sales logged client reactions, categorized by type (Product Experience, Content, Branding). Layer 4: effectiveness surveys triggered at the module level. I synthesized all four layers into Product Reviews at 30 days and 90 days, presenting an executive summary, quantitative comparison against other content types, qualitative highlights with client quotes, and a clear recommendation.',
      },
    ],
    results: [
      { metric: '47%', label: 'NPS improvement (44.53 vs. 30.27 for other enterprise learning formats)' },
      { metric: '50\u201360%', label: 'Module completion rates (vs. ~14% for prior formats)' },
      { metric: '$5.5M', label: 'Enterprise pipeline influenced' },
      { metric: '44%', label: 'Sales calls mentioning Programs within 90 days' },
      { metric: '+51%', label: 'Weekly Active Admin lift' },
      { metric: '60%', label: 'Of engaged admins had been inactive in prior months, indicating Programs drove re-engagement' },
    ],
    keyFinding:
      'The celebrity brand got meetings. Outcome-focused positioning closed deals. Admins didn\'t need more content \u2014 they needed structured, deployable solutions that made them look good internally. The biggest unlock wasn\'t the product itself but the positioning shift: framing Programs around measurable career outcomes rather than instructor names.',
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
    problem:
      'CSMs were curating custom learning playlists for enterprise clients. Each playlist took 4–5 hours — hunting through spreadsheets for video IDs across multiple systems, then submitting to Engineering to run a script. Every creation and edit required Eng support.\n\nCSMs were afraid of the existing admin tool — no guardrails, no validation, real risk of breaking things. A previous attempt to solve this with documentation failed: 1 out of 6 CSMs adopted it. The problem was the tool, not the training.',
    method: [
      {
        phase: 'Options analysis',
        content:
          'Evaluated three approaches at a formal Product Review. Enhancing the data submission process still required Eng. Enhancing the admin tool was "an uphill fight" with worse UX. Building a dedicated creator in the admin platform was the clear winner — and architecturally close to eventually being customer-facing.',
      },
      {
        phase: 'Guardrail-driven design',
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
      { metric: '98%', label: 'Creation time reduction (4\u20135 hours \u2192 under 5 minutes)' },
      { metric: '190+', label: 'Playlists created in the first 90 days post-launch' },
      { metric: '#1', label: 'Highest 30D/90D engagement of all enterprise content types' },
      { metric: 'Top NPS', label: 'Higher than both existing playlists and Programs' },
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
    problem:
      'Altus Group was building a unified CRE data platform to replace two aging, siloed legacy systems. The market was dominated by entrenched players. The platform needed to serve fundamentally different buyers \u2014 valuators, brokers, developers, and home builders \u2014 each with different workflows and definitions of \u201cvaluable.\u201d\n\nThere was no product marketing function. The gap between what we built and what the field could articulate grew with every release.',
    method: [
      {
        phase: 'Customer research',
        content:
          'Conducted 15 interviews across four buyer personas using an unbiased framework I designed. One session uncovered seven distinct pain points \u2014 including that users relied on search 90% of the time and the map only 10%, directly reshaping engineering priorities.',
      },
      {
        phase: 'Usage analysis',
        content:
          'Analyzed 12 months of legacy platform data (17,000+ page views) to build a prioritization map grounded in actual behavior, not stakeholder opinions.',
      },
      {
        phase: 'Four positioning strategies',
        content:
          'Developed distinct value propositions for valuators (historical data depth), CRE professionals (market intelligence), developers (economic forecasting), and home builders (market trends). Refined based on Sales feedback \u2014 they flagged that \u201ccomprehensive\u201d mattered less to builders than \u201cforecasting.\u201d',
      },
      {
        phase: 'GTM engine',
        content:
          'Operated as de facto PMM, building three systems. First, a product marketing brief template for every release \u2014 Marketing could draft communications without deep product knowledge. Second, one-page competitive battlecards in \u201cIf they say / You say\u201d format, objection handlers, and persona-specific demo scripts. Third, 30+ help articles and 10 tutorial videos reducing support burden and improving time-to-value.',
      },
      {
        phase: 'Release sequencing',
        content:
          'Organized releases around use-case completion, not feature shipping. Each release fully served a user segment so Sales could migrate clients with confidence. Built company-level adoption dashboards and flagged at-risk accounts to CS with specific context.',
      },
      {
        phase: 'Quality',
        content:
          'Personally QA\u2019d calculated metrics (vacancy rates, rental rates, occupancy costs) against legacy definitions. One miscalculated number would have destroyed trust with professional users.',
      },
    ],
    results: [
      { metric: '750+', label: 'Companies on platform (0 \u2192 750+ in 3 years)' },
      { metric: '8,000+', label: 'Active users' },
      { metric: '+5%', label: 'ARR contribution' },
      { metric: '+15%', label: 'Feature adoption through education and enablement' },
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
          'Despite setup not being the primary driver, the flow still had 40% drop-off. Tested three variants. The winner: reordering steps so users saw value before being asked to pay. Combined best elements from multiple variants and iterated across all platforms to achieve +10% setup rate improvement.',
      },
      {
        phase: 'Messaging experimentation',
        content:
          'The recommendations feature was underperforming due to positioning, not product quality. Tested three messaging approaches. Functional messaging ("You have 3 actions"): low engagement. Value messaging ("Respond faster to attract customers"): moderate. ROI messaging ("Businesses that do this get 20% more messages"): 4x the action rate of functional. Repositioned the entire feature around data-driven business improvement.',
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
