import Image from "next/image";
import ScrollButton from "../ui/ScrollButton";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Background pattern - very subtle */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
          </div>

          {/* Gradient accent */}
          <div className="absolute -z-10 top-0 right-0 w-full md:w-1/3 h-72 bg-gradient-to-bl from-blue-600/10 to-emerald-600/10 rounded-bl-full filter blur-3xl"></div>

          <div className="md:w-3/5 text-center md:text-left mb-10 md:mb-0 md:pr-8 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl -mt-12 font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
              Take Control of Your Finances
            </h1>
            <p className="text-xl text-gray-600 mt-10 mb-8 max-w-lg">
              Simplify Budget is a simple yet powerful Google Sheets tracker
              that helps you control your expenses, save more, and finally
              achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
         
              <ScrollButton
                href="#templates"
                offset={100} // Add appropriate offset value (e.g., 100px)
                className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors text-center font-medium"
              >
                View Templates
              </ScrollButton>
              <ScrollButton
                href="#how-it-works"
                offset={100} // Add appropriate offset value
                className="px-6 py-3 text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium"
              >
                How It Works
              </ScrollButton>
            </div>
          </div>

          {/* Hero image with enhanced styling */}
          <div className="md:w-2/5 relative">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10 rounded-xl"></div>
              <Image
                src="/hero.png"
                alt="Simplify Budget financial dashboard"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Two subtle accent borders for visual interest */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/20 rounded-xl z-0"></div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500/20 rounded-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
