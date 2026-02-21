"use client";
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, Upload, File } from 'lucide-react';

export const StepUpload = () => {
  const files = [
    { name: 'Master_Service_Agreement.pdf', size: '2.4 MB', type: 'PDF', done: true, delay: 0.3 },
    { name: 'Exhibit_A_Indemnification.pdf', size: '890 KB', type: 'PDF', done: true, delay: 0.5 },
    { name: 'NDA_Mutual_2024.docx', size: '1.1 MB', type: 'DOCX', done: false, delay: 0.7 },
  ];

  return (
    <div className="w-full mx-auto space-y-3 md:space-y-5">
      {/* Upload drop zone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="border-2 border-dashed border-plum-200 bg-plum-50/30 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-plum-300 hover:bg-plum-50/50 transition-all cursor-pointer group"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-plum-100 flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform">
          <Upload className="w-4 h-4 md:w-5 md:h-5 text-plum-600" />
        </div>
        <p className="text-[10px] md:text-xs font-bold text-plum-800 mb-0.5">Drag & drop your documents</p>
        <p className="text-[8px] md:text-[10px] text-plum-400 font-medium">PDF, DOCX, TXT — up to 500 MB</p>
      </motion.div>

      {/* File list */}
      <div className="space-y-2 md:space-y-2.5">
        {files.map((file) => (
          <motion.div
            key={file.name}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: file.delay, duration: 0.4 }}
            className="flex items-center gap-2.5 md:gap-3 p-2.5 md:p-3.5 bg-white rounded-lg md:rounded-xl border border-stone-150 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center shrink-0 ${file.type === 'PDF' ? 'bg-rose-50 text-rose-500' : 'bg-blue-50 text-blue-500'}`}>
              {file.type === 'PDF' ? <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <File className="w-3.5 h-3.5 md:w-4 md:h-4" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] md:text-[11px] font-bold text-stone-800 truncate">{file.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[7px] md:text-[9px] text-stone-400 font-medium">{file.size}</span>
                <span className="text-[7px] md:text-[9px] font-bold text-stone-300 bg-stone-50 px-1.5 py-0.5 rounded">{file.type}</span>
              </div>
            </div>
            <div className="shrink-0">
              {file.done ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: file.delay + 0.3, type: "spring" }}
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                </motion.div>
              ) : (
                <div className="w-10 md:w-14 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-plum-400 to-plum-600 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '67%' }}
                    transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex items-center justify-between px-3 py-2 bg-stone-50 rounded-lg border border-stone-100"
      >
        <span className="text-[8px] md:text-[10px] font-bold text-stone-500">3 documents · 4.4 MB</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-plum-500 animate-pulse" />
          <span className="text-[8px] md:text-[10px] font-bold text-plum-600">Processing...</span>
        </div>
      </motion.div>
    </div>
  );
};
