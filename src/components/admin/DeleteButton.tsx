'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface DeleteButtonProps {
  productId: number
}

export default function DeleteButton({ productId }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) return

    setLoading(true)
    const res = await fetch(`/api/produits/${productId}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      router.refresh() // Recharge la page pour mettre à jour la liste
    } else {
      alert('Erreur lors de la suppression')
    }
    setLoading(false)
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 disabled:opacity-50"
    >
      <TrashIcon className="h-5 w-5" />
    </button>
  )
}