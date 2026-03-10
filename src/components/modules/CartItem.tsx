// 'use client'

// import Image from 'next/image'
// import { useCartStore, CartItem as CartItemType } from '@/lib/store'
// import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
// import Button from '@/components/ui/Button'

// interface CartItemProps {
//   item: CartItemType
// }

// export default function CartItem({ item }: CartItemProps) {
//   const { updateQuantity, removeItem } = useCartStore()

//   return (
//     <div className="flex gap-4 py-4 border-b">
//       {/* Image miniature */}
//       <div className="relative w-20 h-20 flex-shrink-0">
//         <Image
//           src={item.image}
//           alt={item.nom}
//           fill
//           className="object-cover rounded-lg"
//         />
//       </div>

//       {/* Infos produit */}
//       <div className="flex-1">
//         <h3 className="font-semibold text-gray-800">{item.nom}</h3>
//         <p className="text-sm text-gray-500">
//           {item.prix.toFixed(2)}FCFA / {item.unite}
//         </p>

//         {/* Quantité et prix total */}
//         <div className="flex items-center justify-between mt-2">
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => updateQuantity(item.id, item.quantity - 1)}
//               className="p-1 rounded-full hover:bg-gray-100"
//             >
//               <MinusIcon className="w-4 h-4" />
//             </button>
//             <span className="w-8 text-center font-medium">{item.quantity}</span>
//             <button
//               onClick={() => updateQuantity(item.id, item.quantity + 1)}
//               className="p-1 rounded-full hover:bg-gray-100"
//             >
//               <PlusIcon className="w-4 h-4" />
//             </button>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="font-semibold text-primary-600">
//               {(item.prix * item.quantity).toFixed(2)}FCFA
//             </span>
//             <button
//               onClick={() => removeItem(item.id)}
//               className="text-red-500 hover:text-red-700"
//             >
//               <TrashIcon className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'

import Image from 'next/image'
import { useCartStore, CartItem as CartItemType } from '@/lib/store'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.nom}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.nom}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {item.prix.toFixed(2)}FCFA / {item.unite}
        </p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium text-gray-800 dark:text-gray-200">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              {(item.prix * item.quantity).toFixed(2)}FCFA
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}