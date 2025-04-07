"use client";

import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import useEmblaCarousel from 'embla-carousel-react';

interface Review {
  author: string;
  content: string;
  date: string;
}

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const reviews: Review[] = [
    {
      author: "Edi Joaquim",
      content: "João Victor é um profissional excepcional! Desde o início do atendimento, demonstrou muita atenção e comprometimento, esclarecendo todas as minhas dúvidas de forma clara e eficiente. Graças ao seu suporte, meu caso foi resolvido com sucesso. Parabéns pelo excelente trabalho, João!",
      date: "2 meses atrás"
    },
    {
      author: "Milton Lopes",
      content: "Excelentes profissionais, muito atenciosos, dedicados, e sempre priorizando oque é melhor para nós clientes!! Tamo junto Dr. João Victor eee Dr. Paula Chioca",
      date: "2 meses atrás"
    },
    {
      author: "Joseli Ferreira Rodrigues",
      content: "Excelente profissional. Muito prestativo atencioso e realmente trabalha.",
      date: "2 meses atrás"
    },
    {
      author: "Dora Mendes",
      content: "O atendimento é excelente, o Dr. Bressan esclarece as dúvidas de forma didática, as informações são claras e confiáveis.",
      date: "2 meses atrás"
    },
    {
      author: "Rafael Tridico",
      content: "Excelente atendimento, resolveu meu caso muito rápido e eficaz super recomendo 👏👏👏",
      date: "2 meses atrás"
    },
    {
      author: "Cleucilene Rodrigues",
      content: "Quero dizer para as pessoas que fui muito bem atendida e q o meu problema foi resolvido eu super indico o Dr João Vitor Bressan ótimo advogado",
      date: "2 meses atrás"
    },
    {
      author: "Célia Mônica Rodrigues",
      content: "Fui muito bem atendida, excelente profissional. Recomendo",
      date: "2 meses atrás"
    },
    {
      author: "Ana Fucci",
      content: "Excelente profissional, solicito e atencioso! Bem ágil na elaboração e entrada de processos! Recomendo",
      date: "4 meses atrás"
    }
  ];

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const ReviewCard = ({ review }: { review: Review }) => (
    <div className="bg-white border border-[#3E4A46]/20 rounded-xl p-6
                   hover:border-[#957D56] transition-all duration-300
                   hover:shadow-card-hover h-full">
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-4 h-4 text-yellow-400 fill-current"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-[#4A4A4A] mb-4 line-clamp-4">
        {review.content}
      </p>
      <div className="mt-auto">
        <p className="font-semibold text-[#1A1A1A]">{review.author}</p>
        <p className="text-sm text-[#4A4A4A]">{review.date}</p>
      </div>
    </div>
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-[#957D56]">clientes dizem</span>
            </h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-xl text-[#4A4A4A]">
              5.0 de média baseado em mais de 50 avaliações
            </p>
          </div>
        </ScrollReveal>

        {/* Reviews Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg
                     border border-[#3E4A46]/20 hover:border-[#957D56] transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2
                     z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-[#957D56]" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg
                     border border-[#3E4A46]/20 hover:border-[#957D56] transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2
                     z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-[#957D56]" />
          </button>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/Advocacia+Bressan/@-20.8191113,-49.3999965,17z/data=!4m8!3m7!1s0x94bdad0174371a1f:0x1a6c9a3fa0643c08!8m2!3d-20.8191113!4d-49.3999965!9m1!1b1!16s%2Fg%2F11pf8fx9yr?hl=pt-br&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg
                       hover:bg-[#7A6545] hover:scale-105 transition-all duration-300 
                       focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none"
            >
              VER TODAS AS AVALIAÇÕES
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}