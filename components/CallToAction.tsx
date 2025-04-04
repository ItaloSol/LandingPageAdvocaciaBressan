"use client";

import { Shield, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CallToAction() {
  return (
    <section className="section-padding bg-maos">
      <div className="container mx-auto px-4">
        <div className="bg-[#1A1A1A] border border-[#C4A45F]/20 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto
                       hover:border-[#C4A45F] transition-all duration-300">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-16 h-16 text-[#C4A45F] mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Não deixe seu benefício nas mãos do{' '}
                <span className="text-[#C4A45F]">INSS</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl">
                Tenha um advogado especialista defendendo seus direitos. 
                Nossa expertise é sua garantia de um processo conduzido com excelência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5517996088520"
                  className="inline-flex items-center justify-center gap-2 bg-[#C4A45F] text-white px-8 py-4 rounded-lg
                           hover:bg-[#B3934F] hover:scale-105 transition-all duration-300 
                           focus:ring-2 focus:ring-[#C4A45F] focus:ring-offset-2 focus:outline-none"
                >
                  FALAR COM ESPECIALISTA
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <a
                  href="tel:+5517996088520"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#C4A45F] text-[#C4A45F] px-8 py-4 rounded-lg
                           hover:bg-[#C4A45F] hover:text-white hover:scale-105 transition-all duration-300 
                           focus:ring-2 focus:ring-[#C4A45F] focus:ring-offset-2 focus:outline-none"
                >
                  LIGAR AGORA
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}