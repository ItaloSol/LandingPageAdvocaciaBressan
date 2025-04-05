"use client";

import { Scale, Users, Briefcase, Heart, Home, Scroll,BriefcaseBusiness } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AreasExpertise() {
  const areas = [
    {
      icon: Scale,
      title: "Previdência Social",
      description: "Especialistas em benefícios previdenciários e aposentadorias"
    },
    {
      icon: Users,
      title: "Consumidor",
      description: "Defesa dos seus direitos nas relações de consumo"
    },
    {
      icon: Briefcase,
      title: "Cível",
      description: "Resolução de conflitos e proteção dos seus interesses"
    },
    {
      icon: BriefcaseBusiness,
      title: "Trabalhista",
      description: "Garantia dos seus direitos nas relações de trabalho"
    },
    {
      icon: Home,
      title: "Família",
      description: "Suporte jurídico em questões familiares"
    },
    {
      icon: Scroll,
      title: "Sucessões",
      description: "Orientação especializada em heranças e inventários"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center mb-16">
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
                className="bg-gray-50 border border-[#3E4A46]/20 rounded-xl p-8
                         hover:border-[#957D56] transition-all duration-300
                         hover:scale-105 hover:shadow-card-hover
                         group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-[#957D56]/10 rounded-full mb-6 
                                group-hover:bg-[#957D56]/20 transition-all duration-300">
                    <area.icon className="w-8 h-8 text-[#957D56]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                    {area.title}
                  </h3>
                  <p className="text-[#4A4A4A]">
                    {area.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}