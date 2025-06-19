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
                  <li><Link href="/#templates" className="text-gray-400 hover:text-blue-400">Templates</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Compare</h3>
                <ul className="space-y-2">
                  <li><Link href="/compare/ynab-alternative" className="text-gray-400 hover:text-blue-400">vs YNAB</Link></li>
                  <li><Link href="/compare/mint-alternative" className="text-gray-400 hover:text-blue-400">vs Mint</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-blue-400">About</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-blue-400">Terms</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400">Privacy</Link></li>
                  <li><a href="https://halqa.xyz/pf" className="text-gray-400 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Alternatives Section */}
          <div className="border-t border-gray-800 pt-6 mb-6">
            <p className="text-gray-400 text-sm mb-3">
              Simplify Budget is a better alternative to:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compare/ynab-alternative" className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors">
                YNAB ($180/year)
              </Link>
              <Link href="/compare/mint-alternative" className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors">
                Mint (Shut Down)
              </Link>
              <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                EveryDollar ($132/year)
              </span>
              <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                Monarch ($96/year)
              </span>
              <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                PocketGuard ($84/year)
              </span>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
            <p>© {new Date().getFullYear()} Simplify Budget. All rights reserved.</p>
            <p className="mt-2">One-time payment. Use forever. Your data stays yours.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;