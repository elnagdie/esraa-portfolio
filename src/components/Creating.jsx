import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const channels = [
  {
    platform: 'TikTok',
    handle: '@esraacreates',
    description: 'AI tutorials, career advice, vlogs',
    href: 'https://tiktok.com/@esraacreates',
  },
  {
    platform: 'MISHKA',
    handle: 'shopmishka.com',
    description: 'My physical product brand for Muslim women on the go',
    href: 'https://shopmishka.com',
  },
];

export default function Creating() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="creating" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-text/40" />
            <span className="section-label">Field Dispatches</span>
          </div>
          <h2 className="section-headline mb-4">Building in Public</h2>
          <p className="font-sans text-base md:text-lg text-navy/55 max-w-2xl leading-relaxed">
            I create content about AI, the future of work, and career growth — because I learn best by building and sharing.
            Follow along:
          </p>
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.platform}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group border border-navy/10 bg-paper-dim p-5 hover:border-amber-text/30 hover:bg-paper-dark transition-all duration-300 block relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-amber-text scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy/35 mb-1">{channel.platform}</div>
              <div className="font-serif text-lg text-navy mb-1 group-hover:text-amber-text transition-colors">{channel.handle}</div>
              <div className="font-sans text-sm text-navy/50">{channel.description}</div>
              <div className="font-mono text-[10px] tracking-wider uppercase text-navy/0 group-hover:text-amber-text transition-colors mt-3">
                Visit →
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
