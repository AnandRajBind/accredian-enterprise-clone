import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://enterprise.accredian.com'),
  title: {
    default: 'Accredian Enterprise | Upskilling & Corporate Training Solutions',
    template: '%s | Accredian Enterprise',
  },
  description:
    'Transform your enterprise workforce with Accredian Enterprise. Industry-aligned learning cohorts in Executive Gen-AI Strategy, Product Management, Data Engineering, and Digital Leadership.',
  keywords: [
    'Enterprise Training',
    'Corporate Upskilling',
    'Gen-AI Leadership',
    'Product Management Training',
    'Data Engineering Cohorts',
    'Employee Upskilling India',
    'Accredian Enterprise',
  ],
  authors: [{ name: 'Accredian Enterprise Team' }],
  creator: 'Accredian Enterprise',
  publisher: 'Accredian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enterprise.accredian.com',
    siteName: 'Accredian Enterprise',
    title: 'Accredian Enterprise | Upskilling & Corporate Training Solutions',
    description:
      'Transform your enterprise workforce with Accredian Enterprise. Precision learning paths in Gen-AI, Tech, Product, and Leadership.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Accredian Enterprise Learning & Referral Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accredian Enterprise | Upskilling & Corporate Training',
    description:
      'Transform your enterprise workforce with Accredian Enterprise. Earn up to ₹10,000 per referral!',
    creator: '@accredian_edu',
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

export const viewport = {
  themeColor: '#1A365D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Accredian Enterprise',
    url: 'https://enterprise.accredian.com',
    logo: 'https://enterprise.accredian.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/accredian',
      'https://twitter.com/accredian_edu',
    ],
    description:
      'Enterprise upskilling and corporate learning provider specializing in Gen-AI, Product, and Data engineering programs.',
  };

  return (
    <html lang="en" className={`${fontSans.variable} ${fontHeading.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-brand-700 focus:text-white focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
