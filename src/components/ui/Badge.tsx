// import { twMerge } from 'tailwind-merge'

// type BadgeVariant = 'primary' | 'bio' | 'nouveau' | 'promo' | 'default'

// interface BadgeProps {
//   children: React.ReactNode
//   variant?: BadgeVariant
//   className?: string
// }

// const variantStyles: Record<BadgeVariant, string> = {
//   primary: 'bg-primary-500 text-white',
//   bio: 'bg-green-600 text-white',
//   nouveau: 'bg-blue-500 text-white animate-pulse',
//   promo: 'bg-accent text-white',
//   default: 'bg-gray-500 text-white',
// }

// export default function Badge({ children, variant = 'default', className }: BadgeProps) {
//   return (
//     <span
//       className={twMerge(
//         'absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold uppercase',
//         variantStyles[variant],
//         className
//       )}
//     >
//       {children}
//     </span>
//   )
// }

import { twMerge } from 'tailwind-merge'

type BadgeVariant = 'primary' | 'bio' | 'nouveau' | 'promo' | 'default'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary-500 text-white dark:bg-primary-600',
  bio: 'bg-green-600 text-white dark:bg-green-700',
  nouveau: 'bg-blue-500 text-white animate-pulse dark:bg-blue-600',
  promo: 'bg-accent text-white dark:bg-orange-600',
  default: 'bg-gray-500 text-white dark:bg-gray-600',
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        'absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}