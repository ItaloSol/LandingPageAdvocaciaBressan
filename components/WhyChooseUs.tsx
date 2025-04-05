"use client";

import { Users, MessageSquare, Brain, HeartHandshake } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Users,
      title: "Equipe especializada",
      description: "Profissionais com formação contínua e expertise comprovada em direito previdenciário"
    },
    {
      icon: MessageSquare,
      title: "Comunicação clara",
      description: "Traduzimos termos jurídicos complexos em linguagem simples e acessível"
    },
    {
      icon: Brain,
      title: "Soluções estratégicas",
      description: "Desenvolvimento de estratégias personalizadas para cada caso específico"
    },
    {
      icon: HeartHandshake,
      title: "Atendimento humanizado",
      description: "100% humano e personalizado, sem uso de robôs ou automações"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que <span className="text-[#957D56]">nos escolher</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
              Nossa missão é oferecer um serviço jurídico de excelência, 
              combinando expertise técnica com um atendimento verdadeiramente humano
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="bg-white border border-[#3E4A46]/20 rounded-xl p-6
                         hover:border-[#957D56] transition-all duration-300
                         hover:scale-105 hover:shadow-card-hover
                         group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#957D56]/10 rounded-lg group-hover:bg-[#957D56]/20 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-[#957D56]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">
                      {benefit.title}
                    </h3>
                    <p className="text-[#4A4A4A]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/5517996088520"
              className="inline-flex items-center justify-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg
                       hover:bg-[#7A6545] hover:scale-105 transition-all duration-300 
                       focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none"
            >
              GARANTA SEUS DIREITOS AGORA
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}