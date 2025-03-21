import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import OrganizationSchema from './components/OrganizationSchma'
import GoogleAnalytics from './components/GoogleAnalytics';


// Load Inter as a fallback font (one of the most similar to Geist Sans)
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Simplify Budget - Google Sheets Budget Templates for Personal Finance',
  description: 'Take control of your finances with Simplify Budget\'s powerful Google Sheets templates. Free and premium budget trackers for individuals and families.',
  keywords: 'budget template, Google Sheets budget, personal finance, expense tracker, subscription tracker, net worth tracker, free budget template, family budget',
  authors: [{ name: 'Simplify Budget Team' }],
  openGraph: {
    title: 'Simplify Budget - Google Sheets Budget Templates',
    description: 'Take control of your finances with powerful Google Sheets templates. Free and premium budget trackers that help you master your money.',
    url: 'https://www.budgetmaster.com',
    siteName: 'Simplify Budget',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simplify Budget - Google Sheets Budget Templates',
    description: 'Take control of your finances with powerful Google Sheets templates. Free and premium budget trackers that help you master your money.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.budgetmaster.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}