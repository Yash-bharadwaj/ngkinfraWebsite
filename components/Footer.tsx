import React from 'react';
import { Link } from 'react-router-dom';
import logoOnDark from '../NGK-LOGO-WHITE.png';
import {
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  PRIMARY_EMAIL,
  PRIMARY_EMAIL_HREF,
  SITE_WEB_URL,
} from '../constants';

const FOOTER_NAV: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const ADDRESS_LINES = [
  '# 203, Royal Square, KPHB Phase 5,',
  'Kukatpally, Near NSL Centrum Mall,',
  'Hyderabad — 500072',
] as const;

const SECTORS = ['Institutional', 'Healthcare', 'Residential', 'Infrastructure', 'Commercial'] as const;

const linkClass =
  'inline-flex min-h-[44px] items-center py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9CA8B3] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60';

const Footer: React.FC = () => {
  return (
    <footer className="min-w-0 overflow-x-hidden bg-[#1A1A1A] text-[#9CA8B3]">
      <div className="mx-auto w-full max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-16 sm:px-6 sm:pb-8 sm:pt-20 md:px-12 md:pt-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12 xl:gap-x-12">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="mb-6 inline-block max-w-full rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50"
            >
              <img
                src={logoOnDark}
                alt="NGK Infra — civil construction and EPC"
                width={1000}
                height={300}
                className="h-10 w-auto max-w-full object-contain object-left sm:h-11 md:h-12"
              />
            </Link>
            <p className="max-w-xs text-[10px] font-light uppercase leading-relaxed tracking-[0.28em] text-[#7a8794] sm:text-[11px] sm:tracking-[0.32em]">
              Engineering excellence.
              <br />
              Delivering trust.
            </p>
            <p className="mt-6 max-w-xs text-xs font-light leading-relaxed text-[#6b7784]">
              Civil construction and EPC across Telangana and Andhra Pradesh — institutional, healthcare, residential, and
              selective commercial programmes.
            </p>
          </div>

          {/* Navigate */}
          <div className="min-w-0">
            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.32em] text-white sm:mb-6">Navigate</h2>
            <nav aria-label="Footer">
              <ul className="flex flex-col gap-0.5">
                {FOOTER_NAV.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Office */}
          <div className="min-w-0">
            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.32em] text-white sm:mb-6">Office</h2>
            <ul className="space-y-1 text-sm font-light leading-relaxed">
              <li>
                <a href={COMPANY_PHONE_TEL} className="text-[#b8c2cc] transition-colors hover:text-white">
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={PRIMARY_EMAIL_HREF}
                  className="break-all text-[#b8c2cc] transition-colors hover:text-white"
                >
                  {PRIMARY_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={SITE_WEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-[#b8c2cc] transition-colors hover:text-white"
                >
                  www.ngkinfra.co.in
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs font-light leading-relaxed text-[#6b7784]">
              {ADDRESS_LINES.map((line, i) => (
                <React.Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Sectors */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.32em] text-white sm:mb-6">Sectors</h2>
            <p className="mb-6 text-xs font-light leading-relaxed text-[#6b7784]">
              {SECTORS.join(' · ')}
            </p>
            <Link
              to="/projects"
              className="inline-flex min-h-[44px] items-center border border-white/20 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              View portfolio
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-stretch gap-6 border-t border-white/10 pt-10 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-12">
          <p className="text-center text-[9px] font-bold uppercase tracking-[0.26em] text-white/35 sm:text-left sm:text-[10px] sm:tracking-[0.3em]">
            © 2026 NGK Infra. All rights reserved.
          </p>
          <p className="text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25 sm:text-right sm:text-[10px]">
            NICMAR-led delivery · Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
