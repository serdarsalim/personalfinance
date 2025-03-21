import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer - Gray background */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
                Simplify Budget
              </h2>
              <p className="text-gray-500">
                Simplify your finances with Google Sheets
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 items-center">
              <a href="/terms" className="text-gray-600 hover:text-blue-600">
                Terms
              </a>
              <a href="/privacy" className="text-gray-600 hover:text-blue-600">
                Privacy
              </a>
              <a href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Simplify Budget. All rights reserved.</p>
            <p className="mt-2">The ultimate resource for Google Sheets budget templates.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;