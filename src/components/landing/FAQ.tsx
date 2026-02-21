"use client";
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Accordion } from './ui/Accordion';
import { landingCopy } from '@/lib/landing';

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions."
          subtitle="Everything you need to know about integrating Starplum into your firm's document workflow."
        />
        <Accordion items={landingCopy.faq} />
      </Container>
    </section>
  );
};
