"use client";
import { motion } from 'framer-motion';

export const CitedAnswerMap = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] flex flex-col bg-stone-950 rounded-xl sm:rounded-[2rem] overflow-hidden border border-stone-800">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 md:px-5 md:py-3 bg-stone-900/80 border-b border-stone-800">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-stone-700" />
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-stone-700" />
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-stone-700" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-3 py-0.5 md:px-4 md:py-1 bg-stone-800 rounded-md">
            <span className="text-[8px] md:text-[10px] font-bold text-stone-500 tracking-wider">starplum.ai</span>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col p-3 md:p-6 overflow-hidden">
        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex gap-2 md:gap-3 mb-2.5 md:mb-4"
        >
          <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-[8px] md:text-[10px] font-black text-stone-400 shrink-0">Q</div>
          <div className="bg-stone-800/50 border border-stone-700/50 rounded-lg md:rounded-xl px-2.5 py-1.5 md:px-4 md:py-2.5">
            <p className="text-[9px] md:text-xs text-stone-200 font-semibold leading-snug">
              What is the liability cap for environmental breach in the MSA?
            </p>
          </div>
        </motion.div>

        {/* Answer */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex gap-2 md:gap-3 flex-1 min-h-0"
        >
          <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-plum-600 flex items-center justify-center text-[8px] md:text-[10px] font-black text-white shrink-0 shadow-lg shadow-plum-600/20">S</div>
          <div className="flex-1 min-w-0 space-y-2 md:space-y-3">
            <p className="text-[8px] md:text-[11px] text-stone-400 leading-relaxed">
              The liability cap is expressly limited to{' '}
              <span className="text-white font-bold bg-white/10 px-1 py-0.5 rounded">$1,250,000</span>{' '}
              for Direct Environmental Damages, provided the breach was not the result of{' '}
              <span className="text-plum-300 font-semibold border-b border-plum-500/40">gross negligence</span>.{' '}
              <span className="hidden md:inline text-stone-500">This cap is subject to annual adjustment per the CPI index as defined in Schedule C.</span>
            </p>

            {/* Citation chips */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
                className="inline-flex items-center gap-1.5 px-2 py-1 md:px-2.5 md:py-1 bg-plum-500/10 border border-plum-500/20 rounded-md cursor-pointer hover:bg-plum-500/20 transition-colors"
              >
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-plum-400" />
                <span className="text-[7px] md:text-[9px] text-plum-300 font-bold">MSA_2024.pdf · §8.4 · p.12</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.7, type: "spring", stiffness: 300 }}
                className="inline-flex items-center gap-1.5 px-2 py-1 md:px-2.5 md:py-1 bg-amber-500/10 border border-amber-500/20 rounded-md cursor-pointer hover:bg-amber-500/20 transition-colors"
              >
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-amber-400" />
                <span className="text-[7px] md:text-[9px] text-amber-300 font-bold">Exhibit_A.pdf · p.14</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.9, type: "spring", stiffness: 300 }}
                className="hidden sm:inline-flex items-center gap-1.5 px-2 py-1 md:px-2.5 md:py-1 bg-teal-500/10 border border-teal-500/20 rounded-md cursor-pointer hover:bg-teal-500/20 transition-colors"
              >
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-teal-400" />
                <span className="text-[7px] md:text-[9px] text-teal-300 font-bold">Schedule_C.pdf · §2.1</span>
              </motion.div>
            </div>

            {/* Verification footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="flex items-center justify-between pt-2 md:pt-3 border-t border-stone-800/60"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[7px] md:text-[9px] font-bold text-emerald-400/80 tracking-wide">3 sources verified</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 rounded">
                <span className="text-[7px] md:text-[9px] font-bold text-emerald-400">98% confidence</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
