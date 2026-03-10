import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { Product } from '@/types'
import { checkAdminAuth } from '@/lib/adminAuth'

// Chemin vers le fichier JSON
const dataFilePath = path.join(process.cwd(), 'src/data/products.json')

// Lire les produits
async function getProducts(): Promise<Product[]> {
  const file = await fs.readFile(dataFilePath, 'utf-8')
  return JSON.parse(file)
}

// Écrire les produits
async function saveProducts(products: Product[]) {
  await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2))
}

// GET /api/produits - Liste publique (pas besoin d'auth)
export async function GET() {
  const products = await getProducts()
  return NextResponse.json(products)
}

// POST /api/produits - Ajouter un produit (nécessite auth)
export async function POST(request: Request) {
  // Vérification admin
  const isAuth = await checkAdminAuth()
  if (!isAuth) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const products = await getProducts()
    const data = await request.json()
    
    // Calculer le nouvel ID (max + 1)
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1
    
    const newProduct: Product = {
      id: newId,
      ...data,
      disponible: true,
    }
    
    products.push(newProduct)
    await saveProducts(products)
    
    return NextResponse.json(newProduct, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}