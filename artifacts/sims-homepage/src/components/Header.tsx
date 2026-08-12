import React from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { SITE_CONTENT, WHATSAPP_CONTACT } from '@/lib/site-content';
import {
  PROGRAM_CATEGORIES,
  getProgramsByCategory,
  programPath,
  type ProgramCategoryId,
} from '@/lib/programs';
import { ABOUT_NAV_LINKS, isAboutSectionPath } from '@/lib/about-nav';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SimsLogo } from '@/components/SimsLogo';

function homeSectionHref(hashOrPath: string): string {
  if (hashOrPath.startsWith('#')) {
    return `/${hashOrPath}`;
  }
  return hashOrPath;
}

function CallAdmissionsButton({ className }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_CONTACT.tel}
      aria-label="Call Admissions"
      className={cn(
        'inline-flex items-center justify-center size-10 rounded-full border border-sims-border bg-white text-sims-primary shadow-sm',
        'hover:bg-sims-surface hover:border-sims-primary/30 transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40 focus-visible:ring-offset-2',
        className,
      )}
    >
      <Phone className="w-5 h-5" aria-hidden="true" strokeWidth={2} />
    </a>
  );
}

export function Header({ onApplyClick }: { onApplyClick: () => void }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [desktopProgramsOpen, setDesktopProgramsOpen] = React.useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<ProgramCategoryId>('nursing');
  const [mobileProgramsOpen, setMobileProgramsOpen] = React.useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const [mobileOpenCategory, setMobileOpenCategory] = React.useState<ProgramCategoryId | null>(null);

  const programsRef = React.useRef<HTMLDivElement>(null);
  const programsButtonRef = React.useRef<HTMLButtonElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const aboutButtonRef = React.useRef<HTMLButtonElement>(null);
  const closeTimerRef = React.useRef<number | null>(null);
  const aboutCloseTimerRef = React.useRef<number | null>(null);

  const isOnProgramPage = location.startsWith('/programs');
  const isOnFacilitiesPage = location === '/facilities';
  const isOnContactPage = location === '/contact-us';
  const isOnLifePage = location === '/life-at-sims';
  const isOnAboutSection = isAboutSectionPath(location);
  const isOnAdmissionsPage = location === '/admissions';

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopProgramsOpen(false);
    setDesktopAboutOpen(false);
    setMobileProgramsOpen(false);
    setMobileAboutOpen(false);
    setMobileOpenCategory(null);
  }, [location]);

  // Keep compact vs desktop chrome in sync when the viewport crosses xl
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setMobileMenuOpen(false);
        setMobileProgramsOpen(false);
        setMobileAboutOpen(false);
        setMobileOpenCategory(null);
      } else {
        setDesktopProgramsOpen(false);
        setDesktopAboutOpen(false);
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  React.useEffect(() => {
    if (!desktopProgramsOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopProgramsOpen(false);
        programsButtonRef.current?.focus();
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setDesktopProgramsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [desktopProgramsOpen]);

  React.useEffect(() => {
    if (!desktopAboutOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopAboutOpen(false);
        aboutButtonRef.current?.focus();
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setDesktopAboutOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [desktopAboutOpen]);

  const clearCloseTimer = () => {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const clearAboutCloseTimer = () => {
    if (aboutCloseTimerRef.current != null) {
      window.clearTimeout(aboutCloseTimerRef.current);
      aboutCloseTimerRef.current = null;
    }
  };

  const openDesktopPrograms = () => {
    clearCloseTimer();
    setDesktopAboutOpen(false);
    setDesktopProgramsOpen(true);
  };

  const scheduleCloseDesktopPrograms = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setDesktopProgramsOpen(false);
    }, 160);
  };

  const openDesktopAbout = () => {
    clearAboutCloseTimer();
    setDesktopProgramsOpen(false);
    setDesktopAboutOpen(true);
  };

  const scheduleCloseDesktopAbout = () => {
    clearAboutCloseTimer();
    aboutCloseTimerRef.current = window.setTimeout(() => {
      setDesktopAboutOpen(false);
    }, 160);
  };

  const activePrograms = getProgramsByCategory(activeCategory);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm py-3',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 xl:px-5 2xl:px-6">
        <div className="flex items-center justify-between gap-3 xl:gap-4">
          <SimsLogo variant="header" linkToHome priority />

          {/* Desktop Nav — xl+ so mid-widths use compact/hamburger instead of crowded full nav */}
          <nav
            className="hidden xl:flex items-center gap-0 2xl:gap-1 flex-1 justify-center min-w-0"
            aria-label="Primary"
          >
            {SITE_CONTENT.header.navLinks.map((link) => {
              if (link.label === 'About') {
                return (
                  <div
                    key={link.label}
                    ref={aboutRef}
                    className="relative"
                    onMouseEnter={openDesktopAbout}
                    onMouseLeave={scheduleCloseDesktopAbout}
                  >
                    <button
                      ref={aboutButtonRef}
                      type="button"
                      className={cn(
                        'inline-flex items-center gap-0.5 2xl:gap-1 text-xs 2xl:text-sm font-medium transition-colors px-1 2xl:px-2.5 py-2 rounded-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40',
                        desktopAboutOpen || isOnAboutSection
                          ? 'text-sims-primary-2 bg-sims-surface'
                          : 'text-sims-text hover:text-sims-primary-2',
                      )}
                      aria-haspopup="true"
                      aria-expanded={desktopAboutOpen}
                      aria-controls="about-megamenu"
                      onClick={() => setDesktopAboutOpen((open) => !open)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setDesktopAboutOpen((open) => !open);
                        }
                        if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          setDesktopAboutOpen(true);
                        }
                      }}
                    >
                      About
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform',
                          desktopAboutOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {desktopAboutOpen && (
                        <motion.div
                          id="about-megamenu"
                          role="menu"
                          aria-label="About SIMS pages"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.16 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 md:pt-10 w-[min(92vw,340px)] z-[60]"
                          onMouseEnter={openDesktopAbout}
                          onMouseLeave={scheduleCloseDesktopAbout}
                        >
                          <div className="bg-white rounded-2xl border border-sims-border shadow-xl overflow-hidden p-2">
                            <ul className="space-y-0.5">
                              {ABOUT_NAV_LINKS.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    role="menuitem"
                                    className={cn(
                                      'block rounded-xl px-3 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40',
                                      location === item.href
                                        ? 'bg-sims-surface text-sims-primary'
                                        : 'hover:bg-sims-surface text-sims-text',
                                    )}
                                    onClick={() => setDesktopAboutOpen(false)}
                                  >
                                    <span className="block text-sm font-semibold leading-snug">
                                      {item.label}
                                    </span>
                                    <span className="block text-xs text-sims-text-muted mt-0.5">
                                      {item.description}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.label === 'Programs') {
                return (
                  <div
                    key={link.label}
                    ref={programsRef}
                    className="relative"
                    onMouseEnter={openDesktopPrograms}
                    onMouseLeave={scheduleCloseDesktopPrograms}
                  >
                    <button
                      ref={programsButtonRef}
                      type="button"
                      className={cn(
                        'inline-flex items-center gap-0.5 2xl:gap-1 text-xs 2xl:text-sm font-medium transition-colors px-1 2xl:px-2.5 py-2 rounded-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40',
                        desktopProgramsOpen || isOnProgramPage
                          ? 'text-sims-primary-2 bg-sims-surface'
                          : 'text-sims-text hover:text-sims-primary-2',
                      )}
                      aria-haspopup="true"
                      aria-expanded={desktopProgramsOpen}
                      aria-controls="programs-megamenu"
                      onClick={() => setDesktopProgramsOpen((open) => !open)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setDesktopProgramsOpen((open) => !open);
                        }
                        if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          setDesktopProgramsOpen(true);
                        }
                      }}
                    >
                      Programs
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform',
                          desktopProgramsOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {desktopProgramsOpen && (
                        <motion.div
                          id="programs-megamenu"
                          role="menu"
                          aria-label="Programs by category"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.16 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 md:pt-10 w-[min(92vw,640px)] z-[60]"
                          onMouseEnter={openDesktopPrograms}
                          onMouseLeave={scheduleCloseDesktopPrograms}
                        >
                          <div className="bg-white rounded-2xl border border-sims-border shadow-xl overflow-hidden grid grid-cols-[200px_1fr]">
                            <div
                              className="bg-sims-surface-2/80 border-r border-sims-border p-2"
                              role="group"
                              aria-label="Program categories"
                            >
                              {PROGRAM_CATEGORIES.map((category) => {
                                const isActive = activeCategory === category.id;
                                return (
                                  <button
                                    key={category.id}
                                    type="button"
                                    role="menuitem"
                                    className={cn(
                                      'w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40',
                                      isActive
                                        ? 'bg-white text-sims-primary shadow-sm'
                                        : 'text-sims-text-muted hover:bg-white/70 hover:text-sims-primary',
                                    )}
                                    aria-current={isActive ? 'true' : undefined}
                                    onMouseEnter={() => setActiveCategory(category.id)}
                                    onFocus={() => setActiveCategory(category.id)}
                                    onClick={() => setActiveCategory(category.id)}
                                  >
                                    <span>{category.label}</span>
                                    <ChevronRight
                                      className={cn(
                                        'w-4 h-4 shrink-0',
                                        isActive ? 'text-sims-primary-2' : 'text-sims-border',
                                      )}
                                      aria-hidden="true"
                                    />
                                  </button>
                                );
                              })}
                            </div>

                            <div className="p-3 bg-white" role="group" aria-label={`${PROGRAM_CATEGORIES.find((c) => c.id === activeCategory)?.label} programs`}>
                              <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-sims-text-muted">
                                {PROGRAM_CATEGORIES.find((c) => c.id === activeCategory)?.label}
                              </p>
                              <ul className="space-y-0.5">
                                {activePrograms.map((program) => (
                                  <li key={program.slug}>
                                    <Link
                                      href={programPath(program.slug)}
                                      role="menuitem"
                                      className={cn(
                                        'block rounded-xl px-3 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40',
                                        location === programPath(program.slug)
                                          ? 'bg-sims-surface text-sims-primary'
                                          : 'hover:bg-sims-surface text-sims-text',
                                      )}
                                      onClick={() => setDesktopProgramsOpen(false)}
                                    >
                                      <span className="block text-sm font-semibold leading-snug">
                                        {program.name}
                                      </span>
                                      <span className="block text-xs text-sims-text-muted mt-0.5">
                                        {program.duration}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-2 pt-2 border-t border-sims-border/70 px-2">
                                <a
                                  href="/#programs"
                                  className="text-xs font-semibold text-sims-primary-2 hover:text-sims-primary transition-colors"
                                  onClick={() => setDesktopProgramsOpen(false)}
                                >
                                  View all programs →
                                </a>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.href.startsWith('/')) {
                const isActive =
                  (link.label === 'Facilities' && isOnFacilitiesPage) ||
                  (link.label === 'Contact Us' && isOnContactPage) ||
                  (link.label === 'Life at SIMS' && isOnLifePage) ||
                  (link.label === 'Admissions' && isOnAdmissionsPage) ||
                  location === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      'text-xs 2xl:text-sm font-medium transition-colors px-1 2xl:px-2.5 py-2 rounded-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40',
                      isActive
                        ? 'text-sims-primary-2 bg-sims-surface'
                        : 'text-sims-text hover:text-sims-primary-2',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.label}
                  href={homeSectionHref(link.href)}
                  className="text-xs 2xl:text-sm font-medium text-sims-text hover:text-sims-primary-2 transition-colors px-1 2xl:px-2.5 py-2 rounded-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions — matches nav collapse at xl */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 shrink-0">
            <CallAdmissionsButton />
            <Button
              className="h-9 2xl:h-10 bg-sims-primary hover:bg-sims-primary-2 text-white rounded-lg px-3.5 2xl:px-5 text-sm whitespace-nowrap"
              onClick={onApplyClick}
            >
              Apply Now
            </Button>
          </div>

          {/* Compact / mobile: call + menu (below xl) */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <CallAdmissionsButton />
            <button
              type="button"
              className="p-2 -mr-1 text-sims-primary z-50 rounded-lg hover:bg-sims-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-sims-border shadow-lg max-h-[min(80vh,640px)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col gap-1">
              {SITE_CONTENT.header.navLinks.map((link) => {
                if (link.label === 'About') {
                  return (
                    <div key={link.label} className="border-b border-sims-border/60 pb-2 mb-1">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-base font-medium text-sims-text py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40 rounded-md"
                        aria-expanded={mobileAboutOpen}
                        aria-controls="mobile-about-accordion"
                        onClick={() => setMobileAboutOpen((open) => !open)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setMobileAboutOpen((open) => !open);
                          }
                          if (e.key === 'Escape') {
                            setMobileAboutOpen(false);
                          }
                        }}
                      >
                        About
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 text-sims-text-muted transition-transform',
                            mobileAboutOpen && 'rotate-180',
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {mobileAboutOpen && (
                        <div id="mobile-about-accordion" className="pb-2 space-y-0.5">
                          {ABOUT_NAV_LINKS.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                'block rounded-lg px-3 py-2.5 text-sm transition-colors',
                                location === item.href
                                  ? 'bg-sims-surface text-sims-primary font-semibold'
                                  : 'text-sims-text-muted hover:bg-sims-surface hover:text-sims-primary',
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.label === 'Programs') {
                  return (
                    <div key={link.label} className="border-b border-sims-border/60 pb-2 mb-1">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-base font-medium text-sims-text py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40 rounded-md"
                        aria-expanded={mobileProgramsOpen}
                        aria-controls="mobile-programs-accordion"
                        onClick={() => setMobileProgramsOpen((open) => !open)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setMobileProgramsOpen((open) => !open);
                          }
                          if (e.key === 'Escape') {
                            setMobileProgramsOpen(false);
                          }
                        }}
                      >
                        Programs
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 text-sims-text-muted transition-transform',
                            mobileProgramsOpen && 'rotate-180',
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {mobileProgramsOpen && (
                        <div id="mobile-programs-accordion" className="pb-2 space-y-1">
                          {PROGRAM_CATEGORIES.map((category) => {
                            const isOpen = mobileOpenCategory === category.id;
                            const programs = getProgramsByCategory(category.id);
                            return (
                              <div
                                key={category.id}
                                className="rounded-xl bg-sims-surface/80 overflow-hidden"
                              >
                                <button
                                  type="button"
                                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-sims-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40"
                                  aria-expanded={isOpen}
                                  onClick={() =>
                                    setMobileOpenCategory((current) =>
                                      current === category.id ? null : category.id,
                                    )
                                  }
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      setMobileOpenCategory((current) =>
                                        current === category.id ? null : category.id,
                                      );
                                    }
                                    if (e.key === 'Escape') {
                                      setMobileOpenCategory(null);
                                    }
                                  }}
                                >
                                  {category.label}
                                  <ChevronDown
                                    className={cn(
                                      'w-4 h-4 transition-transform',
                                      isOpen && 'rotate-180',
                                    )}
                                    aria-hidden="true"
                                  />
                                </button>
                                {isOpen && (
                                  <ul className="px-2 pb-2 space-y-0.5">
                                    {programs.map((program) => (
                                      <li key={program.slug}>
                                        <Link
                                          href={programPath(program.slug)}
                                          className={cn(
                                            'block rounded-lg px-3 py-2.5 text-sm transition-colors',
                                            location === programPath(program.slug)
                                              ? 'bg-white text-sims-primary font-semibold shadow-sm'
                                              : 'text-sims-text-muted hover:bg-white hover:text-sims-primary',
                                          )}
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {program.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                          <a
                            href="/#programs"
                            className="block px-3 py-2 text-sm font-semibold text-sims-primary-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View all programs →
                          </a>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.href.startsWith('/')) {
                  const isActive =
                    (link.label === 'Facilities' && isOnFacilitiesPage) ||
                    (link.label === 'Contact Us' && isOnContactPage) ||
                    (link.label === 'Life at SIMS' && isOnLifePage) ||
                    location === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        'text-base font-medium py-3 border-b border-sims-border/60 last:border-0',
                        isActive ? 'text-sims-primary-2' : 'text-sims-text',
                      )}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={homeSectionHref(link.href)}
                    className="text-base font-medium text-sims-text py-3 border-b border-sims-border/60 last:border-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="flex flex-col gap-2.5 mt-4 pt-1">
                <Button
                  variant="outline"
                  className="w-full justify-center h-11 rounded-lg"
                  asChild
                >
                  <a href={WHATSAPP_CONTACT.tel}>Call Admissions</a>
                </Button>
                <Button
                  className="w-full justify-center h-11 bg-sims-primary rounded-lg"
                  onClick={() => {
                    onApplyClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announcement Strip */}
      <div className="w-full bg-amber-500 border-t border-amber-600/30 py-1.5 absolute top-full left-0 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm font-semibold text-slate-900 tracking-wide">
            {SITE_CONTENT.header.announcement}
          </p>
        </div>
      </div>
    </header>
  );
}
