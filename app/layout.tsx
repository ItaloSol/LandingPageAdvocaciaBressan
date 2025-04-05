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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=360"
          media="(max-width: 360px)"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=360"
          media="(max-width: 360px)"
        />
        
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://wa.me" crossOrigin="anonymous" />
        
        {/* Critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root{--gold:#957D56;--green:#3E4A46;--background:#FFF;--text:#1A1A1A}
          *{-webkit-font-smoothing:antialiased}
          body{background:#fff;color:#1A1A1A}
        `}} />
      </head>
      <body className={inter.className}>
        {children}
       
      </body>
    </html>
  );
}