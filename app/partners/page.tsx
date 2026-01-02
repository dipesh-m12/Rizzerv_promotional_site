/* eslint-disable @next/next/no-img-element */
// app/register/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [waitingCount] = useState(1200);

  return (
    <div style={{ background: "#0A0A0A" }}>
      {/* Hero/CTA Section */}
      <section className="h-[87.5vh] flex items-center justify-center px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-black">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Content - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            {/* Badge */}
            <button className="flex items-center gap-2.5 w-fit px-4 py-2.5 rounded-[40px] border border-[#ECE8DE] bg-transparent shadow-[inset_2px_2px_40px_0px_rgba(243,239,230,0.1)] hover:bg-white/5 transition-colors">
              <img
                src="/rocket.png"
                alt="Early Access"
                className="w-5 h-5 brightness-0 invert"
              />
              <span className="text-white text-sm font-normal">
                Early Access Discounts
              </span>
            </button>

            {/* Heading */}
            <h1 className="text-white font-semibold font-agenda">
              <span className="block text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wider">
                You&apos;ve come to
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wider mt-1">
                the right place.
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal max-w-lg">
              An online platform that gives you <br />
              visibility 24*7. All you need to do is handle <br /> more
              business. Ready?
            </p>

            {/* CTA Button */}
            <button className="relative overflow-hidden w-fit px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white shadow-[1px_1px_2px_0px_rgba(0,0,0,1)] text-black text-sm font-semibold transition-all duration-300 group">
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-150 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </button>
          </div>

          {/* Right Content - Dashboard Image - Takes 3 columns */}
          <div className="lg:col-span-3 relative flex justify-center lg:justify-end items-center h-full max-h-[70vh]">
            <div className="relative w-full max-w-[650px] h-full flex items-center justify-center">
              <img
                src="/last2.png"
                alt="RIZZerv Dashboard"
                className="w-full h-auto max-h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Teal Gradient */}
      <section
        className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{
          background: "linear-gradient(180deg, #3C8F7C 0%, #5FAA97 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-20">
            {[1, 2, 3, 4].map((stat) => (
              <div key={stat} className="text-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  {waitingCount / 1000}k
                </h3>
                <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed">
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
      <section
        className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 font-agenda">
              Subscription Plans
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              We take care of bookings, payments [if you want us to]
              <br />
              and more [need to add one more feature here].
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/rocket.png"
                  alt="Basic Plan"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <h3 className="text-xl font-semibold">Basic</h3>
              </div>

              <div className="mb-4">
                <span
                  className="text-[#FB4683] text-4xl font-bold"
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Rs 600
                </span>
                <span className="text-sm text-gray-600">/month</span>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Perfect for small businesses
              </p>

              <button
                className="w-full py-3 rounded-xl text-black font-semibold transition-all duration-300 hover:opacity-90 mb-8"
                style={{
                  border: "1px solid rgba(221, 221, 221, 1)",
                  boxShadow:
                    "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
                }}
              >
                Choose this plan
              </button>

              <div className="flex-1">
                <p className="text-sm font-semibold mb-4">
                  What&apos;s Included:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Up to 3 staff members</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Online booking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Customer management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plus Plan - Featured */}
            <div className="bg-black rounded-3xl p-8 flex flex-col border-2 border-white/20 relative transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/lightning.png"
                  alt="Plus Plan"
                  width={20}
                  height={20}
                  className="w-5 h-5 brightness-0 invert"
                />
                <h3 className="text-xl font-semibold text-white">Plus</h3>
              </div>

              <div className="mb-4">
                <span
                  className="text-white text-4xl font-bold"
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Rs 800
                </span>
                <span className="text-sm text-white/60">/month</span>
              </div>

              <p className="text-sm text-white/60 mb-6">
                For Growing Salons with up to 2 branches
              </p>

              <button
                className="w-full py-3 rounded-xl text-black font-semibold transition-all duration-300 hover:opacity-90 mb-8"
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
                <p className="text-sm font-semibold mb-4 text-white">
                  What&apos;s Included:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>Up to 10 staff members</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>Up to 10 staff members</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>Up to 10 staff members</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                    <span>Up to 10 staff members</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/rocket.png"
                  alt="Premium Plan"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <h3 className="text-xl font-semibold">Premium</h3>
              </div>

              <div className="mb-4">
                <span
                  className="text-[#FB4683] text-4xl font-bold"
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Rs 1000
                </span>
                <span className="text-sm text-gray-600">/month</span>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Perfect for small businesses
              </p>

              <button
                className="w-full py-3 rounded-xl text-black font-semibold transition-all duration-300 hover:opacity-90 mb-8"
                style={{
                  border: "1px solid rgba(221, 221, 221, 1)",
                  boxShadow:
                    "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
                }}
              >
                Choose this plan
              </button>

              <div className="flex-1">
                <p className="text-sm font-semibold mb-4">
                  What&apos;s Included:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Up to 3 staff members</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Online booking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Customer management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Value Pack Plan */}
            <div className="bg-white rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/rocket.png"
                  alt="Value Pack Plan"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <h3 className="text-xl font-semibold">Value Pack</h3>
              </div>

              <div className="mb-4">
                <span
                  className="text-[#FB4683] text-4xl font-bold"
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Rs 1000
                </span>
                <span className="text-sm text-gray-600">/month</span>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Suitable for Enterprises with more than 1 branch or franchises
              </p>

              <button
                className="w-full py-3 rounded-xl text-black font-semibold transition-all duration-300 hover:opacity-90 mb-8"
                style={{
                  border: "1px solid rgba(221, 221, 221, 1)",
                  boxShadow:
                    "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
                }}
              >
                Choose this plan
              </button>

              <div className="flex-1">
                <p className="text-sm font-semibold mb-4">
                  What&apos;s Included:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Multiple Location Support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Analytics & Reporting</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Staff Management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
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
      <section
        className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Heading and Subheading */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-90 items-center mb-12">
            {/* Left - Heading */}
            <div>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-agenda leading-tight">
                Built to Help Your
                <br />
                Business Grow
              </h2>
            </div>

            {/* Right - Description */}
            <div>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                From visibility to automated bookings, Rizzer gives <br />
                you the tools to attract more customers and run <br />
                smarter.
              </p>
            </div>
          </div>

          {/* Bottom Row - 3 Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Black */}
            <div
              className="bg-black rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                border: "0.94px solid rgba(221, 221, 221, 1)",
                boxShadow: "0px 0px 5.66px 0.94px rgba(0, 0, 0, 0.32) inset",
              }}
            >
              <div className="mb-32">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/map.png"
                    alt="Map Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                Glow under the limelight
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                When listed on Rizzerv, you get discovered by more potential
                customers.
              </p>
            </div>

            {/* Card 2 - Lime Green */}
            <div
              className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "#CCF656",

                boxShadow:
                  "0px 0px 9.4px 1.88px rgba(255, 255, 255, 0.32) inset",
              }}
            >
              <div className="mb-32">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Image
                    src="/map.png"
                    alt="Bookings Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 brightness-0 invert"
                  />
                </div>
              </div>
              <h3 className="text-black text-xl font-semibold mb-3">
                Bookings - Automated!
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                With Rizz, your business gets organised and jam-packed!
                Customers can see the slots available in real time.
              </p>
            </div>

            {/* Card 3 - Black */}
            <div
              className="bg-black rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                border: "0.94px solid rgba(221, 221, 221, 1)",
                boxShadow: "0px 0px 5.66px 0.94px rgba(0, 0, 0, 0.32) inset",
              }}
            >
              <div className="mb-32">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/map.png"
                    alt="More Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                More with less
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Less time spent marketing and taking bookings. More customer
                churn, more revenue and more smiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Grow CTA Section */}
      <section
        className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{ background: "#1F2022" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 font-agenda">
            Ready to Grow with Rizzerv?
          </h2>

          {/* Description */}
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Join Rizzerv and get discovered by new customers, automate bookings,
            and run your salon smarter from day one.
          </p>

          {/* CTA Button */}
          <button className="relative overflow-hidden px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white shadow-[1px_1px_2px_0px_rgba(0,0,0,1)] text-black text-sm font-semibold transition-all duration-300 group mb-12">
            <span className="relative z-10">Register Your Business</span>
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-150 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </button>

          {/* Dashboard Preview Image */}
          <div className="relative max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
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

      {/* Footer */}
      <footer className="bg-white py-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-black text-sm font-medium">
            Copyright © RIZZerv 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
