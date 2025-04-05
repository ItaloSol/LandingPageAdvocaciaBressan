"use client";

import { Scale, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CallToAction() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 border border-[#3E4A46]/20 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto
                       hover:border-[#957D56] hover:shadow-card-hover transition-all duration-300">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <Scale className="w-16 h-16 text-[#957D56] mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Não deixe seu benefício nas mãos do{' '}
                <span className="text-[#957D56]">INSS</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-[#4A4A4A] mb-8 max-w-3xl">
                Tenha um advogado especialista defendendo seus direitos. 
                Nossa expertise é sua garantia de um processo conduzido com excelência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5517996088520"
                  className="inline-flex items-center justify-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg
                           hover:bg-[#7A6545] hover:scale-105 transition-all duration-300 
                           focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none"
                >
                  FALAR COM ESPECIALISTA
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <a
                  href="tel:+5517996088520"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#957D56] text-[#957D56] px-8 py-4 rounded-lg
                           hover:bg-[#957D56] hover:text-white hover:scale-105 transition-all duration-300 
                           focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none"
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