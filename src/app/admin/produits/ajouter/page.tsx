'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import FloatingInput from '@/components/ui/FloatingInput'

const productSchema = z.object({
  nom: z.string().min(1, 'Le nom est requis'),
  description: z.string().min(1, 'La description est requise'),
  prix: z.coerce.number().positive('Le prix doit être positif'),
  unite: z.string().min(1, "L'unité est requise"),
  image: z.string().min(1, "L'URL de l'image est requise"),
  badge: z.enum(['bio', 'nouveau', 'promo']).optional().nullable(),
})

type ProductForm = z.infer<typeof productSchema>

export default function AjouterProduitPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
  })

  const onSubmit = async (data: ProductForm) => {
    setLoading(true)
    const res = await fetch('/api/produits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      router.push('/admin/produits')
    } else {
      alert("Erreur lors de l'ajout")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
          Ajouter un produit
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FloatingInput
            label="Nom du produit"
            name="nom"
            register={register}
            error={errors.nom?.message}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              {...register('description')}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>
            )}
          </div>
          <FloatingInput
            label="Prix (FCFA)"
            name="prix"
            type="number"
            step="0.01"
            register={register}
            error={errors.prix?.message}
          />
          <FloatingInput
            label="Unité (ex: kg, pièce)"
            name="unite"
            register={register}
            error={errors.unite?.message}
          />
          <FloatingInput
            label="URL de l'image"
            name="image"
            register={register}
            error={errors.image?.message}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Badge (optionnel)
            </label>
            <select
              {...register('badge')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Aucun</option>
              <option value="bio">Bio</option>
              <option value="nouveau">Nouveau</option>
              <option value="promo">Promo</option>
            </select>
          </div>
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => router.back()}
            >
              Annuler
            </Button>
            <Button type="submit" isLoading={loading}>
              Ajouter
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}