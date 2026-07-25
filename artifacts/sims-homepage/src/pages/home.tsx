import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FlaskConical, Users, Building2, GraduationCap, CheckCircle2, FileText, MessagesSquare, CheckSquare, Phone, Activity, Radio, Heart, Book, Youtube, Facebook, Instagram, ChevronRight } from 'lucide-react';
import { SITE_CONTENT } from '@/lib/site-content';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading, CourseCard, FacilityCard } from '@/components/Shared';
import { Button } from '@/components/ui/button';

// Image imports
import heroBg from '@assets/DSC00075-scaled.jpg';
import whyChooseUsImg from '@assets/12.png';
import facilityFeatured from '@assets/9.png';
import facilityPreview1 from '@assets/DSC00134-scaled.jpg';
import facilityPreview2 from '@assets/DSC00118-scaled.jpg';
import gallery1 from '@assets/DSC00840-scaled.jpg';
import gallery2 from '@assets/85cd0d1b-dedd-429d-9b22-297d0c72f2cc-scaled.jpg';
import gallery3 from '@assets/2 (1).png';
import gallery4 from '@assets/DSC00066-scaled.jpg';
import gallery5 from '@assets/DSC00177-scaled.jpg';
import gallery6 from '@assets/DSC00698-1-scaled.jpg';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleApplyClick = () => setModalOpen(true);

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={handleApplyClick} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      {/* SECTION 2: HERO */}
      <section id="home" className="relative pt-[120px] md:pt-[160px] min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="SIMS students on campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sims-primary/90 via-sims-primary/70 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
              <motion.h1 variants={fadeUpVariant} className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
                {SITE_CONTENT.hero.h1}
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {SITE_CONTENT.hero.subheading}
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white border-0 h-14 px-8 text-lg font-bold shadow-lg" onClick={handleApplyClick}>
                  Apply Now 2025–26
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white hover:text-sims-primary h-14 px-8 text-lg font-semibold backdrop-blur-sm" asChild>
                  <a href="#programs">Explore Programs</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-x-6 gap-y-3 mt-12 pt-8 border-t border-white/20">
                {SITE_CONTENT.hero.badges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE SIMS */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/5] lg:aspect-square">
                <img src={whyChooseUsImg} alt="SIMS students in training" className="w-full h-full object-cover" />
                <div className="absolute inset-0 shadow-inner rounded-3xl pointer-events-none"></div>
              </div>
              {/* Floating Quote */}
              <div className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-12 bg-sims-primary text-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[280px] md:max-w-[320px]">
                <p className="font-display italic text-lg leading-snug">"{SITE_CONTENT.whyChooseUs.quote}"</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:pl-8 mt-12 lg:mt-0">
              <SectionHeading title={SITE_CONTENT.whyChooseUs.title} className="mb-12" />
              <div className="space-y-8">
                {SITE_CONTENT.whyChooseUs.features.map((feature, i) => {
                  const icons = [FlaskConical, Users, Building2, GraduationCap];
                  const Icon = icons[i % icons.length];
                  return (
                    <motion.div key={i} variants={fadeUpVariant} className="flex gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-sims-surface flex items-center justify-center flex-shrink-0 group-hover:bg-sims-primary group-hover:text-white text-sims-primary transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-sims-text mb-2 group-hover:text-sims-primary transition-colors">{feature.title}</h3>
                        <p className="text-sims-text-muted leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROGRAMS OVERVIEW */}
      <section id="programs" className="py-24 bg-sims-bg border-y border-sims-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <SectionHeading 
              title={SITE_CONTENT.programs.title} 
              subtitle={SITE_CONTENT.programs.subheading}
              centered
              className="mb-16"
            />
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SITE_CONTENT.programs.courses.map((course, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>

          {SITE_CONTENT.programs.comingSoon.length > 0 && (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mt-20 text-center">
              <h3 className="text-sm font-bold uppercase tracking-wider text-sims-text-muted mb-6">Upcoming Programs</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {SITE_CONTENT.programs.comingSoon.map(program => (
                  <span key={program} className="px-4 py-2 bg-white border border-sims-border rounded-full text-sm font-medium text-sims-text-muted shadow-sm">
                    {program}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* SECTION 5: ADMISSIONS PROCESS */}
      <section id="admissions" className="py-24 bg-sims-surface-2">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.admissions.title} centered className="mb-16" />
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-sims-border/80"></div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10"
            >
              {SITE_CONTENT.admissions.steps.map((step, i) => {
                const icons = [FileText, MessagesSquare, Users, CheckSquare];
                const Icon = icons[i % icons.length];
                return (
                  <motion.div key={i} variants={fadeUpVariant} className="relative flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-sims-surface-2 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10 mb-6">
                      <Icon className="w-8 h-8 text-sims-primary" />
                    </div>
                    <div className="text-5xl font-display font-black text-sims-primary/10 absolute top-4 -z-10 group-hover:text-sims-primary/20 transition-colors">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-sims-text mb-3">{step.title}</h3>
                    <p className="text-sims-text-muted">{step.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mt-16 text-center">
            <Button size="lg" className="bg-sims-primary hover:bg-sims-primary-2 text-white h-14 px-10 text-lg font-bold shadow-lg" onClick={handleApplyClick}>
              Start Your Application
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: PLACEMENTS */}
      <section id="placements" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.placements.title} centered className="mb-16" />

          {/* Outcomes */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SITE_CONTENT.placements.outcomes.map((outcome, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="p-8 rounded-2xl bg-sims-bg border border-sims-border/60 hover:bg-white hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-sims-primary mb-3">{outcome.title}</h3>
                <p className="text-sims-text-muted leading-relaxed">{outcome.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: FACILITIES */}
      <section id="facilities" className="py-24 bg-sims-bg border-y border-sims-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.facilities.title} className="mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
                <img src={facilityFeatured} alt="Faculty mentoring session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="grid grid-cols-2 gap-6 h-[200px]">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src={facilityPreview1} alt="Anthropometric assessment skills lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src={facilityPreview2} alt="Clinical skills training lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="lg:col-span-5 flex flex-col justify-center gap-4 bg-white p-8 rounded-3xl shadow-sm border border-sims-border"
            >
              {SITE_CONTENT.facilities.items.map((facility, i) => (
                <motion.div key={i} variants={fadeUpVariant}>
                  <FacilityCard facility={facility} />
                </motion.div>
              ))}
              
              <div className="mt-8 pt-8 border-t border-sims-border">
                <Button variant="ghost" className="w-full justify-between text-sims-primary hover:text-sims-primary-2 hover:bg-sims-surface h-12" onClick={handleApplyClick}>
                  <span className="font-semibold">Schedule a Campus Tour</span>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8: GALLERY */}
      <section id="life" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.gallery.title} centered className="mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => {
              // Create masonry look with different spans
              const isLarge = i === 0 || i === 3;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative rounded-2xl overflow-hidden group cursor-pointer ${isLarge ? 'md:row-span-2' : 'row-span-1'}`}
                >
                  <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sims-primary/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Life at SIMS
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white rounded-full px-8">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9: SOCIAL CONNECT */}
      <section id="contact" className="py-24 bg-sims-surface-2 border-t border-sims-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.social.title} centered className="mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* YouTube */}
            <a href={SITE_CONTENT.social.youtube} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-sims-border hover:shadow-md transition-shadow group flex items-center gap-4">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Youtube className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-sims-text">SIMS DEHRADUN</h4>
                <p className="text-sm text-sims-text-muted">@SIMSDEHRADUN</p>
                <span className="text-xs font-semibold text-red-600 mt-1 inline-block">Subscribe →</span>
              </div>
            </a>
            
            {/* Facebook */}
            <a href={SITE_CONTENT.social.facebook} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-sims-border hover:shadow-md transition-shadow group flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Facebook className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-sims-text">Sushila Institute</h4>
                <p className="text-sm text-sims-text-muted">Official Page</p>
                <span className="text-xs font-semibold text-blue-600 mt-1 inline-block">Visit Page →</span>
              </div>
            </a>
            
            {/* Instagram */}
            <a href={SITE_CONTENT.social.instagram} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-sims-border hover:shadow-md transition-shadow group flex items-center gap-4">
              <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 group-hover:text-white transition-colors">
                <Instagram className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-sims-text">@simscollegedehradun</h4>
                <p className="text-sm text-sims-text-muted">Follow for updates</p>
                <span className="text-xs font-semibold text-pink-600 mt-1 inline-block">Follow →</span>
              </div>
            </a>
          </div>

          <div className="flex justify-center">
            <a 
              href={SITE_CONTENT.social.whatsapp} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <MessageCircleIcon className="w-6 h-6" />
              Chat on WhatsApp ({SITE_CONTENT.social.whatsappNumber})
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <Footer />
    </div>
  );
}

function MessageCircleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}
