
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-[#F8F7F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#5F6B75] mb-8 block">Project Inquiry</span>
            <h1 className="text-6xl md:text-9xl font-serif text-[#1A1A1A] mb-14 leading-[0.85] italic">Start the <br /> <span className="not-italic text-opacity-90">Dialogue.</span></h1>
            
            <div className="space-y-14">
              <div className="flex gap-8 group">
                <div className="mt-1 w-10 h-10 border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#1A1A1A] transition-colors">
                   <MapPin className="text-[#5F6B75] w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-[#1A1A1A]">Hyderabad Studio</h4>
                  <p className="text-[#5F6B75] text-xs leading-relaxed font-light tracking-wide">
                    # 203, Royal Square, KPHB Phase 5, <br />
                    Kukpally, Near NSL Centrum Mall, <br />
                    Hyderabad - 500072
                  </p>
                </div>
              </div>
              
              <div className="flex gap-8 group">
                <div className="mt-1 w-10 h-10 border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#1A1A1A] transition-colors">
                   <Phone className="text-[#5F6B75] w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-[#1A1A1A]">Communication</h4>
                  <p className="text-[#5F6B75] text-xs leading-relaxed font-light tracking-wide">+91 96763 88678</p>
                </div>
              </div>
              
              <div className="flex gap-8 group">
                <div className="mt-1 w-10 h-10 border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#1A1A1A] transition-colors">
                   <Mail className="text-[#5F6B75] w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-[#1A1A1A]">Project Desk</h4>
                  <p className="text-[#5F6B75] text-xs leading-relaxed font-light tracking-wide">projects@ngkinfra.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 md:p-16 border border-[#E5E5E5] shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 blueprint-grid opacity-10 pointer-events-none" />
            <h3 className="text-3xl font-serif mb-14 text-[#1A1A1A]">Project Consultation</h3>
            <form className="space-y-10">
              <div className="relative group">
                <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#5F6B75] block mb-3">Principal Contact</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-4 focus:outline-none focus:border-[#1E2B3A] transition-colors text-[13px] tracking-wide placeholder:text-[#E5E5E5]"
                  placeholder="Your Full Name"
                />
              </div>
              
              <div className="relative group">
                <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#5F6B75] block mb-3">Professional Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-4 focus:outline-none focus:border-[#1E2B3A] transition-colors text-[13px] tracking-wide placeholder:text-[#E5E5E5]"
                  placeholder="corporate@domain.com"
                />
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#5F6B75] block mb-3">Service Sector</label>
                <select className="w-full bg-transparent border-b border-[#E5E5E5] py-4 focus:outline-none focus:border-[#1E2B3A] transition-colors text-[13px] tracking-wide appearance-none cursor-pointer">
                  <option>Institutional EPC</option>
                  <option>Premium Residential</option>
                  <option>Healthcare Infrastructure</option>
                  <option>Strategic Infrastructure</option>
                </select>
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#5F6B75] block mb-3">Brief Overview</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-[#E5E5E5] py-4 focus:outline-none focus:border-[#1E2B3A] transition-colors text-[13px] tracking-wide placeholder:text-[#E5E5E5] resize-none"
                  placeholder="Outline your project vision..."
                />
              </div>

              <button className="w-full py-6 bg-[#1A1A1A] text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-[#1E2B3A] transition-all flex items-center justify-center group shadow-xl">
                Initiate Consultation
                <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* MAP PLACEHOLDER */}
      <div className="mt-32 h-[500px] w-full bg-white relative overflow-hidden grayscale border-y border-[#E5E5E5]">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative h-full flex items-center justify-center">
          <div className="bg-[#1A1A1A] p-10 text-white flex flex-col items-center shadow-2xl">
            <MapPin className="w-6 h-6 mb-4 opacity-50" />
            <span className="text-[9px] font-bold uppercase tracking-[0.5em]">Studio Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
