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
                  <li><Link href="/how-it-works" className="text-gray-400 hover:text-blue-400">How It Works</Link></li>
                  <li><Link href="/app-guide" className="text-gray-400 hover:text-blue-400">App Guide</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-blue-400">Blog</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Compare</h3>
                <ul className="space-y-2">
                  <li><Link href="/compare" className="text-gray-400 hover:text-blue-400">vs All Budget Apps</Link></li>
                  <li><a href="/compare#ynab" className="text-gray-400 hover:text-blue-400">vs YNAB</a></li>
                  <li><a href="/compare#everydollar" className="text-gray-400 hover:text-blue-400">vs EveryDollar</a></li>
                  <li><a href="/compare#mint" className="text-gray-400 hover:text-blue-400">vs Mint</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-blue-400">About</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-blue-400">Terms and Conditions</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400">Privacy Policy</Link></li>
                  <li><a href="mailto:contact@simplifybudget.com" className="text-gray-400 hover:text-blue-400">contact@simplifybudget.com</a></li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/AwesomeBudgeting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                      </svg>
                      Join our community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.8V16H8.2V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
              </svg>
              <span className="text-gray-400">Your data stays in your Google Drive</span>
            </div>
            <p>© {new Date().getFullYear()} Simplify Budget</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;