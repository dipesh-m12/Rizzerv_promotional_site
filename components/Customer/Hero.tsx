/* eslint-disable @next/next/no-img-element */
import { verceldeploymentainextstar } from "@/utils/route";
import { useRouter } from "next/navigation";
import React from "react";

function Hero() {
  const router = useRouter();
  return (
    <section className="bg-black min-h-screen flex flex-col px-4 sm:px-8 lg:px-12 pt-3 lg:pt-3 pb-0">
      {/* Launching Soon Badge */}
      <div className="flex items-center gap-2 border border-white rounded-full px-4 py-2 w-fit mx-auto">
        <img src="/rocket.png" alt="Rocket" className="w-4 h-4 invert" />
        <span className="text-white text-sm">Launching Soon</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center font-agenda tracking-wide leading-tight">
        You asked for this.
      </h1>

      {/* Subheading */}
      <p className="text-white/80 text-base sm:text-md lg:text-md text-center max-w-2xl mb-3  mx-auto px-4">
        Your favourite salons, wellness centres, and
        <br className="hidden sm:block" />
        everything in between are here!
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mb-6 lg:mb-8">
        <button
          style={{
            background: "linear-gradient(90deg, #CCF656 0%, #FFFFFF 110.66%)",
          }}
          onClick={() => router.push(verceldeploymentainextstar)}
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-black text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          Get Early Access
        </button>
      </div>

      {/* Phone Mockup - Responsive Container */}
      <div className="flex-1 flex justify-center items-end overflow-hidden relative min-h-0">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full flex items-end justify-center">
          <img
            src="/phone-mockup.png"
            alt="Phone showing app interface"
            className="w-full h-auto max-h-[50vh] sm:max-h-[55vh] md:max-h-[60vh] lg:max-h-[65vh] xl:max-h-[70vh] object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
