import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import OrganizationSchema from './components/OrganizationSchema' 
import { Suspense } from 'react'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import GoogleTagManager from './components/GoogleTagManager'
import ErrorBoundary from './components/ErrorBoundary'

// Simple loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    Loading...
  </div>
)

// Load Inter as a fallback font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Simplify Budget | Google Sheets Templates for Budget Management',
  description: 'Free and premium Google Sheets templates to track your finances, budget effectively, and reach your financial goals.',
  keywords: 'google sheets, budget template, financial tracking, expense tracker, free budget template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.simplifybudget.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {/* GTM components - moved to client component */}
        <GoogleTagManager />
        
        {/* Main content */}
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </ErrorBoundary>
        
        {/* Schema markup */}
        <OrganizationSchema />
      </body>
    </html>
  )
}