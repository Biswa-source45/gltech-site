import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Shield, Code2, Server, ArrowRight, Mail } from 'lucide-react';
import FloatingLines from '../components/FloatingLines';
import careersHero from '../assets/careers_hero.png';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

function SectionWrapper({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const domains = [
  { icon: <Server className="w-5 h-5" />, label: 'IT Infrastructure & Datacenter', color: 'text-blue-600 bg-blue-50' },
  { icon: <Code2 className="w-5 h-5" />, label: 'Software Engineering & AI/ML', color: 'text-emerald-600 bg-emerald-50' },
  { icon: <Shield className="w-5 h-5" />, label: 'Network & Security Engineering', color: 'text-indigo-600 bg-indigo-50' },
  { icon: <Users className="w-5 h-5" />, label: 'Client Success & Support', color: 'text-amber-600 bg-amber-50' },
];

export default function Careers({ onNavigate }) {
  return (
    <div className="w-full bg-slate-50 font-sans">

      {/* ── 1. Hero Banner ── */}
      <section className="relative overflow-hidden bg-[#091E42] text-white min-h-[520px] flex items-center">
        {/* BG image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${careersHero})`,
            filter: 'brightness(0.22)'
          }}
        />
        {/* Floating lines animation */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <FloatingLines
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[10, 14, 18]}
            lineDistance={[8, 5, 3]}
            bendRadius={5}
            bendStrength={-0.5}
            linesGradient={['#4073b3', '#0f1c57', '#00B8D9']}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight">
              Build the Future of{' '}
              <span className="text-brand-accent">Enterprise Technology</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mb-8">
              At GLOBX, we architect the digital backbone of Odisha's most critical institutions —
              government bodies, public sector units, research labs, and Fortune-tier corporates.
              Come grow with engineers who are passionate about impact at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2, boxShadow: '0 8px 24px rgba(0,184,217,0.35)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="bg-brand-accent text-[#091E42] font-bold px-7 py-3 rounded-xl text-sm shadow-md cursor-pointer"
                onClick={() => document.getElementById('openings-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Openings
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="border border-white/30 text-white font-semibold px-7 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => onNavigate && onNavigate('about')}
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Domains We Hire In ── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-2 block">Domains We Hire In</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-dark">Engineering Excellence, Every Discipline</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {domains.map((d) => (
                <motion.div
                  key={d.label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${d.color}`}>
                    {d.icon}
                  </div>
                  <span className="text-sm font-semibold text-brand-dark leading-snug">{d.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 3. Open Positions ── */}
      <section id="openings-section" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-3 block">Open Positions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark mb-4">Current Openings</h2>
              <p className="text-slate-500 font-light max-w-xl mx-auto">
                We're always on the lookout for talented individuals. Check back soon for new opportunities.
              </p>
            </motion.div>

            {/* Empty state card */}
            <motion.div
              variants={fadeUp}
              className="max-w-lg mx-auto bg-white border border-slate-200/80 rounded-3xl p-12 text-center flex flex-col items-center gap-6 shadow-sm"
            >
              {/* Custom loader — recolored to brand palette */}
              <div className="careers-loader" aria-label="Loading openings" />

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-dark font-display">No Openings Right Now</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  We're currently fully staffed. We'll post new roles here as soon as they become available.
                  <br />
                  In the meantime, feel free to send your profile to our HR team.
                </p>
              </div>

              <motion.a
                href="mailto:hr@globx.co.in"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:bg-brand-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Send Your Profile
              </motion.a>
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 4. "Looking For Something Else?" Enterprise CTA Banner ── */}
      <section className="bg-slate-50 pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#091E42] via-[#0052CC] to-[#0747A6] p-10 sm:p-14 text-white text-center shadow-xl border border-blue-400/20"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#00B8D9] bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/15">
                  General Inquiries & Partnerships
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                  Looking For Something Else?
                </h2>
                <p className="text-blue-100 text-sm sm:text-base font-light leading-relaxed">
                  Don't see an open role that fits your skill set? We're always eager to connect with top enterprise talent, domain experts, and strategic partners.
                </p>
                <div className="pt-4 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 32px rgba(0, 184, 217, 0.4)' }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onNavigate && onNavigate('contact')}
                    className="inline-flex items-center gap-2.5 bg-[#00B8D9] hover:bg-[#00cbe9] text-[#091E42] font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg transition-all cursor-pointer"
                  >
                    Contact Our Team <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
