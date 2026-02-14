import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const darkNav = isScrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-3 sm:px-6 md:px-12 md:py-4 ${
          isScrolled
            ? 'bg-[#F8F7F4]/95 backdrop-blur-lg shadow-sm border-b border-[#E5E5E5] py-3'
            : isHome ? 'bg-transparent text-white' : 'bg-[#F8F7F4] text-[#1A1A1A] border-b border-[#E5E5E5]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 min-w-0">
            <div
              className={`w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold border-2 transition-colors ${
                darkNav ? 'border-[#1A1A1A] text-[#1A1A1A]' : 'border-white text-white'
              }`}
            >
              N
            </div>
            <span className="text-base sm:text-lg md:text-xl font-bold tracking-tighter uppercase truncate">NGK Infra</span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] relative group transition-colors ${
                  darkNav ? 'text-[#5F6B75] hover:text-[#1A1A1A]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300"
                  style={{ backgroundColor: darkNav ? '#1E2B3A' : '#ffffff' }}
                  whileHover={{ width: '100%' }}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-6 md:px-7 py-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                darkNav ? 'bg-[#1A1A1A] text-white hover:bg-[#1E2B3A]' : 'bg-white text-[#1A1A1A] hover:bg-[#F8F7F4]'
              }`}
            >
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md -mr-1 touch-manipulation active:scale-95 transition-transform"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${darkNav ? 'text-[#1A1A1A]' : 'text-white'}`} strokeWidth={2} />
            ) : (
              <Menu className={`w-6 h-6 ${darkNav ? 'text-[#1A1A1A]' : 'text-white'}`} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              role="presentation"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[min(320px,85vw)] bg-[#F8F7F4] shadow-xl md:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E5E5]">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="w-10 h-10 flex items-center justify-center rounded-md text-[#1A1A1A] hover:bg-[#E5E5E5] active:scale-95"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
              <nav className="flex flex-col flex-1 overflow-y-auto px-5 py-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3.5 text-sm sm:text-[13px] font-bold uppercase tracking-[0.2em] ${
                        location.pathname === link.path ? 'text-[#1A1A1A]' : 'text-[#5F6B75]'
                      } hover:text-[#1A1A1A] active:opacity-80`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * navLinks.length, duration: 0.2 }}
                  className="mt-6 pt-4 border-t border-[#E5E5E5]"
                >
                  <Link
                    to="/contact"
                    className="block w-full text-center py-4 bg-[#1A1A1A] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1E2B3A] active:opacity-90"
                    onClick={() => setMobileOpen(false)}
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
