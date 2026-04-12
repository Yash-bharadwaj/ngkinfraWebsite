
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
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-[#F8F7F4] pt-24 pb-20 sm:pb-32 sm:pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <header className="mb-16 min-w-0 sm:mb-24">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-[#5F6B75] sm:mb-8 sm:text-xs sm:tracking-[0.5em]">The Portfolio</span>
          <h1 className="mb-10 break-words font-serif text-3xl italic leading-[0.85] text-[#1A1A1A] sm:mb-12 sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
            Engineering <br /> <span className="not-italic text-opacity-90">Precision.</span>
          </h1>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 border-b border-[#E5E5E5] pb-8 sm:pb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[9px] sm:text-[10px] md:text-[11px] uppercase font-bold tracking-[0.25em] sm:tracking-[0.3em] px-5 sm:px-8 py-3 sm:py-4 min-h-[44px] transition-all duration-300 border ${
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
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
                
                <div className="p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-md">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#1A1A1A] mb-3 leading-tight">{project.name}</h3>
                    <div className="h-px w-8 bg-[#3C6E71] mb-4 sm:mb-5" />
                    <p className="text-[#5F6B75] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium opacity-80">{project.client}</p>
                  </div>
                  <div className="md:text-right flex flex-col gap-1 border-l md:border-l-0 md:border-r border-[#E5E5E5] pl-6 md:pl-0 md:pr-6">
                    <span className="text-[8px] sm:text-[9px] text-[#5F6B75] uppercase tracking-[0.2em] font-bold opacity-50">Site Location</span>
                    <span className="text-[10px] sm:text-[11px] text-[#1A1A1A] font-medium tracking-wide uppercase">{project.location}</span>
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
