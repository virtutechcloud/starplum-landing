"use client";
import { Container } from './ui/Container';
import { landingCopy } from '@/lib/landing';
import { motion } from 'framer-motion';

export const TrustedBy = () => {
  return (
    <div className="py-12 border-y border-slate-100 bg-slate-50/50">
      <Container>
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by top-tier legal departments
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {landingCopy.hero.trustedBy.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-lg font-bold text-slate-800 grayscale hover:grayscale-0 transition-all cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </Container>
    </div>
  );
};
