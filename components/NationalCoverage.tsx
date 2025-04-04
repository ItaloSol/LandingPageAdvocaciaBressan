"use client";

import { MapPin, CheckCircle, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function NationalCoverage() {
  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
     
        <div className="max-w-5xl mx-auto bg-mapa rounded-2xl border border-[#C4A45F]/20 p-8 md:p-12">
        
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-8">
              <MapPin className="w-16 h-16 text-[#C4A45F] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#C4A45F] mb-4">
                ATENDIMENTO NACIONAL
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Presente em todo o Brasil, com sede em São José do Rio Preto/SP, 
                oferecemos atendimento personalizado onde você estiver:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Consultoria presencial ou online',
              'Padrão de excelência garantido em todo território nacional',
              'Flexibilidade para adaptar nossos serviços à sua localização',
              'Suporte completo e orientação especializada'
            ].map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className="flex items-center gap-4 bg-[#1A1A1A] p-6 rounded-lg border border-[#C4A45F]/20
                            hover:border-[#C4A45F] hover:scale-105 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-[#C4A45F] flex-shrink-0" />
                  <p className="text-white">{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="text-center">
              <p className="text-xl text-white/80 mb-8">
                Não perca mais tempo. Garanta seus direitos agora mesmo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5517996088520"
                  className="inline-flex items-center justify-center gap-2 bg-[#C4A45F] text-white px-8 py-4 rounded-lg
                           hover:bg-[#B3934F] hover:scale-105 transition-all duration-300 
                           focus:ring-2 focus:ring-[#C4A45F] focus:ring-offset-2 focus:outline-none"
                >
                  <Calendar className="w-5 h-5" />
                  INICIE SUA APOSENTADORIA HOJE
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                <MapPin className="w-5 h-5 text-[#C4A45F]" />
                <p>Sede: São José do Rio Preto/SP</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}