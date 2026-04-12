import React from 'react';
import { Link } from 'react-router-dom';
import logoOnDark from '../NGK-LOGO-WHITE.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#5F6B75] py-16 sm:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="mb-8 inline-block max-w-full text-white">
            <img
              src={logoOnDark}
              alt="NGK Infra — Construction & Interiors"
              width={1000}
              height={300}
              className="h-10 w-auto max-h-[3.75rem] object-contain object-left sm:h-12 md:h-14 lg:h-16 max-w-full"
            />
          </Link>
          <p className="text-[10px] sm:text-[11px] leading-relaxed mb-8 uppercase tracking-widest font-light">
            An engineering-led boutique <br /> consultancy redefining the <br /> building experience.
          </p>
        </div>

        <div>
          <h4 className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-8 sm:mb-10">Portfolio</h4>
          <ul className="space-y-4 sm:space-y-5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium">
            <li><Link to="/about" className="hover:text-white transition-colors py-2 inline-block min-h-[44px] flex items-center">The Firm</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors py-2 inline-block min-h-[44px] flex items-center">Showcase</Link></li>
            <li><Link to="/expertise" className="hover:text-white transition-colors py-2 inline-block min-h-[44px] flex items-center">Sectors</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-8 sm:mb-10">Studio</h4>
          <ul className="space-y-4 sm:space-y-5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium">
            <li className="text-white/40">+91 96763 88678</li>
            <li className="text-white/40">studio@ngkinfra.com</li>
            <li className="leading-relaxed">Kukatpally, <br /> Hyderabad, TS</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-8 sm:mb-10">Network</h4>
          <ul className="space-y-4 sm:space-y-5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Institutional EPC</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold text-center md:text-left">
        <p className="opacity-30">© 2024 NGK Infra Engineering. All Rights Reserved.</p>
        <div className="flex space-x-8 sm:space-x-10 mt-2 md:mt-0 opacity-40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
