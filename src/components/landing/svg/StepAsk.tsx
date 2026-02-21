"use client";
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export const StepAsk = () => {
  return (
    <div className="w-full mx-auto space-y-3 md:space-y-4">
      {/* Search input */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 p-2.5 md:p-3.5 bg-white border border-stone-200 rounded-xl shadow-sm"
      >
        <div className="flex-1 min-w-0">
          <p className="text-[9px] md:text-[11px] font-bold text-stone-800">What are the termination clauses in the MSA?</p>
        </div>
        <div className="w-7 h-7 md:w-8 md:h-8 bg-plum-900 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-plum-900/20">
          <Send className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
        </div>
      </motion.div>

      {/* Answer card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="p-3 md:p-5 bg-gradient-to-br from-plum-50/80 to-white border border-plum-100 rounded-xl md:rounded-2xl space-y-2.5 md:space-y-3.5"
      >
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-plum-600 flex items-center justify-center shadow-md shadow-plum-600/20">
            <span className="text-[8px] md:text-[9px] font-black text-white">S</span>
          </div>
          <span className="text-[8px] md:text-[10px] font-black text-plum-900 uppercase tracking-wider">Starplum</span>
        </div>

        <p className="text-[8px] md:text-[11px] text-stone-600 leading-relaxed">
          Per{' '}
          <span className="font-bold text-plum-900 bg-plum-100/80 px-1 py-0.5 rounded border border-plum-200/50">§12.3 of the MSA</span>,{' '}
          either party may terminate with{' '}
          <span className="font-bold text-stone-900">90 days written notice</span>.{' '}
          Early termination penalties are defined in{' '}
          <span className="font-bold text-amber-800 bg-amber-100/80 px-1 py-0.5 rounded border border-amber-200/50">Schedule B, Item 4</span>{' '}
          and capped at <span className="font-bold text-stone-900">$500,000</span>.
        </p>

        {/* Source chips */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-1.5 px-2 py-1 bg-plum-900 rounded-md shadow-sm"
          >
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-plum-300" />
            <span className="text-[7px] md:text-[8px] text-white font-bold">MSA_2024.pdf · §12.3</span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-amber-200 rounded-md shadow-sm"
          >
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-amber-500" />
            <span className="text-[7px] md:text-[8px] text-amber-800 font-bold">Schedule_B.pdf · p.4</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Verification status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="flex items-center justify-between px-3 py-2 bg-emerald-50/50 border border-emerald-100 rounded-lg"
      >
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-600" />
          <span className="text-[8px] md:text-[10px] font-bold text-emerald-700">2 sources cited & verified</span>
        </div>
        <span className="text-[7px] md:text-[9px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">97%</span>
      </motion.div>
    </div>
  );
};
