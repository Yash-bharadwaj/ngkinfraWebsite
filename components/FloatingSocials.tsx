
import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Phone, ClipboardList } from 'lucide-react';
import { WHATSAPP_PHONE_E164 } from '../constants';

const PHONE_CALL_HREF = `tel:+${WHATSAPP_PHONE_E164}`;

const shakeTransition = {
  duration: 0.45,
  repeat: Infinity as const,
  repeatDelay: 1.55,
  ease: 'easeInOut' as const,
};

type FloatingSocialsProps = {
  leadOpen: boolean;
  onToggleLead: () => void;
};

const FloatingSocials: React.FC<FloatingSocialsProps> = ({ leadOpen, onToggleLead }) => {
  const socials = [
    {
      hidden: true,
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: '#',
      color: 'rgba(0, 119, 181, 1)',
      glassColor: 'rgba(0, 119, 181, 0.15)',
      newTab: true,
      shake: false,
    },
    {
      hidden: true,
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: '#',
      color: 'rgba(225, 48, 108, 1)',
      glassColor: 'rgba(225, 48, 108, 0.15)',
      newTab: true,
      shake: false,
    },
  ];

  const visible = socials.filter((s) => !s.hidden);

  const fab = (
    <div
      className="pointer-events-none fixed bottom-20 right-4 z-[60] flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)] sm:bottom-8 sm:right-6 sm:gap-3.5"
      inert={leadOpen ? true : undefined}
    >
      {/* Call — top */}
      <motion.a
        href={PHONE_CALL_HREF}
        aria-label="Call us"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.08, x: -4 }}
        whileTap={{ scale: 0.94 }}
        className="group pointer-events-auto relative flex h-14 w-14 touch-manipulation items-center justify-center rounded-full border-2 border-white/90 bg-gradient-to-br from-[#FF8A00] via-[#EA580C] to-[#C2410C] shadow-[0_4px_24px_rgba(234,88,12,0.55),0_8px_32px_rgba(15,23,42,0.25)] ring-2 ring-[#FDBA74]/80 transition-all duration-300"
      >
        <motion.span
          className="inline-flex text-white drop-shadow-sm"
          aria-hidden
          animate={{ rotate: [0, -11, 11, -11, 11, 0] }}
          transition={shakeTransition}
        >
          <Phone className="h-6 w-6" strokeWidth={2.25} />
        </motion.span>
        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 sm:text-[10px]">
          Call us
        </span>
      </motion.a>

      {/* Quick form — below call */}
      <motion.button
        type="button"
        onClick={onToggleLead}
        aria-label={leadOpen ? 'Close quick contact form' : 'Open quick contact form'}
        aria-expanded={leadOpen}
        aria-controls="ngk-lead-dialog"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.62, duration: 0.5 }}
        whileHover={{ scale: 1.08, x: -4 }}
        whileTap={{ scale: 0.94 }}
        className={`group pointer-events-auto relative flex h-14 w-14 touch-manipulation items-center justify-center rounded-full border-2 border-white/90 text-white shadow-[0_4px_24px_rgba(13,148,136,0.45),0_8px_28px_rgba(15,23,42,0.2)] ring-2 transition-all duration-300 ${
          leadOpen
            ? 'bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#115E59] ring-[#5EEAD4]/90'
            : 'bg-gradient-to-br from-[#14B8A6] via-[#0D9488] to-[#0F766E] ring-[#99F6E4]/70'
        }`}
      >
        <ClipboardList className="h-6 w-6 drop-shadow-sm" strokeWidth={2.25} aria-hidden />
        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 sm:text-[10px]">
          Quick form
        </span>
      </motion.button>

      {visible.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          {...(social.newTab
            ? { target: '_blank' as const, rel: 'noopener noreferrer' }
            : {})}
          aria-label={social.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.74 + index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.08, x: -4 }}
          whileTap={{ scale: 0.94 }}
          className="pointer-events-auto relative group flex h-11 w-11 touch-manipulation items-center justify-center rounded-2xl border border-white/30 shadow-2xl backdrop-blur-md transition-all duration-300 sm:h-12 sm:w-12"
          style={{
            backgroundColor: social.glassColor,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          }}
        >
          <div className="transition-colors duration-300" style={{ color: social.color }}>
            {social.icon}
          </div>
          <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 sm:text-[10px]">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );

  return createPortal(fab, document.body);
};

export default FloatingSocials;
