import { motion } from 'framer-motion';
import { Server, Shield, Cpu, Database, Network, Building, Landmark, Briefcase, CheckCircle, ArrowRight, Globe, Smartphone, Sliders, Zap, Share2, RefreshCw } from 'lucide-react';
import FloatingLines from '../components/FloatingLines';
import highCourtOdisha from '../assets/Esteemsed_clients/highcourt-Odisha.png';

// Local Assets for Solutions and Services
import fiberNetwork from '../assets/fiber_network.png';
import onetrackDashboard from '../assets/onetrack_dashboard.png';
import serverRacks from '../assets/server_racks.png';
import teamCollaboration from '../assets/team_collaboration.png';
import mobilitySolutionsImg from '../assets/solutions/Enterprise Mobility Management.jpg';
import securitySolutionsImg from '../assets/solutions/security-solutions.png';
import wirelessSolutionsImg from '../assets/solutions/wireless-solutions.png';
import surveillanceSolutionsImg from '../assets/solutions/surveillance-solutions.png';
import bmsSolutionsImg from '../assets/solutions/bms-solutions.png';
import serverStorageImg from '../assets/solutions/server-storage-solutions.png';

const detailsData = {
  // SERVICES
  'it-applications': {
    category: "Services",
    title: "IT Applications & Software Development",
    tagline: "Custom Software Architectures & Modernization Pipelines",
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    desc: "We design, build, and support enterprise-grade software applications tailored to resolve specific business operation delays. From single-page React web apps to automated database sync scripts and cloud modernizations, we manage the complete lifecycle.",
    features: [
      "Full-stack web application development (React, Node.js, Express, Postgres)",
      "Database schema optimization, clustering, and security hardening",
      "API integrations connecting proprietary applications with ERP systems",
      "Modernization of legacy systems into secure cloud-ready architectures",
      "AI/ML pipeline integrations for automated text classification and processing"
    ],
    techStack: "React, Node.js, Next.js, Python, PostgreSQL, REST APIs",
    image: teamCollaboration
  },
  'business-process': {
    category: "Services",
    title: "Business Process Management & Automation",
    tagline: "Operational Mapping & Robotic Workflow Engines",
    icon: <Server className="w-8 h-8 text-cyan-600" />,
    desc: "Streamline daily business tasks, remove paper bottlenecks, and improve operational transparency. We analyze workflows to engineer automated software routing paths that eliminate manual delays.",
    features: [
      "Corporate workflow analysis and logical operations mapping",
      "Integration of automated email, SMS, and ticket notification rules",
      "Electronic document filing structures and approval loops",
      "Employee timesheet tracking, vacation allocations, and task queues",
      "Robotic process automation (RPA) for repetitive database entries"
    ],
    techStack: "Workplace Engines, RPA Tools, Custom Scripts, WebHooks",
    image: teamCollaboration
  },
  'digital-enterprise': {
    category: "Services",
    title: "Digital Enterprise ERP Applications",
    tagline: "Unified ERP Customization & CRM Alignments",
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    desc: "Consolidate inventory pools, customer records, accounting books, and support tasks under a single enterprise database. We integrate and customize robust ERP systems designed to scale.",
    features: [
      "ERP software installation, setup configuration, and support",
      "Inventory tracking pipelines with barcoding and multi-warehouse sync",
      "Billing systems, automated purchase orders, and tax ledger audits",
      "CRM portal deployment mapping customer support ticket history",
      "User security permissions profiles (Role-Based Access Control)"
    ],
    techStack: "Odoo, SAP, Oracle NetSuite, Custom ERP Modules",
    image: onetrackDashboard
  },

  // GL TECH SERVICES
  'desktop-integration': {
    category: "GL Tech Services",
    title: "Desktop Integration",
    tagline: "Connected Workstations for Productive Teams",
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    desc: "Our desktop integration services ensure that workstations are seamlessly connected to your overall IT infrastructure, maximizing productivity and minimizing downtime.",
    features: [
      "Workstation deployment and configuration",
      "Operating system installation and updates",
      "Software installation and management",
      "User account setup and management",
      "Desktop security implementation"
    ],
    techStack: "Windows, Microsoft 365, Endpoint Management, Active Directory",
    image: teamCollaboration
  },
  'networking-solutions': {
    category: "GL Tech Services",
    title: "Networking Solutions",
    tagline: "Reliable Connectivity Across Your Organization",
    icon: <Network className="w-8 h-8 text-cyan-600" />,
    desc: "Our networking services provide reliable, high-performance connectivity throughout your organization, enabling efficient communication and data transfer.",
    features: [
      "LAN/WAN design and implementation",
      "Network hardware installation and configuration",
      "Wireless network implementation",
      "VPN setup and configuration",
      "Network monitoring and maintenance"
    ],
    techStack: "Cisco, Ruckus, Fortinet, Wi-Fi 6, SD-WAN, Fiber Networks",
    image: fiberNetwork
  },
  'security-equipment': {
    category: "GL Tech Services",
    title: "Security Equipment",
    tagline: "Layered Protection for Your Digital Environment",
    icon: <Shield className="w-8 h-8 text-rose-600" />,
    desc: "Our security integration services protect your valuable data and systems from threats and unauthorized access, ensuring business continuity.",
    features: [
      "Firewall installation and configuration",
      "Intrusion detection and prevention systems",
      "Endpoint security solutions",
      "Security auditing and assessment",
      "Data encryption solutions"
    ],
    techStack: "Fortinet, Sophos, Endpoint Protection, VPN, Encryption",
    image: securitySolutionsImg
  },
  'cctv-solutions': {
    category: "GL Tech Services",
    title: "CCTV Solutions",
    tagline: "Integrated Surveillance for Safer Premises",
    icon: <Shield className="w-8 h-8 text-slate-700" />,
    desc: "Our CCTV integration services provide comprehensive surveillance solutions to help secure your premises and assets, with clear visibility wherever you need it.",
    features: [
      "IP camera installation and configuration",
      "Video management software setup",
      "Remote monitoring solutions",
      "Video storage and retrieval systems",
      "Access control integration"
    ],
    techStack: "IP Cameras, NVR, VMS, Remote Monitoring, Access Control",
    image: surveillanceSolutionsImg
  },

  // SOLUTIONS
  'security-solutions': {
    category: "Solutions",
    title: "Enterprise Security Solutions",
    tagline: "Next-Gen Firewalls & Network Threat Isolation",
    icon: <Shield className="w-8 h-8 text-rose-600" />,
    desc: "Secure your corporate files and active network ports from hacking attempts, ransomware spikes, and data breaches. We deploy secure next-generation firewalls that audit traffic patterns continuously.",
    features: [
      "Next-generation UTM firewall configuration and policy rules",
      "Intrusion detection (IDS) and automated threat isolation (IPS)",
      "Virtual Local Area Network (VLAN) security segmentations",
      "Multi-factor authentication (MFA) setups for VPN login gateways",
      "Continuous network vulnerability scans and device audit logging"
    ],
    techStack: "Fortinet FortiGate, Sophos XGS, Palo Alto Networks, SonicWall",
    image: securitySolutionsImg
  },
  'wireless-solutions': {
    category: "Solutions",
    title: "Wireless & RF Networking Solutions",
    tagline: "High-Density Campus Wi-Fi 6 & Heatmap Auditing",
    icon: <Network className="w-8 h-8 text-blue-600" />,
    desc: "Deploy seamless wireless networks across corporate offices, warehouses, and university campuses. We execute radio frequency (RF) heatmapping to position access points for maximum speeds.",
    features: [
      "Wi-Fi 6 / Wi-Fi 6E access point installs (indoor and outdoor)",
      "Centralized cloud/on-premise wireless controller configurations",
      "Custom guest Wi-Fi portal pages with secure SMS authentication",
      "Wireless signal heatmapping and signal leakage surveys",
      "IoT device wireless isolated networks with strict MAC-filtering"
    ],
    techStack: "Ruckus Wireless, Ubiquiti UniFi, Aruba Instant On, Cisco Catalyst",
    image: wirelessSolutionsImg
  },
  'mobility-solutions': {
    category: "Solutions",
    title: "Enterprise Mobility Management (EMM)",
    tagline: "Secure Remote Devices & BYOD Security Rules",
    icon: <Network className="w-8 h-8 text-cyan-600" />,
    desc: "Manage and secure the mobile devices, tablets, and remote laptops used by your personnel. We set up central directories allowing managers to push software configurations, lock lost devices, and enforce password rules.",
    features: [
      "Mobile Device Management (MDM) software integrations",
      "Enforcing remote device disk encryption and passcode rules",
      "Secure corporate email and data folders isolated on user devices",
      "Automated over-the-air corporate Wi-Fi and VPN profile configurations",
      "Remote lock, wipe, and diagnostic commands for security incidents"
    ],
    techStack: "Microsoft Intune, MobileIron, VMware Workspace ONE",
    image: mobilitySolutionsImg
  },
  'surveillance-solutions': {
    category: "Solutions",
    title: "IP Camera Surveillance & AI Video Analytics",
    tagline: "High-Definition Site Surveillance & Access Gates",
    icon: <Shield className="w-8 h-8 text-slate-800" />,
    desc: "Secure physical premises with high-resolution IP camera networks. We deploy intelligent Network Video Recorders (NVR) integrated with face detection, tripwire sensors, and license plate readers.",
    features: [
      "IP camera installations (bullet, dome, PTZ) with infrared night-vision",
      "High-capacity RAID NVR storage server configuration for long retention",
      "AI analytics: perimeter intrusion alerts, object left behind, count logs",
      "Smart physical access gates (RFID, biometric fingerprint, face-scan)",
      "Central control room displays showing multiple site cameras"
    ],
    techStack: "Hikvision IP Cameras, Dahua NVRs, Honeywell Systems, Milestone VMS",
    image: surveillanceSolutionsImg
  },
  'bms-solutions': {
    category: "Solutions",
    title: "Building Management System (BMS)",
    tagline: "Integrated Campus Automation & Energy Optimization",
    icon: <Building className="w-8 h-8 text-blue-600" />,
    desc: "Consolidate your HVAC cooling systems, campus lighting grids, water level sensors, and power backups under a single centralized operations dashboard to cut down utility waste.",
    features: [
      "Modbus/BACnet smart sensor installation for temperature and power tracking",
      "Automated chiller and HVAC scheduler configurations based on occupancy",
      "UPS battery status dashboard telemetry and fuel levels tracking",
      "Lighting zoning controllers and automatic smart switch triggers",
      "Centralized alarm manager generating notifications for pump failures"
    ],
    techStack: "Schneider Electric EcoStruxure, Siemens Desigo, Honeywell BMS",
    image: bmsSolutionsImg
  },
  'pa-solutions': {
    category: "Solutions",
    title: "IP Public Announcement (PA) Systems",
    tagline: "Zoned IP Audio Distribution & Evacuation Alarms",
    icon: <Network className="w-8 h-8 text-indigo-600" />,
    desc: "Install modern network-connected public address systems. Allows admin staff to broadcast audio alerts, schedule class/shift ring tones, or trigger evacuation sirens.",
    features: [
      "Zoned IP audio controllers and network-connected speaker setups",
      "Central console software scheduling bell tones and pre-recorded alerts",
      "Evacuation alarm system integrations triggering emergency audio rules",
      "Microphone stations with localized zoning keypads",
      "High-power outdoor horn installations for industrial PSUs"
    ],
    techStack: "Bosch Praesideo, TOA IP-PA, Ahuja Sound Systems",
    image: fiberNetwork
  },
  'server-storage-solutions': {
    category: "GL Tech Services",
    title: "Server & Storage Solutions",
    tagline: "Secure, Accessible, and Resilient Business Data",
    icon: <Database className="w-8 h-8 text-blue-700" />,
    desc: "Our server and storage integration services ensure that your data is accessible, secure, and properly managed throughout your organization.",
    features: [
      "Server hardware installation and configuration",
      "Storage area network (SAN) implementation",
      "Network-attached storage (NAS) solutions",
      "Backup and disaster recovery solutions",
      "Virtualization services"
    ],
    techStack: "Dell PowerStore, Synology RackStation, HPE MSA, Veeam Backups",
    image: serverStorageImg
  },
  'cloud-solutions': {
    category: "Solutions",
    title: "Managed Cloud Infrastructure & Hosting",
    tagline: "Secure Hybrid Hosting & Virtual Server Provisioning",
    icon: <Server className="w-8 h-8 text-cyan-600" />,
    desc: "Bridge your local office servers with high-security public cloud databases. We provision virtual computing resources, cloud storage buckets, and secure DNS configurations.",
    features: [
      "Virtual private cloud (VPC) design and gateway installations",
      "Database scaling, migration pipelines, and automated replication",
      "Web application hosting and content delivery network (CDN) setups",
      "Cloud budget forecasting, utilization reports, and size tuning",
      "Infrastructure-as-Code setups for repeatable developer environments"
    ],
    techStack: "AWS, Azure, Cloud DNS, CDN, VMware Hybrid Cloud",
    image: serverRacks
  },

  // INDUSTRIES
  'government': {
    category: "Industries",
    title: "Government Enterprises",
    tagline: "SLA-Compliant Networking & Secure Data Corridors",
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    desc: "We design and deploy compliant networks for state government corporations, administrative directories, and municipal offices. We prioritize security, data localizations, and audit histories.",
    features: [
      "Secure network setups adhering to national security standards",
      "Cabling layouts and optical terminations in administrative buildings",
      "Dedicated state datacenter server maintenance agreements",
      "Secure document routing portals with authenticated audit logs",
      "Standby hardware replacements for key communications links"
    ],
    techStack: "NIC Compliance, Localized Hosting, Secure Fiber Loops",
    image: highCourtOdisha
  },
  'public-sector': {
    category: "Industries",
    title: "Public Sector Units (PSUs)",
    tagline: "Industrial IP Surveillance & Redundant LAN Systems",
    icon: <Landmark className="w-8 h-8 text-indigo-600" />,
    desc: "For public sector manufacturing sites, steel plants, and mining offices, we deploy heavy-duty networking cabling, IP camera boundaries, zoning PA speakers, and active standby server setups.",
    features: [
      "Heavy-duty outdoor fiber optic cables laid in protective conduits",
      "Industrial network switches certified for dust and high temperatures",
      "Thermal IP cameras for machinery health monitoring",
      "Zoned emergency announcement networks and horn installations",
      "24/7 technical maintenance contracts with onsite response SLAs"
    ],
    techStack: "Rugged Industrial Networks, Zoned IP-PA, Thermal Telemetry",
    image: fiberNetwork
  },
  'corporates': {
    category: "Industries",
    title: "Corporate IT Systems & Network Setup",
    tagline: "Smart Wi-Fi 6 Networks & Workspace Configurations",
    icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
    desc: "Equip modern corporate workspaces with high-speed wireless mesh coverage, structured Cat6A desks ports, secure SSL VPN connections for remote workers, and email directory platforms.",
    features: [
      "Structured Cat6A copper desk cabling terminated at patch panels",
      "High-speed office Wi-Fi 6 mesh networks with clean handover metrics",
      "Central directory configurations (Active Directory / Google LDAP)",
      "Meeting room AV projection setups and wireless presentation keys",
      "Prompt ticket response workflows logged in our OneDesk system"
    ],
    techStack: "Microsoft 365, LDAP, Zoom Rooms, Mesh Wi-Fi 6, Cat6A Cabling",
    image: teamCollaboration
  }
};

