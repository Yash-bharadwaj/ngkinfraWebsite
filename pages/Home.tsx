
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PROJECTS, ATTRIBUTES, PROCESS_STEPS, CLIENTS, COLORS } from '../constants';
import * as Icons from 'lucide-react';

const Home: React.FC = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Reference the specific project for the showcase
  const hrdcProject = PROJECTS.find(p => p.id === 'hrdc-uoh');

  // Double the list for seamless marquee
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <div ref={scrollRef} className="bg-[#F8F7F4]">
      {/* SECTION 1: IMMERSIVE HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1E2B3A] text-white blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A]/40 pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.35em] sm:tracking-[0.45em] md:tracking-[0.5em] text-[#5F6B75] mb-6 sm:mb-8 block">
              ENGINEERING-FIRST DESIGN & BUILD
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-serif mb-4 sm:mb-6 leading-none tracking-tight">
              NGK Infra.
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif italic font-light text-white/80 mb-8 sm:mb-10 tracking-wide">
              Specialized Construction.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 sm:mb-14 font-light leading-relaxed tracking-wide px-0">
              We specialize in the precise execution of <strong>Institutional</strong>, <strong>Residential</strong>, and <strong>Healthcare</strong> projects. From concept to completion, we deliver infrastructure built on technical depth and absolute accountability.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-8">
              <a href="#/projects" className="min-h-[48px] flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#1A1A1A] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:bg-[#F8F7F4] active:scale-[0.98] transition-all shadow-xl">
                View Portfolio 
                <ArrowRight className="ml-3 w-4 h-4 shrink-0" />
              </a>
              <a href="#/about" className="min-h-[48px] flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:bg-white/10 active:scale-[0.98] transition-all">
                The NGK Process
              </a>
            </div>
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

      {/* SECTION 2: TRUST INDICATORS - PROFESSIONAL MARQUEE */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-16 text-center">
          <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#5F6B75] mb-4 sm:mb-5">Trusted Network</h2>
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
            Partnering with <br /> <span className="italic">Elite Institutional</span> Leaders.
          </p>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="relative">
          {/* FADES */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            className="flex gap-16 md:gap-24 whitespace-nowrap items-center py-4"
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 50, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {marqueeClients.map((client, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 px-8 py-3 bg-[#F8F7F4] border border-[#E5E5E5] rounded-sm group hover:border-[#1E2B3A] transition-colors"
              >
                <div className="w-6 h-6 bg-[#1E2B3A] text-white flex items-center justify-center text-[10px] font-bold rounded-full opacity-40 group-hover:opacity-100 transition-opacity">
                  {client.charAt(0)}
                </div>
                <span className="text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#5F6B75] group-hover:text-[#1A1A1A] transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 border-t border-[#E5E5E5] pt-12 sm:pt-16">
          {[
            { label: 'EPC Delivery', value: '100%', accent: 'text-[#3C6E71]' },
            { label: 'Luxury Scale', value: '11k SFT', accent: 'text-[#1E2B3A]' },
            { label: 'Alumni Core', value: 'NICMAR', accent: 'text-[#1A1A1A]' },
            { label: 'Project Growth', value: '250%', accent: 'text-[#5F6B75]' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left group">
              <span className={`block text-2xl sm:text-3xl md:text-4xl font-serif mb-2 sm:mb-3 transition-transform group-hover:-translate-y-1 ${stat.accent}`}>{stat.value}</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#5F6B75] font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: WHAT WE BUILD */}
      <section className="py-20 sm:py-32 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-20 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] mb-4 sm:mb-6">Expertise.</h2>
          <p className="text-[#5F6B75] text-sm sm:text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto lg:mx-0">A focused portfolio of technical excellence and architectural discipline.</p>
        </div>
        
        <div className="flex overflow-x-auto pb-16 px-4 sm:px-6 md:px-12 no-scrollbar gap-6 sm:gap-10 snap-x snap-mandatory scroll-smooth -mx-4 sm:mx-0 pl-4 sm:pl-6 md:pl-12">
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

      {/* SECTION 4: THE NGK ADVANTAGE */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full blueprint-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-16 sm:mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] mb-6 sm:mb-8 italic">The Philosophy.</h2>
              <p className="text-[#5F6B75] text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-wide">Structured engineering processes that transform high-risk projects into predictable, luxury outcomes.</p>
            </div>
            <div className="pb-2 hidden md:block">
               <div className="h-px w-32 bg-[#3C6E71]" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
            {ATTRIBUTES.map((attr, i) => {
              const IconComp = (Icons as any)[attr.icon];
              return (
                <motion.div 
                  key={attr.id} 
                  className="bg-white p-8 sm:p-12 hover:z-10 relative group transition-all min-h-[180px] flex flex-col justify-center"
                >
                  <div className="w-8 h-8 text-[#5F6B75] mb-10 group-hover:text-[#1E2B3A] transition-colors">
                    {IconComp && <IconComp strokeWidth={1} />}
                  </div>
                  <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-4 sm:mb-5 text-[#1A1A1A]">{attr.title}</h4>
                  <p className="text-[9px] sm:text-[10px] leading-relaxed uppercase tracking-[0.1em] font-light text-[#5F6B75]">
                    {attr.description}
                  </p>
                  <div className="absolute inset-0 border-b-2 border-[#1E2B3A] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PROJECT */}
      <section className="bg-[#1A1A1A] text-white py-24 sm:py-40 overflow-hidden relative">
        <div className="absolute inset-0 blueprint-grid opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">
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
            
            <div className="relative group order-first lg:order-none">
              <div className="absolute -top-8 sm:-top-12 -left-4 sm:-left-12 w-32 sm:w-48 h-32 sm:h-48 border border-white/5 blueprint-grid z-0" />
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
              <div className="absolute -bottom-4 right-0 sm:-bottom-8 sm:-right-8 bg-[#F8F7F4] text-[#1A1A1A] p-6 sm:p-10 z-20 shadow-2xl max-w-[85vw] sm:max-w-xs">
                <span className="block text-lg sm:text-xl md:text-2xl font-serif mb-2 sm:mb-3 leading-tight italic">"Precision in execution."</span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-[#5F6B75]">- Institutional Delivery Benchmarks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STRATEGIC CTA */}
      <section className="py-24 sm:py-48 bg-[#F8F7F4] text-center border-t border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#5F6B75] mb-8 sm:mb-10 block">Consultancy</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-serif text-[#1A1A1A] mb-12 sm:mb-16 italic tracking-tight leading-none">Build with <br /> Confidence.</h2>
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
