/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "For Partners", "For Customers"];

  return (
    <nav
      style={{ background: "#0A0A0A" }}
      className="px-8 py-4 flex items-center justify-between"
    >
      {/* Left - Logo */}
      <div className="flex items-center">
        <img src="logo.png" alt="Rizz Logo" className="h-15" />
      </div>

      {/* Middle - Navigation Tabs */}
      <div className="flex items-center gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative text-white text-sm font-medium pb-1 transition-colors hover:text-gray-300"
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white" />
            )}
          </button>
        ))}
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-2 border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">
          Get Early Access
        </button>

        <button
          style={{ background: "#F230AA" }}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <img src="person.png" alt="User" className="size-3" />
        </button>
      </div>
    </nav>
  );
}
