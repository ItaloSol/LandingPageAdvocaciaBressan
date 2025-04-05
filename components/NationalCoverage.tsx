"use client";

import { MapPin, CheckCircle, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

export default function NationalCoverage() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#3E4A46]/20 p-8 md:p-12
                       hover:border-[#957D56] hover:shadow-card-hover transition-all duration-300">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-8">
              <MapPin className="w-16 h-16 text-[#957D56] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#957D56] mb-4">
                ATENDIMENTO NACIONAL
              </h2>
              <p className="text-xl text-[#4A4A4A] mb-8">
                Presente em todo o Brasil, com sede em São José do Rio Preto/SP, 
                oferecemos atendimento personalizado onde você estiver:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <Image
                  src="/mapa.webp"
                  alt="Mapa do Brasil mostrando nossa cobertura nacional"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                'Consultoria presencial ou online',
                'Padrão de excelência garantido em todo território nacional',
                'Flexibilidade para adaptar nossos serviços à sua localização',
                'Suporte completo e orientação especializada'
              ].map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div 
                    className="flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-[#3E4A46]/20
                              hover:border-[#957D56] hover:scale-105 transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-[#957D56] flex-shrink-0" />
                    <p className="text-[#1A1A1A]">{benefit}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="text-center">
              <p className="text-xl text-[#4A4A4A] mb-8">
                Não perca mais tempo. Garanta seus direitos agora mesmo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5517996088520"
                  className="inline-flex items-center justify-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg
                           hover:bg-[#7A6545] hover:scale-105 transition-all duration-300 
                           focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none"
                >
                  <Calendar className="w-5 h-5" />
                  INICIE SUA APOSENTADORIA HOJE
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-[#4A4A4A]">
                <MapPin className="w-5 h-5 text-[#957D56]" />
                <p>Sede: São José do Rio Preto/SP</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}