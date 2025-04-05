"use client";

import { Heart, FileCheck, Clock, Calculator, Shield, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Expertise() {
  const services = [
    {
      icon: Heart,
      title: 'AUXÍLIO-DOENÇA',
      description: 'Assessoria completa para garantir seu benefício por incapacidade temporária',
      ariaLabel: 'Serviço de auxílio-doença'
    },
    {
      icon: Shield,
      title: 'APOSENTADORIA',
      description: 'Análise detalhada para conquistar sua aposentadoria nas melhores condições',
      ariaLabel: 'Serviço de aposentadoria'
    },
    {
      icon: Award,
      title: 'PENSÃO POR MORTE',
      description: 'Suporte integral para assegurar o benefício aos dependentes',
      ariaLabel: 'Serviço de pensão por morte'
    },
    {
      icon: FileCheck,
      title: 'REVISÃO DE BENEFÍCIO',
      description: 'Verificação minuciosa para identificar valores pagos incorretamente',
      ariaLabel: 'Serviço de revisão de benefício'
    },
    {
      icon: Calculator,
      title: 'PLANEJAMENTO PREVIDENCIÁRIO',
      description: 'Estratégias personalizadas para sua aposentadoria futura',
      ariaLabel: 'Serviço de planejamento previdenciário'
    },
    {
      icon: Clock,
      title: 'BPC/LOAS',
      description: 'Auxílio na obtenção do benefício assistencial para idosos e deficientes',
      ariaLabel: 'Serviço de BPC/LOAS'
    }
  ];

  return (
    <section 
      className="section-padding bg-white"
      aria-labelledby="expertise-title"
    >
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 
            id="expertise-title" 
            className="text-center mb-16"
          >
            <span className="block text-[#957D56] text-4xl md:text-5xl font-bold">
              NOSSOS SERVIÇOS
            </span>
            <span className="text-[#4A4A4A] text-xl mt-4 block">
              Especialistas em todas as áreas do Direito Previdenciário
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="group relative transform transition-all duration-300 hover:scale-105"
                role="article"
                aria-label={service.ariaLabel}
              >
                <div 
                  className="bg-gray-50 border border-[#3E4A46]/20 rounded-lg p-8 text-center h-full
                            transition-all duration-300 
                            hover:border-[#957D56] hover:bg-white
                            hover:shadow-card-hover"
                >
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <service.icon 
                      className="w-16 h-16 mx-auto text-[#957D56] transition-colors duration-300
                               group-hover:text-[#7A6545]" 
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#1A1A1A] mb-4 transition-colors duration-300
                               group-hover:text-[#957D56]">
                    {service.title}
                  </h3>
                  <p className="text-[#4A4A4A] transition-colors duration-300
                              group-hover:text-[#1A1A1A]">
                    {service.description}
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