"use client";

import React from "react";

export default function Hero({ onOpenBooking }: { onOpenBooking?: (slug?: string) => void }) {
  return (
    <div className="relative w-full min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden select-none">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-out scale-105"
          style={{
            backgroundImage: "url('/images/hero/hero-3.jpg')"
          }}
        />
        {/* Cinematic dark gradient overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111b29]/90 via-transparent to-transparent" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-8">
        {/* Editorial Serif Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.15] mb-5 drop-shadow-lg max-w-4xl">
          Where Nature Meets <br className="hidden sm:inline" />
          <span className="italic font-medium text-[#fba919]">Unrivalled Seclusion.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white/95 font-light leading-relaxed drop-shadow-md">
          Private coffee valley sanctuaries, cantilevered forest glass chalets, and cliffside infinity pools with 5-star private butler hospitality in Wayanad.
        </p>
      </div>
    </div>
  );
}



