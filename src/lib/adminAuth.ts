import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || ''

export async function checkAdminAuth(request?: NextRequest) {
  // Si appelé depuis une route API, on utilise les cookies de la requête
  if (request) {
    const cookie = request.cookies.get('admin_auth')
    return cookie?.value === 'true'
  }
  
  // Sinon (appel depuis un composant serveur), on utilise next/headers
  const cookieStore = await cookies()
  const auth = cookieStore.get('admin_auth')
  return auth?.value === 'true'
}

export async function setAdminAuth() {
  const cookieStore = await cookies()
  cookieStore.set('admin_auth', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 24 heures
    path: '/',
  })
}

export async function clearAdminAuth() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_auth')
}