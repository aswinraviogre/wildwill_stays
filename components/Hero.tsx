"use client";

import React, { useState, useEffect } from "react";
import { RESORTS_DATA } from "@/data/resortsData";
import { Search, MapPin, Calendar, Users, ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero({ onOpenBooking }: { onOpenBooking?: (slug?: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [guestCount, setGuestCount] = useState(2);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const resorts = RESORTS_DATA;

  // Auto crossfade every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % resorts.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [resorts.length]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDestination !== "all") {
      const matched = resorts.find(
        (r) => r.slug === selectedDestination || r.id === selectedDestination
      );
      if (matched && onOpenBooking) {
        onOpenBooking(matched.slug);
        return;
      }
    }
    const targetElement = document.getElementById("properties");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <div className="relative w-full min-h-[96vh] pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Visual Crossfade */}
      {resorts.map((resort, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={resort.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out"
              style={{
                backgroundImage: `url(${resort.heroImage})`,
                transform: isActive ? "scale(1.06)" : "scale(1)"
              }}
            />
            {/* SaffronStays warm editorial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111b29]/80 via-transparent to-transparent" />
          </div>
        );
      })}

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-8">
        
        {/* Subtle Pre-Heading Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
            Signature Luxury Villas & Estates
          </span>
        </div>

        {/* Editorial Serif Headline matching SaffronStays */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.15] mb-4 drop-shadow-md max-w-4xl">
          Where Nature Meets <br className="hidden sm:inline" />
          <span className="italic font-medium text-[#fba919]">Unrivalled Seclusion.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white/90 font-light mb-10 leading-relaxed drop-shadow">
          Private coffee valley sanctuaries, cantilevered forest glass chalets, and cliffside infinity pools with 5-star private butler hospitality in Wayanad.
        </p>

        {/* ---------------- SaffronStays FLOATING SEARCH CAPSULE ---------------- */}
        <div className="w-full max-w-4xl bg-white rounded-3xl sm:rounded-full p-3 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-[#ece7de] mb-8 transition-all">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left"
          >
            {/* Segment 1: Where / Destination */}
            <div className="w-full sm:w-1/3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#ece7de] flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#fba919] shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  Destination
                </label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#111b29] focus:outline-none cursor-pointer truncate"
                >
                  <option value="all">All Wayanad Estates (3)</option>
                  <option value="mist-meadows">Mist & Meadows (Meppadi)</option>
                  <option value="whispering-woods">Whispering Woods (Chembra)</option>
                  <option value="cloud-peak">Cloud Peak (Vythiri)</option>
                </select>
              </div>
            </div>

            {/* Segment 2: Check-in / Out */}
            <div className="w-full sm:w-1/3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#ece7de] flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-[#fba919] shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  Stay Dates
                </label>
                <div className="flex items-center space-x-1 text-sm font-semibold text-[#111b29]">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-xs text-[#111b29] font-medium focus:outline-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Segment 3: Guests */}
            <div className="w-full sm:w-1/4 px-4 py-2 flex items-center space-x-3">
              <Users className="w-5 h-5 text-[#fba919] shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                  Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-transparent text-sm font-semibold text-[#111b29] focus:outline-none cursor-pointer"
                >
                  <option value={2}>2 Guests (Couples)</option>
                  <option value={4}>3 - 4 Guests</option>
                  <option value={6}>5 - 6 Guests</option>
                  <option value={8}>7 - 8 Guests</option>
                  <option value={12}>Big Group (8+)</option>
                </select>
              </div>
            </div>

            {/* Segment 4: SaffronStays Primary CTA Button */}
            <div className="w-full sm:w-auto shrink-0 p-1">
              <button
                type="submit"
                className="btn-saf-blue w-full sm:w-auto px-7 py-3.5 flex items-center justify-center space-x-2 text-sm font-semibold shadow-md active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Search Stays</span>
              </button>
            </div>
          </form>
        </div>

        {/* Trust Badges & Direct Booking Perks */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/90 drop-shadow mb-8">
          <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <Star className="w-3.5 h-3.5 text-[#fba919] fill-[#fba919]" />
            <span className="font-medium">4.92 / 5.0 Rated Luxury Estates</span>
          </div>
          <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-medium">100% Private & Fully Gated</span>
          </div>
          <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#fba919]" />
            <span className="font-medium">Direct Booking Perks & Complimentary High Tea</span>
          </div>
        </div>

        {/* Carousel Switcher Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? resorts.length - 1 : prev - 1))}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all"
            aria-label="Previous Retreat"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-2">
            {resorts.map((resort, idx) => (
              <button
                key={resort.id}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2 bg-[#fba919]"
                    : "w-2 h-2 bg-white/50 hover:bg-white"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % resorts.length)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all"
            aria-label="Next Retreat"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

