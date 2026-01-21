"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useTransform, useTime, MotionValue } from "framer-motion";

interface OrbitingGalleryProps {
  heroImage: string;
  images: string[];

  // -- CONFIGURATION --
  desktopRadius?: { x: number; z: number };
  mobileRadius?: { x: number; z: number };

  desktopCardSize?: { w: number; h: number };
  mobileCardSize?: { w: number; h: number };

  duration?: number;
}

export default function OrbitingGallery({
  heroImage,
  images,
  desktopRadius = { x: 750, z: 850 },
  mobileRadius = { x: 260, z: 360 },
  desktopCardSize = { w: 300, h: 200 },
  mobileCardSize = { w: 100, h: 70 },
  duration = 35000,
}: OrbitingGalleryProps) {
  const galleryItems = [...images, ...images, ...images];
  const isMobile = useIsMobile();

  const activeRadius = isMobile ? mobileRadius : desktopRadius;
  const activeCardSize = isMobile ? mobileCardSize : desktopCardSize;

  return (
    // CHANGE 1: Removed 'h-[100dvh]'.
    // Added specific heights: h-[400px] on mobile, h-[600px] on desktop.
    // This forces the component to only take up this much space in your layout.
    <div className="relative w-full h-[400px] md:h-[600px] flex flex-col items-center justify-center overflow-visible bg-black perspective-[3000px]">
      {/* --- CAROUSEL WRAPPER --- */}
      {/* Position: Absolute centered. The 'translate-y' tweaks vertical alignment relative to the phone */}
      <div className="absolute w-full h-full flex items-center justify-center z-10 pointer-events-none translate-y-[-10%] sm:translate-y-[10%]">
        <CarouselMerryGoRound
          items={galleryItems}
          radius={activeRadius}
          cardSize={activeCardSize}
          duration={duration}
        />
      </div>

      {/* --- HERO PHONE --- */}
      {/* Position: Relative so it sits in the flow (though parent height is fixed) */}
      <div className="relative z-30 translate-y-[-10%] sm:translate-y-[20%]">
        <div className="w-[160px] md:w-[340px] relative aspect-[9/19] drop-shadow-2xl">
          <div className="absolute -inset-1 rounded-[3rem] blur-md bg-white/10" />
          <Image
            src={heroImage}
            alt="Hero Dashboard"
            fill
            className="object-contain drop-shadow-[0_-20px_40px_rgba(0,0,0,0.8)]"
            priority
          />
        </div>
      </div>

      {/* Optional: Bottom Fade (Only if you want it fading into the section bg) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-40" /> */}
    </div>
  );
}

// --- SUB-COMPONENTS (Logic unchanged) ---

interface CarouselProps {
  items: string[];
  radius: { x: number; z: number };
  cardSize: { w: number; h: number };
  duration: number;
}

function CarouselMerryGoRound({
  items,
  radius,
  cardSize,
  duration,
}: CarouselProps) {
  const time = useTime();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {items.map((src, index) => (
        <MerryGoRoundItem
          key={`gallery-${index}`}
          src={src}
          index={index}
          total={items.length}
          time={time}
          duration={duration}
          radius={radius}
          cardSize={cardSize}
        />
      ))}
    </div>
  );
}

interface ItemProps {
  src: string;
  index: number;
  total: number;
  time: MotionValue<number>;
  duration: number;
  radius: { x: number; z: number };
  cardSize: { w: number; h: number };
}

function MerryGoRoundItem({
  src,
  index,
  total,
  time,
  duration,
  radius,
  cardSize,
}: ItemProps) {
  const angleStep = (2 * Math.PI) / total;
  const initialAngle = index * angleStep;

  const transform = useTransform(time, (t) => {
    const currentProg = (t % duration) / duration;
    const angle = initialAngle + currentProg * 2 * Math.PI + Math.PI / 2;

    const xOffset = radius.x * 0.1;
    const x = Math.cos(angle) * radius.x + xOffset;
    const z = Math.sin(angle) * radius.z;
    const rotateY = (angle * 180) / Math.PI + 90;
    const depth = (z + radius.z) / (2 * radius.z);
    const scale = 0.5 + depth * 0.5;
    const opacity = Math.pow(depth, 1.5);

    return { x, z, rotateY, scale, opacity };
  });

  const x = useTransform(transform, (t) => t.x);
  const z = useTransform(transform, (t) => t.z);
  const rotateY = useTransform(transform, (t) => t.rotateY);
  const scale = useTransform(transform, (t) => t.scale);
  const opacity = useTransform(transform, (t) => t.opacity);

  return (
    <motion.div
      style={{
        position: "absolute",
        marginLeft: `-${cardSize.w / 2}px`,
        marginTop: `-${cardSize.h / 2}px`,
        width: `${cardSize.w}px`,
        height: `${cardSize.h}px`,
        x,
        z,
        rotateY,
        scale,
        opacity,
        zIndex: useTransform(z, (currentZ) => Math.round(currentZ + 2000)),
      }}
    >
      <div className="relative w-full h-full rounded-[8px] md:rounded-[14px] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-[0_10px_30px_rgba(0,0,0,0.5)] will-change-transform">
        <Image
          src={src}
          alt="Gallery"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 30vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10" />
      </div>
    </motion.div>
  );
}

// --- UTILS ---
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
}
