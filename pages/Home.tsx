import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import ClientLogoMarquee from '../components/ClientLogoMarquee';
import {
  ABOUT_GALLERY_IMAGES,
  HOME_EXPERTISE_COMMERCIAL,
  HOME_EXPERTISE_HEALTHCARE,
  HOME_EXPERTISE_INSTITUTIONAL,
  HOME_EXPERTISE_RESIDENTIAL,
  PROJECT_IMAGE_HRDC,
  PROJECT_IMAGE_LAKEWOOD,
} from '../projectImages';

type StatDef = { label: string; accent: string; kind: 'text'; value: string };

const STATS_DATA: StatDef[] = [
  { label: 'Flagship institutional (HRDC)', accent: 'text-[#3C6E71]', value: '42k+ SFT' },
  { label: 'Premium villa programme', accent: 'text-[#1E2B3A]', value: '66k SFT' },
  { label: 'School campus (live site)', accent: 'text-[#1A1A1A]', value: '94k SFT' },
  { label: 'Operating geography', accent: 'text-[#5F6B75]', value: 'TG & AP' },
];


const HERO_CAROUSEL_IMAGES: { src: string; alt: string }[] = [
  { src: PROJECT_IMAGE_HRDC, alt: 'HRDC institutional project exterior' },
  { src: PROJECT_IMAGE_LAKEWOOD, alt: 'Lakewood villas construction progress' },
  { src: HOME_EXPERTISE_COMMERCIAL, alt: 'Commercial block structural progress' },
  { src: '/sanctamaria1.jpeg', alt: 'Sancta Maria campus site view' },
  { src: '/sanctamaria2.jpeg', alt: 'Sancta Maria school construction view' },
  { src: '/sanctamaria3.jpeg', alt: 'Sancta Maria international school project' },
  ...ABOUT_GALLERY_IMAGES,
];

