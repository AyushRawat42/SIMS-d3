import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'wouter';
import {
  ArrowRight,
  Bus,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Microscope,
  ShieldCheck,
  Utensils,
  Users2,
  Wifi,
  X,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { Button } from '@/components/ui/button';
import { usePreloadHeroImage } from '@/hooks/usePreloadHeroImage';
import { usePageSeo } from '@/lib/seo';
import { LIFE_HERO } from '@/lib/life-at-sims';

const WHATSAPP_TOUR_URL =
  'https://wa.me/919759761244?text=Hello%20SIMS%20Admissions%2C%20I%20would%20like%20to%20book%20a%20campus%20tour%20at%20Selaqui%2C%20Dehradun.';
const OPTIMIZED_IMAGE_PATH = '/attached_assets/optimized';

type GalleryCategory =
  | 'All'
  | 'Labs & Classrooms'
  | 'Events & Blood Donation'
  | 'Awards & Certificates'
  | 'Campus & Hostel';

interface GalleryItem {
  id: string;
  name: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  caption: string;
  featured?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'freshers-dance',
    name: 'DSC00317',
    title: 'Freshers Party Dance Performance',
    category: 'Events & Blood Donation',
    caption: 'SIMS students perform a group dance on stage during a Freshers Party cultural event.',
    featured: true,
  },
  {
    id: 'classroom-learning',
    name: 'DSC00259',
    title: 'Classroom Learning Session',
    category: 'Labs & Classrooms',
    caption: 'Students take handwritten notes during a classroom learning session.',
  },
  {
    id: 'blood-donation',
    name: 'DSC00096',
    title: 'Campus Blood Donation Drive',
    category: 'Events & Blood Donation',
    caption: 'A SIMS student donates blood during a campus blood donation drive.',
  },
  {
    id: 'freshers-dancers',
    name: 'DSC00738',
    title: 'Freshers Party Stage Dance',
    category: 'Events & Blood Donation',
    caption: 'Two SIMS students dance in red sarees on a decorated Freshers Party stage.',
  },
  {
    id: 'students-on-steps',
    name: 'DSC00116',
    title: 'Students Together on Campus',
    category: 'Campus & Hostel',
    caption: 'A cheerful group of SIMS students in uniform poses together on campus steps.',
  },
  {
    id: 'classroom-seminar',
    name: 'DSC00434',
    title: 'Classroom Seminar Presentation',
    category: 'Labs & Classrooms',
    caption: 'A faculty member presents from a wooden lectern during a classroom seminar.',
  },
  {
    id: 'students-campus-transport',
    name: 'DSC00578',
    title: 'Students at Campus Transport',
    category: 'Campus & Hostel',
    caption: 'Two SIMS students in uniform pose at the door of a campus transport bus.',
  },
  {
    id: 'freshers-award-winners',
    name: 'DSC00836',
    title: 'Freshers Party Award Winners',
    category: 'Awards & Certificates',
    caption: 'Freshers Party award winners and faculty pose together on a decorated stage.',
    featured: true,
  },
  {
    id: 'festive-campus-celebration',
    name: 'DSC00408',
    title: 'Festive Campus Celebration',
    category: 'Events & Blood Donation',
    caption: 'SIMS students celebrate together beneath a festive balloon arch marked 2024.',
  },
  {
    id: 'freshers-stage-performance',
    name: 'DSC00446',
    title: 'Freshers Party Stage Performance',
    category: 'Events & Blood Donation',
    caption: 'Students perform on stage at the SIMS Freshers Party with balloon decorations.',
  },
  {
    id: 'campus-celebration',
    name: 'DSC00382',
    title: 'Campus Celebration',
    category: 'Events & Blood Donation',
    caption: 'Students and guests share a moment during a festive campus celebration at SIMS.',
  },
  {
    id: 'cultural-group-dance',
    name: 'DSC00456',
    title: 'Cultural Group Dance',
    category: 'Events & Blood Donation',
    caption: 'Male SIMS students perform an energetic group dance at a cultural function.',
    featured: true,
  },
  {
    id: 'recognition-ceremony',
    name: 'DSC00413',
    title: 'Certificates and Trophies',
    category: 'Awards & Certificates',
    caption: 'SIMS students hold certificates of recognition and trophies during a campus celebration.',
  },
  {
    id: 'green-campus-drive',
    name: 'DSC00080',
    title: 'Campus Tree-Planting Initiative',
    category: 'Campus & Hostel',
    caption: 'SIMS students plant a sapling near the campus canteen during a green initiative.',
  },
  {
    id: 'campus-event-group',
    name: 'DSC00697',
    title: 'Students and Faculty After a Campus Event',
    category: 'Campus & Hostel',
    caption: 'SIMS students and faculty gather outdoors for a group photograph after a campus event.',
  },
  {
    id: 'independence-day-awards',
    name: 'DSC00159',
    title: 'Independence Day Recognition',
    category: 'Awards & Certificates',
    caption: 'Students receive certificates and trophies on stage during an Independence Day programme.',
  },
  {
    id: 'health-camp',
    name: 'DSC00171',
    title: 'Campus Health Camp',
    category: 'Events & Blood Donation',
    caption: 'SIMS students and staff participate in a blood donation or health camp session on campus.',
  },
  {
    id: 'faculty-campus-gathering',
    name: 'DSC00123',
    title: 'Faculty and Staff Gathering',
    category: 'Campus & Hostel',
    caption: 'SIMS faculty and staff gather for a group photograph during a campus celebration.',
  },
  {
    id: 'faculty-classroom-teaching',
    name: 'DSC00161',
    title: 'Faculty Classroom Teaching',
    category: 'Labs & Classrooms',
    caption: 'A SIMS faculty member teaches clinical concepts at a classroom whiteboard.',
  },
  {
    id: 'health-assessment-lecture',
    name: 'DSC00188',
    title: 'Health Assessment Lecture',
    category: 'Labs & Classrooms',
    caption: 'A SIMS instructor leads a health assessment lecture for nursing students.',
  },
];

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Labs & Classrooms',
  'Events & Blood Donation',
  'Awards & Certificates',
  'Campus & Hostel',
];

