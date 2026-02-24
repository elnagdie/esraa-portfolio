import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { sideProjects } from '../data/experiments';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const isComingSoon = project.status === 'coming-soon';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group border border-cream/10 p-6 relative overflow-hidden transition-all duration-300 ${
        isComingSoon
          ? 'opacity-60'
          : 'hover:border-teal-lab/30 hover:bg-navy-light/40 cursor-pointer'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-teal-lab scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl">{project.emoji}</span>
        {isComingSoon ? (
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-cream-dark border border-cream/10 px-2 py-0.5 rounded-sm">
            In Progress
          </span>
        ) : (
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-teal-lab border border-teal-lab/30 px-2 py-0.5 rounded-sm">
            Live
          </span>
        )}
      </div>

      <h3 className="font-serif text-lg text-cream mb-2 leading-snug">{project.name}</h3>
      <p className="font-sans text-sm text-cream-muted/70 leading-relaxed mb-4">{project.description}</p>

      {project.link && !isComingSoon && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="font-mono text-[10px] tracking-wider uppercase text-teal-lab hover:text-teal-light transition-colors"
        >
          View →
        </a>
      )}
    </motion.div>
  );
}

export default function SideExperiments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="side-experiments" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-amber-lab opacity-60" />
          <span className="section-label">Side Experiments</span>
        </div>
        <h2 className="section-headline mb-3">After-Hours Lab Work</h2>
        <p className="font-sans text-base text-cream-muted max-w-xl">
          Not every experiment happens in the office. I also code with AI, create content, and build things for fun.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sideProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
