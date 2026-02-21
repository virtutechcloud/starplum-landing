"use client";
import { motion } from 'framer-motion';

export const ConstellationHero = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-visible">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-[800px] overflow-visible"
      >
        {/* Connection Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <line x1="300" y1="250" x2="150" y2="100" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="300" y1="250" x2="450" y2="100" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="300" y1="250" x2="450" y2="400" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="300" y1="250" x2="150" y2="400" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="150" y1="100" x2="450" y2="100" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="450" y1="100" x2="450" y2="400" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="450" y1="400" x2="150" y2="400" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="150" y1="400" x2="150" y2="100" stroke="#E2E8F0" strokeWidth="1" />
        </motion.g>

        {/* Central Engine Node */}
        <motion.circle
          cx="300"
          cy="250"
          r="40"
          fill="#4A1D4A"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        <motion.circle
          cx="300"
          cy="250"
          r="55"
          stroke="#4A1D4A"
          strokeWidth="1"
          strokeDasharray="5 5"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Outer Nodes */}
        <Node x={150} y={100} label="NDA" delay={0.2} />
        <Node x={450} y={100} label="MSA" delay={0.4} />
        <Node x={450} y={400} label="IP" delay={0.6} />
        <Node x={150} y={400} label="SPA" delay={0.8} />
        
        {/* Small floating particles */}
        <motion.circle
          cx="100" cy="150" r="4" fill="#DFB9DF"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="500" cy="300" r="3" fill="#DFB9DF"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </svg>
    </div>
  );
};

const Node = ({ x, y, label, delay }: { x: number; y: number; label: string; delay: number }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring", stiffness: 100 }}
  >
    <circle cx={x} cy={y} r="25" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
    <text x={x} y={y + 5} textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">{label}</text>
    <motion.circle
      cx={x} cy={y} r="35" stroke="#E2E8F0" strokeWidth="0.5"
      animate={{ r: [35, 45, 35], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
    />
  </motion.g>
);
