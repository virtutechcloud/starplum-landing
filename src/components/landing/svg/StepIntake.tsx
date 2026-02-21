"use client";
import { motion } from 'framer-motion';

export const StepIntake = () => (
  <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left side: Messy inputs */}
    <g transform="translate(50, 60)">
      {[...Array(5)].map((_, i) => (
        <motion.rect
          key={i}
          x={(i * 13) % 40}
          y={i * 20}
          width="60"
          height="12"
          rx="2"
          fill="#F1F5F9"
          stroke="#CBD5E1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
    </g>

    {/* Center: Arrow */}
    <motion.path
      d="M180 100 H220 L210 90 M220 100 L210 110"
      stroke="#4A1D4A"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8 }}
    />

    {/* Right side: Structured table */}
    <g transform="translate(260, 60)">
      <rect width="100" height="80" rx="4" stroke="#4A1D4A" strokeWidth="1" />
      {[...Array(4)].map((_, i) => (
        <motion.line
          key={i}
          x1="10" y1={20 + i * 15} x2="90" y2={20 + i * 15}
          stroke="#EFDAEF"
          strokeWidth="4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 + i * 0.1 }}
        />
      ))}
    </g>
  </svg>
);
