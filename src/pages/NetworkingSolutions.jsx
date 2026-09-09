import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Settings, RefreshCw, Eye, ShieldAlert, Check, ChevronRight } from 'lucide-react';
import FloatingLines from '../components/FloatingLines';
import fiberNetwork from '../assets/fiber_network.png';
import wirelessSolutionsImg from '../assets/solutions/wireless-solutions.png';
import onedeskDashboard from '../assets/onedesk_dashboard.png';
import securitySolutionsImg from '../assets/solutions/security-solutions.png';
import onetrackDashboard from '../assets/onetrack_dashboard.png';

export default function NetworkingSolutions() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Audit & RF Heatmap Survey",
      description: "Our certified engineers execute physical and radio frequency audits of your campus or workspace. We identify cable path bottlenecks, EMI interferences, and map wireless zones using advanced heatmapping tools.",
      image: wirelessSolutionsImg
    },
    {
      title: "2. Topology Design & Simulation",
      description: "We compile logical and physical topology diagrams in Cisco Packet Tracer or Microsoft Visio. We model IP address distribution schemes, subnetting architectures, and core redundancy loops before hardware purchasing.",
      image: onedeskDashboard
    },
    {
      title: "3. Structured Cabling & Optical Splicing",
      description: "Physical media installation including Cat6A/Cat8 copper trunks and single-mode/multi-mode optical fibers. We perform fusion splicing, install patch panels, and certify each connection with fluke network analyzers.",
      image: fiberNetwork
    },
    {
      title: "4. Switching & Security Provisioning",
      description: "We configure Core and Access switches. We implement VLAN allocations, link aggregation groups (LAG), spanning-tree protocols (STP) to prevent broadcast storms, and establish UTM firewall rules.",
      image: securitySolutionsImg
    },
    {
      title: "5. Commissioning & Active Telemetry",
      description: "We transition the network to production. The entire infrastructure is connected to our active SNMP-based telemetry dashboards, providing live indicators of port traffic, latency spikes, and packet losses.",
      image: onetrackDashboard
    }
  ];

  const pillars = [
    {
      icon: <Network className="w-6 h-6 text-blue-600" />,
      title: "Network Design & Architecture",
      desc: "Creating logical structures, redundancy paths, and address schemes to support high user densities and enterprise file systems."
    },
    {
      icon: <Settings className="w-6 h-6 text-cyan-600" />,
      title: "Infrastructure Deployment",
      desc: "Lay optical trunks, install physical switches, configure edge routers, and set up high-power indoor/outdoor wireless Access Points."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
      title: "Software-Defined Networking (SDN)",
      desc: "Deploy centralized controllers like Cisco DNA Center or Ubiquiti UniFi to provision and modify policies across multiple nodes instantly."
    },
    {
      icon: <Eye className="w-6 h-6 text-emerald-600" />,
      title: "Network Monitoring & Management",
      desc: "Track port utilization, detect routing anomalies, configure flow-based alerts, and execute firmware updates during scheduled maintenance."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
      title: "Secure Tunnels & VPN Corridors",
      desc: "Deploy IPsec and SSL VPN tunnels with multi-factor authentication, allowing remote staff to securely access local file stores."
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] font-sans">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-[#0F172A] py-20 relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-700 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            Networking Excellence
          </span>
          <h1 className="text-4.5xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0F172A] leading-tight">
            Enterprise Networking Solutions
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            Deploying high-speed, redundant network loops, structured cabling systems, and secure software-defined wireless systems.
          </p>
        </div>
      </section>

      {/* 2. Interactive Deployment Lifecycle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">The GLOBX Implementation Loop</span>
            <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">Structured Deployment Lifecycle</h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              We follow a strict engineering pathway to ensure that every network we commission satisfies strict SLA metrics and structural checks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Step Selection Left */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-1">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block px-4 mb-3">Implementation Steps</span>
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full relative flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer overflow-hidden ${
                      isActive ? 'text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {/* Active sliding background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeStepPill"
                        className="absolute inset-0 bg-blue-50/65 border-l-4 border-blue-600 z-0 pointer-events-none"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{step.title.split(". ")[1]}</span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold relative z-10 ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {idx + 1}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Description Right */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-inner min-h-[400px] flex flex-col justify-between overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full flex-grow items-center"
                >
                  {/* Text details */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs uppercase font-extrabold text-blue-600 tracking-wider block">Phase Detail</span>
                      <h3 className="text-2xl font-bold font-display text-brand-dark leading-tight">{steps[activeStep].title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                      {steps[activeStep].description}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-200/60 text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Audited under certified engineering guidelines</span>
                    </div>
                  </div>

                  {/* Image visual */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="relative rounded-2xl overflow-hidden h-[240px] md:h-[280px] border border-slate-200/50 shadow-md">
                      <img
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Core Capabilities Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">Specialized Capabilities</span>
            <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">Our Core Networking Pillars</h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              We design and configure every aspect of your enterprise communications to guarantee continuous operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4 cursor-default"
                whileHover={{ y: -6, borderColor: 'rgba(147, 197, 253, 0.8)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display group-hover:text-blue-600 transition-colors duration-300">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
