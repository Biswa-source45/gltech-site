import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingLines from '../components/FloatingLines';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    category: 'it-infrastructure',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate generation of a unique OneDesk support ticket
    const randomTicket = 'GX-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 font-sans">

      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-[#0F172A] py-16 relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)',
          backgroundSize: '56px 56px'
        }} />
        <div className="absolute top-0 right-0 w-[550px] h-[450px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at top right, rgba(14,165,233,0.12) 0%, rgba(56,189,248,0.06) 40%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(6,182,212,0.1) 0%, rgba(14,165,233,0.05) 45%, transparent 70%)' }} />
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <FloatingLines
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[8, 12, 16]}
            lineDistance={[8, 6, 4]}
            bendRadius={6.0}
            bendStrength={-0.6}
            interactive={true}
            parallax={true}
            linesGradient={['#0EA5E9', '#38BDF8', '#0284C7', '#06B6D4']}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-wider text-sky-600">Get In Touch</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0F172A]">
            Contact Us
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Get in touch with our team to discuss your IT system integration needs.
          </p>
        </div>
      </section>

      {/* 2. Interactive Columns */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details & Map Left */}
          <div className="lg:col-span-5 space-y-8">

            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">Offices & Support</span>
              <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">GL Tech Solutions Headquarters</h2>
              {/* <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
                Our main systems integration and client support center is located at Odyssa Business Centre, Rasulgarh, Bhubaneswar. Feel free to contact us during standard business hours.
              </p> */}
            </div>

            <ul className="space-y-5 text-sm sm:text-base text-slate-600">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                {/* <div>
                  <span className="font-semibold text-brand-dark block text-xs uppercase tracking-wider text-slate-400">Headquarters Address</span>
                  <span className="leading-relaxed text-sm"> GL Tech Solutions, Plot No- HIG/141, Kanan Vihar, Phase-1, Chadrashekharpur, Bhubaneswar - 751024</span>
                </div> */}
                <div>
                  <span className="font-semibold text-brand-dark block text-xs uppercase tracking-wider text-slate-400">Headquarters Address</span>
                  <span className="leading-relaxed text-sm"> GL Tech Solutions Pvt. Ltd., Saheed Nagar, Bhubaneswar, Odisha - 751007</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-brand-dark block text-xs uppercase tracking-wider text-slate-400">Contact</span>
                  <span className="text-sm">
                    <a href="tel:+919124668102" className="hover:text-blue-600 transition-colors">+91 8249671085</a>
                  </span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-brand-dark block text-xs uppercase tracking-wider text-slate-400">Email</span>
                  <a href="mailto:business@gltech.in" className="hover:text-blue-600 transition-colors text-sm">business@gltech.in</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-brand-dark block text-xs uppercase tracking-wider text-slate-400">Business Timings</span>
                  <div className="text-xs text-slate-500 space-y-0.5 mt-0.5">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday - Sunday: Closed</div>
                    {/* <div className="italic">Note: Closed on 2nd & 4th Saturdays</div> */}
                  </div>
                </div>
              </li>
            </ul>

            {/* Interactive Embedded Google Map */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-100 shadow-inner h-72 group cursor-default"
            >
              <iframe
                title="GL Tech Solutions Headquarters Location Map"
                src="https://www.google.com/maps?q=20.2905158,85.8483434&z=17&output=embed"
                className="w-full h-full border-0 transition-all duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <div className="absolute bottom-3 right-3 z-10">
                <a
                  href="https://maps.app.goo.gl/TAJB76G4aZbbQiBD9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-lg inline-flex items-center gap-1 shadow-md hover:shadow-lg transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
                </a>
              </div>
            </motion.div>

          </div>

          {/* Contact Inquiry Form Right */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-md">

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display text-brand-dark">Send Us a Message</h3>
                  {/* <p className="text-xs text-slate-400 font-light">Fill out the fields below and our systems engineer will review the request.</p> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                      placeholder="e.g. Rudra Prasad Rautray"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Your Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                      placeholder="e.g. rudra@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                      placeholder="e.g. +91 6370796391"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="org" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Name</label>
                    <input
                      type="text"
                      id="org"
                      name="org"
                      value={formData.org}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                      placeholder="e.g. Odisha Power Corporation"
                    />
                  </div>
                </div>

                {/* <div className="space-y-1.5">
                  <label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Message *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                  >
                    <option value="it-infrastructure">IT Infrastructure Led Services</option>
                    <option value="networking-solutions">Networking & Structured Cabling</option>
                    <option value="security-solutions">Security & IP Surveillance</option>
                    <option value="education-rd">Education & R&D LMS/Labs</option>
                    <option value="onedesk">OneDesk Product Demo</option>
                    <option value="other">Other System Integration Request</option>
                  </select>
                </div> */}

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                    placeholder="Describe your cabling, hardware or software requests here..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:translate-y-[-1px] transition-all cursor-pointer"
                  >
                    Submit Request
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-6 animate-fade-in flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-slate-900">Thank You! </h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto font-light">
                    We have received your Message Successfully. Our team will review your request and get back to you shortly.
                  </p>
                </div>

                {/* <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 max-w-sm w-full">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">OneDesk Support Ticket ID</span>
                  <span className="text-xl font-mono font-bold text-slate-800 tracking-wider mt-1 block">{ticketId}</span>
                </div> */}

                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', org: '', message: '' });
                  }}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
