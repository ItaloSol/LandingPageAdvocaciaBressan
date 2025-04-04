import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JBB Advocacia | Especialistas em Direito Previdenciário',
  description: 'Escritório especializado em direito previdenciário com mais de 1500 benefícios concedidos. Atendimento em todo Brasil, primeira consulta gratuita.',
  keywords: 'advocacia previdenciária, aposentadoria, auxílio-doença, INSS, benefício previdenciário, advogado previdenciário, São José do Rio Preto',
  authors: [{ name: 'JBB Advocacia' }],
  openGraph: {
    title: 'JBB Advocacia | Especialistas em Direito Previdenciário',
    description: 'Escritório especializado em direito previdenciário com mais de 1500 benefícios concedidos. Atendimento em todo Brasil.',
    type: 'website',
    locale: 'pt_BR',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={playfair.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}