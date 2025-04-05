"use client";

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <header className="" role="banner">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 z-10"
        aria-hidden="true"
      ></div>
      <Image
        src="/back-hero.webp"
        alt="Professional law office environment"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lawyer Image - Shown first on mobile */}
          <div className="lg:order-2 lg:col-start-2">
            <ScrollReveal animation="fadeIn" delay={0.4}>
              <div className="relative w-full aspect-[3/4] max-w-[500px] mx-auto">
                <Image
                  src="/hero1.webp" // Ensure this file exists in the public directory
                  alt="Advogado especialista em direito previdenciário"
                  fill
                  className="object-cover object-bottom"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Text Content */}
          <div className="lg:order-1 max-w-2xl">
            <ScrollReveal animation="fadeIn">
              {/* Logo */}
              <div className="mb-12" role="img" aria-label="Logo JBB Advocacia">
                <Image
                  src="/logo.webp"
                  alt="Logo JBB Advocacia"
                  width={220} // Adjust width as needed
                  height={220} // Adjust height as needed
                 
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideUp" delay={0.2}>
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1A1A1A]">
                ESPECIALISTAS EM{' '}
                <span className="text-[#957D56] block mt-2">
                  DIREITO<br />
                  PREVIDENCIÁRIO
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="slideUp" delay={0.4}>
              {/* Subheading */}
              <p className="text-xl md:text-2xl mb-8 text-[#1A1A1A] max-w-2xl">
                Garantimos seus direitos junto ao INSS com{' '}
                <span className="text-[#957D56]">mais de 360 benefícios conquistados</span> para nossos clientes.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slideUp" delay={0.6}>
              {/* Urgent message */}
              <p className="text-lg mb-8 text-[#4A4A4A]">
                Teve benefício negado? Precisa se aposentar? Nossa equipe especializada está pronta para ajudar.
              </p>

              {/* CTA Button */}
              <a
                href="https://wa.me/5517996088520"
                className="btn-primary inline-flex mb-4 items-center gap-2 hover-card"
                role="button"
                aria-label="Falar com especialista via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                GARANTA SEUS DIREITOS AGORA
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </header>
  );
}