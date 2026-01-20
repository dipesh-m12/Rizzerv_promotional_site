'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const cards = [
        {
            id: 1,
            image: '/images/frame-2056358.png',
        },
        {
            id: 2,
            image: '/images/frame-2056354.png',
        },
        {
            id: 3,
            image: '/images/image.png',
        },
        {
            id: 4,
            image: '/images/frame-201171278127-20-281-29.png',
        },
        {
            id: 5,
            image: '/images/frame-201171278125.png',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const element = containerRef.current;
                const scrollTop = element.scrollLeft;
                const scrollHeight = element.scrollWidth - element.clientWidth;
                const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
                setScrollProgress(progress);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <main className="min-h-screen bg-black overflow-hidden">
            {/* Header Section */}
            <section className="h-screen flex flex-col items-center justify-center px-4 md:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Scroll through our features
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Discover, Book & Review - All in one platform
                    </p>
                </div>

                {/* Mobile Phone Frame for Display */}
                <div className="w-full max-w-sm lg:max-w-md">
                    {/* Phone Mockup */}
                    <div className="relative mx-auto w-full max-w-[320px] md:max-w-[380px]">
                        {/* Phone Body */}
                        <div className="bg-black rounded-[40px] border-[12px] border-gray-900 shadow-2xl overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-10"></div>

                            {/* Carousel Container */}
                            <div
                                ref={containerRef}
                                className="w-full h-[600px] md:h-[700px] overflow-x-scroll snap-x snap-mandatory scroll-smooth flex gap-4 p-4"
                                style={{
                                    scrollBehavior: 'smooth',
                                }}
                            >
                                {cards.map((card, index) => (
                                    <div
                                        key={card.id}
                                        className={`flex-shrink-0 snap-center transition-all duration-500 ${index === 2
                                                ? 'w-64 md:w-80' // Center card - larger
                                                : 'w-48 md:w-56' // Side cards - smaller
                                            }`}
                                    >
                                        {/* Card */}
                                        <div
                                            className={`relative h-full rounded-3xl overflow-hidden group transition-all duration-500 ${index === 2
                                                    ? 'scale-100 shadow-2xl'
                                                    : 'scale-90 md:scale-95 shadow-lg opacity-70 hover:opacity-100 hover:scale-100'
                                                }`}
                                        >
                                            {/* Background Image */}
                                            <img
                                                src={card.image || "/placeholder.svg"}
                                                alt="Feature card"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Scroll Indicator at Bottom */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 z-20">
                                {cards.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1 rounded-full transition-all duration-300 ${index === 2
                                                ? 'w-8 bg-white'
                                                : 'w-2 bg-gray-600 hover:bg-gray-500'
                                            }`}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Phone Shadow */}
                        <div className="absolute -bottom-2 -inset-x-2 h-4 bg-black/30 rounded-full blur-xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Desktop View Section */}
            <section className="hidden lg:flex items-center justify-center py-20 px-8">
                <div className="max-w-7xl w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Desktop Experience
                    </h2>

                    {/* Desktop Carousel */}
                    <div
                        ref={containerRef}
                        className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8"
                    >
                        <div className="flex gap-6 px-4 min-w-max">
                            {cards.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`flex-shrink-0 snap-center transition-all duration-500 ${index === 2 ? 'w-80 h-96' : 'w-64 h-72'
                                        }`}
                                >
                                    <div
                                        className={`relative w-full h-full rounded-3xl overflow-hidden group transition-all duration-500 ${index === 2 ? 'scale-105' : 'scale-95 hover:scale-100'
                                            }`}
                                    >
                                        <img
                                            src={card.image || "/placeholder.svg"}
                                            alt="Feature card"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* For Business Owners Section */}
            <section
                className="py-16 md:py-24 px-4 md:px-8 lg:px-12"
                style={{
                    background: 'linear-gradient(180deg, #48937E 0%, #044130 100%)',
                }}
            >
                <div className="max-w-6xl mx-auto">
                    {/* Mobile Layout */}
                    <div className="lg:hidden">
                        <div className="mb-8">
                            <p className="text-[#CCF656] text-sm font-semibold mb-2">For Business Owners</p>
                            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                                List. Manage. Earn.
                            </h2>
                            <p className="text-white/90 text-base font-semibold mb-6">
                                Register & Unlock <span className="text-[#CCF656]">FREE TRIAL</span> of RIZZerv Dashboard
                            </p>
                            <button className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm mb-8 hover:opacity-90 transition-opacity">
                                Start Free Trial
                            </button>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6 mb-12">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m3.6 7H8.4a1.4 1.4 0 00-1.4 1.4v3.2a1.4 1.4 0 001.4 1.4h5.2a1.4 1.4 0 001.4-1.4V8.4a1.4 1.4 0 00-1.4-1.4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">Reach More Customers</h3>
                                    <p className="text-white/80 text-sm">Get discovered by new customers daily!</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m3.6 7H8.4a1.4 1.4 0 00-1.4 1.4v3.2a1.4 1.4 0 001.4 1.4h5.2a1.4 1.4 0 001.4-1.4V8.4a1.4 1.4 0 00-1.4-1.4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">Ease Management</h3>
                                    <p className="text-white/80 text-sm">Dashboard provides full control to manage your appointments, staff and everything else</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m3.6 7H8.4a1.4 1.4 0 00-1.4 1.4v3.2a1.4 1.4 0 001.4 1.4h5.2a1.4 1.4 0 001.4-1.4V8.4a1.4 1.4 0 00-1.4-1.4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">No Friction</h3>
                                    <p className="text-white/80 text-sm">Reduce Last-minute Cancellations & No-Shows!</p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Button */}
                        <div className="flex justify-center">
                            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold hover:bg-white/20 transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M14 1v5h5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                                Why Choose Us
                            </button>
                        </div>

                        {/* Text Section */}
                        <div className="mt-12 text-center">
                            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                Tell us your city & get notified the moment we open doors
                            </h3>
                            <p className="text-white/80 text-sm md:text-base mb-8 max-w-3xl mx-auto">
                                Rizzerv is a straight-up platform to meet your stylists, MUAs, cosmetologists right here. Join 5000+ beauty enthusiasts and be the first to know when we are live
                            </p>
                            <button className="px-8 py-3 rounded-full bg-[#CCF656] text-gray-900 font-semibold text-sm hover:opacity-90 transition-opacity">
                                Get early access
                            </button>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-[#CCF656] text-sm font-semibold mb-4">For Business Owners</p>
                            <h2 className="text-white text-5xl font-bold mb-6">
                                List. Manage. Earn.
                            </h2>
                            <p className="text-white/90 text-lg font-semibold mb-8">
                                Register & Unlock <span className="text-[#CCF656]">FREE TRIAL</span> of RIZZerv Dashboard
                            </p>
                            <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold mb-12 hover:opacity-90 transition-opacity">
                                Start Free Trial
                            </button>

                            {/* Features List */}
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m3.6 7H8.4a1.4 1.4 0 00-1.4 1.4v3.2a1.4 1.4 0 001.4 1.4h5.2a1.4 1.4 0 001.4-1.4V8.4a1.4 1.4 0 00-1.4-1.4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">Reach More Customers</h3>
                                        <p className="text-white/80 text-sm">Get discovered by new customers daily!</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m3.6 7H8.4a1.4 1.4 0 00-1.4 1.4v3.2a1.4 1.4 0 001.4 1.4h5.2a1.4 1.4 0 001.4-1.4V8.4a1.4 1.4 0 00-1.4-1.4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">Ease Management</h3>
                                        <p className="text-white/80 text-sm">Dashboard provides full control to manage your appointments, staff and everything else</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m3.6 7H8.4a1.4 1.4 0 00-1.4 1.4v3.2a1.4 1.4 0 001.4 1.4h5.2a1.4 1.4 0 001.4-1.4V8.4a1.4 1.4 0 00-1.4-1.4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">No Friction</h3>
                                        <p className="text-white/80 text-sm">Reduce Last-minute Cancellations & No-Shows!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Dashboard Image */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="/images/image.png"
                                    alt="RIZZerv Dashboard"
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Simplified for Mobile */}
            <section className="bg-black py-12 md:py-20 px-4 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Mobile View - Text Only */}
                    <div className="lg:hidden text-center">
                        <div className="flex justify-center mb-6">
                            <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/30 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M14 1v5h5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                                Why Choose Us
                            </button>
                        </div>

                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                            Tell us your city & get notified the moment we open doors
                        </h2>
                        <p className="text-white/70 text-sm md:text-base mb-8 max-w-3xl mx-auto">
                            Rizzerv is a straight-up platform to meet your stylists, MUAs, cosmetologists right here. Join 5000+ beauty enthusiasts and be the first to know when we are live
                        </p>
                        <button className="px-8 py-3 rounded-full bg-[#CCF656] text-gray-900 font-semibold text-sm hover:opacity-90 transition-opacity">
                            Get early access
                        </button>
                    </div>

                    {/* Desktop View - Keep original with rings */}
                    <div className="hidden lg:block text-center">
                        <div className="flex justify-center mb-8">
                            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M14 1v5h5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                                Why Choose Us
                            </button>
                        </div>

                        <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
                            Tell us your city & get notified the moment we open doors
                        </h2>
                        <p className="text-white/70 text-base max-w-3xl mx-auto mb-8">
                            Rizzerv is a straight-up platform to meet your stylists, MUAs, cosmetologists right here. Join 5000+ beauty enthusiasts and be the first to know when we are live
                        </p>
                        <button className="px-8 py-3 rounded-full bg-[#CCF656] text-gray-900 font-semibold hover:opacity-90 transition-opacity">
                            Get early access
                        </button>
                    </div>
                </div>
            </section>

            {/* Scroll Progress Bar */}
            <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-900 z-50">
                <div
                    className="h-full bg-gradient-to-r from-[#CCF656] to-[#A8D943] transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
        </main>
    );
}
