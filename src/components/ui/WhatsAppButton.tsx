'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppButton({ phoneNumber, message = "Bonjour, je souhaite des informations." }: WhatsAppButtonProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Afficher le bouton après un petit délai pour éviter les flashs
    const timer = setTimeout(() => setShow(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!phoneNumber) return null

  const handleClick = () => {
    // Format international sans le +
    const formattedNumber = phoneNumber.replace(/\D/g, '')
    const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={handleClick}
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-300"
            aria-label="Contacter par WhatsApp"
          >
            <FaWhatsapp className="w-8 h-8" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}