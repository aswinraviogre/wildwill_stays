"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESORTS_DATA, Resort } from "@/data/resortsData";
import {
  Sparkles,
  MapPin,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Layers,
  UtensilsCrossed,
  Waves,
  Wind
} from "lucide-react";
import { CONTACT_CONFIG, buildWhatsAppUrl } from "@/constants/contact";

export type DestinationId = "wayanad" | "ooty" | "coorg";

interface DestinationInfo {
  id: DestinationId;
  name: string;
  tagline: string;
  image: string;
  propertyCount: number;
}

const DESTINATIONS: DestinationInfo[] = [
  {
    id: "wayanad",
    name: "WAYANAD",
    tagline: "Waterfalls, glass chalets & private villas",
    image: "/images/destinations/wayanad.jpg",
    propertyCount: 2
  },
  {
    id: "ooty",
    name: "OOTY",
    tagline: "Misty tea hills & colonial chalets",
    image: "/images/destinations/ooty.jpg",
    propertyCount: 0
  },
  {
    id: "coorg",
    name: "COORG",
    tagline: "Coffee groves & misty rainforest cabins",
    image: "/images/destinations/coorg.jpg",
    propertyCount: 0
  }
];

interface DestinationSectionProps {
  onOpenBooking?: (resortSlug?: string) => void;
}

