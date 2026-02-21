"use client";
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { landingCopy } from '@/lib/landing';
import { motion } from 'framer-motion';
import {
  Search,
  Quote,
  Database,
  ShieldAlert,
  FileDiff,
  History
} from 'lucide-react';

export const Features = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'search': return <Search className="w-5 h-5" />;
      case 'cite': return <Quote className="w-5 h-5" />;
      case 'index': return <Database className="w-5 h-5" />;
      case 'lock': return <ShieldAlert className="w-5 h-5" />;
      case 'compare': return <FileDiff className="w-5 h-5" />;
      case 'audit': return <History className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  const featuresWithTheme = [
    { ...landingCopy.features[0], color: 'bg-emerald-900', glow: 'bg-emerald-500/10', accent: 'from-emerald-500 to-emerald-300', hover: 'hover:border-emerald-300' },
    { ...landingCopy.features[1], color: 'bg-plum-900', glow: 'bg-plum-500/10', accent: 'from-plum-500 to-plum-300', hover: 'hover:border-plum-300' },
    { ...landingCopy.features[2], color: 'bg-amber-900', glow: 'bg-amber-500/10', accent: 'from-amber-500 to-amber-300', hover: 'hover:border-amber-300' },
    { ...landingCopy.features[3], color: 'bg-teal-900', glow: 'bg-teal-500/10', accent: 'from-teal-500 to-teal-300', hover: 'hover:border-teal-300' },
    { ...landingCopy.features[4], color: 'bg-indigo-900', glow: 'bg-indigo-500/10', accent: 'from-indigo-500 to-indigo-300', hover: 'hover:border-indigo-300' },
    { ...landingCopy.features[5], color: 'bg-rose-900', glow: 'bg-rose-500/10', accent: 'from-rose-500 to-rose-300', hover: 'hover:border-rose-300' },
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-100/30 border-y border-stone-200">
      <Container>
        <SectionHeading
          title="Enterprise-ready document intelligence."
          subtitle="Everything you need to handle massive volumes of legal data with precision and security."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-16">
          {featuresWithTheme.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`h-full bg-white border border-stone-200/60 rounded-2xl p-6 md:p-10 shadow-sm transition-all ${feature.hover} hover:shadow-xl relative overflow-hidden group`}>
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Ambient glow */}
                <div className={`absolute -top-6 -left-6 w-28 h-28 ${feature.glow} rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center text-white mb-5 md:mb-8 shadow-lg shadow-stone-900/10 transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-black text-stone-900 mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
