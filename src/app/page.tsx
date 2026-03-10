// 'use client'

// import { motion } from 'framer-motion'
// import ProductCard from '@/components/modules/ProductCard'
// import Hero from '@/components/layout/Hero'
// import products from '@/data/products.json'

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//       <section id="produits" className="mx-auto max-w-7xl px-4 py-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="font-display text-h2 text-gray-800 mb-12"
//         >
//           Nos légumes frais
//         </motion.h2>
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.05 }}
//             >
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/modules/ProductCard'
import Hero from '@/components/layout/Hero'
import products from '@/data/products.json'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="produits" className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-h2 text-gray-800 dark:text-gray-200 mb-12"
        >
          Nos légumes frais
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}