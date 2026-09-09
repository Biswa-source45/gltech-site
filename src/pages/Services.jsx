import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ClipboardCheck, Compass, Headphones, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import serverRacks from '../assets/server_racks.png';
import teamCollaboration from '../assets/team_collaboration.png';
import fiberNetwork from '../assets/fiber_network.png';
import securitySolutions from '../assets/solutions/security-solutions.png';
import surveillanceSolutions from '../assets/solutions/surveillance-solutions.png';

const services = [
  {
    id: 'desktop-integration',
    title: 'Desktop Integration',
    description: 'Seamlessly connect workstations, applications, users, and security controls to the rest of your IT environment.',
    features: ['Workstation deployment and configuration', 'Operating system installation and updates', 'Software installation and management', 'User account setup and management', 'Desktop security implementation'],
    image: teamCollaboration
  },
  {
    id: 'server-storage-solutions',
    title: 'Server & Storage Solutions',
    description: 'Keep business data accessible, secure, and properly managed with resilient server, storage, backup, and virtualization systems.',
    features: ['Server hardware installation and configuration', 'SAN implementation', 'NAS solutions', 'Backup and disaster recovery', 'Virtualization services'],
    image: serverRacks
  },
  {
    id: 'networking-solutions',
    title: 'Networking Solutions',
    description: 'Build reliable, high-performance connectivity that enables efficient communication and secure data transfer across your organization.',
    features: ['LAN/WAN design and implementation', 'Network hardware installation and configuration', 'Wireless network implementation', 'VPN setup and configuration', 'Network monitoring and maintenance'],
    image: fiberNetwork
  },
  {
    id: 'security-equipment',
    title: 'Security Equipment',
    description: 'Protect valuable data and systems from threats and unauthorized access with layered security designed for business continuity.',
    features: ['Firewall installation and configuration', 'Intrusion detection and prevention', 'Endpoint security solutions', 'Security auditing and assessment', 'Data encryption solutions'],
    image: securitySolutions
  },
  {
    id: 'cctv-solutions',
    title: 'CCTV Solutions',
    description: 'Secure your premises and assets with integrated surveillance, video management, remote monitoring, and access control.',
    features: ['IP camera installation and configuration', 'Video management software setup', 'Remote monitoring solutions', 'Video storage and retrieval systems', 'Access control integration'],
    image: surveillanceSolutions
  }
];

const process = [
  { number: '01', title: 'Assessment', subtitle: 'Understanding your needs', description: 'We assess your current infrastructure, business requirements, risks, and goals before recommending a solution.', icon: <ClipboardCheck className="w-6 h-6" /> },
  { number: '02', title: 'Design', subtitle: 'Creating the solution', description: 'Our team designs a customized architecture optimized for performance, security, scalability, and future growth.', icon: <Compass className="w-6 h-6" /> },
  { number: '03', title: 'Implementation', subtitle: 'Executing the plan', description: 'We deploy the solution with minimal disruption, clear milestones, careful testing, and industry best practices.', icon: <LayoutGrid className="w-6 h-6" /> },
  { number: '04', title: 'Support', subtitle: 'Ongoing maintenance', description: 'We provide ongoing support and maintenance so your systems continue operating at peak performance.', icon: <Headphones className="w-6 h-6" /> }
];

export default function Services({ onNavigate }) {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <div className="w-full bg-[#F8FAFC] text-[#0F172A] font-sans overflow-hidden">
      <section className="relative bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] py-20 sm:py-28 border-b border-slate-200/70 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute top-0 right-0 w-[620px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top right, rgba(14,165,233,0.14), transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700"><span className="w-2 h-2 rounded-full bg-sky-500" /> GL Tech Services</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight leading-tight">Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500">System Integration</span> Solutions</h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">At GL Tech Solutions, we bring hardware, software, networks, and security together into a unified environment tailored to your business needs.</p>
            <div className="flex flex-wrap gap-4 pt-2"><button onClick={() => document.getElementById('service-catalog')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 hover:bg-sky-700 transition-colors">Explore Services <ArrowRight className="w-4 h-4" /></button><button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold text-sm hover:border-sky-300 hover:text-sky-700 transition-colors">Contact Us</button></div>
          </div>
        </div>
      </section>

      <section id="service-catalog" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3"><span className="text-xs uppercase font-extrabold tracking-widest text-sky-600">Our Services</span><h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">Technology that works as one system</h2><p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">Our experts work closely with you to understand your requirements and optimize your IT infrastructure for efficiency, security, and dependable performance.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">{services.map((service) => <button key={service.id} onClick={() => setActiveService(service.id)} className={`w-full text-left p-5 rounded-2xl border transition-all ${activeService === service.id ? 'border-sky-300 bg-sky-50 shadow-md' : 'border-slate-200 bg-white hover:border-sky-200 hover:bg-slate-50'}`}><span className="flex items-center justify-between gap-4"><span className="font-bold font-display text-slate-900">{service.title}</span><ArrowRight className={`w-4 h-4 shrink-0 ${activeService === service.id ? 'text-sky-600' : 'text-slate-400'}`} /></span><span className="block mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</span></button>)}</div>
            {services.filter((service) => service.id === activeService).map((service) => <motion.div key={service.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xl"><div className="h-56 sm:h-72 relative"><img src={service.image} alt={service.title} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" /><h3 className="absolute bottom-6 left-6 text-2xl sm:text-3xl font-bold font-display text-white">{service.title}</h3></div><div className="p-6 sm:p-8 bg-white"><p className="text-slate-600 leading-relaxed mb-6">{service.description}</p><ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">{service.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />{feature}</li>)}</ul><button onClick={() => onNavigate('service-detail', service.id)} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900">View Full Service Details <ArrowRight className="w-4 h-4" /></button></div></motion.div>)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mb-12"><span className="text-xs uppercase font-extrabold tracking-widest text-sky-600">Our Service Process</span><h2 className="mt-3 text-3xl sm:text-4xl font-extrabold font-display tracking-tight">A clear path from requirement to reliable operation</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step) => <div key={step.number} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"><div className="flex items-center justify-between text-sky-600"><span className="text-3xl font-black font-display">{step.number}</span>{step.icon}</div><h3 className="mt-6 text-xl font-bold font-display">{step.title}</h3><p className="mt-1 text-sm font-semibold text-sky-700">{step.subtitle}</p><p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.description}</p></div>)}</div></div>
      </section>

      <section className="py-20 bg-white"><div className="max-w-4xl mx-auto px-4 text-center space-y-5"><h2 className="text-3xl sm:text-4xl font-extrabold font-display">Ready to strengthen your IT environment?</h2><p className="text-slate-600 text-lg font-light">Talk to our team about a secure, scalable system integration plan designed around your business.</p><button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-600 text-white font-bold hover:bg-sky-700 transition-colors">Start a Conversation <ArrowRight className="w-4 h-4" /></button></div></section>
    </div>
  );
}
