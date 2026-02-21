'use client'

import { motion } from 'framer-motion'
import { landingCopy } from '@/lib/landing'

export const SocialProof = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {landingCopy.socialProof.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-2xl"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {item.metric}
              </div>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



