import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Cloud, Network, Shield, Monitor, HardDrive, Compass, ChevronRight, Check } from 'lucide-react';
import FloatingLines from '../components/FloatingLines';

// Local Assets
import serverRacks from '../assets/server_racks.png';
import fiberNetwork from '../assets/fiber_network.png';
import teamCollaboration from '../assets/team_collaboration.png';
import securitySolutionsImg from '../assets/solutions/security-solutions.png';
import wirelessSolutionsImg from '../assets/solutions/wireless-solutions.png';
import serverStorageImg from '../assets/solutions/server-storage-solutions.png';

export default function ITInfrastructure() {
  const [activeTab, setActiveTab] = useState('managed-infra');

  const services = [
    {
      id: 'managed-infra',
      title: "Managed Infrastructure Services",
      icon: <Server className="w-5 h-5" />,
      tagline: "Active Surveillance & Proactive Infrastructure Monitoring",
      description: "We assume operational responsibility for your server arrays, storage systems, and active directory servers. Through custom dashboard metrics and automated event thresholds, we isolate potential failures before they impact business continuity.",
      bullets: [
        "24/7/365 active monitoring of server CPU, RAM, and IOPS parameters",
        "Automated backup checks and verification scripts",
        "Operating system patch management and security updates",
        "Hardware status tracking and warranty management log integrations"
      ],
      hardware: "Cisco UCS Servers, Dell PowerEdge Clusters, HPE ProLiant Systems",
      image: serverRacks
    },
    {
      id: 'managed-cloud',
      title: "Managed Cloud Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      tagline: "Hybrid Cloud Scaling & Infrastructure-as-Code (IaC)",
      description: "Deploy and optimize cloud environments with strict container configurations and database partitions. We assist in migrating legacy servers to hybrid architectures that bridge on-premise blade systems with secure public clouds.",
      bullets: [
        "AWS, Microsoft Azure, and Google Cloud platform administration",
        "Virtual machine sizing, provisioning, and automatic scale configurations",
        "Database orchestration, backup policies, and geographic redundancy",
        "Containerization setup via Kubernetes and secure Docker containers"
      ],
      hardware: "AWS DirectConnect, Microsoft Azure ExpressRoute, VMware vRealize",
      image: serverStorageImg
    },
    {
      id: 'enterprise-network',
      title: "Enterprise Network Management",
      icon: <Network className="w-5 h-5" />,
      tagline: "Structured Cabling & High-Availability LAN/WAN",
      description: "We architect and deploy secure campus-wide communications. From installing high-speed optical fiber trunks in corporate offices to configuring software-defined switches, we construct redundant routing loops.",
      bullets: [
        "Structured copper (Cat6A/Cat8) and fiber optic cabling layout design",
        "Enterprise Core, Distribution, and Access switch installations",
        "Dynamic routing setups (OSPF, BGP) for absolute connection redundancy",
        "Centralized wireless controller configuration and heatmapping site surveys"
      ],
      hardware: "Cisco Catalyst, Aruba CX, Ruckus Wireless Controllers",
      image: fiberNetwork
    },
    {
      id: 'infra-security',
      title: "Infrastructure Security",
      icon: <Shield className="w-5 h-5" />,
      tagline: "Zero-Trust Firewalls & Unified Threat Management",
      description: "Secure your operational perimeter from external vectors. We integrate multi-layered threat prevention systems that audit traffic patterns, prevent unauthorized access, and isolate anomalies.",
      bullets: [
        "Next-Generation Firewall (NGFW) deployment and security policy rules",
        "Intrusion Prevention Systems (IPS) and malware file inspection",
        "Secure remote user access tunnels (SSL VPN, IPsec VPN) with MFA",
        "Vulnerability scanning, endpoint detection, and secure VLAN segmentations"
      ],
      hardware: "Fortinet FortiGate UTM, Sophos XGS Firewalls, Palo Alto Networks",
      image: securitySolutionsImg
    },
    {
      id: 'digital-workspace',
      title: "Digital Workspace Solutions",
      icon: <Monitor className="w-5 h-5" />,
      tagline: "Standardized User Provisioning & Corporate Support Systems",
      description: "Equip your personnel with standardized computing environments. We manage software distribution, Active Directory permissions, corporate email clients, and remote helpdesk operations.",
      bullets: [
        "Automated software installation pipelines and security setups",
        "Active Directory, LDAP, and single-sign-on (SSO) configurations",
        "Unified Communications integrations (Microsoft 365, Google Workspace)",
        "Triage support integrated directly with our OneDesk ticketing portal"
      ],
      hardware: "Windows Server AD, Microsoft Intune, Google Workspace Admin",
      image: teamCollaboration
    },
    {
      id: 'system-integration',
      title: "Comprehensive System Integration",
      icon: <HardDrive className="w-5 h-5" />,
      tagline: "High-Performance SAN/NAS Storage & Disaster Recovery",
      description: "Consolidate your digital records with secure network storage. We specialize in configuring multi-terabyte storage Area Networks (SAN) and Network Attached Storage (NAS) pools with active replication.",
      bullets: [
        "High-density SAN and NAS system configurations with RAID arrays",
        "Virtualization layer deployment (VMware ESXi, Microsoft Hyper-V)",
        "Disaster recovery planning, bare-metal restore points, and vaulting",
        "Legacy server data migration with zero record corruption"
      ],
      hardware: "Synology Enterprise NAS, Dell PowerStore SAN, Veeam Availability Suite",
      image: serverStorageImg
    },
    {
      id: 'infra-consulting',
      title: "Consulting & Site Assessment",
      icon: <Compass className="w-5 h-5" />,
      tagline: "Compliance Audits, Sizing Plans, & Migration Blueprints",
      description: "Before initiating modifications, our senior engineers audit your active topologies. We provide comprehensive blueprints assessing server utilization, network bottlenecks, and compliance vulnerabilities.",
      bullets: [
        "Network penetration tests and firewall configuration audits",
        "Server hardware energy efficiency and capacity utilization checks",
        "Structured cabling testing with certified fluke meter reports",
        "Detailed IT budget estimations and equipment lifecycle planning"
      ],
      hardware: "Fluke DSX-8000 CableAnalyzer, Wireshark Deep Packet analysis",
      image: teamCollaboration
    }
  ];

  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <div className="w-full bg-[#f8fafc] font-sans">

      {/* 1. Page Header — LIGHT ENTERPRISE WITH SKY BLUE ACCENTS */}
      <section className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-[#0F172A] py-20 relative overflow-hidden border-b border-slate-200/70">
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)',
          backgroundSize: '56px 56px'
        }} />

        {/* Ambient Sky / Cyan Glows */}
        <div
          className="absolute top-0 right-0 w-[550px] h-[450px] pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(14,165,233,0.12) 0%, rgba(56,189,248,0.06) 40%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at bottom left, rgba(6,182,212,0.1) 0%, rgba(14,165,233,0.05) 45%, transparent 70%)' }}
        />

        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <FloatingLines
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[12, 18, 24]}
            lineDistance={[7, 5, 3]}
            bendRadius={6.0}
            bendStrength={-0.6}
            interactive={true}
            parallax={true}
            linesGradient={['#0EA5E9', '#38BDF8', '#0284C7', '#06B6D4']}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-700 uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            Enterprise Services
          </span>
          <h1 className="text-4.5xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0F172A] leading-tight">
            <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 bg-clip-text text-transparent">IT Infrastructure</span> Led Services
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            From physical optical trunk terminations to virtual machine resource configurations, we deliver highly compliant systems engineering.
          </p>
        </div>
      </section>

      {/* 2. Interactive Navigation Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Navigation Column */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-1">
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block px-4 mb-3">Service Spectrum</span>
            {services.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full relative flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer overflow-hidden ${isActive ? 'text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  {/* Sliding active pill background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabSub"
                      className="absolute inset-0 bg-blue-50/65 border-l-4 border-blue-600 z-0 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-blue-600/10 text-blue-600' : 'text-slate-400'}`}>
                      {item.icon}
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform relative z-10 ${isActive ? 'translate-x-1 text-blue-600' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Right Content Pane */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-100 p-8 sm:p-10 shadow-md min-h-[520px] flex flex-col justify-between overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-grow"
              >
                {/* Left Text Detail */}
                <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600 block">{activeService.tagline}</span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-dark tracking-tight leading-tight">{activeService.title}</h2>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                      {activeService.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Features & Delivery Scope</h4>
                      <ul className="space-y-3">
                        {activeService.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2.5 text-slate-600 text-sm leading-relaxed">
                            <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 shadow-sm">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hardware & Systems Callout */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Standardized Ecosystem Technologies</span>
                      <span className="text-sm font-semibold text-slate-700">{activeService.hardware}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase shrink-0">
                      SLA Enabled Service
                    </div>
                  </div>
                </div>

                {/* Right Visual Image */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group h-full min-h-[250px] md:min-h-[350px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent z-10 pointer-events-none" />
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20 text-white space-y-1">
                      <span className="inline-block text-[9px] bg-blue-500/35 border border-blue-400/40 text-blue-100 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mb-1">
                        GLOBX Deployment
                      </span>
                      <h4 className="text-sm font-bold text-white tracking-wide">{activeService.title}</h4>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* 3. SLA and Operations Section — OCEANIC SKY BLUE GRADIENT */}
      <section className="py-20 bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0EA5E9] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-sky-200">Operations Guidelines</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-white">
                Standard SLA Commitments
              </h3>
              <p className="text-sky-100 font-light text-sm sm:text-base leading-relaxed">
                GLTech Solutions operates on highly structured maintenance contracts designed to match critical enterprise workloads. We outline exact response hours based on incident classification.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="border border-white/25 bg-white/10 backdrop-blur-sm p-4 rounded-2xl cursor-default"
                >
                  <div className="text-xl font-bold text-white">4 Hours</div>
                  <div className="text-xs text-sky-100 mt-1">Severity 1 (Critical outage) onsite resolution response</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="border border-white/25 bg-white/10 backdrop-blur-sm p-4 rounded-2xl cursor-default"
                >
                  <div className="text-xl font-bold text-white">Next Business Day</div>
                  <div className="text-xs text-sky-100 mt-1">Severity 2 hardware replacement logistics</div>
                </motion.div>
              </div>
            </div>

            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.4)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white/15 backdrop-blur-md border border-white/25 p-8 rounded-3xl space-y-6 cursor-default shadow-xl"
            >
              <h4 className="text-base font-bold font-display text-white border-b border-white/20 pb-3">Standard Maintenance Tasks</h4>
              <ul className="space-y-4 text-sm text-sky-100">
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <span className="font-semibold text-white block">Preventative Auditing:</span>
                    Quarterly onsite evaluations checking cabling decay, power backups, and switch fan dust screens.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <span className="font-semibold text-white block">Dynamic Log Monitoring:</span>
                    Aggregation of authentication logs to monitor security incidents and unauthorized root attempts.
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
