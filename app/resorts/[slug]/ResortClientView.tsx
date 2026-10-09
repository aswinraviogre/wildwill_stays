"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Resort, RESORTS_DATA } from "@/data/resortsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppEnquiryCard from "@/components/WhatsAppEnquiryCard";
import {
  Sparkles,
  MapPin,
  Calendar,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Compass,
  UtensilsCrossed,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Phone,
  MessageSquare,
  Images,
  Bed,
  Users,
  ShieldCheck,
  Clock,
  Waves,
  Wind,
  Flame,
  Wifi,
  Laptop,
  Tv,
  Bath,
  Car,
  Baby,
  Sun,
  Gamepad2
} from "lucide-react";
import { buildWhatsAppUrl } from "@/constants/contact";

const renderAmenityIcon = (iconName: string, className = "w-4 h-4") => {
  switch (iconName) {
    case "Waves":
      return <Waves className={className} />;
    case "Wind":
      return <Wind className={className} />;
    case "Flame":
      return <Flame className={className} />;
    case "UtensilsCrossed":
      return <UtensilsCrossed className={className} />;
    case "Wifi":
      return <Wifi className={className} />;
    case "Laptop":
      return <Laptop className={className} />;
    case "Tv":
      return <Tv className={className} />;
    case "Bath":
      return <Bath className={className} />;
    case "Car":
      return <Car className={className} />;
    case "Baby":
      return <Baby className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Gamepad2":
      return <Gamepad2 className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

interface ResortClientViewProps {
  resort: Resort;
}

export default function ResortClientView({ resort }: ResortClientViewProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const openLightbox = (index: number) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Recommends the other existing property (does not recommend self)
  const otherResorts = RESORTS_DATA.filter((r) => r.id !== resort.id);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1d2b1f] selection:bg-[#c29053] selection:text-white pb-28 sm:pb-16">
      {/* Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Breadcrumb Navigation & Top Intro */}
      <div className="pt-20 sm:pt-24 pb-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-xs text-[#737a71] mb-4">
          <Link href="/" className="hover:text-[#1d2b1f] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#destinations" className="hover:text-[#1d2b1f] transition-colors">
            Wayanad
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1d2b1f] font-semibold">{resort.name}</span>
        </nav>

        {/* Property Heading & Top Prominent Book Now Entry Point */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E8E2D5]">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1b2b1f] text-[#e2ba84] text-[11px] font-semibold uppercase tracking-[0.2em] shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{resort.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-medium text-[#1d2b1f] tracking-tight leading-tight">
              {resort.name}
            </h1>

            <p className="text-[#c29053] text-sm sm:text-base font-medium">
              {resort.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#5e665d] pt-1">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#c29053]" />
                <span>{resort.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <Compass className="w-4 h-4 text-[#c29053]" />
                <span>{resort.elevation}</span>
              </div>
              <span>•</span>
              <div className="font-semibold text-[#1d2b1f]">
                From {resort.startingPrice} <span className="text-[#737a71] font-light">/ night</span>
              </div>
            </div>
          </div>

          {/* 6.A TOP BOOK NOW BUTTON (Prominent, visible without scrolling) */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#c29053] hover:bg-[#ad7e43] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Now</span>
            </button>

            <a
              href={buildWhatsAppUrl(
                `Hello Wildvill Stays, I would like to inquire about reserving ${resort.name}.`
              )}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all active:scale-95 flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4.A & 4.B PROPERTY IMAGE GALLERY & VIEW MORE BUTTON */}
      <section className="py-4 sm:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-3 sm:space-y-4">
        {/* Gallery Layout: Prominent Main Image + Secondary Photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 rounded-3xl overflow-hidden">
          {/* Main Hero Photo (prominent) */}
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-8 relative h-80 sm:h-[420px] md:h-[460px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-md"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${resort.heroImage})` }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center space-x-2">
              <Images className="w-4 h-4 text-[#e2ba84]" />
              <span>Primary View</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
              <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                <Maximize2 className="w-6 h-6" />
              </span>
            </div>
          </div>

          {/* Secondary Thumbnail Photos */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
            {resort.gallery.slice(1, 3).map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx + 1)}
                className="relative h-36 sm:h-48 md:h-[222px] lg:h-[252px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-md"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${imgUrl})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4.B VIEW MORE IMAGE GALLERY BUTTON */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-[#737a71] font-light">
            Showing 3 of {resort.gallery.length} verified photos of {resort.name}
          </p>

          <button
            onClick={() => openLightbox(0)}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-md"
          >
            <Images className="w-4 h-4 text-[#c29053]" />
            <span>View More Photos ({resort.gallery.length})</span>
          </button>
        </div>
      </section>

      {/* 4.C PROPERTY INFORMATION AND AMENITIES */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Description & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b58742]">
                The Sanctuary Experience
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#1d2b1f]">
                Crafted for Complete Seclusion &amp; Natural Immersion
              </h2>
            </div>

            <div className="space-y-4 text-[#4e574d] text-base sm:text-lg leading-relaxed font-light">
              {resort.fullDescription.split("\n\n").map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Amenities Grid with Icons */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-serif font-semibold uppercase tracking-[0.16em] text-[#1d2b1f]">
                  Property Amenities &amp; Facilities ({resort.amenities.length})
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {resort.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3.5 p-4 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs hover:border-[#c29053]/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#c29053]/30 flex items-center justify-center text-[#c29053] shrink-0 mt-0.5">
                      {renderAmenityIcon(amenity.iconName, "w-4 h-4")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1d2b1f]">{amenity.name}</div>
                      <div className="text-xs text-[#6e756c] font-light mt-0.5 leading-relaxed">
                        {amenity.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Quick Card on Desktop */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-[#E8E2D5] shadow-[0_10px_30px_rgba(23,36,25,0.06)] space-y-6 lg:sticky lg:top-28">
            <div className="border-b border-[#E8E2D5] pb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b58742]">
                Direct Villa Rate
              </span>
              <div className="flex items-baseline space-x-1.5 mt-1">
                <span className="text-3xl font-serif font-bold text-[#1d2b1f]">
                  {resort.startingPrice}
                </span>
                <span className="text-xs text-[#737a71]">/ night</span>
              </div>
              <p className="text-[11px] text-[#737a71] mt-1">
                Includes private gated access, all washroom facilities &amp; high-speed Wi-Fi.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleOpenBooking}
                className="w-full py-3.5 px-6 rounded-full bg-[#c29053] hover:bg-[#ad7e43] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
              >
                Reserve Now
              </button>

              <a
                href={buildWhatsAppUrl(
                  `Hello, I would like to check availability and book ${resort.name}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#737a71] space-y-2 border-t border-[#f0ebe1]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c29053]" />
                <span>100% Gated Seclusion — No Shared Guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c29053]" />
                <span>Dedicated On-Site Hospitality Staff</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c29053]" />
                <span>Complimentary On-Site Vehicle Parking</span>
              </div>
            </div>
          </div>
        </div>



        {/* Dining Spotlight */}
        {resort.diningHighlight && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E8E2D5] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#b58742]">
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>Culinary Freedom</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1d2b1f]">
                  {resort.diningHighlight.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5e665d] font-light leading-relaxed">
                  {resort.diningHighlight.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {resort.diningHighlight.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] text-xs text-[#1d2b1f] border border-[#E8E2D5] font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-md">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${resort.diningHighlight.image})` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* House Rules & Policies Section */}
        {resort.houseRules && (
          <div className="pt-8 border-t border-[#E8E2D5] space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b58742]">
                Stay Guidelines
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1d2b1f]">
                House Rules &amp; Policies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* House Rules Card */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8E2D5] shadow-xs space-y-5">
                <div className="flex items-center space-x-2 text-sm font-serif font-semibold text-[#1d2b1f] border-b border-[#E8E2D5] pb-3">
                  <Clock className="w-4 h-4 text-[#c29053]" />
                  <span>Timings &amp; House Regulations</span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5]">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737a71] block">Check-in</span>
                    <span className="text-sm font-bold text-[#1d2b1f] mt-0.5 block">{resort.houseRules.checkIn}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5]">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737a71] block">Check-out</span>
                    <span className="text-sm font-bold text-[#1d2b1f] mt-0.5 block">{resort.houseRules.checkOut}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5]">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737a71] block">Quiet Hours</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#1d2b1f] mt-0.5 block">{resort.houseRules.quietHours}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5]">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#737a71] block">Pool Timing</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#1d2b1f] mt-0.5 block">{resort.houseRules.poolTiming}</span>
                  </div>
                </div>

                {/* Additional Rules */}
                {resort.houseRules.additionalRules && resort.houseRules.additionalRules.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[#f2ede4]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#737a71] block">
                      Important Rules
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#5e665d]">
                      {resort.houseRules.additionalRules.map((rule, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c29053] shrink-0 mt-0.5" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Cancellation Policy Card */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8E2D5] shadow-xs space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm font-serif font-semibold text-[#1d2b1f] border-b border-[#E8E2D5] pb-3">
                    <ShieldCheck className="w-4 h-4 text-[#c29053]" />
                    <span>Cancellation Policy</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#1b2b1f] text-[#e2ba84] text-[10px] font-semibold uppercase tracking-wider">
                      Cancellation Window
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#1d2b1f] leading-relaxed">
                      {resort.cancellationPolicy || "100% cancellation fee before 3 days of booking date."}
                    </p>
                  </div>

                  <p className="text-xs text-[#737a71] font-light leading-relaxed">
                    Reservations cancelled within 3 days of arrival will incur a 100% cancellation fee. Free cancellation is permitted when requested at least 3 full days prior to the booking date.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f2ede4]">
                  <a
                    href={buildWhatsAppUrl(`Hello Wildvill Concierge, I have a question regarding the booking and cancellation policy for ${resort.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#c29053] hover:underline flex items-center space-x-1"
                  >
                    <span>Have policy questions? Chat with Concierge</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Direct WhatsApp Concierge Card */}
        <div>
          <WhatsAppEnquiryCard resortName={resort.name} resortSlug={resort.slug} />
        </div>

        {/* 5. RECOMMENDED PROPERTY SECTION */}
        {otherResorts.length > 0 && (
          <div className="pt-8 border-t border-[#E8E2D5] space-y-8">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b58742]">
                Sister Sanctuary
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1d2b1f]">
                Recommended Retreat in Wayanad
              </h2>
              <p className="text-xs sm:text-sm text-[#737a71] font-light">
                Explore our other handpicked sanctuary located in Wayanad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherResorts.map((other) => (
                <div
                  key={other.id}
                  className="group bg-white rounded-3xl border border-[#E8E2D5] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${other.heroImage})` }}
                      />
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#1b2b1f]/85 text-[#f4efe6] text-[10px] font-semibold uppercase tracking-wider border border-[#c29053]/40">
                        {other.badge}
                      </div>
                      <div className="absolute bottom-3 right-3 z-10 px-3 py-1 rounded-full bg-[#1b2b1f]/90 text-white text-xs font-semibold">
                        From {other.startingPrice} / night
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <div className="flex items-center space-x-1.5 text-xs text-[#737a71]">
                        <MapPin className="w-3.5 h-3.5 text-[#b58742]" />
                        <span>{other.location}</span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-[#1d2b1f] group-hover:text-[#c29053] transition-colors">
                        {other.name}
                      </h3>
                      <p className="text-xs text-[#5e665d] font-light line-clamp-2 leading-relaxed">
                        {other.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#f4efe6] mt-2 pt-4">
                    <Link
                      href={`/resorts/${other.slug}`}
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-full border border-[#1d2b1f] hover:bg-[#1d2b1f] text-[#1d2b1f] hover:text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* 6.B STICKY BOOK NOW BUTTON AT BOTTOM (Mobile floating bar) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8E2D5] px-4 py-3 shadow-[0_-8px_20px_rgba(23,36,25,0.08)]">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div>
            <div className="text-[10px] uppercase font-semibold text-[#b58742] tracking-wider">
              {resort.name.replace("Wildvill ", "")}
            </div>
            <div className="text-xs font-bold text-[#1d2b1f]">
              {resort.startingPrice} <span className="font-light text-[#737a71]">/ night</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={buildWhatsAppUrl(
                `Hello, I would like to inquire about booking ${resort.name}.`
              )}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-[#25D366] text-white shadow-xs"
              aria-label="WhatsApp Enquiry"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={handleOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#c29053] active:bg-[#ad7e43] text-white text-xs font-semibold uppercase tracking-wider shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Dedicated Gallery Lightbox Modal for View More Gallery */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 animate-fade-in">
          {/* Top Bar with counter & close button */}
          <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white">
            <span className="text-xs sm:text-sm font-light text-[#e2ba84]">
              {resort.name} • Photo {currentLightboxIndex + 1} of {resort.gallery.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Gallery"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentLightboxIndex((prev) => (prev === 0 ? resort.gallery.length - 1 : prev - 1))
            }
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setCurrentLightboxIndex((prev) => (prev + 1) % resort.gallery.length)
            }
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Main Photo Focus View */}
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center">
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: `url(${resort.gallery[currentLightboxIndex]})` }}
            />
          </div>

          {/* Bottom Thumbnails */}
          <div className="absolute bottom-4 left-4 right-4 z-50 flex items-center justify-center space-x-2 overflow-x-auto py-2">
            {resort.gallery.map((img, tIdx) => (
              <button
                key={tIdx}
                onClick={() => setCurrentLightboxIndex(tIdx)}
                className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  tIdx === currentLightboxIndex
                    ? "border-[#c29053] scale-105"
                    : "border-white/30 opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Unified Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultResortSlug={resort.slug}
      />
    </main>
  );
}
