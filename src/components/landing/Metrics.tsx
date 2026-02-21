"use client";
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { landingCopy } from '@/lib/landing';

export const Metrics = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {landingCopy.metrics.map((metric, i) => (
            <Card key={i} className="text-center py-10">
              <div className="text-5xl font-black text-plum-900 mb-2 leading-none">
                {metric.value}
              </div>
              <div className="text-xl font-bold text-slate-900 mb-3">
                {metric.label}
              </div>
              <p className="text-slate-600">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
