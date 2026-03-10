
export interface Product {
  id: number
  nom: string
  description: string
  prix: number
  unite: string
  image: string
  disponible: boolean
  badge?: "bio" | "nouveau" | "promo" | null
}
