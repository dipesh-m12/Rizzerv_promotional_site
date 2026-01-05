"use client";
import Hero from "@/components/Customer/Hero";
import { verceldeploymentainextstar } from "@/utils/route";
import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  const router = useRouter();
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
    <div style={{ background: "#000000" }}>
      <Hero />

      {/* ===== WHITE/BLACK SPLIT SECTION WITH PHONE ===== */}
      <div className="relative">
        {/* White Top Section */}
        <section className="relative bg-white overflow-hidden" style={{ height: "80vh" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 h-full flex flex-col pt-5">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 rounded-full px-4 py-2 border border-[#ECE8DE] w-fit mx-auto">
                <img src="/rocket.png" alt="Rocket" className="w-4 h-4" />
                <span className="text-black text-sm font-normal">Launching Soon</span>
              </div>
            </div>

            {/* Main Heading - MATCHED TO HOME */}
            <h1 className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 text-center font-agenda tracking-wide font-semibold">
              No calls. No waiting.
              <br />
              Just booked.
            </h1>

            {/* Subheading - MATCHED TO HOME */}
            <p className="text-center text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Your favourite salons and wellness experts; all in
              <br className="hidden sm:block" /> one app. Book instantly, anytime, through RIZZerv.
            </p>

            {/* Halo Icons Background - MOVED UP by changing from 'items-center' to 'items-start' + adding top margin */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
              <img
                src="/halo_icons.png"
                alt="Services"
                className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl h-auto opacity-90"
              />
              {/* Hair Dryer - NOW USING PERCENTAGE */}
              <img
                src="/dryer.png"
                alt="Hair Dryer"
                className="absolute animate-pulse-slow bottom-16 md:bottom-20 lg:bottom-43 
    right-[10%] sm:right-[15%] md:right-[18%] lg:right-[20%] xl:right-[26%]"
                style={{
                  width: "clamp(3rem, 5.5vw, 5rem)",
                  height: "clamp(3rem, 5vw, 5rem)",
                }}
              />

            </div>
          </div>
        </section>

        {/* Phone Mockup - MOVED DOWN from 45vh to 52vh */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-30"
          style={{ top: "52vh" }}
        >
          <img
            src="/cus_phone.png"
            alt="RIZZerv App"
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Black Bottom Section */}
        <section className="relative bg-black text-white overflow-visible" style={{ height: "70vh" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 h-full">
            <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-12 h-full items-center">
              {/* Left Stat */}
              <div className="flex flex-col items-end justify-center pr-4 sm:pr-8 md:pr-16 lg:pr-32 xl:pr-48">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-agenda">
                  100%
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/80 text-right">
                  Verified Providers
                </div>
              </div>

              {/* Right Stat */}
              <div className="flex flex-col items-start justify-center pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-48">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-agenda">
                  5min
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/80">
                  Avg. Booking Time
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* ===== FEATURES SECTION ===== */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0B0B0B] rounded-3xl border border-[#1A1A1A] p-6 md:p-8 flex flex-col h-[500px] md:h-[550px] hover:scale-105 transition-all duration-300 cursor-pointer"
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

                {/* Title - MATCHED TO HOME */}
                <h3 className="text-white text-3xl md:text-4xl lg:text-4xl font-bold font-agenda tracking-wider mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 flex-shrink-0 min-h-[80px] md:min-h-[96px]">
                  {feature.description}
                </p>

                {/* Image */}
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

      {/* ===== LAUNCHING SOON SECTION ===== */}
      <section className="py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-20 bg-black min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative flex items-center justify-center lg:justify-start">
            {/* Phone Image - Desktop Only, Overlapping */}
            <div className="hidden lg:block absolute left-0 z-20 -ml-6 xl:-ml-4">
              <div className="relative" style={{ width: "280px", maxWidth: "280px" }}>
                <img
                  src="/cus_phone_end.png"
                  alt="Unlock your city's grooming map"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Banner Background */}
            <div className="w-full lg:ml-40 xl:ml-48">
              <div
                className="rounded-3xl py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:pl-28 xl:pl-36 lg:pr-12 xl:pr-16"
                style={{ background: "rgba(18, 18, 18, 1)" }}
              >
                <div className="flex flex-col space-y-6 lg:space-y-8 max-w-2xl">
                  {/* Mobile Phone Image */}
                  <div className="lg:hidden w-full flex justify-center mb-6">
                    <img
                      src="/cus_phone_end.png"
                      alt="Unlock your city's grooming map"
                      className="w-56 sm:w-64 h-auto object-contain"
                    />
                  </div>

                  {/* Heading - MATCHED TO HOME */}
                  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-agenda tracking-wider">
                    Launching Soon in
                    <br />
                    Your City
                  </h2>

                  {/* Description - MATCHED TO HOME */}
                  <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                    Rizzerv is launching soon, and early access comes with perks
                    you don&apos;t want to miss. Join the waiting list and be
                    the first to book, glow, and go.
                  </p>

                  {/* CTA Button - MATCHED TO HOME */}
                  <button
                    onClick={() => router.push(verceldeploymentainextstar)}
                    className="relative overflow-hidden w-fit px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#CCF656] to-white shadow-[1px_1px_2px_0px_rgba(0,0,0,1)] text-black text-sm md:text-base font-semibold transition-all duration-300 group hover:scale-105"
                  >
                    <span className="relative z-10">Get early access</span>
                    {/* Shine effects */}
                    <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                    <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-150 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white py-3 md:py-4 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black text-sm md:text-base font-medium">
            Copyright © RIZZerv 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
