import { useState, useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ITInfrastructure from './pages/ITInfrastructure';
import NetworkingSolutions from './pages/NetworkingSolutions';
import EducationAndRD from './pages/EducationAndRD';
import OneDesk from './pages/OneDesk';
import Contact from './pages/Contact';
import ServiceOrSolutionDetail from './pages/ServiceOrSolutionDetail';
import Careers from './pages/Careers';
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentDetailId, setCurrentDetailId] = useState(null);
  const [fadeTrigger, setFadeTrigger] = useState(true);

  // Grab the lenis instance so we can use scrollTo for page transitions
  const lenis = useLenis();

  const handleNavigate = (page, detailId = null, pushToHistory = true) => {
    setFadeTrigger(false);

    setTimeout(() => {
      setCurrentPage(page);
      setCurrentDetailId(detailId);
      setFadeTrigger(true);

      if (pushToHistory) {
        let newUrl = '/';
        if (page !== 'home') {
          newUrl = detailId ? `/${page}/${detailId}` : `/${page}`;
        }
        window.history.pushState({ page, detailId }, '', newUrl);
      }

      // Use Lenis scrollTo for instant top reset (no smooth — it's a page transition)
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 250);
  };

  useEffect(() => {
    const parseLocation = () => {
      const path = window.location.pathname;
      if (path === '/' || !path) {
        return { page: 'home', detailId: null };
      }
      
      const cleanPath = path.startsWith('/') ? path.substring(1) : path;
      const parts = cleanPath.split('/');
      const page = parts[0];
      const detailId = parts[1] || null;

      if (['home', 'about', 'it-infrastructure', 'networking-solutions', 'education-rd', 'onedesk', 'contact', 'careers'].includes(page)) {
        return { page, detailId: null };
      } else if (['service-detail', 'solution-detail', 'industry-detail'].includes(page) && detailId) {
        return { page, detailId };
      }
      return { page: 'home', detailId: null };
    };

    const handlePopState = (e) => {
      if (e.state && e.state.page) {
        handleNavigate(e.state.page, e.state.detailId, false);
      } else {
        const parsed = parseLocation();
        handleNavigate(parsed.page, parsed.detailId, false);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial load path parsing
    const initial = parseLocation();
    setCurrentPage(initial.page);
    setCurrentDetailId(initial.detailId);

    let initialUrl = '/';
    if (initial.page !== 'home') {
      initialUrl = initial.detailId ? `/${initial.page}/${initial.detailId}` : `/${initial.page}`;
    }
    window.history.replaceState({ page: initial.page, detailId: initial.detailId }, '', initialUrl);

    return () => window.removeEventListener('popstate', handlePopState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis]);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <AboutUs />;
      case 'it-infrastructure':
        return <ITInfrastructure />;
      case 'networking-solutions':
        return <NetworkingSolutions />;
      case 'education-rd':
        return <EducationAndRD />;
      case 'onedesk':
        return <OneDesk />;
      case 'contact':
        return <Contact />;
      case 'careers':
        return <Careers onNavigate={handleNavigate} />;
      case 'service-detail':
      case 'solution-detail':
      case 'industry-detail':
        return <ServiceOrSolutionDetail detailId={currentDetailId} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-[#091E42] selection:bg-blue-600 selection:text-white antialiased">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main className={`flex-grow transition-opacity duration-250 ${fadeTrigger ? 'opacity-100' : 'opacity-0'}`}>
        {renderActivePage()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
