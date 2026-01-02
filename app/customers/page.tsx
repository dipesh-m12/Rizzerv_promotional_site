import Hero from "@/components/Customer/Hero";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  const features = [
    {
      icon: "/maps.png",
      title: "Discover Nearby",
      description:
        "Find top-rated salons, stylists, spas, and wellness services around you, from next door to across town.",
      image: "/card1.png",
    },
    {
      icon: "/rocket.png",
      title: "Book in a Snap",
      description:
        "Check real-time availability, pick a slot, and confirm instantly. No calls. No back-and-forth. Just book and go.",
      image: "/card2.png",
    },
    {
      icon: "/star.png",
      title: "Verified Quality",
      description:
        "Every business on Rizzerv is vetted and customer-rated. What you see is what you get: genuine reviews, real experiences.",
      image: "/card3.png",
    },
  ];
  return (
    <>
      <Hero />
      <div className="relative">
        {/* White Top Section - 60vh */}
        <section
          className="relative bg-white overflow-hidden"
          style={{ height: "70vh" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col pt-14">
            {/* Launching Soon Badge */}
            <div className="flex justify-center mb-2">
              <div className="flex items-center gap-2  rounded-full px-4 py-2 mb-2 border-1 border-[#ECE8DE] w-fit mx-auto">
                <img src="/rocket.png" alt="Rocket" className="w-4 h-4 " />
                <span className="text-black text-sm">Launching Soon</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-2  font-agenda tracking-wider">
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
                className="w-full max-w-5xl h-auto "
              />
              {/* <img
                src="/dryer.png"
                alt="Hair Dryer"
                className="absolute right-10 bottom-20 size-20 animate-pulse-slow"
              /> */}
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
            className="w-64 md:w-80 lg:w-56 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Black Bottom Section - 60vh */}
        <section
          className="relative bg-black text-white overflow-visible"
          style={{ height: "40vh" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-2 gap-8 md:gap-12 h-full items-center">
              {/* Left - 100% Stat */}
              <div className="flex flex-col items-end justify-center pr-8 md:pr-16 lg:pr-48">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-agenda">
                  100%
                </div>
                <div className="text-base md:text-lg lg:text-xl text-white/80">
                  Verified Providers
                </div>
              </div>

              {/* Right - 5min Stat */}
              <div className="flex flex-col items-start justify-center pl-8 md:pl-16 lg:pl-48">
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

      <section className="py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0B0B0B] rounded-3xl border border-[#1A1A1A] p-8 flex flex-col h-[550px]"
              >
                {/* Icon */}
                <div className="mb-6 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#CCF656] flex items-center justify-center">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl  mb-4  md:text-3xl lg:text-4xl font-bold font-agenda tracking-wider">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-shrink-0 h-24">
                  {feature.description}
                </p>

                {/* Image - Takes remaining space */}
                <div className="flex-1 flex items-end justify-center overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-contain max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-black max-h-[90vh] flex items-center relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative flex items-center">
            {/* Phone Image - Positioned on left, outside the banner */}
            <div className="absolute left-0 z-20 hidden lg:block">
              <div className="relative w-[280px]">
                <img
                  src="/cus_phone_end.png"
                  alt="Unlock your city's grooming map"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Banner Background with Text Content */}
            <div className="w-full lg:pl-64 z-10">
              <div className="bg-[#121212] rounded-3xl py-12 md:py-16 lg:py-20 pl-8 md:pl-12 lg:pl-32 pr-8 md:pr-12 lg:pr-16">
                <div className="flex flex-col space-y-8 max-w-2xl ">
                  <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-agenda tracking-wider">
                    Launching Soon in
                    <br />
                    Your City
                  </h2>

                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    Rizzerv is launching soon, and early access comes with perks
                    you don&apos;t want to miss. Join the waiting list and be
                    the first to book, glow, and go.
                  </p>

                  <button
                    style={{
                      background:
                        "linear-gradient(90deg, #CCF656 0%, #FFFFFF 110.66%)",
                    }}
                    className="px-8 py-4 rounded-full text-black text-base font-semibold hover:opacity-90 transition-opacity w-fit"
                  >
                    Get early access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-black text-sm font-medium">
            Copyright © RIZZerv 2025
          </p>
        </div>
      </footer>
    </>
  );
}
