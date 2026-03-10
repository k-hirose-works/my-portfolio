import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg shadow-cyan-900/10' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Logo (Left aligned) */}
        <a href="#" className="flex-shrink-0 flex items-center gap-2 group bg-transparent z-10 w-1/4">
          <img
            src="/logo.png"
            alt="Kazushige Hirose"
            className="h-10 md:h-12 lg:h-14 w-auto max-w-[200px] md:max-w-[280px] object-contain opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500 origin-left"
          />
        </a>

        {/* Desktop Nav (Absolutely Centered) */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 lg:gap-16 w-full justify-center pointer-events-none">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs lg:text-sm font-serif font-light text-slate-300 hover:text-white transition-colors tracking-[0.3em] uppercase pointer-events-auto"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section / Contact Button */}
        <div className="hidden md:flex justify-end w-1/4 z-10">
          <a
            href="https://www.wantedly.com/id/hirose_kazushige"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/50 text-white rounded-full px-8 py-2.5 font-serif font-light text-xs lg:text-sm hover:bg-white hover:text-black transition-all duration-300 tracking-[0.2em] uppercase"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-neutral-300 z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 py-4 shadow-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
