import Hero from "@/components/Customer/Hero";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <>
      <Hero />
      <section
        className="relative bg-white overflow-hidden"
        style={{ height: "60vh" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Launching Soon Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-lg">🚀</span>
              <span>Launching Soon</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
            No calls. No waiting.
            <br />
            Just booked.
          </h1>

          {/* Subheading */}
          <p className="text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Your favourite salons and wellness experts; all in one app. Book
            instantly, anytime, through RIZZerv.
          </p>

          {/* Halo Icons - Concentric Circles with Icons */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="/halo_icons.png"
              alt="Services"
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* Black Bottom Section - 60vh */}
      <section
        className="relative bg-black text-white overflow-hidden"
        style={{ height: "60vh" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
            {/* Left - 100% Stat */}
            <div className="text-center md:text-right">
              <div className="text-6xl md:text-7xl font-bold mb-2">100%</div>
              <div className="text-xl">Verified Providers</div>
            </div>

            {/* Right - 5min Stat */}
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold mb-2">5min</div>
              <div className="text-xl">Avg. Booking Time</div>
            </div>
          </div>
        </div>

        {/* Phone Mockup - Centered and Overlapping */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <img
            src="/phone-mockup.png"
            alt="RIZZerv App"
            className="w-72 md:w-96 h-auto"
          />
        </div>
      </section>
    </>
  );
}
