import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Award, 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Zap,
  Shield
} from 'lucide-react';
import teamCollaboration from '../assets/team_collaboration.png';
import serverRacks from '../assets/server_racks.png';
import fiberNetwork from '../assets/fiber_network.png';
import FloatingLines from '../components/FloatingLines';

export default function AboutUs() {

  const milestones = [
    {
      year: "2011",
      title: "The Genesis (GL Solutions)",
      desc: "Founded as a regional IT system integration shop, serving local government departments and corporates in Odisha with hardware, peripherals, and initial LAN setups."
    },
    {
      year: "2016",
      title: "Campus Networks Expansion",
      desc: "Expanded into high-performance campus networking, implementing large-scale structured cabling, smart Wi-Fi systems, and campus fiber loops."
    },
    {
      year: "2021",
      title: "Incorporation & Restructuring",
      desc: "Restructured and incorporated as GLOBX System & Network Pvt. Ltd., shifting focus to enterprise-tier datacenter orchestration and fiber networks."
    },
    {
      year: "2024",
      title: "Next-Gen Software & AI",
      desc: "Launched our proprietary OneDesk Ticket Management system and started integrating AI and telemetry-based monitoring into our core infrastructure services."
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6 text-brand-primary" />,
      title: "Client-First Architecture",
      description: "We analyze each customer's workflow, traffic models, and physical site parameters to design custom, optimized network solutions rather than generic setups."
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Uncompromising Integrity",
      description: "We deploy enterprise-grade hardware, authenticated software, and structured copper/optical cabling systems complying with rigorous ISO standards."
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-600" />,
      title: "SLA Response Execution",
      description: "Our dedicated helpdesk operates on tight, contract-bound ticket resolution schedules, backed by regional standby hardware inventory for critical failovers."
    }
  ];

  const certs = [
    "Cisco Certified Network Professionals",
    "Fortinet Network Security Experts",
    "Microsoft Certified Systems Engineers",
    "VMware Certified Professionals",
    "RedHat Certified Architects",
    "Veeam Certified Engineers",
    "Ruckus Certified Wireless Experts"
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#091E42] via-[#0d2a5c] to-slate-900 text-white pt-16 pb-24 sm:pt-20 sm:pb-32 overflow-hidden">
        {/* Animated Network Background (ReactBits Floating Lines Style) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
          <FloatingLines 
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[12, 18, 24]}
            lineDistance={[7, 5, 3]}
            bendRadius={6.0}
            bendStrength={-0.6}
            interactive={true}
            parallax={true}
            linesGradient={['#4073b3', '#0f1c57', '#f54575']}
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-300 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pioneering Enterprise IT Since 2011</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.1] text-white">
                Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Enterprise Networks</span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                From a regional hardware service provider to an incorporated systems engineering powerhouse, GLOBX delivers robust IT infrastructures, custom software solutions, and automated service management to public sector and corporate leaders.
              </p>


            </motion.div>

            {/* Hero Image / Visual Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src={teamCollaboration} 
                  alt="GLOBX Corporate Collaboration" 
                  className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Floating Telemetry Box */}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. HISTORY & HERITAGE TIMELINE */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Timeline Text */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-primary">Our Evolution</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-dark tracking-tight leading-tight">
                Our Journey from Local Integration to <span className="text-brand-primary">Enterprise Orchestration</span>
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                GLOBX System & Network Pvt. Ltd. represents the culmination of over a decade of hands-on engineering, constant training, and customer dedication.
              </p>
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <Award className="w-8 h-8 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm sm:text-base">Certified Engineers & Partners</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Our technical team holds certifications across Cisco, Fortinet, Microsoft, VMware, RedHat, Veeam, and Ruckus, ensuring that every deployment is audit-ready and secure.
                  </p>
                </div>
              </div>

              {/* Inline Tech Badges */}
              <div className="pt-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">OEM Certifications Include:</span>
                <div className="flex flex-wrap gap-2">
                  {certs.slice(0, 4).map((c, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium border border-slate-200">{c.split(" ")[0]} Certified</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Visual Elements */}
            <div className="lg:col-span-7 space-y-12 relative pl-6 border-l-2 border-slate-100">
              {milestones.map((milestone, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx} 
                  className="relative group"
                >
                  <motion.div 
                    whileHover={{ y: -4, x: 2, backgroundColor: 'rgb(248, 250, 252)', borderColor: 'rgba(191, 219, 254, 1)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative bg-slate-50/50 border border-slate-100 rounded-2xl p-6 cursor-default"
                  >
                    {/* Bullet */}
                    <div className="absolute -left-[33px] top-[30px] w-4 h-4 rounded-full bg-white border-4 border-brand-primary group-hover:scale-125 transition-transform duration-300"></div>

                    <span className="text-xs font-bold text-brand-primary bg-blue-50 px-2.5 py-1 rounded-md">{milestone.year}</span>
                    <h3 className="text-lg font-bold text-brand-dark font-display mt-3 group-hover:text-blue-600 transition-colors duration-300">{milestone.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light mt-2">{milestone.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] border-t border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-brand-primary">The GLOBX Way</span>
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
                <h3 className="text-2xl font-bold font-display text-brand-dark tracking-tight">Standardizing Operations Through Secure Connectivity</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  Our mission is to enable government corporations and commercial businesses to establish secure, redundant, and high-performance communication systems. By deploying robust hardware configurations and custom workflow software, we bridge the gap between legacy operations and state-of-the-art automation.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-brand-dark tracking-tight">The Leading Systems Integrator in Eastern India</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  We envision becoming the premier and most trusted enterprise systems engineering and software architecture partner in Eastern India. We plan to achieve this by constantly training our team on newer security protocols, cloud topologies, and AI tools while upholding our strict SLA response times and engineering integrity.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE CAPABILITIES (WITH BG CORPORATE IMAGE) */}
      <section className="relative py-24 sm:py-32 bg-slate-900 text-white overflow-hidden rounded-t-3xl">
        {/* Background Image with Dark Overlay */}
        <div className="absolute rounded-t-3xl inset-0 z-0">
          <img 
            src={fiberNetwork} 
            alt="Optical Fiber Network Backbone" 
            className="w-full h-full object-cover object-center opacity-25" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text and Capabilities */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400">Software & System Systems Integration</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight py-2">
                Expanding Capabilities in Software Systems & AI Integration
              </h2>
              
              <p className="text-slate-300 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
                In addition to hardware, routing, and optical systems, we design customized enterprise dashboards, automated database synchronization pipelines, and machine learning solutions to resolve real-world operations issues.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Real-time Telemetry Dashboard Integration",
                  "Automated SLA Alert & Escalation Engines",
                  "Secure Multi-tenant Database Synchronization",
                  "AI-Assisted Threat Prevention & Log Auditing",
                  "Unified Ticket Workflows & Team Despatched Analytics",
                  "End-to-End API Integration & Legacy Modernization"
                ].map((cap, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-sm text-slate-200 font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact / Stats Card */}
            <motion.div 
              whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-6 cursor-default"
            >
              <h3 className="text-xl font-bold font-display text-white border-b border-white/10 pb-4">GLOBX Office Details</h3>
              
              <div className="space-y-4 text-sm font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Headquarters</span>
                    <span className="text-slate-200 text-xs sm:text-sm leading-normal block">
                      GLOBX System & Network Pvt. Ltd., Room No-208 & 209, 2nd Floor, Odyssa Business Centre, Rasulgarh, Bhubaneswar-751010
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Incorporation</span>
                    <span className="text-slate-200">August 2021 (Reg: Pvt. Ltd.)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Key Client Sectors</span>
                    <span className="text-slate-200">PSUs, Higher Education, Research Institutes, Corporate Offices</span>
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