const TIMELINE_STEPS = [
  {
    time: '8:30 AM',
    title: 'Smart Classrooms',
    description:
      'Audio-visual lectures, clinical case reviews, and interactive question rounds with senior medical faculty.',
    tag: 'Academic Foundations',
  },
  {
    time: '11:00 AM',
    title: 'Clinical & Simulation Labs',
    description:
      'Hands-on rotations through nursing mannequins, OT sterile suites, pathology microscopes, and physiotherapy units.',
    tag: 'Skills Practicum',
  },
  {
    time: '1:30 PM',
    title: 'Hygienic Mess & Recreation',
    description:
      'Freshly prepared vegetarian lunch, student courtyard gatherings, and time to recharge in the cafeteria.',
    tag: 'Dining & Community',
  },
  {
    time: '2:30 PM',
    title: 'Hospital Postings & Wards',
    description:
      'Clinical placements provide supervised patient interaction and experience in hospital settings.',
    tag: 'Clinical Learning',
  },
  {
    time: '5:00 PM',
    title: 'Sports & Hostel Community',
    description:
      'Badminton, indoor games, library access, group study, and time with the campus community.',
    tag: 'Wellness & Study',
  },
];

const HOSTEL_FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Warden Support & Campus Security',
    description:
      'Residential wardens and campus security support a safe and structured student living environment.',
  },
  {
    icon: Building2,
    title: 'Separate Girls & Boys Hostels',
    description:
      'Separate residential wings provide dedicated student accommodation and spaces for study.',
  },
  {
    icon: Utensils,
    title: 'Hygienic Mess & Dining',
    description:
      'Campus dining facilities provide students with regular meals in a maintained shared setting.',
  },
  {
    icon: Bus,
    title: 'College Bus Transport',
    description:
      'College transport connects the campus with major locations across Dehradun and nearby areas.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi & Digital Learning',
    description:
      'Internet access and library resources support study, research, and collaborative learning.',
  },
  {
    icon: Users2,
    title: 'Ragging-Free Campus',
    description:
      'The anti-ragging framework and student support systems encourage a respectful campus community.',
  },
];

const imagePath = (name: string, size: '640' | '1024' | '1600' | 'full') =>
  `${OPTIMIZED_IMAGE_PATH}/${name}-${size}.webp`;

const imageSrcSet = (name: string) =>
  `${imagePath(name, '640')} 640w, ${imagePath(name, '1024')} 1024w, ${imagePath(name, '1600')} 1600w`;

