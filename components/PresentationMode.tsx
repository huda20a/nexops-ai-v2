'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PresentationModeProps {
  onExit: () => void
}

// ─────────────────────────────────────────────
// SLIDE DATA
// ─────────────────────────────────────────────
const slides = [
  // ── SLIDE 1: AI IN MARKETING ──────────────
{
    number: '01',
    category: 'The New Paradigm',
    title: 'AI Marketing',
    subtitle: 'From manual friction to autonomous brand dominance',
    color: 'from-blue-600 to-indigo-900',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content: (
      <div className="space-y-24 pb-20">
        {/* ================= 1. STRONG OPENING ================= */}
        <section className="text-center space-y-6 pt-10">
          <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
            Marketing at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Light Speed.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            AI Marketing is the deployment of autonomous systems that handle research, creation, and distribution—allowing founders to focus on vision while the engine handles the execution.
          </p>
          
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <div className="p-8 rounded-3xl border border-white/5 bg-white/5 text-left">
              <div className="text-red-400 font-bold uppercase tracking-widest text-xs mb-4">Traditional Marketing</div>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li>• Slow human-dependent cycles</li>
                <li>• High fixed monthly overhead</li>
                <li>• Guesswork-based targeting</li>
                <li>• Limited by staff working hours</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl border border-blue-500/30 bg-blue-500/5 text-left relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10 text-6xl">⚡</div>
              <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">NexOps AI Marketing</div>
              <ul className="space-y-3 text-sm text-slate-200 font-bold">
                <li>• Millisecond execution cycles</li>
                <li>• Pay-per-output scalability</li>
                <li>• Data-driven neural targeting</li>
                <li>• 24/7/365 Autonomous growth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 2. THE PROBLEM ================= */}
        <section className="space-y-12">
          <div className="text-center">
            <h3 className="text-white text-3xl font-black italic uppercase">The Startup Struggle</h3>
            <p className="text-slate-500 text-sm mt-2">Why 90% of micro-enterprises stay "invisible"</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Budget Gap', desc: 'Cannot afford $5k/mo agency retainers.', icon: '💸' },
              { title: 'Design Delay', desc: 'Waiting days for simple social assets.', icon: '🎨' },
              { title: 'Copy Fatigue', desc: 'Founders too busy to write high-converting ads.', icon: '✍️' },
              { title: 'Tech Wall', desc: 'Complex ad managers and coding barriers.', icon: '🧱' },
              { title: 'Inconsistency', desc: 'Posting once a month when time permits.', icon: '📉' },
              { title: 'Weak Branding', desc: 'Generic designs that don’t command authority.', icon: '🎭' },
              { title: 'No Data', desc: 'Running ads without knowing what actually works.', icon: '📊' },
              { title: 'Slow Launch', desc: 'Taking weeks to build a simple landing page.', icon: '🚀' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-white font-bold text-xs mb-1 uppercase">{item.title}</div>
                <div className="text-slate-500 text-[10px] leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 p-6 rounded-3xl text-center border-x border-red-500/20">
             <span className="text-white font-black italic uppercase tracking-widest text-sm">
                "In a fast-moving digital world, slow marketing means lost opportunity."
             </span>
          </div>
        </section>

        {/* ================= 3. HOW AI SOLVES THIS ================= */}
        <section className="bg-blue-600/5 border border-blue-500/20 rounded-[40px] p-12 space-y-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">The NexOps Solution</h2>
            <p className="text-slate-400 text-sm mt-2">Strategic deployment of intelligence to reclaim founder freedom.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: 'Production Speed', d: 'Reduce creation time from days to minutes using automated visual pipelines.', c: 'from-blue-500 to-cyan-400' },
              { t: 'Cost Collapse', d: 'Eliminate middleman agency fees. Generate enterprise output at solo-founder costs.', c: 'from-indigo-500 to-purple-400' },
              { t: 'Infinite Scale', d: 'Test 100 variations of an ad instead of one. Find winners with neural precision.', c: 'from-emerald-500 to-teal-400' }
            ].map((box, i) => (
              <div key={i} className="space-y-4">
                <div className={`h-1 w-12 bg-gradient-to-r ${box.c}`} />
                <h4 className="text-white font-bold uppercase text-sm tracking-widest">{box.t}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{box.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. AI TYPES ================= */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
             <h3 className="text-white text-3xl font-black italic uppercase">The Intelligence Stack</h3>
             <p className="text-blue-400 font-mono text-[10px] tracking-[0.3em] uppercase">Generative vs. Agentic</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-6 group hover:border-blue-500/30 transition-all">
              <div className="text-4xl">🎨</div>
              <h4 className="text-2xl font-black text-white italic">Generative AI</h4>
              <p className="text-slate-400 text-sm">The "Creative Arm" that produces raw assets.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Text Generation', 'Image Synth', 'Video Production', 'Ad Copywriting'].map(li => (
                  <div key={li} className="bg-black/40 p-3 rounded-xl border border-white/5 text-[10px] text-slate-300 font-bold uppercase tracking-tight">
                    • {li}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-6 group hover:border-indigo-500/30 transition-all">
              <div className="text-4xl">🤖</div>
              <h4 className="text-2xl font-black text-white italic">Agentic AI</h4>
              <p className="text-slate-400 text-sm">The "Strategic Brain" that executes actions.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Tool Integration', 'Workflow Automation', 'Sequence Execution', 'Self-Optimization'].map(li => (
                  <div key={li} className="bg-black/40 p-3 rounded-xl border border-white/5 text-[10px] text-indigo-300 font-bold uppercase tracking-tight">
                    • {li}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. TOOLKIT ================= */}
        <section className="space-y-12">
          <h3 className="text-center text-white font-black italic uppercase text-3xl">The NexOps Toolkit</h3>
          <div className="grid grid-cols-2 gap-6">
            {[
              { 
                cat: 'Content & Copy', 
                tools: [
                  { name: 'Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
                  { name: 'Claude', logo: '/images/claude.jpg' },
                  { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' }
                ],
                desc: 'Strategic Writing'
              },
              { 
                cat: 'Visual & Branding', 
                tools: [
                  { name: 'Canva', logo: '/images/Canva-and-Leonardo.jpg' },
                  { name: 'MS Designer', logo: '/images/ms_desinger.jpg' },
                  { name: 'Looka', logo: '/images/looka.png' }
                ],
                desc: 'Asset Production'
              },
              { 
                cat: 'Apps & UI', 
                tools: [
                  { name: 'Copilot', logo: '/images/copilot.jpg' },
                  { name: 'Lovable', logo: 'https://lovable.dev/favicon.ico' },
                  { name: 'Framer', logo: '/images/framer.png' }
                ],
                desc: 'Product Creation'
              },
              { 
                cat: 'Workflows', 
                tools: [
                  { name: 'n8n', logo: '/images/n8n.png' },
                  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg' },
                  { name: 'Make', logo: '/images/make.jpg' }
                ],
                desc: 'Agent Orchestration'
              }
            ].map((group) => (
              <div key={group.cat} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-white font-bold uppercase text-xs tracking-widest">{group.cat}</div>
                  <div className="text-[9px] text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded-full">{group.desc}</div>
                </div>
                <div className="flex gap-8">
                  {group.tools.map(tool => (
                    <div key={tool.name} className="flex flex-col items-center gap-2 group/tool">
                       <div className="w-12 h-12 bg-white rounded-xl p-2.5 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                          <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" onError={(e) => {e.target.src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"}} />
                       </div>
                       <span className="text-slate-500 text-[9px] font-bold uppercase">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 6. META ADS UPDATE ================= */}
        <section className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-[40px] p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full" />
          <div className="relative z-10 grid grid-cols-12 gap-12 items-center">
            <div className="col-span-4 flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 bg-white rounded-3xl p-4 shadow-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" className="w-full h-full object-contain" alt="Meta" />
              </div>
              <div className="text-blue-400 font-black text-xl tracking-tighter">Advantage+</div>
            </div>
            <div className="col-span-8 space-y-6 border-l border-white/10 pl-12">
               <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">The Death of Manual Targeting</h3>
               <p className="text-slate-300 text-sm leading-relaxed">
                 Meta’s latest updates prove the world has shifted. Modern Meta Ads no longer rely on human targeting—they rely on **Creative-Driven Data**. 
               </p>
               <p className="text-slate-400 text-xs leading-relaxed">
                 The AI analyzes your visual assets, generates synthetic audience data, and self-optimizes placements. If your creative is weak, your ads fail. If your creative is AI-optimized, your ROAS explodes.
               </p>
            </div>
          </div>
        </section>

        {/* ================= 7. FLOW DIAGRAM ================= */}
        <section className="space-y-12">
          <h3 className="text-center text-white font-black italic uppercase text-2xl tracking-tighter">The Content Multiplier</h3>
          <div className="flex items-center justify-between gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Blog Post', icon: '📄' },
              { label: 'AI Repurposing', icon: '🧠' },
              { label: 'LinkedIn', icon: '💼' },
              { label: 'Instagram', icon: '📸' },
              { label: 'Newsletter', icon: '📧' }
            ].map((step, i) => (
              <div key={i} className="flex flex-1 items-center gap-4">
                <div className="flex-1 text-center space-y-3">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl mx-auto shadow-xl">
                    {step.icon}
                  </div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{step.label}</div>
                </div>
                {i < 4 && <div className="text-blue-500 font-bold text-xl">→</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ================= 8. SANDWICH MODEL ================= */}
        <section className="bg-white border border-white/10 rounded-[40px] p-12 relative overflow-hidden text-black">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-black italic leading-tight uppercase tracking-tighter">The <span className="text-blue-600">Sandwich</span> Model</h3>
              <div className="space-y-4">
                {[
                  { label: 'HUMAN', desc: 'Defines vision & strategy', color: 'bg-blue-600', text: 'text-white' },
                  { label: 'AI', desc: 'Executes, generates, and scales at speed', color: 'bg-slate-200', text: 'text-slate-800' },
                  { label: 'HUMAN', desc: 'Reviews, refines, and optimizes for brand voice', color: 'bg-blue-600', text: 'text-white' }
                ].map((row, i) => (
                  <div key={i} className={`p-5 rounded-2xl flex items-center justify-between shadow-lg ${row.color}`}>
                    <div className={`${row.text} font-black text-sm tracking-widest`}>{row.label}</div>
                    <div className={`text-[11px] font-bold ${row.text} opacity-80 uppercase`}>{row.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-3xl shadow-2xl space-y-4 border-4 border-blue-500/20">
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
               </div>
               <h4 className="font-bold text-sm text-blue-400 uppercase tracking-widest">Case Study: Me-Claude-Me</h4>
               <p className="text-xs leading-relaxed text-slate-400">
                  This entire presentation system was built via the sandwich:
               </p>
               <ul className="text-[10px] space-y-2 font-mono">
                  <li className="text-blue-300">• ME: Defined the prompt and structure</li>
                  <li className="text-emerald-300">• CLAUDE: Generated the complex React/Tailwind code</li>
                  <li className="text-blue-300">• ME: Refined the visuals and fixed implementation</li>
               </ul>
               <div className="pt-4 mt-4 border-t border-white/10 text-[9px] font-black uppercase text-center text-slate-500">
                  Human Creativity x AI Velocity
               </div>
            </div>
          </div>
        </section>

        {/* ================= 9. CLOSING ================= */}
        <section className="text-center py-10 border-t border-white/5">
           <h4 className="text-2xl font-black text-white italic max-w-2xl mx-auto leading-tight">
             "AI does not replace marketing strategy. It amplifies creativity and accelerates execution."
           </h4>
        </section>
      </div>
    ),
  },
  // ── SLIDE 2: CUSTOMER SERVICE AUTOMATION ──
{
    number: '02',
    category: 'Strategic Growth',
    title: 'Empowering the One-Person Enterprise',
    subtitle: 'Scaling Auto-Entrepreneurs with Human-Level AI Agents',
    color: 'from-blue-600 to-indigo-700',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    content: (
      <div className="space-y-16">
        {/* ================= HERO SECTION ================= */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-black tracking-tighter text-white uppercase">
            One Founder. <span className="text-blue-500">Zero Staff.</span> Full Capacity.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The "Zero Staff" solution for micro-businesses. No-code, instantly deployable AI agents acting as your Defense (Support) and Offense (Lead Gen) engines.
          </p>
        </section>

        {/* ================= PROBLEM: THE HIDDEN COST ================= */}
        <section className="space-y-6">
          <h3 className="text-red-400 text-sm font-bold uppercase tracking-widest text-center">
            The Hidden Cost of "Doing It All"
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { val: '82%', label: 'Availability Gap', desc: 'Customers demanding immediate answers.' },
              { val: '900+h', label: 'The Time Trap', desc: 'Lost annually to manual support and admin.' },
              { val: '35K MAD', label: 'Financial Barrier', desc: 'Monthly cost to hire one human staff member.' },
            ].map((item) => (
              <div key={item.label} className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-red-400">{item.val}</div>
                <div className="text-white font-bold text-sm mt-1">{item.label}</div>
                <div className="text-slate-400 text-xs mt-2 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= THE ENGINES (DEFENSE & OFFENSE) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Defense Engine */}
          <section className="bg-blue-600/5 border border-blue-500/20 rounded-3xl p-8 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
              Defense Engine
            </div>
            <h3 className="text-xl font-bold text-white">24/7 Support Agent</h3>
            <ul className="space-y-3">
              {[
                'Trained on YOUR PDFs & brand voice',
                'Omnichannel: Web, WhatsApp, Instagram',
                'Global Reach: Fluent in 30+ languages',
                'Smart Escalation: Auto-detects complex queries'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Offense Engine */}
          <section className="bg-indigo-600/5 border border-indigo-500/20 rounded-3xl p-8 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase">
              Offense Engine
            </div>
            <h3 className="text-xl font-bold text-white">The AI SDR (Lead Gen)</h3>
            <ul className="space-y-3">
              {[
                'SCAN: ICP Identification',
                'SCORE: Prioritize by Intent',
                'PERSONALIZE: AI Drafts Unique Messages',
                'SEND: Auto-Follow Up (5-7 Touchpoints)'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ================= RAG ARCHITECTURE SECTION ================= */}
        <section className="space-y-8">
          <h3 className="text-blue-400 text-sm font-bold uppercase tracking-widest text-center">
            The RAG Core Brain Architecture
          </h3>
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="text-blue-400 text-[10px] font-bold uppercase mb-1">Input</div>
                <div className="text-white text-xs">Customer Question (WhatsApp/Web)</div>
              </div>
              <div className="flex justify-center text-blue-500 text-2xl rotate-90 md:rotate-0">→</div>
              <div className="bg-blue-600 p-6 rounded-2xl text-white font-black shadow-xl shadow-blue-500/30 border border-blue-400/50">
                NexOps RAG Engine
                <div className="text-[9px] font-medium mt-1 opacity-80 uppercase tracking-tighter">Vector Database + LLM</div>
              </div>
              <div className="hidden md:flex justify-center text-blue-500 text-2xl">→</div>
              <div className="md:hidden flex justify-center text-blue-500 text-2xl rotate-90">→</div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="text-emerald-400 text-[10px] font-bold uppercase mb-1">Output</div>
                <div className="text-white text-xs">Human-Level Accurate Reply</div>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] mt-6 italic">
              Unlike generic AI, RAG retrieves specific facts from your business documents before generating an answer.
            </p>
          </div>
        </section>
        {/* Change 'overflow-hidden' to 'overflow-visible' and add 'z-10 hover:z-50' */}
        <div className="relative group p-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-[40px] z-10 hover:z-50 transition-all duration-500">
        <div className="bg-black/60 rounded-[38px] overflow-visible border border-white/10 shadow-2xl">
          <img 
            src="/images/rag1.png" 
            alt="rag 1" 
        /* Added 'group-hover:relative' and 'group-hover:z-50' to ensure it jumps to the front */
            className="w-full h-auto object-contain rounded-[38px] opacity-80 
                 group-hover:opacity-100 group-hover:scale-110 
                 group-hover:relative group-hover:z-50
                 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)] 
                 transition-all duration-700 ease-out cursor-zoom-in"
            />
        </div>   
        </div>     

        {/* ================= PIPELINE GROWTH CHART ================= */}
        <section className="space-y-12">
          <div className="text-center">
            <h3 className="text-white font-bold text-xl uppercase tracking-tight">Consistent Pipeline, Predictable Revenue</h3>
          </div>
          
          <div className="relative h-48 w-full max-w-2xl mx-auto flex items-end justify-between px-10 border-b border-white/10">
            {[
               { month: 'Month 1', height: 'h-20', val: '150+', label: 'Setup & Warmup' },
               { month: 'Month 2', height: 'h-32', val: '250+', label: 'Scaling Outreach' },
               { month: 'Month 3', height: 'h-44', val: '400+', label: 'Full Capacity' },
            ].map((m) => (
              <div key={m.month} className="flex flex-col items-center gap-4 w-32 relative">
                <div className="text-white font-black text-lg animate-pulse">{m.val}</div>
                <div className={`${m.height} w-full bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-lg opacity-90 shadow-lg shadow-blue-500/20`} />
                <div className="absolute -bottom-12 text-center w-32">
                  <div className="text-white text-xs font-bold">{m.month}</div>
                  <div className="text-slate-500 text-[10px] leading-tight mt-1">{m.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-16 grid grid-cols-2 gap-4">
             <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-1">Efficiency Impact</div>
                <div className="text-white text-sm font-medium">20 hours of manual work reduced to 1 hour</div>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-indigo-400 font-bold uppercase text-[10px] tracking-widest mb-1">Growth Impact</div>
                <div className="text-white text-sm font-medium">+40-60% Pipeline growth by Month 3</div>
             </div>
          </div>
        </section>
 {/* ================= THE EQUATION OF FREEDOM ================= */}
        <section className="py-12 border-y border-white/5 text-center space-y-8">
          <h3 className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em]">The Success Formula</h3>
          <div className="flex justify-center items-center gap-6 md:gap-12">
            <div className="group text-center">
              <div className="w-20 h-20 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">🛡️</div>
              <div className="text-white text-xs font-bold uppercase">Support Agent</div>
            </div>
            <div className="text-slate-500 text-3xl font-light">+</div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-indigo-400 text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">⚔️</div>
              <div className="text-white text-xs font-bold uppercase">Sales Agent</div>
            </div>
            <div className="text-slate-500 text-3xl font-light">=</div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl flex items-center justify-center text-emerald-400 text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">🔓</div>
              <div className="text-emerald-400 text-xs font-black uppercase tracking-widest underline decoration-emerald-500/50 underline-offset-4">Founder Freedom</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm italic max-w-lg mx-auto">
            "When defense is automated and offense is on autopilot, the founder is finally free to focus on high-level strategy and growth."
          </p>
        </section>
        {/* ================= FINAL SUMMARY (MAX VALUE) ================= */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-10 overflow-hidden relative">
          <div className="absolute top-4 left-6 text-blue-200/20 font-mono text-[10px] tracking-[0.3em]">ΣTIME + £REVENUE = MAX(VALUE)</div>
          <div className="relative z-10 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-white tracking-tighter">900</div>
              <div className="text-blue-100 text-xs font-bold uppercase mt-1">Hours Saved/Year</div>
              <p className="text-blue-200/60 text-[10px] mt-2 italic">~2.5 hours recovered daily</p>
            </div>
            <div>
              <div className="text-4xl font-black text-white tracking-tighter">450K</div>
              <div className="text-blue-100 text-xs font-bold uppercase mt-1">MAD Value</div>
              <p className="text-blue-200/60 text-[10px] mt-2 italic">Annual billable productivity</p>
            </div>
            <div>
              <div className="text-4xl font-black text-white tracking-tighter">21x</div>
              <div className="text-blue-100 text-xs font-bold uppercase mt-1">Conversion</div>
              <p className="text-blue-200/60 text-[10px] mt-2 italic">Response time &lt;3 seconds</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/5 select-none uppercase italic">
            Max
          </div>
        </section>
      </div>
    ),
  },

  // ── SLIDE 3: EMAIL MANAGEMENT / OPERATIONS ──
 {
    number: '03',
    category: 'Operations',
    title: 'AI Email Management',
    subtitle: 'The Email Tsunami — and how AI tames it in milliseconds',
    color: 'from-blue-700 to-cyan-700',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    content: (
      <div className="space-y-24 pb-20">
        {/* ================= 1. THE PROBLEM: EMAIL TSUNAMI ================= */}
        <section className="space-y-8 pt-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-3xl shadow-inner">🌊</div>
            <div>
              <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">The Email Tsunami</h2>
              <p className="text-slate-400 text-sm font-medium">Information overload creates a stalling momentum that paralyzes growth.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { val: '28%', unit: 'Of workday lost to email', icon: '⏳', detail: '1 full day per week' },
              { val: '127', unit: 'Daily incoming messages', icon: '📬', detail: 'Average professional' },
              { val: '40%', unit: 'Misrouted or buried', icon: '❌', detail: 'Lost revenue ops' },
            ].map(({ val, unit, icon, detail }) => (
              <div key={unit} className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center group hover:bg-amber-500/5 transition-all">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="text-amber-400 font-black text-3xl italic tracking-tighter mb-1">{val}</div>
                <div className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">{unit}</div>
                <div className="text-slate-500 text-[9px] font-mono">{detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 2. WHO SUFFERS? ================= */}
        <section className="space-y-8">
          <h3 className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] text-center italic">Impact Assessment</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { dept: 'Sales & Dev', pain: 'High-value requests buried; speed-to-lead is dead.', icon: '📊', color: 'border-emerald-500/20' },
              { dept: 'Marketing & PR', pain: 'Influencer offers & media ops missed in the noise.', icon: '📣', color: 'border-blue-500/20' },
              { dept: 'Customer Support', pain: 'Urgent complaints mixed with low-priority noise.', icon: '🎧', color: 'border-indigo-500/20' },
              { dept: 'Founders', pain: 'Decision fatigue. Inbox dictates the schedule.', icon: '👤', color: 'border-purple-500/20' },
            ].map((item) => (
              <div key={item.dept} className={`flex items-start gap-4 bg-white/5 border ${item.color} rounded-2xl p-6 hover:scale-[1.05] transition-transform duration-300`}>
                <span className="text-2xl bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl">{item.icon}</span>
                <div>
                  <div className="text-white font-black text-sm uppercase italic mb-1">{item.dept}</div>
                  <div className="text-slate-400 text-xs leading-relaxed font-medium">{item.pain}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

       {/* ================= 3. THE EVOLUTION (TOP-LAYER HOVER) ================= */}
<section className="space-y-10 isolation-auto">
  <div className="text-center">
    <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">The Evolution</h2>
    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1">Hover to inspect — Details will appear above all layers</p>
  </div>
  
  <div className="grid grid-cols-2 gap-8">
    {/* OLD WAY COLUMN */}
    <div className="space-y-4">
      <div className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] text-center italic">The Old Way (Manual) [cite: 11, 33]</div>
      <div className="rounded-[32px] bg-black/40 aspect-video relative group transition-all">
        <img 
          src="/images/oldway.jpg" 
          alt="Old Way Inbox Chaos" 
          className="w-full h-full object-cover rounded-[32px] border-2 border-red-500/20 grayscale opacity-60 
                     group-hover:grayscale-0 group-hover:opacity-100 
                     group-hover:scale-125 group-hover:z-[9999] group-hover:relative
                     transition-all duration-500 ease-in-out cursor-zoom-in shadow-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
           <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase italic">Chaos Inbound</span>
        </div>
      </div>
    </div>

    {/* NEXOPS WAY COLUMN */}
    <div className="space-y-4">
      <div className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] text-center italic">The NexOps Way (AI) [cite: 12, 34]</div>
      <div className="rounded-[32px] bg-blue-900/10 aspect-video relative group transition-all">
        <img 
          src="/images/newway.jpg" 
          alt="NexOps Organized AI" 
          className="w-full h-full object-cover rounded-[32px] border-2 border-blue-500/40 
                     group-hover:scale-125 group-hover:z-[9999] group-hover:relative
                     group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.6)] 
                     transition-all duration-500 ease-in-out cursor-zoom-in"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
           <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase italic">Intelligent Triage</span>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* ================= 4. THE WORKFLOW (PDF PAGE 1 IMAGE) ================= */}
        <section className="space-y-8">
           <div className="text-center">
              <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter leading-none">The Solution Architecture</h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-2 italic">From Manual Sorting to Intelligent AI Triage</p>
           </div>
           
           <div className="relative group p-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-[40px]">
              <div className="bg-black/60 rounded-[38px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/images/workflow.jpg" 
                  alt="NexOps AI Workflow" 
                  className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-in-out"
                />
              </div>
              
              <div className="absolute top-8 left-8 bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-xl italic shadow-xl pointer-events-none">
                 CORE ENGINE: n8n + AI AGENT
              </div>
           </div>
        </section>

        {/* ================= 5. THE AI GAME CHANGER ================= */}
        <section className="bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/30 rounded-[40px] p-12 space-y-10">
          <div className="flex items-end justify-between">
            <div className="max-w-md text-left">
              <h3 className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2">The AI Game Changer</h3>
              <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Understanding Intent</h2>
            </div>
            <div className="bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
              <span className="text-blue-300 font-mono text-[10px] font-bold">Accuracy: 99%</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 text-left">
            {[
              { t: 'Millisecond Reading', d: 'Processes incoming emails in milliseconds, far exceeding human speed.', i: '⚡' },
              { t: 'Contextual Analysis', d: 'Understands intent and urgency, not just keywords.', i: '🧠' },
              { t: 'Instant Routing', d: 'Triggers automated workflows or routes to teams.', i: '🎯' }
            ].map((tech, idx) => (
              <div key={idx} className="space-y-4 p-6 bg-black/20 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="text-3xl">{tech.i}</div>
                <h4 className="text-white font-bold text-sm uppercase tracking-tighter italic">{tech.t}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{tech.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 6. FINAL IMPACT ================= */}
        <section className="text-center pt-10 pb-20">
           <div className="inline-block bg-white text-black px-8 py-4 rounded-2xl transform -rotate-1 shadow-2xl hover:rotate-0 transition-transform duration-300">
              <h4 className="font-black italic uppercase tracking-tighter text-xl leading-none">
                ONE FOUNDER. ZERO STAFF. FULL CAPACITY.
              </h4>
           </div>
           <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-6 italic">
             Reclaim your time. Focus on what truly matters.
           </p>
        </section>
      </div>
    ),
  },
 
 // ── SLIDE 4: DATA & ANALYTICS ──────────────
// ── SLIDE 4: DATA & ANALYTICS (FULL PDF ADAPTATION) ──────────────
{
  number: '04',
  category: 'Data & Analytics',
  title: 'AI Data & Financial Analytics',
  subtitle: 'Empowering Small Business Owners with Intelligent AI Agents',
  color: 'from-slate-700 to-blue-700',
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>
  ),
  content: (
    <div className="space-y-28 pb-24">
      
      {/* SECTION 1: THE CHALLENGE (PDF PAGE 3-4) */}
      <section className="space-y-10 pt-6">
        <div className="text-center space-y-4">
          <h3 className="text-red-500 text-xs font-black uppercase tracking-[0.4em] italic">01. The Challenge</h3>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Why Small Business Owners Struggle</h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">Most people start businesses with energy and ideas, but without strong analytical or financial experience, they hit a wall.</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[
            { title: 'No Financial Visibility', desc: "Owners don't know if they are profitable or where waste is happening.", icon: '📉' },
            { title: 'Unused Data', desc: 'Sales and expense records exist, but there are no tools to understand trends.', icon: '📂' },
            { title: 'Poor Decision-Making', desc: 'Pricing, budgets, and investments are based on guesses, not insight.', icon: '🎲' },
          ].map((item) => (
            <div key={item.title} className="bg-red-500/5 border border-red-500/10 p-8 rounded-[40px] hover:bg-red-500/10 transition-all border-dashed">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-white font-black text-base uppercase italic mb-2">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: WHAT ARE AI AGENTS? (PDF PAGE 5-6) */}
      <section className="bg-white/5 border border-white/10 rounded-[50px] p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl font-black italic uppercase">Solution</div>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <h3 className="text-blue-400 text-xs font-black uppercase tracking-[0.4em] italic">02. The Solution</h3>
             <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">AI Agents: Your Smart System</h2>
             <p className="text-slate-400 text-sm leading-relaxed font-medium">
               An AI Agent isn't just a chatbot. It's a system that <span className="text-blue-400">Connects</span>, <span className="text-blue-400">Analyzes</span>, and <span className="text-blue-400">Suggests</span> actions continuously.
             </p>
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                 <div className="text-blue-400 font-bold text-xs uppercase mb-1">Automated</div>
                 <div className="text-slate-500 text-[10px]">Works 24/7 without manual input</div>
               </div>
               <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                 <div className="text-blue-400 font-bold text-xs uppercase mb-1">Intelligent</div>
                 <div className="text-slate-500 text-[10px]">Learns from your specific data</div>
               </div>
             </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-transparent p-8 rounded-full border border-blue-500/20 text-center">
             <div className="text-5xl mb-4">🤖</div>
             <div className="text-white font-black italic text-xl uppercase tracking-tighter">The Agent CFO</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKFLOW DIAGRAM (PDF PAGE 15) */}
      <section className="space-y-10">
        <div className="text-center">
          <h3 className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] italic mb-2">03. How It Works</h3>
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none text-blue-500">Agent CFO Workflow</h2>
        </div>

        <div className="relative group p-1 bg-gradient-to-br from-blue-500/40 to-transparent rounded-[40px] z-10 hover:z-50 transition-all">
          <div className="bg-black rounded-[38px] overflow-visible border border-white/10 shadow-2xl">
            <img 
              src="/images/rag2.jpg" 
              alt="Agent CFO n8n Workflow" 
              className="w-full h-auto object-contain rounded-[38px] opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out cursor-zoom-in"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: SPECIALIST DELEGATION (PDF PAGE 14) */}
      <section className="space-y-12">
        <div className="flex justify-between items-end">
          <div className="max-w-md">
            <h3 className="text-blue-400 text-xs font-black uppercase tracking-[0.4em] italic mb-2">04. The Squad</h3>
            <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">6 Specialists, One Goal.</h2>
          </div>
          <p className="text-slate-500 text-[10px] uppercase font-bold text-right italic">Powered by GPT-4o-mini & n8n</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { role: 'Planning Analyst', task: 'Budgets, forecasts & models', icon: '📅' },
            { role: 'Accounting Specialist', task: 'Bookkeeping & tax compliance', icon: '📂' },
            { role: 'Cash Management', task: 'Liquidity & cash flow monitoring', icon: '💰' },
            { role: 'Financial Analyst', task: 'KPIs, metrics & variance analysis', icon: '📊' },
            { role: 'Risk Analyst', task: 'Capital allocation & risk mgmt', icon: '⚖️' },
            { role: 'Internal Audit', task: 'Compliance, controls & audits', icon: '🛡️' },
          ].map((agent) => (
            <div key={agent.role} className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group">
              <span className="text-3xl w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-blue-500/20 transition-colors shadow-inner">{agent.icon}</span>
              <div>
                <div className="text-white font-black text-xs uppercase italic tracking-tighter mb-1">{agent.role}</div>
                <div className="text-slate-500 text-[11px] leading-tight font-medium">{agent.task}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FINAL IMPACT (PDF PAGE 16) */}
      <section className="pt-10">
        <div className="text-center space-y-12 bg-gradient-to-b from-transparent to-blue-900/20 rounded-[60px] p-16 border-x border-b border-white/5">
           <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">The Future of <span className="gradient-text">Small Business</span></h2>
           
           <div className="flex items-center justify-between max-w-4xl mx-auto">
             {['Data', 'Analysis', 'Decisions', 'Results'].map((text, i, arr) => (
               <div key={text} className="flex items-center gap-6">
                 <div className="bg-white text-black px-6 py-3 rounded-xl font-black italic uppercase text-lg shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                   {text}
                 </div>
                 {i < arr.length - 1 && <span className="text-blue-500 font-bold text-2xl">→</span>}
               </div>
             ))}
           </div>

           <div className="max-w-2xl mx-auto pt-10">
              <p className="text-slate-400 text-sm italic font-medium">
                "Small and medium businesses can grow smarter and more confidently with AI Agents: Bridging the gap between raw data and clear financial decisions."
              </p>
           </div>
        </div>
      </section>

    </div>
  ),
},
]

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function PresentationMode({ onExit }: PresentationModeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<'right' | 'left'>('right')
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback((index: number, dir: 'right' | 'left') => {
    if (isAnimating || index < 0 || index >= slides.length) return
    setIsAnimating(true)
    setDirection(dir)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  const next = useCallback(() => goTo(currentSlide + 1, 'right'), [currentSlide, goTo])
  const prev = useCallback(() => goTo(currentSlide - 1, 'left'), [currentSlide, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
      if (e.key === 'Escape') onExit()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev, onExit])

  const slide = slides[currentSlide]

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col overflow-hidden">
      {/* ── TOP BAR ── */}
      <div className="relative z-20 flex items-center justify-between px-6 py-3 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
              <path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" fillOpacity="0.5"/>
              <path d="M7.5 9L12 4.5L16.5 9L12 13.5L7.5 9Z" fill="white"/>
            </svg>
          </div>
          <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            NexOps <span className="text-blue-400">AI</span>
          </span>
          <span className="text-slate-600 text-xs mx-1 hidden sm:inline">|</span>
          <span className="text-slate-400 text-xs hidden sm:inline" style={{ fontFamily: 'var(--font-mono)' }}>
            AI Solutions Presentation 2026
          </span>
        </div>

        {/* Slide dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentSlide ? 'right' : 'left')}
              className={`transition-all duration-300 rounded-full ${
                i === currentSlide ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={onExit}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span className="hidden sm:inline">Exit [Esc]</span>
        </button>
      </div>

      {/* ── MAIN SLIDE AREA ── */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={{
              enter: (dir: string) => ({ x: dir === 'right' ? 80 : -80, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir: string) => ({ x: dir === 'right' ? -80 : 80, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex"
          >
            {/* ── LEFT PANEL ── */}
            <div className={`relative w-64 xl:w-72 flex-shrink-0 bg-gradient-to-b ${slide.color} flex flex-col p-8 overflow-hidden`}>
              {/* Background circles */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-1/4 -left-16 w-48 h-48 border border-white rounded-full"/>
                <div className="absolute bottom-1/4 -right-16 w-64 h-64 border border-white rounded-full"/>
              </div>

              {/* Slide number */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-7xl font-extrabold text-white/10 leading-none block"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {slide.number}
              </motion.span>

              <div className="flex-1 flex flex-col justify-center gap-4">
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-14 h-14 bg-white/15 backdrop-blur rounded-2xl flex items-center justify-center text-white"
                >
                  {slide.icon}
                </motion.div>

                {/* Category */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-xs font-semibold text-white/60 uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {slide.category}
                </motion.span>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg xl:text-xl font-semibold text-white leading-snug"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-xs text-white/55 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {slide.subtitle}
                </motion.p>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-white/40" style={{ fontFamily: 'var(--font-mono)' }}>
                  <span>Progress</span>
                  <span>{currentSlide + 1} / {slides.length}</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* ── RIGHT PANEL — CONTENT ── */}
            <div className="flex-1 bg-slate-950 overflow-y-auto">
              <div className="p-6 lg:p-10 max-w-3xl">
                {/* Keyboard hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 mb-6 text-slate-600 text-xs"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-xs">←</kbd>
                  <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-xs">→</kbd>
                  <span>Navigate · Esc to exit</span>
                </motion.div>

                {/* Dynamic content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── BOTTOM NAV ── */}
      <div className="relative z-20 flex items-center justify-between px-6 py-3 border-t border-white/5 bg-slate-950">
        <button
          onClick={prev}
          disabled={currentSlide === 0}
          className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
            currentSlide === 0 ? 'text-slate-700 cursor-not-allowed' : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Previous
        </button>

        {/* Center nav labels */}
        <div className="hidden md:flex items-center gap-1">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentSlide ? 'right' : 'left')}
              className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
                i === currentSlide ? 'text-blue-400 bg-blue-500/10 font-semibold' : 'text-slate-600 hover:text-slate-400'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {s.number}
            </button>
          ))}
        </div>

        <button
          onClick={currentSlide === slides.length - 1 ? onExit : next}
          className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
            currentSlide === slides.length - 1
              ? 'text-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {currentSlide === slides.length - 1 ? (
            <>
              Back to Site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
            </>
          ) : (
            <>
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
