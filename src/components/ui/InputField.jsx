import React, { useId } from 'react';
import { cn } from '@/utils/cn';

/**
 * Reusable, Accessible Atomic InputField Component.
 * Supports floating labels, validation error states, prefix icons, and helper text.
 *
 * @param {Object} props
 * @param {string} [props.label] Accessible field label text.
 * @param {string} [props.name] Native form field input name.
 * @param {string} [props.type='text'] Native HTML input type ('text', 'email', 'tel', etc.).
 * @param {string} [props.placeholder] Placeholder hint text.
 * @param {string} [props.error] Validation error message text.
 * @param {string} [props.helperText] Supplemental descriptive helper text.
 * @param {boolean} [props.required=false] Marks the input field as required.
 * @param {boolean} [props.disabled=false] Disables input interaction.
 * @param {boolean} [props.readOnly=false] Sets input as read-only.
 * @param {string} [props.value] Controlled input value.
 * @param {Function} [props.onChange] Change event handler callback.
 * @param {Function} [props.onBlur] Blur event handler callback.
 * @param {React.ReactNode} [props.icon] Optional prefix icon inside the input field.
 * @param {string} [props.className] Additional CSS utility classes for the wrapper container.
 * @param {string} [props.inputClassName] Additional CSS utility classes for the native input element.
 * @param {Object} [props.register] React Hook Form registration object.
 */
export function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  value,
  onChange,
  onBlur,
  icon,
  className,
  inputClassName,
  register = {},
  ...props
}) {
  const generatedId = useId();
  const inputId = props.id || generatedId;
  const helperTextId = `${inputId}-helper`;
  const errorTextId = `${inputId}-error`;

  // Determine describedby IDs for screen readers
  const describedByIDs = [
    error ? errorTextId : null,
    helperText ? helperTextId : null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center w-full">
        {icon && (
          <div className="absolute left-3.5 pointer-events-none text-slate-400 dark:text-slate-500 inline-flex items-center justify-center">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-required={required}
          aria-describedby={describedByIDs || undefined}
          className={cn(
            'w-full px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 border rounded-lg transition-all duration-200 ease-in-out',
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            disabled && 'bg-slate-100 dark:bg-slate-800 opacity-60 cursor-not-allowed',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-slate-300 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-500/20',
            icon ? 'pl-10' : 'pl-3.5',
            inputClassName
          )}
          {...register}
          {...props}
        />
      </div>

      {error ? (
        <p id={errorTextId} role="alert" className="text-xs font-medium text-red-600 dark:text-red-400 flex items-center gap-1 mt-0.5">
          <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
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

export default InputField;
