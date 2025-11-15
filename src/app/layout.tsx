import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Ohnso LLC | Expert Amazon Product Research, Sourcing, PPC Services & Amazon VA Solutions',
  description: 'Ohnso LLC specializes in expert Amazon product research for single products, professional sourcing, Amazon VA (Virtual Assistant) services, and results-driven PPC management. Grow your e-commerce business with proven Amazon selling strategies, competitive keyword targeting, and full-service VA support.',
  keywords: [
    'Amazon product research',
    'single product launch Amazon',
    'Amazon VA',
    'Amazon virtual assistant',
    'Amazon PPC management',
    'Amazon FBA sourcing',
    'product sourcing for Amazon',
    'Amazon listing optimization',
    'E-commerce growth',
    'competitive Amazon keywords',
    'Amazon seller services',
    'Amazon private label',
    'best Amazon VA services',
    'scale Amazon business',
    'Amazon seller PPC',
    'Ohnso LLC'
  ],
  openGraph: {
    title: 'Ohnso LLC | Expert Amazon Product Research & VA for Amazon Sellers',
    description:
      'Partner with Ohnso LLC for Amazon single product launch research, vetted VA services, and expert PPC management—empowering Amazon sellers to maximize profit and efficiency.',
    url: 'https://ohnso.com',
    type: 'website',
    images: [
      {
        url: 'https://ohnso.com/product.jpg',
        width: 1200,
        height: 630,
        alt: 'Ohnso LLC Amazon Product Research and VA Services'
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="keywords"
          content="Amazon product research, single product Amazon, Amazon VA, Amazon virtual assistant, Amazon FBA sourcing, Amazon PPC management, e-commerce growth, private label, Amazon seller support, product sourcing, Amazon keyword research, launch Amazon product, Amazon VA solutions"
        />
        <meta
          name="author"
          content="Ohnso LLC"
        />
        <meta
          property="og:title"
          content="Ohnso LLC | Expert Amazon Product Research & VA for Amazon Sellers"
        />
        <meta
          property="og:description"
          content="Partner with Ohnso LLC for Amazon single product launch research, vetted VA services, and expert PPC management—empowering Amazon sellers to maximize profit and efficiency."
        />
        <meta
          property="og:image"
          content="https://ohnso.com/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://ohnso.com"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Ohnso LLC | Expert Amazon Product Research & VA for Amazon Sellers"
        />
        <meta
          name="twitter:description"
          content="Get expert support for your Amazon store with top-notch product research, Amazon VA services, and PPC management from Ohnso LLC."
        />
        <meta
          name="twitter:image"
          content="https://ohnso.com/og-image.jpg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
