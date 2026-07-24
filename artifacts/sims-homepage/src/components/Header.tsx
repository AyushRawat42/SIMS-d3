import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE_CONTENT } from '@/lib/site-content';
import simsLogo from '@assets/sims-logo-generated.png';
import { Button } from '@/components/ui/button';

export function Header({ onApplyClick }: { onApplyClick: () => void }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 md:gap-4 z-50">
            <img src={simsLogo} alt="SIMS Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sims-primary text-sm md:text-xl leading-tight max-w-[200px] md:max-w-none">
                {SITE_CONTENT.header.logoText}
              </span>
              <span className="text-xs md:text-sm text-sims-text-muted">
                {SITE_CONTENT.header.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {SITE_CONTENT.header.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-sims-text hover:text-sims-primary-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-sims-border text-sims-primary hover:bg-sims-surface" onClick={onApplyClick}>
              Contact Admissions
            </Button>
            <Button className="bg-sims-primary hover:bg-sims-primary-2 text-white" onClick={onApplyClick}>
              Apply Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-sims-primary z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-sims-border shadow-xl py-6 px-4 flex flex-col gap-4"
        >
          {SITE_CONTENT.header.navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg font-medium text-sims-text py-2 border-b border-sims-surface-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="w-full justify-center" onClick={() => { onApplyClick(); setMobileMenuOpen(false); }}>
              Contact Admissions
            </Button>
            <Button className="w-full justify-center bg-sims-primary" onClick={() => { onApplyClick(); setMobileMenuOpen(false); }}>
              Apply Now
            </Button>
          </div>
        </motion.div>
      )}

      {/* Announcement Strip */}
      <div className="w-full bg-amber-500/10 border-t border-b border-amber-500/20 py-2 absolute top-full left-0 hidden md:block">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-amber-800">
            {SITE_CONTENT.header.announcement}
          </p>
        </div>
      </div>
    </header>
  );
}