import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export const Badge = ({ children, className = "", variant = 'default' }: BadgeProps) => {
  const variants = {
    default: "bg-plum-50 text-plum-900 border-plum-100 shadow-sm shadow-plum-100/50",
    outline: "bg-transparent text-stone-500 border-stone-200",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border transition-all ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
