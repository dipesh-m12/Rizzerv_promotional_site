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
  // 1. INCREASED RADIUS (Middle ground)
  // 'x' increased from 600 -> 750 (Wider arc)
  // 'z' increased from 220 -> 260 (Slightly deeper)
  desktopRadius = { x: 750, z: 260 },
  mobileRadius = { x: 340, z: 160 },

  // 2. INCREASED HEIGHT & SIZE
  // Height: 120 -> 160 (Taller)
  // Width: 180 -> 240 (Proportional)
  desktopCardSize = { w: 240, h: 160 },
  mobileCardSize = { w: 120, h: 80 },

  duration = 35000,
}: OrbitingGalleryProps) {
  const galleryItems = [...images, ...images, ...images];
  const isMobile = useIsMobile();

  const activeRadius = isMobile ? mobileRadius : desktopRadius;
  const activeCardSize = isMobile ? mobileCardSize : desktopCardSize;

  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden bg-black perspective-[800px]">
      {/* --- CAROUSEL WRAPPER --- */}
      <div className="absolute w-full h-full flex items-center justify-center z-10 pointer-events-none translate-y-[-10%] sm:translate-y-[10%] [transform-style:preserve-3d]">
        <CarouselMerryGoRound
          items={galleryItems}
          radius={activeRadius}
          cardSize={activeCardSize}
          duration={duration}
        />
      </div>

      {/* --- HERO PHONE --- */}
      <div className="relative z-30 translate-y-[-10%] sm:translate-y-[20%]">
        <div className="w-[160px] md:w-[320px] relative aspect-[9/19] drop-shadow-2xl">
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

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent z-40" />
    </div>
  );
}

// --- SUB-COMPONENTS ---

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
    <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
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

    // Direction: Right to Left (+)
    const angle = initialAngle + currentProg * 2 * Math.PI - Math.PI / 2;

    const x = Math.cos(angle) * radius.x;
    const z = Math.sin(angle) * radius.z;

    // Skew: Reversed (-90)
    const rotateY = -((angle * 180) / Math.PI + 90);

    const depth = (z + radius.z) / (2 * radius.z);
    const scale = 0.5 + depth * 0.5;
    const opacity = Math.pow(depth, 3);

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
      className="will-change-transform"
    >
      <div className="relative w-full h-full rounded-[12px] overflow-hidden border border-white/10 bg-[#050505] shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
        <Image
          src={src}
          alt="Gallery"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 25vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/20" />
      </div>
    </motion.div>
  );
}

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
