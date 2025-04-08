"use client";

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona a primeira consulta?',
      answer: 'Na primeira consulta, analisamos sua situação junto ao INSS, verificamos documentos e traçamos a melhor estratégia para seu caso. Você receberá todas as orientações necessárias para prosseguir com o processo.'
    },
    {
      question: 'Quanto tempo demora para conseguir um benefício do INSS?',
      answer: 'O prazo pode variar conforme o tipo de benefício e a complexidade do caso. Em geral, o INSS tem até 45 dias para analisar um pedido de benefício. Em caso de negativa, o processo judicial pode levar de 6 meses a 2 anos, dependendo da região e do tribunal.'
    },
    {
      question: 'Quais documentos são necessários para dar entrada em um benefício?',
      answer: 'Os documentos básicos incluem RG, CPF, comprovante de residência e carteira de trabalho. Documentos específicos variam conforme o benefício: laudos médicos para auxílio-doença, certidão de óbito para pensão por morte, comprovantes de contribuição para aposentadoria, entre outros.'
    },
    {
      question: 'Como são cobrados os honorários advocatícios?',
      answer: 'Trabalhamos com honorários de êxito, ou seja, só recebemos quando você ganhar. O percentual é calculado sobre os valores atrasados que você tem direito a receber, sem comprometer seu benefício mensal futuro. As condições são sempre transparentes e definidas em contrato.'
    },
    {
      question: 'Posso acompanhar o andamento do meu processo?',
      answer: 'Sim! Fornecemos atualizações regulares sobre seu processo através de WhatsApp ou e-mail, conforme sua preferência.'
    },
    {
      question: 'E se meu benefício for negado pelo INSS?',
      answer: 'Não se preocupe! Em caso de negativa, analisamos os motivos e, se houver base legal, recorremos administrativamente ou judicialmente. Nossa taxa de sucesso em recursos é superior a 90%, pois só entramos com ações quando identificamos real direito ao benefício.'
    }
  ];

  return (
    <section className="section-padding bg-gray-200">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center mb-12">
            <span className="block text-[#957D56] text-4xl md:text-5xl font-bold">
              DÚVIDAS FREQUENTES
            </span>
            <span className="text-[#4A4A4A] text-xl mt-4 block">
              Esclarecemos suas principais dúvidas sobre direito previdenciário
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className="bg-white border border-[#3E4A46]/20 rounded-lg overflow-hidden
                         hover:border-[#957D56] hover:shadow-card-hover transition-all duration-300"
              >
                <button
                  type="button"
                  className="w-full p-6 text-left flex items-center justify-between gap-4
                           hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-semibold text-[#1A1A1A]">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#957D56] transition-transform duration-200 flex-shrink-0
                              ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 transition-all duration-300 ease-in-out
                            ${openIndex === index ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
                >
                  <p className="text-[#4A4A4A]">
                    {faq.answer}
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