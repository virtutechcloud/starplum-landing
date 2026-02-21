"use client";
import { motion } from 'framer-motion';

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  labelLeft: string;
  labelRight: string;
}

export const Toggle = ({ enabled, onChange, labelLeft, labelRight }: ToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`text-sm font-medium ${!enabled ? 'text-slate-900' : 'text-slate-500'}`}>{labelLeft}</span>
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-plum-500 focus:ring-offset-2"
        aria-pressed={enabled}
      >
        <motion.span
          animate={{ x: enabled ? 36 : 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="inline-block h-6 w-6 transform rounded-full bg-white shadow-sm"
        />
      </button>
      <span className={`text-sm font-medium ${enabled ? 'text-slate-900' : 'text-slate-500'}`}>{labelRight}</span>
    </div>
  );
};
