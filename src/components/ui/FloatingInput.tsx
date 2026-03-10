'use client'

import { useId, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface FloatingInputProps {
  label: string
  name: string
  type?: string
  register?: any
  error?: string
  className?: string
}

export default function FloatingInput({
  label,
  name,
  type = 'text',
  register,
  error,
  className,
}: FloatingInputProps) {
  const id = useId()
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={twMerge('relative', className)}>
      <input
        id={id}
        type={type}
        {...register(name)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={twMerge(
          'peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition-all',
          'focus:border-primary-500 focus:ring-2 focus:ring-primary-200',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-200'
        )}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={twMerge(
          'absolute left-4 top-3 z-10 origin-left bg-white px-1 text-gray-500 transition-all',
          'peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400',
          'peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-primary-600',
          (isFocused || register?._formValues?.[name]) &&
            'top-[-10px] text-xs text-primary-600',
          error && 'text-red-500 peer-focus:text-red-500'
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}