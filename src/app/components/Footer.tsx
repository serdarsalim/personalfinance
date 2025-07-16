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
                  <li><Link href="/#templates" className="text-gray-400 hover:text-blue-400">Upgrade</Link></li>
                  <li><Link href="/why-manual-tracking" className="text-gray-400 hover:text-blue-400">Our Philosophy</Link></li>
                  <li><Link href="/how-it-works" className="text-gray-400 hover:text-blue-400">How It Works</Link></li>
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
                  <li><a href="https://halqa.xyz/pf" className="text-gray-400 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5"/>
              </svg>
              <span className="text-gray-400">Verified by Google for secure access</span>
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>© {new Date().getFullYear()} Simplify Budget. All rights reserved.</p>
            <p className="mt-2">One-time payment. Use forever. Your data stays yours.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;