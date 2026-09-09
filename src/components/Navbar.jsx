import { useState, useEffect } from 'react';
import logo from '../assets/img.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

export default function Navbar({ onNavigate, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Use Lenis scroll callback — only update state when threshold crosses
  useLenis(({ scroll }) => {
    const isScrolled = scroll > 10;
    setScrolled(prev => prev !== isScrolled ? isScrolled : prev);
  });

  const handleLinkClick = (page, detailId = null) => {
    onNavigate(page, detailId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const services = [
    { name: 'Software Development', id: 'it-applications' },
    { name: 'IT Infrastructure Led Services', id: 'it-infrastructure' },
    { name: 'Business Process Management', id: 'business-process' },
    { name: 'Digital Enterprise Applications', id: 'digital-enterprise' }
  ];

  const solutions = [
    { name: 'Networking Solutions', id: 'networking-solutions' },
    { name: 'Security Solutions', id: 'security-solutions' },
    { name: 'Wireless Network Solutions', id: 'wireless-solutions' },
    { name: 'Mobility Solutions', id: 'mobility-solutions' },
    { name: 'Surveillance Security Solutions', id: 'surveillance-solutions' },
    { name: 'Building Management System', id: 'bms-solutions' },
    { name: 'Public Announcement System', id: 'pa-solutions' },
    { name: 'Server and Storage Solutions', id: 'server-storage-solutions' },
    { name: 'Cloud Infrastructure Solutions', id: 'cloud-solutions' }
  ];

  const industries = [
    { name: 'Education and R&D Institutions', id: 'education-rd' },
    { name: 'Government Enterprises', id: 'government' },
    { name: 'Public Sector Units', id: 'public-sector' },
    { name: 'Corporates', id: 'corporates' }
  ];

  const products = [
    { name: 'OneDesk', id: 'onedesk' }
  ];

  const isServicesActive = ['it-infrastructure', 'it-applications', 'business-process', 'digital-enterprise', 'service-detail'].includes(currentPage);
  const isSolutionsActive = ['networking-solutions', 'security-solutions', 'wireless-solutions', 'mobility-solutions', 'surveillance-solutions', 'bms-solutions', 'pa-solutions', 'server-storage-solutions', 'cloud-solutions', 'solution-detail'].includes(currentPage);
  const isIndustriesActive = ['education-rd', 'government', 'public-sector', 'corporates', 'industry-detail'].includes(currentPage);
  const isProductsActive = ['onedesk'].includes(currentPage);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Tightened spring — eliminates overshoot/bounce on hovers
  const springConfig = { type: 'spring', stiffness: 400, damping: 30 };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.2 },
        staggerChildren: 0.04,
        delayChildren: 0.04
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.15 }
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springConfig
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3' : 'bg-white border-b border-slate-100 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={springConfig}
            className="flex items-center cursor-pointer"
            onClick={() => handleLinkClick('home')}
          >
            <img src={logo} alt="GLOBX Logo" className="h-12 sm:h-13 w-auto object-contain transition-all duration-300" />
          </motion.div>

          {/* Desktop Navigation — pure CSS hover for zero-latency interactions */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer active:scale-[0.97] nav-link ${currentPage === 'home' ? 'text-brand-primary bg-blue-50' : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'}`}
            >
              Home
            </button>

            {/* About */}
            <button
              onClick={() => handleLinkClick('about')}
              className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer active:scale-[0.97] nav-link ${currentPage === 'about' ? 'text-brand-primary bg-blue-50' : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'}`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md cursor-pointer nav-link active:scale-[0.97] ${isServicesActive ? 'text-brand-primary bg-blue-50' : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'}`}>
                Services <ChevronDown className={`w-4 h-4 transition-colors duration-150 ${isServicesActive ? 'text-brand-primary' : 'text-slate-400 group-hover:text-brand-primary'}`} />
              </button>
              <div className="absolute left-0 top-full mt-1.5 w-64 rounded-xl bg-white border border-slate-100 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 ease-out z-50 p-2 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
                {services.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id === 'it-infrastructure' ? 'it-infrastructure' : 'service-detail', item.id)}
                    className="w-full text-left px-3 py-2 text-sm rounded-lg text-slate-700 hover:text-brand-primary hover:bg-blue-50/70 transition-all duration-100 font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md cursor-pointer nav-link active:scale-[0.97] ${isSolutionsActive ? 'text-brand-primary bg-blue-50' : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'}`}>
                Solutions <ChevronDown className={`w-4 h-4 transition-colors duration-150 ${isSolutionsActive ? 'text-brand-primary' : 'text-slate-400 group-hover:text-brand-primary'}`} />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-80 rounded-xl bg-white border border-slate-100 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 ease-out z-50 p-2 grid grid-cols-1 gap-0.5 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
                {solutions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id === 'networking-solutions' ? 'networking-solutions' : 'solution-detail', item.id)}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:text-brand-primary hover:bg-blue-50/70 transition-all duration-100 font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md cursor-pointer nav-link active:scale-[0.97] ${isIndustriesActive ? 'text-brand-primary bg-blue-50' : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'}`}>
                Industries <ChevronDown className={`w-4 h-4 transition-colors duration-150 ${isIndustriesActive ? 'text-brand-primary' : 'text-slate-400 group-hover:text-brand-primary'}`} />
              </button>
              <div className="absolute right-0 top-full mt-1.5 w-64 rounded-xl bg-white border border-slate-100 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 ease-out z-50 p-2 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
                {industries.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id === 'education-rd' ? 'education-rd' : 'industry-detail', item.id === 'education-rd' ? null : item.id)}
                    className="w-full text-left px-3 py-2 text-sm rounded-lg text-slate-700 hover:text-brand-primary hover:bg-blue-50/70 transition-all duration-100 font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md cursor-pointer nav-link active:scale-[0.97] ${isProductsActive ? 'text-brand-primary bg-blue-50' : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'}`}>
                Products <ChevronDown className={`w-4 h-4 transition-colors duration-150 ${isProductsActive ? 'text-brand-primary' : 'text-slate-400 group-hover:text-brand-primary'}`} />
              </button>
              <div className="absolute right-0 top-full mt-1.5 w-36 rounded-xl bg-white border border-slate-100 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 ease-out z-50 p-2 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
                {products.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="w-full text-left px-3 py-2 text-sm rounded-lg text-slate-700 hover:text-brand-primary hover:bg-blue-50/70 transition-all duration-100 font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Careers */}
            <button
              onClick={() => handleLinkClick('careers')}
              className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer active:scale-[0.97] nav-link ${currentPage === 'careers' ? 'text-brand-primary bg-blue-50' : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'}`}
            >
              Careers
            </button>

            {/* Contact */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer active:scale-[0.97] nav-link ${currentPage === 'contact' ? 'text-brand-primary bg-blue-50' : 'text-slate-700 hover:text-brand-primary hover:bg-slate-50'}`}
            >
              Contact
            </button>
          </nav>



          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={springConfig}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-brand-primary hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden bg-white border-b border-slate-100 shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
              <motion.button
                variants={mobileItemVariants}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLinkClick('home')}
                className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-primary cursor-pointer"
              >
                Home
              </motion.button>

              <motion.button
                variants={mobileItemVariants}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLinkClick('about')}
                className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-primary cursor-pointer"
              >
                About Us
              </motion.button>

              {/* Services Mobile */}
              <motion.div variants={mobileItemVariants} className="space-y-1">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex justify-between items-center w-full px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-primary cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="pl-6 space-y-1 bg-slate-50/50 rounded-lg py-1 overflow-hidden"
                    >
                      {services.map((item) => (
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          key={item.id}
                          onClick={() => handleLinkClick(item.id === 'it-infrastructure' ? 'it-infrastructure' : 'service-detail', item.id)}
                          className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-brand-primary font-medium cursor-pointer"
                        >
                          {item.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Solutions Mobile */}
              <motion.div variants={mobileItemVariants} className="space-y-1">
                <button
                  onClick={() => toggleDropdown('solutions')}
                  className="flex justify-between items-center w-full px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-primary cursor-pointer"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="pl-6 space-y-1 bg-slate-50/50 rounded-lg py-1 overflow-hidden"
                    >
                      <div className="max-h-60 overflow-y-auto space-y-1 py-1">
                        {solutions.map((item) => (
                          <motion.button
                            whileTap={{ scale: 0.98 }}
                            key={item.id}
                            onClick={() => handleLinkClick(item.id === 'networking-solutions' ? 'networking-solutions' : 'solution-detail', item.id)}
                            className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-brand-primary font-medium cursor-pointer"
                          >
                            {item.name}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Industries Mobile */}
              <motion.div variants={mobileItemVariants} className="space-y-1">
                <button
                  onClick={() => toggleDropdown('industries')}
                  className="flex justify-between items-center w-full px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-primary cursor-pointer"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="pl-6 space-y-1 bg-slate-50/50 rounded-lg py-1 overflow-hidden"
                    >
                      {industries.map((item) => (
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          key={item.id}
                          onClick={() => handleLinkClick(item.id === 'education-rd' ? 'education-rd' : 'industry-detail', item.id === 'education-rd' ? null : item.id)}
                          className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-brand-primary font-medium cursor-pointer"
                        >
                          {item.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Products Mobile */}
              <motion.div variants={mobileItemVariants} className="space-y-1">
                <button
                  onClick={() => toggleDropdown('products')}
                  className="flex justify-between items-center w-full px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-primary cursor-pointer"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="pl-6 space-y-1 bg-slate-50/50 rounded-lg py-1 overflow-hidden"
                    >
                      {products.map((item) => (
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          key={item.id}
                          onClick={() => handleLinkClick(item.id)}
                          className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-brand-primary font-medium cursor-pointer"
                        >
                          {item.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                variants={mobileItemVariants}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLinkClick('careers')}
                className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-primary cursor-pointer"
              >
                Careers
              </motion.button>

              <motion.button
                variants={mobileItemVariants}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLinkClick('contact')}
                className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-primary cursor-pointer"
              >
                Contact
              </motion.button>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
