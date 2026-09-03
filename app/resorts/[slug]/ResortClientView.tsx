"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Resort, RESORTS_DATA } from "@/data/resortsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Compass,
  UtensilsCrossed,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Phone
} from "lucide-react";

interface ResortClientViewProps {
  resort: Resort;
}

export default function ResortClientView({ resort }: ResortClientViewProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomName, setSelectedRoomName] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const handleOpenBooking = (roomName?: string) => {
    setSelectedRoomName(roomName || null);
    setBookingModalOpen(true);
  };

  const openLightbox = (index: number) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  const otherResorts = RESORTS_DATA.filter((r) => r.id !== resort.id);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-navy-950 selection:text-white">
      {/* Navy Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Cover */}
      <section className="relative h-[85vh] min-h-[600px] flex items-end pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-navy-950">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-105"
          style={{ backgroundImage: `url(${resort.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-900/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-navy-950/40 to-navy-950/80" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-white/20 text-sky-300 text-xs font-semibold uppercase tracking-[0.2em] shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{resort.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              {resort.name}
            </h1>

            <p className="text-slate-200 text-sm sm:text-lg font-light leading-relaxed">
              {resort.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{resort.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <Compass className="w-4 h-4 text-sky-400" />
                <span>{resort.elevation}</span>
              </div>
              <span>•</span>
              <div className="text-white font-semibold">
                Rates from <span className="text-sky-300">{resort.startingPrice}</span> / night
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={() => handleOpenBooking()}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-navy-950 font-semibold text-sm shadow-xl transition-all hover:scale-105"
              >
                Check Availability & Book
              </button>
              <button
                onClick={() => openLightbox(0)}
                className="px-6 py-3.5 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                View Resort Gallery ({resort.gallery.length} Photos)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Editorial Narrative */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-950">
                The Sanctuary Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                An Untouched Haven Crafted For Complete Seclusion
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                {resort.fullDescription}
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                Designed to maintain harmony with the surrounding biodiversity of Wayanad, each structure is positioned to maximize privacy, unobstructed panoramic horizons, and immersive soundscapes of mountain birds and wind through the trees.
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {resort.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-navy-950 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{amenity.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{amenity.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Featured Snapshot Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {resort.gallery.slice(0, 4).map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="cursor-pointer relative h-48 rounded-2xl overflow-hidden border border-slate-200 group shadow-md"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${imgUrl})` }}
                  />
                  <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy-950/40">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Villas & Suites Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-950">
              Accommodation Options
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2">
              Villas & Luxury Suites
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Each residence features custom teakwood craftsmanship, private viewing decks, and discrete butler support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resort.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg flex flex-col justify-between group hover:shadow-2xl hover:border-navy-950 transition-all"
              >
                <div>
                  {/* Room Cover Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${room.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-navy-950/90 text-white text-xs font-bold">
                      {room.pricePerNight} <span className="text-[10px] text-slate-400 font-normal">/ night</span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-navy-950" />
                        <span>{room.capacity}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Maximize2 className="w-3.5 h-3.5 text-navy-950" />
                        <span>{room.size}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-navy-900 transition-colors">
                      {room.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {room.tagline}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {room.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-navy-950 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Button in Navy */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenBooking(`${room.name} at ${resort.name}`)}
                    className="w-full py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all hover:shadow-lg"
                  >
                    Reserve This Villa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Spotlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-100 text-navy-950 text-xs font-semibold uppercase tracking-wider">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>Culinary Experiences</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                  {resort.diningHighlight.title}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {resort.diningHighlight.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Signature Specialties:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {resort.diningHighlight.specialties.map((dish, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center space-x-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 shadow-sm"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-navy-950 shrink-0" />
                        <span>{dish}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${resort.diningHighlight.image})` }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Property Lightbox Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-950">
                Visual Lookbook
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-1">
                Property Visual Gallery
              </h2>
            </div>
            <button
              onClick={() => openLightbox(0)}
              className="text-xs font-semibold uppercase tracking-wider text-navy-950 hover:underline self-start sm:self-auto flex items-center space-x-1"
            >
              <span>View Fullscreen Modal</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {resort.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="cursor-pointer relative h-60 rounded-2xl overflow-hidden border border-slate-200 group shadow-md"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${imgUrl})` }}
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy-950/40">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Retreats in the Collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              The Wildvill Collection
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Explore Our Other Signature Retreats
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherResorts.map((other) => (
              <Link
                key={other.id}
                href={`/resorts/${other.slug}`}
                className="group relative rounded-3xl overflow-hidden bg-navy-950 text-white border border-slate-200 p-6 h-72 flex flex-col justify-end shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${other.heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />

                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-sky-400">
                    {other.badge}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-sky-300 transition-colors">
                    {other.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-2">
                    <span>Starts {other.startingPrice} / night</span>
                    <span className="flex items-center space-x-1 text-sky-300">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solid Navy Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setCurrentLightboxIndex((prev) => (prev === 0 ? resort.gallery.length - 1 : prev - 1))
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setCurrentLightboxIndex((prev) => (prev + 1) % resort.gallery.length)
            }
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: `url(${resort.gallery[currentLightboxIndex]})` }}
            />
            <div className="text-center text-xs text-slate-400 mt-4">
              Photo {currentLightboxIndex + 1} of {resort.gallery.length} • {resort.name}
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultResortSlug={resort.slug}
      />
    </main>
  );
}
