"use client";

import React from "react";
import { Home, Sparkles, Heart } from "lucide-react";

export default function ThoughtfullyChosen() {
  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-t border-[#E8E2D5] overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Warm Ochre Accent Line matching reference image */}
        <div className="w-12 h-1 bg-[#c29053] rounded-full" />

        {/* Serif Headline & Subtext */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#1d2b1f] tracking-tight leading-[1.15]">
            Every stay, <br />
            thoughtfully chosen.
          </h2>

          <p className="text-[#5e665d] text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            We value your privacy, comfort and peace of mind. Each property is carefully selected, and we offer personalized service to make your stay feel effortless and truly yours.
          </p>
        </div>

        {/* 3 Pillar Features with delicate line icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E8E2D5]">
          {/* Feature 1: Private Spaces */}
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8E2D5] flex items-center justify-center text-[#c29053] shadow-xs shrink-0">
              <Home className="w-5 h-5 stroke-[1.6]" />
            </div>
            <div>
              <span className="text-xs font-serif font-semibold tracking-[0.16em] uppercase text-[#1d2b1f] block">
                PRIVATE SPACES
              </span>
              <span className="text-[11px] text-[#737a71] font-light">
                Gated whole-villa seclusion
              </span>
            </div>
          </div>

          {/* Feature 2: Comfortable Stays */}
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8E2D5] flex items-center justify-center text-[#c29053] shadow-xs shrink-0">
              {/* Botanical Leaf outline icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-serif font-semibold tracking-[0.16em] uppercase text-[#1d2b1f] block">
                COMFORTABLE STAYS
              </span>
              <span className="text-[11px] text-[#737a71] font-light">
                Premium bedding &amp; modern amenities
              </span>
            </div>
          </div>

          {/* Feature 3: Personalized Service */}
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8E2D5] flex items-center justify-center text-[#c29053] shadow-xs shrink-0">
              <Heart className="w-5 h-5 stroke-[1.6]" />
            </div>
            <div>
              <span className="text-xs font-serif font-semibold tracking-[0.16em] uppercase text-[#1d2b1f] block">
                PERSONALIZED SERVICE
              </span>
              <span className="text-[11px] text-[#737a71] font-light">
                Butler &amp; curated farm dining
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle misty mountain silhouette backdrop at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
    </section>
  );
}
