/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { verceldeploymentainextstar } from "@/utils/route";

export default function PartnersPage() {
  const router = useRouter();
  const [waitingCount] = useState(1200);

  return (
    <div style={{ background: "#0A0A0A" }}>
      {/* Hero/CTA Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 lg:py-0">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-5 lg:space-y-6">
            {/* Early Access Badge - Updated Design */}
            <div className="inline-flex items-center gap-2 w-fit px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-sm  border-white/20">
              <img
                src="/rocket.png"
                alt="Early Access"
                className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert"
              />
              <span className="text-white text-xs sm:text-sm font-normal">
                Early Access Discounts
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white font-semibold font-agenda">
              <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                You&apos;ve come to
              </span>
              <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-1">
                the right place.
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-lg">
              An online platform that gives you visibility 24*7. All you need to
              do is handle more business. Ready?
            </p>

            {/* CTA Button */}
            <button className="relative overflow-hidden w-fit px-6 sm:px-8 py-2.5 sm:py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white shadow-[1px_1px_2px_0px_rgba(0,0,0,1)] text-black text-sm sm:text-base font-semibold transition-all duration-300 group">
              <span
                onClick={() => router.push(verceldeploymentainextstar)}
                className="relative z-10"
              >
                Register Now
              </span>
              <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-150 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </button>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[550px] lg:max-w-none">
              <img
                src="/last2.png"
                alt="RIZZerv Dashboard"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Teal Gradient */}
      <section
        className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8"
        style={{
          background: "linear-gradient(180deg, #3C8F7C 0%, #5FAA97 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {[1, 2, 3, 4].map((stat, index) => (
              <div key={stat} className="text-center">
                <h3 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
                  {waitingCount / 1000}k
                </h3>
                <p className="text-white text-sm sm:text-base md:text-base leading-relaxed">
                  Users joined the
                  <br />
                  waiting list already
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-agenda font-semibold mb-3 sm:mb-4">
              Subscription Plans
            </h2>
            <p className="text-white/80 text-sm sm:text-base  md:text-base max-w-3xl mx-auto leading-relaxed px-4">
              We take care of bookings, payments [if you want us to]
              <br className="hidden sm:block" />
              and more [need to add one more feature here].
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-12 items-center">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Image
                  src="/rocket.png"
                  alt="Basic Plan"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <h3 className="text-lg sm:text-xl font-semibold">Basic</h3>
              </div>

              <div className="mb-3 sm:mb-4">
                <span className="text-[#FB4683] text-3xl sm:text-4xl font-bold">
                  Rs 600
                </span>
                <span className="text-xs sm:text-sm text-gray-600">/month</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6">
                Perfect for small businesses
              </p>

              <button
                className="w-full py-2.5 sm:py-3 rounded-xl text-black text-sm font-semibold transition-all duration-300 hover:opacity-90 mb-6 sm:mb-8"
                style={{
                  border: "1px solid rgba(221, 221, 221, 1)",
                  boxShadow:
                    "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
                }}
              >
                Choose this plan
              </button>

              <div className="flex-1">
                <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  What&apos;s Included:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Up to 3 staff members</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Online booking</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Customer management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plus Plan - Featured (Made Bigger) */}
            <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col border-2 border-white/20 relative transition-all duration-300 shadow-2xl lg:scale-110 lg:z-10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Image
                  src="/lightning.png"
                  alt="Plus Plan"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Plus
                </h3>
              </div>

              <div className="mb-3 sm:mb-4">
                <span className="text-white text-3xl sm:text-4xl font-bold">
                  Rs 800
                </span>
                <span className="text-xs sm:text-sm text-white/60">/month</span>
              </div>

              <p className="text-xs sm:text-sm text-white/60 mb-5 sm:mb-6">
                For Growing Salons with up to 2 branches
              </p>

              <button
                className="w-full py-2.5 sm:py-3 rounded-xl text-black text-sm font-semibold transition-all duration-300 hover:opacity-90 mb-6 sm:mb-8"
                style={{
                  background: "white",
                  border: "1px solid rgba(221, 221, 221, 1)",
                  boxShadow:
                    "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
                }}
              >
                Choose this plan
              </button>

              <div className="flex-1">
                <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-white">
                  What&apos;s Included:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>Up to 10 staff members</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>Advanced booking system</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>Marketing tools</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Image
                  src="/rocket.png"
                  alt="Premium Plan"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <h3 className="text-lg sm:text-xl font-semibold">Premium</h3>
              </div>

              <div className="mb-3 sm:mb-4">
                <span className="text-[#FB4683] text-3xl sm:text-4xl font-bold">
                  Rs 1000
                </span>
                <span className="text-xs sm:text-sm text-gray-600">/month</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6">
                Perfect for small businesses
              </p>

              <button
                className="w-full py-2.5 sm:py-3 rounded-xl text-black text-sm font-semibold transition-all duration-300 hover:opacity-90 mb-6 sm:mb-8"
                style={{
                  border: "1px solid rgba(221, 221, 221, 1)",
                  boxShadow:
                    "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
                }}
              >
                Choose this plan
              </button>

              <div className="flex-1">
                <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  What&apos;s Included:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Up to 3 staff members</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Online booking</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Customer management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Value Pack Plan */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Image
                  src="/rocket.png"
                  alt="Value Pack Plan"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <h3 className="text-lg sm:text-xl font-semibold">Value Pack</h3>
              </div>

              <div className="mb-3 sm:mb-4">
                <span className="text-[#FB4683] text-3xl sm:text-4xl font-bold">
                  Rs 1000
                </span>
                <span className="text-xs sm:text-sm text-gray-600">/month</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6">
                Suitable for Enterprises with more than 1 branch or franchises
              </p>

              <button
                className="w-full py-2.5 sm:py-3 rounded-xl text-black text-sm font-semibold transition-all duration-300 hover:opacity-90 mb-6 sm:mb-8"
                style={{
                  border: "1px solid rgba(221, 221, 221, 1)",
                  boxShadow:
                    "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
                }}
              >
                Choose this plan
              </button>

              <div className="flex-1">
                <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  What&apos;s Included:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Multiple Location Support</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Analytics & Reporting</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Staff Management</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>One Dashboard View</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built to Help Your Business Grow Section */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Heading and Subheading */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-10 sm:mb-12">
            {/* Left - Heading */}
            <div>
              <h2 className="text-white sm:text-left text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-agenda font-semibold leading-tight">
                Built to Help Your
                <br />
                Business Grow
              </h2>
            </div>

            {/* Right - Description */}
            <div className=" ml-auto">
              <p className="text-white/70 text-sm sm:text-base  md:text-base leading-relaxed">
                From visibility to automated bookings, Rizzer gives <br /> you
                the tools to attract more customers and run smarter.
              </p>
            </div>
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1 - Black */}
            <div
              className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                border: "0.94px solid rgba(221, 221, 221, 1)",
                boxShadow: "0px 0px 5.66px 0.94px rgba(0, 0, 0, 0.32) inset",
              }}
            >
              <div className="mb-20 sm:mb-32">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/map.png"
                    alt="Map Icon"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Glow under the limelight
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                When listed on Rizzerv, you get discovered by more potential
                customers.
              </p>
            </div>

            {/* Card 2 - Lime Green */}
            <div
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "#CCF656",
                boxShadow:
                  "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
              }}
            >
              <div className="mb-20 sm:mb-32">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center">
                  <Image
                    src="/map.png"
                    alt="Bookings Icon"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 brightness-0 invert"
                  />
                </div>
              </div>
              <h3 className="text-black text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Bookings - Automated!
              </h3>
              <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                With Rizz, your business gets organised and jam-packed!
                Customers can see the slots available in real time.
              </p>
            </div>

            {/* Card 3 - Black */}
            <div
              className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-1"
              style={{
                border: "0.94px solid rgba(221, 221, 221, 1)",
                boxShadow: "0px 0px 5.66px 0.94px rgba(0, 0, 0, 0.32) inset",
              }}
            >
              <div className="mb-20 sm:mb-32">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/map.png"
                    alt="More Icon"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                More with less
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Less time spent marketing and taking bookings. More customer
                churn, more revenue and more smiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Grow CTA Section */}
      <section
        className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8"
        style={{ background: "#1F2022" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-agenda font-semibold mb-4 sm:mb-6">
            Ready to Grow with Rizzerv?
          </h2>

          {/* Description */}
          <p className="text-[#D9D9D9] text-sm sm:text-base  md:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join Rizzerv and get discovered by new customers, automate{" "}
            <br className="sm:block hidden" />
            bookings, and run your salon smarter from day one.
          </p>

          {/* CTA Button */}
          <button className="relative overflow-hidden px-6 sm:px-8 py-2.5 sm:py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white shadow-[1px_1px_2px_0px_rgba(0,0,0,1)] text-black text-sm sm:text-base font-semibold transition-all duration-300 group mb-8 sm:mb-12">
            <span
              onClick={() => router.push(verceldeploymentainextstar)}
              className="relative z-10"
            >
              Register Your Business
            </span>
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-150 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </button>

          {/* Dashboard Preview Image */}
          <div className="relative max-w-3xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-gray-800 shadow-2xl">
              <Image
                src="/last2.png"
                alt="RIZZerv Dashboard Preview"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
