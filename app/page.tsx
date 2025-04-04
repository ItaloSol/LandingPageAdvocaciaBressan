"use client";

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Expertise from '@/components/Expertise';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Specialist from '@/components/Specialist';
import CallToAction from '@/components/CallToAction';
import NationalCoverage from '@/components/NationalCoverage';
import WhyChooseUs from '@/components/WhyChooseUs';
import GoogleReviews from '@/components/GoogleReviews';

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Hero />
      <Stats />
      <Expertise />
      <WhyChooseUs />
      <Specialist />
      <GoogleReviews />
      <NationalCoverage />
      <CallToAction />
      <FAQ />
      <Contact />
    </main>
  );
}