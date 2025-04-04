"use client";

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function Specialist() {
  return (
    <section 
      className="section-padding bg-especialista parallax" // Added parallax class
      aria-labelledby="specialist-title"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <ScrollReveal animation="fadeIn">
            <div className="relative aspect-[3/4] w-full max-w-[600px] mx-auto lg:mx-0">
              <Image
                src="/images/especialista.webp"
                alt="Dr. João Victor Bressan - Advogado Especialista em Direito Previdenciário"
                fill
                className="object-cover object-center rounded-lg shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col justify-center text-center lg:text-right">
            <ScrollReveal animation="slideUp" delay={0.2}>
              <div className="mb-8">
                <h2 className="text-[#C4A45F] text-4xl md:text-5xl font-bold mb-4">
                  Conheça Quem Irá Liderar a Sua Defesa
                </h2>
                <h3 className="text-white text-2xl md:text-3xl mb-2">
                  JOÃO VICTOR BRESSAN
                </h3>
                <p className="text-[#C4A45F] font-semibold">
                  OAB/SP 443.103
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideUp" delay={0.4}>
              <div className="space-y-4 text-white/80">
                <p>
                  Como especialista em direito previdenciário, dedico minha carreira à defesa incansável 
                  dos direitos dos segurados do INSS. Minha paixão pela justiça previdenciária me motiva 
                  a lutar diariamente pelos interesses de meus clientes.
                </p>
                
                <p>
                  Ao longo dos anos, desenvolvi uma profunda compreensão das complexidades do sistema 
                  previdenciário brasileiro, permitindo-me encontrar soluções eficazes para os mais 
                  diversos casos que chegam ao meu escritório.
                </p>

                <p>
                  Meu compromisso é oferecer um atendimento personalizado e humanizado, 
                  compreendendo que cada caso é único e merece atenção especial. Coloco toda 
                  minha experiência e conhecimento a serviço dos seus direitos previdenciários.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeIn" delay={0.6}>
              <div className="mt-8 flex justify-center lg:justify-end">
                <Image
                  src="/images/asssinatura.webp"
                  alt="Assinatura João Victor Bressan"
                  width={200}
                  height={80}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}