"use client";

import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Problem } from '@/components/landing/Problem';
import { Solution } from '@/components/landing/Solution';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { UseCases } from '@/components/landing/UseCases';
import { Benefits } from '@/components/landing/Benefits';
import { Security } from '@/components/landing/Security';
import { Validation } from '@/components/landing/Validation';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-900 overflow-x-hidden antialiased selection:bg-plum-100 selection:text-plum-900">
      <Header />
      <main>
        <Hero />
        <Problem />
        <div id="solution"><Solution /></div>
        <div id="features"><Features /></div>
        <div id="how-it-works"><HowItWorks /></div>
        <UseCases />
        <Benefits />
        <div id="security"><Security /></div>
        <Validation />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
