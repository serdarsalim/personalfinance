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
  title: 'Simplify Budget | Visual Expense Tracking App for Google Sheets',
  description: 'Track expenses with one tap using our visual budget app. Your data stays in Google Drive. One-time payment, no subscriptions. Try free for 30 days.',
  keywords: 'budget app, expense tracker app, budgeting software, visual expense tracking, google sheets budget app, subscription tracker',
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