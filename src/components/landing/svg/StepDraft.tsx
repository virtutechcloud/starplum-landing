"use client";
import { motion } from 'framer-motion';

export const StepDraft = () => (
  <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Clause blocks converging */}
    {[...Array(3)].map((_, i) => (
      <motion.g
        key={i}
        initial={{ x: 50, y: 30 + i * 50, opacity: 0 }}
        animate={{ x: 180, y: 80, opacity: 1 }}
        transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
      >
        <rect width="60" height="30" rx="4" fill="white" stroke="#4A1D4A" strokeWidth="1" />
        <line x1="8" y1="10" x2="52" y2="10" stroke="#EFDAEF" strokeWidth="2" />
        <line x1="8" y1="18" x2="40" y2="18" stroke="#EFDAEF" strokeWidth="2" />
      </motion.g>
    ))}

    {/* Resulting doc */}
    <g transform="translate(260, 40)">
      <rect width="90" height="120" rx="4" stroke="#4A1D4A" strokeWidth="2" fill="white" />
      <rect x="15" y="20" width="60" height="80" rx="2" fill="#FDF7FD" />
      <rect x="25" y="40" width="40" height="4" rx="1" fill="#4A1D4A" opacity="0.3" />
      <rect x="25" y="50" width="30" height="4" rx="1" fill="#4A1D4A" opacity="0.1" />
    </g>
  </svg>
);
