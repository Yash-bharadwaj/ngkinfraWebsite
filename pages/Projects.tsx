
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = ['All', 'Institutional', 'Residential', 'Healthcare', 'Infrastructure'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-[#F8F7F4] pb-20 pt-24 sm:pb-32 sm:pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6 md:px-12">
        <header className="mb-16 min-w-0 sm:mb-24">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-[#5F6B75] sm:mb-8 sm:text-xs sm:tracking-[0.5em]">The Portfolio</span>
          <h1 className="mb-10 break-words font-serif text-3xl italic leading-[0.85] text-[#1A1A1A] sm:mb-12 sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
            Engineering <br /> <span className="not-italic text-opacity-90">Precision.</span>
          </h1>
          
          <div className="grid grid-cols-2 gap-2 border-b border-[#E5E5E5] pb-8 sm:flex sm:flex-wrap sm:gap-3 sm:pb-10 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`min-h-[48px] w-full px-3 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:w-auto sm:px-6 sm:py-3 sm:text-[10px] sm:tracking-[0.25em] md:px-8 md:py-4 md:text-[11px] md:tracking-[0.3em] border ${
                  filter === cat 
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-lg' 
                    : 'bg-white text-[#5F6B75] border-[#E5E5E5] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group cursor-pointer bg-white border border-[#E5E5E5]/40 shadow-sm overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E5E5E5]">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      if (!t.dataset.fallback) {
                        t.dataset.fallback = '1';
                        t.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/10 group-hover:bg-transparent transition-all" />
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex flex-col items-end gap-2">
                    <span className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm text-[#1A1A1A]">
                      {project.status}
                    </span>
                    <span className="bg-[#1E2B3A] text-white px-3 py-1.5 sm:px-4 sm:py-2 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-5 p-6 sm:gap-6 sm:p-10 md:flex-row md:items-end md:justify-between">
                  <div className="min-w-0 max-w-md">
                    <h3 className="mb-3 font-serif text-lg leading-tight text-[#1A1A1A] sm:text-xl md:text-2xl">{project.name}</h3>
                    <div className="mb-4 h-px w-8 bg-[#3C6E71] sm:mb-5" />
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#5F6B75] opacity-80 sm:text-[10px] md:text-[11px]">{project.client}</p>
                    <p className="mt-4 line-clamp-4 text-sm font-light leading-relaxed text-[#5F6B75]">{project.description}</p>
                  </div>
                  <div className="flex min-w-0 flex-col gap-1.5 border-t border-[#E5E5E5] pt-4 md:max-w-[15rem] md:border-l-0 md:border-r md:border-t-0 md:pt-0 md:pl-0 md:pr-6 md:text-right">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#5F6B75] opacity-50 sm:text-[9px]">
                      Site location
                    </span>
                    <span className="text-[11px] font-medium leading-snug text-[#1A1A1A] sm:text-xs md:ml-auto md:max-w-[13.5rem] md:text-right">
                      {project.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="py-48 text-center border border-dashed border-[#E5E5E5]">
            <p className="text-[#5F6B75] text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-light">End of Portfolio Records.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
