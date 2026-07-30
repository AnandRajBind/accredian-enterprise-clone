import React, { useId } from 'react';
import { cn } from '@/utils/cn';

export function SelectField({
  label,
  name,
  options = [],
  value,
  onChange,
  onBlur,
  error,
  helperText,
  required = false,
  disabled = false,
  placeholder = 'Select an option',
  className,
  selectClassName,
  register = {},
  ...props
}) {
  const generatedId = useId();
  const selectId = props.id || generatedId;
  const helperTextId = `${selectId}-helper`;
  const errorTextId = `${selectId}-error`;

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-semibold text-slate-700 dark:text-slate-200"
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="relative w-full">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          aria-invalid={!!error}
          aria-required={required}
          aria-describedby={error ? errorTextId : helperText ? helperTextId : undefined}
          className={cn(
            'w-full px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 border rounded-lg appearance-none transition-all duration-200 ease-in-out cursor-pointer pr-10',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            disabled && 'bg-slate-100 dark:bg-slate-800 opacity-60 cursor-not-allowed',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-slate-300 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-500/20',
            selectClassName
          )}
          {...register}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={typeof option === 'string' ? option : option.value}
              value={typeof option === 'string' ? option : option.value}
              className="py-1 text-slate-900 bg-white"
            >
              {typeof option === 'string' ? option : option.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {error ? (
        <p id={errorTextId} role="alert" className="text-xs font-medium text-red-600 dark:text-red-400 flex items-center gap-1 mt-0.5">
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={helperTextId} className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export default SelectField;
