"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RESORTS_DATA } from "@/data/resortsData";
import {
  Sparkles,
  Bath,
  Compass,
  Waves,
  UtensilsCrossed,
  Flame,
  Eye,
  Mountain,
  Wine,
  ChefHat,
  Sun,
  Wifi,
  ArrowRight,
  Layers,
  Columns,
  MapPin,
  Calendar,
  CheckCircle2
} from "lucide-react";

// Helper to render icon by name
const renderAmenityIcon = (name: string, className = "w-5 h-5") => {
  switch (name) {
    case "Bath":
      return <Bath className={className} />;
    case "Compass":
      return <Compass className={className} />;
    case "Waves":
      return <Waves className={className} />;
    case "UtensilsCrossed":
      return <UtensilsCrossed className={className} />;
    case "Flame":
      return <Flame className={className} />;
    case "Eye":
      return <Eye className={className} />;
    case "Mountain":
      return <Mountain className={className} />;
    case "Wine":
      return <Wine className={className} />;
    case "ChefHat":
      return <ChefHat className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Wifi":
      return <Wifi className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

interface PropertySwitcherProps {
  onOpenBooking?: (resortSlug: string) => void;
}

export default function PropertySwitcher({ onOpenBooking }: PropertySwitcherProps) {
  const [viewMode, setViewMode] = useState<"grid" | "tab">("grid");
  const [activeTabResortId, setActiveTabResortId] = useState<string>(RESORTS_DATA[1].id);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const activeTabResort = RESORTS_DATA.find((r) => r.id === activeTabResortId) || RESORTS_DATA[0];

  return (
    <section id="properties" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-navy-950 text-xs font-bold uppercase tracking-[0.25em] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-navy-800" />
              <span>Three Signature Sanctuaries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900">
              The Wildvill Collection
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
              Each estate is an architectural ode to its landscape. Explore our plantation valley, cantilevered forest glasshouse, or cliffside cloud haven.
            </p>
          </div>

          {/* Interactive Layout Mode Toggle */}
          <div className="flex items-center bg-white p-1.5 rounded-2xl border border-slate-300 shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-navy-950 text-white shadow-md"
                  : "text-slate-600 hover:text-navy-950"
              }`}
            >
              <Columns className="w-4 h-4" />
              <span>Portfolio View</span>
            </button>
            <button
              onClick={() => setViewMode("tab")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 ${
                viewMode === "tab"
                  ? "bg-navy-950 text-white shadow-md"
                  : "text-slate-600 hover:text-navy-950"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Interactive Showcase</span>
            </button>
          </div>
        </div>

        {/* ----------------- OPTION A: 3-PROPERTY LUXURY GRID ----------------- */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700">
            {RESORTS_DATA.map((resort) => {
              return (
                <div
                  key={resort.id}
                  className="relative rounded-3xl overflow-hidden bg-white transition-all duration-500 flex flex-col justify-between border border-slate-200 shadow-lg hover:shadow-2xl hover:border-navy-950 group"
                >
                  {/* Card Cover Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url(${resort.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-navy-950/80 backdrop-blur-md text-sky-300 border border-white/10">
                        {resort.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-navy-950 shadow-md">
                        {resort.startingPrice} <span className="text-[10px] text-slate-500 font-normal">/ night</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 text-xs text-white flex items-center space-x-1.5 font-medium drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{resort.location}</span>
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="p-6 sm:p-7 space-y-4 flex flex-col justify-between flex-1">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-navy-900 transition-colors">
                        {resort.name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 font-light leading-relaxed">
                        {resort.shortDescription}
                      </p>

                      {/* Key Amenities Preview Pills */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {resort.amenities.slice(0, 4).map((amenity, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 p-2 rounded-xl bg-slate-50 border border-slate-200"
                          >
                            <span className="text-navy-900 shrink-0">
                              {renderAmenityIcon(amenity.iconName, "w-3.5 h-3.5")}
                            </span>
                            <span className="text-[11px] font-medium text-slate-700 truncate">
                              {amenity.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons in Navy */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                      <Link
                        href={`/resorts/${resort.slug}`}
                        className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 hover:shadow-lg"
                      >
                        <span>Explore Villas & Suites</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() =>
                          onOpenBooking
                            ? onOpenBooking(resort.slug)
                            : window.dispatchEvent(
                                new CustomEvent("open-booking-modal", { detail: { resortSlug: resort.slug } })
                              )
                        }
                        className="w-full inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl border border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-semibold text-xs transition-all"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Instant Inquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ----------------- OPTION B: DYNAMIC TABBED SHOWCASE ----------------- */}
        {viewMode === "tab" && (
          <div className="space-y-8 animate-fade-in">
            {/* Top Switcher Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {RESORTS_DATA.map((resort) => {
                const isActive = resort.id === activeTabResort.id;
                return (
                  <button
                    key={resort.id}
                    onClick={() => {
                      setActiveTabResortId(resort.id);
                      setActiveImageIdx(0);
                    }}
                    className={`flex items-center space-x-2.5 px-5 py-3 rounded-2xl font-serif text-sm sm:text-base transition-all duration-300 ${
                      isActive
                        ? "bg-navy-950 text-white shadow-xl scale-105"
                        : "bg-white text-slate-700 hover:text-navy-950 border border-slate-200"
                    }`}
                  >
                    <span className="font-semibold">{resort.name.replace("Wildvill ", "")}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {resort.badge.split("&")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Massive Active Showcase Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Interactive Image Preview & Mini Gallery (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-100 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${activeTabResort.gallery[activeImageIdx] || activeTabResort.heroImage})`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    
                    {/* Floating Rate Tag */}
                    <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-navy-950/90 text-white text-xs font-semibold shadow-md">
                      From <span className="text-sky-300 font-bold">{activeTabResort.startingPrice}</span> / night
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-widest text-sky-300 font-bold mb-1">
                        {activeTabResort.elevation}
                      </p>
                      <h4 className="text-xl font-serif font-bold text-white">
                        {activeTabResort.tagline}
                      </h4>
                    </div>
                  </div>

                  {/* Thumbnail Swapper */}
                  <div className="grid grid-cols-5 gap-2">
                    {activeTabResort.gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          activeImageIdx === idx
                            ? "border-navy-950 scale-105 shadow-md"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${imgUrl})` }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Property Details & Amenities (5 Cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-950 text-xs font-semibold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3 h-3 text-navy-800" />
                      <span>{activeTabResort.badge}</span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">
                      {activeTabResort.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center mt-1">
                      <MapPin className="w-3.5 h-3.5 text-navy-900 mr-1" />
                      <span>{activeTabResort.location}</span>
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                    {activeTabResort.fullDescription}
                  </p>

                  {/* Amenities 2-col list */}
                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Signature Highlights & Amenities
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeTabResort.amenities.map((amenity, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200"
                        >
                          <div className="p-1.5 rounded-lg bg-navy-100 text-navy-950 shrink-0 mt-0.5">
                            {renderAmenityIcon(amenity.iconName, "w-4 h-4")}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900">{amenity.name}</div>
                            <div className="text-[11px] text-slate-500 leading-tight line-clamp-1">{amenity.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Actions in Navy */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link
                      href={`/resorts/${activeTabResort.slug}`}
                      className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-navy-950 text-white font-semibold text-sm hover:bg-navy-900 shadow-md transition-all duration-300"
                    >
                      <span>Explore All Villas</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() =>
                        onOpenBooking
                          ? onOpenBooking(activeTabResort.slug)
                          : window.dispatchEvent(
                              new CustomEvent("open-booking-modal", { detail: { resortSlug: activeTabResort.slug } })
                            )
                      }
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border-2 border-navy-950 text-navy-950 font-semibold text-sm hover:bg-navy-950 hover:text-white transition-all duration-300"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