export default function DestinationSection({ onOpenBooking }: DestinationSectionProps) {
  // Default initially to Wayanad where existing properties are located
  const [selectedDestination, setSelectedDestination] = useState<DestinationId>("wayanad");
  const [cardImageIndices, setCardImageIndices] = useState<{ [key: string]: number }>({
    "geo-greens": 0,
    "whispering-woods": 0
  });

  const nextImage = (e: React.MouseEvent, resortId: string, max: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [resortId]: ((prev[resortId] || 0) + 1) % max
    }));
  };

  const prevImage = (e: React.MouseEvent, resortId: string, max: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [resortId]: ((prev[resortId] || 0) - 1 + max) % max
    }));
  };

  const activeDestinationInfo = DESTINATIONS.find((d) => d.id === selectedDestination)!;

  return (
    <section id="destinations" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">

        {/* ================= 3 DESTINATION CARDS ================= */}
        {/* Matching Reference UI: 3 attractive vertical cards side-by-side */}
        <div>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-6">
            {DESTINATIONS.map((dest) => {
              const isActive = selectedDestination === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest.id)}
                  aria-pressed={isActive}
                  className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl sm:rounded-3xl h-44 sm:h-72 lg:h-80 text-left transition-all duration-300 focus:outline-none ${isActive
                      ? "ring-2 sm:ring-3 ring-[#c29053] shadow-[0_12px_32px_rgba(35,56,39,0.22)] scale-[1.02]"
                      : "ring-1 ring-[#e4ddd0] opacity-85 hover:opacity-100 hover:shadow-lg hover:scale-[1.01]"
                    }`}
                >
                  {/* Background Photo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${dest.image})` }}
                  />

                  {/* Gradient overlay for clear text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity" />

                  {/* Top Destination Pill (visible on sm+) */}
                  {dest.propertyCount > 0 ? (
                    <span className="hidden sm:inline-block absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold tracking-wider text-white uppercase border border-white/25">
                      {dest.propertyCount} Stays Available
                    </span>
                  ) : (
                    <span className="hidden sm:inline-block absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] font-semibold tracking-wider text-[#e2ba84] uppercase border border-[#c29053]/40">
                      Coming Soon!
                    </span>
                  )}

                  {/* Bottom Text & Ochre Underline Indicator */}
                  <div className="relative z-10 w-full p-2.5 sm:p-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs sm:text-lg lg:text-xl font-serif font-semibold tracking-[0.22em] text-white uppercase drop-shadow-md">
                      {dest.name}
                    </span>

                    {/* Warm Ochre Underline Bar matching reference image */}
                    <div
                      className={`h-0.5 sm:h-1 rounded-full transition-all duration-300 mt-1 sm:mt-2 ${isActive
                          ? "w-8 sm:w-14 bg-[#c29053] shadow-[0_0_8px_rgba(194,144,83,0.8)]"
                          : "w-4 sm:w-6 bg-white/40 group-hover:bg-[#c29053]/70 group-hover:w-8"
                        }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= DESTINATION CONTENT SWITCHER ================= */}
        <div className="transition-all duration-300">
          {selectedDestination === "wayanad" ? (
            /* WAYANAD ACTIVE: Display the 2 existing properties */
            <div className="space-y-8">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8E2D5] pb-4">
                <div>
                  <div className="inline-flex items-center space-x-2 text-[#b58742] text-xs font-bold uppercase tracking-[0.2em] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Wayanad Sanctuary Collection</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#1d2b1f] tracking-tight">
                    Featured Private Estates in Wayanad
                  </h2>
                  <p className="text-[#656e63] text-xs sm:text-sm mt-1 font-light max-w-2xl">
                    Secluded coffee groves, glass chalets, and private pool villas managed with personalized hospitality.
                  </p>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#737a71] shrink-0">
                  Showing 2 of 2 Handpicked Stays
                </div>
              </div>

              {/* Property Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {RESORTS_DATA.map((resort) => {
                  const currentImgIdx = cardImageIndices[resort.id] || 0;
                  const currentImage = resort.gallery[currentImgIdx] || resort.heroImage;

                  return (
                    <div
                      key={resort.id}
                      className="group bg-white rounded-3xl border border-[#E8E2D5] shadow-[0_10px_30px_rgba(23,36,25,0.06)] hover:shadow-[0_20px_40px_rgba(23,36,25,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
                    >
                      {/* Property Image Gallery Slider */}
                      <div>
                        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${currentImage})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                          {/* Badge */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 rounded-full bg-[#1b2b1f]/85 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-[#f4efe6] border border-[#c29053]/40 shadow-sm">
                              {resort.badge}
                            </span>
                          </div>

                          {/* Image Carousel Controls */}
                          {resort.gallery.length > 1 && (
                            <>
                              <button
                                onClick={(e) => prevImage(e, resort.id, resort.gallery.length)}
                                aria-label="Previous photo"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button
                                onClick={(e) => nextImage(e, resort.id, resort.gallery.length)}
                                aria-label="Next photo"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>

                              {/* Dot Indicators */}
                              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-10">
                                {resort.gallery.slice(0, 5).map((_, idx) => (
                                  <span
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all ${idx === currentImgIdx
                                        ? "w-5 bg-[#c29053]"
                                        : "w-1.5 bg-white/60"
                                      }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}

                          {/* Starting Price Pill */}
                          <div className="absolute bottom-3 right-4 z-10">
                            <span className="px-3 py-1 rounded-full bg-[#1b2b1f]/90 text-white text-xs font-semibold tracking-wide border border-white/20">
                              From {resort.startingPrice} <span className="font-light text-white/70">/ night</span>
                            </span>
                          </div>
                        </div>

                        {/* Property Details Body */}
                        <div className="p-6 sm:p-7 space-y-4">
                          {/* Location & Title */}
                          <div>
                            <div className="flex items-center space-x-1.5 text-xs text-[#737a71] font-medium mb-1">
                              <MapPin className="w-3.5 h-3.5 text-[#b58742]" />
                              <span>{resort.location}</span>
                              <span>•</span>
                              <span>{resort.elevation}</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1d2b1f] group-hover:text-[#b58742] transition-colors">
                              {resort.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#c29053] font-medium mt-0.5">
                              {resort.tagline}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-[#5e665d] font-light leading-relaxed line-clamp-3">
                            {resort.shortDescription}
                          </p>

                          {/* Amenities Quick Tags */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {resort.amenities.slice(0, 4).map((amenity, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-[11px] font-medium text-[#465045] border border-[#E8E2D5]"
                              >
                                {amenity.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3 border-t border-[#f2ede4] mt-4 pt-4">
                        <Link
                          href={`/resorts/${resort.slug}`}
                          className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-full border border-[#1d2b1f] hover:bg-[#1d2b1f] text-[#1d2b1f] hover:text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <button
                          onClick={() => onOpenBooking && onOpenBooking(resort.slug)}
                          className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#c29053] hover:bg-[#ad7e43] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md transition-all duration-200 active:scale-95"
                        >
                          <span>Book Now</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* OOTY OR COORG ACTIVE: Clean, attractive empty state */
            <div className="bg-white rounded-3xl border border-[#E8E2D5] p-8 sm:p-14 text-center max-w-3xl mx-auto space-y-6 shadow-[0_10px_30px_rgba(23,36,25,0.04)] animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#c29053]/40 text-[#c29053] mx-auto flex items-center justify-center shadow-inner">
                <Compass className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b58742]">
                  Upcoming Destination
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1d2b1f]">
                  Curating Our {activeDestinationInfo.name} Collection
                </h3>
                <p className="text-xs sm:text-sm text-[#5e665d] max-w-lg mx-auto font-light leading-relaxed">
                  We are currently handpicking and onboarding private estates in {activeDestinationInfo.name} that meet our strict benchmark for absolute seclusion, pristine nature, and personalized hospitality.
                </p>
              </div>

              {/* Concierge Call to Action */}
              <div className="bg-[#FAF7F2] rounded-2xl p-5 max-w-md mx-auto border border-[#E8E2D5] text-left space-y-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#1d2b1f]">
                  <Sparkles className="w-4 h-4 text-[#c29053]" />
                  <span>Planning an escape to {activeDestinationInfo.name}?</span>
                </div>
                <p className="text-xs text-[#5e665d] font-light">
                  Our private travel concierge can arrange off-market boutique stays and bespoke itineraries for your dates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={buildWhatsAppUrl(
                    `Hello Wildvill Concierge, I am inquiring about upcoming luxury stays and private chalets in ${activeDestinationInfo.name}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold tracking-wider shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Enquire via WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedDestination("wayanad")}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full border border-[#1d2b1f] hover:bg-[#1d2b1f] text-[#1d2b1f] hover:text-white text-xs sm:text-sm font-semibold tracking-wider transition-all"
                >
                  <span>Explore Wayanad Stays</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
