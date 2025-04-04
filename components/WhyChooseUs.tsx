"use client";

import {
  Users, MessageSquare, Brain, Clock, HeartHandshake,
  Building2, Globe2, Home, FileText, Shield
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais com formação contínua e expertise comprovada em direito previdenciário"
    },
    {
      icon: MessageSquare,
      title: "Comunicação Clara",
      description: "Traduzimos termos jurídicos complexos em linguagem simples e acessível"
    },
    {
      icon: Brain,
      title: "Soluções Estratégicas",
      description: "Desenvolvimento de estratégias personalizadas para cada caso específico"
    },
    {
      icon: Shield,
      title: "Suporte Completo",
      description: "Acompanhamento integral do seu processo, do início à conclusão"
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado",
      description: "100% humano e personalizado, sem uso de robôs ou automações"
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Disponibilidade adaptada à sua rotina e necessidades"
    },
    {
      icon: Globe2,
      title: "Cobertura Nacional",
      description: "Atendimento em todo o Brasil, onde você estiver"
    },
    {
      icon: Building2,
      title: "Estrutura Acolhedora",
      description: "Sede moderna e confortável em São José do Rio Preto"
    },
    {
      icon: FileText,
      title: "Fácil Acesso",
      description: "Informações processuais disponíveis de forma clara e organizada"
    },
    {
      icon: Shield,
      title: "Compromisso Total",
      description: "Dedicação integral à proteção dos seus direitos"
    }
  ];

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por Que <span className="text-[#C4A45F]">Nos Escolher</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Nossa missão é oferecer um serviço jurídico de excelência, 
              combinando expertise técnica com um atendimento verdadeiramente humano
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="bg-[#1A1A1A] border border-[#C4A45F]/20 rounded-xl p-6
                         hover:border-[#C4A45F] transition-all duration-300
                         hover:scale-105 hover:shadow-lg hover:shadow-[#C4A45F]/20
                         group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C4A45F]/10 rounded-lg group-hover:bg-[#C4A45F]/20 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-[#C4A45F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70">
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
              className="inline-flex items-center justify-center gap-2 bg-[#C4A45F] text-white px-8 py-4 rounded-lg
                       hover:bg-[#B3934F] hover:scale-105 transition-all duration-300 
                       focus:ring-2 focus:ring-[#C4A45F] focus:ring-offset-2 focus:outline-none"
            >
              GARANTA SEUS DIREITOS AGORA
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}