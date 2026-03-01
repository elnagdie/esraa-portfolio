import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const contactLinks = [
  {
    label: 'Email',
    value: 'esraa.y.elnagdi@gmail.com',
    href: 'mailto:esraa.y.elnagdi@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/esraa-elnagdi',
    href: 'https://linkedin.com/in/esraa-elnagdi/',
  },
  {
    label: 'GitHub',
    value: 'github.com/elnagdie',
    href: 'https://github.com/elnagdie',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <div className="mb-14">
          <h2 className="section-headline">Let's Build Something</h2>
        </div>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group inline-flex flex-col border border-navy/12 bg-paper-dim px-6 py-4 hover:border-amber-text/40 hover:bg-paper-dark transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-amber-text scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-navy/35 mb-1">{link.label}</span>
              <span className="font-sans text-sm text-navy/55 group-hover:text-navy transition-colors">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-24 pt-8 border-t border-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-navy/30">
          © 2026 Esraa Elnagdi
        </span>
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-navy/25">
          Built with curiosity and Claude Code.
        </span>
      </motion.div>
    </section>
  );
}
