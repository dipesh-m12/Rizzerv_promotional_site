/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <footer className="bg-black text-white overflow-hidden">
            <div className="w-full">
                {/* Desktop Layout (lg and above) */}
                <div className="hidden lg:block">
                    {/* Navigation Links */}
                    <div className="flex items-center justify-center gap-2 pt-8 mb-5">
                        <button
                            onClick={() => handleNavigation("/home")}
                            className="text-white text-[15px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em]"
                        >
                            HOME
                        </button>

                        <span className="text-white/30 mx-3 text-[15px]">|</span>

                        <button
                            onClick={() => handleNavigation("/partners")}
                            className="text-white text-[15px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em]"
                        >
                            FOR PARTNERS
                        </button>

                        <span className="text-white/30 mx-3 text-[15px]">|</span>

                        <button
                            onClick={() => handleNavigation("/customers")}
                            className="text-white text-[15px] font-normal hover:text-gray-300 transition-colors uppercase tracking-[0.05em]"
                        >
                            FOR CUSTOMERS
                        </button>
                    </div>

                    {/* Copyright */}
                    <div className="text-center mb-16">
                        <p className="text-white text-[15px] font-light">
                            Copyright © RIZZerv 2025
                        </p>
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

                {/* Tablet Layout (md to lg) */}
                <div className="hidden md:block lg:hidden">
                    {/* Navigation Links */}
                    <div className="flex items-center justify-center gap-2 pt-8 mb-4">
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

                    {/* Copyright */}
                    <div className="text-center mb-10">
                        <p className="text-white text-[14px] font-light">
                            Copyright © RIZZerv 2025
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

                {/* Mobile Layout - Single Line */}
                <div className="block md:hidden">
                    {/* Single Line Navigation */}
                    <div className="flex items-center justify-center gap-2.5 pt-6 mb-4 px-2">
                        <button
                            onClick={() => handleNavigation("/home")}
                            className="text-white text-[11px] font-normal hover:text-gray-300 transition-colors uppercase tracking-wide whitespace-nowrap"
                        >
                            HOME
                        </button>

                        {/* Yellow/Green Gradient Line */}
                        <div className="h-6 w-[1.5px] bg-gradient-to-b from-[#C4B454] via-[#8B9B3A] to-[#5C7A2E] flex-shrink-0" />

                        <button
                            onClick={() => handleNavigation("/partners")}
                            className="text-white text-[11px] font-normal hover:text-gray-300 transition-colors uppercase tracking-wide whitespace-nowrap"
                        >
                            FOR PARTNERS
                        </button>

                        {/* Yellow/Green Gradient Line */}
                        <div className="h-6 w-[1.5px] bg-gradient-to-b from-[#C4B454] via-[#8B9B3A] to-[#5C7A2E] flex-shrink-0" />

                        <button
                            onClick={() => handleNavigation("/customers")}
                            className="text-white text-[11px] font-normal hover:text-gray-300 transition-colors uppercase tracking-wide whitespace-nowrap"
                        >
                            FOR CUSTOMERS
                        </button>
                    </div>

                    {/* Copyright */}
                    <div className="text-center mb-8 px-4">
                        <p className="text-white text-xs font-light">
                            Copyright © RIZZerv 2025
                        </p>
                    </div>

                    {/* Larger Logo - Mobile */}
                    <div className="w-full px-0">
                        <img
                            src="/footerphone.png"
                            alt="RIZZerv Logo"
                            className="w-full h-auto object-cover"
                            style={{ minHeight: '105px', maxHeight: '200px' }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}