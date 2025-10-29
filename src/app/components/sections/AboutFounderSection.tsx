import Image from 'next/image';

export default function AboutFounderSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-emerald-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-blue-300 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-12 shadow-xl">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            {/* Left side - Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why I Built This Budget App
              </h2>

              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <p>
                  I spent 9 years at Twitter leading global customer support training. I knew how to solve complex problems for millions of users.
                </p>
                <p>
                  <span className="text-gray-900 font-semibold">But I couldn't solve my own budgeting problem.</span> Every budget app was either too simple or too complex. YNAB was too expensive, Mint shut down. So I built what I needed: a budget app that helps me save money and that I could stick with for years—not just a few weeks.
                </p>
              </div>

              <div>
                <a
                  href="/about"
                  className="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-4"
                >
                  More about my story →
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="order-1 lg:order-2">
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full blur-xl"></div>
                    <Image
                      src="/serdarsalim.webp"
                      alt="Serdar Salim"
                      width={192}
                      height={192}
                      className="relative rounded-full object-cover shadow-lg border-4 border-white"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Serdar Salim</h3>
                  <p className="text-gray-600 mt-1">Problem Solver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
