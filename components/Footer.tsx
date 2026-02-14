
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#5F6B75] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 text-white mb-8">
            <div className="w-8 h-8 flex items-center justify-center font-bold border-2 border-white transition-colors">
              N
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">NGK Infra</span>
          </Link>
          <p className="text-[11px] leading-relaxed mb-8 uppercase tracking-widest font-light">
            An engineering-led boutique <br /> consultancy redefining the <br /> building experience.
          </p>
        </div>

        <div>
          <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Portfolio</h4>
          <ul className="space-y-5 text-[10px] uppercase tracking-[0.2em] font-medium">
            <li><Link to="/about" className="hover:text-white transition-colors">The Firm</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Showcase</Link></li>
            <li><Link to="/expertise" className="hover:text-white transition-colors">Sectors</Link></li>
            <li><Link to="/process" className="hover:text-white transition-colors">Methodology</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Studio</h4>
          <ul className="space-y-5 text-[10px] uppercase tracking-[0.2em] font-medium">
            <li className="text-white/40">+91 96763 88678</li>
            <li className="text-white/40">studio@ngkinfra.com</li>
            <li className="leading-relaxed">Kukatpally, <br /> Hyderabad, TS</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Network</h4>
          <ul className="space-y-5 text-[10px] uppercase tracking-[0.2em] font-medium">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Institutional EPC</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold">
        <p className="opacity-30">© 2024 NGK Infra Engineering. All Rights Reserved.</p>
        <div className="flex space-x-10 mt-6 md:mt-0 opacity-40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
