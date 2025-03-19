import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Load Inter as a fallback font (one of the most similar to Geist Sans)
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Budget Better - Financial Templates',
  description: 'Take control of your finances with simple, effective Google Sheets templates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}