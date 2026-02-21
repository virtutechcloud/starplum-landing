import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = true, dark = false }: SectionHeadingProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`mb-10 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}
  >
    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight ${dark ? 'text-white' : 'text-stone-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-base md:text-xl leading-relaxed max-w-3xl font-medium ${centered ? 'mx-auto' : ''} ${dark ? 'text-stone-400' : 'text-stone-500'}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);
