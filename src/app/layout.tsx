import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UIProvider from './ui-provider'
import HeaderSection from '@/components/header-section'
import {
  EMAIL_ADDRESS,
  GITHUB_LINK,
  LINKEDIN_LINK,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '@/utils/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Diaz Linggaputra Portfolio',
  title: {
    default: SITE_TITLE,
    template: '%s | Diaz Linggaputra',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Diaz Linggaputra',
    'Full-stack Developer',
    'Software Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript Developer',
  ],
  authors: [{ name: 'Diaz Linggaputra' }],
  creator: 'Diaz Linggaputra',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Diaz Linggaputra',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Diaz Linggaputra - Full-stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-icon',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0d10',
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Diaz Linggaputra',
    url: SITE_URL,
    email: EMAIL_ADDRESS,
    jobTitle: 'Full-stack Developer',
    sameAs: [GITHUB_LINK, LINKEDIN_LINK],
    knowsAbout: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'NestJS',
      'Software architecture',
    ],
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <UIProvider>
          <HeaderSection />
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
