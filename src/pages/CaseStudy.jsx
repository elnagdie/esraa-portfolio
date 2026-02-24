import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { experiments } from '../data/experiments';
import TagBadge from '../components/TagBadge';

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const exp = experiments.find((e) => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!exp) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-navy/50 mb-4">Experiment not found.</p>
          <button onClick={() => navigate('/')} className="btn-secondary">
            ← Back to Lab
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Header */}
      <div className="border-b border-navy/10 px-6 md:px-12 lg:px-20 py-8 max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy/40 hover:text-amber-text transition-colors mb-8 flex items-center gap-2"
        >
          ← Back to Lab
        </button>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-amber-text/60">{exp.number}</span>
            <span className="w-px h-3 bg-navy/20" />
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35">{exp.company}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-navy leading-tight mb-4">
            {exp.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {exp.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            <div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-0.5">Role</div>
              <div className="font-sans text-sm text-navy/55">{exp.role}</div>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-0.5">Timeline</div>
              <div className="font-sans text-sm text-navy/55">{exp.timeline}</div>
            </div>
            {exp.externalLink && (
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-0.5">Live</div>
                <a
                  href={exp.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-amber-text hover:text-amber-dim transition-colors"
                >
                  {exp.externalLinkLabel} →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hypothesis */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-teal-dim">Hypothesis</span>
                <span className="flex-1 h-px bg-navy/10" />
              </div>
              <p className="font-serif text-xl md:text-2xl text-navy/80 leading-relaxed italic">
                "{exp.hypothesis}"
              </p>
            </section>

            {/* Method */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-teal-dim">Method</span>
                <span className="flex-1 h-px bg-navy/10" />
              </div>
              <ol className="space-y-4">
                {exp.method.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-[10px] tracking-wider text-amber-text/50 pt-0.5 shrink-0 w-5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-sans text-sm md:text-base text-navy/60 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Key Finding */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-teal-dim">Key Finding</span>
                <span className="flex-1 h-px bg-navy/10" />
              </div>
              <div className="border-l-2 border-amber-lab/50 pl-5">
                <p className="font-sans text-base md:text-lg text-navy/60 leading-relaxed">
                  {exp.keyFinding}
                </p>
              </div>
            </section>
          </div>

          {/* Results sidebar */}
          <div className="lg:col-span-1">
            <div className="border border-navy/10 bg-paper-dim p-6 sticky top-24">
              <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-amber-text mb-6">Results</div>
              <div className="space-y-6">
                {exp.results.map((result, i) => (
                  <div key={i} className="border-b border-navy/10 pb-5 last:border-0 last:pb-0">
                    <div className="font-serif text-3xl text-amber-text leading-none mb-1">
                      {result.metric}
                    </div>
                    <div className="font-mono text-[9px] tracking-wider uppercase text-navy/40 leading-relaxed">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next experiment */}
      <div className="border-t border-navy/10 px-6 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto">
        <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-navy/35 mb-6">
          Next Experiment
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments
            .filter((e) => e.id !== exp.id)
            .slice(0, 3)
            .map((e) => (
              <button
                key={e.id}
                onClick={() => navigate(`/experiment/${e.id}`)}
                className="group text-left border border-navy/10 bg-paper-dim p-5 hover:border-amber-text/30 hover:bg-paper-dark transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-amber-text scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-amber-text/50 mb-2">{e.number}</div>
                <div className="font-sans text-sm text-navy/55 group-hover:text-navy transition-colors leading-snug">{e.title}</div>
              </button>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
