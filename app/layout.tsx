import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://advocaciabressanoficial.web.app'),
  title: 'Bressan Advocacia | Especialistas em Direito Previdenciário',
  description: 'Bressan Advocacia | Especialistas em Direito Previdenciário',
  openGraph: {
    title: 'Bressan Advocacia | Especialistas em Direito Previdenciário',
    description: 'Escritório especializado em direito previdenciário com mais de 1500 benefícios concedidos. Atendimento em todo Brasil',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bressan Advocacia | Especialistas em Direito Previdenciário',
      },
    ],
    siteName: 'Bressan Advocacia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bressan Advocacia | Especialistas em Direito Previdenciário',
    description: 'Escritório especializado em direito previdenciário com mais de 1500 benefícios concedidos. Atendimento em todo Brasil',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://advocaciabressanoficial.web.app/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.ico',
  },
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