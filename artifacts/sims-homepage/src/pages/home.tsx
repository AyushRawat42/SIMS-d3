import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FlaskConical, Users, Building2, GraduationCap, CheckCircle2, FileText, MessagesSquare, CheckSquare, ChevronRight, Youtube, Facebook, Instagram } from 'lucide-react';
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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const sectionPad = "py-16 md:py-20 lg:py-24";
const containerPad = "container mx-auto px-4 md:px-6";
const headingGap = "mb-10 md:mb-12";

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleApplyClick = () => setModalOpen(true);

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={handleApplyClick} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      {/* SECTION 2: HERO */}
      <section id="home" className="relative pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 min-h-[85vh] md:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="SIMS students on campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sims-primary/92 via-sims-primary/75 to-sims-primary/30"></div>
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className={`${containerPad} relative z-10`}>
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-5 md:gap-6">
              <motion.h1 variants={fadeUpVariant} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight">
                {SITE_CONTENT.hero.h1}
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
                {SITE_CONTENT.hero.subheading}
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white border-0 h-12 px-7 text-base font-bold shadow-lg rounded-lg"
                  onClick={handleApplyClick}
                >
                  Apply Now 2025–26
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-white/10 hover:bg-white hover:text-sims-primary h-12 px-7 text-base font-semibold backdrop-blur-sm rounded-lg"
                  asChild
                >
                  <a href="#programs">Explore Programs</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-x-5 gap-y-2.5 mt-6 md:mt-8 pt-6 md:pt-7 border-t border-white/20">
                {SITE_CONTENT.hero.badges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE SIMS */}
      <section id="about" className={`${sectionPad} bg-white relative overflow-hidden`}>
        <div className={containerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUpVariant}
              className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-none"
            >
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-square">
                <img src={whyChooseUsImg} alt="SIMS students in training" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-6 sm:max-w-[280px] bg-sims-primary text-white p-5 rounded-xl shadow-lg">
                <p className="font-display italic text-base md:text-lg leading-snug">"{SITE_CONTENT.whyChooseUs.quote}"</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="lg:pl-2"
            >
              <SectionHeading title={SITE_CONTENT.whyChooseUs.title} className={headingGap} />
              <div className="space-y-6 md:space-y-7">
                {SITE_CONTENT.whyChooseUs.features.map((feature, i) => {
                  const icons = [FlaskConical, Users, Building2, GraduationCap];
                  const Icon = icons[i % icons.length];
                  return (
                    <motion.div key={i} variants={fadeUpVariant} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-sims-surface flex items-center justify-center flex-shrink-0 group-hover:bg-sims-primary group-hover:text-white text-sims-primary transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-lg font-bold text-sims-text mb-1 group-hover:text-sims-primary transition-colors leading-snug">{feature.title}</h3>
                        <p className="text-sims-text-muted leading-relaxed text-[0.9375rem]">{feature.description}</p>
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
      <section id="programs" className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <SectionHeading 
              title={SITE_CONTENT.programs.title} 
              subtitle={SITE_CONTENT.programs.subheading}
              centered
              className={headingGap}
            />
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6"
          >
            {SITE_CONTENT.programs.courses.map((course, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="h-full">
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: ADMISSIONS PROCESS */}
      <section id="admissions" className={`${sectionPad} bg-sims-surface-2`}>
        <div className={containerPad}>
          <SectionHeading title={SITE_CONTENT.admissions.title} centered className={headingGap} />
          
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-sims-border"></div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10"
            >
              {SITE_CONTENT.admissions.steps.map((step, i) => {
                const icons = [FileText, MessagesSquare, Users, CheckSquare];
                const Icon = icons[i % icons.length];
                return (
                  <motion.div key={i} variants={fadeUpVariant} className="relative flex flex-col items-center text-center group px-2">
                    <div className="w-20 h-20 bg-white rounded-full border-[3px] border-sims-surface-2 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 relative z-10 mb-5">
                      <Icon className="w-7 h-7 text-sims-primary" />
                    </div>
                    <div className="text-4xl font-display font-black text-sims-primary/10 absolute top-2 -z-10 select-none">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-sims-text mb-2 leading-snug">{step.title}</h3>
                    <p className="text-sm text-sims-text-muted leading-relaxed max-w-[220px]">{step.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mt-12 md:mt-14 text-center">
            <Button
              size="lg"
              className="bg-sims-primary hover:bg-sims-primary-2 text-white h-12 px-8 text-base font-bold shadow-md rounded-lg"
              onClick={handleApplyClick}
            >
              Start Your Application
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: PLACEMENTS */}
      <section id="placements" className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading title={SITE_CONTENT.placements.title} centered className={headingGap} />

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          >
            {SITE_CONTENT.placements.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className="p-6 md:p-7 rounded-2xl bg-sims-bg border border-sims-border/70 hover:bg-white hover:shadow-md hover:border-sims-primary/15 transition-all h-full"
              >
                <h3 className="text-lg font-bold text-sims-primary mb-2 leading-snug">{outcome.title}</h3>
                <p className="text-sm md:text-[0.9375rem] text-sims-text-muted leading-relaxed">{outcome.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: FACILITIES */}
      <section id="facilities" className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading title={SITE_CONTENT.facilities.title} className={headingGap} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex flex-col gap-4 md:gap-5"
            >
              <div className="rounded-2xl overflow-hidden shadow-md h-56 sm:h-72 md:h-80 lg:h-[360px]">
                <img src={facilityFeatured} alt="Faculty mentoring session" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-5 h-32 sm:h-40 md:h-44">
                <div className="rounded-xl overflow-hidden shadow-sm h-full">
                  <img src={facilityPreview1} alt="Anthropometric assessment skills lab" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm h-full">
                  <img src={facilityPreview2} alt="Clinical skills training lab" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="lg:col-span-5 flex flex-col justify-between gap-2 bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-sims-border"
            >
              <div className="flex flex-col gap-1">
                {SITE_CONTENT.facilities.items.map((facility, i) => (
                  <motion.div key={i} variants={fadeUpVariant}>
                    <FacilityCard facility={facility} />
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 pt-5 border-t border-sims-border flex flex-col gap-2">
                <Button
                  variant="ghost"
                  className="w-full justify-between text-sims-primary hover:text-sims-primary-2 hover:bg-sims-surface h-11 rounded-lg px-3"
                  asChild
                >
                  <a href="/facilities">
                    <span className="font-semibold">Explore All Facilities</span>
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-sims-primary hover:text-sims-primary-2 hover:bg-sims-surface h-11 rounded-lg px-3"
                  onClick={handleApplyClick}
                >
                  <span className="font-semibold">Schedule a Campus Tour</span>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8: GALLERY */}
      <section id="life" className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading title={SITE_CONTENT.gallery.title} centered className={headingGap} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px]">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => {
              const isLarge = i === 0 || i === 3;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className={`relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer ${isLarge ? 'sm:row-span-2' : 'row-span-1'}`}
                >
                  <img src={img} alt={`Life at SIMS ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sims-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Life at SIMS
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          <div className="mt-8 md:mt-10 text-center">
            <Button
              variant="outline"
              className="border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white rounded-lg h-11 px-7"
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9: SOCIAL CONNECT */}
      <section id="contact" className={`${sectionPad} bg-sims-surface-2 border-t border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading title={SITE_CONTENT.social.title} centered className={headingGap} />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto mb-10">
            <a
              href={SITE_CONTENT.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-5 rounded-2xl shadow-sm border border-sims-border hover:shadow-md hover:border-red-200 transition-all group flex items-center gap-3.5 h-full"
            >
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                <Youtube className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-sims-text text-sm leading-snug truncate">SIMS DEHRADUN</h4>
                <p className="text-xs text-sims-text-muted mt-0.5">@SIMSDEHRADUN</p>
                <span className="text-xs font-semibold text-red-600 mt-1.5 inline-block">Subscribe →</span>
              </div>
            </a>
            
            <a
              href={SITE_CONTENT.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-5 rounded-2xl shadow-sm border border-sims-border hover:shadow-md hover:border-blue-200 transition-all group flex items-center gap-3.5 h-full"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                <Facebook className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-sims-text text-sm leading-snug truncate">Sushila Institute</h4>
                <p className="text-xs text-sims-text-muted mt-0.5">Official Page</p>
                <span className="text-xs font-semibold text-blue-600 mt-1.5 inline-block">Visit Page →</span>
              </div>
            </a>
            
            <a
              href={SITE_CONTENT.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-5 rounded-2xl shadow-sm border border-sims-border hover:shadow-md hover:border-pink-200 transition-all group flex items-center gap-3.5 h-full"
            >
              <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 group-hover:text-white transition-colors shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-sims-text text-sm leading-snug truncate">@simscollegedehradun</h4>
                <p className="text-xs text-sims-text-muted mt-0.5">Follow for updates</p>
                <span className="text-xs font-semibold text-pink-600 mt-1.5 inline-block">Follow →</span>
              </div>
            </a>
          </div>

          <div className="flex justify-center">
            <a 
              href={SITE_CONTENT.social.whatsapp} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white px-6 sm:px-8 h-12 rounded-lg font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all max-w-full"
            >
              <MessageCircleIcon className="w-5 h-5 shrink-0" />
              <span className="truncate">Chat on WhatsApp ({SITE_CONTENT.social.whatsappNumber})</span>
            </a>
          </div>
        </div>
      </section>

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
