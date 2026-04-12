import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { WHATSAPP_PHONE_E164 } from '../constants';

type LeadWhatsAppModalProps = {
  open: boolean;
  onClose: () => void;
};

const LeadWhatsAppModal: React.FC<LeadWhatsAppModalProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [project, setProject] = useState('');

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Hello NGK Infra — new inquiry from the website',
      '',
      `Name: ${name.trim()}`,
      `Project / category: ${project}`,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_PHONE_E164}?text=${text}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="lead-modal"
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-[#1A1A1A]/55 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            id="ngk-lead-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ngk-lead-title"
            className="relative z-[1] max-h-[min(90vh,640px)] w-full max-w-[26rem] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative border border-[#E5E5E5] bg-[#F8F7F4] p-6 shadow-2xl sm:p-7">
              <button
                type="button"
                aria-label="Close"
                className="absolute right-3 top-3 rounded-md p-2 text-[#5F6B75] transition-colors hover:bg-[#E5E5E5] hover:text-[#1A1A1A]"
                onClick={onClose}
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>

              <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.35em] text-[#5F6B75]">Quick connect</p>
              <h2 id="ngk-lead-title" className="font-serif text-xl text-[#1A1A1A]">
                Message us on WhatsApp
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#5F6B75]">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="min-h-[48px] w-full border border-[#E5E5E5] bg-white px-3 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#1E2B3A] sm:text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#5F6B75]">
                    Project
                  </label>
                  <select
                    required
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="min-h-[48px] w-full cursor-pointer border border-[#E5E5E5] bg-white px-3 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#1E2B3A] sm:text-sm"
                  >
                    <option value="">Select category</option>
                    <optgroup label="Construction">
                      <option value="Institutional / EPC">Institutional / EPC</option>
                      <option value="Residential — new build">Residential — new build</option>
                      <option value="Residential — luxury / villas">Residential — luxury / villas</option>
                      <option value="Healthcare / hospital">Healthcare / hospital</option>
                      <option value="Commercial construction">Commercial construction</option>
                      <option value="Industrial / warehouse">Industrial / warehouse</option>
                      <option value="Infrastructure / civil / railway">Infrastructure / civil / railway</option>
                      <option value="Renovation / retrofit (structural)">Renovation / retrofit (structural)</option>
                      <option value="Other (construction)">Other (construction)</option>
                    </optgroup>
                    <optgroup label="Interiors">
                      <option value="Residential interiors">Residential interiors</option>
                      <option value="Commercial / office interiors">Commercial / office interiors</option>
                      <option value="Turnkey interiors">Turnkey interiors</option>
                      <option value="Fit-out, finishes and MEP coordination">Fit-out, finishes & MEP coordination</option>
                      <option value="Modular / kitchen & wardrobes">Modular / kitchen & wardrobes</option>
                      <option value="Other (interiors)">Other (interiors)</option>
                    </optgroup>
                    <option value="Construction + interiors (combined)">Construction + interiors (combined)</option>
                    <option value="General inquiry">General inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="submit"
                    className="min-h-[48px] w-full bg-[#1A1A1A] py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#1E2B3A] active:opacity-95"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="min-h-[44px] py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#5F6B75] hover:text-[#1A1A1A]"
                    onClick={onClose}
                  >
                    Maybe later
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadWhatsAppModal;
