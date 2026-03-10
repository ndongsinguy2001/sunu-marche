'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FlyToCartProps {
  startPosition: { x: number; y: number } | null
  onComplete: () => void
}

export default function FlyToCart({ startPosition, onComplete }: FlyToCartProps) {
  const [endPosition, setEndPosition] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const cartIcon = document.getElementById('cart-icon')
    if (cartIcon) {
      const rect = cartIcon.getBoundingClientRect()
      setEndPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
  }, [])

  if (!startPosition || !endPosition) return null

  return (
    <AnimatePresence>
      <motion.div
        key="flyer"
        initial={{
          x: startPosition.x,
          y: startPosition.y,
          scale: 1,
          opacity: 0.8,
        }}
        animate={{
          x: endPosition.x,
          y: endPosition.y,
          scale: 0.2,
          opacity: 0,
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
        onAnimationComplete={onComplete}
        className="fixed z-[100] h-12 w-12 pointer-events-none"
      >
        <svg
          className="h-full w-full text-primary-600 drop-shadow-lg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </motion.div>
    </AnimatePresence>
  )
}