// src/app/components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer - Gray background */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
                Simplify Budget
              </h2>
              <p className="text-gray-500 mb-4">
                Own your budget app for $15. No subscriptions.
              </p>
              <Link 
                href="https://ko-fi.com/s/4b62acb528"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Get Lifetime Access
              </Link>
            </div>
            
            {/* Main Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="text-white font-semibold mb-3">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="/app" className="text-gray-400 hover:text-blue-400">Open App</Link></li>
                  <li><Link href="/#templates" className="text-gray-400 hover:text-blue-400">Buy License</Link></li>
                  <li><Link href="/why-manual-tracking" className="text-gray-400 hover:text-blue-400">Learn More</Link></li>
                  <li><Link href="/how-it-works" className="text-gray-400 hover:text-blue-400">App Guide</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Compare</h3>
                <ul className="space-y-2">
                  <li><Link href="/compare/ynab-alternative" className="text-gray-400 hover:text-blue-400">vs YNAB</Link></li>
                  <li><Link href="/compare/mint-alternative" className="text-gray-400 hover:text-blue-400">vs Mint</Link></li>
                  <li><Link href="/compare/everydollar-alternative" className="text-gray-400 hover:text-blue-400">vs EveryDollar</Link></li>
                  <li><Link href="/compare/pocketguard-alternative" className="text-gray-400 hover:text-blue-400">vs PocketGuard</Link></li>
                  <li><Link href="/compare/quicken-alternative" className="text-gray-400 hover:text-blue-400">vs Quicken</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-blue-400">About</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-blue-400">Terms and Conditions</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400">Privacy Policy</Link></li>
                  <li><a href="mailto:contact@simplifybudget.com" className="text-gray-400 hover:text-blue-400">contact@simplifybudget.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.8V16H8.2V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
              </svg>
              <a 
                href="https://developers.google.com/apps-script/guides/client-verification"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Your data stays in your Google Drive
              </a>
            </div>
            <p>© {new Date().getFullYear()} Simplify Budget</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;