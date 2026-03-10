// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { useCartStore } from '@/lib/store'
// import CartSidebar from '@/components/modules/CartSidebar'
// import Button from '@/components/ui/Button'

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isCartOpen, setIsCartOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const pathname = usePathname()
//   const getItemCount = useCartStore((state) => state.getItemCount)

//   // Détection du scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Navigation links
//   const navLinks = [
//     { href: '/', label: 'Accueil' },
//     { href: '/panier', label: 'Panier' },
//     { href: '/commande', label: 'Commander' },
//   ]

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-40 w-full transition-all duration-300 ${
//           isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
//         }`}
//       >
//         <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <span className="font-display text-2xl font-bold text-primary-600">
//                SUNU-MARCHÉ
//             </span>
//             <span >🥗</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex lg:items-center lg:gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-sm font-medium transition-colors hover:text-primary-600 ${
//                   pathname === link.href
//                     ? 'text-primary-600'
//                     : 'text-gray-700'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Cart Icon + Mobile Menu Button */}
//           <div className="flex items-center gap-4">
//             {/* Panier avec badge et ID pour fly-to-cart */}
//             <button
//               onClick={() => setIsCartOpen(true)}
//               className="relative"
//               id="cart-icon"
//               aria-label="Ouvrir le panier"
//             >
//               <ShoppingBagIcon className="h-6 w-6 text-gray-700 hover:text-primary-600" />
//               <AnimatePresence>
//                 {getItemCount() > 0 && (
//                   <motion.span
//                     key="cart-badge"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     exit={{ scale: 0 }}
//                     className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white"
//                   >
//                     {getItemCount()}
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </button>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
//               aria-label="Menu"
//             >
//               {isMenuOpen ? (
//                 <XMarkIcon className="h-6 w-6" />
//               ) : (
//                 <Bars3Icon className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="overflow-hidden bg-white lg:hidden"
//             >
//               <div className="flex flex-col space-y-4 px-4 pb-6 pt-2">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`rounded-lg py-2 text-base font-medium transition-colors hover:bg-gray-50 hover:text-primary-600 ${
//                       pathname === link.href
//                         ? 'text-primary-600'
//                         : 'text-gray-700'
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Cart Sidebar - rendu ici avec portal implicite */}
//       <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBagIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/lib/store'
import CartSidebar from '@/components/modules/CartSidebar'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const getItemCount = useCartStore((state) => state.getItemCount)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/panier', label: 'Panier' },
    { href: '/commande', label: 'Commander' },
    { href: '/admin', label: 'Admin' }, // <-- Lien ajouté
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
            : 'bg-white dark:bg-gray-900'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-primary-600 dark:text-primary-400">
              SUNU-MARCHÉ
            </span>
            <span>🥗</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                  pathname === link.href
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Basculer le thème"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            )}

            {/* Panier */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative"
              id="cart-icon"
              aria-label="Ouvrir le panier"
            >
              <ShoppingBagIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" />
              <AnimatePresence>
                {getItemCount() > 0 && (
                  <motion.span
                    key="cart-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white"
                  >
                    {getItemCount()}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
              aria-label="Menu"
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-white dark:bg-gray-900 lg:hidden"
            >
              <div className="flex flex-col space-y-4 px-4 pb-6 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-lg py-2 text-base font-medium transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 ${
                      pathname === link.href
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
} 