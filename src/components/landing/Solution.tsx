"use client";
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { landingCopy } from '@/lib/landing';
import { motion } from 'framer-motion';
import { Search, Brain, Link } from 'lucide-react';

export const Solution = () => {
  const icons = [<Search key="1" className="w-5 h-5" />, <Brain key="2" className="w-5 h-5" />, <Link key="3" className="w-5 h-5" />];

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <Container>
        <SectionHeading
          title={landingCopy.solution.title}
          subtitle={landingCopy.solution.description}
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 relative mt-10 md:mt-16">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-sky-200 via-plum-200 to-indigo-200 -z-10" />

          {landingCopy.solution.howRAGWorks.map((item, i) => {
            const themes = [
              { bg: 'bg-sky-900', shadow: 'shadow-sky-900/10', glow: 'bg-sky-500/5', accent: 'from-sky-500 to-sky-300', num: 'text-sky-100' },
              { bg: 'bg-plum-900', shadow: 'shadow-plum-900/10', glow: 'bg-plum-500/5', accent: 'from-plum-500 to-plum-300', num: 'text-plum-100' },
              { bg: 'bg-indigo-900', shadow: 'shadow-indigo-900/10', glow: 'bg-indigo-500/5', accent: 'from-indigo-500 to-indigo-300', num: 'text-indigo-100' },
            ];
            const theme = themes[i % themes.length];

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="h-full bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-plum-200 transition-all relative overflow-hidden group">
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Subtle glow behind icon */}
                  <div className={`absolute top-4 left-4 w-20 h-20 ${theme.glow} rounded-full blur-2xl pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 ${theme.bg} rounded-xl flex items-center justify-center text-white shadow-xl ${theme.shadow}`}>
                        {icons[i]}
                      </div>
                      <Badge variant="outline" className="text-plum-900 border-plum-100 font-bold uppercase tracking-wider">{item.step}</Badge>
                    </div>
                    <p className="text-stone-600 leading-relaxed text-sm font-medium">
                      {item.detail}
                    </p>
                  </div>

                  {/* Step number watermark */}
                  <span className={`absolute -right-2 -bottom-4 text-[60px] md:text-[100px] font-black leading-none ${theme.num} select-none pointer-events-none opacity-30 md:opacity-40`}>
                    {i + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Example Mockup */}
        <div className="mt-16 md:mt-32 max-w-4xl mx-auto p-4 md:p-10 bg-stone-900 rounded-2xl md:rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(45,15,45,0.4)] overflow-hidden relative group border border-stone-800">
           <div className="absolute inset-0 bg-gradient-to-br from-plum-500/10 to-transparent pointer-events-none" />
           <div className="flex items-center gap-3 md:gap-4 border-b border-stone-800 pb-4 md:pb-8 mb-6 md:mb-10">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-500 font-bold text-sm md:text-base shrink-0">Q</div>
              <p className="text-stone-100 font-bold text-sm md:text-lg">What is the liability cap for environmental breach?</p>
           </div>

           <div className="space-y-8">
              <div className="flex gap-3 md:gap-6">
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-plum-600 flex items-center justify-center text-white font-black shadow-lg shadow-plum-600/20 text-sm md:text-base shrink-0">A</div>
                 <div className="flex-1 space-y-4 md:space-y-6">
                    <p className="text-stone-300 leading-relaxed text-sm md:text-lg">
                      The liability cap is expressly limited to <span className="text-white font-black bg-white/10 px-2 py-0.5 rounded">$1,250,000</span> for Direct Environmental Damages, provided that such breach was not the result of gross negligence.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-4">
                       <motion.div
                         whileHover={{ scale: 1.05 }}
                         className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 border border-stone-700 rounded-lg text-xs text-plum-300 font-bold tracking-wide cursor-pointer transition-colors hover:bg-stone-700"
                       >
                          <span className="opacity-50 uppercase text-[10px]">Source</span>
                          <span>MSA_2024.pdf</span> · <span>p.12</span> · <span>§8.4</span>
                       </motion.div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Decorative hover indicator */}
           <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-stone-800 flex justify-end">
              <div className="flex items-center gap-2 text-stone-500 text-[10px] font-black tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                 Audit verification loop active
              </div>
           </div>
        </div>
      </Container>
    </section>
  );
};
