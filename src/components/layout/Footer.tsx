// 'use client'

// import Link from 'next/link'
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
// } from 'react-icons/fa'
// import { motion } from 'framer-motion'

// const socialLinks = [
//   { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
//   { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
//   { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
//   { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
// ]

// const quickLinks = [
//   { label: 'Accueil', href: '/' },
//   { label: 'Nos produits', href: '/' },
//   { label: 'Panier', href: '/panier' },
//   { label: 'Commander', href: '/commande' },
// ]

// const companyLinks = [
//   { label: 'À propos', href: '/a-propos' },
//   { label: 'Mentions légales', href: '/mentions-legales' },
//   { label: 'Politique de confidentialité', href: '/confidentialite' },
//   { label: 'CGV', href: '/cgv' },
// ]

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         {/* Grille principale */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Section À propos */}
//           <div>
//             <h3 className="font-display text-xl font-semibold text-white">
//                 SUNU-MARCHÉ
//             </h3>
//             <p className="mt-4 text-sm leading-relaxed text-gray-400">
//               Votre marchand de légumes frais en ligne. Produits locaux, livraison rapide et service client attentionné.
//             </p>
//           </div>

//           {/* Liens rapides */}
//           <div>
//             <h3 className="font-display text-lg font-semibold text-white">
//               Liens rapides
//             </h3>
//             <ul className="mt-4 space-y-2 text-sm">
//               {quickLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-400 transition hover:text-primary-400"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Informations légales */}
//           <div>
//             <h3 className="font-display text-lg font-semibold text-white">
//               Informations
//             </h3>
//             <ul className="mt-4 space-y-2 text-sm">
//               {companyLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-400 transition hover:text-primary-400"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter + Réseaux sociaux */}
//           <div>
//             <h3 className="font-display text-lg font-semibold text-white">
//               Restez informé
//             </h3>
//             <p className="mt-2 text-sm text-gray-400">
//               Recevez nos offres et actualités.
//             </p>
//             <form className="mt-4 flex">
//               <input
//                 type="email"
//                 placeholder="Votre email"
//                 className="flex-1 rounded-l-lg border-0 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="rounded-r-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
//               >
//                 OK
//               </button>
//             </form>

//             {/* Réseaux sociaux */}
//             <div className="mt-6">
//               <h4 className="text-sm font-semibold text-white">Suivez-nous</h4>
//               <div className="mt-3 flex space-x-4">
//                 {socialLinks.map(({ icon: Icon, href, label }) => (
//                   <motion.a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -2 }}
//                     className="text-gray-400 transition hover:text-primary-400"
//                     aria-label={label}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 border-t border-gray-800 pt-8 text-center">
//           <p className="text-sm text-gray-400">
//             &copy; {currentYear}  SUNU-MARCHÉ. Tous droits réservés.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }


'use client'

import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
]

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos produits', href: '/' },
  { label: 'Panier', href: '/panier' },
  { label: 'Commander', href: '/commande' },
]

const companyLinks = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
  { label: 'CGV', href: '/cgv' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              SUNU-MARCHÉ
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Votre marchand de légumes frais en ligne. Produits locaux, livraison rapide et service client attentionné.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Liens rapides
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Informations
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Restez informé
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Recevez nos offres et actualités.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 rounded-l-lg border-0 bg-gray-800 dark:bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="rounded-r-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
              >
                OK
              </button>
            </form>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white">Suivez-nous</h4>
              <div className="mt-3 flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-gray-400 transition hover:text-primary-400"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} SUNU-MARCHÉ. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}