import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronDown, Navigation } from 'lucide-react';
import { WHATSAPP_PHONE_E164 } from '../constants';

const phoneHref = 'tel:+919676388678';
const emailHref = 'mailto:projects@ngkinfra.com';

const OFFICE_ADDRESS_LINES = [
  '# 203, Royal Square, KPHB Phase 5,',
  'Kukatpally, Near NSL Centrum Mall,',
  'Hyderabad — 500072',
] as const;

/** Query string for Google Maps (search / directions). */
const OFFICE_MAPS_DESTINATION =
  '203 Royal Square, KPHB Phase 5, Kukatpally, Near NSL Centrum Mall, Hyderabad 500072, Telangana, India';

const OFFICE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_MAPS_DESTINATION)}`;

const PROJECT_CATEGORIES: { value: string; label: string }[] = [
  { value: '', label: 'Choose a category' },
  { value: 'New residential construction', label: 'New residential construction' },
  { value: 'New commercial / institutional build', label: 'New commercial / institutional build' },
  { value: 'Residential interiors', label: 'Residential interiors' },
  { value: 'Commercial / office interiors', label: 'Commercial / office interiors' },
  { value: 'Construction + interiors (end-to-end)', label: 'Construction + interiors (end-to-end)' },
  { value: 'Renovation & remodeling', label: 'Renovation & remodeling' },
  { value: 'Civil / structural works', label: 'Civil / structural works' },
  { value: 'Turnkey (design + build)', label: 'Turnkey (design + build)' },
  { value: 'Project management / site supervision', label: 'Project management / site supervision' },
  { value: 'Estimation or feasibility', label: 'Estimation or feasibility' },
  { value: 'Interior styling / soft furnishings', label: 'Interior styling / soft furnishings' },
  { value: 'Landscape / exterior works', label: 'Landscape / exterior works' },
  { value: 'Others', label: 'Others — specify below' },
];

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [need, setNeed] = useState('');
  const [needOther, setNeedOther] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const needLabel =
      need === 'Others'
        ? `Others — ${needOther.trim() || '—'}`
        : need || '—';
    const lines = [
      'Hello NGK Infra — start a project inquiry (website form)',
      '',
      `Name: ${name.trim()}`,
      `Mobile: ${phone.trim()}`,
      `Email: ${email.trim() || '—'}`,
      `Project type: ${needLabel}`,
    ];
    if (message.trim()) lines.push('', `Message: ${message.trim()}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_PHONE_E164}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-[#F8F7F4] pb-16 pt-20 sm:pb-24 sm:pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#5F6B75]">Contact</p>
            <h1 className="mb-6 font-serif text-3xl text-[#1A1A1A] sm:text-4xl md:text-5xl">
              Start a project
            </h1>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-[#5F6B75] sm:text-base">
              New build, renovation, or interiors in Hyderabad and beyond — share your scope and we’ll get back to you.
            </p>

            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-[#E5E5E5] bg-white">
                  <MapPin className="h-4 w-4 text-[#5F6B75]" aria-hidden />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-[#1A1A1A]">Address</p>
                  <p className="text-sm leading-relaxed text-[#5F6B75]">
                    {OFFICE_ADDRESS_LINES.map((line, i) => (
                      <React.Fragment key={line}>
                        {i > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-[#E5E5E5] bg-white">
                  <Phone className="h-4 w-4 text-[#5F6B75]" aria-hidden />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-[#1A1A1A]">Phone</p>
                  <a
                    href={phoneHref}
                    className="text-sm text-[#1E2B3A] underline-offset-2 hover:underline"
                  >
                    +91 96763 88678
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-[#E5E5E5] bg-white">
                  <Mail className="h-4 w-4 text-[#5F6B75]" aria-hidden />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-[#1A1A1A]">Email</p>
                  <a
                    href={emailHref}
                    className="text-sm text-[#1E2B3A] underline-offset-2 hover:underline break-all"
                  >
                    projects@ngkinfra.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex min-w-0 w-full flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-[#E5E5E5] bg-white p-6 shadow-lg sm:p-8 md:p-10"
          >
            <h2 className="mb-6 font-serif text-xl text-[#1A1A1A] sm:text-2xl">Your project details</h2>
            <p className="mb-6 text-sm text-[#5F6B75]">
              A quick brief helps us understand site, scale, and timeline before we speak.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
                  Your name <span className="text-red-600">*</span>
                </label>
                <input
                  id="c-name"
                  required
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full min-h-[48px] rounded-sm border border-[#E5E5E5] bg-[#FAFAF8] px-3 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#1E2B3A] sm:text-sm"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
                  Mobile number <span className="text-red-600">*</span>
                </label>
                <input
                  id="c-phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full min-h-[48px] rounded-sm border border-[#E5E5E5] bg-[#FAFAF8] px-3 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#1E2B3A] sm:text-sm"
                  placeholder="e.g. 96763 88678"
                />
              </div>

              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
                  Email <span className="text-[#5F6B75] font-normal">(optional)</span>
                </label>
                <input
                  id="c-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[48px] rounded-sm border border-[#E5E5E5] bg-[#FAFAF8] px-3 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#1E2B3A] sm:text-sm"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="c-need" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
                  What do you need? <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select
                    id="c-need"
                    required
                    value={need}
                    onChange={(e) => {
                      setNeed(e.target.value);
                      if (e.target.value !== 'Others') setNeedOther('');
                    }}
                    className="w-full min-h-[48px] cursor-pointer appearance-none rounded-sm border border-[#E5E5E5] bg-[#FAFAF8] py-3 pl-3 pr-10 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#1E2B3A] sm:text-sm"
                  >
                    {PROJECT_CATEGORIES.map((opt) => (
                      <option key={opt.value || 'placeholder'} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5F6B75]"
                    aria-hidden
                  />
                </div>
                {need === 'Others' && (
                  <div className="mt-3">
                    <label htmlFor="c-need-other" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
                      Describe what you need <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="c-need-other"
                      type="text"
                      required
                      value={needOther}
                      onChange={(e) => setNeedOther(e.target.value)}
                      className="w-full min-h-[48px] rounded-sm border border-[#E5E5E5] bg-[#FAFAF8] px-3 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#1E2B3A] sm:text-sm"
                      placeholder="e.g. warehouse fit-out, clinic, school block…"
                      autoComplete="off"
                    />
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium text-[#1A1A1A]">
                  Anything else? <span className="text-[#5F6B75] font-normal">(optional)</span>
                </label>
                <textarea
                  id="c-msg"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full min-h-[120px] resize-none rounded-sm border border-[#E5E5E5] bg-[#FAFAF8] px-3 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#1E2B3A] sm:text-sm"
                  placeholder="Site location, size, timeline — anything that helps."
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[52px] rounded-sm bg-[#1A1A1A] px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1E2B3A] active:bg-[#151515]"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <div className="border border-[#E5E5E5] bg-white p-6 shadow-lg sm:p-8">
            <div className="flex gap-4">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-[#E5E5E5] bg-[#FAFAF8]">
                <MapPin className="h-5 w-5 text-[#5F6B75]" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5F6B75]">Office</p>
                <p className="text-sm leading-relaxed text-[#1A1A1A]">
                  {OFFICE_ADDRESS_LINES.map((line, i) => (
                    <React.Fragment key={line}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </p>
                <a
                  href={OFFICE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 border border-[#1A1A1A] bg-white px-4 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white active:opacity-90 sm:inline-flex sm:w-auto"
                >
                  <Navigation className="h-4 w-4 shrink-0" aria-hidden />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="mt-16 min-h-[14rem] w-full border-y border-[#E5E5E5] bg-white sm:mt-24 sm:min-h-[16rem]">
        <div className="flex h-full min-h-[inherit] items-center justify-center px-4 py-10">
          <div className="flex max-w-lg flex-col items-center text-center">
            <MapPin className="mb-3 h-8 w-8 text-[#5F6B75]" aria-hidden />
            <p className="text-sm font-medium text-[#1A1A1A]">Office location</p>
            <p className="mt-3 text-sm leading-relaxed text-[#5F6B75]">
              {OFFICE_ADDRESS_LINES.map((line, i) => (
                <React.Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </p>
            <a
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#1A1A1A] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white"
            >
              <Navigation className="h-4 w-4 shrink-0" aria-hidden />
              Get directions
            </a>
            <p className="mt-4 text-xs text-[#5F6B75]">Call before visiting if you can.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
