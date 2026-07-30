import React, { memo } from 'react';
import { cn } from '@/utils/cn';

const VARIANT_STYLES = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-900 shadow-sm hover:shadow-md border border-transparent',
  secondary: 'bg-accent-emerald text-white hover:bg-accent-emerald-hover active:bg-emerald-800 shadow-sm hover:shadow-md border border-transparent',
  outline: 'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800',
  ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-transparent',
};

const SIZE_STYLES = {
  sm: 'px-3 py-1.5 text-xs gap-1.5 rounded-md',
  md: 'px-4 py-2.5 text-sm gap-2 rounded-lg',
  lg: 'px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base gap-2.5 rounded-lg',
};

export const Button = memo(function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  children,
  onClick,
  ...props
}) {
  const isButtonDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isButtonDisabled}
      onClick={onClick}
      aria-busy={isLoading}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-all duration-200 ease-in-out cursor-pointer select-none',
        'focus-ring',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
        VARIANT_STYLES[variant] || VARIANT_STYLES.primary,
        SIZE_STYLES[size] || SIZE_STYLES.md,
        fullWidth ? 'w-full' : 'w-auto',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="inline-flex shrink-0 aria-hidden:true">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="inline-flex shrink-0 aria-hidden:true">{icon}</span>}
        </>
      )}
    </button>
  );
});

export default Button;
