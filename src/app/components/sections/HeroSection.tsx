import Image from "next/image";
import ScrollButton from "../ui/ScrollButton";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center">
          {/* Background pattern - very subtle */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
          </div>

          {/* Gradient accent */}
          <div className="absolute -z-10 top-0 right-0 w-full h-72 bg-gradient-to-bl from-blue-600/10 to-emerald-600/10 rounded-bl-full filter blur-3xl"></div>

          {/* Headline at the top */}
          <div className="w-full text-center mb-8 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
  Take Control of Your Finances
</h1>
          </div>

          {/* Hero video - larger and centered */}
          <div className="w-full max-w-4xl mx-auto mb-10">
            <div className="relative w-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/hero.png"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              >
                <source src="/SimplifyBudget.mp4" type="video/mp4" />
                {/* Fallback image if video fails to load */}
                <Image
                  src="/hero.png"
                  alt="Simplify Budget financial dashboard"
                  width={1100}
                  height={880}
                  className="w-full h-auto object-cover"
                />
              </video>
            </div>
          </div>

          {/* Subtext and buttons below the video */}
          <div className="w-full max-w-2xl mx-auto text-center z-10">
            <p className="text-xl text-gray-600 mb-8">
              Simplify Budget is a simple yet powerful Google Sheets tracker
              that helps you control your expenses, save more, and finally
              achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollButton
                href="#templates"
                offset={100}
                className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors text-center font-medium"
              >
                View Templates
              </ScrollButton>
              <ScrollButton
                href="#how-it-works"
                offset={100}
                className="px-6 py-3 text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium"
              >
                How It Works
              </ScrollButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}