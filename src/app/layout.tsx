import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import OrganizationSchema from './components/OrganizationSchema' 
import GoogleAnalytics from './components/GoogleAnalytics'
import GoogleTagManager from './components/GoogleTagManager'
import { Suspense } from 'react'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

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
        <OrganizationSchema />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {/* GTM components */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-M9LLX3SW`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GoogleTagManager />
        <GoogleAnalytics />
        
        {/* Main content */}
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}