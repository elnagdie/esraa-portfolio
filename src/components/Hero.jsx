import { motion } from 'framer-motion';

const metrics = [
  { value: '8+', unit: 'yrs', label: 'in product & GTM' },
  { value: '750+', unit: '', label: 'companies on platforms I\'ve launched' },
  { value: '38', unit: '', label: 'enterprise clients adopted my last launch' },
  { value: '19%', unit: '', label: 'engagement lift from my last experiment' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16 max-w-7xl mx-auto">
      {/* Background grid lines — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,22,40,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,22,40,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        {/* Field label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-amber-text/40" />
          <span className="section-label">Field Researcher — Product, Growth & GTM</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-navy mb-4 leading-none tracking-tight"
        >
          Esraa Elnagdi
        </motion.h1>

        {/* Main headline */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-navy/80 mb-3 leading-tight"
        >
          Biochemist turned product builder.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-2xl md:text-3xl text-amber-text mb-8 leading-tight"
        >
          I run experiments that grow businesses.
        </motion.p>

        {/* Bio paragraph */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base md:text-lg text-navy/55 max-w-2xl leading-relaxed mb-10"
        >
          I studied Biochemistry at the University of Toronto — not for the career path, but for the way of thinking.
          Hypothesize. Test. Follow the evidence. Think in systems. I've been applying that scientific method to product
          strategy, go-to-market, and growth ever since.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => handleScrollTo('experiments')}
            className="btn-primary"
          >
            View Experiments
          </button>
          <button
            onClick={() => handleScrollTo('about')}
            className="btn-secondary"
          >
            The Full Story
          </button>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          variants={itemVariants}
          className="border-t border-navy/10 pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-navy/10">
            {metrics.map((m, i) => (
              <div key={i} className="md:px-8 first:pl-0 last:pr-0">
                <div className="font-serif text-4xl md:text-5xl text-amber-text leading-none mb-1">
                  {m.value}
                  {m.unit && (
                    <span className="text-2xl md:text-3xl text-amber-text/60">{m.unit}</span>
                  )}
                </div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-navy/40 leading-tight mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-navy/30 rotate-90 origin-center translate-x-4">
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-navy/20 to-transparent" />
      </motion.div>
    </section>
  );
}
