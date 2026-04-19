
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

/** HashRouter: `window.location.pathname` does not change — use router `pathname` (e.g. /about for #/about). */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
