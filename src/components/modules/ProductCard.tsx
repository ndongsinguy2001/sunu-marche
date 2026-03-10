// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { useCartStore } from '@/lib/store'
// import { ShoppingCartIcon } from '@heroicons/react/24/outline'
// import Button from '@/components/ui/Button'
// import Badge from '@/components/ui/Badge'
// import { motion } from 'framer-motion'
// import FlyToCart from './FlyToCart'
// import { Product } from '@/types'

// interface ProductCardProps {
//   product: Product
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const addItem = useCartStore((s) => s.addItem)
//   const [flyPosition, setFlyPosition] = useState<{ x: number; y: number } | null>(null)

//   const handleAddToCart = (e: React.MouseEvent) => {
//     // Position du bouton
//     const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
//     setFlyPosition({
//       x: rect.left + rect.width / 2,
//       y: rect.top + rect.height / 2,
//     })

//     // Ajouter au panier après un léger délai
//     setTimeout(() => {
//       addItem(product)
//     }, 50)
//   }

//   return (
//     <>
//       <motion.div
//         whileHover={{
//           y: -5,
//           boxShadow:
//             '0 20px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.02)',
//         }}
//         className="group relative overflow-hidden rounded-2xl bg-white transition-shadow"
//       >
//         {product.badge && (
//           <Badge variant={product.badge}>{product.badge}</Badge>
//         )}

//         <div className="relative h-64 overflow-hidden">
//           <Image
//             src={product.image}
//             alt={product.nom}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>

//         <div className="p-5">
//           <h3 className="font-display text-xl font-semibold text-gray-800">
//             {product.nom}
//           </h3>
//           <p className="mt-1 text-sm text-gray-600 line-clamp-2">
//             {product.description}
//           </p>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-2xl font-bold text-primary-600">
//               {product.prix.toFixed(2)}FCFA{' '}
//               <span className="text-sm font-normal text-gray-500">
//                 /{product.unite}
//               </span>
//             </span>
//             <Button size="sm" onClick={handleAddToCart} className="gap-1">
//               <ShoppingCartIcon className="h-5 w-5" />
//               Ajouter
//             </Button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Élément volant */}
//       <FlyToCart
//         startPosition={flyPosition}
//         onComplete={() => setFlyPosition(null)}
//       />
//     </>
//   )
// }

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/lib/store'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import FlyToCart from './FlyToCart'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)
  const [flyPosition, setFlyPosition] = useState<{ x: number; y: number } | null>(null)

  const handleAddToCart = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setFlyPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
    setTimeout(() => addItem(product), 50)
  }

  return (
    <>
      <motion.div
        whileHover={{
          y: -5,
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.02)',
        }}
        className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 transition-shadow"
      >
        {product.badge && <Badge variant={product.badge}>{product.badge}</Badge>}

        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image}
            alt={product.nom}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-5">
          <h3 className="font-display text-xl font-semibold text-gray-800 dark:text-gray-200">
            {product.nom}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {product.prix.toFixed(2)}FCFA{' '}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-500">
                /{product.unite}
              </span>
            </span>
            <Button size="sm" onClick={handleAddToCart} className="gap-1">
              <ShoppingCartIcon className="h-5 w-5" />
              Ajouter
            </Button>
          </div>
        </div>
      </motion.div>

      <FlyToCart startPosition={flyPosition} onComplete={() => setFlyPosition(null)} />
    </>
  )
}