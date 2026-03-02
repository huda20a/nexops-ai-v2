'use client'

import { motion } from 'framer-motion'

interface FooterProps {
  onStartPresentation: () => void
}

export default function Footer({ onStartPresentation }: FooterProps) {
  return (
    <footer id="solutions" className="bg-slate-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"/>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"/>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA block */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div 
              className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Ready to see it?
            </div>
            <h2 
              className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              View our{' '}
              <span className="text-blue-400">AI Solutions</span>
              <br/>presentation
            </h2>
            <p 
              className="text-slate-400 mb-8 max-w-md mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              A deep dive into how NexOps AI is revolutionizing marketing, customer service, 
              analytics, and operations.
            </p>
            <button
              onClick={onStartPresentation}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/50 hover:shadow-xl hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Launch Presentation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" fillOpacity="0.5"/>
                  <path d="M7.5 9L12 4.5L16.5 9L12 13.5L7.5 9Z" fill="white"/>
                </svg>
              </div>
              <span 
                className="font-bold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                NexOps <span className="text-blue-400">AI</span>
              </span>
            </div>
            <p 
              className="text-xs text-slate-500"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              © 2026 NexOps AI — Transforming Business with Intelligent Solutions
            </p>
            <div className="flex items-center gap-2">
              <span 
                className="text-xs text-slate-600"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Built with
              </span>
              <span className="text-xs text-blue-500 font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                Next.js + AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
