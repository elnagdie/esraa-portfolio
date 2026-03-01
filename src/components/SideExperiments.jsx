import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { sideSkills, sideProjects } from '../data/experiments';

function Card({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group border border-navy/10 bg-paper-dim p-6 relative overflow-hidden transition-all duration-300 hover:border-teal-dim/30 hover:bg-paper-dark block"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-teal-dim scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      <h3 className="font-serif text-lg text-navy mb-2 leading-snug">
        {item.name}
      </h3>
      <p className="font-sans text-sm text-navy/50 leading-relaxed mb-4">
        {item.description}
      </p>

      <span className="font-mono text-[10px] tracking-wider uppercase text-teal-dim group-hover:text-teal-lab transition-colors">
        GitHub →
      </span>
    </motion.a>
  );
}

function GroupLabel({ children, delay = 0, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal-dim">
        {children}
      </span>
    </motion.div>
  );
}

export default function SideExperiments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="side-experiments"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-amber-text/40" />
          <span className="section-label">Side Lab</span>
        </div>
        <h2 className="section-headline mb-3">Building in Public</h2>
      </motion.div>

      {/* AI Skills */}
      <div className="mb-12">
        <GroupLabel isInView={isInView}>AI Skills</GroupLabel>
        <div className="grid grid-cols-1 gap-4">
          {sideSkills.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <GroupLabel isInView={isInView} delay={0.15}>
          Projects
        </GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sideProjects.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
