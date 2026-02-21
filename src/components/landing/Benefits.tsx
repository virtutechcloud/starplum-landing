"use client";
import { Container } from './ui/Container';
import { landingCopy } from '@/lib/landing';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-8 md:mb-10 leading-[1.1] tracking-tight">
              Transform document overload into high-speed intelligence.
            </h2>
            <div className="space-y-5 md:space-y-8">
              {landingCopy.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-5"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-plum-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-plum-900" />
                  </div>
                  <p className="text-lg md:text-2xl text-stone-700 font-bold tracking-tight">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full lg:max-w-lg">
             <div className="p-6 md:p-12 rounded-2xl md:rounded-[3.5rem] bg-white border border-stone-200 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] relative">
                <div className="text-center mb-6 md:mb-10">
                   <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] mb-4">Integrity Index</div>
                   <div className="text-5xl md:text-6xl font-black text-stone-900 mb-2 tracking-tighter">94%</div>
                   <div className="text-emerald-600 font-bold tracking-[0.1em] text-[10px] uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 inline-block">Grounded in Evidence</div>
                </div>
                
                <div className="space-y-6">
                   <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden p-0.5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '94%' }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        transition={{ duration: 1.5, ease: "circOut" }}
                      />
                   </div>
                   <div className="flex justify-between text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">
                      <span>Source Bias: 0.02%</span>
                      <span>Verified: 100%</span>
                   </div>
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-stone-100 flex items-center gap-4 md:gap-5">
                   <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-plum-900 shadow-sm border border-stone-100 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <p className="text-sm text-stone-500 font-bold italic leading-relaxed">
                     “Our RAG governance model enforces strict adherence to primary source material without hallucination.”
                   </p>
                </div>
                
                {/* Decorative plum dot */}
                <div className="absolute top-6 right-8 w-2.5 h-2.5 bg-plum-500 rounded-full" />
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
