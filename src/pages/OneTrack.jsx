import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  CheckCircle2, 
  Users, 
  Database, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Monitor, 
  Plus, 
  FileSpreadsheet,
  Activity
} from 'lucide-react';
import onetrackDashboard from '../assets/onetrack_dashboard.png';

export default function OneTrack() {
  const [activeRole, setActiveRole] = useState('manager');

  const roles = {
    manager: {
      title: "Operations Manager Console",
      badge: "Global Supervision Mode",
      desc: "Provides birds-eye telemetry across all active client service agreements, engineer workloads, and contract compliance thresholds. Flags tickets nearing SLA limits.",
      stats: [
        { label: "Active SLA Contracts", val: "42 Sites", progress: 85, color: "bg-blue-600" },
        { label: "Critical Escalations", val: "1 Ticket", progress: 10, color: "bg-rose-600 animate-pulse" },
        { label: "Engineer Utilization", val: "88%", progress: 88, color: "bg-emerald-600" },
        { label: "Avg SLA Resolution", val: "1h 14m", progress: 95, color: "bg-cyan-600" }
      ],
      actions: [
        { id: "S1-591", msg: "Severity 1 escalation raised for state datacenter optical loop", time: "2 mins ago", priority: "CRITICAL" },
        { id: "SAN-102", msg: "Engineer Debasish P. completed SAN array backup validation", time: "18 mins ago", priority: "COMPLETED" },
        { id: "INV-932", msg: "New hardware invoice draft generated for Bhubaneswar PSU site", time: "1 hour ago", priority: "INFO" }
      ],
      menuItems: ["SLA Dashboards", "Contract Ledger", "On-Call Schedules", "Audit Logs"]
    },
    engineer: {
      title: "Field Engineer Workspace",
      badge: "Assigned Workloads Mode",
      desc: "Optimized for speed. Displays assigned tasks, pending hardware diagnostic checklists, ticket resolution notes, and direct integration with fluke cable analyzers.",
      stats: [
        { label: "My Assigned Tickets", val: "3 Active", progress: 60, color: "bg-indigo-600" },
        { label: "Standby Spares in Hand", val: "4 Units", progress: 40, color: "bg-amber-600" },
        { label: "SLA Deadline Pending", val: "2 hours", progress: 20, color: "bg-rose-500" },
        { label: "Tickets Closed Today", val: "5 Closed", progress: 100, color: "bg-emerald-600" }
      ],
      actions: [
        { id: "TSK-302", msg: "Pending: Terminate Cat6A links in Server Rack B (Mancheswar)", time: "Due in 1 hour", priority: "HIGH" },
        { id: "TSK-409", msg: "Assigned: Investigate wireless controller channel interference", time: "High Priority", priority: "MEDIUM" },
        { id: "AUD-882", msg: "Audit log updated: Spliced single-mode optical fiber patch panel 3", time: "Completed", priority: "COMPLETED" }
      ],
      menuItems: ["My Tickets", "Hardware Checklists", "Fluke Sync", "Site Worklogs"]
    },
    customer: {
      title: "Customer Service Portal",
      badge: "Client Delegation Mode",
      desc: "Enables client delegates to raise tickets, upload site photographs, track technician dispatch locations in real-time, and download cert testing reports.",
      stats: [
        { label: "My Active Tickets", val: "1 Open", progress: 25, color: "bg-blue-600" },
        { label: "Standby Spares Provisioned", val: "2 Devices", progress: 50, color: "bg-cyan-600" },
        { label: "Next Scheduled Visit", val: "July 2nd", progress: 100, color: "bg-emerald-600" },
        { label: "All-Time Ticket History", val: "18 Resolved", progress: 90, color: "bg-violet-600" }
      ],
      actions: [
        { id: "T-89241", msg: "Support Ticket Raised (Slow wireless access points)", time: "Status: Resolving", priority: "IN PROGRESS" },
        { id: "ENG-092", msg: "Site engineer assigned: Ranjan Dash dispatched to site", time: "ETA 45 mins", priority: "DISPATCHED" },
        { id: "REP-401", msg: "SLA compliance audit report downloaded successfully", time: "Archive", priority: "DOWNLOADED" }
      ],
      menuItems: ["Create Ticket", "Active Services", "Technician Tracker", "SLA Reports"]
    }
  };

  const currentRole = roles[activeRole];

  return (
    <div className="w-full bg-[#f8fafc] text-[#091E42] font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH IMAGE MOCKUP */}
      <section className="relative bg-gradient-to-br from-[#091E42] via-[#0d2a5c] to-slate-900 text-white pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-25"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-xs font-semibold text-blue-300 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Proprietary Enterprise Software</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight text-white">
                OneTrack Ticket & Operations Management
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                The unified, audit-ready operations portal driving GLOBX systems engineering. By bridging physical hardware asset registries with real-time SLA thresholds, OneTrack guarantees end-to-end transparency and instant technician dispatch.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold uppercase tracking-wider bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>SLA Time Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold uppercase tracking-wider bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Fluke Analyzer Integration</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold uppercase tracking-wider bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Standby Inventory Logs</span>
                </div>
              </div>
            </motion.div>

            {/* Right UI Image Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-slate-950 p-2 rounded-3xl border border-slate-700/50 shadow-2xl">
                {/* Browser-like Header dots */}
                <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-800/80 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] text-slate-500 font-mono ml-4">onetrack.globx.systems/console</span>
                </div>
                <img 
                  src={onetrackDashboard} 
                  alt="OneTrack Enterprise Dashboard UI Mockup" 
                  className="w-full h-auto rounded-2xl border border-slate-800 shadow-inner" 
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-brand-primary">Operational Pillars</span>
            <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">System Architectural Capabilities</h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              OneTrack streamlines ticket workflows by combining physical hardware asset tracking with SLA timing thresholds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
                title: "Intelligent Incident Lifecycles",
                desc: "Manages ticket lifecycles dynamically from Open to Assigned, Pending Hardware Logistics, In Trial, Verified, and Closed."
              },
              {
                icon: <Layers className="w-5 h-5 text-cyan-600" />,
                title: "Hierarchical Work Breakdown",
                desc: "Splits complex operations (such as datacenter migration) into distinct, trackable sub-tasks with specialized engineer checklists."
              },
              {
                icon: <Users className="w-5 h-5 text-indigo-600" />,
                title: "Contract & Account Logs",
                desc: "Integrates billing details, active maintenance contract duration, authorized site representatives, and standby equipment inventory history logs."
              },
              {
                icon: <Database className="w-5 h-5 text-emerald-600" />,
                title: "Asset & Hardware Registry",
                desc: "Records serial numbers, OEM support credentials, vendor warranty records, and physical installation location details down to server rack coordinate slots."
              },
              {
                icon: <Clock className="w-5 h-5 text-rose-600" />,
                title: "Real-Time Engineer Notes",
                desc: "Supports instant field updates, site photo uploads, speed-test logs, and coordination between back-office architects and onsite technicians."
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
                title: "Audited Log Histories",
                desc: "Compliance-friendly records logging every modifications event, state alteration, notes addition, and assignment change, complete with user tags."
              }
            ].map((pillar, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6, backgroundColor: 'rgb(248, 250, 252)', borderColor: 'rgba(147, 197, 253, 0.8)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.1 }}
                key={idx} 
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-4 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display group-hover:text-blue-600 transition-colors duration-300">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE PORTAL SIMULATOR */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-brand-primary">Interactive Preview</span>
            <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">OneTrack Portal Interface Simulator</h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              Select an operational role below to see how OneTrack formats metrics and tasks dynamically for that user profile.
            </p>
          </div>

          {/* Role selector tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.keys(roles).map((roleKey) => (
              <button
                key={roleKey}
                onClick={() => setActiveRole(roleKey)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${activeRole === roleKey ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-blue-500/10' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
              >
                {roles[roleKey].title}
              </button>
            ))}
          </div>

          {/* Simulator Console Box */}
          <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden max-w-6xl mx-auto">
            
            {/* Top Windows Control Header */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-400 font-mono ml-4 hidden sm:inline">OneTrack Client Framework v2.4.1</span>
              </div>
              
              {/* Fake user profile info */}
              <div className="flex items-center gap-4 text-slate-400 text-xs">
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Syncing Live</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                  GX
                </div>
              </div>
            </div>

            {/* Grid Container for Sidebar & Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
              
              {/* Sidebar */}
              <div className="md:col-span-3 bg-slate-950 p-6 border-r border-slate-800 space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Workspace</span>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-blue-500" />
                    <span>GLOBX NOC Portal</span>
                  </div>
                </div>

                {/* Sidebar Navigation */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-2">Modules</span>
                  {currentRole.menuItems.map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer ${idx === 0 ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}>
                      <ChevronRight className="w-3.5 h-3.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Info Block */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-400 leading-normal space-y-2">
                  <div className="font-bold text-white uppercase text-[9px] tracking-wider">Access Scope:</div>
                  <p>{currentRole.desc}</p>
                </div>
              </div>

              {/* Main Workspace content */}
              <div className="md:col-span-9 p-6 sm:p-8 space-y-8 bg-slate-900">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-extrabold text-blue-400 tracking-wider bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">{currentRole.badge}</span>
                    <h3 className="text-xl font-bold text-white mt-1.5">{currentRole.title}</h3>
                  </div>
                  
                  {/* Fake action buttons */}
                  <div className="flex gap-2">
                    <button className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-2 rounded-lg border border-slate-700 font-semibold flex items-center gap-1.5">
                      <FileSpreadsheet className="w-3.5 h-3.5" /> Export SLA
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-500 text-xs px-3 py-2 rounded-lg font-semibold flex items-center gap-1.5 text-white">
                      <Plus className="w-3.5 h-3.5" /> New Event
                    </button>
                  </div>
                </div>

                {/* Stats and Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentRole.stats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-2xl space-y-3">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{stat.label}</span>
                      <span className="text-2xl font-extrabold text-white block">{stat.val}</span>
                      
                      {/* Visual progress bar */}
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color} rounded-full`} style={{ width: `${stat.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tasks or Actions list */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-500" />
                    <span>Real-time Operations Checklist & Live Logs</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {currentRole.actions.map((action, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-950/40 border border-slate-800/50 p-4 rounded-xl text-xs gap-3">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] shrink-0">{action.id}</span>
                          <span className="text-slate-200 font-light leading-relaxed">{action.msg}</span>
                        </div>
                        
                        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                            action.priority === 'CRITICAL' || action.priority === 'HIGH' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 animate-pulse' :
                            action.priority === 'COMPLETED' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                            'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          }`}>{action.priority}</span>
                          <span className="text-slate-500 font-medium text-[10px]">{action.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. SYSTEM ARCHITECTURE / INTEGRATION DETAILS */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Architectural Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-primary">System Architecture</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-dark tracking-tight leading-tight">
                Enterprise Hardware & Telemetry Integration
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Unlike off-the-shelf ticketing systems, OneTrack integrates directly with physical infrastructure telemetry. We sync active networking routers, SNMP network loops, and database instances to automatically compile diagnostic state records.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Fluke Cable Analyzer Integration",
                    desc: "Onsite technicians upload structured cabling tester reports via API, instantly linking cert measurements with localized client ticket files."
                  },
                  {
                    title: "SNMP Alert Escalation Engines",
                    desc: "Automated ping checks trigger severe incidents before users report slow access, dispatching stand-by technical routes to the exact switch port."
                  },
                  {
                    title: "Restricted Auditable History logs",
                    desc: "Tracks every single database query, device replacement action, SLA schedule change, and support note, providing a clean audit trail."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-light leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Box - SLA Metrics Display */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="lg:col-span-5 bg-gradient-to-br from-[#091E42] to-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl border border-slate-800 cursor-default"
            >
              <h3 className="text-lg font-bold font-display tracking-tight border-b border-slate-800 pb-4">OneTrack SLA Compliance</h3>
              
              <div className="space-y-5">
                {[
                  { label: "Hardware Standby Spares ETA", limit: "Under 4 Hours", actual: "1h 45m Average" },
                  { label: "Severity 1 Network Response", limit: "Under 15 Mins", actual: "8 mins Average" },
                  { label: "Severity 2 Configuration Work", limit: "Under 2 Hours", actual: "44 mins Average" },
                  { label: "Routine PM Site Audits", limit: "Monthly Interval", actual: "100% Scheduled Uptime" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-blue-400 font-mono">{item.actual}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>Contract Target Limit: {item.limit}</span>
                      <span className="text-emerald-400">Compliant ✓</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