export function LifeAtSimsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  usePageSeo('/life-at-sims');
  usePreloadHeroImage(LIFE_HERO.src);

  const filteredGallery = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const showPreviousPhoto = () => {
    setLightboxIndex((previous) =>
      previous !== null && previous > 0 ? previous - 1 : filteredGallery.length - 1
    );
  };

  const showNextPhoto = () => {
    setLightboxIndex((previous) =>
      previous !== null && previous < filteredGallery.length - 1 ? previous + 1 : 0
    );
  };

  const openPhoto = (id: string) => {
    const index = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (index < 0) return;
    setActiveCategory('All');
    setLightboxIndex(index);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null);
      if (event.key === 'ArrowLeft') showPreviousPhoto();
      if (event.key === 'ArrowRight') showNextPhoto();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex, filteredGallery.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 1) {
      touchStartX.current = event.touches[0].clientX;
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;

    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined || Math.abs(endX - startX) < 48) return;
    if (endX < startX) showNextPhoto();
    else showPreviousPhoto();
  };

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-sims-bg font-sans selection:bg-sims-primary/20 text-sims-text">
      <Header onApplyClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      <section className="relative overflow-x-hidden overflow-hidden bg-gradient-to-b from-[#071733] via-sims-primary to-[#0f2d5c] pt-24 pb-16 text-white sm:pt-28 md:pb-20 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] opacity-10 [background-size:20px_20px]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-5 lg:col-span-7">
              <div className="inline-flex max-w-full items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-amber-300 backdrop-blur-md sm:text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                <span>Selaqui, Dehradun Campus • Himalayan Foothills</span>
              </div>

              <h1 className="font-display text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Vibrant Campus Life, Dedicated Patient Care & Lifelong Friendships
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Step inside the Selaqui campus of Sushila Institute of Medical Sciences (SIMS),
                Dehradun. Rigorous healthcare learning comes together with cultural events, health
                camps, and a supportive campus community.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 sm:text-sm">
                  <Microscope className="h-4 w-4 shrink-0 text-cyan-300" />
                  Healthcare Learning
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 sm:text-sm">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" />
                  Student Support
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 sm:text-sm">
                  <HeartHandshake className="h-4 w-4 shrink-0 text-rose-300" />
                  Community Health Camps
                </span>
              </div>

              <div className="flex flex-col flex-wrap gap-3.5 pt-3 sm:flex-row">
                <a
                  href={WHATSAPP_TOUR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-500 hover:shadow-emerald-600/30 active:scale-[0.98] sm:w-auto sm:text-base"
                >
                  <MessageCircle className="h-5 w-5 fill-current" />
                  Book Campus Tour
                </a>
                <Button
                  size="lg"
                  className="min-h-[48px] w-full rounded-lg bg-amber-500 px-7 font-bold text-slate-950 shadow-md hover:bg-amber-600 active:scale-[0.98] sm:w-auto"
                  onClick={() => setModalOpen(true)}
                >
                  Apply for Admission
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-[48px] w-full justify-center rounded-lg border-white/30 bg-white/5 px-6 font-medium text-white backdrop-blur-sm hover:bg-white/15 sm:w-auto"
                  asChild
                >
                  <a href="#gallery">Explore Gallery</a>
                </Button>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-12">
                <button
                  type="button"
                  onClick={() => openPhoto('freshers-dance')}
                  aria-label="View Freshers Party dance performance"
                  className="group relative col-span-1 aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-slate-100 shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:col-span-2 sm:aspect-[16/11] lg:col-span-12"
                >
                  <img
                    src={imagePath('DSC00317', '1024')}
                    srcSet={imageSrcSet('DSC00317')}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
                    alt="SIMS students performing a group dance on stage during a Freshers Party cultural event"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 text-left text-xs font-semibold tracking-wide text-white sm:text-sm">
                    Freshers Party cultural performance
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => openPhoto('classroom-learning')}
                  aria-label="View a SIMS classroom learning session"
                  className="group relative col-span-1 aspect-[4/3] overflow-hidden rounded-xl border border-white/20 bg-slate-100 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:col-span-1 lg:col-span-6"
                >
                  <img
                    src={imagePath('DSC00259', '1024')}
                    srcSet={imageSrcSet('DSC00259')}
                    sizes="(max-width: 640px) 100vw, 20vw"
                    alt="SIMS students taking handwritten notes during a classroom learning session"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => openPhoto('blood-donation')}
                  aria-label="View a SIMS campus blood donation drive"
                  className="group relative col-span-1 aspect-[4/3] overflow-hidden rounded-xl border border-white/20 bg-slate-100 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:col-span-1 lg:col-span-6"
                >
                  <img
                    src={imagePath('DSC00096', '1024')}
                    srcSet={imageSrcSet('DSC00096')}
                    sizes="(max-width: 640px) 100vw, 20vw"
                    alt="A SIMS student donating blood during a campus blood donation drive"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="overflow-x-hidden bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <span className="rounded-full border border-sims-border bg-sims-surface px-3 py-1 text-xs font-bold tracking-wider text-sims-primary sm:text-sm">
              Visual Campus Tour
            </span>
            <h2 className="mt-3 mb-3 font-display text-2xl font-bold text-sims-primary sm:text-3xl md:text-4xl">
              Explore Life Across Our Campus
            </h2>
            <p className="text-sm leading-relaxed text-sims-text-muted sm:text-base">
              Explore authentic moments from SIMS classrooms, student activities, campus events, and
              community health initiatives.
            </p>
          </div>

          <div className="-mx-4 mb-8 flex items-center gap-2 overflow-x-auto px-4 pb-3 no-scrollbar sm:mx-0 sm:justify-center sm:px-0">
            {GALLERY_CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={`min-h-[44px] shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                    active
                      ? 'border-sims-primary bg-sims-primary text-white shadow-sm'
                      : 'border-sims-border bg-sims-surface text-sims-text-muted hover:bg-sims-surface-2 hover:text-sims-primary'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[250px] md:auto-rows-[270px] md:gap-5 lg:grid-cols-12">
            {filteredGallery.map((item, index) => {
              const isLarge = item.featured || index === 0;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`View photo: ${item.title}`}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-sims-border/80 bg-slate-100 text-left shadow-sm transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/50 sm:aspect-auto ${
                    isLarge
                      ? 'sm:col-span-2 lg:col-span-8 lg:row-span-2'
                      : 'lg:col-span-4 lg:row-span-1'
                  }`}
                >
                  <img
                    src={imagePath(item.name, '1024')}
                    srcSet={imageSrcSet(item.name)}
                    sizes={
                      isLarge
                        ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw'
                        : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    }
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 text-left text-white sm:p-5">
                    <span className="mb-1.5 self-start rounded-full border border-white/10 bg-white/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {item.category}
                    </span>
                    <span className="font-semibold leading-snug text-white sm:text-lg">
                      {item.title}
                    </span>
                    <span className="mt-1 block line-clamp-2 text-xs text-white/75 sm:text-sm">
                      {item.caption}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden border-y border-sims-border bg-sims-surface py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="rounded-full border border-sims-border bg-white px-3 py-1 text-xs font-bold tracking-wider text-sims-primary sm:text-sm">
              Student Routine
            </span>
            <h2 className="mt-3 mb-2 font-display text-2xl font-bold text-sims-primary sm:text-3xl md:text-4xl">
              A Day in the Life at SIMS
            </h2>
            <p className="text-sm text-sims-text-muted sm:text-base">
              From morning lectures and skills practice to clinical learning and evening recreation.
            </p>
          </div>

          <div className="relative ml-3 border-l-2 border-sims-primary/30 pl-5 md:ml-0 md:border-none md:pl-0">
            <div className="absolute left-1/2 top-4 bottom-4 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-sims-primary via-sims-primary-2 to-sims-border md:block" />
            <div className="space-y-8 md:space-y-12">
              {TIMELINE_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={step.time}
                    className={`relative flex flex-col gap-4 md:flex-row md:items-center md:gap-8 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-full md:w-1/2">
                      <div className="rounded-2xl border border-sims-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-sims-surface-2 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-sims-primary-2">
                            <Clock className="h-3.5 w-3.5" />
                            {step.time}
                          </span>
                          <span className="rounded-full border border-sims-border bg-sims-surface px-2.5 py-0.5 text-[11px] font-semibold text-sims-text-muted">
                            {step.tag}
                          </span>
                        </div>
                        <h3 className="mb-1.5 text-lg font-bold text-sims-primary">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-sims-text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute -left-[2.4rem] top-5 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-white bg-sims-primary text-xs font-bold text-white shadow-md md:static md:h-10 md:w-10">
                      {index + 1}
                    </div>
                    <div className="hidden w-1/2 md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="rounded-full border border-sims-border bg-sims-surface px-3 py-1 text-xs font-bold tracking-wider text-sims-primary sm:text-sm">
              Safe & Supportive
            </span>
            <h2 className="mt-3 mb-2 font-display text-2xl font-bold text-sims-primary sm:text-3xl md:text-4xl">
              Residential Comfort & Campus Security
            </h2>
            <p className="text-sm text-sims-text-muted sm:text-base">
              A supportive campus environment gives students space to focus on learning and community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HOSTEL_FEATURES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-sims-border bg-sims-bg p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
                >
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sims-surface-2 text-sims-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-sims-primary">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-sims-text-muted">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 border-t border-sims-border/60 pt-4 text-xs font-semibold text-sims-primary-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Student-focused campus support</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden border-t border-sims-border bg-sims-surface py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sims-primary via-[#0f2d5c] to-sims-primary p-6 text-white shadow-2xl sm:p-10 md:p-12">
            <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 translate-x-10 translate-y-10 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-amber-300 sm:text-sm">
                <Calendar className="h-4 w-4 text-amber-300" />
                Schedule an In-Person Walkthrough
              </span>

              <h2 className="mb-3 font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Experience SIMS Dehradun in Person
              </h2>

              <p className="mb-8 text-sm leading-relaxed text-white/85 sm:text-base">
                Visit campus, explore learning spaces, meet the community, and experience student life
                in Selaqui.
              </p>

              <div className="flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row">
                <a
                  href={WHATSAPP_TOUR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-lg bg-emerald-600 px-7 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-500 hover:shadow-emerald-600/30 active:scale-[0.98] sm:w-auto sm:text-base"
                >
                  <MessageCircle className="h-5 w-5 fill-current" />
                  Book Tour via WhatsApp
                </a>
                <Button
                  size="lg"
                  className="min-h-[48px] w-full rounded-lg bg-amber-500 px-7 font-bold text-slate-950 shadow-md hover:bg-amber-600 sm:w-auto"
                  onClick={() => setModalOpen(true)}
                >
                  Apply Online Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-[48px] w-full justify-center rounded-lg border-white/30 bg-white/10 px-6 font-semibold text-white hover:bg-white hover:text-sims-primary sm:w-auto"
                  asChild
                >
                  <Link href="/contact-us">Admissions Helpline</Link>
                </Button>
              </div>

              <p className="mt-6 text-xs text-white/60">
                Chakrata Road, Selaqui, Dehradun, Uttarakhand • Admissions Helpline: +91 9759761244
              </p>
              <Link
                href="/facilities"
                className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
              >
                View campus facilities
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-x-hidden bg-black/92 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={filteredGallery[lightboxIndex].title}
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="absolute top-3 right-3 z-20 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:top-6 sm:right-6"
            aria-label="Close image preview"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(null);
            }}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="absolute left-1 top-1/2 z-20 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousPhoto();
            }}
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          <button
            type="button"
            className="absolute right-1 top-1/2 z-20 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              showNextPhoto();
            }}
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          <div
            className="flex max-h-[90dvh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex max-h-[64dvh] w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100">
              <img
                src={imagePath(filteredGallery[lightboxIndex].name, 'full')}
                alt={filteredGallery[lightboxIndex].title}
                loading="lazy"
                decoding="async"
                className="max-h-[64dvh] max-w-[calc(100vw-5.5rem)] rounded-lg object-contain shadow-2xl sm:max-w-full"
              />
            </div>
            <div className="mt-3 max-h-[24dvh] max-w-2xl overflow-y-auto px-3 text-center text-white sm:mt-4">
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                {filteredGallery[lightboxIndex].category}
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl">
                {filteredGallery[lightboxIndex].title}
              </h3>
              <p className="mt-1 text-xs text-white/75 sm:text-sm">
                {filteredGallery[lightboxIndex].caption}
              </p>
              <p className="mt-1 text-[11px] text-white/50">
                {lightboxIndex + 1} of {filteredGallery.length} • Use arrow keys or swipe
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
