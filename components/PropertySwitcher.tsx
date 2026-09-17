"use client";

import React, { useState, useRef } from "react";
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
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Wind,
  Car,
  MessageSquare
} from "lucide-react";

// Helper to render icon by name
const renderAmenityIcon = (name: string, className = "w-4 h-4") => {
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
    case "Wind":
      return <Wind className={className} />;
    case "Car":
      return <Car className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

interface PropertySwitcherProps {
  onOpenBooking?: (resortSlug: string) => void;
}

export default function PropertySwitcher({ onOpenBooking }: PropertySwitcherProps) {
  const [viewMode, setViewMode] = useState<"grid" | "tab">("grid");
  const [activeTabResortId, setActiveTabResortId] = useState<string>(RESORTS_DATA[0].id);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const scrollContainerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [cardImageIndices, setCardImageIndices] = useState<{ [key: string]: number }>({
    "geo-greens": 0,
    "whispering-woods": 0
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCardScroll = (id: string) => {
    const container = scrollContainerRefs.current[id];
    if (!container) return;
    const width = container.clientWidth;
    if (width > 0) {
      const newIndex = Math.round(container.scrollLeft / width);
      setCardImageIndices((prev) => {
        if (prev[id] === newIndex) return prev;
        return { ...prev, [id]: newIndex };
      });
    }
  };

  const scrollToImage = (id: string, newIdx: number) => {
    const container = scrollContainerRefs.current[id];
    if (container) {
      container.scrollTo({
        left: newIdx * container.clientWidth,
        behavior: "smooth"
      });
    }
    setCardImageIndices((prev) => ({ ...prev, [id]: newIdx }));
  };

  const handleCardImageNext = (e: React.MouseEvent, id: string, galleryLength: number) => {
    e.preventDefault();
    e.stopPropagation();
    const current = cardImageIndices[id] || 0;
    const nextIdx = (current + 1) % galleryLength;
    scrollToImage(id, nextIdx);
  };

  const handleCardImagePrev = (e: React.MouseEvent, id: string, galleryLength: number) => {
    e.preventDefault();
    e.stopPropagation();
    const current = cardImageIndices[id] || 0;
    const prevIdx = current === 0 ? galleryLength - 1 : current - 1;
    scrollToImage(id, prevIdx);
  };

  const filteredResorts = RESORTS_DATA;

  const activeTabResort = RESORTS_DATA.find((r) => r.id === activeTabResortId) || RESORTS_DATA[0];

  return (
    <section id="properties" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fcfbf8] relative overflow-hidden text-[#111b29] border-b border-[#ece7de]">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* ---------------- SaffronStays SECTION HEADER ALIGNMENT ---------------- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-[#d98e0e] text-xs font-bold uppercase tracking-[0.2em] mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
              <span>Signature Wayanad Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#111b29] tracking-tight">
              Homes & Private Estates in Wayanad
            </h2>
            <p className="text-[#666666] mt-1.5 text-xs sm:text-sm max-w-2xl font-light">
              Architecturally distinct sanctuaries managed with 5-star private butler hospitality, farm-to-table cuisine, and complete gated exclusivity.
            </p>
          </div>

          {/* Right Header Alignment: VIEW ALL link + View Mode Switcher */}
          <div className="flex items-center gap-4 shrink-0 self-start md:self-end">
            <Link
              href="/gallery"
              className="group hidden sm:flex items-center space-x-1.5 text-xs font-semibold tracking-wider text-[#111b29] hover:text-[#2d66a1] transition-colors uppercase"
            >
              <span>View All Stays</span>
              <ArrowRight className="w-4 h-4 text-[#111b29] group-hover:text-[#2d66a1] group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center bg-white p-1 rounded-full border border-[#ece7de] shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#111b29] text-white shadow-sm"
                    : "text-[#666666] hover:text-[#111b29]"
                }`}
                title="Grid View"
              >
                <Columns className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode("tab")}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === "tab"
                    ? "bg-[#111b29] text-white shadow-sm"
                    : "text-[#666666] hover:text-[#111b29]"
                }`}
                title="Interactive Showcase"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Showcase</span>
              </button>
            </div>
          </div>
        </div>

        {/* ----------------- SaffronStays 2-ESTATE LUXURY CARD GRID ----------------- */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-500">
            {filteredResorts.map((resort) => {
              const currentImageIdx = cardImageIndices[resort.id] || 0;
              const allImages = [resort.heroImage, ...(resort.gallery || [])];
              const isFav = favorites[resort.id];

              return (
                <div
                  key={resort.id}
                  className="saf-card overflow-hidden flex flex-col justify-between group transition-all"
                >
                  {/* Card Cover Image with Saffron Carousel Controls & Smooth Swipe */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 group/image">
                    {/* Horizontal swipeable / scrollable image track */}
                    <div
                      ref={(el) => {
                        scrollContainerRefs.current[resort.id] = el;
                      }}
                      onScroll={() => handleCardScroll(resort.id)}
                      className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                      {allImages.map((imgSrc, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="w-full h-full flex-none shrink-0 snap-start snap-always relative overflow-hidden"
                        >
                          <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url(${imgSrc})` }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Top Floating Badges: Property Tag & Saffron Rating */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {resort.badge.split("&")[0]}
                      </span>

                      <div className="flex items-center space-x-2 pointer-events-auto">
                        <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-[#111b29] shadow-sm">
                          <Star className="w-3 h-3 text-[#fba919] fill-[#fba919]" />
                          <span>4.92</span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleFavorite(resort.id);
                          }}
                          className={`p-1.5 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                            isFav
                              ? "bg-red-500 text-white"
                              : "bg-black/40 hover:bg-black/60 text-white"
                          }`}
                          aria-label="Save to favorites"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-white" : ""}`} />
                        </button>
                      </div>
                    </div>

                    {/* Carousel Nav Arrows */}
                    <button
                      type="button"
                      onClick={(e) => handleCardImagePrev(e, resort.id, allImages.length)}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-[#111b29] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleCardImageNext(e, resort.id, allImages.length)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-[#111b29] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Image Dot Indicators */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center space-x-1 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                      {allImages.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            scrollToImage(resort.id, dotIdx);
                          }}
                          className={`block rounded-full transition-all cursor-pointer ${
                            dotIdx === currentImageIdx
                              ? "w-3 h-1.5 bg-[#fba919]"
                              : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Bottom-left Location Tag */}
                    <div className="pointer-events-none absolute bottom-2.5 left-3 text-xs text-white font-medium flex items-center space-x-1 drop-shadow z-10">
                      <MapPin className="w-3.5 h-3.5 text-[#fba919]" />
                      <span className="truncate">{resort.location}</span>
                    </div>
                  </div>

                  {/* SaffronStays Styled Card Content */}
                  <div className="p-5 sm:p-6 space-y-4 flex flex-col justify-between flex-1">
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl font-serif font-semibold text-[#111b29] group-hover:text-[#2d66a1] transition-colors leading-snug">
                          {resort.name}
                        </h3>
                      </div>

                      {/* Capacity line */}
                      <div className="text-xs text-[#666666] font-medium flex items-center space-x-1.5">
                        <span>Up to 8-10 Guests</span>
                        <span>•</span>
                        <span>{resort.id === "geo-greens" ? "3 Bedrooms • 3 Washrooms" : `${resort.rooms.length} Suites`}</span>
                        <span>•</span>
                        <span className="text-[#d98e0e]">{resort.elevation}</span>
                      </div>

                      <p className="text-[#666666] text-xs sm:text-[13px] line-clamp-2 font-light leading-relaxed pt-1">
                        {resort.shortDescription}
                      </p>

                      {/* 6 Key Amenity Preview Pills */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {resort.amenities.slice(0, 6).map((amenity, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg bg-[#f7f5f0] border border-[#ece7de]"
                          >
                            <span className="text-[#d98e0e] shrink-0">
                              {renderAmenityIcon(amenity.iconName, "w-3.5 h-3.5")}
                            </span>
                            <span className="text-[11px] font-medium text-[#111b29] truncate">
                              {amenity.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-[#ece7de] flex items-center justify-between gap-3">
                      <div className="flex items-center space-x-1.5 text-xs text-[#d98e0e] font-semibold tracking-wide">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Private Sanctuary</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/resorts/${resort.slug}`}
                          className="px-4 py-2 rounded-full border border-[#ece7de] hover:border-[#111b29] text-xs font-semibold text-[#111b29] transition-colors"
                        >
                          View Villa
                        </Link>
                        <Link
                          href={`/resorts/${resort.slug}?enquire=true#enquiry-form`}
                          className="btn-saf-blue px-4 py-2 text-xs font-semibold inline-flex items-center space-x-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>Enquire Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ----------------- SaffronStays INTERACTIVE SHOWCASE VIEW ----------------- */}
        {viewMode === "tab" && (
          <div className="space-y-6 animate-fade-in">
            {/* Top Estate Selector Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {RESORTS_DATA.map((resort) => {
                const isActive = resort.id === activeTabResort.id;
                return (
                  <button
                    key={resort.id}
                    onClick={() => {
                      setActiveTabResortId(resort.id);
                      setActiveImageIdx(0);
                    }}
                    className={`flex items-center space-x-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#111b29] text-white shadow-md scale-105"
                        : "bg-white text-[#111b29] hover:bg-[#fff6e6] border border-[#ece7de]"
                    }`}
                  >
                    <span className="font-serif font-semibold">{resort.name}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-[#f7f5f0] text-[#666666]"
                      }`}
                    >
                      {resort.badge.split("&")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* SaffronStays Large Feature Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ece7de] shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Gallery & Preview */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#ece7de] group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${activeTabResort.gallery[activeImageIdx] || activeTabResort.heroImage})`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111b29]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-widest text-[#fba919] font-bold mb-1">
                        {activeTabResort.elevation}
                      </p>
                      <h4 className="text-xl sm:text-2xl font-serif font-medium text-white">
                        {activeTabResort.tagline}
                      </h4>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-6 gap-2">
                    {[activeTabResort.heroImage, ...activeTabResort.gallery.slice(0, 5)].map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative h-14 rounded-xl overflow-hidden border-2 transition-all ${
                          activeImageIdx === idx
                            ? "border-[#fba919] scale-105 shadow-sm"
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

                {/* Right: Estate Specifications & Actions */}
                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] text-xs font-semibold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3 h-3 text-[#fba919]" />
                      <span>{activeTabResort.badge}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#111b29]">
                      {activeTabResort.name}
                    </h3>
                    <p className="text-xs text-[#666666] flex items-center mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#fba919] mr-1 shrink-0" />
                      <span>{activeTabResort.location}</span>
                    </p>
                  </div>

                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed font-light">
                    {activeTabResort.fullDescription}
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#111b29]">
                      Curated Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeTabResort.amenities.map((amenity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 p-2 rounded-xl bg-[#f7f5f0] border border-[#ece7de]"
                        >
                          <div className="p-1 rounded-lg bg-white text-[#d98e0e] shrink-0">
                            {renderAmenityIcon(amenity.iconName, "w-3.5 h-3.5")}
                          </div>
                          <div className="text-xs font-medium text-[#111b29] truncate">
                            {amenity.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <Link
                      href={`/resorts/${activeTabResort.slug}`}
                      className="btn-saf-blue flex-1 py-3 text-center text-xs sm:text-sm"
                    >
                      Explore Villa & Suites
                    </Link>
                    <Link
                      href={`/resorts/${activeTabResort.slug}?enquire=true#enquiry-form`}
                      className="btn-saf-outline px-6 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-1.5"
                    >
                      <MessageSquare className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp Enquiry</span>
                    </Link>
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

