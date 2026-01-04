/* eslint-disable @next/next/no-img-element */
import { verceldeploymentainextstar } from "@/utils/route";
import { useRouter } from "next/navigation";
import React from "react";

function Hero() {
  const router = useRouter();
  return (
    <section className="bg-black h-[87.5vh] overflow-hidden px-8 pt-4 flex flex-col">
      {/* Launching Soon Badge */}
      <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 mb-2 w-fit mx-auto">
        <img src="/rocket.png" alt="Rocket" className="w-4 h-4 invert" />
        <span className="text-white text-sm">Launching Soon</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-white text-6xl md:text-7xl text-center mb-4 font-agenda tracking-wide">
        You asked for this.
      </h1>

      {/* Subheading */}
      <p className="text-white/80 text-lg md:text-xl text-center max-w-2xl mb-8 mx-auto">
        Your favourite salons, wellness centres, and
        <br />
        everything in between are here!
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mb-4">
        <button
          style={{
            background: "linear-gradient(90deg, #CCF656 0%, #FFFFFF 110.66%)",
          }}
          onClick={() => router.push(verceldeploymentainextstar)}
          className="px-8 py-3 rounded-full text-black text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Get Early Access
        </button>
      </div>

      {/* Phone Mockup */}
      <div className="flex-1 flex justify-center items-end overflow-hidden">
        <img
          src="/phone-mockup.png"
          alt="Phone showing app interface"
          className="max-h-full w-auto object-contain object-bottom"
        />
      </div>
    </section>
  );
}

export default Hero;
