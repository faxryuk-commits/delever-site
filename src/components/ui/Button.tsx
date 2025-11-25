import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-darkBlue text-white hover:bg-brand-darkBlue/90 font-semibold',
      secondary: 'bg-brand-lightTeal text-brand-darkBlue hover:bg-brand-lightTeal/80 font-semibold',
      outline: 'border-2 border-brand-darkBlue bg-transparent text-brand-darkBlue hover:bg-brand-lightBlue font-semibold',
      ghost: 'bg-transparent text-brand-darkBlue hover:bg-brand-lightBlue font-semibold',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

