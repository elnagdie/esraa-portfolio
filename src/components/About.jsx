import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const trainedIn = [
  'Biochemistry (HBSc, UofT)',
  'Advanced Product Management (Product Faculty)',
  'Pragmatic Institute, PMC Level I',
];

const toolGroups = [
  { label: 'Product & Analytics', items: ['Jira', 'Figma', 'Miro', 'Amplitude', 'Google Analytics', 'Looker'] },
  { label: 'AI & Automation', items: ['Claude Code', 'Lovable', 'n8n'] },
];

const traits = [
  { label: 'Systematic', value: 92 },
  { label: 'Driven', value: 89 },
  { label: 'Logical', value: 82 },
  { label: 'Visionary', value: 75 },
  { label: 'Empathetic', value: 60 },
];

const companies = ['MasterClass', 'Yelp', 'Altus Group', 'Propel Holdings'];

function TraitBar({ label, value, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[10px] tracking-wider uppercase text-navy/45">{label}</span>
        <span className="font-mono text-[10px] text-amber-text">{value}%</span>
      </div>
      <div className="h-px bg-navy/10 relative overflow-hidden">
        <motion.div
          className="h-full bg-amber-lab/60"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${value}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-text/40" />
            <span className="section-label">Field Notes</span>
          </div>
          <h2 className="section-headline">The Origin Story</h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — narrative */}
          <div className="lg:col-span-3 space-y-6">
            {[
              `I've always been a translator.`,
              `As a teenager and newcomer to Canada, I translated for my mom at doctor's appointments, turning medical jargon into decisions we could act on. That instinct never left.`,
              `I studied Biochemistry at the University of Toronto. I loved it not for the career path, but for the way of thinking. Form hypotheses. Test them. Follow the evidence. Think in systems. I led research and co-authored a published paper, translating questions into experiments and experiments into findings.`,
              `My first job in tech was answering phones at a call centre at Propel Holdings. I talked to customers all day, hearing their bugs, feature requests, and what they wished the product could do. I got curious about the online application flow and customer dashboard I was helping them navigate every day. I understood the customer web experience inside out, which earned me a move to Business Analyst, then Scrum Master leading a team of 8 engineers.`,
              `That's been my pattern ever since: start with the customer, understand the system, then translate complexity into something people can actually use.`,
              `At Altus Group, I was the Product Owner on a commercial real estate data platform, and with no PMM function, I built that too. I interviewed customers, developed segmented positioning for three buyer personas, created 30+ help articles, and trained Sales on persona-specific selling. The platform grew from 0 to 750+ companies and 8,000+ users.`,
              `At Yelp, I learned the power of experimentation, partnering with Data Science to build predictive models and running A/B tests that drove a 19% engagement lift.`,
              `At MasterClass, I brought it all together: leading cross-functional teams of 10+, shipping enterprise learning programs with completion rates 4x the existing product, building an internal tool that cut content curation by 98%, developing GTM strategy, and beating revenue targets by 10% YoY.`,
              `I've translated across languages, industries, and audiences. From Arabic to English, from biochemistry labs to engineering sprints, from technical complexity to business outcomes. I'm a first-generation Canadian, Egyptian by origin, fluent in Arabic and English. I lead with active listening and empathy. I thrive in the space between chaos and clarity, building the systems that turn one into the other.`,
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
                className="font-sans text-base md:text-lg text-navy/60 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right — Lab Profile card */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="border border-navy/10 bg-paper-dim p-6 sticky top-24"
            >
              {/* Header */}
              <div className="border-b border-navy/10 pb-4 mb-5">
                <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-amber-text mb-1">Lab Profile</div>
                <div className="font-serif text-lg text-navy">The Planner / Translator</div>
                <div className="font-mono text-[9px] tracking-wider text-navy/35 mt-1">PRIOS Assessment, 2025</div>
              </div>

              {/* Trait bars */}
              <div className="mb-6">
                {traits.map((t, i) => (
                  <TraitBar key={t.label} label={t.label} value={t.value} index={i} />
                ))}
              </div>

              {/* Languages */}
              <div className="border-t border-navy/10 pt-4 mb-5">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-3">Languages</div>
                <div className="flex gap-3">
                  {['English', 'Arabic'].map((lang) => (
                    <span key={lang} className="font-mono text-[10px] text-navy/55">{lang}</span>
                  ))}
                </div>
              </div>

              {/* Trained In */}
              <div className="border-t border-navy/10 pt-4 mb-5">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-3">Trained In</div>
                <ul className="space-y-1.5">
                  {trainedIn.map((item) => (
                    <li key={item} className="font-mono text-[10px] text-navy/55 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tool groups */}
              {toolGroups.map((group) => (
                <div key={group.label} className="border-t border-navy/10 pt-4 mb-5 last:mb-0">
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-3">{group.label}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tool) => (
                      <span key={tool} className="font-mono text-[9px] tracking-wide text-navy/50 border border-navy/12 px-2 py-0.5 rounded-sm bg-paper">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Company logo bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-navy/10"
        >
          <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-navy/35 mb-6 text-center">
            Companies I've Worked With
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {companies.map((company, i) => (
              <span key={company} className="flex items-center gap-8">
                <span className="font-mono text-sm tracking-[0.15em] uppercase text-navy/35 hover:text-navy/60 transition-colors">
                  {company}
                </span>
                {i < companies.length - 1 && (
                  <span className="font-mono text-navy/20">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
