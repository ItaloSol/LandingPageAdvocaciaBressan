"use client";

import { useState } from 'react';
import { Scale, Users, Briefcase, Heart, Home, Scroll, ChevronDown,BriefcaseBusiness } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AreasExpertise() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const areas = [
    {
      icon: Scale,
      title: "Previdência Social",
      description: "Especialistas em benefícios previdenciários e aposentadorias",
      content: "Nossa equipe possui vasta experiência em todos os tipos de benefícios previdenciários, incluindo aposentadorias, auxílio-doença, pensão por morte e BPC/LOAS. Oferecemos análise detalhada do seu caso e orientação personalizada para garantir seus direitos junto ao INSS."
    },
    {
      icon: Users,
      title: "Consumidor",
      description: "Defesa dos seus direitos nas relações de consumo",
      content: "Atuamos na proteção dos seus direitos como consumidor, tratando de casos que envolvem problemas com produtos e serviços, cobranças indevidas, negativação irregular e questões contratuais. Buscamos sempre a resolução mais eficiente para cada situação."
    },
    {
      icon: Briefcase,
      title: "Cível",
      description: "Resolução de conflitos e proteção dos seus interesses",
      content: "Oferecemos assessoria jurídica completa em questões cíveis, incluindo contratos, responsabilidade civil, indenizações e cobranças. Nossa atuação visa sempre a melhor solução para seu caso, seja pela via judicial ou extrajudicial."
    },
    {
      icon: BriefcaseBusiness,
      title: "Trabalhista",
      description: "Garantia dos seus direitos nas relações de trabalho",
      content: "Defendemos seus direitos trabalhistas com expertise e dedicação, tratando de questões como verbas rescisórias, horas extras, assédio moral, acidentes de trabalho e reconhecimento de vínculo empregatício."
    },
    {
      icon: Home,
      title: "Família",
      description: "Suporte jurídico em questões familiares",
      content: "Prestamos assistência em todas as questões do direito de família, como divórcio, guarda de filhos, pensão alimentícia, inventário e testamento. Nosso atendimento é humanizado e focado na resolução pacífica dos conflitos."
    },
    {
      icon: Scroll,
      title: "Sucessões",
      description: "Orientação especializada em heranças e inventários",
      content: "Auxiliamos em todo o processo sucessório, desde a abertura do inventário até a partilha dos bens, incluindo testamentos, arrolamentos e inventários extrajudiciais. Garantimos uma condução eficiente e segura do seu processo."
    }
  ];

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center p-2 mb-16">
            <span className="block text-[#957D56] text-4xl md:text-5xl font-bold">
              ÁREAS DE ATUAÇÃO
            </span>
            <span className="text-[#4A4A4A] text-xl mt-4 block">
              Além da previdência social, atendemos outras áreas
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="bg-gray-50 border border-[#3E4A46]/20 rounded-xl overflow-hidden
                         hover:border-[#957D56] transition-all duration-300
                         group cursor-pointer"
                onClick={() => handleCardClick(index)}
                role="button"
                aria-expanded={expandedCard === index}
                aria-controls={`card-content-${index}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(index);
                  }
                }}
              >
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-[#957D56]/10 rounded-full mb-6 
                                  group-hover:bg-[#957D56]/20 transition-all duration-300">
                      <area.icon className="w-8 h-8 text-[#957D56]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A] flex items-center gap-2">
                      {area.title}
                      <ChevronDown 
                        className={`w-5 h-5 text-[#957D56] transition-transform duration-300
                                  ${expandedCard === index ? 'rotate-180' : ''}`}
                      />
                    </h3>
                  </div>
                </div>

                <div
                  id={`card-content-${index}`}
                  className={`px-8 transition-all duration-300 ease-in-out
                            ${expandedCard === index ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
                  role="region"
                  aria-labelledby={`card-title-${index}`}
                >
                  <div className="border-t border-[#3E4A46]/20 pt-4 mt-2">
                    <p className="text-[#4A4A4A] text-left mb-4">
                      {area.description}
                    </p>
                    <p className="text-[#4A4A4A] text-left">
                      {area.content}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}