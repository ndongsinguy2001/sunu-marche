// import type { Metadata } from 'next'
// import { Inter, Poppins } from 'next/font/google'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
// import './globals.css'

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

// const poppins = Poppins({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--font-poppins',
// })

// export const metadata: Metadata = {
//   title: 'SUNU-MARCHÉ - Légumes frais',
//   description: 'Achetez vos légumes frais en ligne, livraison rapide.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
//       <body className="bg-background font-sans antialiased">
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   )
// }



import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'SUNU-MARCHÉ - Légumes frais',
  description: 'Achetez vos légumes frais en ligne, livraison rapide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''} />
        </ThemeProvider>
      </body>
    </html>
  )
}