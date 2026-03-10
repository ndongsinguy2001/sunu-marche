// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
// import Button from '@/components/ui/Button'
// import Link from 'next/link'

// // Liste des images du carrousel (à adapter selon vos fichiers)
// const images = [
//   'https://images.pexels.com/photos/6102865/pexels-photo-6102865.jpeg',
//   'https://images.pexels.com/photos/7890100/pexels-photo-7890100.jpeg',
//   'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg',
//   'https://images.pexels.com/photos/12974966/pexels-photo-12974966.jpeg',
// ]

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   // Changement automatique toutes les 5 secondes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
//   }

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length)
//   }

//   return (
//     <section className="relative h-[600px] overflow-hidden bg-gray-900 lg:h-[700px]">
//       {/* Carrousel d'images */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={images[currentIndex]}
//             alt={`Légumes frais - Image ${currentIndex + 1}`}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Overlay sombre pour lisibilité du texte */}
//           <div className="absolute inset-0 bg-black/40" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Flèches de navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition hover:bg-white/50"
//         aria-label="Image précédente"
//       >
//         <ChevronLeftIcon className="h-6 w-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition hover:bg-white/50"
//         aria-label="Image suivante"
//       >
//         <ChevronRightIcon className="h-6 w-6" />
//       </button>

//       {/* Indicateurs (dots) */}
//       <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-3 w-3 rounded-full transition-all ${
//               index === currentIndex
//                 ? 'bg-white w-6'
//                 : 'bg-white/60 hover:bg-white/80'
//             }`}
//             aria-label={`Aller à l'image ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Contenu texte (centré) */}
//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
//         >
//           <span className="text-primary-300">SUNU-MARCHÉ</span>
//           <span className="block mt-2">
//             Des légumes frais, directement du producteur
//           </span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mt-6 max-w-2xl text-lg sm:text-xl"
//         >
//           Découvrez nos légumes cultivés au Sénégal, sans pesticides.
//           Livraison rapide à Dakar et paiement à la livraison (espèces, Orange Money, Wave).
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-8 flex flex-col gap-4 sm:flex-row"
//         >
//           <Link href="#produits">
//             <Button size="lg" className="w-full sm:w-auto">
//               Voir nos produits
//             </Button>
//           </Link>
//           <Link href="/commande">
//             <Button
//               variant="secondary"
//               size="lg"
//               className="w-full border-white text-white hover:bg-white/20 sm:w-auto"
//             >
//               Commander maintenant
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const images = [
  'https://images.pexels.com/photos/6102865/pexels-photo-6102865.jpeg',
  'https://images.pexels.com/photos/7890100/pexels-photo-7890100.jpeg',
  'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg',
  'https://images.pexels.com/photos/12974966/pexels-photo-12974966.jpeg',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-gray-900 lg:h-[700px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Légumes frais - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition hover:bg-white/50"
        aria-label="Image précédente"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition hover:bg-white/50"
        aria-label="Image suivante"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
        >
          <span className="text-primary-300">SUNU-MARCHÉ</span>
          <span className="block mt-2">
            Des légumes frais, directement du producteur
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl"
        >
          Découvrez nos légumes cultivés au Sénégal, sans pesticides.
          Livraison rapide à Dakar et paiement à la livraison (espèces, Orange Money, Wave).
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="#produits">
            <Button size="lg" className="w-full sm:w-auto">
              Voir nos produits
            </Button>
          </Link>
          <Link href="/commande">
            <Button
              variant="secondary"
              size="lg"
              className="w-full border-white text-white hover:bg-white/20 sm:w-auto"
            >
              Commander maintenant
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}