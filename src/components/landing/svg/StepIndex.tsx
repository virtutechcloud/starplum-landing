"use client";
import { motion } from 'framer-motion';
import { Hash, FileText, GitBranch, Zap } from 'lucide-react';

export const StepIndex = () => {
  const docs = [
    { name: 'Master_Service_Agreement.pdf', progress: 100, entities: 412 },
    { name: 'Exhibit_A_Indemnification.pdf', progress: 100, entities: 289 },
    { name: 'NDA_Mutual_2024.docx', progress: 78, entities: 146 },
  ];

  const stats = [
    { label: 'Entities', value: '847', icon: Hash, color: 'bg-plum-50 text-plum-600' },
    { label: 'Clauses', value: '234', icon: FileText, color: 'bg-amber-50 text-amber-600' },
    { label: 'Cross-refs', value: '156', icon: GitBranch, color: 'bg-teal-50 text-teal-600' },
  ];

  return (
    <div className="w-full mx-auto space-y-3 md:space-y-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2"
      >
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-plum-100 flex items-center justify-center">
          <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-plum-600" />
        </div>
        <div>
          <p className="text-[10px] md:text-xs font-black text-stone-800 tracking-tight">Building Knowledge Graph</p>
          <p className="text-[8px] md:text-[9px] text-stone-400 font-medium">Parsing clauses, entities & cross-references</p>
        </div>
      </motion.div>

      {/* Progress bars */}
      <div className="space-y-2.5 md:space-y-3">
        {docs.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-[8px] md:text-[10px] font-bold text-stone-700 truncate max-w-[70%]">{doc.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[7px] md:text-[9px] text-stone-400 font-medium">{doc.entities} entities</span>
                <span className={`text-[8px] md:text-[10px] font-black ${doc.progress === 100 ? 'text-emerald-600' : 'text-plum-600'}`}>{doc.progress}%</span>
              </div>
            </div>
            <div className="h-1.5 md:h-2 bg-stone-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${doc.progress === 100 ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : 'bg-gradient-to-r from-plum-400 to-plum-600'}`}
                initial={{ width: '0%' }}
                animate={{ width: `${doc.progress}%` }}
                transition={{ duration: 1.8, delay: i * 0.3 + 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 1.0, type: "spring" }}
            className="bg-white rounded-lg md:rounded-xl p-2.5 md:p-3.5 text-center border border-stone-100 shadow-sm"
          >
            <div className={`w-6 h-6 md:w-7 md:h-7 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-1.5`}>
              <stat.icon className="w-3 h-3 md:w-3.5 md:h-3.5" />
            </div>
            <p className="text-sm md:text-lg font-black text-stone-900 leading-none">{stat.value}</p>
            <p className="text-[7px] md:text-[8px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Activity indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex items-center justify-center gap-2 px-3 py-2 bg-stone-50 rounded-lg border border-stone-100"
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-plum-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-[8px] md:text-[10px] font-bold text-stone-500">Vectorizing document embeddings...</span>
      </motion.div>
    </div>
  );
};
