import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  as = 'button',
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-brand text-white hover:bg-brand/90 focus:ring-brand shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-white text-brand border-2 border-brand hover:bg-brand hover:text-white focus:ring-brand',
    outline: 'bg-transparent text-brand border-2 border-brand hover:bg-brand hover:text-white focus:ring-brand',
    ghost: 'bg-transparent text-brand hover:bg-brand/10 focus:ring-brand'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm gap-1',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3'
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      )}
      {!loading && icon && iconPosition === 'left' && icon}
      <span className={cn(loading && 'opacity-0')}>{children}</span>
      {!loading && icon && iconPosition === 'right' && icon}
    </>
  );

  if (as === 'a' && href) {
    // Se o href for uma âncora (#), usamos âncora simples
    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          {...props}
        >
          {content}
        </a>
      );
    }
    
    // Se não for âncora, mantemos comportamento padrão
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = true,
  onClick,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    outlined: 'bg-white border border-slate-200',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-xl cursor-pointer' : '';

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hoverClasses,
    className
  );

  if (onClick) {
    return (
      <div className={classes} onClick={onClick} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  required?: boolean;
  icon?: ReactNode;
}

export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  className = '',
  required = false,
  icon,
  ...props
}: InputProps) {
  const hasValue = value && value.length > 0;
  const hasError = error && error.length > 0;

  return (
    <div className="relative">
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="h-5 w-5 text-slate-400">{icon}</div>
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "block w-full rounded-lg border-0 py-3 px-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all duration-200",
            icon && "pl-10",
            hasError && "ring-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        <label
          className={cn(
            "absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-slate-600 transition-all duration-200",
            hasValue && "-top-2 text-xs",
            !hasValue && "top-3 text-sm",
            hasError && "text-red-600"
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
      {hasError && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className={cn("animate-spin rounded-full border-2 border-current border-t-transparent", sizeClasses[size], className)} />
  );
}

interface SkeletonProps {
  className?: string;
  lines?: number;
}

export function Skeleton({ className = '', lines = 1 }: SkeletonProps) {
  if (lines === 1) {
    return (
      <div className={cn("animate-pulse bg-slate-200 rounded", className)} />
    );
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "animate-pulse bg-slate-200 rounded",
            i === lines - 1 ? "w-3/4" : "w-full",
            className
          )}
        />
      ))}
    </div>
  );
}
