import React from 'react';
import { CLIENT_BRANDS } from '../constants';
import ClientLogo from './ClientLogo';

const ClientLogoMarquee: React.FC = () => {
  const items = [...CLIENT_BRANDS, ...CLIENT_BRANDS];

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 md:w-32" />

      <div className="overflow-x-hidden py-4">
        <div className="ngk-logo-marquee-track items-center gap-10 pr-10 md:gap-16 md:pr-16">
          {items.map((client, i) => (
            <ClientLogo key={`${client.name}-${i}`} name={client.name} layout="strip" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoMarquee;
