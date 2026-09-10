import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Server, Shield, Network, Cpu, Terminal, Lock, Zap, Target, Award } from 'lucide-react';

function Counter({ target, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const count = useMotionValue(0);

  // Format numbers, supporting decimals (e.g., 99.8)
  const decimals = target.toString().includes('.') ? (target.toString().split('.')[1] || '').length : 0;

  const rounded = useTransform(count, (latest) => {
    return latest.toFixed(decimals) + suffix;
  });

  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, target, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// Enterprise Network Animated Background Component
function EnterpriseNetworkBackground() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  // Reduced counts: 8 lines, 10 nodes, 5 packets — less compositor layers
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: (i * 12.5) % 100,
    y: (i * 15) % 100,
    delay: i * 0.8,
    length: 15 + (i % 4) * 10,
    angle: (i * 45) % 180,
  }));

  const nodes = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: (i * 10) % 100,
    y: (i * 9) % 100,
    delay: i * 0.5,
    size: 2 + (i % 3),
    opacity: 0.15 + (i % 4) * 0.08,
  }));

  if (!isInView) {
    return <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Lines — subtle sky blue lines */}
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute pointer-events-none"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            width: `${line.length}%`,
            height: '1px',
            transformOrigin: 'left center',
            background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.22), rgba(56, 189, 248, 0.18), transparent)',
            willChange: 'transform, opacity',
          }}
          animate={{
            rotate: [line.angle, line.angle + 360],
            scaleX: [0.3, 1, 0.3],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 18 + line.delay * 2,
            delay: line.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Animated Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            background: node.size > 3
              ? 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(56, 189, 248, 0.25) 70%)'
              : 'rgba(14, 165, 233, 0.3)',
            boxShadow: '0 0 6px rgba(56, 189, 248, 0.4)',
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [node.opacity * 0.6, node.opacity * 1.1, node.opacity * 0.6],
          }}
          transition={{
            duration: 10 + node.delay,
            delay: node.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Data Packets */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute pointer-events-none rounded-full bg-sky-400/60 shadow-[0_0_6px_rgba(14,165,233,0.5)]"
          style={{
            width: '3px',
            height: '3px',
            left: `${(i * 18) % 100}%`,
            top: `${(i * 17) % 100}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            x: ['-50%', '150%'],
            y: ['0%', '-25%'],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 14 + i * 2,
            delay: i * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

import imgServerRacks from '../assets/server_racks.png';
import imgTeamCollaboration from '../assets/team_collaboration.png';
import imgFiberNetwork from '../assets/fiber_network.png';
import securitySolutionsImg from '../assets/solutions/security-solutions.png';

// Partners
import logoAws from '../assets/partners/Amazon_Web_Services_Logo.svg';
import logoBroadcom from '../assets/partners/Broadcom_logo_(2016-present).svg';
import logoCisco from '../assets/partners/Cisco_logo_blue_2016.svg';
import logoDell from '../assets/partners/Dell_Logo.svg';
import logoFortinet from '../assets/partners/Fortinet_logo.svg';
import logoGoogle from '../assets/partners/Google-Logo.wine.svg';
import logoHpe from '../assets/partners/Hewlett_Packard_Enterprise_logo.svg';
import logoIbm from '../assets/partners/IBM_logo.svg';
import logoAzure from '../assets/partners/Microsoft_Azure_Logo.svg';
import logoMicrosoft from '../assets/partners/Microsoft_logo_(2012).svg';
import logoSchneider from '../assets/partners/Schinder_Electric.svg';
import logoSophos from '../assets/partners/Sophos_logo.svg';
import logoDlink from '../assets/partners/D-Link_wordmark.svg';
import logoAdobe from '../assets/partners/Adobe_Corporate_logo.svg';

// Clients - Government & PSUs
import clientBbSmart from '../assets/Esteemsed_clients/BBSR-smart.png';
import clientCvpp from '../assets/Esteemsed_clients/CVPP.png';
import clientDrdo from '../assets/Esteemsed_clients/DRDO.png';
import clientEsc from '../assets/Esteemsed_clients/ESC.png';
import clientIimCalcutta from '../assets/Esteemsed_clients/IIM calcuta.svg';
import clientIitBhubaneswar from '../assets/Esteemsed_clients/IIT_Bhubaneswar.png';
import clientIiserBerhampur from '../assets/Esteemsed_clients/IIser barhampur.png';
import clientIndianOil from '../assets/Esteemsed_clients/Indian_Oil_Logo.svg';
import clientIop from '../assets/Esteemsed_clients/Institute Of Physics.jpg';
import clientBalmerLawrie from '../assets/Esteemsed_clients/LB.png';
import clientNcc from '../assets/Esteemsed_clients/NCC.png';
import clientNitRourkela from '../assets/Esteemsed_clients/NIT_Rourkela.png';
import clientNsg from '../assets/Esteemsed_clients/NSG.png';
import clientNsic from '../assets/Esteemsed_clients/NSIC.png';
import clientNalco from '../assets/Esteemsed_clients/Nalco.svg';
import clientNiser from '../assets/Esteemsed_clients/Niser.png';
import clientOhpc from '../assets/Esteemsed_clients/OHPC.svg';
import clientOcac from '../assets/Esteemsed_clients/Ocac.png';
import clientOdishaPolice from '../assets/Esteemsed_clients/Odisha Police.webp';
import clientRailtel from '../assets/Esteemsed_clients/Reltel.svg';
import clientTpcodl from '../assets/Esteemsed_clients/TPCODL.jpg';
import clientVecc from '../assets/Esteemsed_clients/VECC.png';
import clientHighCourt from '../assets/Esteemsed_clients/highcourt-Odisha.png';
import clientOrsac from '../assets/Esteemsed_clients/orsac.jpg';
import clientOuat from '../assets/Esteemsed_clients/ouat-bhubaneswar-seeklogo.svg';

// Custom SVGs for Government Clients without raster files
import clientPmec from '../assets/Esteemsed_clients/PMEC.png';
import clientMlu from '../assets/Esteemsed_clients/MLU.png';
import clientBhu from '../assets/Esteemsed_clients/BHU.svg';
import clientOpgc from '../assets/Esteemsed_clients/OPGC.png';
import clientJnpa from '../assets/Esteemsed_clients/JNPA.svg';

// Clients - Private Enterprises
import clientTataSteelSez from '../assets/Esteemsed_clients/Tata steel sez.jpg';
import clientBrpl from '../assets/Esteemsed_clients/BRPL.jpg';
import clientDotKey from '../assets/Esteemsed_clients/Dot and key.png';
import clientJetsmart from '../assets/Esteemsed_clients/jetsmart.jpeg';

// Custom SVGs for Private Clients without raster files
import clientBpsl from '../assets/Esteemsed_clients/BPSL.svg';
import clientAssotech from '../assets/Esteemsed_clients/Assotech.png';
import clientToughergo from '../assets/Esteemsed_clients/Toughergo.svg';
import clientEls from '../assets/Esteemsed_clients/ELS.svg';

// Certificates
import certIso9001 from '../assets/certificates/iso_9001.jpg';
import certIso20000 from '../assets/certificates/iso_20000.jpg';
import certIso27001 from '../assets/certificates/Iso 27001.jpg';


function Home({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: imgServerRacks,
      title: "Advanced System Integration Solutions",
      subtitle: "GL Tech Solutions connects your people, systems, and infrastructure through secure, reliable technology built around the way your business works.",
      badge: "Complete IT Integration"
    },
    {
      image: imgTeamCollaboration,
      title: "Technology That Moves Your Business Forward",
      subtitle: "From desktop systems and business applications to servers, storage, and support, we create practical solutions that improve efficiency every day.",
      badge: "Business-Focused Technology"
    },
    {
      image: imgFiberNetwork,
      title: "Secure Infrastructure. Reliable Performance.",
      subtitle: "Build a stronger digital foundation with dependable networking, security equipment, CCTV, and infrastructure services backed by experienced professionals.",
      badge: "Networking & Security"
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  const partnerIds = [
    'ibm',
    'cisco',
    'google',
    'broadcom',
    'microsoft',
    'schneider',
    'sophos',
    'fortinet',
    'aws',
    'axure',
    'dell',
    'hpe',
    'dlink',
    'adobe'
  ];

  const renderPartnerLogo = (id) => {
    let src;
    let alt;
    switch (id) {
      case 'adobe':
        src = logoAdobe;
        alt = "Adobe";
        break;
      case 'ibm':
        src = logoIbm;
        alt = "IBM";
        break;
      case 'cisco':
        src = logoCisco;
        alt = "Cisco";
        break;
      case 'google':
        src = logoGoogle;
        alt = "Google";
        break;
      case 'broadcom':
        src = logoBroadcom;
        alt = "Broadcom";
        break;
      case 'microsoft':
        src = logoMicrosoft;
        alt = "Microsoft";
        break;
      case 'schneider':
        src = logoSchneider;
        alt = "Schneider Electric";
        break;
      case 'sophos':
        src = logoSophos;
        alt = "Sophos";
        break;
      case 'fortinet':
        src = logoFortinet;
        alt = "Fortinet";
        break;
      case 'aws':
        src = logoAws;
        alt = "AWS";
        break;
      case 'axure':
        src = logoAzure;
        alt = "Axure / Azure";
        break;
      case 'dell':
        src = logoDell;
        alt = "Dell";
        break;
      case 'hpe':
        src = logoHpe;
        alt = "HPE";
        break;
      case 'dlink':
        src = logoDlink;
        alt = "D-Link";
        break;
      default:
        return null;
    }
    return (
      <img
        src={src}
        alt={alt}
        className={`max-w-full object-contain ${id === 'google' ? 'max-h-14 scale-125' : 'max-h-11'}`}
      />
    );
  };

  /* Legacy client-logo fallback retained for existing client data. */
  const renderClientLogo = (name) => {
    switch (name) {
      case "NALCO":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-emerald-600" fill="currentColor">
            <path d="M20,2 L35,10 L35,30 L20,38 L5,30 L5,10 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M12,15 L20,9 L28,15 L28,25 L20,31 L12,25 Z" fill="currentColor" opacity="0.8" />
            <circle cx="20" cy="20" r="4" fill="white" />
          </svg>
        );
      case "OCAC":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="8" y="8" width="24" height="24" rx="4" />
            <circle cx="20" cy="20" r="5" fill="currentColor" />
            <path d="M20,8 L20,15 M20,25 L20,32 M8,20 L15,20 M25,20 L32,20" strokeLinecap="round" />
          </svg>
        );
      case "High Court of Odisha":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-amber-700 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6,34 L34,34 M10,34 L10,16 M30,34 L30,16 M20,34 L20,16" strokeLinecap="round" />
            <path d="M8,16 L32,16 L20,8 Z" fill="currentColor" opacity="0.15" />
            <path d="M15,12 L25,12" strokeWidth="3" />
          </svg>
        );
      case "IndianOil":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-orange-600" fill="currentColor">
            <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="20" cy="20" r="9" />
            <rect x="13" y="18" width="14" height="4" fill="white" />
          </svg>
        );
      case "TPCODL":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="20" cy="20" r="15" />
            <path d="M22,10 L14,21 L20,21 L18,30 L26,19 L20,19 Z" fill="currentColor" stroke="none" />
          </svg>
        );
      case "ORSAC":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="20" cy="20" r="16" strokeDasharray="4 2" />
            <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(-30 20 20)" />
            <circle cx="20" cy="20" r="4" fill="currentColor" stroke="none" />
          </svg>
        );
      case "IIT Bhubaneswar":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="20" cy="20" r="15" />
            <path d="M20,10 L30,16 L20,22 L10,16 Z" fill="currentColor" opacity="0.2" />
            <path d="M14,19 L14,26 C14,29 20,31 20,31 C20,31 26,29 26,26 L26,19" />
            <path d="M30,16 L30,24" />
          </svg>
        );
      case "NISER":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(30 20 20)" />
            <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(-30 20 20)" />
            <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(90 20 20)" />
            <circle cx="20" cy="20" r="4.5" fill="currentColor" stroke="none" />
          </svg>
        );
      case "NIT Rourkela":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-red-600" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="20" cy="20" r="10" strokeDasharray="3 3" />
            <path d="M20,5 L20,35 M5,20 L35,20 M9.5,9.5 L30.5,30.5 M9.5,30.5 L30.5,9.5" />
            <circle cx="20" cy="20" r="14" />
          </svg>
        );
      case "Utkal University":
        return (
          <svg viewBox="0 0 40 40" className="w-20 h-20 text-emerald-800" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20,6 L32,12 L32,28 L20,34 L8,28 L8,12 Z" />
            <path d="M20,12 L20,28" />
            <path d="M14,18 L26,18 M14,22 L26,22" />
          </svg>
        );
      default:
        return (
          <div className="w-16 h-16 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm uppercase shadow-sm">
            {name.substring(0, 3)}
          </div>
        );
    }
  };

  const governmentClients = [
    // 1. Education & R&D Institutions
    { name: "IIT Bhubaneswar", fullName: "Indian Institute of Technology Bhubaneswar", logo: clientIitBhubaneswar, category: "Education & R&D" },
    { name: "NISER", fullName: "National Institute of Science Education and Research", logo: clientNiser, category: "Education & R&D" },
    { name: "IISER Berhampur", fullName: "Indian Institute of Science Education and Research", logo: clientIiserBerhampur, category: "Education & R&D" },
    { name: "NIT Rourkela", fullName: "National Institute of Technology Rourkela", logo: clientNitRourkela, category: "Education & R&D" },
    { name: "IIM Calcutta", fullName: "Indian Institute of Management Calcutta", logo: clientIimCalcutta, category: "Education & R&D" },
    { name: "Banaras Hindu University", fullName: "Banaras Hindu University (BHU)", logo: clientBhu, category: "Education & R&D" },
    { name: "OUAT Bhubaneswar", fullName: "Orissa University of Agriculture and Technology", logo: clientOuat, category: "Education & R&D" },
    { name: "Institute of Physics", fullName: "Institute of Physics Bhubaneswar", logo: clientIop, category: "Education & R&D" },
    { name: "PMEC Berhampur", fullName: "Parala Maharaja Engineering College", logo: clientPmec, category: "Education & R&D", imgClass: "scale-[1.8] sm:scale-[1.4]" },
    { name: "Madhusudan Law Univ", fullName: "Madhusudan Law University Cuttack", logo: clientMlu, category: "Education & R&D", imgClass: "scale-[1.8] sm:scale-[1.4]" },
    { name: "VECC Kolkata", fullName: "Variable Energy Cyclotron Centre", logo: clientVecc, category: "Education & R&D" },

    // 2. Defence, Security & Law Enforcement
    { name: "DRDO Balasore", fullName: "Defence Research & Development Organisation", logo: clientDrdo, category: "Defence & Research" },
    { name: "National Security Guard", fullName: "National Security Guard (NSG)", logo: clientNsg, category: "Defence & Security" },
    { name: "National Cadet Corps", fullName: "National Cadet Corps (NCC)", logo: clientNcc, category: "Defence & Security" },
    { name: "Odisha Police", fullName: "Odisha State Police Department", logo: clientOdishaPolice, category: "Law Enforcement" },

    // 3. PSUs, Power, Infrastructure & Government Orgs
    { name: "NALCO", fullName: "National Aluminium Company Limited", logo: clientNalco, category: "Public Sector Unit", imgClass: "scale-[1.8] sm:scale-[1.8]" },
    { name: "IndianOil", fullName: "Indian Oil Corporation Limited", logo: clientIndianOil, category: "Public Sector Unit" },
    { name: "OHPC", fullName: "Odisha Hydro Power Corporation Limited", logo: clientOhpc, category: "Public Sector Unit", imgClass: "scale-[1.5] sm:scale-[1.5]" },
    { name: "OPGC", fullName: "Odisha Power Generation Corporation", logo: clientOpgc, category: "Public Sector Unit" },
    { name: "CVPP", fullName: "Chenab Valley Power Projects Limited", logo: clientCvpp, category: "Public Sector Unit" },
    { name: "Balmer Lawrie & Co.", fullName: "Balmer Lawrie & Company Limited", logo: clientBalmerLawrie, category: "Public Sector Unit" },
    { name: "ORSAC", fullName: "Odisha Space Applications Centre", logo: clientOrsac, category: "Space & Research" },
    { name: "High Court of Odisha", fullName: "Orissa High Court Cuttack", logo: clientHighCourt, category: "Judiciary" },
    { name: "Bhubaneswar Smart City", fullName: "Bhubaneswar Smart City Limited", logo: clientBbSmart, category: "Government Body" },
    { name: "TPCODL", fullName: "TP Central Odisha Distribution Limited", logo: clientTpcodl, category: "Utility & Power" },
    { name: "JNPA", fullName: "Jawaharlal Nehru Port Authority", logo: clientJnpa, category: "Port Authority" }
  ];

  const empanelmentClients = [
    {
      name: "NSIC",
      fullName: "National Small Industries Corporation",
      logo: clientNsic,
      category: "Government of India Enterprise",
      badge: "Empaneled",
      imgClass: "max-h-14 sm:max-h-16 max-w-[85%]"
    },
    {
      name: "ESC India",
      fullName: "Electronics & Computer Software Export Promotion Council",
      logo: clientEsc,
      category: "Export Promotion Council",
      badge: "Member Org",
      imgClass: "max-h-16 sm:max-h-18 max-w-[90%] scale-115"
    },
    {
      name: "RailTel",
      fullName: "RailTel Corporation of India Limited",
      logo: clientRailtel,
      category: "Telecom & IT Infrastructure",
      badge: "Empaneled Integrator",
      imgClass: "max-h-18 sm:max-h-20 max-w-[90%] scale-125"
    },
    {
      name: "OCAC",
      fullName: "Odisha Computer Application Centre",
      logo: clientOcac,
      category: "State Nodal IT Agency",
      badge: "State Empanelment",
      imgClass: "max-h-20 sm:max-h-24 max-w-[95%] scale-[1.75]"
    }
  ];

  const privateClients = [
    { name: "Tata Steel SEZ", fullName: "Tata Steel Special Economic Zone", logo: clientTataSteelSez, category: "Private Enterprise" },
    { name: "Bhushan Power & Steel (JSW)", fullName: "Bhushan Power & Steel Limited (JSW)", logo: clientBpsl, category: "Private Enterprise" },
    { name: "Assotech", fullName: "Assotech Realty Private Limited", logo: clientAssotech, category: "Real Estate & Infra", imgClass: "scale-[1.9] sm:scale-[2.2]" },
    { name: "BRPL Odisha", fullName: "Brahmani River Pellets Limited", logo: clientBrpl, category: "Private Enterprise" },
    { name: "Toughergo", fullName: "Toughergo Private Limited", logo: clientToughergo, category: "Private Enterprise" },
    { name: "ELS Empowerment", fullName: "ELS Empowerment Private Limited", logo: clientEls, category: "Private Enterprise" },
    { name: "JetSmart IT", fullName: "JetSmart IT Services LLP", logo: clientJetsmart, category: "IT & Technology" },
    { name: "Dot & Key", fullName: "Dot & Key Skincare", logo: clientDotKey, category: "Consumer Enterprise" }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#F8FAFC] text-[#0F172A] font-sans">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — MODERN PREMIUM LIGHT ENTERPRISE THEME
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] overflow-hidden pt-8 pb-16">

        {/* ── Enterprise Animated Background - Network Lines/Nodes ── */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <EnterpriseNetworkBackground />

          {/* Clean architectural grid overlay */}
          <div className="absolute inset-0 opacity-[0.035]" style={{
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)',
            backgroundSize: '56px 56px'
          }} />
        </div>

        {/* ── Ambient Soft Glows ── */}
        <div
          className="absolute top-0 right-0 w-[650px] h-[550px] pointer-events-none z-10"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(59,130,246,0.1) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] pointer-events-none z-10"
          style={{ background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, rgba(59,130,246,0.04) 45%, transparent 70%)' }}
        />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, rgba(241, 245, 249, 0.9) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 100%)' }}
        />
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[800px] h-44 pointer-events-none z-10 rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0.04) 50%, transparent 75%)', filter: 'blur(36px)' }}
        />

        {/* ── Carousel background image — full screen with soft architectural blending ── */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="sync">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={slides[activeSlide].image}
                alt=""
                className="w-full h-full object-cover"
                style={{
                  opacity: 0.16,
                  maskImage: 'radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                }}
              />
            </motion.div>
          </AnimatePresence>
          {/* Light edge blending */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/70 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Live Pill Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${activeSlide}`}
                  inherit={false}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-sky-50/90 border border-sky-200 text-sky-700 shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  <span>{slides[activeSlide].badge}</span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] text-[#0F172A] font-display mb-3"
            >
              Powering Your Business with{' '}
              <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
                Smarter Technology
              </span>
            </motion.h1>

            {/* Dynamic subtitle */}
            <motion.div variants={itemVariants} className="min-h-[64px] flex items-center justify-center text-center mt-3 mb-6 w-full max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${activeSlide}`}
                  inherit={false}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed"
                >
                  {slides[activeSlide].subtitle}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 30px rgba(14, 165, 233, 0.3)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('services')}
                className="relative group overflow-hidden flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white cursor-pointer text-sm bg-gradient-to-r from-sky-500 to-sky-600 shadow-lg shadow-sky-500/25 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-slate-700 cursor-pointer text-sm border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 shadow-sm transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Slide dots */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mt-7 mb-8">
              {slides.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  animate={{
                    width: idx === activeSlide ? 32 : 8,
                    backgroundColor: idx === activeSlide ? '#0EA5E9' : '#CBD5E1'
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-2 rounded-full cursor-pointer transition-all"
                  style={{ minWidth: 8 }}
                />
              ))}
            </motion.div>

            {/* ── Floating Stats Banner (Clean Light Frosted Glass) ── */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-5xl mx-auto rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-5 sm:p-6 shadow-xl shadow-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/80"
            >
              <div className="flex items-center gap-3.5 p-2">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black font-display text-[#0F172A] tracking-tight">
                    <Counter target={99.99} suffix="%" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Enterprise SLA Uptime</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-2 pt-4 md:pt-2 md:pl-6">
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                  <Server className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black font-display text-[#0F172A] tracking-tight">
                    <Counter target={500} suffix="+" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Nodes & Systems Managed</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-2 pt-4 md:pt-2 md:pl-6">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600 shrink-0 shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black font-display text-[#0F172A] tracking-tight">
                    Zero-Trust
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Advanced Cyber Security</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-2 pt-4 md:pt-2 md:pl-6">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black font-display text-[#0F172A] tracking-tight">
                    ISO Certified
                  </div>
                  <div className="text-xs text-slate-500 font-medium">9001 · 20000 · 27001</div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE LOGO MARQUEE */}
      <section className="relative bg-white py-12 border-b border-slate-200/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Our Strategic OEM Alliances</span>
        </div>

        {/* Infinite scrolling wrapper */}
        <div className="w-full overflow-hidden relative flex mask-horizontal-fades py-2">
          <div className="flex animate-marquee whitespace-nowrap min-w-max">
            {/* First Set of original partner logos */}
            <div className="flex items-center shrink-0">
              {partnerIds.map((partnerId, idx) => (
                <div key={`p1-${idx}`} className="flex items-center justify-center mx-5 h-16 w-36 shrink-0 bg-slate-50/80 rounded-xl px-4 py-2 border border-slate-100 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300">
                  {renderPartnerLogo(partnerId)}
                </div>
              ))}
            </div>
            {/* Second Set of original partner logos */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {partnerIds.map((partnerId, idx) => (
                <div key={`p2-${idx}`} className="flex items-center justify-center mx-5 h-16 w-36 shrink-0 bg-slate-50/80 rounded-xl px-4 py-2 border border-slate-100 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300">
                  {renderPartnerLogo(partnerId)}
                </div>
              ))}
            </div>
            {/* Third Set of original partner logos */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {partnerIds.map((partnerId, idx) => (
                <div key={`p3-${idx}`} className="flex items-center justify-center mx-5 h-16 w-36 shrink-0 bg-slate-50/80 rounded-xl px-4 py-2 border border-slate-100 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300">
                  {renderPartnerLogo(partnerId)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 4. OUR SERVICES */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/70">
        {/* Subtle animated grid background */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0F172A] tracking-tight">
              Complete IT Services for{' '}
              <span className="bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              We offer comprehensive system integration services to businesses of all sizes, helping them optimize their IT infrastructure for greater efficiency, reliability, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: IT Infrastructure */}
            <SolutionCard
              icon={<Server className="w-16 h-16" />}
              iconBg="bg-sky-50"
              iconColor="text-sky-600"
              title="Desktop Integration"
              description="Seamlessly connect desktop systems, devices, applications, and users to your existing business infrastructure for a smoother, more productive workplace."
              bgImage={imgServerRacks}
              onClick={() => onNavigate('service-detail', 'desktop-integration')}
            />

            {/* Card 2: Networking solutions */}
            <SolutionCard
              icon={<Network className="w-16 h-16" />}
              iconBg="bg-cyan-50"
              iconColor="text-cyan-600"
              title="Server & Storage"
              description="Deploy enterprise-grade servers, storage platforms, backup systems, and virtualization solutions designed around your performance and continuity needs."
              bgImage={imgFiberNetwork}
              onClick={() => onNavigate('service-detail', 'server-storage-solutions')}
            />

            {/* Card 3: Security solutions */}
            <SolutionCard
              icon={<Shield className="w-16 h-16" />}
              iconBg="bg-indigo-50"
              iconColor="text-indigo-600"
              title="Networking"
              description="Design, implement, and maintain secure, reliable networks that keep your teams connected and your critical business systems available."
              bgImage={securitySolutionsImg}
              onClick={() => onNavigate('service-detail', 'networking-solutions')}
            />

            {/* Card 4: IT Applications */}
            <SolutionCard
              icon={<Cpu className="w-16 h-16" />}
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
              title="Security Equipment"
              description="Protect your digital assets with firewalls, access control, surveillance, CCTV, and integrated security solutions supported by experienced engineers."
              bgImage={securitySolutionsImg}
              onClick={() => onNavigate('service-detail', 'security-equipment')}
            />

            {/* Card 5: CCTV solutions */}
            <SolutionCard
              icon={<Shield className="w-16 h-16" />}
              iconBg="bg-slate-50"
              iconColor="text-slate-700"
              title="CCTV Solutions"
              description="Secure your premises and assets with IP cameras, video management, remote monitoring, storage, and access control integration."
              bgImage={securitySolutionsImg}
              onClick={() => onNavigate('service-detail', 'cctv-solutions')}
            />

            {/* Card 6: Workflow automation */}
            <SolutionCard
              icon={<Terminal className="w-16 h-16" />}
              iconBg="bg-amber-50"
              iconColor="text-amber-600"
              title="Workflow & BPM Automation"
              description="Map and automate operational logic, eliminate manual document processing, and improve resource scheduling pipelines."
              bgImage={imgTeamCollaboration}
              onClick={() => onNavigate('service-detail', 'it-applications')}
            />

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE GL TECH SOLUTIONS */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/70 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-600">The GL Tech Difference</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0F172A] tracking-tight">
              Why Choose GL Tech Solutions?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              We combine practical engineering experience with a clear understanding of your business, so every technology investment delivers dependable value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: 'Experienced Team',
                description: 'Our certified professionals bring years of hands-on experience in system integration, infrastructure, networking, and security.'
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Custom Solutions',
                description: 'We study your goals, workflows, and existing environment to design solutions that fit your specific business requirements.'
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Security Focused',
                description: 'Security is considered at every layer, from desktop integration and network design to server infrastructure and surveillance.'
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: '24/7 Support',
                description: 'Our support and maintenance approach helps keep your systems available, monitored, and ready when your business needs them.'
              }
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-sky-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-[#0F172A] mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ESTEEMED CLIENTS SECTION — DUAL INFINITE MARQUEES */}
      <section
        id="esteemed-clients-section"
        className="py-20 bg-white border-b border-slate-200/70 overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-700 uppercase tracking-wider">
              <span>Trusted Partner Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0F172A] tracking-tight">
              Our Esteemed Clients
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light max-w-2xl mx-auto">
              Empowering premier Government institutions, defence research bodies, state PSUs, and market-leading private enterprises across India.
            </p>
          </div>
        </div>

        {/* Marquee Rows Wrapper */}
        <div className="space-y-12 relative">

          {/* ── ROW 1: GOVERNMENT & PUBLIC SECTOR CLIENTS ── */}
          <div>
            <div className="max-w-7xl mx-auto px-4 text-center mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Government, Academic &amp; Public Sector Enterprises
              </span>
            </div>

            <div className="w-full overflow-hidden relative flex mask-horizontal-fades py-3 group">
              <div
                className="flex animate-marquee-reverse whitespace-nowrap min-w-max group-hover:[animation-play-state:paused]"
                style={{ animationDuration: '65s' }}
              >
                {[...governmentClients, ...governmentClients, ...governmentClients].map((client, idx) => (
                  <div
                    key={`gov-${idx}`}
                    className="flex items-center justify-center mx-5 sm:mx-7 h-24 w-44 sm:w-56 shrink-0 bg-slate-50/90 rounded-2xl p-3 shadow-sm border border-slate-200/70 hover:scale-105 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300"
                    title={client.fullName}
                  >
                    <img
                      src={client.logo}
                      alt={client.fullName}
                      className={`max-h-16 sm:max-h-20 w-auto max-w-full object-contain transition-all duration-300 ${client.imgClass || ''}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── ROW 2: PRIVATE ENTERPRISES ── */}
          <div>
            <div className="max-w-7xl mx-auto px-4 text-center mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Private Enterprises &amp; Corporate Clients
              </span>
            </div>

            <div className="w-full overflow-hidden relative flex mask-horizontal-fades py-3 group">
              <div
                className="flex animate-marquee whitespace-nowrap min-w-max group-hover:[animation-play-state:paused]"
                style={{ animationDuration: '45s' }}
              >
                {[...privateClients, ...privateClients, ...privateClients, ...privateClients].map((client, idx) => (
                  <div
                    key={`pvt-${idx}`}
                    className="flex items-center justify-center mx-5 sm:mx-7 h-24 w-44 sm:w-56 shrink-0 bg-slate-50/90 rounded-2xl p-3 shadow-sm border border-slate-200/70 hover:scale-105 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300"
                    title={client.fullName}
                  >
                    <img
                      src={client.logo}
                      alt={client.fullName}
                      className={`max-h-16 sm:max-h-20 w-auto max-w-full object-contain transition-all duration-300 ${client.imgClass || ''}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── STANDALONE EMPANELMENT SECTION ── */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-500">
              Our Empanellments
            </span>
          </div>

          {/* Static Uniform Logo Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center max-w-5xl mx-auto">
            {empanelmentClients.map((client, idx) => (
              <div
                key={`emp-${idx}`}
                className="group relative w-full max-w-[240px] h-28 sm:h-32 bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center justify-center overflow-hidden shadow-sm transition-all duration-300 hover:border-sky-400 hover:shadow-lg hover:-translate-y-1"
                title={client.fullName}
              >
                {/* Glare effect sweep overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-10">
                  <div className="w-1/2 h-[220%] bg-gradient-to-r from-transparent via-white/60 to-transparent absolute -top-12 left-0 animate-glaze-loop" />
                </div>

                {/* Logo Container */}
                <div className="h-20 w-full flex items-center justify-center px-2 z-0 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-auto h-auto object-contain ${client.imgClass || 'max-h-14 sm:max-h-16 max-w-[82%]'}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 5.5 CERTIFICATIONS SECTION */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0EA5E9] text-white border-b border-sky-400/30">
        {/* Background Dot pattern overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-64 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_right,white_40%,transparent)] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-80 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_left,white_40%,transparent)] pointer-events-none" />

        {/* Dynamic diagonal gradient slash lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 bottom-0 left-[30%] w-[10%] bg-gradient-to-b from-white/15 via-white/5 to-transparent transform -skew-x-[24deg]"></div>
          <div className="absolute top-0 bottom-0 left-[42%] w-[14%] bg-gradient-to-b from-white/20 via-white/5 to-transparent transform -skew-x-[24deg]"></div>
          <div className="absolute top-0 bottom-0 left-[60%] w-[12%] bg-gradient-to-b from-white/15 via-white/5 to-transparent transform -skew-x-[24deg]"></div>
          <div className="absolute top-0 bottom-0 left-[75%] w-[8%] bg-gradient-to-b from-white/10 via-white/5 to-transparent transform -skew-x-[24deg]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Title / Left Block */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black font-display tracking-tight text-white"
              >
                Certifications
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sky-100 text-lg font-light max-w-xl"
              >
                Committed to delivering world-class IT services, quality management systems, and robust information security frameworks.
              </motion.p>
            </div>

            {/* Badges / Right Block */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { img: certIso9001, title: "ISO 9001" },
                { img: certIso20000, title: "ISO 20000" },
                { img: certIso27001, title: "ISO 27001" }
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.06,
                    boxShadow: '0 0 35px rgba(56, 189, 248, 0.4)',
                    borderColor: 'rgba(255, 255, 255, 0.8)'
                  }}
                  className="relative group bg-white border border-white/30 rounded-2xl p-2.5 flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 shadow-xl overflow-hidden cursor-pointer"
                >
                  {/* Glaze sheen sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-20">
                    <div className="w-1/2 h-[220%] bg-white/25 absolute -top-12 left-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-glaze-loop"></div>
                  </div>

                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-contain rounded-xl transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CTASection onNavigate={onNavigate} />
        </div>
      </section>

    </div>
  );
}

// ============================================================
// Solution Card Component - Modern Light Enterprise
// ============================================================
function SolutionCard({ icon, iconColor, title, description, bgImage, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, borderColor: 'rgba(14, 165, 233, 0.45)', boxShadow: '0 20px 30px -10px rgba(14, 165, 233, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.03)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer min-h-[260px] h-full shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Background Watermark Icon */}
      <div className={`absolute -bottom-8 -right-8 ${iconColor} opacity-[0.04] group-hover:opacity-[0.09] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 pointer-events-none z-0`}>
        {React.cloneElement(icon, { className: "w-40 h-40" })}
      </div>

      {/* Real Image Background */}
      {bgImage && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: isHovered ? 1.08 : 1,
            opacity: isHovered ? 0.05 : 0.02,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )}

      {/* Subtle hover gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-sky-50/40 z-0 pointer-events-none" />

      {/* Card content */}
      <div className="relative z-10 space-y-4">
        {/* Small Icon Badge */}
        <div className={`w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center ${iconColor} transition-transform duration-300 group-hover:scale-110`}>
          {React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>

        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-sky-600 transition-colors duration-300 font-display tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>

      {/* CTA / Learn More Link */}
      <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600 group-hover:text-sky-700">
        <span>Learn More</span>
        <motion.div
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Bottom Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sky-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
    </motion.div>
  );
}

// ============================================================
// CTA Section Component - Vibrant Sky Gradient
// ============================================================
function CTASection({ onNavigate }) {
  const glowRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '0px' });

  // Mouse glow
  const handleMouseMove = (e) => {
    if (!glowRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 175;
    const y = e.clientY - rect.top - 175;
    glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
    glowRef.current.style.opacity = '0.5';
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = '0';
  };

  const springHover = { type: 'spring', stiffness: 400, damping: 30 };

  return (
    <div
      ref={sectionRef}
      className="relative rounded-3xl overflow-hidden border border-sky-400/30 bg-gradient-to-br from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] text-white shadow-2xl shadow-sky-900/20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] z-0" />

      {/* Animated mesh orbs */}
      {isInView && (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div className="cta-orb cta-orb-1 opacity-40" />
          <div className="cta-orb cta-orb-2 opacity-30" />
          <div className="cta-orb cta-orb-3 opacity-40" />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
        </div>
      )}

      {/* Mouse-following glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none rounded-full z-0"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 68%)',
          top: 0,
          left: 0,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
          filter: 'blur(2px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-16 text-center flex flex-col items-center justify-center space-y-6 min-h-[340px]">

        {/* Badge + Heading + Body */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs font-semibold text-white uppercase tracking-wider backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            Enterprise Infrastructure Upgrade
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Ready to Upgrade Your IT{' '}
            <span className="text-white underline decoration-white/40 underline-offset-8">
              Infrastructure?
            </span>
          </h2>

          <p className="text-white/95 text-base sm:text-lg font-light leading-relaxed">
            Contact us today for a free consultation and discover how GL Tech Solutions can help your business grow with the right technology solutions.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 30px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.97 }}
            transition={springHover}
            className="bg-white text-[#0369A1] hover:bg-sky-50 font-bold px-8 py-4 rounded-xl cursor-pointer font-sans flex items-center justify-center gap-2 shadow-lg shadow-sky-950/20 transition-all"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-4 h-4 text-[#0369A1]" />
          </motion.button>

          <motion.button
            onClick={() => onNavigate('services')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={springHover}
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
          >
            <ArrowRight className="w-4 h-4 shrink-0 text-white" />
            <span>Explore Our Services</span>
          </motion.button>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/90 font-medium pt-3 border-t border-white/20 w-full max-w-lg"
        >
          <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-white" /><span>SLA-Backed</span></div>
          <div className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-white" /><span>Zero-Trust</span></div>
          <div className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-white" /><span>99.99% Uptime</span></div>
          <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-white" /><span>ISO Certified</span></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
