
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

const FloatingSocials: React.FC = () => {
  const socials = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: '#',
      color: 'rgba(0, 119, 181, 1)',
      glassColor: 'rgba(0, 119, 181, 0.15)',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: '#',
      color: 'rgba(225, 48, 108, 1)',
      glassColor: 'rgba(225, 48, 108, 0.15)',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://wa.me/919676388678',
      color: 'rgba(37, 211, 102, 1)',
      glassColor: 'rgba(37, 211, 102, 0.15)',
    },
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-[60] flex flex-col gap-3 sm:gap-4 pb-[env(safe-area-inset-bottom)]">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="relative group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-300 touch-manipulation"
          style={{ 
            backgroundColor: social.glassColor,
            boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.15)`
          }}
        >
          <div 
            className="transition-colors duration-300" 
            style={{ color: social.color }}
          >
            {social.icon}
          </div>
          
          {/* Tooltip */}
          <span className="absolute right-16 px-3 py-1 rounded-lg bg-slate-900 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingSocials;