const StatAnimatedValue: React.FC<{
  stat: StatDef;
  index: number;
  active: boolean;
}> = ({ stat, index, active }) => (
  <motion.span
    initial={{ opacity: 0, y: 12 }}
    animate={active ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.55, delay: index * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {stat.value}
  </motion.span>
);

const statsStripContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const statsStripItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Home: React.FC = () => {
  const scrollRef = useRef(null);
  const statsStripRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsStripRef, { once: true, amount: 0.35 });
  const [heroSlide, setHeroSlide] = useState(0);

  // Reference the specific project for the showcase
  const hrdcProject = PROJECTS.find(p => p.id === 'hrdc-uoh');

  useEffect(() => {
    if (HERO_CAROUSEL_IMAGES.length <= 1) return;
    const timer = window.setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div ref={scrollRef} className="min-w-0 overflow-x-hidden bg-[#F8F7F4]">
      {/* SECTION 1: IMMERSIVE HERO */}
      <section className="relative flex h-[100dvh] min-h-[100svh] items-center justify-center overflow-hidden bg-[#1E2B3A] text-white">
        <div className="pointer-events-none absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={HERO_CAROUSEL_IMAGES[heroSlide]?.src || 'hero-slide'}
              src={HERO_CAROUSEL_IMAGES[heroSlide]?.src}
              alt={HERO_CAROUSEL_IMAGES[heroSlide]?.alt || 'NGK Infra project'}
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              loading="eager"
              decoding="async"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                if (!t.dataset.fallback) {
                  t.dataset.fallback = '1';
                  t.src = PROJECT_IMAGE_HRDC;
                }
              }}
            />
          </AnimatePresence>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#1E2B3A]/55" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#0f1419]/80 via-[#1a2330]/35 to-[#0a0d12]/90" />
        <div className="pointer-events-none absolute bottom-[max(1.25rem,env(safe-area-inset-bottom,0px)+0.5rem)] right-[max(1rem,env(safe-area-inset-right,0px))] z-[2] flex items-center gap-1.5 sm:gap-2">
          {HERO_CAROUSEL_IMAGES.map((item, i) => (
            <span
              key={item.src + i}
              className={`block h-1.5 rounded-full transition-all duration-500 ${
                i === heroSlide ? 'w-7 bg-white/95 sm:w-8' : 'w-2 bg-white/45'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-5xl px-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] pt-[env(safe-area-inset-top,0px)] sm:px-8 md:px-10">
          <motion.div
            className="flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#9CA8B3] sm:text-[11px] sm:tracking-[0.42em] md:text-xs md:tracking-[0.48em]">
              Civil construction · EPC · Design & build
            </span>
            <h1 className="mt-5 break-words font-serif text-4xl leading-[0.95] tracking-tight sm:mt-6 sm:text-5xl md:mt-7 md:text-7xl lg:text-[8rem] xl:text-[9.5rem]">
              NGK.
            </h1>
            <p className="mt-3 max-w-2xl font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 sm:mt-4 sm:text-xs sm:tracking-[0.34em] md:text-sm md:tracking-[0.38em]">
              Construction &amp; Interiors
            </p>
            <p className="mt-5 max-w-xl font-serif text-lg italic font-light leading-snug tracking-wide text-white/90 sm:mt-6 sm:text-xl md:mt-7 md:max-w-2xl md:text-2xl lg:text-3xl">
              Engineering excellence. Delivering trust.
            </p>
            <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed tracking-wide text-white/75 sm:mt-6 sm:text-base md:mt-7 md:text-lg">
              Hyderabad-based since 2023, we build the social infrastructure Telangana and Andhra Pradesh need most —{' '}
              <strong className="font-medium text-white/90">education</strong>,{' '}
              <strong className="font-medium text-white/90">healthcare</strong>,{' '}
              <strong className="font-medium text-white/90">premium residential</strong>, and select{' '}
              <strong className="font-medium text-white/90">commercial</strong> programmes — with EPC discipline, transparent
              controls, and safety-first sites.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[max(3rem,env(safe-area-inset-bottom,0px)+2.5rem)] left-1/2 flex -translate-x-1/2 flex-col items-center opacity-30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2: STATS STRIP */}
      <section ref={statsStripRef} className="overflow-x-hidden border-b border-[#E5E5E5] bg-white py-12 sm:py-14">
        <motion.div
          className="mx-auto grid min-w-0 max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:gap-x-8 sm:gap-y-10 sm:px-6 md:grid-cols-4 md:gap-12 md:px-12"
          variants={statsStripContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45, margin: '0px 0px -60px 0px' }}
        >
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={statsStripItem}
              className="group text-center md:text-left"
            >
              <motion.span
                className={`mb-2 block min-h-[2.5rem] text-2xl font-serif tabular-nums sm:mb-3 sm:min-h-[3.25rem] sm:text-3xl md:min-h-[3.75rem] md:text-4xl ${stat.accent}`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <StatAnimatedValue stat={stat} index={i} active={statsInView} />
              </motion.span>
              <span className="break-words text-[9px] font-bold uppercase leading-tight tracking-[0.18em] text-[#5F6B75] sm:text-[10px] sm:tracking-[0.2em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 3: TRUSTED NETWORK + MARQUEE */}
      <section className="overflow-x-hidden border-b border-[#E5E5E5] bg-white py-16 sm:py-24">
        <div className="mx-auto mb-12 max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] text-center sm:mb-16 sm:px-6 md:px-12">
          <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#5F6B75] sm:mb-5 sm:text-xs">
            Trusted network
          </h2>
          <p className="font-serif text-xl leading-tight text-[#1A1A1A] sm:text-2xl md:text-4xl lg:text-5xl">
            Clients we execute <br /> <span className="italic">alongside</span>
          </p>
        </div>

        <ClientLogoMarquee />
      </section>

      {/* SECTION 4: WHAT WE BUILD */}
      <section className="overflow-x-hidden bg-[#F8F7F4] py-20 sm:py-32">
        <div className="mx-auto mb-12 max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] text-center sm:mb-20 sm:px-6 md:px-12 lg:text-left">
          <h2 className="mb-4 break-words font-serif text-3xl text-[#1A1A1A] sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">Expertise.</h2>
          <p className="mx-auto max-w-2xl text-sm font-light tracking-wide text-[#5F6B75] sm:text-base md:text-lg lg:mx-0">
            Where programme complexity, compliance, and finish quality all have to land together.
          </p>
        </div>
        
        <div className="flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto pb-16 ps-[max(1rem,env(safe-area-inset-left,0px))] pe-[max(1rem,env(safe-area-inset-right,0px))] no-scrollbar sm:gap-10 sm:ps-6 sm:pe-6 md:ps-12 md:pe-12 [overscroll-behavior-x:contain]">
          {[
            { 
              title: 'Institutional', 
              desc: 'Schools, colleges, training blocks, and public buildings — engineered for long daily use and clear handover standards.', 
              img: HOME_EXPERTISE_INSTITUTIONAL,
              accent: 'bg-[#1E2B3A]'
            },
            { 
              title: 'Healthcare', 
              desc: 'Hospitals, clinics, and diagnostic facilities with layouts and services planned around infection control and MEP integration.', 
              img: HOME_EXPERTISE_HEALTHCARE,
              accent: 'bg-[#5F6B75]'
            },
            { 
              title: 'Premium residential', 
              desc: 'Villas, apartments, and gated communities where structure, envelope, and finishing detail carry equal weight.', 
              img: HOME_EXPERTISE_RESIDENTIAL,
              accent: 'bg-[#3C6E71]'
            },
            { 
              title: 'Commercial', 
              desc: 'Offices, retail, and mixed-use shells delivered with speed-to-quality balance and disciplined coordination.', 
              img: HOME_EXPERTISE_COMMERCIAL,
              accent: 'bg-[#1A1A1A]'
            }
          ].map((panel, i) => (
            <motion.div 
              key={i} 
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[480px] bg-white group cursor-pointer relative shadow-sm border border-[#E5E5E5]/50 snap-center flex-shrink-0"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="h-56 sm:h-72 overflow-hidden relative bg-[#E5E5E5]">
                <img 
                  src={panel.img} 
                  alt={panel.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    if (!t.dataset.fallback) {
                      t.dataset.fallback = '1';
                      t.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-all" />
              </div>
              <div className="p-6 sm:p-10">
                <div className={`w-8 h-px ${panel.accent} mb-4 sm:mb-6 transition-all group-hover:w-16`} />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-5 text-[#1A1A1A]">{panel.title}</h3>
                <p className="text-[#5F6B75] text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-light tracking-wide">{panel.desc}</p>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] flex items-center group">
                  Explore Sector <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FEATURED PROJECT */}
      <section className="relative overflow-x-hidden bg-[#1A1A1A] py-24 text-white sm:py-40">
        <div className="absolute inset-0 blueprint-grid opacity-5" />
        <div className="mx-auto max-w-7xl min-w-0 px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#5F6B75] mb-6 sm:mb-8 block">Showcase</span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-serif mb-10 sm:mb-12 leading-[0.9]">University of <br /> <span className="italic font-light opacity-80">Hyderabad</span></h2>
              
              <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
                {[
                  { label: 'Project', val: 'HRDC — institutional EPC' },
                  { label: 'Mode', val: 'Design & build EPC' },
                  { label: 'Client team', val: 'N. Nageswara Rao & Co · CPWD' }
                ].map((item, i) => (
                  <div key={i} className="flex min-h-[48px] items-center justify-between gap-3 border-b border-white/5 px-0 py-4 transition-all sm:gap-4 sm:px-4 sm:py-5 md:px-6">
                    <span className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-[#5F6B75] sm:text-[10px]">{item.label}</span>
                    <span className="min-w-0 text-right text-[10px] font-medium uppercase leading-snug tracking-[0.08em] text-white/90 sm:text-xs sm:tracking-[0.1em]">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
              
              <a
                href="#/projects"
                className="inline-flex min-h-[48px] items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-[#3C6E71] hover:bg-[#2A4F51] active:scale-[0.98] transition-all text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] shadow-2xl text-white no-underline"
              >
                View portfolio
              </a>
            </motion.div>
            
            <div className="group relative order-first min-w-0 overflow-hidden lg:order-none">
              <div className="absolute -left-2 -top-8 z-0 hidden h-32 w-32 border border-white/5 blueprint-grid sm:-left-8 sm:-top-12 sm:block sm:h-48 sm:w-48 md:-left-12" />
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <img 
                  src={hrdcProject?.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"} 
                  alt="University of Hyderabad Project" 
                  className="h-auto w-full scale-105 transition-all duration-1000 group-hover:scale-100"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    if (!t.dataset.fallback) {
                      t.dataset.fallback = '1';
                      t.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200';
                    }
                  }}
                />
              </div>
              <div className="relative z-20 mt-5 w-full border border-white/10 bg-[#F8F7F4] p-5 text-[#1A1A1A] shadow-2xl sm:mt-6 sm:p-6 lg:absolute lg:-bottom-8 lg:right-4 lg:mt-0 lg:max-w-xs lg:border-0 lg:p-8 lg:shadow-2xl xl:right-8 xl:p-10">
                <span className="mb-2 block font-serif text-base italic leading-snug sm:mb-3 sm:text-lg md:text-xl lg:text-2xl">
                  “Civil, services, and site — one accountable thread.”
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5F6B75] sm:text-[10px]">Institutional EPC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STRATEGIC CTA */}
      <section className="border-t border-[#E5E5E5] bg-[#F8F7F4] py-20 text-center sm:py-36 md:py-48">
        <div className="mx-auto max-w-4xl min-w-0 px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6">
          <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.4em] text-[#5F6B75] sm:mb-10 sm:text-xs sm:tracking-[0.5em]">Consultancy</span>
          <h2 className="mb-10 break-words px-1 font-serif text-3xl italic leading-[0.95] tracking-tight text-[#1A1A1A] sm:mb-14 sm:px-0 sm:text-5xl md:mb-16 md:text-6xl lg:text-8xl xl:text-9xl">
            Build with <br /> Confidence.
          </h2>
          <a
            href="#/contact"
            className="inline-flex max-w-full min-h-[52px] items-center justify-center bg-[#1A1A1A] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-2xl transition-all hover:bg-[#1E2B3A] active:scale-[0.98] sm:px-16 sm:py-7 sm:text-xs sm:tracking-[0.3em]"
          >
            Inquire about a Project
            <ArrowRight className="ml-4 sm:ml-5 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
