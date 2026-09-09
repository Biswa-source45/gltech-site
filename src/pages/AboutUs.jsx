import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  Compass,
  CheckCircle,
  MapPin,
  Calendar,
  Briefcase,
  Zap,
  Shield
} from 'lucide-react'; 
import teamCollaboration from '../assets/solutions/About Us photo.jpg';
import serverRacks from '../assets/server_racks.png';
import fiberNetwork from '../assets/fiber_network.png';
import FloatingLines from '../components/FloatingLines';
import teamCollaborationTeam from '../assets/team_collaboration.png';

export default function AboutUs() {

  const values = [
    {
      icon: <Shield className="w-6 h-6 text-brand-primary" />,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards, honesty, and transparency in all our dealings."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-600" />,
      title: "Innovation",
      description: "We continuously seek new ideas and solutions to help our clients stay ahead in a rapidly evolving technological landscape."
    },
    {
      icon: <Target className="w-6 h-6 text-sky-600" />,
      title: "Collaboration",
      description: "We work closely with our clients as true partners, understanding their unique challenges and developing solutions together."
    }
  ];

  // const certs = [
  //   "Cisco Certified Network Professionals",
  //   "Fortinet Network Security Experts",
  //   "Microsoft Certified Systems Engineers",
  //   "VMware Certified Professionals",
  //   "RedHat Certified Architects",
  //   "Veeam Certified Engineers",
  //   "Ruckus Certified Wireless Experts"
  // ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans overflow-x-hidden">

      {/* 1. HERO SECTION — CLEAN LIGHT ENTERPRISE WITH SKY BLUE ACCENTS */}
      <section className="relative bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-[#0F172A] pt-16 pb-24 sm:pt-20 sm:pb-32 overflow-hidden border-b border-slate-200/70">
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)',
          backgroundSize: '56px 56px'
        }} />

        {/* Ambient Soft Sky / Cyan Glows (No purple/pink) */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(14,165,233,0.12) 0%, rgba(56,189,248,0.06) 40%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[450px] pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at bottom left, rgba(6,182,212,0.1) 0%, rgba(14,165,233,0.05) 45%, transparent 70%)' }}
        />

        {/* Subtle Architectural Flow Lines in pure Sky/Cyan */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-700 uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Trusted Enterprise Since 2005</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.1] text-[#0F172A]">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500">GL Tech Solutions</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                Your trusted partner for IT system integration since 2005.
              </p>

            </motion.div>

            {/* Hero Image / Visual Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-300/40 bg-white group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40 z-10"></div>
                <img
                  src={teamCollaboration}
                  alt="GLTech Solutions Company Building"
                  className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. HISTORY & HERITAGE TIMELINE */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

            {/* Timeline Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-primary">Our Evolution</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-dark tracking-tight leading-tight">
                Our Journey from Local Integration to <span className="text-brand-primary">Enterprise Orchestration</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Founded in 2005, GL Tech Solutions began as a small IT consulting firm with a big vision: to help businesses leverage technology to achieve their goals. Over the years, we've grown into a comprehensive system integration company serving clients across multiple industries.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Our journey has been marked by a commitment to technical excellence and customer satisfaction. We've evolved with the changing technology landscape, consistently staying ahead of industry trends to provide our clients with the most effective solutions.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Today, GL Tech Solutions is recognized as a leader in system integration, offering comprehensive services that include desktop integration, server and storage solutions, networking equipment, security systems, and CCTV implementation.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative"
              viewport={{ once: true, amount: 0.15 }}
             
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-300/40 bg-white group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40 z-10"></div>
                <img src={teamCollaborationTeam} alt="GL Tech Solutions Corporate Team" className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-6 pt-20">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">GL Tech Solutions</span>
                  <p className="mt-1 text-sm text-white">Building practical technology partnerships since 2005.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] border-t border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-600">The GL Tech Way</span>
            <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">Core Values Driving Our Projects</h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              Every system we provision, cable we terminate, and application we code is bound by our fundamental operating principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6, borderColor: 'rgba(147, 197, 253, 0.8)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.1 }}
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MISSION & VISION SPLIT (WITH CORPORATE IMAGE) */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                <img
                  src={serverRacks}
                  alt="Enterprise Datacenter Server Racks"
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Enterprise Quality</span>
                  <h4 className="text-base font-bold">Standardized Server Infrastructures</h4>
                  <p className="text-xs text-slate-300 font-light">Engineered to support 99.99% critical workload availability.</p>
                </div>
              </div>
            </motion.div>

            {/* Mission & Vision Right */}
            <div className="lg:col-span-7 space-y-8">

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-brand-primary text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-brand-dark tracking-tight">Empowering Businesses Through Better Technology</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  To deliver high-quality, innovative IT system integration solutions that empower businesses to succeed in an increasingly digital world. We strive to be a trusted partner who understands our clients' unique needs and helps them achieve their technological objectives efficiently and effectively.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-brand-dark tracking-tight">Setting the Standard for System Integration</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  To be the leading system integration company that sets the standard for excellence in the industry. We aim to continuously innovate and adapt to evolving technologies, helping our clients stay competitive and secure in a rapidly changing digital landscape.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE CAPABILITIES — OCEANIC SKY BLUE ENTERPRISE GRADIENT */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0EA5E9] text-white overflow-hidden rounded-t-3xl">
        {/* Background Image with Overlay */}
        <div className="absolute rounded-t-3xl inset-0 z-0">
          <img
            src={fiberNetwork}
            alt="Optical Fiber Network Backbone"
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0369A1]/80 via-[#0284C7]/80 to-[#0EA5E9]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Text and Capabilities */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-sky-200">GL Tech Services</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight py-2">
                Comprehensive System Integration Solutions
              </h2>

              <p className="text-sky-100 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
                 At GL Tech Solutions, we bring together hardware, software, networking,
                 security, and surveillance technologies into unified solutions designed
                 around your business needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Desktop Workstation Deployment & Integration",
                  "Server, Storage & Virtualization Solutions",
                  "LAN/WAN & Wireless Network Implementation",
                  "Firewall, Endpoint Security & Network Protection",
                  "CCTV Surveillance & Access Control Integration",
                  "Backup, Disaster Recovery & Infrastructure Support"
                ].map((cap, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-200 shrink-0" />
                    <span className="text-sm text-white font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact / Stats Card */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="lg:col-span-4 bg-white/15 backdrop-blur-md border border-white/25 p-8 rounded-3xl space-y-6 cursor-default shadow-xl"
            >
              <h3 className="text-xl font-bold font-display text-white border-b border-white/20 pb-4">GL Tech Solution Office Details</h3>

              <div className="space-y-4 text-sm font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] text-sky-200 font-bold uppercase tracking-wider block">Headquarters</span>
                    <span className="text-white text-xs sm:text-sm leading-normal block">
                      Plot No- HIG/141, Kanan Vihar, Phase-1, Chadrashekharpur, Bhubaneswar - 751024
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-sky-200 font-bold uppercase tracking-wider block">Incorporation</span>
                    <span className="text-white">Founded in 2005</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-sky-200 font-bold uppercase tracking-wider block">Key Client Sectors</span>
                    <span className="text-white">PSUs, Higher Education, Research Institutes, Corporate Offices</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
