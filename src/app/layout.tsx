import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import OrganizationSchema from './components/OrganizationSchema' 
import SoftwareApplicationSchema from './components/SoftwareApplicationSchema'
import { Suspense } from 'react'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import GoogleAnalytics from './components/GoogleTagManager'
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
  description: 'Budget app that helps you save money and stick with it for years. Track expenses in 5 seconds, share with family. No monthly fees.',
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
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body{margin:0;color:#171717;background:#ffffff;font-family:${inter.style.fontFamily},Arial,sans-serif}
            .min-h-screen{min-height:100vh}
            .flex{display:flex}
            .items-center{align-items:center}
            .justify-center{justify-content:center}
            .bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}
            .from-blue-50{--tw-gradient-from:#eff6ff;--tw-gradient-to:rgb(239 246 255 / 0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
            .to-white{--tw-gradient-to:#fff}
          `
        }} />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {/* Google Analytics */}
        <GoogleAnalytics />
        
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
