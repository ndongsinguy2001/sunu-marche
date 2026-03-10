import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function SuccesPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <CheckCircleIcon className="w-24 h-24 text-green-500" />
      <h1 className="mt-6 text-3xl font-display font-bold text-gray-800">
        Merci pour votre commande !
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-md">
        Vous allez recevoir un email de confirmation avec les détails de votre commande.
      </p>
      <p className="mt-2 text-gray-500">
        Notre équipe prépare vos légumes avec soin.
      </p>
      <Link href="/" className="mt-8">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  )
}