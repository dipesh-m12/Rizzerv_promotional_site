import Hero from "@/components/Customer/Hero";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <>
      <Hero />
      <div className="relative">
        {/* White Top Section - 60vh */}
        <section
          className="relative bg-white overflow-hidden"
          style={{ height: "60vh" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            {/* Launching Soon Badge */}
            <div className="flex justify-center mb-2">
              <div className="flex items-center gap-2  rounded-full px-4 py-2 mb-2 border-1 border-[#ECE8DE] w-fit mx-auto">
                <img src="/rocket.png" alt="Rocket" className="w-4 h-4 " />
                <span className="text-black text-sm">Launching Soon</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6  font-agenda tracking-wider">
              No calls. No waiting.
              <br />
              Just booked.
            </h1>

            {/* Subheading */}
            <p className="text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Your favourite salons and wellness experts; all in
              <br /> one app. Book instantly, anytime, through RIZZerv.
            </p>

            {/* Halo Icons - Concentric Circles with Icons */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/halo_icons.png"
                alt="Services"
                className="w-full max-w-4xl h-auto opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Phone Mockup - Overlapping Both Sections */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-30"
          style={{ top: "45vh" }}
        >
          <img
            src="/cus_phone.png"
            alt="RIZZerv App"
            className="w-64 md:w-80 lg:w-64 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Black Bottom Section - 60vh */}
        <section
          className="relative bg-black text-white overflow-visible"
          style={{ height: "60vh" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-2 gap-8 md:gap-12 h-full items-center">
              {/* Left - 100% Stat */}
              <div className="flex flex-col items-end justify-center pr-8 md:pr-16 lg:pr-32">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-agenda">
                  100%
                </div>
                <div className="text-base md:text-lg lg:text-xl text-white/80">
                  Verified Providers
                </div>
              </div>

              {/* Right - 5min Stat */}
              <div className="flex flex-col items-start justify-center pl-8 md:pl-16 lg:pl-32">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-agenda">
                  5min
                </div>
                <div className="text-base md:text-lg lg:text-xl text-white/80">
                  Avg. Booking Time
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
