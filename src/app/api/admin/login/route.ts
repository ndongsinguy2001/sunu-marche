import { NextResponse } from 'next/server'
import { setAdminAuth } from '@/lib/adminAuth'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    const adminPassword = process.env.ADMIN_PASSWORD

    if (password === adminPassword) {
      await setAdminAuth()
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Mot de passe incorrect' },
        { status: 401 }
      )
    }
  } catch {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}