"use client";
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { landingCopy } from '@/lib/landing';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';


export const Validation = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-10">
            <SectionHeading
              title={landingCopy.validation.title}
              subtitle={landingCopy.validation.description}
              centered={false}
            />
            
            <div className="space-y-6">
               {[
                 "Click citations to jump to exact page/paragraph",
                 "Side-by-side view with source documents",
                 "Reference context preserved across all queries"
               ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 text-stone-800 font-bold tracking-tight text-base md:text-lg">
                     <div className="w-6 h-6 rounded-full bg-plum-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-plum-900" />
                     </div>
                     {feature}
                  </div>
               ))}
            </div>

            <a href="#waitlist">
              <Button size="xl" className="bg-plum-900 hover:bg-plum-950 text-white shadow-2xl shadow-plum-900/20 px-10">
                {landingCopy.validation.cta}
              </Button>
            </a>
          </div>

          <div className="flex-1 relative">
             {/* Audit UI Mockup */}
             <div className="relative z-10 p-2 md:p-2.5 bg-stone-900 rounded-2xl md:rounded-[3rem] shadow-2xl border border-stone-800 ring-4 md:ring-8 ring-stone-100">
                <div className="bg-white rounded-xl md:rounded-[2.5rem] overflow-hidden">
                   {/* Window chrome */}
                   <div className="flex items-center gap-1.5 bg-stone-50 border-b p-3 md:p-4">
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-400/80" />
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-400/80" />
                      <span className="ml-2 md:ml-3 text-[8px] md:text-[10px] font-bold text-stone-400 tracking-wider uppercase">Citation Audit — Verify Sources</span>
                   </div>

                   <div className="p-3 md:p-6 grid grid-cols-2 gap-2.5 md:gap-5 h-[240px] md:h-[370px]">
                      {/* Left: AI Response with citations */}
                      <div className="border border-plum-100 rounded-lg md:rounded-xl p-2.5 md:p-4 bg-plum-50/20 overflow-hidden flex flex-col">
                         <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                           <div className="w-4 h-4 md:w-5 md:h-5 rounded bg-plum-900 flex items-center justify-center text-[7px] md:text-[9px] text-white font-black">A</div>
                           <span className="text-[8px] md:text-[10px] font-black text-plum-900 uppercase tracking-wider">AI Response</span>
                         </div>

                         <div className="flex-1 space-y-1.5 md:space-y-2.5 overflow-hidden">
                           <p className="text-[7px] md:text-[9px] text-stone-600 leading-relaxed">
                             The indemnification obligation is capped at{' '}
                             <span className="bg-plum-200/60 text-plum-900 font-bold px-0.5 rounded">$2.5M aggregate</span>{' '}
                             and applies only to{' '}
                             <span className="bg-amber-200/60 text-amber-900 font-bold px-0.5 rounded">third-party claims</span>{' '}
                             arising from breach of representations under Section 5.
                           </p>

                           <div className="flex flex-wrap gap-1 pt-0.5 md:pt-1">
                             <span className="px-1.5 py-0.5 bg-plum-900 rounded text-[6px] md:text-[7px] text-white font-bold">§7.2(a) — p.14</span>
                             <span className="px-1.5 py-0.5 bg-amber-800 rounded text-[6px] md:text-[7px] text-white font-bold">§7.4 — p.16</span>
                           </div>

                           <div className="flex items-center gap-1.5 pt-1 md:pt-2 border-t border-plum-100/50">
                             <motion.div
                               className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                               animate={{ opacity: [1, 0.4, 1] }}
                               transition={{ duration: 2, repeat: Infinity }}
                             />
                             <span className="text-[6px] md:text-[8px] font-bold text-emerald-600">98% confidence · 2 sources</span>
                           </div>
                         </div>
                      </div>

                      {/* Right: Source Document */}
                      <div className="border border-stone-200 rounded-lg md:rounded-xl p-2.5 md:p-4 bg-white shadow-sm overflow-hidden flex flex-col">
                         <div className="flex items-center justify-between mb-2 md:mb-3">
                            <span className="text-[8px] md:text-[10px] font-black text-stone-500 uppercase tracking-wider">MSA_2024.pdf</span>
                            <span className="text-[7px] md:text-[9px] font-bold text-plum-900 bg-plum-100 px-1.5 py-0.5 rounded-full">p. 14</span>
                         </div>

                         <div className="flex-1 space-y-1 md:space-y-2 text-[6px] md:text-[8px] text-stone-400 leading-relaxed overflow-hidden">
                            <p>7.1 Each Party shall indemnify and hold harmless the other Party against any losses arising from material breach of this Agreement.</p>
                            <p className="bg-plum-100/50 text-plum-900 font-semibold px-1 py-0.5 rounded border-l-2 border-plum-500">
                              7.2(a) The aggregate liability for indemnification under this Article shall not exceed Two Million Five Hundred Thousand Dollars ($2,500,000).
                            </p>
                            <p className="hidden md:block">7.3 The indemnifying Party shall have sole control of the defense of any claim subject to this Article.</p>
                            <p className="bg-amber-100/50 text-amber-900 font-semibold px-1 py-0.5 rounded border-l-2 border-amber-500">
                              7.4 This obligation extends only to third-party claims arising from breach of representations in Section 5.
                            </p>
                            <p className="hidden md:block text-stone-300">7.5 The limitations set forth in this Section shall not apply to breaches of confidentiality obligations...</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Floating ornamentation */}
             <div className="absolute -top-12 -right-12 w-48 h-48 bg-plum-100 rounded-full blur-[80px] opacity-40 -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
};
