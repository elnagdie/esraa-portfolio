import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Field Notes', href: '/#about' },
  { label: 'Experiments', href: '/#experiments' },
  { label: 'Side Lab', href: '/#side-experiments' },
  { label: 'Inquire', href: '/#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#') && !isHome) return;
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-sm border-b border-navy/8 shadow-sm shadow-navy/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-amber-text/60 group-hover:text-amber-text transition-colors">
            E.E.
          </span>
          <span className="w-px h-4 bg-navy/20" />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy/40 group-hover:text-navy transition-colors">
            The Lab
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/#') ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy/40 hover:text-amber-text transition-colors duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy/40 hover:text-amber-text transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-mono text-[10px] tracking-wider uppercase text-navy/40 hover:text-amber-text transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? '[ close ]' : '[ menu ]'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper/98 backdrop-blur-sm border-t border-navy/8 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="font-mono text-xs tracking-[0.2em] uppercase text-navy/40 hover:text-amber-text transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
