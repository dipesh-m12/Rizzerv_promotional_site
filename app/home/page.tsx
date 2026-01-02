/* eslint-disable @next/next/no-img-element */
// app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaShieldAlt,
  FaTag,
  FaUsers,
  FaSlidersH,
  FaCheckCircle,
} from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const [activeTab, setActiveTab] = useState<"customers" | "providers">(
    "customers"
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { stat1: 76, stat2: 3, stat3: 70 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        stat1: Math.floor(targets.stat1 * progress),
        stat2: Math.floor(targets.stat2 * progress),
        stat3: Math.floor(targets.stat3 * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div style={{ background: "#000000" }}>
      {/* Hero Section */}
      <section className="h-[87.5vh] flex items-center justify-center px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-black">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            {/* Launching Soon Badge */}
            <button className="flex items-center gap-2.5 w-fit px-4 py-2.5 rounded-[40px] border border-[#ECE8DE] bg-transparent shadow-[inset_2px_2px_40px_0px_rgba(243,239,230,0.1)] hover:bg-white/5 transition-colors">
              <img
                src="/rocket.png"
                alt="Rocket"
                className="w-5 h-5 brightness-0 invert"
              />
              <span className="text-white text-sm font-normal">
                Launching Soon
              </span>
            </button>

            {/* Heading */}
<<<<<<< Updated upstream
            <h1 className="text-white font-semibold font-agenda">
              <span className="block text-4xl md:text-5xl lg:text-5xl leading-tight">
                No calls. No waiting.
              </span>
              <span className="block text-4xl md:text-5xl lg:text-5xl leading-tight mt-1">
                Just booked.
              </span>
=======
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-wider font-semibold font-agenda">
              <span className="block">No calls. No waiting.</span>
              <span className="block mt-1">Just booked.</span>
>>>>>>> Stashed changes
            </h1>

            {/* Subheading */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal max-w-lg">
              Your favourite salons and wellness experts; all in <br />
              one app. Book instantly, anytime, through RIZZerv.
            </p>

            {/* CTA Button with Enhanced Shine Effect */}
            <button className="relative overflow-hidden w-fit px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white shadow-[1px_1px_2px_0px_rgba(0,0,0,1)] text-black text-sm font-semibold transition-all duration-300 group">
              <span className="relative z-10">Get early access</span>
              {/* Shine effect layer 1 */}
              <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              {/* Shine effect layer 2 - delayed */}
              <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-150 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </button>
          </div>

          {/* Right Content - Hero Image with Animation */}
          <div className="relative flex justify-center lg:justify-end items-center h-full max-h-[87.5vh]">
            <div className="relative w-full  h-full flex items-center justify-center">
              <img
                src="/hero.png"
                alt="RIZZerv App Interface"
                className="w-full h-auto max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={sectionRef}
        className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat 1 - 76% */}
            <div className="bg-white rounded-[100px] px-10 py-8 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)]">
              <h3 className="text-5xl md:text-5xl font-bold text-black mb-2">
                {counts.stat1}%
              </h3>
              <p className="text-black text-sm leading-snug">
                Customers prefer knowing prices and available slots in advance
              </p>
            </div>

            {/* Stat 2 - 3x */}
            <div className="bg-[#CCF656] rounded-[100px] px-10 py-8 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-[0_10px_40px_rgba(204,246,86,0.4)]">
              <h3 className="text-5xl md:text-5xl font-bold text-black mb-2">
                {counts.stat2}x
              </h3>
              <p className="text-black text-sm leading-snug">
                Reduction in NO-Shows & Cancellations
              </p>
            </div>

            {/* Stat 3 - 70% */}
            <div className="bg-white rounded-[100px] px-10 py-8 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)]">
              <h3 className="text-5xl md:text-5xl font-bold text-black mb-2">
                {counts.stat3}%
              </h3>
              <p className="text-black text-sm leading-snug">
                Customers prefer Online Booking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Experiences Section */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white mb-4 text-4xl md:text-5xl font-agenda lg:text-5xl font-semibold tracking-wider">
              One platform. Two experiences.
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re booking a service or providing them, <br />
              RIZZerv adapts to how you work, with experiences designed
              <br />
              just for you.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-[80px] p-1 bg-[#121212] border border-[#3E3D51]">
              <button
                onClick={() => setActiveTab("customers")}
                className={`px-8 py-3 rounded-[80px] text-sm font-semibold transition-all duration-300 ${activeTab === "customers"
                    ? "bg-gradient-to-r from-[#CCF656] to-white text-black"
                    : "bg-transparent text-white hover:text-white/80"
                  }`}
              >
                For Customers
              </button>
              <button
                onClick={() => setActiveTab("providers")}
                className={`px-8 py-3 rounded-[80px] text-sm font-semibold transition-all duration-300 ${activeTab === "providers"
                    ? "bg-gradient-to-r from-[#CCF656] to-white text-black"
                    : "bg-transparent text-white hover:text-white/80"
                  }`}
              >
                For Providers
              </button>
            </div>
          </div>

          {/* Content Area - Fixed Height Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Features with Fixed Height */}
            <div className="relative min-h-[600px]">
              {/* Customers Content */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeTab === "customers"
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="space-y-8">
                  <h3 className="text-white text-3xl md:text-4xl font-semibold  mb-8">
                    Why RIZZerv?
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                    Every salon and professional is verified and reviewed, so
                    you book with confidence, every time.
                  </p>

                  <div className="space-y-6">
                    {/* Feature 1 */}
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(235.53deg, rgba(11, 11, 11, 0.94) 19.82%, rgba(204, 246, 86, 0.94) 323.36%)",
                        }}
                      >
                        <FaMapMarkerAlt size={20} color="#FFFFFF" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-1">
                          Location-based Discovery
                        </h4>
                        <p className="text-white/70 text-sm">
                          Find top-rated salons, spas & clinics near you!
                        </p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(235.53deg, rgba(11, 11, 11, 0.94) 19.82%, rgba(204, 246, 86, 0.94) 323.36%)",
                        }}
                      >
                        <FaCalendarAlt size={20} color="#FFFFFF" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-1">
                          Instant Booking - 24/7
                        </h4>
                        <p className="text-white/70 text-sm">
                          See real-time availability and book anytime.
                        </p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(235.53deg, rgba(11, 11, 11, 0.94) 19.82%, rgba(204, 246, 86, 0.94) 323.36%)",
                        }}
                      >
                        <FaShieldAlt size={20} color="#FFFFFF" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-1">
                          Verified Reviews
                        </h4>
                        <p className="text-white/70 text-sm">
                          Real reviews from real customers. No filters. No fake
                          ratings.
                        </p>
                      </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(235.53deg, rgba(11, 11, 11, 0.94) 19.82%, rgba(204, 246, 86, 0.94) 323.36%)",
                        }}
                      >
                        <FaTag size={20} color="#FFFFFF" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-1">
                          Transparent Service Menu & Pricing
                        </h4>
                        <p className="text-white/70 text-sm">
                          Know what is on offer & plan your budget before you
                          reach the salon!
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 px-8 py-3 rounded-[80px] bg-[#3C8F7C] text-white text-sm font-semibold hover:bg-[#3C8F7C]/90 transition-all duration-300">
                    Join the waiting list
                  </button>
                </div>
              </div>

              {/* Providers Content */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeTab === "providers"
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="space-y-8">
                  <h3 className="text-white text-3xl md:text-4xl font-semibold mb-8">
                    List. Manage. Earn.
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                    Register & Unlock{" "}
                    <span className="text-[#CCF656]">free trial</span> of
                    RIZZerv Dashboard
                  </p>

                  <div className="space-y-6">
                    {/* Feature 1 */}
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(235.53deg, rgba(11, 11, 11, 0.94) 19.82%, rgba(204, 246, 86, 0.94) 323.36%)",
                        }}
                      >
                        <FaUsers size={20} color="#FFFFFF" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-1">
                          Reach More Customers
                        </h4>
                        <p className="text-white/70 text-sm">
                          Get discovered by new customers daily!
                        </p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(235.53deg, rgba(11, 11, 11, 0.94) 19.82%, rgba(204, 246, 86, 0.94) 323.36%)",
                        }}
                      >
                        <FaSlidersH size={20} color="#FFFFFF" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-1">
                          Ease Management
                        </h4>
                        <p className="text-white/70 text-sm">
                          Dashboard provides full control to manage your
                          appointments, staff and everything else
                        </p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(235.53deg, rgba(11, 11, 11, 0.94) 19.82%, rgba(204, 246, 86, 0.94) 323.36%)",
                        }}
                      >
                        <FaCheckCircle size={20} color="#FFFFFF" />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-1">
                          No Friction
                        </h4>
                        <p className="text-white/70 text-sm">
                          Reduce Last-minute Cancellations & No-Shows!
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 px-8 py-3 rounded-[80px] bg-[#3C8F7C] text-white text-sm font-semibold hover:bg-[#3C8F7C]/90 transition-all duration-300">
                    Register as Partner
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image with Fixed Height Container */}
            <div className="relative min-h-[600px] flex items-center justify-center lg:justify-end">
              {/* Customer Image */}
              <div
                className={`absolute transition-opacity duration-300 ${
                  activeTab === "customers" ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-full max-w-[450px]">
                  <img
                    src="/customer.png"
                    alt="Customer App"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Provider Image */}
              <div
                className={`absolute transition-opacity duration-300 ${
                  activeTab === "providers" ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-full max-w-[450px]">
                  <img
                    src="/provider.png"
                    alt="Provider Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden min-h-100 md:min-h-135 flex items-center justify-center">
        {/* Background Circles - Enhanced brightness */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px] opacity-60 brightness-150">
            <Image
              src="/circles.png"
              alt="Concentric Rings"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <button className="flex items-center gap-2.5 w-fit px-4 py-2.5 rounded-[40px] border border-[#ECE8DE] bg-white  ">
              <Image
                src="/rocket.png"
                alt="Why Choose Us"
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 "
              />
              <span className=" text-sm font-normal tracking-wider px-2">
                Why Choose Us
              </span>
            </button>
          </div>

          {/* Heading - MATCHED TO HERO */}
          <h2 className="text-white font-agenda mb-6 ">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
              Why wait on phonecalls &
            </span>
            <span className="block text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mt-1">
              Whatsapp replies?!
            </span>
          </h2>

          {/* Description - MATCHED TO HERO SUBHEADING */}
          <p
            className="text-sm md:text-base leading-relaxed font-normal max-w-3xl mx-auto mb-6"
            style={{
              fontFamily: "Open Sans, sans-serif",
              color: "rgba(121, 122, 121, 1)",
            }}
          >
            Rizzerv is a straight-up platform for hairdressing, salons,
            saree-draping, <br className="hidden md:block" />
            spas, and much more. No, we don&apos;t charge extra. All we do is
            list the <br className="hidden md:block" />
            best service providers here.
          </p>

          {/* CTA Button - MATCHED GRADIENT */}
          <button className="relative overflow-hidden w-fit px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white shadow-[1px_1px_2px_0px_rgba(0,0,0,1)] text-black text-sm font-semibold transition-all duration-300 group mx-auto">
            <span className="relative z-10">Join the waiting list</span>
            {/* Shine effect layer 1 */}
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            {/* Shine effect layer 2 - delayed */}
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-150 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </button>
        </div>

        {/* Orbiting Icons */}
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none flex items-center justify-center">
          <div className="relative w-full h-full max-w-[1200px] max-h-[1200px]">
            {/* Top Left */}
            <div className="absolute left-[24%] md:left-[24%] ">
              <Image
                src="/scissor.png"
                alt="Scissors"
                width={72}
                height={72}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 opacity-90 drop-shadow-2xl"
              />
            </div>

            {/* Top Right */}
            <div className="absolute right-[24%] md:right-[24%] animate-float-delayed">
              <Image
                src="/hairdyer.png"
                alt="Hairdryer"
                width={72}
                height={72}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 opacity-90 drop-shadow-2xl"
              />
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[9%] left-[31%] md:bottom-[9%] md:left-[31%] ">
              <Image
                src="/Hairstyle.png"
                alt="Profile"
                width={72}
                height={72}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 opacity-90 drop-shadow-2xl"
              />
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[9%] right-[31%] md:bottom-[9%] md:right-[31%] animate-float-delayed">
              <Image
                src="/Haircolor.png"
                alt="Coloring"
                width={72}
                height={72}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 opacity-90 drop-shadow-2xl"
              />
            </div>

            {/* Far Left */}
            <div className="absolute top-[40%] left-[5%] md:top-[42%] md:left-[10%] -translate-y-1/2 animate-float-slow">
              <Image
                src="/makeup.png"
                alt="Makeup"
                width={72}
                height={72}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 opacity-90 drop-shadow-2xl"
              />
            </div>

            {/* Far Right */}
            <div className="absolute top-[40%] right-[5%] md:top-[42%] md:right-[10%] -translate-y-1/2 animate-float-slow">
              <Image
                src="/cosmetic.png"
                alt="Spa"
                width={72}
                height={72}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 opacity-90 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section
        className="px-6 md:px-12 lg:px-16 xl:px-20 pb-10 pt-12 md:pt-16 lg:pt-20"
        style={{ background: "#000000" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Card - Customer (2 columns) */}
            <div className="lg:col-span-2 bg-[#0B0B0B] rounded-t-[32px] p-8  pb-0 flex flex-col border-4 border-b-0 border-[#121212] overflow-hidden h-[600px]">
              {/* Icon Badge */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/rocket.png"
                    alt="Customer"
                    className="w-6 h-6 brightness-0"
                  />
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-white  mb-4 font-agenda text-4xl font-semibold tracking-wider">
                We&apos;re here to make booking easy.
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm md:text-base mb-8 leading-relaxed">
                Book appointments instantly, anytime; no calls, no waiting, no
                stress. Discover verified salons and wellness experts near you!
              </p>

              {/* CTA Button */}
              <button className="w-fit px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white text-black text-sm font-semibold hover:opacity-90 transition-opacity mb-8">
                Get early access
              </button>

              {/* Phone Image - Takes remaining space */}
              <div className="flex-1 flex justify-center overflow-hidden">
                <div className="relative w-full max-w-[280px]">
                  <img
                    src="/last1.png"
                    alt="Customer App"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right Card - Provider (3 columns) */}
            <div className="lg:col-span-3 bg-[#0B0B0B] rounded-t-[32px] p-8  pb-0 flex flex-col border-4 border-b-0 border-[#121212] overflow-hidden h-[600px]">
              {/* Icon Badge */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/rocket.png"
                    alt="Provider"
                    className="w-6 h-6 brightness-0"
                  />
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-white  mb-4 font-agenda text-4xl font-semibold tracking-wider">
                We help you get booked.
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm md:text-base mb-8 leading-relaxed">
                List your services, manage appointments, and get discovered by
                real customers - all from one simple dashboard. Just better
                visibility and more bookings.
              </p>

              {/* CTA Button */}
              <button className="w-fit px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white text-black text-sm font-semibold hover:opacity-90 transition-opacity mb-8">
                Register as a provider
              </button>

              {/* Dashboard Image - Takes remaining space */}
              <div className="flex-1 flex justify-center overflow-hidden">
                <div className="relative w-full">
                  <img
                    src="/last2.png"
                    alt="Provider Dashboard"
                    className="w-full h-full object-cover object-top rounded-t-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-3 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-black text-sm font-medium">
            Copyright © RIZZerv 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
