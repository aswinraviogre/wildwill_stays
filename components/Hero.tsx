"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RESORTS_DATA } from "@/data/resortsData";
import { ArrowRight, Sparkles, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero({ onOpenBooking }: { onOpenBooking?: (slug?: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const resorts = RESORTS_DATA;

  // Auto crossfade every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % resorts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [resorts.length]);

  return (
    <div className="relative w-full min-h-[92vh] py-32 md:py-0 overflow-hidden bg-navy-950 flex items-center justify-center">
      {/* Background Crossfade Visuals */}
      {resorts.map((resort, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={resort.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out scale-105"
              style={{
                backgroundImage: `url(${resort.heroImage})`,
                transform: isActive ? "scale(1.08)" : "scale(1)"
              }}
            />
            {/* Deep Dark Navy Multi-layer Overlay for Contrast & Luxury Feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-900/40" />
            <div className="absolute inset-0 bg-radial from-transparent via-navy-950/40 to-navy-950/80" />
          </div>
        );
      })}

      {/* Floating Animated Ambient Particles / Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Central Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-8 md:pt-16">
        
        {/* Subtle Top Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-navy-900/80 border border-white/20 mb-6 animate-fade-in shadow-xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-xs font-semibold tracking-[0.25em] text-slate-200 uppercase">
            Curated Luxury Stays in Wayanad
          </span>
        </div>

        {/* Compelling Tagline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 drop-shadow-lg animate-fade-in">
          Signature Escapes. <br />
          <span className="bg-gradient-to-r from-white via-sky-200 to-emerald-300 bg-clip-text text-transparent italic font-normal">
            One Unforgettable Collection.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-200 font-light mb-10 leading-relaxed drop-shadow animate-fade-in">
          Explore three hand-selected boutique sanctuaries across Wayanad — an organic coffee valley estate, a cantilevered glass chalet among ancient forest canopies, and a dramatic cliffside infinity pool above the clouds.
        </p>

        {/* Side-by-Side 3-Card Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-10 animate-fade-in">
          {/* Card 1: Mist & Meadows */}
          <Link
            href="/resorts/mist-meadows"
            className="group relative flex flex-col justify-between p-4 rounded-2xl bg-navy-950/85 hover:bg-navy-900 border border-white/20 hover:border-sky-400/60 shadow-2xl transition-all duration-300 hover:scale-[1.02] text-left backdrop-blur-md"
          >
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-0.5">
                Valley Sanctuary
              </div>
              <div className="text-sm sm:text-base font-serif font-semibold text-white group-hover:text-sky-300 transition-colors">
                Mist & Meadows
              </div>
              <div className="text-xs text-slate-300 flex items-center mt-1">
                <MapPin className="w-3 h-3 text-slate-400 mr-1 shrink-0" />
                <span className="truncate">Meppadi Plantation</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-2 border-t border-white/10 text-xs font-semibold text-sky-300">
              <span>Starts ₹8,500</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Whispering Woods */}
          <Link
            href="/resorts/whispering-woods"
            className="group relative flex flex-col justify-between p-4 rounded-2xl bg-navy-950/85 hover:bg-navy-900 border border-emerald-400/40 hover:border-emerald-400 shadow-2xl transition-all duration-300 hover:scale-[1.02] text-left backdrop-blur-md"
          >
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400 mb-0.5">
                Forest Glasshouse
              </div>
              <div className="text-sm sm:text-base font-serif font-semibold text-white group-hover:text-emerald-300 transition-colors">
                Whispering Woods
              </div>
              <div className="text-xs text-slate-300 flex items-center mt-1">
                <MapPin className="w-3 h-3 text-slate-400 mr-1 shrink-0" />
                <span className="truncate">Chembra Foothills</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-2 border-t border-white/10 text-xs font-semibold text-emerald-300">
              <span>Starts ₹9,500</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Cloud Peak */}
          <Link
            href="/resorts/cloud-peak"
            className="group relative flex flex-col justify-between p-4 rounded-2xl bg-navy-950/85 hover:bg-navy-900 border border-white/20 hover:border-blue-400/60 shadow-2xl transition-all duration-300 hover:scale-[1.02] text-left backdrop-blur-md"
          >
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-0.5">
                Cliff Edge Vistas
              </div>
              <div className="text-sm sm:text-base font-serif font-semibold text-white group-hover:text-blue-300 transition-colors">
                Cloud Peak
              </div>
              <div className="text-xs text-slate-300 flex items-center mt-1">
                <MapPin className="w-3 h-3 text-slate-400 mr-1 shrink-0" />
                <span className="truncate">Vythiri Heights</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-2 border-t border-white/10 text-xs font-semibold text-blue-300">
              <span>Starts ₹11,000</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Slide Indicators & Quick Switch Controls */}
        <div className="flex items-center space-x-6 z-20">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? resorts.length - 1 : prev - 1))}
            className="p-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-white/80 hover:text-white transition-all border border-white/10"
            aria-label="Previous Retreat"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-3">
            {resorts.map((resort, idx) => (
              <button
                key={resort.id}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2 bg-gradient-to-r from-sky-400 to-emerald-400 shadow-md shadow-sky-500/50"
                    : "w-2.5 h-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to ${resort.name}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % resorts.length)}
            className="p-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-white/80 hover:text-white transition-all border border-white/10"
            aria-label="Next Retreat"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
