import OrderForm from '@/components/modules/OrderForm'

export const metadata = {
  title: 'Finaliser ma commande | Mon Marché',
  description: 'Remplissez vos coordonnées pour valider votre commande de légumes frais.',
}

export default function CommandePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-h2 font-display text-gray-800 mb-2">
        Finaliser la commande
      </h1>
      <p className="text-gray-600 mb-8">
        Une dernière étape avant de recevoir vos légumes frais !
      </p>
      <OrderForm />
    </div>
  )
}