
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-w-0 overflow-x-hidden pt-24 pb-16 sm:pb-24 sm:pt-32">
      <section className="mx-auto mb-20 max-w-7xl px-4 sm:mb-32 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          <div className="min-w-0">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 sm:mb-6 sm:text-xs sm:tracking-[0.4em]">Our Story</span>
            <h1 className="mb-8 break-words font-serif text-3xl italic leading-tight text-slate-900 sm:mb-12 sm:text-4xl md:text-6xl lg:text-8xl">
              Legacy in <br /> <span className="not-italic text-slate-950">the Making.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-light leading-relaxed mb-6 sm:mb-8">
              NGK Infra is a fast-growing civil construction company headquartered in Hyderabad, established in 2023 with a vision to transform the building experience through clarity, commitment, and collaboration.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-10 sm:mb-12">
              Led by an alumnus of NICMAR (National Institute of Construction Management and Research), NGK Infra brings together strong engineering capabilities, hands-on execution expertise, and modern project management practices. We believe a great project is built not just by concrete and steel, but by communication, clarity of scope, accountability, and innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-8 sm:gap-12 border-t border-slate-100 pt-10 sm:pt-12">
               <div>
                 <span className="block text-2xl sm:text-3xl font-serif mb-2">NICMAR</span>
                 <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-bold">Backed Leadership</span>
               </div>
               <div>
                 <span className="block text-2xl sm:text-3xl font-serif mb-2">Hyderabad</span>
                 <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-bold">HQ Operations</span>
               </div>
            </div>
          </div>
          
          <div className="relative min-w-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800" 
              alt="Leadership" 
              className="h-auto w-full max-w-full grayscale shadow-2xl"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                if (!t.dataset.fallback) {
                  t.dataset.fallback = '1';
                  t.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
                }
              }}
            />
            <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 w-28 h-28 sm:w-40 sm:h-40 blueprint-grid border border-slate-900/10 -z-10" />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8">Our Philosophy.</h2>
            <div className="w-24 h-px bg-white/20 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {[
              { title: 'Clarity', desc: 'Understanding requirements deeply and resolving issues proactively before a single brick is laid.' },
              { title: 'Commitment', desc: 'Ownership of outcomes ensures we deliver on our promises, every single time.' },
              { title: 'Collaboration', desc: 'Partnering with clients from concept to completion for seamless project progress.' }
            ].map((phil, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 italic">{phil.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed uppercase tracking-wide">{phil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-20">
             <div>
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-8">Timeline of Growth.</h2>
               <div className="space-y-10 sm:space-y-12">
                  {[
                    { year: '2023', label: 'Inception', desc: 'NGK Infra established with vision for engineering-driven execution.' },
                    { year: '2023', label: 'HRDC Success', desc: 'Completed flagship institutional project at Hyderabad Central University.' },
                    { year: '2024', label: 'Scale-Up', desc: 'Ongoing luxury residential (Lakewood) and industrial infrastructure projects.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 sm:gap-8 group">
                      <span className="text-3xl sm:text-4xl font-serif text-slate-200 group-hover:text-slate-900 transition-colors shrink-0">{item.year}</span>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">{item.label}</h4>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
             </div>
             
             <div className="bg-slate-50 p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-8">Expertise Domains.</h2>
                <div className="space-y-4 sm:space-y-6">
                  {['Institutional EPC', 'High-End Residential', 'Healthcare Infrastructure', 'Railway Infrastructure', 'Strategic Civil Works'].map((exp, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-slate-200 py-4 min-h-[48px]">
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-700">{exp}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
