import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { category: 'Trained In', items: ['Biochemistry (HBSc, UofT)', 'Advanced Product Management', 'Certified Scrum Master', 'Pragmatic Marketing Certified', 'Business Analysis (UofT)'] },
];

const tools = ['Figma', 'Miro', 'Jira', 'Asana', 'Mixpanel', 'Google Analytics', 'Tableau', 'SQL', 'HTML/CSS', 'JavaScript', 'React', 'Claude', 'ChatGPT', 'Perplexity'];

const traits = [
  { label: 'Systematic', value: 92 },
  { label: 'Driven', value: 89 },
  { label: 'Logical', value: 82 },
  { label: 'Growth-Seeking', value: 75 },
  { label: 'Practical', value: 72 },
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
              `I'm the kind of person who needs to understand how things work — all the way down.`,
              `I studied Biochemistry at the University of Toronto. I loved it — not for the career path, but for the way of thinking. Form hypotheses. Test them. Follow the evidence. Think in systems.`,
              `My first job in tech was answering phones at a call centre at Propel Holdings. I talked to customers all day — hearing what frustrated them, what confused them, what they wished the product could do. Then I got curious about the loan management system itself. Why was it built this way? What were the constraints? I learned it inside out, which earned me a move to Business Analyst, then Scrum Master leading a team of 8 engineers.`,
              `That's been my pattern ever since: start with the customer, understand the system, then build something better.`,
              `At Altus Group, I was the product marketing function for a platform entering a market dominated by incumbents. I interviewed customers, developed segmented positioning for three buyer personas, created 30+ help articles and 10 videos, and trained Sales on persona-specific selling. The platform grew from 0 to 750+ companies.`,
              `At Yelp, I learned the power of experimentation — partnering with Data Science to build predictive models and running A/B tests that drove a 19% engagement lift.`,
              `At MasterClass, I brought it all together: leading cross-functional teams of 10+, shipping enterprise learning programs, developing GTM strategy, and driving $900K in revenue impact.`,
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
                <div className="font-serif text-lg text-navy">The Planner / Strategist</div>
                <div className="font-mono text-[9px] tracking-wider text-navy/35 mt-1">PRIOS Assessment, 2025</div>
              </div>

              {/* Trait bars */}
              <div className="mb-6">
                {traits.map((t, i) => (
                  <TraitBar key={t.label} label={t.label} value={t.value} index={i} />
                ))}
              </div>

              {/* Trained In */}
              <div className="border-t border-navy/10 pt-4 mb-5">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-3">Trained In</div>
                <ul className="space-y-1.5">
                  {skills[0].items.map((item) => (
                    <li key={item} className="font-mono text-[10px] text-navy/55 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="border-t border-navy/10 pt-4">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-3">Tools of the Trade</div>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool) => (
                    <span key={tool} className="font-mono text-[9px] tracking-wide text-navy/50 border border-navy/12 px-2 py-0.5 rounded-sm bg-paper">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
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
