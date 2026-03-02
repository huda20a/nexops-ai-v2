'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const pillars = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Intelligent Automation',
      desc: 'AI that learns, adapts, and scales with your business needs.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
        </svg>
      ),
      title: 'Real-time Insights',
      desc: 'Data-driven intelligence delivered exactly when you need it.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: 'Human-centered AI',
      desc: 'Technology built to augment human potential, not replace it.',
    },
  ]

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"/>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-blue-600"/>
              <span 
                className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Small team.{' '}
              <span className="gradient-text">Big impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-500 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              NexOps AI is a focused team of four AI specialists dedicated to helping 
              businesses unlock the transformative power of artificial intelligence. 
              We specialize in practical, deployable AI solutions not theoretical concepts.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-slate-500 leading-relaxed mb-10"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              From automating customer service workflows to building predictive marketing 
              engines, our mission is to make enterprise-grade AI accessible to businesses 
              of every size.
            </motion.p>

            {/* Mission box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-6 bg-blue-600 rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
              <div 
                className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-3"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Our Mission
              </div>
              <p 
                className="text-white text-lg font-medium leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                &quot;To democratize artificial intelligence by delivering intelligent, 
                scalable, and responsible AI solutions that drive measurable business outcomes.&quot;
              </p>
            </motion.div>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="card-hover flex items-start gap-5 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  {pillar.icon}
                </div>
                <div>
                  <h3 
                    className="font-bold text-slate-900 mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {pillar.title}
                  </h3>
                  <p 
                    className="text-sm text-slate-500 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['Machine Learning', 'NLP', 'Computer Vision', 'LLMs', 'Automation', 'Analytics'].map((tag) => (
                <span 
                  key={tag}
                  className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}