import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Button = ({ children, variant = 'primary', size = 'md', className = "", ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-plum-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-[0.1em]";
  
  const variants = {
    primary: "bg-plum-900 text-white hover:bg-plum-950 shadow-lg shadow-plum-900/10 border border-plum-800",
    secondary: "bg-plum-50 text-plum-900 hover:bg-plum-100 border border-plum-100",
    outline: "border-2 border-stone-200 text-stone-700 hover:border-stone-300 hover:bg-stone-50",
    ghost: "text-stone-500 hover:bg-stone-100 hover:text-plum-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-2.5 text-[11px]",
    lg: "px-8 py-3.5 text-[12px]",
    xl: "px-10 py-4 text-[13px]",
  };

  const motionProps: HTMLMotionProps<"button"> = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 }
  };

  return (
    <motion.button
      {...motionProps}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
};
