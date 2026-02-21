import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card = ({
  children,
  className = "",
  hover = true,
  onClick,
}: CardProps) => (
  <motion.div
    initial={hover ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
    whileInView={hover ? { opacity: 1, y: 0 } : {}}
    viewport={hover ? { once: true } : {}}
    transition={{ duration: 0.5 }}
    whileHover={
      hover
        ? {
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
          }
        : {}
    }
    className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-premium transition-all duration-300 ${
      onClick ? "cursor-pointer" : ""
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </motion.div>
);
