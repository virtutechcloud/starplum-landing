"use client";
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { landingCopy } from '@/lib/landing';
import { CitedAnswerMap } from './svg/CitedAnswerMap';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';


export const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-44 md:pb-36 overflow-hidden bg-stone-50">
      {/* Warm decorative depth */}
      <div className="absolute top-0 right-0 -z-10 w-full h-[800px] bg-[radial-gradient(circle_at_75%_25%,#f5ebf5_0%,transparent_50%)] opacity-70" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex mb-6 md:mb-8">
              <Badge className="bg-plum-50 text-plum-900 border-plum-100 px-5 py-2 flex items-center gap-3 shadow-md shadow-plum-100/20">
                 <ShieldCheck className="w-5 h-5 text-plum-700" />
                 <span className="text-[11px] font-black uppercase tracking-[0.2em]">{landingCopy.hero.badge}</span>
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-stone-900 leading-[1.05] tracking-tight mb-6 md:mb-10">
              {landingCopy.hero.headline}
            </h1>
            
            <p className="text-lg md:text-2xl text-stone-600 mb-8 md:mb-12 max-w-xl leading-relaxed font-medium">
              {landingCopy.hero.subhead}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-10 md:mb-14">
              <a href="#waitlist" className="w-full sm:w-auto">
                <Button size="xl" className="w-full sm:w-auto gap-4 group bg-plum-900 hover:bg-plum-950 text-white shadow-xl shadow-plum-900/20 px-10">
                  {landingCopy.hero.primaryCTA}
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-stone-300 text-stone-700 hover:bg-white hover:border-stone-400 transition-all font-bold px-10">
                  {landingCopy.hero.secondaryCTA}
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-4 text-stone-400 text-[11px] font-black tracking-[0.2em] uppercase">
               <div className="w-2 h-2 bg-plum-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(163,94,163,0.4)]" />
               {landingCopy.hero.trustLine}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 p-2 sm:p-3 bg-white rounded-2xl sm:rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(45,15,45,0.18)] border border-stone-200">
               <CitedAnswerMap />
            </div>
            {/* Background radiant glow */}
            <div className="absolute -inset-10 bg-plum-100/20 blur-[80px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};



