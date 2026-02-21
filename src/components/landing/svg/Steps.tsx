"use client";
import { motion } from 'framer-motion';

export const StepUpload = () => (
  <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M170 120 L200 90 L230 120 M200 90 V150"
      stroke="#1E40AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
    />
    <rect x="150" y="60" width="100" height="110" rx="8" stroke="#E2E8F0" strokeWidth="2" />
    <motion.rect
      x="170" y="40" width="60" height="20" rx="4" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    />
  </svg>
);

export const StepIndex = () => (
  <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="100" r="60" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: '200px 100px' }}
    >
      <circle cx="260" cy="100" r="8" fill="#1E40AF" />
      <circle cx="140" cy="100" r="6" fill="#3B82F6" />
    </motion.g>
    <rect x="180" y="85" width="40" height="30" rx="4" fill="white" stroke="#1E40AF" strokeWidth="2" />
    <path d="M190 95 L210 95 M190 102 L205 102" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const StepAsk = () => (
  <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="60" width="200" height="80" rx="12" fill="white" stroke="#1E40AF" strokeWidth="2" />
    <circle cx="130" cy="100" r="15" fill="#EFF6FF" />
    <path d="M125 100 L135 100 M130 95 L130 105" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" rotate="45" />
    <rect x="160" y="90" width="100" height="6" rx="3" fill="#E2E8F0" />
    <rect x="160" y="105" width="70" height="6" rx="3" fill="#E2E8F0" />
    <motion.path
      d="M310 80 Q330 100 310 120"
      stroke="#1E40AF"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);
