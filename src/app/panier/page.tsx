'use client'

import { useCartStore } from '@/lib/store'
import CartItem from '@/components/modules/CartItem'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function PanierPage() {
  const { items, getTotal, getItemCount, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <ShoppingCartIcon className="w-24 h-24 text-gray-300" />
        <h1 className="mt-6 text-2xl font-display font-semibold text-gray-800">
          Votre panier est vide
        </h1>
        <p className="mt-2 text-gray-600">
          Découvrez nos légumes frais et ajoutez-les à votre panier.
        </p>
        <Link href="/">
          <Button className="mt-6">
            Découvrir nos légumes
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-h2 font-display text-gray-800 mb-8">Mon panier</h1>

      <div className="lg:flex lg:gap-12">
        {/* Liste des articles */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Résumé de la commande */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Résumé de la commande
            </h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Nombre d'articles</span>
                <span className="font-medium">{getItemCount()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800 pt-4 border-t">
                <span>Total</span>
                <span className="text-primary-600">{getTotal().toFixed(2)} FCFA</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Link href="/commande">
                <Button className="w-full">
                  Passer la commande
                </Button>
              </Link>
              <Button
                variant="ghost"
                onClick={clearCart}
                className="w-full"
              >
                Vider le panier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
