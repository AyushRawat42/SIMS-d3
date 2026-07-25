import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE_CONTENT } from '@/lib/site-content';
import simsLogo from '@assets/Shushila_Institute_Of-removebg-preview-1-e1743436624699.png';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center z-50 shrink-0">
            <img
              src={simsLogo}
              alt="Sushila Institute of Medical Sciences"
              className="h-11 md:h-12 w-auto max-w-[220px] md:max-w-[300px] object-contain object-left"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center min-w-0">
            {SITE_CONTENT.header.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-xs xl:text-sm font-medium text-sims-text hover:text-sims-primary-2 transition-colors px-1.5 xl:px-2.5 py-2 rounded-md whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              className="h-10 border-sims-border text-sims-primary hover:bg-sims-surface rounded-lg px-4"
              onClick={onApplyClick}
            >
              Contact Admissions
            </Button>
            <Button
              className="h-10 bg-sims-primary hover:bg-sims-primary-2 text-white rounded-lg px-5"
              onClick={onApplyClick}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            type="button"
            className="lg:hidden p-2 -mr-1 text-sims-primary z-50 rounded-lg hover:bg-sims-surface transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-sims-border shadow-lg"
        >
          <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col gap-1">
            {SITE_CONTENT.header.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-base font-medium text-sims-text py-3 border-b border-sims-border/60 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 mt-4 pt-1">
              <Button
                variant="outline"
                className="w-full justify-center h-11 rounded-lg"
                onClick={() => { onApplyClick(); setMobileMenuOpen(false); }}
              >
                Contact Admissions
              </Button>
              <Button
                className="w-full justify-center h-11 bg-sims-primary rounded-lg"
                onClick={() => { onApplyClick(); setMobileMenuOpen(false); }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Announcement Strip */}
      <div className="w-full bg-amber-500/10 border-t border-amber-500/20 py-1.5 absolute top-full left-0 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm font-semibold text-amber-900/90 tracking-wide">
            {SITE_CONTENT.header.announcement}
          </p>
        </div>
      </div>
    </header>
  );
}
