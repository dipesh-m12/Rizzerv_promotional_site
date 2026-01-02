import Hero from "@/components/Customer/Hero";
import { Droplet, Dumbbell, Scissors, Users } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <>
      <Hero />
      <div className="relative h-[140vh]">
        {/* Black Section - Top */}
        <div className="bg-white h-[70vh] relative overflow-hidden">
          {/* Concentric Circles with Icons */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[500px] h-[500px]">
              {/* Outer Circle */}
              <div className="absolute inset-0 border border-gray-200 rounded-full"></div>

              {/* Middle Circle */}
              <div className="absolute inset-[20%] border border-gray-200 rounded-full"></div>

              {/* Inner Circle */}
              <div className="absolute inset-[40%] border border-gray-200 rounded-full"></div>

              {/* Top Left Icon */}
              <div className="absolute -top-2 left-[15%] bg-black rounded-full p-3">
                <Scissors className="w-5 h-5 text-white" />
              </div>

              {/* Top Right Icon */}
              <div className="absolute top-[15%] -right-2 bg-black rounded-full p-3">
                <Droplet className="w-5 h-5 text-white" />
              </div>

              {/* Bottom Left Icon */}
              <div className="absolute bottom-[15%] -left-2 bg-black rounded-full p-3">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>

              {/* Bottom Right Icon */}
              <div className="absolute -bottom-2 right-[15%] bg-black rounded-full p-3">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Black Section - Bottom */}
        <div className="bg-black h-[70vh] relative">
          {/* Left Text */}
          <div className="absolute left-[12%] top-[30%]">
            <h2 className="text-white text-8xl font-bold mb-2">100%</h2>
            <p className="text-white text-base">Verified Providers</p>
          </div>

          {/* Right Text */}
          <div className="absolute right-[12%] top-[30%] text-right">
            <h2 className="text-white text-8xl font-bold mb-2">5min</h2>
            <p className="text-white text-base">Avg. Booking Time</p>
          </div>
        </div>

        {/* Phone - Centered and Overlapping */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <img
            src="/phone-second.png"
            alt="App interface"
            className="h-[700px] w-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}
