"use client";

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const message = encodeURIComponent("Oi, quero falar com um especialista sobre meu caso");
  const whatsappUrl = `https://wa.me/5517996088520?text=${message}`;

  return (
    <header className="min-h-screen relative flex items-center parallax bg-white" role="banner">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 z-10"
        aria-hidden="true"
      ></div>
      <Image
        src="/logo.webp"
        alt="Professional law office environment"
        fill
        className="object-cover"
        priority
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDAR"
        sizes="(max-width: 360px) 360px, (max-width: 640px) 640px, (max-width: 750px) 750px, 828px"
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 lg:col-start-2">
            <ScrollReveal animation="fadeIn" delay={0.4}>
              <div className="relative w-full aspect-[3/4] max-w-[500px] mx-auto">
                <Image
                  src="/hero1.webp"
                  alt="Advogado especialista em direito previdenciário"
                  fill
                  className="object-cover border-b-2 border-[#957D56]" // Added border-bottom
                  priority
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYyLlFUUVRAR0BXUFNMUE1HUVf/2wBDAR"
                  sizes="(max-width: 360px) 360px, (max-width: 640px) 640px, (max-width: 750px) 750px, 500px"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:order-1 max-w-2xl space-y-8">
            

            <ScrollReveal animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] space-y-2">
                <span className="block">ESPECIALISTA EM</span>
                <span className="text-[#957D56] block">
                  DIREITO<br />
                  PREVIDENCIÁRIO
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="slideUp" delay={0.4}>
              <p className="text-xl md:text-2xl text-[#1A1A1A] max-w-2xl">
                Garantimos seus direitos junto ao INSS com{' '}
                <span className="text-[#957D56]">mais de 360 benefícios conquistados</span> para nossos clientes.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slideUp" delay={0.6}>
              <div className="space-y-8">
                <p className="text-lg text-[#4A4A4A]">
                  Teve benefício negado? Precisa se aposentar? Nossa equipe especializada está pronta para ajudar.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 hover-card"
                  role="button"
                  aria-label="Falar com especialista via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  GARANTA SEUS DIREITOS AGORA
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </header>
  );
}