"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const message = encodeURIComponent("Oi, quero falar com um especialista sobre meu caso");
  const whatsappUrl = `https://wa.me/5517996088520?text=${message}`;

  return (
    <footer className="section-padding bg-gray-50">
      <div className="container mx-auto  px-4">
        <ScrollReveal>
          <h2 className="text-center mb-12">
            <span className="block text-[#957D56] text-4xl md:text-5xl font-bold">
              ENTRE EM CONTATO
            </span>
            <span className="text-[#4A4A4A] text-xl mt-4 block">
              Conquiste seus direitos com quem mais entende
            </span>
          </h2>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <ScrollReveal animation="slideUp" delay={0.2}>
              <div className="space-y-6 p-4 ">
                <a 
                  href="tel:+5517996088520" 
                  className="flex items-center gap-3 text-lg text-[#1A1A1A] hover:text-[#957D56] 
                           hover:scale-105 transition-all duration-300"
                >
                  <Phone className="text-[#957D56]" />
                  <span>(17) 99608-8520</span>
                </a>
                
                <a 
                  href="mailto:jbbadvogados@gmail.com" 
                  className="flex items-center gap-3 text-lg text-[#1A1A1A] hover:text-[#957D56]
                           hover:scale-105 transition-all duration-300"
                >
                  <Mail className="text-[#957D56]" />
                  <span>jbbadvogados@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-3 text-lg group hover:scale-105 transition-all duration-300">
                  <MapPin className="text-[#957D56] flex-shrink-0" />
                  <span className="text-[#1A1A1A] group-hover:text-[#957D56] transition-colors">
                    Rua Floriano Peixoto, 3040, S. J. Rio Preto/SP
                  </span>
                </div>

                <div className="flex items-start gap-3 text-lg group hover:scale-105 transition-all duration-300">
                  <Clock className="text-[#957D56] flex-shrink-0 mt-1" />
                  <div className="text-[#1A1A1A] group-hover:text-[#957D56] transition-colors">
                    <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                    <p>Segunda - Sexta</p>
                    <p>09h - 17h</p>
                  </div>
                </div>

                {/* Instagram Call to Action */}
                <div className="pt-6">
                  <a
                    href="https://www.instagram.com/bressanadvocacia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 hover:scale-105 transition-all duration-300
                             "
                    aria-label="Siga-nos no Instagram"
                  >
                    <Instagram className="w-8 h-8 " />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Siga-nos no Instagram</p>
                      <p className="text-sm opacity-90">@bressanadvocacia</p>
                    </div>
                  </a>
                </div>

                {/* Facebook Link */}
                <div className="pt-2">
                  <a
                    href="https://www.facebook.com/jvbressanadvocacia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4  hover:scale-105 transition-all duration-300"
                    aria-label="Siga-nos no Facebook"
                  >
                    <Facebook className="w-8 h-8 transition-colors" />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Curta nossa página</p>
                      <p className="text-sm opacity-90">JBB Advocacia</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal animation="slideUp" delay={0.4}>
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-[#3E4A46]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.4770993193386!2d-49.40213798255615!3d-20.819162699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad614c548875%3A0x3e88c1d7946b9d67!2sR.%20Floriano%20Peixoto%2C%203040%20-%20Centro%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015010-020!5e0!3m2!1spt-BR!2sbr!4v1647881234567!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório"
                  
                ></iframe>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Button */}
          <ScrollReveal animation="fadeIn" delay={0.6}>
            <div className="text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg
                         hover:bg-[#7A6545] hover:scale-105 transition-all duration-300 
                         focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none"
              >
                AVALIE SEU CASO AGORA
              </a>
              <p className="mt-4 text-[#4A4A4A]">
                Resposta em até 24 horas
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}