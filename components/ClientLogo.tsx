import React from 'react';

type ClientLogoProps = {
  name: string;
  className?: string;
  /** `strip` = single-line friendly (marquee); `card` = wrapped text (grids) */
  layout?: 'strip' | 'card';
};

const ClientLogo: React.FC<ClientLogoProps> = ({ name, className = '', layout = 'strip' }) => {
  const initial = name.replace(/[^A-Za-z]/g, '').charAt(0) || name.charAt(0);

  if (layout === 'card') {
    return (
      <div
        className={`flex min-h-[5.5rem] w-full flex-col items-center justify-center gap-2 rounded-sm border border-slate-200 bg-white px-3 py-4 text-center shadow-sm ${className}`}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
          {initial}
        </div>
        <span className="text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-slate-600 sm:text-[11px]">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-[56px] min-w-[min(10.5rem,calc(100vw-2.5rem))] max-w-[min(14rem,calc(100vw-2rem))] flex-shrink-0 items-center gap-2.5 rounded-sm border border-[#E5E5E5] bg-[#F8F7F4] px-3 py-2.5 sm:min-h-[64px] sm:min-w-[150px] sm:max-w-[220px] sm:gap-3 sm:px-5 sm:py-3 md:min-w-[160px] ${className}`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1E2B3A] text-[11px] font-bold text-white">
        {initial}
      </div>
      <span className="line-clamp-2 text-left text-[9px] font-bold uppercase leading-snug tracking-[0.16em] text-[#5F6B75] sm:text-[10px]">
        {name}
      </span>
    </div>
  );
};

export default ClientLogo;
