"use client";

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const message = encodeURIComponent("Oi, quero falar com um especialista sobre meu caso");
  const whatsappUrl = `https://wa.me/5517996088520?text=${message}`;

  return (
    <header className="relative flex justify-center items-center parallax bg-white" role="banner">
       <ScrollReveal animation="slideUp" delay={0.2}>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 z-10"
        aria-hidden="true"
      ></div>
      
      {/* Desktop Background Image (hidden on mobile) */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src="/logo.webp"
          alt="Professional law office environment"
          fill
          className="object-contain"
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="container mx-auto  relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="lg:order-2 lg:col-start-2">
            {/* Mobile Image - Full width on mobile only */}
            <div className="md:hidden aspect-[4/3] relative">
              <Image
                src="/hero-mobile.webp"
                alt="Advogado especialista em direito previdenciário"
                fill
                className="object-cover pb-3 mt-4"
                priority
                quality={75}
                sizes="100vw"
              />
            </div>

            
              <div className="hidden md:block relative w-full aspect-[3/4] max-w-[500px] mx-auto">
                <Image
                  src="/hero1.webp"
                  alt="Advogado especialista em direito previdenciário"
                  fill
                  className="object-cover"
                  priority
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,..."
                  sizes="(max-width: 360px) 360px, (max-width: 640px) 640px, (max-width: 750px) 750px, 500px"
                />
              </div>
          
          </div>

          <div className="lg:order-1 px-4 max-w-2xl space-y-8">
            

            
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] space-y-2">
                <span className="block">ESPECIALISTA EM</span>
                <span className="text-[#957D56] block">
                  DIREITO<br />
                  PREVIDENCIÁRIO
                </span>
              </h1>
      

       
              <p className="text-xl md:text-2xl text-[#1A1A1A] max-w-2xl">
                Garantimos seus direitos junto ao INSS com{' '}
                <span className="text-[#957D56]">mais de 360 benefícios conquistados</span> para nossos clientes.
              </p>
           

           
              <div className="space-y-8">
                <p className="text-lg text-[#4A4A4A]">
                  Teve benefício negado? Precisa se aposentar? Nossa equipe especializada está pronta para ajudar.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7A6545] text-white inline-flex items-center gap-2 hover:bg-[#5E4D35] px-6 py-3 rounded-lg transition-colors"
                  role="button"
                  aria-label="Falar com especialista via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  GARANTA SEUS DIREITOS AGORA
                </a>
              </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </header>
  );
}