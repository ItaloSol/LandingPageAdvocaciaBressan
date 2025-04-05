"use client";

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5517996088520"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-yellow-400 text-white p-4 rounded-full shadow-lg
                 hover:bg-yellow-500 transition-all duration-150
                 [animation:pulse_2s_ease-in-out_infinite] hover:animate-none
                 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}