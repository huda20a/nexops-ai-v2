'use client'

import { useState } from 'react'
import LandingPage from '@/components/LandingPage'
import PresentationMode from '@/components/PresentationMode'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [isPresentationMode, setIsPresentationMode] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {!isPresentationMode ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage onStartPresentation={() => setIsPresentationMode(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="presentation"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PresentationMode onExit={() => setIsPresentationMode(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
