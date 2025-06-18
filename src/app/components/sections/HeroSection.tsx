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


        </div>
      </div>
    </section>
  );
}