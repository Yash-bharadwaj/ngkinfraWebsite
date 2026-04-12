
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingSocials from './FloatingSocials';
import LeadWhatsAppModal from './LeadWhatsAppModal';

const LEAD_STORAGE_KEY = 'ngk_wa_lead_done';
const LEAD_AUTO_OPEN_MS = 5000;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [leadOpen, setLeadOpen] = useState(false);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAutoTimer = useCallback(() => {
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const dismissLead = useCallback(() => {
    clearAutoTimer();
    setLeadOpen(false);
    try {
      sessionStorage.setItem(LEAD_STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  }, [clearAutoTimer]);

  const toggleLead = useCallback(() => {
    clearAutoTimer();
    setLeadOpen((prev) => {
      const next = !prev;
      if (!next) {
        try {
          sessionStorage.setItem(LEAD_STORAGE_KEY, '1');
        } catch {
          /* ignore */
        }
      }
      return next;
    });
  }, [clearAutoTimer]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(LEAD_STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }
    autoTimerRef.current = window.setTimeout(() => {
      setLeadOpen(true);
      autoTimerRef.current = null;
    }, LEAD_AUTO_OPEN_MS);
    return () => clearAutoTimer();
  }, [clearAutoTimer]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <FloatingSocials leadOpen={leadOpen} onToggleLead={toggleLead} />
      <LeadWhatsAppModal open={leadOpen} onClose={dismissLead} />
      <Footer />
    </div>
  );
};

export default Layout;
