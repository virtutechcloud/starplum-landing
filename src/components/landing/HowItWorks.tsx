"use client";
import { useState } from 'react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { StepUpload } from './svg/StepUpload';
import { StepIndex } from './svg/StepIndex';
import { StepAsk } from './svg/StepAsk';
import { landingCopy } from '@/lib/landing';
import { motion, AnimatePresence } from 'framer-motion';

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getSVG = (index: number) => {
    switch (index) {
      case 0: return <StepUpload />;
      case 1: return <StepIndex />;
      case 2: return <StepAsk />;
      default: return null;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <Container>
        <SectionHeading
          title="From data mess to cited clarity."
          subtitle="Three steps to a fully searchable, intelligent legal knowledge base."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center mt-10 md:mt-16">
          <div className="space-y-6">
            {landingCopy.howItWorks.map((step, i) => {
              const themes = [
                { active: 'bg-plum-900 text-white shadow-plum-900/10', inactive: 'bg-plum-50 text-plum-400' },
                { active: 'bg-amber-900 text-white shadow-amber-900/10', inactive: 'bg-amber-50 text-amber-400' },
                { active: 'bg-teal-900 text-white shadow-teal-900/10', inactive: 'bg-teal-50 text-teal-400' },
              ];
              const theme = themes[i % themes.length];
              
              return (
                <motion.button
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-5 md:p-8 rounded-2xl md:rounded-[2rem] transition-all border-2 relative overflow-hidden ${activeStep === i ? 'bg-white border-plum-100 shadow-xl shadow-plum-100/20' : 'bg-transparent border-transparent hover:bg-stone-100'}`}
                >
                  {/* Active left accent bar */}
                  {activeStep === i && (
                    <motion.div
                      layoutId="step-accent"
                      className="absolute top-2 bottom-2 left-0 w-1 bg-gradient-to-b from-plum-500 to-plum-300 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center gap-4 md:gap-6 mb-2 md:mb-3">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all ${activeStep === i ? theme.active + ' shadow-lg' : theme.inactive}`}>
                        {i + 1}
                     </div>
                     <h3 className={`text-lg font-black transition-colors ${activeStep === i ? 'text-stone-900' : 'text-stone-700'}`}>{step.title}</h3>
                  </div>
                  <div className="pl-14 md:pl-16">
                     <p className={`text-base leading-relaxed font-medium transition-colors ${activeStep === i ? 'text-stone-600' : 'text-stone-400'}`}>
                       {step.description}
                     </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="relative">
             <div className="aspect-square bg-white rounded-2xl md:rounded-[3rem] p-6 md:p-12 flex items-center justify-center border border-stone-200 shadow-2xl relative z-10">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="w-full flex justify-center"
                  >
                    {getSVG(activeStep)}
                  </motion.div>
               </AnimatePresence>
             </div>
             {/* Decorative orbit */}
             <div className="absolute -inset-10 bg-gradient-to-br from-plum-100/20 to-transparent blur-3xl -z-10 rounded-full" />
             
             {/* Verification badge */}
             <div className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 bg-stone-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-3 border border-stone-800 z-20">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-plum-500 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-xs font-black tracking-widest uppercase">Proprietary RAG Engine</span>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
