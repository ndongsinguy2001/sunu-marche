import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { Product } from '@/types'
import { checkAdminAuth } from '@/lib/adminAuth'

const dataFilePath = path.join(process.cwd(), 'src/data/products.json')

async function getProducts(): Promise<Product[]> {
  const file = await fs.readFile(dataFilePath, 'utf-8')
  return JSON.parse(file)
}

async function saveProducts(products: Product[]) {
  await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2))
}

// GET /api/produits/[id] - Récupérer un produit (public)
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  const products = await getProducts()
  const product = products.find(p => p.id === id)
  
  if (!product) {
    return NextResponse.json({ error: 'Produit non trouvé' }, { status: 404 })
  }
  
  return NextResponse.json(product)
}

// PUT /api/produits/[id] - Modifier (nécessite auth)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const isAuth = await checkAdminAuth()
  if (!isAuth) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const id = parseInt(params.id)
  const products = await getProducts()
  const index = products.findIndex(p => p.id === id)
  
  if (index === -1) {
    return NextResponse.json({ error: 'Produit non trouvé' }, { status: 404 })
  }
  
  try {
    const data = await request.json()
    products[index] = { ...products[index], ...data }
    await saveProducts(products)
    return NextResponse.json(products[index])
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// DELETE /api/produits/[id] - Supprimer (nécessite auth)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const isAuth = await checkAdminAuth()
  if (!isAuth) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const id = parseInt(params.id)
  const products = await getProducts()
  const newProducts = products.filter(p => p.id !== id)
  
  if (newProducts.length === products.length) {
    return NextResponse.json({ error: 'Produit non trouvé' }, { status: 404 })
  }
  
  await saveProducts(newProducts)
  return NextResponse.json({ success: true })
}