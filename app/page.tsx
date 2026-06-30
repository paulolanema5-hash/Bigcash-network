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
  ChevronRight,
  Activity,
  CheckCircle2,
  Lock,
  Wallet,
  PlayCircle
} from 'lucide-react';
import Image from 'next/image';

const STAGGER_DELAY = 0.1;

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * STAGGER_DELAY, duration: 0.6, ease: "easeOut" }
  })
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#222222] bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="w-6 h-6 bg-[#E50914] rounded-sm"></div>
          <span className="font-display font-bold text-xl tracking-tighter text-white">BIGCASH</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <a href="#offers" className="hover:text-white transition-colors">Offers</a>
          <a href="#performance" className="hover:text-white transition-colors">Performance</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium px-4 py-2 text-gray-300 hover:text-white transition-colors">
            Log In
          </button>
          <button className="bg-[#E50914] text-sm font-bold px-6 py-2 rounded-full shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:bg-[#ff1a26] transition-all text-white">
            Join Network
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, #E50914 0%, transparent 70%)' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="max-w-2xl flex flex-col justify-center"
        >
          <motion.div custom={0} variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222222] bg-[#111111] text-[10px] font-bold text-[#E50914] uppercase tracking-widest mb-6 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50914] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50914]"></span>
            </span>
            Next-Gen Performance Infrastructure
          </motion.div>
          
          <motion.h1 custom={1} variants={fadeIn} className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Where Top <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Affiliates</span> <br/>Earn Bigger.
          </motion.h1>
          
          <motion.p custom={2} variants={fadeIn} className="text-lg text-gray-400 mb-8 max-w-md leading-relaxed">
            Join the elite network promoting high-converting Sweepstakes and Lead Gen offers with sub-second tracking and enterprise-grade payouts.
          </motion.p>
          
          <motion.div custom={3} variants={fadeIn} className="flex flex-wrap items-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:bg-gray-200 transition-all flex items-center gap-2 group">
              Join as Affiliate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-[#222222] bg-[#111111] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#1a1a1a] transition-all flex items-center gap-2">
              Explore Offers
            </button>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative perspective-[1000px] flex items-center justify-center"
        >
          <div className="w-full bg-[#111111] rounded-2xl border border-[#222222] shadow-2xl overflow-hidden flex flex-col transform-gpu">
            {/* Top Bar */}
            <div className="h-12 border-b border-[#222222] flex items-center justify-between px-6 bg-[#0c0c0c]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                <span className="ml-4 text-[11px] font-mono text-gray-500 uppercase tracking-widest">Performance_Console_v4.2</span>
              </div>
              <div className="text-[11px] text-[#E50914] font-bold">LIVE DATA SOURCE</div>
            </div>

            <div className="flex-1 p-6 grid grid-cols-2 gap-6">
              <div className="col-span-2 bg-[#090909] rounded-xl border border-[#222222] p-5 relative overflow-hidden">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Net Payout Velocity</div>
                    <div className="text-3xl font-bold mt-1 text-[#E50914]">$142,850.22</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-green-500 font-bold">+12.4% INCREASE</div>
                    <div className="text-xs text-gray-500">7-Day Rolling Cycle</div>
                  </div>
                </div>
                <div className="h-24 w-full flex items-end gap-1 px-1">
                  <div className="flex-1 bg-[#222] h-1/2 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#222] h-2/3 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#222] h-1/2 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#E50914] h-4/5 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#E50914] h-full rounded-t-sm"></div>
                  <div className="flex-1 bg-[#222] h-3/4 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#222] h-1/2 rounded-t-sm"></div>
                  <div className="flex-1 bg-[#222] h-2/3 rounded-t-sm"></div>
                </div>
              </div>

              <div className="bg-[#090909] rounded-xl border border-[#222222] p-4">
                <div className="text-[10px] text-gray-500 uppercase font-bold mb-3 tracking-widest">Top Categories</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white">Sweepstakes</span>
                    <span className="text-xs font-mono text-white">$4.22 EPC</span>
                  </div>
                  <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden"><div className="w-[85%] h-full bg-[#E50914]"></div></div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white">Lead Generation</span>
                    <span className="text-xs font-mono text-white">$3.10 EPC</span>
                  </div>
                  <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden"><div className="w-[60%] h-full bg-[#E50914] opacity-50"></div></div>
                </div>
              </div>

              <div className="bg-[#090909] rounded-xl border border-[#222222] p-4">
                <div className="text-[10px] text-gray-500 uppercase font-bold mb-3 tracking-widest">Recent Payouts</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-400">ID 8829...01</span>
                    <span className="text-white font-mono">$12,400.00</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-400">ID 8829...42</span>
                    <span className="text-white font-mono">$8,120.50</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-400">ID 8829...99</span>
                    <span className="text-white font-mono">$22,000.00</span>
                  </div>
                  <button className="w-full py-1 text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase border-t border-[#222] mt-1 pt-2">Real-Time Feed</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { label: "Paid to Affiliates", value: "$25M+" },
    { label: "Active Countries", value: "150+" },
    { label: "Active Affiliates", value: "1,000+" },
    { label: "Exclusive Offers", value: "500+" },
    { label: "Tracking Uptime", value: "99.9%" },
  ];

  return (
    <section className="py-12 border-y border-[#222222] bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.label === 'Tracking Uptime' ? 'text-[#E50914]' : 'text-white'}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Zap, title: "Faster Payouts", desc: "Get paid twice a week with zero delays. Cash flow is king." },
    { icon: TrendingUp, title: "Highest EPC", desc: "We optimize our landing pages relentlessly to ensure maximum earnings." },
    { icon: Award, title: "Exclusive Offers", desc: "Access premium campaigns you won't find on public networks." },
    { icon: Activity, title: "Reliable Tracking", desc: "Enterprise-grade infrastructure ensures no click is ever lost." },
    { icon: Users, title: "Dedicated Managers", desc: "Expert support available 24/7 to help you scale your campaigns." },
    { icon: Globe, title: "Global Offers", desc: "Monetize traffic from over 150+ countries with localized funnels." }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Why BigCash Network</h2>
          <p className="text-gray-400 text-lg font-light">Built by super affiliates, for super affiliates. We provide the infrastructure and exclusive offers needed to scale to the moon.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#111111] border border-[#222222] glow-hover group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mb-6 text-gray-400 group-hover:text-[#E50914] group-hover:border-[#E50914]/30 transition-colors">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LivePerformance() {
  return (
    <section id="performance" className="py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Live Network Performance</h2>
            <p className="text-gray-400 text-lg font-light">Real-time transparency. See exactly what's converting across the network right now.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Conversions Widget */}
          <div className="p-6 rounded-[24px] bg-[#111111] border border-[#222222] flex flex-col justify-between">
             <div className="flex justify-between items-start mb-8">
               <h3 className="text-gray-400 font-medium">Live Conversions</h3>
               <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50914] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E50914]"></span>
                </span>
             </div>
             
             <div className="space-y-4">
               {[
                 { time: 'Just now', offer: 'Win iPhone 15 Pro', geo: 'US', payout: '$2.50' },
                 { time: '12s ago', offer: 'Auto Insurance Quote', geo: 'CA', payout: '$14.00' },
                 { time: '45s ago', offer: 'Crypto VSL', geo: 'UK', payout: '$850.00' },
                 { time: '1m ago', offer: 'Dating SOI', geo: 'AU', payout: '$4.25' }
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center text-sm border-b border-[#222222]/50 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-white font-medium">{item.offer}</p>
                      <p className="text-gray-500 text-xs">{item.time} • {item.geo}</p>
                    </div>
                    <span className="text-[#E50914] font-mono font-medium">{item.payout}</span>
                 </div>
               ))}
             </div>
          </div>
          
          {/* Top Countries Map Widget */}
          <div className="p-6 rounded-[24px] bg-[#111111] border border-[#222222] col-span-1 md:col-span-2 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-6 z-10">
              <div className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333333] text-xs font-medium text-gray-400">
                Top Geos by Volume
              </div>
            </div>
            
            <h3 className="text-gray-400 font-medium mb-8 relative z-10">Global Heatmap</h3>
            
            <div className="relative flex-1 flex items-center justify-center opacity-40">
              <Globe className="w-64 h-64 text-[#E50914]" strokeWidth={0.5} />
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-8 relative z-10">
               {[
                 { c: 'United States', v: '42%' },
                 { c: 'United Kingdom', v: '18%' },
                 { c: 'Australia', v: '12%' },
                 { c: 'Canada', v: '9%' }
               ].map((geo, i) => (
                 <div key={i}>
                   <p className="text-2xl font-display font-semibold text-white">{geo.v}</p>
                   <p className="text-xs text-gray-500 uppercase tracking-wider">{geo.c}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const categories = [
    { icon: Gift, title: "Sweepstakes", desc: "High-converting CC submit and SOI/DOI sweeps across all Tier 1 geos.", color: "from-purple-500/20 to-purple-500/0", border: "group-hover:border-purple-500/30" },
    { icon: Smartphone, title: "Mobile Apps", desc: "Premium CPI campaigns for utility, gaming, and entertainment apps.", color: "from-[#E50914]/20 to-[#E50914]/0", border: "group-hover:border-[#E50914]/30" },
    { icon: Users, title: "Lead Generation", desc: "Exclusive financial, insurance, and solar leads with massive payouts.", color: "from-blue-500/20 to-blue-500/0", border: "group-hover:border-blue-500/30" }
  ];

  return (
    <section id="offers" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Featured Verticals</h2>
            <p className="text-gray-400 text-lg font-light">We specialize in the most profitable niches in the industry, securing direct budgets from top advertisers.</p>
          </div>
          <button className="flex items-center gap-2 text-[#E50914] font-medium hover:text-red-400 transition-colors">
            View All Offers <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[32px] bg-[#111111] border border-[#222222] group relative overflow-hidden transition-all duration-500 ${c.border}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-64 bg-gradient-to-b ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mb-8 text-white">
                  <c.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4 tracking-tight">{c.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">{c.desc}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-[#222222] pt-6">
                  <span>50+ Live Offers</span>
                  <ChevronRight className="w-4 h-4 group-hover:text-white transition-colors" />
                </div>
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
    { title: "Register", desc: "Apply to join our exclusive network. Approvals are fast for experienced affiliates.", icon: ShieldCheck },
    { title: "Choose Offers", desc: "Browse our private marketplace and select top-performing campaigns.", icon: MousePointerClick },
    { title: "Drive Traffic", desc: "Send high-quality traffic using your tracking links.", icon: Globe },
    { title: "Get Paid", desc: "Receive automated payouts twice a week via your preferred method.", icon: Wallet }
  ];

  return (
    <section className="py-32 relative bg-[#0a0a0a] border-y border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">How It Works</h2>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#333333] to-transparent" />
          
          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 rounded-full bg-[#E50914] opacity-0 group-hover:opacity-10 scale-50 group-hover:scale-100 transition-all duration-500" />
                  <s.icon className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#E50914] text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed px-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Alex R.", role: "Media Buyer", earning: "$45k/mo", quote: "Switching to BigCash was the best decision for my sweepstakes campaigns. The EPC is literally 30% higher than competitors and I've never missed a payout." },
    { name: "Sarah J.", role: "App Marketer", earning: "$120k/mo", quote: "Their exclusive mobile app offers convert like crazy on TikTok ads. My dedicated manager is available on Skype at 2 AM to help me optimize." },
    { name: "Michael T.", role: "Lead Gen Specialist", earning: "$85k/mo", quote: "The tracking infrastructure is bulletproof. Fast loading pages, reliable postbacks, and premium payouts that allow me to bid aggressively." }
  ];

  return (
    <section id="testimonials" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center tracking-tight">Why Affiliates Love Us</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl glass-panel relative group hover:border-gray-600 transition-colors"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-[#E50914]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-8 text-lg">"{r.quote}"</p>
              
              <div className="flex items-center justify-between border-t border-[#222222] pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600"></div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{r.name}</h4>
                    <p className="text-xs text-gray-500">{r.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Avg Volume</p>
                  <p className="font-semibold text-[#E50914] text-sm">{r.earning}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Payments() {
  const methods = ["PayPal", "USDT (TRC20)", "Wire Transfer", "Payoneer", "Capitalist"];
  
  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a0a] border-y border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Fast Payments You Can Count On</h2>
          <p className="text-gray-400 text-lg font-light mb-10 leading-relaxed">
            Cash flow is the lifeblood of affiliate marketing. We offer twice-weekly net-3 payouts for all approved affiliates. Hit a certain volume, and we'll bump you to daily wires.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            {methods.map((m, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full bg-[#111111] border border-[#222222] text-gray-300 text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                {m}
              </div>
            ))}
          </div>
          
          <button className="text-white border-b border-[#E50914] pb-1 hover:text-[#E50914] transition-colors inline-flex items-center gap-2">
            View Payment Terms <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="relative">
           {/* Abstract illustration of security and payment */}
           <div className="w-full aspect-square max-w-md mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#222222] animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#222222] border-dashed animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-[#333333] animate-[spin_20s_linear_infinite]" />
              
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#E50914]/20 to-transparent flex items-center justify-center glass-panel relative z-10 shadow-[0_0_50px_rgba(229,9,20,0.2)]">
                 <ShieldCheck className="w-16 h-16 text-[#E50914]" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 p-3 rounded-xl bg-[#111111] border border-[#222222] shadow-xl">
                <Wallet className="w-6 h-6 text-green-500" />
              </div>
              <div className="absolute bottom-10 right-10 p-3 rounded-xl bg-[#111111] border border-[#222222] shadow-xl">
                <CreditCard className="w-6 h-6 text-blue-500" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="py-20 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-white mb-10 tracking-tight">Join Our Elite Community</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#E50914]/50 transition-colors group shadow-lg">
            <MessageSquare className="w-6 h-6 text-[#5865F2]" />
            <span className="font-medium text-gray-300 group-hover:text-white">Discord Server</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#E50914]/50 transition-colors group shadow-lg">
            <svg className="w-6 h-6 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.88 1.2-5.32 3.52-.5.35-.96.52-1.37.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.48.97-.74 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.51 4.36-1.77 4.85-1.78.11 0 .35.03.48.14.11.08.14.2.16.29.02.13.02.26 0 .44z"/></svg>
            <span className="font-medium text-gray-300 group-hover:text-white">Telegram Group</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#E50914]/50 transition-colors group shadow-lg">
            <PlayCircle className="w-6 h-6 text-red-500" />
            <span className="font-medium text-gray-300 group-hover:text-white">Video Tutorials</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#E50914] text-center">
      {/* Dark overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090909] via-transparent to-[#090909] opacity-90" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Ready to Scale Your Affiliate Business?</h2>
        <p className="text-xl text-gray-300 mb-10 font-light">Join the most exclusive network in the industry. Spaces are limited for new affiliates to ensure we provide the best support to our active members.</p>
        
        <button className="h-14 px-10 rounded-full bg-white text-[#090909] text-lg font-semibold hover:bg-gray-200 transition-all shadow-xl hover:scale-105 active:scale-95">
          Join BigCash Network
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0c0c0c] pt-20 pb-10 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-sm bg-[#E50914] flex items-center justify-center">
              </div>
              <span className="font-display font-bold text-lg tracking-tighter text-white">BIGCASH</span>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              The enterprise-grade CPA network for super affiliates. Maximum traffic. Maximum payouts.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Offers Marketplace</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tracking API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reporting Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Schedule</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.88 1.2-5.32 3.52-.5.35-.96.52-1.37.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.48.97-.74 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.51 4.36-1.77 4.85-1.78.11 0 .35.03.48.14.11.08.14.2.16.29.02.13.02.26 0 .44z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} BigCash Network. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Lock className="w-3 h-3" /> Secure Enterprise Platform
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <LivePerformance />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <Payments />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
