import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (page, detailId = null) => {
    onNavigate(page, detailId);
  };

  // const solutions = [
  //   { name: 'Networking Solutions', id: 'networking-solutions' },
  //   { name: 'Security Solutions', id: 'security-solutions' },
  //   { name: 'Wireless Network Solutions', id: 'wireless-solutions' },
  //   { name: 'Mobility Solutions', id: 'mobility-solutions' },
  //   { name: 'Surveillance Security', id: 'surveillance-solutions' },
  //   { name: 'Building Management System', id: 'bms-solutions' },
  //   { name: 'Public Announcement System', id: 'pa-solutions' },
  //   { name: 'Server and Storage Solutions', id: 'server-storage-solutions' },
  //   { name: 'Cloud Infrastructure Solutions', id: 'cloud-solutions' }
  // ];

  const services = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-black text-[#94A3B8] font-sans border-t border-[#1E293B]">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => handleLinkClick('home')}>
              <span className="text-2xl font-display font-bold tracking-tight text-[#F8FAFC]">GLTech Solutions</span>
            </div>
            <div className="flex items-center justify-between w-[180px] pt-1">
              <a href="" target="_blank" rel="noopener noreferrer" className="w-[52px] h-[38px] flex items-center justify-center bg-[#111B2E] hover:bg-[#2563EB] text-white rounded-lg transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-[52px] h-[38px] flex items-center justify-center bg-[#111B2E] hover:bg-[#2563EB] text-white rounded-lg transition-all" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-[52px] h-[38px] flex items-center justify-center bg-[#111B2E] hover:bg-[#2563EB] text-white rounded-lg transition-all" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          {/* <div>
            <h3 className="text-white font-display font-bold text-base mb-6 tracking-wide uppercase text-sm border-l-4 border-blue-500 pl-3">Our Solutions</h3>
            <ul className="space-y-3 text-sm">
              {solutions.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleLinkClick(item.id === 'networking-solutions' ? 'networking-solutions' : 'solution-detail', item.id)}
                    className="flex items-center gap-1.5 hover:text-white transition-all text-slate-400 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => handleLinkClick('networking-solutions')}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 pt-1 cursor-pointer text-xs"
                >
                  View All Solutions <ChevronRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div> */}

          {/* Column 3: Services */}
          <div>
            <h3 className="text-[#F8FAFC] font-display font-bold text-base mb-6 tracking-wide uppercase text-sm border-l-4 border-[#3B82F6] pl-3">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {services.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleLinkClick(item.id === 'services' ? 'services' : item.id)}
                    className="flex items-center gap-1.5 hover:text-[#F8FAFC] transition-all text-[#94A3B8] group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#3B82F6] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
              {/* <li>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="flex items-center gap-1.5 hover:text-white transition-all text-slate-400 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>About Us</span>
                </button>
              </li> */}
              {/* <li>
                <button 
                  onClick={() => handleLinkClick('careers')}
                  className="flex items-center gap-1.5 hover:text-white transition-all text-slate-400 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>Careers (Join Us)</span>
                </button>
              </li> */}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-[#F8FAFC] font-display font-bold text-base tracking-wide uppercase text-sm border-l-4 border-[#3B82F6] pl-3">Contact</h3>
            <ul className="space-y-4 text-sm text-[#94A3B8]">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#3B82F6] shrink-0 mt-1" />
                <span className="leading-relaxed text-[#94A3B8]">
                  Plot No- HIG/141, Kanan Vihar, Phase-1, Chadrashekharpur, Bhubaneswar - 751024
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <a href="tel:+918249671085" className="hover:text-[#F8FAFC] transition-colors">+91 8249671085</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <a href="mailto:business@gltech.in" className="hover:text-[#F8FAFC] transition-colors">business@gltech.in</a>
              </li>
              {/* <li className="flex gap-3 items-start pt-1 border-t border-slate-800">
                <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <div className="font-semibold text-slate-300">Office Hours:</div>
                  <div>Mon - Sat: 10:00 - 18:00</div>
                  <div>Sun: Closed</div>
                  <div>2nd & 4th Sat: Closed</div>
                </div>
              </li> */}
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Copyright section */}
      <div className="bg-black py-6 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            &copy; {new Date().getFullYear()} GLTech Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            <button onClick={() => handleLinkClick('home')} className="hover:text-[#F8FAFC] cursor-pointer">Home</button>
            <button onClick={() => handleLinkClick('about')} className="hover:text-[#F8FAFC] cursor-pointer">About Us</button>
            <button onClick={() => handleLinkClick('services')} className="hover:text-[#F8FAFC] cursor-pointer">Services</button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-[#F8FAFC] cursor-pointer">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
