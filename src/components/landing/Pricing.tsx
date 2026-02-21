"use client";
import { useState } from 'react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Toggle } from './ui/Toggle';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { landingCopy } from '@/lib/landing';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NextLink from 'next/link';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const tiers = isAnnual ? landingCopy.pricing.annual : landingCopy.pricing.monthly;

  return (
    <section id="pricing" className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Transparent, Firm-first Pricing."
          subtitle="Simple pricing that grows with your practice. No setup fees, no hidden costs."
        />

        <div className="flex flex-col items-center mb-16">
           <Toggle
             enabled={isAnnual}
             onChange={setIsAnnual}
             labelLeft="Monthly"
             labelRight="Annual"
           />
           {isAnnual && (
             <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <Badge className="bg-green-50 text-green-700 border-green-100">Save 15% with annual billing</Badge>
             </motion.div>
           )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`relative flex flex-col ${tier.popular ? 'border-plum-900 ring-4 ring-plum-100' : ''}`} hover={!tier.popular}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                   <Badge className="bg-plum-900 text-white border-plum-900 px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </span>
                  {typeof tier.price === 'number' && <span className="text-slate-500">/user/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-plum-900 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <NextLink href="/onboarding">
                <Button variant={tier.popular ? 'primary' : 'outline'} className="w-full">
                  {tier.cta}
                </Button>
              </NextLink>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button
             onClick={() => setIsCompareOpen(!isCompareOpen)}
             className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-plum-900 transition-colors"
           >
             Compare all features {isCompareOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
           </button>
           
           <AnimatePresence>
             {isCompareOpen && (
               <motion.div
                 initial={{ height: 0, opacity: 0 }}
                 animate={{ height: "auto", opacity: 1 }}
                 exit={{ height: 0, opacity: 0 }}
                 className="overflow-hidden mt-8"
               >
                 <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-x-auto text-left">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="p-6 font-bold text-slate-900">Feature</th>
                          <th className="p-6 font-bold text-slate-900 text-center">Starter</th>
                          <th className="p-6 font-bold text-slate-900 text-center">Firm</th>
                          <th className="p-6 font-bold text-slate-900 text-center">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {["Custom Playbooks", "Audit Retention", "Matter Isolation", "API Access", "SSO/SAML"].map((feat) => (
                          <tr key={feat}>
                            <td className="p-6 text-slate-600 font-medium">{feat}</td>
                            <td className="p-6 text-center text-slate-400">—</td>
                            <td className="p-6 text-center text-plum-700 font-bold">Standard</td>
                            <td className="p-6 text-center text-plum-900 font-black">Unlimited</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
