"use client";
import { motion } from 'framer-motion';

export const StepReview = () => (
  <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main document */}
    <g transform="translate(150, 30)">
      <rect width="100" height="140" rx="4" stroke="#4A1D4A" strokeWidth="1" fill="white" />
      {/* Scanning line */}
      <motion.line
        x1="5" y1="20" x2="95" y2="20"
        stroke="#4A1D4A" strokeWidth="2" strokeOpacity="0.5"
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Redlines/Highlights */}
      <motion.rect
        x="15" y="40" width="70" height="12" rx="2" fill="#FEE2E2"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.rect
        x="15" y="70" width="70" height="12" rx="2" fill="#DCFCE7"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </g>

    {/* Sidebar comments */}
    <motion.g
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 270, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <circle cx="0" cy="50" r="15" fill="#EFDAEF" />
      <text x="-4" y="54" fill="#4A1D4A" fontSize="12" fontWeight="bold">✓</text>
      <rect x="25" y="42" width="60" height="16" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
    </motion.g>
  </svg>
);
