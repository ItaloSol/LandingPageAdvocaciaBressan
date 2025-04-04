"use client";

import Image from 'next/image';
import { MapIcon as WhatsappIcon, Scale } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <header className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-hero" role="banner">
      {/* Main content */}
      <div className="flex items-center container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <ScrollReveal animation="fadeIn">
            {/* Logo */}
            <div className="h-12" role="img" aria-label="Logo JBB Advocacia">
              <Image
                src="/images/logo.webp"
                alt="Logo JBB Advocacia"
                width={120} // Adjust width as needed
                height={120} // Adjust height as needed
                className="border-2 border-[#C4A45F] rounded-full"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" delay={0.2}>
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              ESPECIALISTAS EM{' '}
              <span className="text-[#C4A45F] block mt-2">
                DIREITO<br />
                PREVIDENCIÁRIO
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" delay={0.4}>
            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl">
              Garantimos seus direitos junto ao INSS com{' '}
              <span className="text-[#C4A45F]">mais de 647 benefícios conquistados</span> para nossos clientes.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" delay={0.6}>
            {/* Urgent message */}
            <p className="text-lg mb-8 text-gray-200">
              Teve benefício negado? Precisa se aposentar? Nossa equipe especializada está pronta para ajudar.
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.me/5517996088520"
              className="btn-primary inline-flex items-center gap-2 hover-card"
              role="button"
              aria-label="Agendar consulta gratuita via WhatsApp"
            >
              <Scale className="w-5 h-5" aria-hidden="true" />
              GARANTA SEUS DIREITOS AGORA
            </a>

            {/* Consultation notice */}
            <p className="mt-6 text-gray-300 flex items-center gap-2">
              <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
              Primeira consulta gratuita
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Background image on the right */}
      <div className="relative min-h-[300px]"> {/* Added min-h class */}
        <Image
          src="/background/hero.webp"
          alt="Background image"
          fill
          className="object-contain object-center"
          priority
          quality={90}
        />
      </div>
    </header>
  );
}