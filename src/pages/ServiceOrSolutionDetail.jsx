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

// Dedicated High-Resolution Service Assets
import itInfrastructureLedImg from '../assets/services/it-infrastructure-led.jpg';
import cloudInfrastructureImg from '../assets/services/cloud-infrastructure.jpg';
import businessProcessImg from '../assets/services/business-process.jpg';
import enterpriseErpImg from '../assets/services/enterprise-erp.jpg';
import desktopIntegrationImg from '../assets/services/desktop-integration.jpg';
import softwareDevelopmentImg from '../assets/services/software-development.jpg';

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
    image: softwareDevelopmentImg
  },
  'business-process': {
    category: "GL Tech Services",
    title: "Business Process Management & Automation",
    tagline: "Operational Mapping, Workflow Orchestration & RPA Engines",
    icon: <Sliders className="w-8 h-8 text-cyan-600" />,
    desc: "Streamline daily business tasks, eliminate procedural bottlenecks, and improve operational transparency. We analyze workflows to engineer automated software routing paths, approval chains, and robotic data synchronization that eliminate human error and manual delays.",
    features: [
      "Enterprise workflow auditing and logical process mapping",
      "Automated multi-tier notification rules (Email, SMS, Webhooks)",
      "Electronic document filing structures and paperless approval chains",
      "Employee timesheet tracking, task queues, and SLA compliance alerts",
      "Robotic Process Automation (RPA) for repetitive cross-database entries",
      "Integrated analytics dashboards showing operational cycle times"
    ],
    techStack: "BPMN 2.0, Camunda, UiPath, Python Automation, Custom Webhooks, Node.js",
    image: businessProcessImg,
    slaDescription: "We deliver 99.9% uptime on automation runners, with real-time exception handling and automatic fallback triggers to guarantee smooth corporate operations.",
    keyFeatures: [
      { title: "Intelligent Workflow Orchestration", description: "Automate complex approval hierarchies, status handoffs, and notifications across department silos." },
      { title: "Robotic Process Automation (RPA)", description: "Deploy software bots for repetitive data reconciliation, document processing, and bulk transactional logging." },
      { title: "Paperless Operations & Archiving", description: "Digitize document intake with OCR indexing, cryptographic signatures, and audit-ready versioning." },
      { title: "Real-Time Operational Telemetry", description: "Monitor department bottlenecks, queue depths, and turnaround times with interactive executive dashboards." }
    ],
    benefits: [
      "Up to 60% reduction in manual data processing time",
      "Elimination of repetitive human entry errors",
      "Transparent visibility into enterprise task progression",
      "Faster service turnaround for internal and external customers",
      "Strict auditability and compliance readiness across all workflows"
    ],
    supportMaintenance: "Continuous monitoring of automation queues, workflow script maintenance, API endpoint updates, and priority incident mitigation.",
    whyChooseUs: [
      "Deep experience integrating enterprise ERPs with legacy workflows",
      "Certified automation and process engineering architects",
      "Rapid prototyping with phased milestone deployments",
      "End-to-end user training and operational runbook handover"
    ]
  },
  'digital-enterprise': {
    category: "GL Tech Services",
    title: "Digital Enterprise ERP Applications",
    tagline: "Unified ERP Implementation, Customization & Supply Chain Sync",
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    desc: "Consolidate inventory pools, customer records, accounting books, supply chain logistics, and HR operations under a unified enterprise database. We specialize in configuring, deploying, and supporting modular ERP environments that scale with business expansion.",
    features: [
      "ERP software architecture, database provisioning, and security hardening",
      "Multi-warehouse inventory management with barcode and RFID sync",
      "Integrated financial accounting, automated purchase orders, and tax audits",
      "CRM portal integration mapping customer interactions and support pipelines",
      "Role-Based Access Control (RBAC) and data isolation compliance"
    ],
    techStack: "SAP, Oracle NetSuite, Odoo Enterprise, PostgreSQL, REST APIs",
    image: enterpriseErpImg,
    slaDescription: "High-availability ERP hosting, automated incremental backups every 4 hours, and rigorous disaster recovery protocols.",
    keyFeatures: [
      { title: "Centralized Enterprise Data", description: "Eliminate data silos by uniting sales, inventory, procurement, finance, and human resources in one coherent database." },
      { title: "Real-Time Supply Chain Tracking", description: "Track stock levels, purchase orders, shipments, and vendor fulfillment with live automated re-order thresholds." },
      { title: "Automated Financial & Tax Auditing", description: "Ensure compliance with automated ledger reconciliations, invoice verification, and audit logs." },
      { title: "Custom Executive Dashboards", description: "Visualize KPIs, revenue projections, and operational performance with custom interactive dashboards." }
    ],
    benefits: [
      "Complete single-pane visibility across all business units",
      "Optimized inventory carrying costs and stock-out prevention",
      "Accelerated financial closing and audit compliance cycles",
      "Scalable architecture prepared for cross-branch enterprise growth"
    ],
    supportMaintenance: "Dedicated ERP database administration, patch management, security vulnerability remediation, and scheduled off-peak schema updates.",
    whyChooseUs: [
      "Proven experience in enterprise ERP rollout for commercial & public sectors",
      "Zero-data-loss migration pipelines from legacy accounting systems",
      "Tailored modules engineered specifically to client operational needs",
      "Comprehensive user training and post-deployment support SLAs"
    ]
  },

  // GL TECH SERVICES
  'desktop-integration': {
    category: "GL Tech Services",
    title: "Desktop Integration",
    tagline: "A Unified Digital Workplace for Productive, Secure Teams",
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    desc: "Our Desktop Integration Services connect employee workstations, enterprise applications, and IT infrastructure into a unified digital workplace. We ensure seamless deployment, secure configuration, centralized management, and ongoing support, enabling organizations to maintain productivity, compliance, and operational efficiency across all business units.",
    features: [
      "Workstation deployment and configuration",
      "Operating system installation, migration, and updates",
      "Enterprise software installation and lifecycle management",
      "User account provisioning and access management",
      "Desktop security implementation and endpoint protection",
      "Device inventory tracking and asset management",
      "Printer, scanner, and peripheral integration",
      "Remote desktop and VPN configuration",
      "Active Directory and domain integration",
      "Data backup and recovery configuration"
    ],
    techStack: "Windows, Microsoft 365, Endpoint Management, Active Directory",
    image: desktopIntegrationImg,
    slaDescription: "Our desktop integration solutions streamline device management, improve system reliability, and reduce operational disruptions through proactive monitoring and standardized deployment practices.",
    keyFeatures: [
      { title: "Centralized Device Management", description: "Manage all desktop systems through a unified administrative framework, ensuring consistency and compliance across the organization." },
      { title: "Secure Endpoint Protection", description: "Implement enterprise-grade antivirus, firewall, encryption, and security policies to safeguard business-critical data." },
      { title: "Automated Software Deployment", description: "Reduce manual effort through automated application installation, updates, and patch management processes." },
      { title: "User Access Control", description: "Configure role-based access permissions and authentication mechanisms to maintain secure access to corporate resources." },
      { title: "Remote Workforce Enablement", description: "Support hybrid and remote employees with secure VPN connectivity, remote assistance, and collaboration tool integration." }
    ],
    benefits: [
      "Improved employee productivity",
      "Reduced IT support overhead",
      "Faster onboarding and device provisioning",
      "Enhanced security and compliance",
      "Minimized downtime and operational disruptions",
      "Standardized desktop environments across locations",
      "Better visibility into IT assets and system health"
    ],
    supportMaintenance: "Our team provides continuous monitoring, troubleshooting, and maintenance services to ensure your desktop infrastructure remains secure, updated, and fully operational. We offer SLA-driven support with rapid incident response and proactive system health checks.",
    whyChooseUs: [
      "Experienced desktop infrastructure specialists",
      "Enterprise-grade deployment methodologies",
      "Secure and compliant implementation practices",
      "Scalable solutions for growing organizations",
      "Dedicated technical support and ongoing optimization",
      "Proven expertise in modern workplace technologies"
    ]
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
    image: fiberNetwork,
    slaDescription: "We plan, deploy, and monitor resilient wired and wireless networks with documented configurations, performance baselines, and responsive incident support.",
    keyFeatures: [
      { title: "Structured Network Design", description: "Create scalable LAN, WAN, wireless, and branch network architectures aligned to your users, applications, and sites." },
      { title: "Secure Connectivity", description: "Segment traffic, protect remote access, and apply practical security policies across wired, wireless, and VPN connections." },
      { title: "Performance Monitoring", description: "Track availability, capacity, latency, and device health so issues are identified before they disrupt operations." },
      { title: "Business Continuity", description: "Build resilient links and documented recovery procedures to keep critical communication available." }
    ],
    benefits: ["Reliable connectivity across locations", "Faster issue detection and resolution", "Secure access for office and remote users", "Scalable infrastructure for growth", "Clear network visibility and documentation"],
    supportMaintenance: "Our network team provides configuration backups, health checks, troubleshooting, firmware planning, and SLA-driven response for business-critical connectivity.",
    whyChooseUs: ["Certified network engineering experience", "Vendor-neutral architecture recommendations", "Security-first implementation practices", "Clear documentation and handover", "Ongoing monitoring and optimization"]
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
    image: securitySolutionsImg,
    slaDescription: "We strengthen the security perimeter through layered controls, policy reviews, endpoint protection, and continuous attention to emerging operational risks.",
    keyFeatures: [
      { title: "Layered Threat Protection", description: "Combine firewall, endpoint, access, and encryption controls to reduce exposure across the technology environment." },
      { title: "Security Policy Management", description: "Translate business requirements into maintainable access, filtering, authentication, and incident response policies." },
      { title: "Audit-Ready Visibility", description: "Centralize logs and configuration records to support investigations, compliance reviews, and informed risk decisions." },
      { title: "Incident Preparedness", description: "Prepare response procedures and recovery actions that help contain threats and restore normal operations quickly." }
    ],
    benefits: ["Reduced security exposure", "Improved compliance readiness", "Faster incident response", "Protected users and business data", "Consistent security controls across sites"],
    supportMaintenance: "We provide rule reviews, endpoint health checks, signature and firmware updates, alert triage, and practical recommendations as your environment changes.",
    whyChooseUs: ["Security-focused technical specialists", "Practical controls aligned to business risk", "Vendor and platform integration expertise", "Documented implementation and support", "Proactive review of security posture"]
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
    image: surveillanceSolutionsImg,
    slaDescription: "Our surveillance deployments combine clear coverage planning, reliable recording, controlled access, and remote visibility to support safer premises.",
    keyFeatures: [
      { title: "Coverage-Led Design", description: "Plan camera positions, lenses, lighting, and retention requirements around actual site risks and operating conditions." },
      { title: "Centralized Video Management", description: "Manage live views, recordings, user permissions, and incident exports through a consistent video platform." },
      { title: "Remote Visibility", description: "Give authorized teams secure access to alerts and footage across locations without compromising control." },
      { title: "Integrated Site Security", description: "Connect surveillance with access control, alarms, and monitoring workflows for a coordinated response." }
    ],
    benefits: ["Improved site visibility", "Faster incident investigation", "Secure evidence retention", "Remote monitoring across locations", "Better coordination with access control"],
    supportMaintenance: "We support camera health checks, storage reviews, firmware updates, recording verification, user access management, and system troubleshooting.",
    whyChooseUs: ["Experience across commercial and institutional sites", "Coverage and retention planning before installation", "Secure remote access configuration", "Documented camera and network layouts", "Responsive maintenance support"]
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
    image: serverStorageImg,
    slaDescription: "We build dependable data platforms with resilient storage, tested backup routines, and documented recovery paths for critical business workloads.",
    keyFeatures: [
      { title: "Resilient Storage Architecture", description: "Design storage platforms around capacity, performance, redundancy, retention, and future growth requirements." },
      { title: "Backup & Recovery Readiness", description: "Configure protected backups and recovery procedures that are tested, documented, and aligned with business priorities." },
      { title: "Virtualized Infrastructure", description: "Consolidate workloads and improve resource utilization with stable, manageable virtualization platforms." },
      { title: "Capacity Visibility", description: "Monitor health, utilization, and growth trends so storage decisions remain predictable and proactive." }
    ],
    benefits: ["Improved data availability", "Lower risk of data loss", "Predictable storage growth", "Faster recovery from incidents", "Better infrastructure visibility"],
    supportMaintenance: "Our team provides storage health checks, backup verification, capacity reviews, patch planning, and recovery support under a clear maintenance process.",
    whyChooseUs: ["Experience with enterprise storage platforms", "Recovery-focused architecture planning", "Documented backup and restore procedures", "Scalable designs for growing workloads", "Ongoing health and capacity monitoring"]
  },
  'cloud-solutions': {
    category: "GL Tech Services",
    title: "Managed Cloud Infrastructure & Hybrid Hosting",
    tagline: "Secure Multi-Cloud Architecture, Virtual Compute & DevOps Pipelines",
    icon: <Server className="w-8 h-8 text-cyan-600" />,
    desc: "Bridge on-premise datacenter capabilities with high-security public cloud infrastructure. We design, migrate, and manage hybrid cloud workloads across AWS, Microsoft Azure, and private clouds, providing elastic scalability, automated disaster recovery, and cost-optimized compute resources.",
    features: [
      "Virtual Private Cloud (VPC) topology design, security groups, and transit gateways",
      "Automated cloud database scaling, replication, and cross-region failover",
      "Kubernetes container orchestration and Infrastructure-as-Code (IaC) pipelines",
      "Direct cloud interconnects (AWS Direct Connect / Azure ExpressRoute) for low latency",
      "Continuous cloud security posture management (CSPM) and cost optimization audits"
    ],
    techStack: "AWS, Microsoft Azure, Google Cloud, Terraform, Kubernetes, Docker",
    image: cloudInfrastructureImg,
    slaDescription: "SLA-backed cloud availability with 99.99% uptime guarantees, continuous automated health checks, and rapid incident triage.",
    keyFeatures: [
      { title: "Hybrid Cloud Connectivity", description: "Seamlessly interconnect on-premise blade servers with public cloud VPCs via encrypted, high-throughput tunnels." },
      { title: "Automated Elastic Scaling", description: "Auto-scale server clusters dynamically to meet transaction spikes without incurring idle infrastructure expenses." },
      { title: "Zero-Downtime Migration", description: "Carefully staged database and virtual machine migration pipelines ensuring continuous operational availability." },
      { title: "Cloud FinOps & Governance", description: "Rigorous cost allocation, idle resource cleanup, and reserved capacity planning to optimize cloud spend." }
    ],
    benefits: [
      "Instant scalability to meet fluctuating enterprise computational demands",
      "Reduced total cost of ownership through continuous FinOps optimization",
      "Enterprise-grade disaster recovery across geographically distinct zones",
      "Faster time-to-market for new digital applications and microservices"
    ],
    supportMaintenance: "24/7 cloud environment surveillance, automated vulnerability scanning, snapshot verification, and cost analysis reporting.",
    whyChooseUs: [
      "Certified AWS and Microsoft Azure cloud architects",
      "Proven track record in secure government and enterprise hybrid deployments",
      "Comprehensive security-first implementation aligning with ISO standards",
      "Tailored migration roadmaps designed to eliminate business disruption"
    ]
  },
  'it-infrastructure-led': {
    category: "GL Tech Services",
    title: "IT Infrastructure Led Services",
    tagline: "High-Availability Datacenter, Server & Managed IT Operations",
    icon: <Server className="w-8 h-8 text-sky-600" />,
    desc: "Our IT Infrastructure Led Services deliver resilient, high-performance foundations for modern enterprises. From mission-critical datacenter design and bare-metal server cluster deployments to proactive 24/7 infrastructure monitoring and disaster recovery, we ensure your operational backbone never sleeps.",
    features: [
      "Enterprise datacenter rack architecture, hot/cold aisle cooling design, and power distribution (PDU)",
      "Bare-metal and virtualized server clustering (VMware vSphere, Microsoft Hyper-V, Proxmox)",
      "24/7/365 proactive infrastructure telemetry monitoring (CPU, RAM, IOPS, Network Latency)",
      "Enterprise storage area networks (SAN) and high-density NAS array deployment",
      "Automated immutable snapshot backups and disaster recovery replication",
      "Operating system lifecycle, automated patch orchestration, and firmware updates"
    ],
    techStack: "Dell PowerEdge, HPE ProLiant, Cisco UCS, VMware vSphere, Veeam, Zabbix",
    image: itInfrastructureLedImg,
    slaDescription: "Guaranteed 99.99% infrastructure uptime with 15-minute emergency response SLAs for critical tier-1 outages, supported by our round-the-clock engineering team.",
    keyFeatures: [
      { title: "High-Availability Server Clusters", description: "Redundant compute nodes configured with automated failover to eliminate single points of failure across critical services." },
      { title: "Proactive 24/7 NOC Monitoring", description: "Real-time telemetry tracking hardware health, thermal metrics, disk degradation, and bandwidth spikes before outages occur." },
      { title: "Resilient Storage & Backup Architectures", description: "Multi-tier enterprise SAN/NAS configurations with immutable ransomware-protected backup pipelines." },
      { title: "Lifecycle & Security Hardening", description: "Scheduled firmware baselines, OS patch distribution, and CIS-benchmark configuration audits." }
    ],
    benefits: [
      "Maximized uptime and business continuity for critical applications",
      "Predictable infrastructure performance under demanding workloads",
      "Reduced capital overhead through optimized resource virtualization",
      "Rapid disaster recovery with audited Recovery Time Objectives (RTO)",
      "Peace of mind with 24/7/365 certified technical supervision"
    ],
    supportMaintenance: "Round-the-clock Network Operations Center (NOC) surveillance, preventive on-site hardware inspections, firmware patch scheduling, and rapid hardware swap-out warranties.",
    whyChooseUs: [
      "Certified enterprise infrastructure engineers and system architects",
      "Tier-3 and Tier-4 datacenter deployment experience",
      "Strict SLA commitments with documented escalation matrices",
      "Vendor-agnostic hardware recommendations tailored to budget and scale"
    ]
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
  const rawId = (detailId || '').toLowerCase().trim();
  const aliasMap = {
    'software-development': 'it-applications',
    'it-applications-software-development': 'it-applications',
    'it-infrastructure': 'it-infrastructure-led',
    'it-infrastructure-led-services': 'it-infrastructure-led',
    'business-process-management-automation': 'business-process',
    'business-process-management-&-automation': 'business-process',
    'digital-enterprise-erp-applications': 'digital-enterprise',
    'enterprise-erp': 'digital-enterprise',
    'cloud-infrastructure': 'cloud-solutions',
    'cloud-infrastructure-solutions': 'cloud-solutions',
  };
  const resolvedId = aliasMap[rawId] || rawId;
  const currentData = detailsData[resolvedId] || detailsData[detailId];

  if (resolvedId === 'it-applications') {
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

            {currentData.slaDescription && (
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <h3 className="text-base font-bold font-display text-brand-dark mb-2">SLA Audited Operations</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">{currentData.slaDescription}</p>
              </div>
            )}

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

            {currentData.keyFeatures && (
              <div className="space-y-5 pt-2">
                <h3 className="text-base font-bold font-display text-brand-dark border-l-4 border-blue-500 pl-3">Key Features</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {currentData.keyFeatures.map((feature) => (
                    <div key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h4 className="font-bold text-brand-dark">{feature.title}</h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentData.benefits && (
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold font-display text-brand-dark border-l-4 border-blue-500 pl-3">Business Benefits</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {currentData.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentData.supportMaintenance && (
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold font-display text-brand-dark border-l-4 border-blue-500 pl-3">Support & Maintenance</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">{currentData.supportMaintenance}</p>
              </div>
            )}

            {currentData.whyChooseUs && (
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold font-display text-brand-dark border-l-4 border-blue-500 pl-3">Why Choose GL Tech Services?</h3>
                <ul className="space-y-3">
                  {currentData.whyChooseUs.map((reason) => (
                    <li key={reason} className="flex gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">Service snapshot</span>
                  <h3 className="mt-2 text-xl font-bold font-display text-brand-dark">Built around your operation</h3>
                </div>
                <div className="rounded-2xl bg-blue-50 p-3">{currentData.icon}</div>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Category</span>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{currentData.category}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Technology ecosystem</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {currentData.techStack.split(', ').map((technology) => (
                      <span key={technology} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">{technology}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Delivery approach</span>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    {['Assess', 'Deploy', 'Support'].map((stage, index) => (
                      <div key={stage} className="rounded-xl bg-slate-50 px-2 py-3">
                        <span className="block text-xs font-bold text-blue-600">0{index + 1}</span>
                        <span className="mt-1 block text-[11px] font-semibold text-slate-600">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-7"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">What you can expect</span>
              <ul className="mt-4 space-y-3">
                {(currentData.benefits || currentData.features).slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:business@globx.co.in"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
              >
                Discuss this service
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Ongoing care</span>
                  <h3 className="mt-2 text-lg font-bold font-display text-brand-dark">Support coverage</h3>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {currentData.supportMaintenance || 'Our technical team provides monitoring, troubleshooting, maintenance, and responsive support to keep your environment reliable.'}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5 text-center">
                <div>
                  <span className="block text-sm font-bold text-blue-600">24/7</span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">Monitoring</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-blue-600">SLA</span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">Response</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-blue-600">Pro</span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">Guidance</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </motion.div>
  );
}
