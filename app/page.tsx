'use client';

import { motion, Variants } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  Globe,
  Users,
  Zap,
  TrendingUp,
  Award,
  Clock,
  ShieldCheck,
  CreditCard,
  MessageSquare,
  Gift,
  Smartphone,
  MousePointerClick,
  Activity,
  Wallet,
  ArrowUpRight,
  Send,
  BookOpen,
  MonitorPlay,
  Lock,
  CalendarDays
} from 'lucide-react';

const STAGGER_DELAY = 0.1;

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * STAGGER_DELAY, duration: 0.6, ease: "easeOut" }
  })
};

const SectionHeader = ({ subhead, title, highlight, description }: { subhead: string, title: string, highlight: string, description: string }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-[#E50914] text-[10px] font-bold uppercase tracking-widest mb-4"
    >
      {subhead}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
    >
      {title} <span className="text-[#E50914]">{highlight}</span>
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-gray-400 text-lg leading-relaxed px-4"
    >
      {description}
    </motion.p>
  </div>
);

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090909]/90 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E50914] rounded-lg flex items-center justify-center">
            <span className="font-bold text-white text-sm tracking-tighter">BC</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white flex items-baseline">BigCash<span className="text-[#E50914] text-2xl leading-none">.</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#performance" className="hover:text-white transition-colors">Performance</a>
          <a href="#offers" className="hover:text-white transition-colors">Offers</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="bg-[#E50914] text-sm font-bold px-6 py-2.5 rounded-lg shadow-[0_0_20px_rgba(229,9,20,0.2)] hover:bg-[#ff1a26] hover:shadow-[0_0_25px_rgba(229,9,20,0.4)] transition-all text-white">
            Join Network
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center bg-[#090909]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#E50914] rounded-full blur-[200px] opacity-[0.07] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div initial="hidden" animate="visible" className="max-w-xl">
          <motion.div custom={0} variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#222222] bg-[#111111] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E50914]" />
            <span className="text-xs font-bold text-gray-300 tracking-wide uppercase">Now accepting new affiliates</span>
          </motion.div>
          
          <motion.h1 custom={1} variants={fadeIn} className="text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Where Top <br/>Affiliates <span className="text-[#E50914]">Earn <br/>Bigger.</span>
          </motion.h1>
          
          <motion.p custom={2} variants={fadeIn} className="text-lg text-gray-400 mb-10 leading-relaxed pr-8">
            Join thousands of affiliates promoting high-converting Sweepstakes, Mobile App, and Lead Generation offers with faster approvals, exclusive campaigns, and industry-leading payouts.
          </motion.p>
          
          <motion.div custom={3} variants={fadeIn} className="flex flex-wrap items-center gap-4 mb-16">
            <button className="bg-[#E50914] text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-[#ff1a26] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.2)]">
              Join as Affiliate <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-[#222222] bg-transparent text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-[#111111] transition-all">
              Explore Offers
            </button>
          </motion.div>

          <motion.div custom={4} variants={fadeIn} className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#090909] bg-[#1f1f1f] flex items-center justify-center text-xs font-bold text-gray-400">A</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#090909] bg-[#2a2a2a] flex items-center justify-center text-xs font-bold text-gray-400">B</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#090909] bg-[#333333] flex items-center justify-center text-xs font-bold text-gray-400">C</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#090909] bg-[#444444] flex items-center justify-center text-xs font-bold text-gray-400">D</div>
            </div>
            <div>
              <div className="text-white font-bold text-sm">1,000+ Active Affiliates</div>
              <div className="text-gray-500 text-xs">Trust BigCash Network daily</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 shadow-2xl relative"
        >
          {/* Top Bar Earnings */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#E50914]" />
              </div>
              <div>
                <div className="text-gray-500 text-[10px] font-bold mb-1 uppercase tracking-widest">Live Earnings</div>
                <div className="text-2xl font-bold text-white">$47,832.50</div>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-full border border-[#1f1f1f] bg-[#161616] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-300 tracking-wider">Live</span>
            </div>
          </div>

          {/* Grid 4 cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#161616] border border-[#1f1f1f] rounded-xl p-4">
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                 <TrendingUp className="w-3 h-3 text-[#E50914]" /> EPC
              </div>
              <div className="text-lg font-bold text-white mb-1">$2.47</div>
              <div className="text-green-500 text-[10px] font-bold">+12.3%</div>
            </div>
            <div className="bg-[#161616] border border-[#1f1f1f] rounded-xl p-4">
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                 <MousePointerClick className="w-3 h-3 text-[#E50914]" /> CTR
              </div>
              <div className="text-lg font-bold text-white mb-1">4.82%</div>
              <div className="text-green-500 text-[10px] font-bold">+8.1%</div>
            </div>
            <div className="bg-[#161616] border border-[#1f1f1f] rounded-xl p-4">
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                 <span className="text-[#E50914] font-medium">$</span> WEEKLY PAYOUT
              </div>
              <div className="text-lg font-bold text-white mb-1">$12,450</div>
              <div className="text-green-500 text-[10px] font-bold">Due Friday</div>
            </div>
            <div className="bg-[#161616] border border-[#1f1f1f] rounded-xl p-4">
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                 <Globe className="w-3 h-3 text-[#E50914]" /> TOP COUNTRY
              </div>
              <div className="text-lg font-bold text-white mb-1">United States</div>
              <div className="text-gray-400 text-[10px] font-medium">42% traffic</div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-[#161616] border border-[#1f1f1f] rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">CONVERSIONS (7D)</div>
              <Activity className="w-3 h-3 text-[#E50914]" />
            </div>
            <div className="h-20 w-full relative">
               <svg viewBox="0 0 100 30" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                 <path d="M0,25 L10,20 L20,28 L30,15 L40,18 L50,5 L60,12 L70,2 L80,10 L90,3 L100,8" fill="none" stroke="#E50914" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
               </svg>
            </div>
            <div className="flex justify-between text-[9px] text-gray-600 font-bold uppercase mt-2">
               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Top Offers */}
          <div className="bg-[#161616] border border-[#1f1f1f] rounded-xl p-4">
             <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">TOP OFFERS</div>
             <div className="space-y-3">
               {[
                 { name: "Sweepstakes - iPhone...", clicks: "1,247", payout: "$4.50" },
                 { name: "Finance - Credit Check", clicks: "892", payout: "$12.00" },
                 { name: "Gaming - Casino App", clicks: "634", payout: "$35.00" },
               ].map((offer, i) => (
                 <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                      <span className="text-gray-300 font-medium">{offer.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500 text-[10px]">{offer.clicks}</span>
                      <span className="text-green-500 font-bold">{offer.payout}</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Zap, title: "Faster Payouts", desc: "Get paid twice weekly with same-day processing for top performers. No more waiting 30+ days." },
    { icon: TrendingUp, title: "Highest EPC", desc: "Industry-leading earnings per click with optimized funnels and exclusive high-paying offers." },
    { icon: Lock, title: "Exclusive Offers", desc: "Access campaigns you will not find anywhere else. Direct advertiser relationships only." },
    { icon: ShieldCheck, title: "Reliable Tracking", desc: "99.9% uptime with real-time pixel firing, postback URLs, and fraud detection built in." },
    { icon: Users, title: "Dedicated Managers", desc: "Your personal affiliate manager available 24/7 to help scale and optimize your campaigns." },
    { icon: CalendarDays, title: "Twice Weekly Payments", desc: "Net-3 and net-7 payment terms available. Choose what works for your cash flow." },
    { icon: Globe, title: "Global Offers", desc: "Promote in 150+ countries with localized landing pages and multilingual support." },
    { icon: BarChart3, title: "Real-Time Reporting", desc: "Live dashboards with granular breakdowns by offer, geo, device, and traffic source." }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subhead="WHY BIGCASH NETWORK"
          title="Built for Affiliates Who"
          highlight="Demand More"
          description="Everything you need to scale your affiliate business, backed by enterprise-grade infrastructure and a team that actually cares."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-[#111111] border border-[#1f1f1f] hover:border-[#333] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-transparent border border-[#E50914]/30 flex items-center justify-center mb-6">
                <f.icon className="w-4 h-4 text-[#E50914]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section id="performance" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subhead="LIVE PERFORMANCE"
          title="Real-Time Network"
          highlight="Activity"
          description="Watch the network pulse in real time. Every conversion, payout, and click as it happens."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {/* Live Conversions */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6">
             <div className="flex items-center gap-2 mb-8">
               <Activity className="w-4 h-4 text-[#E50914]" />
               <h3 className="text-white font-bold text-sm">Live Conversions</h3>
             </div>
             <div className="space-y-6">
               {[
                 { offer: "Sweepstakes - iPhone...", payout: "$4.50", time: "2s ago" },
                 { offer: "Finance - Credit Check", payout: "$12.00", time: "5s ago" },
                 { offer: "Gaming - Casino App", payout: "$35.00", time: "12s ago" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                      <span className="text-gray-300 text-xs font-medium">{item.offer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-green-500 font-bold">{item.payout}</span>
                      <span className="text-gray-600 text-[10px] w-8 text-right">{item.time}</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Recent Payouts */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6">
             <div className="flex items-center gap-2 mb-8">
               <span className="text-[#E50914] font-bold">$</span>
               <h3 className="text-white font-bold text-sm">Recent Payouts</h3>
             </div>
             <div className="space-y-6">
               {[
                 { id: "Affiliate #4821", amount: "$24,750", method: "USDT" },
                 { id: "Affiliate #2158", amount: "$18,200", method: "PayPal" },
                 { id: "Affiliate #9932", amount: "$9,450", method: "Wire" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      <span className="text-gray-300 text-xs font-medium">{item.id}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[#E50914] font-bold">{item.amount}</span>
                      <span className="text-gray-600 text-[10px] w-8">{item.method}</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Top Countries */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6">
             <div className="flex items-center gap-2 mb-6">
               <Globe className="w-4 h-4 text-[#E50914]" />
               <h3 className="text-white font-bold text-sm">Top Countries</h3>
             </div>
             <div className="space-y-4">
               {[
                 { name: "United States", code: "US", pct: "42%", w: "w-[80%]" },
                 { name: "United Kingdom", code: "GB", pct: "18%", w: "w-[35%]" },
                 { name: "Canada", code: "CA", pct: "12%", w: "w-[25%]" },
                 { name: "Australia", code: "AU", pct: "8%", w: "w-[15%]" },
                 { name: "Germany", code: "DE", pct: "6%", w: "w-[10%]" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <span className="text-white font-bold text-[10px] w-4">{item.code}</span>
                    <div className="flex-1">
                      <div className="flex justify-between text-[10px] mb-1.5">
                        <span className="text-gray-400 font-medium">{item.name}</span>
                        <span className="text-gray-500">{item.pct}</span>
                      </div>
                      <div className="w-full h-1 bg-[#1f1f1f] rounded-full">
                        <div className={`h-full bg-[#E50914] rounded-full ${item.w}`} />
                      </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* EPC Leaderboard */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6">
             <div className="flex items-center gap-2 mb-6">
               <Award className="w-4 h-4 text-[#E50914]" />
               <h3 className="text-white font-bold text-sm">EPC Leaderboard</h3>
             </div>
             <div className="space-y-4">
               {[
                 { rank: 1, name: "Finance - Credit Check", epc: "$12.47", change: "+15%" },
                 { rank: 2, name: "Gaming - Casino App", epc: "$8.92", change: "+8%" },
                 { rank: 3, name: "Dating - Premium", epc: "$6.54", change: "+22%" },
                 { rank: 4, name: "Sweepstakes - iPhone", epc: "$4.18", change: "+5%" },
                 { rank: 5, name: "Health - Supplement", epc: "$3.87", change: "+11%" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-[#1f1f1f] last:border-0 pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 font-mono text-[10px] w-2">{item.rank}</span>
                      <span className="text-gray-300 font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold">{item.epc}</span>
                      <span className="text-green-500 text-[10px] font-bold w-6 text-right">{item.change}</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Conversion Heatmap */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col">
             <div className="flex items-center gap-2 mb-6">
               <BarChart3 className="w-4 h-4 text-[#E50914]" />
               <h3 className="text-white font-bold text-sm">Conversion Heatmap</h3>
             </div>
             <div className="flex-1 grid grid-cols-7 gap-1">
               {[
                 'bg-[#222]', 'bg-[#E50914]/20', 'bg-[#E50914]/60', 'bg-[#222]', 'bg-[#E50914]', 'bg-[#E50914]/80', 'bg-[#E50914]/40',
                 'bg-[#E50914]/20', 'bg-[#222]', 'bg-[#E50914]/80', 'bg-[#E50914]/60', 'bg-[#E50914]/40', 'bg-[#E50914]', 'bg-[#222]',
                 'bg-[#E50914]/60', 'bg-[#E50914]/40', 'bg-[#222]', 'bg-[#E50914]/20', 'bg-[#E50914]', 'bg-[#E50914]/80', 'bg-[#E50914]/20',
                 'bg-[#E50914]/80', 'bg-[#E50914]', 'bg-[#E50914]/40', 'bg-[#E50914]/60', 'bg-[#222]', 'bg-[#E50914]/20', 'bg-[#E50914]/40'
               ].map((opacity, i) => (
                 <div key={i} className={`rounded-[2px] ${opacity}`} />
               ))}
             </div>
             <div className="flex justify-between items-center text-[10px] text-gray-500 mt-4 font-bold uppercase tracking-widest">
               <span>Low</span>
               <div className="flex gap-1">
                 <div className="w-3 h-2 bg-[#222] rounded-[1px]" />
                 <div className="w-3 h-2 bg-[#E50914]/20 rounded-[1px]" />
                 <div className="w-3 h-2 bg-[#E50914]/60 rounded-[1px]" />
                 <div className="w-3 h-2 bg-[#E50914] rounded-[1px]" />
               </div>
               <span>High</span>
             </div>
          </div>

          {/* Totals Widget */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 rounded-2xl bg-[#161616] border border-[#222] flex items-center justify-center mb-6">
               <Activity className="w-8 h-8 text-[#E50914]" />
             </div>
             <div className="text-5xl font-bold text-white mb-2">2,847</div>
             <div className="text-gray-500 text-xs font-medium mb-6">Conversions Today</div>
             <div className="px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-bold text-green-500 tracking-wide uppercase">Network Active</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const cats = [
    { icon: Gift, title: "Sweepstakes", desc: "High-engagement prize giveaways with massive conversion rates. iPhones, gift cards, and cash prizes that users cannot resist.", offers: "450+ Offers" },
    { icon: Smartphone, title: "Mobile Apps", desc: "iOS and Android app installs with competitive CPI payouts. Gaming, finance, health, and utility verticals.", offers: "180+ Offers" },
    { icon: Users, title: "Lead Generation", desc: "Qualified leads for insurance, finance, education, and home services. Higher payouts for verified, high-intent users.", offers: "320+ Offers" },
  ];
  return (
    <section id="offers" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subhead="FEATURED CATEGORIES"
          title="Offers That"
          highlight="Convert"
          description="Hand-picked verticals with proven funnels, optimized landers, and payouts that keep affiliates coming back."
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {cats.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-8 hover:border-[#333] transition-colors flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-transparent border border-[#333] flex items-center justify-center mb-8">
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-12 flex-1">{c.desc}</p>
              
              <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-6">
                <div className="px-3 py-1 rounded-full border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914] text-[10px] font-bold">
                  {c.offers}
                </div>
                <button className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors">
                  Explore <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Register", desc: "Apply in under 2 minutes. Our team reviews applications within 24 hours.", icon: Users },
    { num: "02", title: "Choose Offers", desc: "Browse 500+ exclusive offers across Sweepstakes, Apps, and Lead Gen verticals.", icon: MousePointerClick },
    { num: "03", title: "Drive Traffic", desc: "Use your tracking links, pixels, and postbacks. Real-time stats from day one.", icon: TrendingUp },
    { num: "04", title: "Get Paid", desc: "Twice weekly payouts via PayPal, USDT, or wire. Net-3 available for top performers.", icon: Wallet },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subhead="HOW IT WORKS"
          title="From Signup to"
          highlight="Payout in 4 Steps"
          description="No complicated onboarding. No hidden fees. Just a straightforward path to scaling your affiliate revenue."
        />

        <div className="relative max-w-5xl mx-auto mt-20">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-50" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#111111] border border-[#1f1f1f] flex items-center justify-center group-hover:border-[#E50914]/50 transition-colors">
                    <s.icon className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#E50914] border-4 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                    {s.num}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed px-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Payments() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#E50914] text-[10px] font-bold uppercase tracking-widest mb-4">PAYMENTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Fast Payments You Can <br/><span className="text-[#E50914]">Count On</span>
          </h2>
          <p className="text-gray-400 text-base mb-10 leading-relaxed max-w-md">
            We know cash flow is everything in affiliate marketing. That is why we offer multiple payout methods with industry-leading speed.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="px-4 py-2 rounded-lg border border-[#1f1f1f] bg-[#111111] flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E50914]" /> Secure & Encrypted
            </div>
            <div className="px-4 py-2 rounded-lg border border-[#1f1f1f] bg-[#111111] flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-wide">
              <Clock className="w-3.5 h-3.5 text-[#E50914]" /> Twice Weekly
            </div>
            <div className="px-4 py-2 rounded-lg border border-[#1f1f1f] bg-[#111111] flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-wide">
              <Zap className="w-3.5 h-3.5 text-[#E50914]" /> Same-Day for Top
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { name: "PayPal", icon: CreditCard, tag: "Same day", desc: "Instant transfers to your PayPal account. No fees on our end." },
              { name: "USDT (TRC20)", icon: ArrowRight, tag: "Within 1 hour", desc: "Crypto payouts via TRC20 network. Low fees, fast confirmation." },
              { name: "Bank Transfer", icon: Lock, tag: "1-2 business days", desc: "Direct wire to your business bank account. Available worldwide." },
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-2xl border border-[#1f1f1f] bg-[#111111] flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl border border-[#222] bg-transparent flex items-center justify-center">
                  <m.icon className="w-5 h-5 text-[#E50914]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-white font-bold text-sm">{m.name}</h4>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-green-500 px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/10">{m.tag}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed pr-4">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-8 shadow-2xl relative max-w-md mx-auto w-full">
           <div className="flex flex-col items-center text-center mb-10 mt-4">
             <div className="w-16 h-16 rounded-2xl bg-[#E50914]/5 border border-[#E50914]/20 flex items-center justify-center mb-6 relative">
               <div className="absolute inset-0 rounded-2xl border border-[#E50914] opacity-30 blur-sm" />
               <Wallet className="w-6 h-6 text-[#E50914] relative z-10" />
             </div>
             <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">Your Next Payout</p>
             <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">$24,750.00</h3>
             <p className="text-green-500 text-xs font-bold">Scheduled for Friday</p>
           </div>

           <div className="space-y-3">
             <div className="flex items-center justify-between p-4 rounded-xl bg-[#161616] border border-[#1f1f1f]">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded border border-[#222] bg-[#1a1a1a] flex items-center justify-center">
                   <ArrowRight className="w-3.5 h-3.5 text-[#E50914]" />
                 </div>
                 <div>
                   <div className="text-white text-xs font-bold">USDT Payout</div>
                   <div className="text-gray-600 text-[10px] font-medium mt-0.5">TRC20 Network</div>
                 </div>
               </div>
               <span className="text-[10px] font-bold text-green-500">Pending</span>
             </div>
             <div className="flex items-center justify-between p-4 rounded-xl bg-[#161616] border border-[#1f1f1f]">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded border border-[#222] bg-[#1a1a1a] flex items-center justify-center">
                   <Lock className="w-3.5 h-3.5 text-gray-500" />
                 </div>
                 <div>
                   <div className="text-white text-xs font-bold">Wire Transfer</div>
                   <div className="text-gray-600 text-[10px] font-medium mt-0.5">Chase Business</div>
                 </div>
               </div>
               <span className="text-[10px] font-bold text-gray-500">Completed</span>
             </div>
             <div className="flex items-center justify-between p-4 rounded-xl bg-[#161616] border border-[#1f1f1f]">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded border border-[#222] bg-[#1a1a1a] flex items-center justify-center">
                   <CreditCard className="w-3.5 h-3.5 text-gray-500" />
                 </div>
                 <div>
                   <div className="text-white text-xs font-bold">PayPal</div>
                   <div className="text-gray-600 text-[10px] font-medium mt-0.5">Instant</div>
                 </div>
               </div>
               <span className="text-[10px] font-bold text-gray-500">Completed</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subhead="COMMUNITY"
          title="Connect, Learn,"
          highlight="Grow"
          description="You are not alone. Join a community of serious affiliates who share tactics, celebrate wins, and help each other scale."
        />

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: MessageSquare, title: "Discord", desc: "Join 2,000+ affiliates in our active Discord community. Get help, share strategies, and network.", stats: "2,400+", link: "Join Discord" },
            { icon: Send, title: "Telegram", desc: "Get instant updates on new offers, payout schedules, and network announcements.", stats: "4,100+", link: "Join Telegram" },
            { icon: BookOpen, title: "Knowledge Base", desc: "Comprehensive guides on tracking setup, optimization tactics, and compliance best practices.", stats: "120+ Articles", link: "Explore Guides" },
            { icon: MonitorPlay, title: "Video Tutorials", desc: "Step-by-step video walkthroughs for beginners and advanced affiliate strategies.", stats: "80+ Videos", link: "Watch Videos" },
          ].map((c, i) => (
            <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col hover:border-[#333] transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                   <c.icon className="w-5 h-5 text-white" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors mt-2" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{c.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-8 flex-1">{c.desc}</p>
              
              <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-4">
                <span className="text-[10px] text-gray-500 font-bold">{c.stats}</span>
                <span className="text-[#E50914] text-[10px] font-bold">{c.link}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 bg-[#090909] border-t border-[#1f1f1f] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E50914] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#222222] bg-[#111111] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
          <span className="text-[10px] font-bold text-gray-400 tracking-wide">Applications reviewed within 24 hours</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to Scale Your <br/><span className="text-[#E50914]">Affiliate Business?</span>
        </h2>
        <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto">
          Join the network where top affiliates earn more. Faster approvals, exclusive offers, and payouts you can count on.
        </p>
        
        <button className="bg-[#E50914] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#ff1a26] transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(229,9,20,0.3)] mx-auto mb-10 w-fit">
          Join BigCash Network <ArrowRight className="w-4 h-4" />
        </button>
        
        <div className="flex items-center justify-center gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> No setup fees</div>
          <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> 24h approval</div>
          <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Cancel anytime</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-10 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#E50914] rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-sm tracking-tighter">BC</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white flex items-baseline">BigCash<span className="text-[#E50914] text-2xl leading-none">.</span></span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed pr-8 mb-8">
              The premium CPA affiliate network built for affiliates who demand more. Enterprise-grade tracking, exclusive offers, and twice-weekly payouts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl border border-[#222] bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#444] transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-[#222] bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#444] transition-colors">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs mb-6">Product</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs mb-6">Company</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs mb-6">Legal</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs mb-6">Resources</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Performance />
        <Categories />
        <HowItWorks />
        <Payments />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
