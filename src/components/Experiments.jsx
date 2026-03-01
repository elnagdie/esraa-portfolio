import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { experiments } from '../data/experiments';
import TagBadge from './TagBadge';

function ExperimentCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const navigate = useNavigate();

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => navigate(`/experiment/${exp.id}`)}
      className="group border border-navy/10 bg-paper-dim p-6 hover:border-amber-text/30 hover:bg-paper-dark hover:-translate-y-1 hover:shadow-lg transition-all duration-400 cursor-pointer relative overflow-hidden"
    >
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-amber-text scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      {/* Experiment number */}
      <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-amber-text/50 mb-4">
        {exp.number}
      </div>

      {/* Company */}
      <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-navy/35 mb-2">
        {exp.company}
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl text-navy mb-3 leading-snug">
        {exp.title}
      </h3>

      {/* Key metric */}
      <div className="mb-5">
        <div className="font-serif text-4xl text-amber-text leading-none mb-0.5">
          {exp.keyMetric}
        </div>
        <div className="font-mono text-[9px] tracking-wider uppercase text-navy/35">
          {exp.keyMetricLabel}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {exp.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>

      {/* View link */}
      <div className="mt-2">
        <span className="font-mono text-[10px] tracking-wider uppercase text-navy/0 group-hover:text-amber-text transition-all duration-300">
          View Experiment →
        </span>
      </div>
    </motion.article>
  );
}

export default function Experiments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experiments" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="section-headline mb-3">Experiments</h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiments.map((exp, i) => (
          <ExperimentCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
