import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types'

export interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

// Image par défaut (base64 d'un placeholder gris)
const DEFAULT_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3Ctext x='10' y='55' font-size='14' fill='%23333'%3EL%C3%A9gume%3C/text%3E%3C/svg%3E"

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const current = get().items
        const existing = current.find(item => item.id === product.id)
        if (existing) {
          set({
            items: current.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ items: [...current, { ...product, quantity: 1 }] })
        }
      },
      removeItem: (id) => set({ items: get().items.filter(item => item.id !== id) }),
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set({ items: get().items.filter(item => item.id !== id) })
        } else {
          set({
            items: get().items.map(item =>
              item.id === id ? { ...item, quantity } : item
            )
          })
        }
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => get().items.reduce((sum, item) => sum + (item.prix * item.quantity), 0),
      getItemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    {
      name: 'cart-storage',
      // 🔥 Migration : nettoyer les anciennes images vecteezy lors du chargement
      onRehydrateStorage: () => (state) => {
        if (state?.items) {
          state.items = state.items.map(item => {
            // Si l'image est une URL vecteezy, on la remplace
            if (typeof item.image === 'string' && item.image.includes('static.vecteezy.com')) {
              // Essayer de trouver le produit à jour dans products.json ? 
              // Pour l'instant on met une image par défaut
              return { ...item, image: DEFAULT_IMAGE }
            }
            return item
          })
        }
      },
    }
  )
)