export default function ServiceOrSolutionDetail({ detailId }) {
  const currentData = detailsData[detailId];

  if (detailId === 'it-applications') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#f8fafc] font-sans"
      >
        {/* 1. Header Banner */}
        <section className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-[#0F172A] py-24 relative overflow-hidden border-b border-slate-200/70">
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
              Services & Specializations
            </span>
            <h1 className="text-4.5xl sm:text-6xl font-extrabold font-display tracking-tight text-[#0F172A] leading-tight">
              Software Development
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl max-w-4xl font-light leading-relaxed">
              Crafting robust, scalable, and secure custom applications designed to streamline operations, automate business logic, and drive productivity.
            </p>
          </div>
        </section>

        {/* 2. Content & Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">
                Enterprise Application Lifecycle Management
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-light font-sans">
                We design, build, and support enterprise-grade software applications tailored to resolve specific business operation delays. From single-page React web apps to automated database sync scripts and cloud modernizations, we manage the complete lifecycle.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg font-sans">React & Next.js</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg font-sans">Node.js & Python</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg font-sans">PostgreSQL & MongoDB</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg font-sans">AWS & Hybrid Cloud</span>
              </div>
            </div>
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200/50 shadow-md h-[260px] sm:h-[300px]">
              <img
                src={currentData?.image || teamCollaboration}
                alt={currentData?.title || "Enterprise Application Lifecycle Management"}
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 text-white">
                <span className="text-xs font-semibold bg-blue-600/80 px-3 py-1 rounded-full uppercase tracking-wider">
                  Software Engineering & Lifecycle
                </span>
              </div>
            </div>
          </div>

          {/* Specializations Section */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">Our Core Specializations</h2>
              <p className="text-slate-500 font-light text-base font-sans">We deliver state-of-the-art engineering across the entire software development spectrum.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Web Development */}
              <motion.div 
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display">Web Application Development</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  High-performance single page applications (SPA) and server-side rendered (SSR) web interfaces. Optimized for lightning-fast speeds and responsive mobile styling.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium pt-2 border-t border-slate-50 font-sans">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> React, Next.js, & Tailwind CSS
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Single-Page Web Applications
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Dynamic Dashboards & Visualization
                  </li>
                </ul>
              </motion.div>

              {/* Card 2: Mobile App Engineering */}
              <motion.div 
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display">Mobile Application Development</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  Cross-platform and native mobile apps that run natively on iOS and Android. Built with robust local storage engines and push notification queues.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium pt-2 border-t border-slate-50 font-sans">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> React Native & Flutter Frameworks
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Offline Syncing & Storage (SQLite/Realm)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Native App Store Deployments
                  </li>
                </ul>
              </motion.div>

              {/* Card 3: Custom CRM & ERP */}
              <motion.div 
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display">Custom CRM & ERP Portals</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  Tailored management software configured around your company's workflows. Consolidate client records, billing ledgers, and inventories under one dashboard.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium pt-2 border-t border-slate-50 font-sans">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Custom Internal CRM Dashboards
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Role-Based Access Control (RBAC)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Inventory & Order Syncing Modules
                  </li>
                </ul>
              </motion.div>

              {/* Card 4: Automations & Workflow Bots */}
              <motion.div 
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display">Process & Workflow Automation</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  Replace manual administrative entries with smart server scripts. Auto-dispatch email/SMS notification rules, timesheet reviews, and inventory thresholds.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium pt-2 border-t border-slate-50 font-sans">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Automated Cron Jobs & Sync Scripts
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Email, SMS & Chat Alerts Routing
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Robotic Process Automation (RPA)
                  </li>
                </ul>
              </motion.div>

              {/* Card 5: API Integrations */}
              <motion.div 
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display">API Integrations & Custom Webhooks</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  Secure connectors linking proprietary portals with global payment gateways, SMS engines, and government databanks. Engineered with complete retry logic.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium pt-2 border-t border-slate-50 font-sans">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Restful API / GraphQL Gateways
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Multi-Platform Webhook Receivers
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Payment & SMS Gateway Sync
                  </li>
                </ul>
              </motion.div>

              {/* Card 6: Legacy Modernization */}
              <motion.div 
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display">Legacy Code Modernization</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light font-sans">
                  Refactor complex server applications into modular, cloud-native microservices. Secure outdated databases and transition scripts to modern standard syntax.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500 font-medium pt-2 border-t border-slate-50 font-sans">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Monolith to Microservice Splits
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Database Clustering & Upgrades
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Containerization with Docker & K8s
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>

          {/* Tech Stack Tech-Map */}
          <div className="bg-[#091E42] text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <div className="border-b border-blue-950 pb-4">
                <h2 className="text-2xl font-bold font-display tracking-tight">Software Technology Blueprint</h2>
                <p className="text-slate-400 text-sm font-light mt-1 font-sans">Our standardized tech stack guarantees high availability, security compliance, and ease of future maintenance.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Front-End</span>
                  <p className="text-sm font-semibold text-white font-sans">React, Next.js, Tailwind CSS, TypeScript, Redux Toolkit</p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Back-End</span>
                  <p className="text-sm font-semibold text-white font-sans">Node.js, Express, Python (FastAPI / Django), GoLang</p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Database & Cache</span>
                  <p className="text-sm font-semibold text-white font-sans">PostgreSQL, MongoDB, MySQL, Redis Cache, SQLite</p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">DevOps & Cloud</span>
                  <p className="text-sm font-semibold text-white font-sans">Docker, AWS, Microsoft Azure, CI/CD Actions, Vercel</p>
                </div>

              </div>
            </div>
          </div>

          {/* Call to Action Grid */}
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-lg font-bold text-brand-dark font-display font-sans">Looking to scale your software infrastructure?</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed max-w-2xl font-sans">
                Get in touch with our system architects today. We will evaluate your current technology stack and outline a modular delivery roadmap.
              </p>
            </div>
            <a
              href="mailto:business@globx.co.in"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all shrink-0 cursor-pointer font-sans"
            >
              <span>Consult an Architect</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </section>
      </motion.div>
    );
  }

  if (!currentData) {
    return (
      <div className="w-full bg-[#f8fafc] py-32 text-center font-sans">
        <h2 className="text-2xl font-bold text-slate-800">Detail Page Not Found</h2>
        <p className="text-slate-500 mt-2">The requested ID ({detailId}) could not be resolved.</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#f8fafc] font-sans"
    >
      
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
            {currentData.category}
          </span>
          <h1 className="text-4.5xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0F172A] leading-tight">
            {currentData.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            {currentData.tagline}
          </p>
        </div>
      </section>

      {/* 2. Detail Body */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-md">
            
            {/* Title Block */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
                {currentData.icon}
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Service Category</span>
                <h2 className="text-2xl font-bold font-display text-brand-dark tracking-tight">{currentData.title}</h2>
              </div>
            </div>

            {/* Visual Header Image Card */}
            {currentData.image && (
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 shadow-md h-[280px] sm:h-[350px]">
                <img
                  src={currentData.image}
                  alt={currentData.title}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white flex items-center justify-between">
                  <span className="text-xs font-semibold bg-blue-600/80 px-3 py-1 rounded-full uppercase tracking-wider">
                    SLA Audited Operations
                  </span>
                </div>
              </div>
            )}

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              {currentData.desc}
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-base font-bold font-display text-brand-dark border-l-4 border-blue-500 pl-3">Deployment Scope & Standard Deliveries</h3>
              
              <ul className="space-y-3.5">
                {currentData.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            <motion.div 
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-[#091E42] text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 cursor-default relative overflow-hidden"
            >
              {/* Subtle mesh background on card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-lg font-bold font-display border-b border-blue-950 pb-3 relative z-10">Ecosystem & Tech Stack</h3>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Standard Tech / Protocols</span>
                  <p className="text-sm font-semibold text-white mt-1">{currentData.techStack}</p>
                </div>
                
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">SLA Protection</span>
                  <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">
                    All deployments are eligible for our SLA active monitoring and onsite technical response contracts.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:business@globx.co.in"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-950/40 transition-all cursor-pointer animate-none"
                  >
                    <span>Request Technical Sizing</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, borderColor: 'rgba(147, 197, 253, 0.8)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-blue-50 border border-blue-100 rounded-3xl p-6 space-y-3 cursor-default"
            >
              <h4 className="font-bold text-brand-dark text-sm sm:text-base">Need a custom topology?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Our network and systems engineers are available to review existing network diagrams, check wireless coverage maps, and provide free assessment reports.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

    </motion.div>
  );
}
