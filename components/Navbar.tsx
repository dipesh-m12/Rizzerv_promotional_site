/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { verceldeploymentainextstar } from "@/utils/route";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Determine active tab based on current pathname
  const getActiveTab = () => {
    if (pathname === "/partners") return "For Partners";
    if (pathname === "/customers") return "For Customers";
    return "Home";
  };


  const [activeTab, setActiveTab] = useState(getActiveTab());


  const tabs = [
    { label: "Home", path: "/home" },
    { label: "For Partners", path: "/partners" },
    { label: "For Customers", path: "/customers" },
  ];


  const handleTabClick = (tab: any) => {
    setActiveTab(tab.label);
    router.push(tab.path);
    setIsMenuOpen(false);
  };


  return (
    <>
      <nav
        style={{ background: "#0A0A0A" }}
        className="relative px-8 sm:px-6 py-1 flex items-center justify-between border-b border-white/20"
      >
        {/* Left - Logo */}
        <div className="flex items-center flex-shrink-0">
          <img src="logo.png" alt="Rizz Logo" className="h-12 sm:h-16" />
        </div>


        {/* Middle - Navigation Tabs (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-12 flex-1 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`relative text-sm font-medium transition-colors ${activeTab === tab.label
                ? "text-white"
                : "text-white/70 hover:text-white"
                }`}
            >
              {tab.label}
              {activeTab === tab.label && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.25 bg-white" />
              )}
            </button>
          ))}
        </div>


        {/* Right - Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => router.push(verceldeploymentainextstar)}
            className="px-6 py-2 border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-colors"
          >
            Get Early Access
          </button>


          {/* Profile Icon with White Border */}
          <div className="relative">
            <button
              style={{ background: "#F230AA" }}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity border-2 border-white"
            >
              <img src="person.png" alt="User" className="size-3" />
            </button>
          </div>
        </div>


        {/* Mobile - Only Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </nav>


      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
      )}


      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 z-50 md:hidden transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-2 px-6 py-20">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`relative text-white text-base font-medium transition-colors py-3 px-4 text-left rounded-lg ${activeTab === tab.label
                ? "bg-white/10"
                : "hover:bg-white/5"
                }`}
            >
              {tab.label}
              {activeTab === tab.label && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r" />
              )}
            </button>
          ))}

          <button
            onClick={() => {
              router.push(verceldeploymentainextstar);
              setIsMenuOpen(false);
            }}
            className="mt-4 px-6 py-3 border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-colors w-full"
          >
            Get Early Access
          </button>


          {/* Profile Icon with White Border - Mobile */}
          <div className="mt-6 flex justify-center">
            <div className="relative">
              <button
                style={{ background: "#F230AA" }}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity border-2 border-white"
              >
                <img src="person.png" alt="User" className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}