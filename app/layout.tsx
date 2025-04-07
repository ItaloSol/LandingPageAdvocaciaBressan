import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://advocaciabressanoficial.web.app'),
  title: {
    default: 'JBB Advocacia | Especialista em Direito Previdenciário',
    template: '%s | JBB Advocacia'
  },
  description: 'Escritório especializado em direito previdenciário com mais de 360 benefícios concedidos. Atendimento em todo Brasil, primeira consulta gratuita.',
  keywords: [
    'advocacia previdenciária',
    'aposentadoria',
    'auxílio-doença',
    'INSS',
    'benefício previdenciário',
    'advogado previdenciário',
    'São José do Rio Preto',
    'direito previdenciário'
  ],
  authors: [{ name: 'JBB Advocacia' }],
  creator: 'JBB Advocacia',
  publisher: 'JBB Advocacia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'JBB Advocacia | Especialista em Direito Previdenciário',
    description: 'Escritório especializado em direito previdenciário com mais de 360 benefícios concedidos. Atendimento em todo Brasil.',
    url: 'https://advocaciabressanoficial.web.app',
    siteName: 'JBB Advocacia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JBB Advocacia - Especialista em Direito Previdenciário',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JBB Advocacia | Especialista em Direito Previdenciário',
    description: 'Escritório especializado em direito previdenciário com mais de 360 benefícios concedidos.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://advocaciabressanoficial.web.app',
  },
  verification: {
    google: 'your-google-verification-code',
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
    shortcut: '/logo.ico',
    apple: '/logo.ico',
    other: {
      rel: 'icon',
      url: '/logo.ico',
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}