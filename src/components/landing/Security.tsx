"use client";
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { landingCopy } from '@/lib/landing';
import { ShieldCheck, Lock, EyeOff, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export const Security = () => {
  const items = [
    { icon: <ShieldCheck className="w-5 h-5" />, bg: 'bg-teal-50', iconColor: 'text-teal-600', accent: 'from-teal-500 to-teal-300', ring: 'ring-teal-100', glow: 'bg-teal-500/5' },
    { icon: <Lock className="w-5 h-5" />, bg: 'bg-blue-50', iconColor: 'text-blue-600', accent: 'from-blue-500 to-blue-300', ring: 'ring-blue-100', glow: 'bg-blue-500/5' },
    { icon: <EyeOff className="w-5 h-5" />, bg: 'bg-indigo-50', iconColor: 'text-indigo-600', accent: 'from-indigo-500 to-indigo-300', ring: 'ring-indigo-100', glow: 'bg-indigo-500/5' },
    { icon: <Database className="w-5 h-5" />, bg: 'bg-amber-50', iconColor: 'text-amber-600', accent: 'from-amber-500 to-amber-300', ring: 'ring-amber-100', glow: 'bg-amber-500/5' },
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-100/50 border-y border-stone-200">
      <Container>
        <SectionHeading
          title={landingCopy.security.title}
          subtitle={landingCopy.security.description}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 mb-12 md:mb-20">
          {landingCopy.security.points.map((point, i) => {
            const theme = items[i % items.length];

            return (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className={`p-5 md:p-10 bg-white shadow-sm ring-1 ${theme.ring} hover:ring-plum-200 hover:shadow-xl transition-all h-full rounded-2xl relative overflow-hidden group`}>
                  {/* Left gradient accent bar */}
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${theme.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Ambient glow */}
                  <div className={`absolute -top-4 -left-4 w-20 h-20 ${theme.glow} rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${theme.bg} ${theme.iconColor} flex items-center justify-center mb-4 md:mb-8 shadow-sm transition-transform group-hover:scale-110`}>
                      {theme.icon}
                    </div>
                    <p className="font-bold text-stone-900 leading-snug tracking-tight text-sm md:text-lg">{point}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="p-6 md:p-12 rounded-2xl md:rounded-[3rem] bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-stone-800 shadow-2xl relative overflow-hidden">
           {/* Subtle gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-plum-500/5 to-transparent pointer-events-none" />

           <div className="max-w-xl text-center md:text-left relative z-10">
              <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight">Architected for Professional Confidentiality.</h3>
              <p className="text-stone-400 text-base italic font-medium leading-relaxed">
                &ldquo;Our infrastructure provides enterprise-grade security while isolating all data processing within your dedicated private environments. No exposure, no training, absolute control.&rdquo;
              </p>
           </div>
           <div className="flex gap-4 md:gap-6 shrink-0 opacity-80 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl border border-stone-700 flex items-center justify-center p-2 md:p-3 text-center text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-white/5 leading-tight hover:bg-white/10 transition-colors">SECURE<br/>CLOUD</div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl border border-stone-700 flex items-center justify-center p-2 md:p-3 text-center text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-white/5 leading-tight hover:bg-white/10 transition-colors">AES-256<br/>ENCRYPTED</div>
           </div>
        </div>
      </Container>
    </section>
  );
};
