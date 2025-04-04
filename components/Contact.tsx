"use client";

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <footer className="section-padding bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center mb-12">
            <span className="block text-[#C4A45F] text-4xl md:text-5xl font-bold">
              ENTRE EM CONTATO
            </span>
            <span className="text-white text-xl mt-4 block">
              Conquiste seus direitos com quem mais entende
            </span>
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <ScrollReveal animation="slideUp" delay={0.2}>
              <div className="space-y-6">
                <a 
                  href="tel:+5517996088520" 
                  className="flex items-center gap-3 text-lg hover:text-[#C4A45F] transition-colors
                           hover:scale-105 transition-transform duration-300"
                >
                  <Phone className="text-[#C4A45F]" />
                  <span>(17) 99608-8520</span>
                </a>
                
                <a 
                  href="mailto:jbbadvogados@gmail.com" 
                  className="flex items-center gap-3 text-lg hover:text-[#C4A45F] transition-colors
                           hover:scale-105 transition-transform duration-300"
                >
                  <Mail className="text-[#C4A45F]" />
                  <span>jbbadvogados@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-3 text-lg group hover:scale-105 transition-transform duration-300">
                  <MapPin className="text-[#C4A45F] flex-shrink-0" />
                  <span className="group-hover:text-[#C4A45F] transition-colors">
                    Rua Floriano Peixoto, 3040, S. J. Rio Preto/SP
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Business Hours */}
            <ScrollReveal animation="slideUp" delay={0.4}>
              <div>
                <div className="flex items-start gap-3 text-lg group hover:scale-105 transition-transform duration-300">
                  <Clock className="text-[#C4A45F] flex-shrink-0 mt-1" />
                  <div className="group-hover:text-[#C4A45F] transition-colors">
                    <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                    <p>Segunda - Sexta</p>
                    <p>09h - 17h</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Button */}
          <ScrollReveal animation="fadeIn" delay={0.6}>
            <div className="text-center">
              <a
                href="https://wa.me/5517996088520"
                className="inline-flex items-center justify-center gap-2 bg-[#C4A45F] text-white px-8 py-4 rounded-lg
                         hover:bg-[#B3934F] hover:scale-105 transition-all duration-300 
                         focus:ring-2 focus:ring-[#C4A45F] focus:ring-offset-2 focus:outline-none"
              >
                AVALIE SEU CASO GRATUITAMENTE
              </a>
              <p className="mt-4 text-white/80">
                Resposta em até 24 horas
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}