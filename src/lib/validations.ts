import { z } from 'zod'

export const orderSchema = z.object({
  nomPrenom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  telephone: z.string().min(10, 'Téléphone invalide (10 chiffres minimum)'),
  adresse: z.string().min(5, 'Adresse de livraison requise'),
  modePaiement: z.enum(['livraison', 'virement']),
  commentaire: z.string().optional(),
})

export type OrderFormData = z.infer<typeof orderSchema>