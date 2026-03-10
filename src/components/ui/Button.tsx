// 'use client'

// import { forwardRef } from 'react'
// import { motion, HTMLMotionProps } from 'framer-motion'
// import { cva, type VariantProps } from 'class-variance-authority'
// import { twMerge } from 'tailwind-merge'

// const buttonVariants = cva(
//   'relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
//   {
//     variants: {
//       variant: {
//         primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95',
//         secondary: 'border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50',
//         ghost: 'text-gray-700 hover:bg-gray-100',
//         danger: 'bg-red-500 text-white hover:bg-red-600',
//       },
//       size: {
//         sm: 'px-4 py-2 text-sm rounded-lg',
//         md: 'px-6 py-3 text-base rounded-xl',
//         lg: 'px-8 py-4 text-lg rounded-xl',
//       },
//     },
//     defaultVariants: {
//       variant: 'primary',
//       size: 'md',
//     },
//   }
// )

// //  On utilise directement HTMLMotionProps qui contient TOUTES les props de motion.button
// // plus nos variantes et isLoading
// type ButtonProps = HTMLMotionProps<'button'> &
//   VariantProps<typeof buttonVariants> & {
//     isLoading?: boolean
//   }

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
//     return (
//       <motion.button
//         ref={ref}
//         className={twMerge(buttonVariants({ variant, size, className }))}
//         disabled={disabled || isLoading}
//         whileTap={{ scale: 0.97 }}
//         {...props}
//       >
//         {isLoading && (
//           <svg
//             className="h-5 w-5 animate-spin"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//             />
//           </svg>
//         )}
//         {children}
//       </motion.button>
//     )
//   }
// )

// Button.displayName = 'Button'

// export default Button 


'use client'

import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 dark:from-primary-600 dark:to-primary-700',
        secondary: 'border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/30',
        ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
        danger: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

type ButtonProps = HTMLMotionProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={twMerge(buttonVariants({ variant, size, className }))}
        disabled={disabled || isLoading}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {isLoading && (
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button