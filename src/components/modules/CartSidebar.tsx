// 'use client'

// import { Fragment } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
// import { useCartStore } from '@/lib/store'
// import CartItem from './CartItem'
// import Button from '@/components/ui/Button'
// import { useRouter } from 'next/navigation'

// interface CartSidebarProps {
//   isOpen: boolean
//   onClose: () => void
// }

// export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
//   const { items, getTotal, getItemCount } = useCartStore()
//   const router = useRouter()

//   const handleCheckout = () => {
//     onClose()
//     router.push('/commande')
//   }

//   return (
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog onClose={onClose} className="relative z-50">
//         {/* Backdrop avec blur */}
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//         </Transition.Child>

//         {/* Panier slide-in */}
//         <Transition.Child
//           as={Fragment}
//           enter="transform transition ease-out duration-300"
//           enterFrom="translate-x-full"
//           enterTo="translate-x-0"
//           leave="transform transition ease-in duration-200"
//           leaveFrom="translate-x-0"
//           leaveTo="translate-x-full"
//         >
//           <Dialog.Panel className="fixed right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl">
//             {/* Header */}
//             <div className="flex items-center justify-between border-b p-6">
//               <Dialog.Title className="font-display text-xl font-semibold">
//                 Mon panier ({getItemCount()})
//               </Dialog.Title>
//               <button
//                 onClick={onClose}
//                 className="rounded-full p-1 hover:bg-gray-100"
//                 aria-label="Fermer"
//               >
//                 <XMarkIcon className="h-6 w-6" />
//               </button>
//             </div>

//             {/* Liste des articles */}
//             <div className="flex-1 overflow-y-auto p-6">
//               {items.length === 0 ? (
//                 <div className="flex h-full flex-col items-center justify-center text-center">
//                   <ShoppingCartIcon className="h-16 w-16 text-gray-300" />
//                   <p className="mt-4 text-gray-500">Votre panier est vide</p>
//                   <Button
//                     variant="primary"
//                     size="sm"
//                     className="mt-4"
//                     onClick={onClose}
//                   >
//                     Découvrir nos légumes
//                   </Button>
//                 </div>
//               ) : (
//                 <ul className="space-y-6">
//                   {items.map((item) => (
//                     <CartItem key={item.id} item={item} />
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Footer avec total et CTA */}
//             {items.length > 0 && (
//               <div className="border-t p-6">
//                 <div className="mb-4 flex justify-between text-lg font-semibold">
//                   <span>Total</span>
//                   <span className="text-primary-600">
//                     {getTotal().toFixed(2)} FCFA
//                   </span>
//                 </div>
//                 <Button onClick={handleCheckout} className="w-full">
//                   Passer la commande
//                 </Button>
//               </div>
//             )}
//           </Dialog.Panel>
//         </Transition.Child>
//       </Dialog>
//     </Transition>
//   )
// }

'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/lib/store'
import CartItem from './CartItem'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, getTotal, getItemCount } = useCartStore()
  const router = useRouter()

  const handleCheckout = () => {
    onClose()
    router.push('/commande')
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm dark:bg-black/50" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transform transition ease-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed right-0 top-0 flex h-full w-full max-w-md flex-col bg-white dark:bg-gray-900 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-6">
              <Dialog.Title className="font-display text-xl font-semibold text-gray-800 dark:text-gray-200">
                Mon panier ({getItemCount()})
              </Dialog.Title>
              <button
                onClick={onClose}
                className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                aria-label="Fermer"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingCartIcon className="h-16 w-16 text-gray-300 dark:text-gray-600" />
                  <p className="mt-4 text-gray-500 dark:text-gray-400">Votre panier est vide</p>
                  <Button
                    variant="primary"
                    size="sm"
                    className="mt-4"
                    onClick={onClose}
                  >
                    Découvrir nos légumes
                  </Button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                <div className="mb-4 flex justify-between text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <span>Total</span>
                  <span className="text-primary-600 dark:text-primary-400">
                    {getTotal().toFixed(2)} FCFA
                  </span>
                </div>
                <Button onClick={handleCheckout} className="w-full">
                  Passer la commande
                </Button>
              </div>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}