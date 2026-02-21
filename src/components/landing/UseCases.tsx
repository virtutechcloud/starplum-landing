"use client";
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { landingCopy } from '@/lib/landing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const UseCases = () => {
  const accents = [
    'from-plum-500 to-plum-300',
    'from-sky-500 to-sky-300',
    'from-amber-500 to-amber-300',
    'from-teal-500 to-teal-300',
  ];

  return (
    <section className="py-16 md:py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <Container className="relative z-10">
        <SectionHeading
          title="Engineered for every practice area."
          subtitle="Starplum is a neutral, powerful layer that understands the structures of legal complexity, regardless of the matter type."
          dark
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-10 md:mt-16">
          {landingCopy.useCases.map((useCase, i) => (
            <motion.div
              key={useCase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-between gap-4 group hover:bg-white/10 hover:border-plum-500/30 transition-all cursor-default shadow-2xl relative overflow-hidden">
                {/* Left gradient accent */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${accents[i % accents.length]} opacity-40 group-hover:opacity-100 transition-opacity`} />

                {/* Step number */}
                <span className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[40px] md:text-[80px] font-black leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="text-lg md:text-2xl font-black text-stone-100 group-hover:text-white transition-colors tracking-tight leading-tight relative z-10">{useCase}</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 transition-all shrink-0 group-hover:translate-x-2 group-hover:bg-plum-900 group-hover:border-plum-500/50 relative z-10">
                   <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
