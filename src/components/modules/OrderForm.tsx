// 'use client'

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { orderSchema, OrderFormData } from '@/lib/validations'
// import { useCartStore } from '@/lib/store'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { motion } from 'framer-motion'
// import Button from '@/components/ui/Button'
// import FloatingInput from '@/components/ui/FloatingInput'

// export default function OrderForm() {
//   const { items, getTotal, clearCart } = useCartStore()
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const router = useRouter()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<OrderFormData>({
//     resolver: zodResolver(orderSchema),
//     defaultValues: {
//       modePaiement: 'livraison',
//     },
//   })

//   const onSubmit = async (data: OrderFormData) => {
//     setIsSubmitting(true)

//     // Préparer les détails du panier pour l'email
//     const cartDetails = items
//       .map(
//         (item) =>
//           `${item.nom} x${item.quantity} = ${(item.prix * item.quantity).toFixed(2)}FCFA`
//       )
//       .join('\n')
//     const total = getTotal().toFixed(2)

//     // Construire les données à envoyer à Formspree
//     const formData = {
//       ...data,
//       cart: cartDetails,
//       total: `${total}FCFA`,
//       _subject: `Nouvelle commande de ${data.nomPrenom}`,
//     }

//     try {
//       const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       if (res.ok) {
//         // Succès : vider le panier, rediriger vers confirmation
//         clearCart()
//         router.push('/commande/succes')
//       } else {
//         alert('Une erreur est survenue. Veuillez réessayer.')
//       }
//     } catch (error) {
//       alert('Erreur réseau : vérifiez votre connexion.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   // Si le panier est vide, on redirige ou on affiche un message
//   if (items.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <p className="text-gray-600">Votre panier est vide.</p>
//         <Button onClick={() => router.push('/')} className="mt-4">
//           Découvrir nos légumes
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//       {/* Section coordonnées */}
//       <div className="bg-white rounded-xl shadow-sm p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           1. Coordonnées
//         </h2>
//         <div className="space-y-4">
//           <FloatingInput
//             label="Nom et prénom"
//             name="nomPrenom"
//             register={register}
//             error={errors.nomPrenom?.message}
//           />
//           <FloatingInput
//             label="Email"
//             name="email"
//             type="email"
//             register={register}
//             error={errors.email?.message}
//           />
//           <FloatingInput
//             label="Téléphone"
//             name="telephone"
//             type="tel"
//             register={register}
//             error={errors.telephone?.message}
//           />
//           <FloatingInput
//             label="Adresse de livraison"
//             name="adresse"
//             register={register}
//             error={errors.adresse?.message}
//           />
//         </div>
//       </div>

//       {/* Section paiement */}
//       <div className="bg-white rounded-xl shadow-sm p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           2. Mode de paiement
//         </h2>
//         <div className="space-y-3">
//           <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//             <input
//               type="radio"
//               value="livraison"
//               {...register('modePaiement')}
//               className="w-4 h-4 text-primary-600"
//             />
//             <div>
//               <span className="font-medium">Paiement à la livraison</span>
//               <p className="text-sm text-gray-500">
//                 Payez en espèces ou par carte directement au livreur
//               </p>
//             </div>
//           </label>
//           <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//             <input
//               type="radio"
//               value="virement"
//               {...register('modePaiement')}
//               className="w-4 h-4 text-primary-600"
//             />
//             <div>
//               <span className="font-medium">Virement bancaire</span>
//               <p className="text-sm text-gray-500">
//                 Un RIB vous sera envoyé par email pour effectuer le virement
//               </p>
//             </div>
//           </label>
//         </div>
//       </div>

//       {/* Section commentaire */}
//       <div className="bg-white rounded-xl shadow-sm p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           3. Commentaire (optionnel)
//         </h2>
//         <textarea
//           {...register('commentaire')}
//           rows={3}
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//           placeholder="Instructions particulières, heure de livraison, etc."
//         />
//       </div>

//       {/* Récapitulatif du panier */}
//       <div className="bg-primary-50 rounded-xl p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           Récapitulatif de votre commande
//         </h2>
//         <div className="space-y-2">
//           {items.map((item) => (
//             <div key={item.id} className="flex justify-between text-gray-700">
//               <span>
//                 {item.nom} x{item.quantity}
//               </span>
//               <span className="font-medium">
//                 {(item.prix * item.quantity).toFixed(2)}€
//               </span>
//             </div>
//           ))}
//           <div className="border-t pt-3 mt-3 flex justify-between text-lg font-bold">
//             <span>Total</span>
//             <span className="text-primary-600">{getTotal().toFixed(2)}€</span>
//           </div>
//         </div>
//       </div>

//       {/* Bouton de confirmation */}
//       <Button
//         type="submit"
//         isLoading={isSubmitting}
//         className="w-full py-4 text-lg"
//       >
//         Confirmer la commande
//       </Button>
//     </form>
//   )
// }

'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { orderSchema, OrderFormData } from '@/lib/validations'
import { useCartStore } from '@/lib/store'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import FloatingInput from '@/components/ui/FloatingInput'

export default function OrderForm() {
  const { items, getTotal, clearCart } = useCartStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      modePaiement: 'livraison',
    },
  })

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true)

    const cartDetails = items
      .map(
        (item) =>
          `${item.nom} x${item.quantity} = ${(item.prix * item.quantity).toFixed(2)}FCFA`
      )
      .join('\n')
    const total = getTotal().toFixed(2)

    const formData = {
      ...data,
      cart: cartDetails,
      total: `${total}FCFA`,
      _subject: `Nouvelle commande de ${data.nomPrenom}`,
    }

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        clearCart()
        router.push('/commande/succes')
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      alert('Erreur réseau : vérifiez votre connexion.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">Votre panier est vide.</p>
        <Button onClick={() => router.push('/')} className="mt-4">
          Découvrir nos légumes
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          1. Coordonnées
        </h2>
        <div className="space-y-4">
          <FloatingInput
            label="Nom et prénom"
            name="nomPrenom"
            register={register}
            error={errors.nomPrenom?.message}
          />
          <FloatingInput
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <FloatingInput
            label="Téléphone"
            name="telephone"
            type="tel"
            register={register}
            error={errors.telephone?.message}
          />
          <FloatingInput
            label="Adresse de livraison"
            name="adresse"
            register={register}
            error={errors.adresse?.message}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          2. Mode de paiement
        </h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
            <input
              type="radio"
              value="livraison"
              {...register('modePaiement')}
              className="w-4 h-4 text-primary-600 dark:text-primary-400"
            />
            <div>
              <span className="font-medium">Paiement à la livraison</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Payez en espèces ou par carte directement au livreur
              </p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">
            <input
              type="radio"
              value="virement"
              {...register('modePaiement')}
              className="w-4 h-4 text-primary-600 dark:text-primary-400"
            />
            <div>
              <span className="font-medium">Virement bancaire</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Un RIB vous sera envoyé par email pour effectuer le virement
              </p>
            </div>
          </label>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          3. Commentaire (optionnel)
        </h2>
        <textarea
          {...register('commentaire')}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          placeholder="Instructions particulières, heure de livraison, etc."
        />
      </div>

      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Récapitulatif de votre commande
        </h2>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>
                {item.nom} x{item.quantity}
              </span>
              <span className="font-medium">
                {(item.prix * item.quantity).toFixed(2)}FCFA
              </span>
            </div>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3 flex justify-between text-lg font-bold text-gray-800 dark:text-gray-200">
            <span>Total</span>
            <span className="text-primary-600 dark:text-primary-400">{getTotal().toFixed(2)}FCFA</span>
          </div>
        </div>
      </div>

      <Button type="submit" isLoading={isSubmitting} className="w-full py-4 text-lg">
        Confirmer la commande
      </Button>
    </form>
  )
}