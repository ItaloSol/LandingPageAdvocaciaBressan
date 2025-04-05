"use client";

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import AreasExpertise from '@/components/AreasExpertise';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Specialist from '@/components/Specialist';
import CallToAction from '@/components/CallToAction';
import NationalCoverage from '@/components/NationalCoverage';
import WhyChooseUs from '@/components/WhyChooseUs';


export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      <Stats />
      <AreasExpertise />
      <WhyChooseUs />
      <Specialist />
      <NationalCoverage />
      <CallToAction />
      <FAQ />
      <Contact />
      
    </main>
  );
}
