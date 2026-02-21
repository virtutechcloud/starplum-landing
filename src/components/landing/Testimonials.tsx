"use client";
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { landingCopy } from '@/lib/landing';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Loved by Legal Professionals."
          subtitle="Starplum is the secret weapon for modern law firms that value both speed and precision."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {landingCopy.testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col h-full bg-white border-none">
              <div className="text-plum-900/20 mb-6">
                <Quote className="w-10 h-10 fill-current" />
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 flex-1 italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-plum-100 flex items-center justify-center font-bold text-plum-900">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-sm text-slate-500">{t.role} • {t.firm}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
