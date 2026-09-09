import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Users, 
  Database, 
  ShieldCheck, 
  Activity, 
  MessageSquare, 
  TrendingUp, 
  Plus, 
  ArrowRight, 
  Send, 
  Check, 
  CheckSquare, 
  Shield,
  Search,
  Bell,
  Clock,
  Server,
  Filter,
  RefreshCw,
  BarChart3,
  AlertCircle
} from 'lucide-react';

// White-Themed Demo Professional Enterprise Dashboard Viewport Component
function WhiteThemeDashboardPreview() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans rounded-xl border border-slate-200 overflow-hidden shadow-inner text-left select-none">
      
      {/* 1. Top Navigation / Header Bar */}
      <div className="bg-white border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          </div>
          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-2 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg text-[10px] text-slate-500 w-44">
            <Search className="w-3 h-3 text-slate-400" />
            <span>Search tickets, serials...</span>
          </div>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="hidden md:inline">NOC STATUS:</span> ONLINE (99.98%)
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Bell className="w-3.5 h-3.5 text-slate-500" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            </div>
            <div className="w-6 h-6 rounded-full bg-[#0052CC] text-white flex items-center justify-center text-[10px] font-bold">
              DP
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Workspace Grid */}
      <div className="flex min-h-[380px] sm:min-h-[420px]">
        
        {/* Left Mini Rail Navigation */}
        <div className="w-12 bg-white border-r border-slate-200/80 py-3 flex flex-col items-center gap-4 text-slate-400 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Activity className="w-4 h-4" />
          </div>
          <Layers className="w-4 h-4 hover:text-slate-700 cursor-pointer" />
          <Database className="w-4 h-4 hover:text-slate-700 cursor-pointer" />
          <Users className="w-4 h-4 hover:text-slate-700 cursor-pointer" />
          <BarChart3 className="w-4 h-4 hover:text-slate-700 cursor-pointer" />
          <ShieldCheck className="w-4 h-4 hover:text-slate-700 cursor-pointer mt-auto" />
        </div>

        {/* Right Dashboard Content */}
        <div className="flex-1 p-4 space-y-4 bg-[#f8fafc] overflow-hidden">
          
          {/* Top Stat Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-white border border-slate-200/80 p-3 rounded-xl shadow-2xs space-y-1">
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                <span>ACTIVE TICKETS</span>
                <span className="text-emerald-600 font-bold">+12%</span>
              </div>
              <div className="text-lg font-extrabold text-slate-900 font-display">1,284</div>
              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[78%]"></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 p-3 rounded-xl shadow-2xs space-y-1">
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                <span>SLA RESPONSE</span>
                <span className="text-blue-600 font-bold">99.8%</span>
              </div>
              <div className="text-lg font-extrabold text-slate-900 font-display">14.2m</div>
              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[94%]"></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 p-3 rounded-xl shadow-2xs space-y-1">
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                <span>NODES TRACKED</span>
                <span className="text-indigo-600 font-bold">4,850</span>
              </div>
              <div className="text-lg font-extrabold text-slate-900 font-display">99.9%</div>
              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[98%]"></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 p-3 rounded-xl shadow-2xs space-y-1">
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                <span>CRITICAL ALERTS</span>
                <span className="text-rose-600 font-bold">2 Active</span>
              </div>
              <div className="text-lg font-extrabold text-rose-600 font-display">0 Breaches</div>
              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[15%]"></div>
              </div>
            </div>
          </div>

          {/* Lower Split Layout: Live Ticket Table & Mini Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Live Queue Table */}
            <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs space-y-3">
              <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  <span>Real-Time Support Incident Stream</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                  <Filter className="w-3 h-3" />
                  <span>All Priority</span>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-2 text-[10px]">
                {[
                  { id: "TKT-904", title: "Bhubaneswar Datacenter Loop Latency", client: "NALCO", pri: "HIGH", status: "IN PROGRESS", time: "03:42m", color: "bg-amber-50 text-amber-700 border-amber-200" },
                  { id: "TKT-903", title: "High Court Optical WAN Node Config", client: "Odisha HC", pri: "CRITICAL", status: "ASSIGNED", time: "11:15m", color: "bg-blue-50 text-blue-700 border-blue-200" },
                  { id: "TKT-901", title: "OCAC Gateway Firewall Rule Update", client: "OCAC", pri: "MEDIUM", status: "RESOLVED", time: "Closed", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                  { id: "TKT-899", title: "IndianOil Terminal Storage Sync", client: "IndianOil", pri: "LOW", status: "RESOLVED", time: "Closed", color: "bg-emerald-50 text-emerald-700 border-emerald-200" }
                ].map((row) => (
                  <div key={row.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-blue-50/40 transition-colors">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded shrink-0">{row.id}</span>
                      <span className="font-semibold text-slate-800 truncate">{row.title}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-slate-400 hidden sm:inline">{row.client}</span>
                      <span className={`px-2 py-0.5 rounded font-bold uppercase ${row.color}`}>{row.status}</span>
                      <span className="font-mono text-slate-500 hidden md:inline">{row.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Mini SLA Velocity Graph & Log Feed */}
            <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-900 border-b border-slate-100 pb-2 mb-2">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Resolution Velocity</span>
                  </span>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold">+18.4%</span>
                </div>

                {/* SVG Mini Wave Chart */}
                <div className="h-16 w-full pt-1">
                  <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0052CC" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0052CC" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,35 Q30,15 60,30 T120,10 T180,25 T200,8 L200,50 L0,50 Z" fill="url(#chartGrad)" />
                    <path d="M0,35 Q30,15 60,30 T120,10 T180,25 T200,8" fill="none" stroke="#0052CC" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>

              {/* Real-time System Ping Footer */}
              <div className="p-2 bg-slate-50 border border-slate-200/60 rounded-lg text-[9px] text-slate-500 font-mono space-y-1">
                <div className="flex items-center justify-between text-slate-700 font-bold">
                  <span>AUDIT DISPATCHER</span>
                  <span className="text-blue-600">LIVE SYNC</span>
                </div>
                <div className="truncate text-slate-600">⚡ Auto-routed TKT-904 to Debasish P.</div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default function OneDesk() {
  const [activeTab, setActiveTab] = useState('ticket');
  const [activeRole, setActiveRole] = useState('manager');
  
  // Interactive Simulator States
  const [simTickets, setSimTickets] = useState([
    { id: "TKT-492", title: "Enterprise Database Connection Timeout", client: "NALCO", priority: "HIGH", status: "OPEN", assignedTo: "Debasish P." },
    { id: "TKT-491", title: "Optical Loop Latency Issue", client: "High Court of Odisha", priority: "HIGH", status: "ASSIGNED", assignedTo: "Ranjan Dash" },
    { id: "TKT-489", title: "Request for Secondary WAN Port Setup", client: "OCAC", priority: "MEDIUM", status: "RESOLVED", assignedTo: "Subhadip Roy" },
    { id: "TKT-485", title: "Account Portal Access Glitch", client: "IndianOil", priority: "LOW", status: "RESOLVED", assignedTo: "Lipsa Tripathy" }
  ]);
  
  const [newTicketTitle, setNewTicketTitle] = useState("");
  const [newTicketClient, setNewTicketClient] = useState("OCAC");
  const [newTicketPriority, setNewTicketPriority] = useState("HIGH");
  
  // Simulated Toast Notification
  const [toast, setToast] = useState(null);

  const triggerToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 4000);
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newTicketTitle.trim()) return;

    const newId = `TKT-${Math.floor(100 + Math.random() * 900)}`;
    const newTkt = {
      id: newId,
      title: newTicketTitle,
      client: newTicketClient,
      priority: newTicketPriority,
      status: "OPEN",
      assignedTo: "Unassigned"
    };

    setSimTickets([newTkt, ...simTickets]);
    setNewTicketTitle("");
    triggerToast(`✨ [WebSocket] New Ticket Raised: ${newId} - "${newTicketTitle}"`);
    
    // Auto-assignment simulation after 3 seconds
    setTimeout(() => {
      setSimTickets(prev => prev.map(t => {
        if (t.id === newId) {
          triggerToast(`⚡ [OneDesk Smart Assignment] ${newId} automatically routed to engineer: Debasish P.`);
          return { ...t, status: "ASSIGNED", assignedTo: "Debasish P." };
        }
        return t;
      }));
    }, 3000);
  };

  const handleUpdateStatus = (id, nextStatus) => {
    setSimTickets(prev => prev.map(t => {
      if (t.id === id) {
        triggerToast(`📝 Ticket ${id} updated to ${nextStatus}`);
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const tabs = {
    ticket: {
      title: "Intelligent Ticket Management",
      badge: "Automation Core",
      icon: <Layers className="w-5 h-5" />,
      features: [
        { title: "Multi-Channel Support", desc: "Consolidate and capture inbound service requests from phone calls, corporate emails, and web forms into a single unified grid." },
        { title: "Smart Auto-Routing", desc: "Uses automated triage logic to assign tickets instantly to certified engineers based on product category, workload, and location." },
        { title: "Priority-Based SLA Workflows", desc: "Differentiate urgent outages from routine maintenance with strict High/Medium/Low thresholds linked to contract targets." },
        { title: "Real-Time Tracking Matrix", desc: "Monitor lifecycle transitions from OPEN, to ASSIGNED, IN PROGRESS, ON TRIAL, and RESOLVED with automated alert triggers." }
      ]
    },
    task: {
      title: "Powerful Task Management",
      badge: "Work Breakdown",
      icon: <CheckSquare className="w-5 h-5" />,
      features: [
        { title: "Linked Sub-Tasks", desc: "Break down complex support operations (such as server rack migration) into trackable sub-tasks with discrete checklists." },
        { title: "Smart Load Balancing", desc: "Distribute workloads efficiently across local field technicians and network operations center (NOC) teams." },
        { title: "Due Date Tracker Alerts", desc: "Prevent SLA breaches with built-in timing reminders, color-coded countdown indicators, and email warning pings." },
        { title: "Interactive Progress Audit", desc: "Track tasks in real-time from 'Not Started' to 'Completed' with instant engineer completion logs and signature tags." }
      ]
    },
    account: {
      title: "Account & Contact Management",
      badge: "Unified Database",
      icon: <Users className="w-5 h-5" />,
      features: [
        { title: "Centralized Customer CRM", desc: "Keep all client organization profiles, locations, active contract dates, and billing metrics consolidated in one secure vault." },
        { title: "Account Hierarchies", desc: "Map multiple contact individuals, secondary site administrators, and operations heads under a single parent enterprise profile." },
        { title: "Self-Service Client Portal", desc: "Enable clients to submit tickets, upload site photographs, track engineer dispatch locations, and read diagnostics report logs." },
        { title: "Designation Grouping", desc: "Organize contacts by corporate roles and responsibilities to streamline emergency notification routing." }
      ]
    },
    product: {
      title: "Advanced Product Tracking",
      badge: "Asset Matrix",
      icon: <Database className="w-5 h-5" />,
      features: [
        { title: "Universal Product Catalog", desc: "Log networking switches, database cores, server stacks, and software licenses, complete with OEM warranties." },
        { title: "Granular Issue Tagging", desc: "Group service tickets under specific categories (e.g., WAN Outage, Database Query Lag) to identify structural weaknesses." },
        { title: "Product-Specific Ticket Links", desc: "Link diagnostic details directly to a physical hardware serial number or license key to track individual node lifespans." },
        { title: "Recursive Historical Logs", desc: "Instantly view past ticket trends on a specific device to identify chronic hardware fatigue or cable faults." }
      ]
    },
    collaboration: {
      title: "Real-Time Collaboration",
      badge: "Team Sync",
      icon: <MessageSquare className="w-5 h-5" />,
      features: [
        { title: "Live WebSocket Alerts", desc: "Receive immediate screen updates, system assignment popups, and ticket progress pings without page refreshes." },
        { title: "Activity Feeds Audit Trail", desc: "Read a live-scrolling timeline logging every note, state change, device replacement, and assignment update." },
        { title: "Direct Attachment Vault", desc: "Upload and attach configuration files, terminal trace logs, speed test captures, and site wiring diagrams directly." },
        { title: "Internal Team Notes", desc: "Write private system notes visible only to engineers and managers to brainstorm solutions without alerting clients." }
      ]
    },
    audit: {
      title: "Comprehensive Audit Logging",
      badge: "Security & Compliance",
      icon: <ShieldCheck className="w-5 h-5" />,
      features: [
        { title: "Tamper-Resistant Audit Trail", desc: "Log every user action, status modification, configuration note, and database query in a read-only historical record." },
        { title: "ISO & SLA Compliance Ready", desc: "Meet strict corporate and public sector SLA auditing standards with exportable CSV/PDF compliance records." },
        { title: "User Activity Mapping", desc: "Precisely trace who resolved a ticket, who authorized a spares shipment, and when a task checklist was checked." },
        { title: "Relentless Data Integrity", desc: "Protect client SLA reports and service timelines with strict cryptographic validation of system transaction records." }
      ]
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] text-[#091E42] font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* simulated WebSocket Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-md bg-[#091E42] text-white px-5 py-4 rounded-2xl shadow-2xl border border-blue-400/30 flex items-center gap-3.5"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
            <span className="text-xs font-mono tracking-tight leading-relaxed">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION WITH BLUISH ENTERPRISE THEME & SKEWED WHITE DEMO DASHBOARD */}
      <section className="relative bg-gradient-to-br from-[#091E42] via-[#0d2a5c] to-[#04122c] text-white pt-20 pb-28 sm:pt-24 sm:pb-36 overflow-hidden">
        {/* Decorative Ambient Grid & Soft Blue Radial Glows */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-10 w-[500px] h-[500px] bg-[#00B8D9]/15 rounded-full blur-[130px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Description */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.08] text-white">
                Transform Your <br />
                Customer Support <br />
                with <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">OneDesk</span>
              </h1>
              
              <p className="text-slate-300 text-lg font-light leading-relaxed max-w-xl">
                A unified, audit-ready support operations console. By bridging centralized account hierarchies, advanced hardware product tracking, and multi-channel ticketing, OneDesk guarantees rapid resolution, live team sync, and bulletproof SLA compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2, boxShadow: '0 12px 30px rgba(0, 184, 217, 0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  href="#onedesk-simulator"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold bg-[#00B8D9] text-[#091E42] cursor-pointer shadow-lg hover:bg-[#00cbe9] transition-colors text-sm"
                >
                  Launch Simulator
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#onedesk-capabilities"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold bg-white/10 border border-white/20 text-white cursor-pointer hover:bg-white/15 transition-all text-sm backdrop-blur-sm"
                >
                  Explore Capabilities
                </motion.a>
              </div>
            </motion.div>
            
            {/* Right Hero Preview: 3D Skewed Perspective Container with Pure Code White-Themed Dashboard */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -16, rotateX: 8, scale: 0.94 }}
              animate={{ opacity: 1, rotateY: -10, rotateX: 5, scale: 1 }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative [perspective:1200px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Outer Cyan/Blue Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-[28px] blur-2xl opacity-35 animate-pulse"></div>
              
              {/* White Device Browser Frame with 3D Skew */}
              <div className="relative bg-white rounded-[24px] p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md">
                
                {/* Embedded White Theme Professional Live Dashboard */}
                <WhiteThemeDashboardPreview />

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TABBED CORE FUNCTIONALITY SHOWCASE */}
      <section id="onedesk-capabilities" className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0052CC] bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">Product Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              A Comprehensive Customer Support Ecosystem
            </h2>
            <p className="text-slate-500 font-light text-base leading-relaxed">
              Explore the critical architectural segments designed to optimize ticketing volume, ensure accountability, and keep enterprise engineering workflows running at peak performance.
            </p>
          </div>

          {/* Desktop/Tablet Horizontal Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {Object.keys(tabs).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  activeTab === tabKey 
                    ? 'bg-[#0052CC] text-white border-[#0052CC] shadow-md shadow-blue-500/20' 
                    : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tabs[tabKey].icon}
                <span>{tabs[tabKey].title}</span>
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                
                {/* Left explanation text */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-800 uppercase tracking-wider">
                    {tabs[activeTab].badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                    {tabs[activeTab].title}
                  </h3>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">
                    Designed to maintain deep historical visibility, improve response compliance margins, and empower cross-team collaboration for complex IT operations.
                  </p>
                  
                  <div className="h-px bg-slate-200 w-full my-4"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                      {tabs[activeTab].icon}
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">Module Status</span>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        Production Deployment Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right detailed list grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {tabs[activeTab].features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SIMULATOR (LIVE CLIENT PORTAL & TASKBOARD) */}
      <section id="onedesk-simulator" className="py-24 sm:py-32 bg-[#f8fafc] border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0052CC] bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">Live Hands-on Simulator</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">OneDesk System Role Simulator</h2>
            <p className="text-slate-500 font-light text-base leading-relaxed">
              Interact with our support simulator. Submit tickets as a customer, track updates as a manager, or close tickets as an engineer to see the platform in action.
            </p>
          </div>

          {/* Role selector tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'manager', label: 'Operations Manager Console' },
              { key: 'engineer', label: 'Field Engineer Workspace' },
              { key: 'customer', label: 'Customer Ticket Portal' }
            ].map((role) => (
              <button
                key={role.key}
                onClick={() => setActiveRole(role.key)}
                className={`px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                  activeRole === role.key 
                    ? 'bg-[#091E42] text-white border-[#091E42] shadow-md' 
                    : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          {/* Console layout - White/Light Enterprise Theme */}
          <div className="bg-white text-slate-900 rounded-3xl shadow-xl border border-slate-200 max-w-6xl mx-auto overflow-hidden">
            
            {/* Header controls bar */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200/80 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <span className="text-xs text-slate-500 font-mono ml-4 hidden sm:inline select-none">OneDesk Client Console v3.2</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-[10px] sm:text-xs shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-slate-600 font-mono font-semibold">WS_CONNECT_OK</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0052CC] flex items-center justify-center text-xs font-bold text-white uppercase select-none shadow">
                  OD
                </div>
              </div>
            </div>

            {/* Simulated workspaces */}
            <div className="min-h-[520px] p-6 sm:p-8 bg-[#f8fafc]">
              
              <AnimatePresence mode="wait">
                
                {/* 1. MANAGER VIEW */}
                {activeRole === 'manager' && (
                  <motion.div
                    key="manager"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-8"
                  >
                    {/* Console stats grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { label: "Total Tickets", val: simTickets.length, color: "text-[#091E42]", sub: "Overall logged volume" },
                        { label: "Open Tickets", val: simTickets.filter(t => t.status === "OPEN").length, color: "text-blue-600", sub: "Awaiting engineer triage" },
                        { label: "In Progress", val: simTickets.filter(t => t.status === "IN PROGRESS" || t.status === "ASSIGNED").length, color: "text-amber-600", sub: "Active technical resolution" },
                        { label: "Resolved", val: simTickets.filter(t => t.status === "RESOLVED").length, color: "text-emerald-600", sub: "Successfully completed" }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm space-y-1.5">
                          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{item.label}</span>
                          <h4 className={`text-3xl font-extrabold ${item.color}`}>{item.val}</h4>
                          <span className="text-[10px] text-slate-500 block">{item.sub}</span>
                        </div>
                      ))}
                    </div>

                    {/* Active queues and charts mockup */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Ticket Queue list */}
                      <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                          <h4 className="text-sm font-bold text-slate-900 tracking-wide flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-600" />
                            <span>Global Support Incident Queue</span>
                          </h4>
                          <span className="text-[10px] text-slate-400 uppercase font-mono">Sorted by Date</span>
                        </div>

                        <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                          {simTickets.map((t) => (
                            <div key={t.id} className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs hover:border-blue-300 transition-colors">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-mono text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded text-[10px] font-bold">{t.id}</span>
                                  <span className="text-slate-900 font-semibold">{t.title}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-500 text-[10px] pt-0.5">
                                  <span>Client: <strong className="text-slate-700">{t.client}</strong></span>
                                  <span>•</span>
                                  <span>Assignee: <strong className="text-blue-600 font-bold">{t.assignedTo}</strong></span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                                  t.priority === 'HIGH' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-blue-50 text-blue-700 border border-blue-200'
                                }`}>{t.priority}</span>
                                <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                                  t.status === 'RESOLVED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                                }`}>{t.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mock SLA Trends */}
                      <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 tracking-wide flex items-center gap-2 mb-4">
                            <TrendingUp className="w-4 h-4 text-indigo-600" />
                            <span>Monthly SLA Target Metrics</span>
                          </h4>
                          
                          <div className="space-y-4 pt-2">
                            {[
                              { label: "Hardware Dispatch (<4h)", progress: 98 },
                              { label: "Network Loop Ping (<15m)", progress: 99 },
                              { label: "Software Patch Check (<2h)", progress: 95 }
                            ].map((item, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-slate-600">{item.label}</span>
                                  <span className="text-emerald-600 font-mono font-bold">{item.progress}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/60">
                                  <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" style={{ width: `${item.progress}%` }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-100 text-[10px] text-slate-600 leading-relaxed">
                          <span className="text-[#091E42] font-bold block mb-1">💡 MANAGER PRO-TIP:</span>
                          Review the workload dispatch queue daily to balance active tickets between back-office and site field teams.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. ENGINEER VIEW */}
                {activeRole === 'engineer' && (
                  <motion.div
                    key="engineer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200/80 pb-4 gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 tracking-wide">My Assigned Tasks Workspace</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Showing tickets routed directly to your profile queue.</p>
                      </div>
                      <span className="text-[10px] text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-lg font-mono font-bold shadow-xs">Assigned Engineer: Debasish P.</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {simTickets.filter(t => t.assignedTo === "Debasish P.").map((t) => (
                        <div key={t.id} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-300 transition-colors">
                          <div className="space-y-3">
                            <div className="flex justify-between items-start gap-2">
                              <span className="font-mono text-[10px] bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-bold">{t.id}</span>
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                t.status === 'RESOLVED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                              }`}>{t.status}</span>
                            </div>
                            <h5 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{t.title}</h5>
                            <div className="flex gap-4 text-[10px] text-slate-500">
                              <span>Client: <strong className="text-slate-800">{t.client}</strong></span>
                              <span>Priority: <strong className={t.priority === 'HIGH' ? 'text-rose-600 font-bold' : 'text-blue-600 font-bold'}>{t.priority}</strong></span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                            {t.status !== 'RESOLVED' ? (
                              <>
                                <button 
                                  onClick={() => handleUpdateStatus(t.id, "IN PROGRESS")}
                                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer transition-colors ${
                                    t.status === 'IN PROGRESS' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                  }`}
                                >
                                  In Progress
                                </button>
                                <button 
                                  onClick={() => handleUpdateStatus(t.id, "RESOLVED")}
                                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer transition-all shadow-xs"
                                >
                                  Mark Resolved
                                </button>
                              </>
                            ) : (
                              <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1.5 py-1">
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                Task Completed & Logged in Audit Trail
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 3. CUSTOMER VIEW */}
                {activeRole === 'customer' && (
                  <motion.div
                    key="customer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                  >
                    {/* Submit Ticket Form */}
                    <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
                      <h4 className="text-sm font-bold text-slate-900 tracking-wide flex items-center gap-2 border-b border-slate-100 pb-4">
                        <Plus className="w-4 h-4 text-blue-600" />
                        <span>Submit New Support Ticket</span>
                      </h4>

                      <form onSubmit={handleCreateTicket} className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-slate-500 block">Ticket Subject</label>
                          <input 
                            type="text" 
                            value={newTicketTitle}
                            onChange={(e) => setNewTicketTitle(e.target.value)}
                            placeholder="Describe the issue briefly..." 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-500 block">Organization</label>
                            <select 
                              value={newTicketClient}
                              onChange={(e) => setNewTicketClient(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                            >
                              <option value="NALCO">NALCO</option>
                              <option value="OCAC">OCAC</option>
                              <option value="High Court of Odisha">Odisha HC</option>
                              <option value="IndianOil">IndianOil</option>
                              <option value="TPCODL">TPCODL</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-500 block">Priority</label>
                            <select 
                              value={newTicketPriority}
                              onChange={(e) => setNewTicketPriority(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                            >
                              <option value="HIGH">High</option>
                              <option value="MEDIUM">Medium</option>
                              <option value="LOW">Low</option>
                            </select>
                          </div>
                        </div>

                        <button 
                          type="submit"
                          className="w-full py-3 rounded-xl bg-[#0052CC] text-xs font-bold text-white flex items-center justify-center gap-2 hover:bg-[#0747A6] cursor-pointer shadow-md shadow-blue-600/15 transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Send Support Ticket
                        </button>
                      </form>
                    </div>

                    {/* Customer Portal status feed */}
                    <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                        <h4 className="text-sm font-bold text-slate-900 tracking-wide">
                          <span>My Tickets Live Status</span>
                        </h4>
                        <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Live sync
                        </span>
                      </div>

                      <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                        {simTickets.map((t) => (
                          <div key={t.id} className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex justify-between items-center text-xs gap-3">
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded text-[10px] font-bold">{t.id}</span>
                                <span className="text-slate-900 font-medium">{t.title}</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block">Assigned Engineer: <strong className="text-blue-600">{t.assignedTo}</strong></span>
                            </div>
                            
                            <div className="flex items-center gap-2 shrink-0">
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${
                                t.status === 'RESOLVED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                                t.status === 'ASSIGNED' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                'bg-amber-50 text-amber-700 border border-amber-200'
                              }`}>{t.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* 4. DETAILS - PRODUCT BENEFITS GRID */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">Value Proposition</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Actionable Benefits Built For Every Stakeholder
            </h2>
            <p className="text-slate-500 font-light text-base leading-relaxed">
              OneDesk is engineered to deliver customized value across three key tiers: operations management, technical staff, and client organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Managers Card */}
            <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 space-y-6 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">For Management</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Empowers directors with high-level reporting data to track engineer workloads, measure SLA responses, and monitor client contracts.
              </p>
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Real-Time Analytics</strong> – Interactive visual widgets representing tickets raised, active queues, and resolutions.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Team Load Balancer</strong> – Track active workloads per engineer to balance technical dispatching.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Monthly Report Ledger</strong> – Instant exports of SLA target performance to present to corporate partners.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>SLA Compliance Warnings</strong> – Automated escalation loops trigger alerts before timing thresholds are reached.</span>
                </li>
              </ul>
            </div>

            {/* Engineers Card */}
            <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 space-y-6 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">For Engineers</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                An absolute focus-first layout containing checklist grids, diagnostic tools, and live communications to close cases quickly.
              </p>
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Focused Workflow Queue</strong> – Filters the system to display only tickets and tasks assigned directly to you.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Instant WebSocket Alerts</strong> – Audio and text warnings signal the moment a new critical escalation is dispatched.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Deep Diagnostic Context</strong> – Full device specs, warranty lists, and customer profiles appear inline.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Quick Operations Panel</strong> – Change status tags, write internal team pings, and attach speed logs instantly.</span>
                </li>
              </ul>
            </div>

            {/* Customers Card */}
            <div className="bg-[#f8fafc] border border-slate-200/80 rounded-3xl p-8 space-y-6 hover:shadow-xl hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">For Customers</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Provides clients with a clear window into active operations, preventing communication gaps and building long-term trust.
              </p>
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Seamless Ticket Form</strong> – Initiate a new issue directly inside the web browser with minimum effort.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Real-Time Resolution Tracker</strong> – Watch ticket status live as engineers pick up tasks.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Automated Email Alerts</strong> – Stay in the loop with transactional alerts sent upon ticket progress updates.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Cryptographic Security</strong> – Access is limited via strict corporate accounts, guaranteeing data privacy.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>



    </div>
  );
}
