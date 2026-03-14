import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Nagamani Buddepu | Software Engineer & AI/Data Science',
  description: 'Portfolio of Nagamani Buddepu — CSE (Data Science) student at MLR Institute of Technology. AI intern, SIH 2025 Grand Finalist, building intelligent systems.',
  keywords: ['Nagamani Buddepu', 'Software Engineer', 'AI', 'Data Science', 'MLR Institute', 'Portfolio', 'Full Stack Developer'],
  authors: [{ name: 'Nagamani Buddepu' }],
  creator: 'Nagamani Buddepu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nagamanibuddepu.vercel.app',
    title: 'Nagamani Buddepu | Software Engineer & AI/Data Science',
    description: 'Portfolio of Nagamani Buddepu — CSE (Data Science) student building intelligent systems.',
    siteName: 'Nagamani Buddepu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nagamani Buddepu | Software Engineer & AI/Data Science',
    description: 'Portfolio of Nagamani Buddepu — CSE (Data Science) student building intelligent systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
