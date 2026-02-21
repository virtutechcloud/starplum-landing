"use client";
import { Container } from './ui/Container';
import { landingCopy } from '@/lib/landing';
import { motion } from 'framer-motion';
import { SearchX, Clock, FileWarning } from 'lucide-react';

export const Problem = () => {
  const icons = [<SearchX key="1" className="w-6 h-6" />, <Clock key="2" className="w-6 h-6" />, <FileWarning key="3" className="w-6 h-6" />];

  return (
    <section id="problem" className="py-16 md:py-24 bg-stone-100/50 border-y border-stone-200">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 mb-6 leading-tight tracking-tight">
            {landingCopy.problem.title}
          </h2>
          <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-medium">
            {landingCopy.problem.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {(landingCopy.problem.points as Array<{ title: string; description: string }>).map((point, i) => {
            const themes = [
              { bg: 'bg-rose-50', icon: 'text-rose-600', border: 'border-rose-100', accent: 'from-rose-500 to-rose-300', num: 'text-rose-100' },
              { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-100', accent: 'from-amber-500 to-amber-300', num: 'text-amber-100' },
              { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-100', accent: 'from-indigo-500 to-indigo-300', num: 'text-indigo-100' },
            ];
            const theme = themes[i % themes.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="h-full bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-10 border border-stone-200 shadow-sm hover:shadow-xl hover:border-plum-200 transition-all group relative overflow-hidden">
                  {/* Gradient top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Large watermark number */}
                  <span className={`absolute -right-3 -top-4 text-[80px] md:text-[160px] font-black leading-none ${theme.num} select-none pointer-events-none opacity-30 md:opacity-50 group-hover:opacity-80 transition-opacity`}>
                    {i + 1}
                  </span>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 md:w-14 md:h-14 ${theme.bg} ${theme.border} rounded-2xl shadow-sm border flex items-center justify-center ${theme.icon} mb-5 md:mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      {icons[i]}
                    </div>
                    <h3 className="text-xl font-black text-stone-900 leading-tight tracking-tight mb-4">
                      {point.title}
                    </h3>
                    <p className="text-base text-stone-500 font-medium leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
