"use client";

import { verceldeploymentainextstar } from "@/utils/route";
import router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { HiUserGroup } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import OrbitingGallery from "@/components/OrbitingGallery";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });
  const [activeTab, setActiveTab] = useState("customers");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const sectionRef = useRef(null);

  // Configuration
  const HERO_IMAGE = "/mobile_hero_home.png";
  const RAW_IMAGES = ["/img1.jpg", "/img2.png", "/img3.jpg", "/img4.jpg"];

  // Profile cards data
  const profileCards = [
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
      name: "Priya's Salon",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      name: "Elite Barbers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop",
      name: "Glamour Studio",
    },
    {
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop",
      name: "Urban Cuts",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
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

  // Card rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % profileCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black">
      {/* Hero Section with Tinder Animation */}
      <div className="bg-black min-h-screen">
        {/* 1. SCREEN WRAPPER 
         - h-[100dvh]: Forces exact screen height (no scroll).
         - flex-col: Stacks text on top, gallery on bottom.
      */}
        <section className="relative w-full h-[100dvh] max-h-[100dvh] flex flex-col items-center overflow-hidden bg-black">
          {/* 2. TEXT CONTENT 
           - Added pt-12 md:pt-20 to give space from top.
           - pb-8 adds the "gap" you requested before the gallery starts.
        */}
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 z-20 pt-12 md:pt-14 pb-6 text-center shrink-0">
            <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-semibold font-agenda leading-tight">
              The best SALONS & STYLISTS aren&apos;t{" "}
              <br className="hidden md:block" />
              advertising, they&apos;re getting BOOKED!
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-4 max-w-2xl mx-auto">
              Book an appointment anytime, anywhere
            </p>
            <button className="px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#CCF656] to-[#A8D943] text-black text-sm md:text-base font-semibold hover:opacity-90 transition-opacity">
              Get early access
            </button>
          </div>

          {/* 3. GALLERY CONTAINER
           - flex-1: Takes up ALL remaining space.
           - min-h-0: Prevents flex overflow bugs.
           - w-full: Centers the component horizontally.
        */}
          <div className="flex-1 w-full min-h-0 flex items-end justify-center">
            <OrbitingGallery heroImage={HERO_IMAGE} images={RAW_IMAGES} />
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section
        ref={sectionRef}
        className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 bg-[rgba(13,13,13,1)]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-agenda font-semibold mb-5 sm:mb-6 text-center">
            Tired of &quot;Can you come back in an hour?&quot;
            <br className="hidden md:block" />
            from your salon.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
            {/* Stat 1 */}
            <div
              className="bg-[#0D0D0D] 
        w-[220px] h-[220px] 
        sm:w-[240px] sm:h-[240px] 
        md:w-[260px] md:h-[260px] 
        lg:w-[280px] lg:h-[280px]
        rounded-full flex flex-col items-center justify-center 
        p-5 border border-white hover:border-gray-700 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                {counts.stat1}
                <span className="text-2xl md:text-3xl">%</span>
              </h3>
              <p className="text-white/80 text-sm md:text-sm text-center max-w-[180px]">
                Customers prefer knowing prices and available slots in advance
              </p>
            </div>

            {/* Stat 2 */}
            <div
              className="bg-[#CCF656] 
        w-[220px] h-[220px] 
        sm:w-[240px] sm:h-[240px] 
        md:w-[260px] md:h-[260px] 
        lg:w-[280px] lg:h-[280px]
        rounded-full flex flex-col items-center justify-center 
        p-5 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3">
                {counts.stat2}
                <span className="text-2xl md:text-3xl">x</span>
              </h3>
              <p className="text-black text-sm md:text-sm text-center max-w-[180px]">
                Reduction in NO-Shows & Cancellations
              </p>
            </div>

            {/* Stat 3 */}
            <div
              className="bg-[#0D0D0D] 
        w-[220px] h-[220px] 
        sm:w-[240px] sm:h-[240px] 
        md:w-[260px] md:h-[260px] 
        lg:w-[280px] lg:h-[280px]
        rounded-full flex flex-col items-center justify-center 
        p-5 border border-white hover:border-gray-700 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                {counts.stat3}
                <span className="text-2xl md:text-3xl">%</span>
              </h3>
              <p className="text-white/80 text-sm md:text-sm text-center max-w-[180px]">
                Customers prefer Online Booking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why RIZZerv Section */}
      {/* Why RIZZerv Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-agenda font-semibold mb-3 sm:mb-4 text-center">
              One Platform to DISCOVER, BOOK & REVIEW
            </h2>
            <p className="text-white/70 text-sm  max-w-2xl mx-auto">
              Whether you&apos;re looking for Balayage in Bandra, a MUA in
              Besant Nagar or Botox in Indranagar, we will match you to the
              best!
            </p>
          </div>
          {/* Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            <div className="grid grid-cols-2 md:flex md:flex-col gap-4">
              <div className="flex justify-center">
                <img
                  src="/card01.png"
                  alt="Card 1"
                  className="rounded-2xl h-[180px] sm:h-[200px] md:h-[260px] w-auto"
                />{" "}
              </div>
              <div className="flex justify-center">
                <img
                  src="/card02.png"
                  alt="Card 2"
                  className="rounded-2xl h-[180px] sm:h-[200px] md:h-[260px] w-auto"
                />{" "}
              </div>
            </div>

            {/* Center Card - Coded instead of image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/30  flex flex-col items-center justify-between py-6 md:py-8 h-[520px] md:h-[568px]">
              {/* Green glow gradient at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#5a6f1f]/60 to-transparent" />

              {/* Text content */}
              <div className="relative z-10 text-center mt-2">
                <h3 className="text-white text-4xl md:text-4xl font-semibold mb-3 pt-6">
                  Why RIZZerv?
                </h3>
                <p className="text-white/70 text-md md:text-base max-w-xs mx-auto pt-4">
                  Every salon and professional is verified and reviewed, so you
                  book with confidence, every time.
                </p>
              </div>

              {/* Phone mockup image */}
              <div className="relative z-10 mt-6 pt-[60px] flex justify-center">
                <img
                  src="/cardphoneimg.png" // ← change to your phone image
                  alt="App Preview"
                  className="w-[220px] md:w-[260px] object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-col gap-4">
              <div className="flex justify-center">
                <img
                  src="/card03.png"
                  alt="Card 3"
                  className="rounded-2xl h-[180px] sm:h-[200px] md:h-[260px] w-auto"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/card04.png"
                  alt="Card 4"
                  className="rounded-2xl h-[180px] sm:h-[200px] md:h-[260px]  w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Business Owners Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-black flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* ---------------- MOBILE LAYOUT ---------------- */}
          <div className="lg:hidden w-[90%] max-w-md mx-auto">
            <div className="bg-gradient-to-b from-[#48937E] to-[#044130] rounded-3xl p-6 md:p-8">
              {/* Heading */}
              <div className="mb-3">
                <p className="text-[#CCF656] text-md font-semibold mb-1">
                  For Business Owners
                </p>

                <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-agenda font-semibold mb-1 sm:mb-4">
                  List. Manage. Earn.
                </h2>

                <p className="text-white/90 text-sm md:text-base font-semibold mb-3 leading-tight">
                  Register & Unlock{" "}
                  <span className="text-[#CCF656]">FREE TRIAL</span>
                  <br className="block md:hidden" />
                  of RIZZerv Dashboard
                </p>

                <button className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm mb-2 hover:opacity-90 transition">
                  Start Free Trial
                </button>
              </div>

              {/* Features */}
              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: <HiUserGroup className="text-white text-lg" />,
                    title: "Reach More Customers",
                    desc: "Get discovered by new customers daily!",
                  },
                  {
                    icon: <MdDashboard className="text-white text-lg" />,
                    title: "Ease Management",
                    desc: "Dashboard provides full control to manage your appointments, staff and everything else",
                  },
                  {
                    icon: <FiCalendar className="text-white text-lg" />,
                    title: "No Friction",
                    desc: "Reduce Last-minute Cancellations & No-Shows!",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="flex justify-center rounded-2xl overflow-hidden">
                <img
                  src="/Laptop-phone.png"
                  alt="Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* ---------------- DESKTOP LAYOUT ---------------- */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-b from-[#48937E] to-[#044130] rounded-3xl py-12 pl-12">
              <div className="flex items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1">
                  <p className="text-[#CCF656] text-md font-semibold mb-4">
                    For Business Owners
                  </p>

                  <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-agenda font-semibold mb-3 sm:mb-4">
                    List. Manage. Earn.
                  </h2>

                  <p className="text-white/90 text-lg font-semibold mb-6">
                    Register & Unlock{" "}
                    <span className="text-[#CCF656]">FREE TRIAL</span> of <br />{" "}
                    RIZZerv Dashboard
                  </p>

                  <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold mb-12 hover:opacity-90 transition">
                    Start Free Trial
                  </button>

                  {/* Features */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: <HiUserGroup className="text-white text-xl" />,
                        title: "Reach More Customers",
                        desc: "Get discovered by new customers daily!",
                      },
                      {
                        icon: <MdDashboard className="text-white text-xl" />,
                        title: "Ease Management",
                        desc: "Dashboard provides full control to manage your appointments, staff and everything else",
                      },
                      {
                        icon: <FiCalendar className="text-white text-xl" />,
                        title: "No Friction",
                        desc: "Reduce Last-minute Cancellations & No-Shows!",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/80 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-lg">
                    <img
                      src="/laptop.png"
                      alt="Dashboard"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden min-h-100 md:min-h-135 flex items-center justify-center">
        {/* Background Circles - Enhanced brightness */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
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

          <h2 className="text-white font-agenda mb-6">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
              Tell us your city & get notified the
              <br className="hidden md:block" />
            </span>

            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mt-1 block">
              moment we open doors
            </span>
          </h2>

          <p
            className="text-sm leading-relaxed font-normal max-w-3xl mx-auto mb-6"
            style={{
              fontFamily: "Open Sans, sans-serif",
              color: "rgba(121, 122, 121, 1)",
            }}
          >
            Rizzerv brings all your grooming needs to one platform - Meet your
            stylists,
            <br className="hidden md:block" />
            MUAs, cosmetologists right here. Trusted and validated reviews
            <br className="hidden md:block" />
            from actual users. Join 5000+ beauty enthusiasts and be the first to
            know
            <br className="hidden md:block" />
            when we are live.
          </p>

          {/* CTA Button - MATCHED GRADIENT */}
          <button className="relative overflow-hidden w-fit px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white shadow-[1px_1px_2px_0px_rgba(0,0,0,1)] text-black text-sm font-semibold transition-all duration-300 group mx-auto">
            <span
              onClick={() => router.push(verceldeploymentainextstar)}
              className="relative z-10"
            >
              Join the waiting list
            </span>
            {/* Shine effect layer 1 */}
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            {/* Shine effect layer 2 - delayed */}
            <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 delay-150 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </button>
        </div>

        {/* Orbiting Icons */}
        <div className="absolute inset-0 hidden md:flex max-w-7xl mx-auto pointer-events-none items-center justify-center">
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
            <div className="lg:col-span-2 bg-[#0B0B0B] rounded-t-[32px] p-4 pb-0 flex flex-col border-4 border-b-0 border-[#121212] overflow-hidden h-auto lg:h-[600px]">
              <p className="text-[#CCF656] text-md font-semibold mb-3">
                For Customers
              </p>

              {/* Heading */}
              <h3 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-agenda font-semibold mb-3 sm:mb-4 ">
                We&apos;re here to make booking easy.
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm  mb-8 leading-relaxed">
                Book appointments instantly, anytime; no calls, no waiting, no
                stress. Discover verified salons and wellness experts near you!
              </p>

              {/* CTA Button */}
              <button
                onClick={() => router.push(verceldeploymentainextstar)}
                className="w-fit px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white text-black text-sm font-semibold hover:opacity-90 transition-opacity mb-8"
              >
                Get early access
              </button>

              {/* Phone Image - Takes remaining space */}
              <div className="flex-1 flex justify-center overflow-hidden">
                <div className="relative w-full max-w-[280px]">
                  <img
                    src="/last1.png"
                    alt="Customer App"
                    className=" w-full 
                      h-[220px] sm:h-[260px] md:h-full 
                      object-contain md:object-cover 
                      object-top 
                      rounded-t-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Card - Provider (3 columns) */}
            <div className="lg:col-span-3 bg-[#0B0B0B] rounded-t-[32px] p-4 pb-0 flex flex-col border-4 border-b-0 border-[#121212] overflow-hidden h-auto lg:h-[600px]">
              {/* Icon Badge */}
              <p className="text-[#CCF656] text-md font-semibold mb-3">
                For Patners
              </p>

              {/* Heading */}
              <h3 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-agenda font-semibold mb-3 sm:mb-4 ">
                We help you get booked.
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                List your services, manage appointments, and get discovered by
                real customers - all from one simple dashboard. Just better
                visibility and more bookings.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => router.push(verceldeploymentainextstar)}
                className="w-fit px-8 py-3 rounded-[80px] bg-gradient-to-r from-[#CCF656] to-white text-black text-sm font-semibold hover:opacity-90 transition-opacity mb-8"
              >
                Register as a provider
              </button>

              {/* Dashboard Image - Takes remaining space */}
              <div className="flex-1 flex justify-center overflow-hidden">
                <div className="relative w-full">
                  <img
                    src="/last2.png"
                    alt="Provider Dashboard"
                    className="
                      w-full 
                      h-[220px] sm:h-[260px] md:h-full 
                      object-contain md:object-cover 
                      object-top 
                      rounded-t-2xl
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
