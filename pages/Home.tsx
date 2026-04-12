
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, CLIENTS } from '../constants';

type StatDef =
  | { label: string; accent: string; kind: 'count'; end: number; suffix: string }
  | { label: string; accent: string; kind: 'text'; value: string };

const STATS_DATA: StatDef[] = [
  { label: 'EPC Delivery', accent: 'text-[#3C6E71]', kind: 'count', end: 100, suffix: '%' },
  { label: 'Luxury Scale', accent: 'text-[#1E2B3A]', kind: 'count', end: 11, suffix: 'k SFT' },
  { label: 'Alumni Core', accent: 'text-[#1A1A1A]', kind: 'text', value: 'NICMAR' },
  { label: 'Project Growth', accent: 'text-[#5F6B75]', kind: 'count', end: 250, suffix: '%' },
];

const StatAnimatedValue: React.FC<{
  stat: StatDef;
  index: number;
  active: boolean;
}> = ({ stat, index, active }) => {
  const [display, setDisplay] = useState(0);
  const staggerMs = index * 110;

  useEffect(() => {
    if (!active || stat.kind !== 'count') return;
    let cancelled = false;
    let rafId = 0;
    const duration = 1650;
    const startAt = performance.now() + staggerMs;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (cancelled) return;
      if (now < startAt) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startAt;
      const p = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(stat.end * easeOut(p)));
      if (p < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [active, stat, staggerMs]);

  if (stat.kind === 'text') {
    return (
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {stat.value}
      </motion.span>
    );
  }

  return (
    <span>
      {display}
      {stat.suffix}
    </span>
  );
};

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

  // Reference the specific project for the showcase
  const hrdcProject = PROJECTS.find(p => p.id === 'hrdc-uoh');

  // Double the list for seamless marquee
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <div ref={scrollRef} className="min-w-0 overflow-x-hidden bg-[#F8F7F4]">
      {/* SECTION 1: IMMERSIVE HERO */}
      <section className="relative flex h-[100dvh] min-h-[100svh] items-center justify-center overflow-hidden bg-[#1E2B3A] text-white blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A]/40 pointer-events-none" />
        
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-5xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#5F6B75] sm:mb-8 sm:tracking-[0.45em] md:text-sm md:tracking-[0.5em]">
              ENGINEERING-FIRST DESIGN & BUILD
            </span>
            <h1 className="break-words text-4xl font-serif leading-none tracking-tight sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] mb-4 sm:mb-5 md:mb-6">
              NGK Infra.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic font-light text-white/85 mb-8 sm:mb-10 md:mb-12 tracking-wide">
              Construction & Interiors
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed tracking-wide px-0">
              We specialize in the precise execution of <strong>Institutional</strong>, <strong>Residential</strong>, and <strong>Healthcare</strong> projects. From concept to completion, we deliver infrastructure built on technical depth and absolute accountability.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white">
              100% EPC Delivery
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2: STATS STRIP */}
      <section ref={statsStripRef} className="overflow-x-hidden border-b border-[#E5E5E5] bg-white py-12 sm:py-14">
        <motion.div
          className="mx-auto grid min-w-0 max-w-7xl grid-cols-2 gap-8 px-4 sm:gap-12 sm:px-6 md:grid-cols-4 md:px-12"
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
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5F6B75] sm:text-[10px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 3: TRUSTED NETWORK + MARQUEE */}
      <section className="overflow-x-hidden border-b border-[#E5E5E5] bg-white py-16 sm:py-24">
        <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:mb-16 sm:px-6 md:px-12">
          <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#5F6B75] sm:mb-5 sm:text-xs">
            Trusted Network
          </h2>
          <p className="font-serif text-xl leading-tight text-[#1A1A1A] sm:text-2xl md:text-4xl lg:text-5xl">
            Partnering with <br /> <span className="italic">Elite Industry</span> Leaders.
          </p>
        </div>

        <div className="relative overflow-x-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 md:w-32" />

          <motion.div
            className="flex w-max max-w-none items-center gap-12 whitespace-nowrap py-4 md:gap-24"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {marqueeClients.map((client, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 rounded-sm border border-[#E5E5E5] bg-[#F8F7F4] px-8 py-3 transition-colors hover:border-[#1E2B3A]"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E2B3A] text-[10px] font-bold text-white opacity-40 transition-opacity group-hover:opacity-100">
                  {client.charAt(0)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5F6B75] transition-colors group-hover:text-[#1A1A1A] sm:text-[11px] md:text-xs sm:tracking-[0.25em]">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE BUILD */}
      <section className="overflow-x-hidden bg-[#F8F7F4] py-20 sm:py-32">
        <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:mb-20 sm:px-6 md:px-12 lg:text-left">
          <h2 className="mb-4 break-words font-serif text-3xl text-[#1A1A1A] sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">Expertise.</h2>
          <p className="mx-auto max-w-2xl text-sm font-light tracking-wide text-[#5F6B75] sm:text-base md:text-lg lg:mx-0">A focused portfolio of technical excellence and architectural discipline.</p>
        </div>
        
        <div className="flex snap-x snap-mandatory scroll-smooth gap-6 overflow-x-auto pb-16 pl-4 pr-4 no-scrollbar sm:gap-10 sm:px-6 md:px-12 [overscroll-behavior-x:contain]">
          {[
            { 
              title: 'Institutional', 
              desc: 'EPC delivery for high-performance educational environments.', 
              img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
              accent: 'bg-[#1E2B3A]'
            },
            { 
              title: 'Premium Residential', 
              desc: 'Bespoke design-build for ultra-luxury villas and retreats.', 
              img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
              accent: 'bg-[#3C6E71]'
            },
            { 
              title: 'Healthcare', 
              desc: 'Critical infrastructure built to technical healthcare benchmarks.', 
              img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
              accent: 'bg-[#5F6B75]'
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
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
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
        <div className="mx-auto max-w-7xl min-w-0 px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-16 sm:gap-24 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#5F6B75] mb-6 sm:mb-8 block">Showcase Piece</span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-serif mb-10 sm:mb-12 leading-[0.9]">University of <br /> <span className="italic font-light opacity-80">Hyderabad</span></h2>
              
              <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
                {[
                  { label: 'Project', val: hrdcProject?.name.split('(')[1]?.replace(')', '') || 'HRDC Centre' },
                  { label: 'Mode', val: 'Design & Build EPC' },
                  { label: 'Lead', val: 'Civil + Infrastructure' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-4 sm:py-5 border-b border-white/5 group cursor-pointer hover:bg-white/5 px-4 sm:px-6 transition-all min-h-[48px]">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#5F6B75]">{item.label}</span>
                    <span className="text-[10px] sm:text-xs uppercase font-medium tracking-[0.1em] text-right max-w-[60%] truncate">{item.val}</span>
                  </div>
                ))}
              </div>
              
              <button className="min-h-[48px] px-8 sm:px-12 py-4 sm:py-5 bg-[#3C6E71] hover:bg-[#2A4F51] active:scale-[0.98] transition-all text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] shadow-2xl">
                Case Study Access
              </button>
            </motion.div>
            
            <div className="group relative order-first min-w-0 overflow-hidden lg:order-none">
              <div className="absolute -left-2 -top-8 z-0 h-32 w-32 border border-white/5 blueprint-grid sm:-left-8 sm:-top-12 sm:h-48 sm:w-48 md:-left-12" />
              <div className="overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={hrdcProject?.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"} 
                  alt="University of Hyderabad Project" 
                  className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    if (!t.dataset.fallback) {
                      t.dataset.fallback = '1';
                      t.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200';
                    }
                  }}
                />
              </div>
              <div className="absolute -bottom-4 right-0 z-20 max-w-[min(100%,20rem)] bg-[#F8F7F4] p-6 text-[#1A1A1A] shadow-2xl sm:-bottom-8 sm:-right-8 sm:max-w-xs sm:p-10">
                <span className="block text-lg sm:text-xl md:text-2xl font-serif mb-2 sm:mb-3 leading-tight italic">"Precision in execution."</span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-[#5F6B75]">- Institutional Delivery Benchmarks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STRATEGIC CTA */}
      <section className="border-t border-[#E5E5E5] bg-[#F8F7F4] py-24 text-center sm:py-48">
        <div className="mx-auto max-w-4xl min-w-0 px-4 sm:px-6">
          <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.4em] text-[#5F6B75] sm:mb-10 sm:text-xs sm:tracking-[0.5em]">Consultancy</span>
          <h2 className="mb-12 break-words font-serif text-4xl italic leading-none tracking-tight text-[#1A1A1A] sm:mb-16 sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">Build with <br /> Confidence.</h2>
          <a href="#/contact" className="min-h-[52px] inline-flex items-center justify-center px-10 sm:px-16 py-5 sm:py-7 bg-[#1A1A1A] text-white font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs hover:bg-[#1E2B3A] active:scale-[0.98] transition-all shadow-2xl">
            Inquire about a Project
            <ArrowRight className="ml-4 sm:ml-5 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
