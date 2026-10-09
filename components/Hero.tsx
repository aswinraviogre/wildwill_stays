"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking?: (slug?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToDestinations = () => {
    const el = document.getElementById("destinations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[88vh] sm:min-h-[92vh] lg:min-h-[94vh] flex items-center select-none overflow-hidden bg-[#131b14]">
      {/* Background Photography spanning full bleed edge to edge */}
      <div className="absolute inset-0 z-0">
        {/* Desktop landscape image */}
        <div
          className="hidden sm:block absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-out scale-105"
          style={{
            backgroundImage: "url('/images/hero/hero-nature-wide.jpg')"
          }}
        />
        {/* Mobile portrait image */}
        <div
          className="sm:hidden absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-out scale-105"
          style={{
            backgroundImage: "url('/images/hero/hero-nature.jpg')"
          }}
        />

        {/* Cinematic rich warm gradient overlays for flawless text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent max-w-4xl" />
      </div>

      {/* Hero Content Container aligned with site grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Editorial Serif Headline matching reference image */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-white tracking-tight leading-[1.08] mb-4 drop-shadow-md">
            Stay Close <br />
            <span className="italic font-light">to Nature.</span>
          </h1>

          {/* Warm Ochre Tagline */}
          <p className="text-[#e2ba84] text-base sm:text-xl font-medium tracking-wide mb-3 drop-shadow-sm">
            Cozy stays. Private spaces. Thoughtful hospitality.
          </p>

          {/* Introductory Description */}
          <p className="max-w-xl text-white/90 text-sm sm:text-base leading-relaxed font-light mb-8 drop-shadow-sm">
            Handpicked stays in Ooty, Coorg &amp; Wayanad, made for slow mornings, quiet evenings and meaningful escapes.
          </p>

          {/* Interactive Call-To-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            {/* Primary Pill Button matching reference image */}
            <button
              onClick={scrollToDestinations}
              className="group inline-flex items-center space-x-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#1b2b1f]/90 hover:bg-[#1b2b1f] text-[#f4efe6] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#c29053]/70 hover:border-[#e2ba84] shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>EXPLORE OUR STAYS</span>
              <ArrowRight className="w-4 h-4 text-[#e2ba84] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Direct Booking Action Button */}
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 rounded-full bg-[#c29053] hover:bg-[#ad7e43] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>BOOK NOW</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
