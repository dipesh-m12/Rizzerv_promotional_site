/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast, { Toaster } from "react-hot-toast";

const CITIES = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Coimbatore",
  "Kochi",
  "Guwahati",
  "Chandigarh",
  "Mysuru",
  "Thiruvananthapuram",
  "Bhubaneswar",
  "Dehradun",
  "Noida",
  "Gurgaon",
  "Faridabad",
  "Agra",
  "Varanasi",
  "Meerut",
  "Rajkot",
  "Amritsar",
  "Jodhpur",
  "Udaipur",
  "Ludhiana",
  "Nashik",
  "Aurangabad",
  "Mangaluru",
  "Other",
];

type CheckboxChipProps = {
  label: string;
  checked: boolean;
  onToggle: () => void;
};

function CheckboxChip({ label, checked, onToggle }: CheckboxChipProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-normal transition-all bg-[#040404] ${
        checked
          ? "border-[#C8E645] text-white"
          : "border-[#3a3a3a] text-white hover:border-[#555]"
      }`}
    >
      <span
        className={`w-4 h-4 border-2 rounded-[3px] flex items-center justify-center flex-shrink-0 ${
          checked
            ? "bg-[#C8E645] border-[#C8E645]"
            : "border-gray-500 bg-transparent"
        }`}
      >
        {checked && (
          <svg viewBox="0 0 10 8" fill="none" className="w-2.5 h-2.5">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}

const cardStyle: React.CSSProperties = {
  background: "rgba(110, 111, 122, 0.2)",
  border: "1px solid rgba(110, 111, 122, 0.4)",
  backdropFilter: "blur(100px)",
  WebkitBackdropFilter: "blur(100px)",
};

const darkToastStyle = {
  background: "#1a1a1a",
  color: "#ffffff",
  border: "1px solid #333",
  borderRadius: "12px",
  fontSize: "14px",
};

export default function Footer() {
  const router = useRouter();
  const [earlyAccess, setEarlyAccess] = useState(false);
  const [launchDiscounts, setLaunchDiscounts] = useState(false);
  const [influencer, setInfluencer] = useState(false);
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !city) {
      toast.error("Please fill in all required fields.", {
        style: darkToastStyle,
      });
      return;
    }

    const interests = [
      earlyAccess && "Get Early Access",
      launchDiscounts && "Receive Launch Discounts",
      influencer && "Become a Rizzerv Influencer",
    ].filter(Boolean);

    setLoading(true);
    const loadingToast = toast.loading("Submitting your details...", {
      style: darkToastStyle,
    });

    try {
      // Save to Firestore
      await addDoc(collection(db, "waitlist"), {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        city,
        interests,
        createdAt: serverTimestamp(),
      });

      // Send notification email
      await fetch("https://email-service-tk9b.vercel.app/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "mavinash422@gmail.com",
          subject: "New Rizzerv Waitlist Signup",
          body: `New signup from the Rizzerv waitlist!\n\nName: ${fullName.trim()}\nEmail: ${email.trim()}\nCity: ${city}\nInterests: ${interests.length > 0 ? interests.join(", ") : "None selected"}`,
          priority: "high",
          category: "leads",
        }),
      });

      toast.dismiss(loadingToast);
      toast.success("You're on the list! We'll be in touch soon.", {
        style: { ...darkToastStyle, borderColor: "#C8E645" },
        iconTheme: { primary: "#C8E645", secondary: "#000" },
        duration: 4000,
      });

      // Reset form
      setFullName("");
      setEmail("");
      setCity("");
      setEarlyAccess(false);
      setLaunchDiscounts(false);
      setInfluencer(false);
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong. Please try again.", {
        style: darkToastStyle,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="waitlist-form" className="bg-black text-white overflow-hidden">
      <Toaster position="top-center" />
      <div className="w-full">
        {/* ── Desktop Layout (lg +) ── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-10 px-16 pt-14 pb-10 max-w-7xl mx-auto items-start">
            {/* Left: Heading + vertical nav + copyright */}
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-white font-bold text-5xl xl:text-6xl leading-tight mb-10">
                Excited to hear
                <br />
                from you!
              </h2>
              <div>
                <div className="flex flex-col gap-3 mb-6">
                  <button
                    onClick={() => handleNavigation("/home")}
                    className="text-white text-[15px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em] underline underline-offset-4 text-left w-fit"
                  >
                    HOME
                  </button>
                  <button
                    onClick={() => handleNavigation("/partners")}
                    className="text-white text-[15px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em] underline underline-offset-4 text-left w-fit"
                  >
                    FOR PARTNERS
                  </button>
                  <button
                    onClick={() => handleNavigation("/customers")}
                    className="text-white text-[15px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em] underline underline-offset-4 text-left w-fit"
                  >
                    FOR CUSTOMERS
                  </button>
                </div>
                <p className="text-white text-[14px] font-light">
                  Copyright © RIZZerv 2026
                </p>
              </div>
            </div>

            {/* Right: Form card */}
            <form onSubmit={handleSubmit}>
              <div className="rounded-2xl p-7" style={cardStyle}>
                <p className="text-white text-sm font-medium mb-3">
                  What are you interested in?
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <CheckboxChip
                    label="Get Early Access"
                    checked={earlyAccess}
                    onToggle={() => setEarlyAccess((v) => !v)}
                  />
                  <CheckboxChip
                    label="Receive Launch Discounts"
                    checked={launchDiscounts}
                    onToggle={() => setLaunchDiscounts((v) => !v)}
                  />
                  <CheckboxChip
                    label="Become a Rizzerv Influencer"
                    checked={influencer}
                    onToggle={() => setInfluencer((v) => !v)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-white text-sm mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-[#111111] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-1.5 block">
                      City
                    </label>
                    <div className="relative">
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-[#111111] text-white rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600 appearance-none cursor-pointer [&>option]:bg-[#2a2a2a]"
                      >
                        <option value="" disabled>
                          Enter your city
                        </option>
                        {CITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg viewBox="0 0 10 6" fill="none" className="w-3 h-3">
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="text-white text-sm mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#111111] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-[#CCF656] to-[#A8D943] text-black font-bold px-10 py-3 rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                >
                  {loading ? "Submitting..." : "Get an Invite"}
                </button>
              </div>
            </form>
          </div>

          {/* Full Width Logo - Desktop */}
          <div className="w-full">
            <img
              src="/footer.png"
              alt="RIZZerv Logo"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ── Tablet Layout (md → lg) ── */}
        <div className="hidden md:block lg:hidden">
          <div className="px-10 pt-10 pb-6">
            <h2 className="text-white font-bold text-4xl leading-tight mb-6">
              Excited to hear from you!
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="rounded-2xl p-6" style={cardStyle}>
                <p className="text-white text-sm font-medium mb-3">
                  What are you interested in?
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <CheckboxChip
                    label="Get Early Access"
                    checked={earlyAccess}
                    onToggle={() => setEarlyAccess((v) => !v)}
                  />
                  <CheckboxChip
                    label="Receive Launch Discounts"
                    checked={launchDiscounts}
                    onToggle={() => setLaunchDiscounts((v) => !v)}
                  />
                  <CheckboxChip
                    label="Become a Rizzerv Influencer"
                    checked={influencer}
                    onToggle={() => setInfluencer((v) => !v)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-white text-sm mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-[#111111] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-1.5 block">
                      City
                    </label>
                    <div className="relative">
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-[#111111] text-white rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600 appearance-none cursor-pointer [&>option]:bg-[#2a2a2a]"
                      >
                        <option value="" disabled>
                          Enter your city
                        </option>
                        {CITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg viewBox="0 0 10 6" fill="none" className="w-3 h-3">
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="text-white text-sm mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#111111] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-[#CCF656] to-[#A8D943] text-black font-bold px-10 py-3 rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                >
                  {loading ? "Submitting..." : "Get an Invite"}
                </button>
              </div>
            </form>
          </div>

          {/* Nav + Copyright */}
          <div className="flex items-center justify-center gap-2 pt-4 mb-4">
            <button
              onClick={() => handleNavigation("/home")}
              className="text-white text-[14px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em]"
            >
              HOME
            </button>
            <span className="text-white/30 mx-2 text-[14px]">|</span>
            <button
              onClick={() => handleNavigation("/partners")}
              className="text-white text-[14px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em]"
            >
              FOR PARTNERS
            </button>
            <span className="text-white/30 mx-2 text-[14px]">|</span>
            <button
              onClick={() => handleNavigation("/customers")}
              className="text-white text-[14px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em]"
            >
              FOR CUSTOMERS
            </button>
          </div>
          <div className="text-center mb-8">
            <p className="text-white text-[14px] font-light">
              Copyright © RIZZerv 2026
            </p>
          </div>

          {/* Full Width Logo - Tablet */}
          <div className="w-full">
            <img
              src="/footer.png"
              alt="RIZZerv Logo"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ── Mobile Layout ── */}
        <div className="block md:hidden">
          <div className="px-4 pt-6">
            <h2 className="text-white font-bold text-2xl leading-snug mb-5">
              Excited to hear from you!
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="rounded-2xl p-5" style={cardStyle}>
                <p className="text-white text-sm font-medium mb-3">
                  What are you interested in?
                </p>
                <div className="flex flex-col gap-2 mb-4">
                  <CheckboxChip
                    label="Get Early Access"
                    checked={earlyAccess}
                    onToggle={() => setEarlyAccess((v) => !v)}
                  />
                  <CheckboxChip
                    label="Receive Launch Discounts"
                    checked={launchDiscounts}
                    onToggle={() => setLaunchDiscounts((v) => !v)}
                  />
                  <CheckboxChip
                    label="Become a Rizzerv Influencer"
                    checked={influencer}
                    onToggle={() => setInfluencer((v) => !v)}
                  />
                </div>

                <div className="flex flex-col gap-3 mb-3">
                  <div>
                    <label className="text-white text-sm mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-[#111111] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-1.5 block">
                      City
                    </label>
                    <div className="relative">
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-[#111111] text-white rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600 appearance-none cursor-pointer [&>option]:bg-[#2a2a2a]"
                      >
                        <option value="" disabled>
                          Enter your city
                        </option>
                        {CITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg viewBox="0 0 10 6" fill="none" className="w-3 h-3">
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-white text-sm mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-[#111111] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-gray-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#CCF656] to-[#A8D943] text-black font-bold py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity mt-1 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                >
                  {loading ? "Submitting..." : "Join the Waitlist"}
                </button>
              </div>
            </form>
          </div>

          {/* Single Line Navigation */}
          <div className="flex items-center justify-center gap-2.5 pt-6 mb-4 px-2">
            <button
              onClick={() => handleNavigation("/home")}
              className="text-white text-[11px] font-normal hover:text-gray-300 transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              HOME
            </button>
            <div className="h-6 w-[1.5px] bg-gradient-to-b from-[#C4B454] via-[#8B9B3A] to-[#5C7A2E] flex-shrink-0" />
            <button
              onClick={() => handleNavigation("/partners")}
              className="text-white text-[11px] font-normal hover:text-gray-300 transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              FOR PARTNERS
            </button>
            <div className="h-6 w-[1.5px] bg-gradient-to-b from-[#C4B454] via-[#8B9B3A] to-[#5C7A2E] flex-shrink-0" />
            <button
              onClick={() => handleNavigation("/customers")}
              className="text-white text-[11px] font-normal hover:text-gray-300 transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              FOR CUSTOMERS
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center mb-6 px-4">
            <p className="text-white text-xs font-light">
              Copyright © RIZZerv 2026
            </p>
          </div>

          {/* Logo - Mobile */}
          <div className="w-full px-0">
            <img
              src="/footerphone.png"
              alt="RIZZerv Logo"
              className="w-full h-auto object-cover"
              style={{ minHeight: "105px", maxHeight: "200px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
