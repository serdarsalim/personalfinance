import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import OrganizationSchema from './components/OrganizationSchema' 
import SoftwareApplicationSchema from './components/SoftwareApplicationSchema'
import { Suspense } from 'react'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import GoogleTagManager from './components/GoogleTagManager'
import ErrorBoundary from './ErrorBoundary'

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
  title: {
    template: '%s | Simplify Budget',
    default: 'Simplify Budget | Budget App That Actually Works'
  },
  description: 'Budget app that actually works. Track expenses in 5 seconds, share with family. No monthly fees.',
  keywords: 'budget app, expense tracker, family budget, no subscription budget app',
  icons: {
    icon: '/favicon.ico',
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
        <link rel="canonical" href="https://simplifybudget.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
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
        <SoftwareApplicationSchema />
      </body>
    </html>
  )
}