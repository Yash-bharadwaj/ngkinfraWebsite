
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingSocials from './FloatingSocials';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <FloatingSocials />
      <Footer />
    </div>
  );
};

export default Layout;
