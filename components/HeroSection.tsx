'use client'

import { motion } from 'framer-motion'
import QRCodePlaceholder from './QRCodePlaceholder'

interface HeroProps {
  onStartPresentation: () => void
}

export default function HeroSection({ onStartPresentation }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-5"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
        />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent w-full origin-left"
            style={{ top: `${20 + i * 20}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
              <span 
                className="text-xs font-semibold text-blue-700 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Next-Gen AI Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Transforming{' '}
              <span className="relative">
                <span className="gradient-text">Business</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  
                />
              </span>
              <br />
              with Intelligent
              <br />
              <span className="gradient-text">AI Solutions</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              NexOps AI delivers enterprise-grade artificial intelligence across marketing, 
              customer service, data analytics, and operations empowering businesses to 
              make smarter decisions, faster.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={onStartPresentation}
                className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span>Start Presentation</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium px-4 py-4 rounded-xl transition-colors duration-200 hover:bg-blue-50"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>

            {/* Stats Row */}
           
          </div>

          {/* Right — Large QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex flex-col items-center gap-5">
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <span className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse"/>
                Scan to Join · NexOps AI 2026
              </motion.div>

              {/* Large QR Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative bg-white rounded-3xl border-2 border-blue-100 shadow-2xl blue-glow p-6 float-anim"
              >
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-blue-400 rounded-tl-lg"/>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-blue-400 rounded-tr-lg"/>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-blue-400 rounded-bl-lg"/>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-blue-400 rounded-br-lg"/>

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" fillOpacity="0.5"/>
                        <path d="M7.5 9L12 4.5L16.5 9L12 13.5L7.5 9Z" fill="white"/>
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-slate-800" style={{ fontFamily: 'var(--font-display)' }}>
                      NexOps AI
                    </span>
                  </div>
                  <span className="text-xs text-blue-500 font-semibold bg-blue-50 px-2 py-0.5 rounded-full" style={{ fontFamily: 'var(--font-mono)' }}>
                    LIVE
                  </span>
                </div>

                {/* QR Code — large and prominent */}
                <QRCodePlaceholder size={220} />

                {/* Footer label */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                    Point camera at QR code
                  </p>
                  <p className="text-xs font-semibold text-blue-600 truncate max-w-[220px]" style={{ fontFamily: 'var(--font-mono)' }}>
                    Google Form Survey
                  </p>
                </div>
              </motion.div>

              {/* Instruction hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-2 text-slate-400 text-xs"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Use your phone camera to scan
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span 
          className="text-xs text-slate-400 uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-slate-200 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-blue-400 rounded-full"/>
        </motion.div>
      </motion.div>
    </section>
  )
}
