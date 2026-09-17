"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface GalleryPhoto {
  url: string;
  title: string;
  category: "all" | "geo-greens" | "whispering-woods" | "villas" | "dining";
  location: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Whispering Woods Real Photos
  {
    url: "/images/whispering-woods/chalet-exterior.jpg",
    title: "Elevated Cantilevered Glasshouse Chalet",
    category: "whispering-woods",
    location: "Wildvill Whispering Woods"
  },
  {
    url: "/images/whispering-woods/glass-bedroom.jpg",
    title: "Glass-Walled Forest Bedroom Suite",
    category: "villas",
    location: "Wildvill Whispering Woods"
  },
  {
    url: "/images/whispering-woods/stone-pathway-villa.jpg",
    title: "Stone Walkway & Garden Cottages",
    category: "whispering-woods",
    location: "Wildvill Whispering Woods"
  },
  {
    url: "/images/whispering-woods/two-story-residence.jpg",
    title: "Two-Story Luxury Estate Residence",
    category: "villas",
    location: "Wildvill Whispering Woods"
  },
  {
    url: "/images/whispering-woods/boulder-forest-lawn.jpg",
    title: "Ancient Granite Boulders & Forest Lawn",
    category: "whispering-woods",
    location: "Wildvill Whispering Woods"
  },

  // Geo Greens Photos
  {
    url: "/images/geo-greens/villa-exterior-night.jpg",
    title: "Illuminated Night Facade & Private Lawn",
    category: "geo-greens",
    location: "Wildvill Geo Greens"
  },
  {
    url: "/images/geo-greens/living-room-lounge.jpg",
    title: "Spacious Living Lounge & Open Dining Area",
    category: "villas",
    location: "Wildvill Geo Greens"
  },
  {
    url: "/images/geo-greens/indoor-swing-recreation.jpg",
    title: "Traditional Wooden Swing & Carrom Recreation Lounge",
    category: "geo-greens",
    location: "Wildvill Geo Greens"
  },
  {
    url: "/images/geo-greens/tv-lounge-interior.jpg",
    title: "Entertainment Lounge with Teakwood Entrance",
    category: "villas",
    location: "Wildvill Geo Greens"
  },
  {
    url: "/images/geo-greens/modern-bathroom.jpg",
    title: "Contemporary Washroom with Hot Water Shower",
    category: "villas",
    location: "Wildvill Geo Greens"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const filtered =
    activeCategory === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => {
          if (activeCategory === "geo-greens") return p.location.includes("Geo Greens");
          if (activeCategory === "whispering-woods") return p.location.includes("Whispering Woods");
          return p.category === activeCategory;
        });

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-navy-950 selection:text-white">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Header Banner */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-navy-950 text-xs font-semibold uppercase tracking-[0.25em] shadow-sm">
            <Camera className="w-3.5 h-3.5 text-navy-900" />
            <span>Visual Anthology</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight">
            The Wildvill Experience Through The Lens
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Discover the quiet morning mist of our coffee estates, cantilevered timber chalets, and lush valley horizons across our Wayanad collection.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {[
              { id: "all", label: "All Photos" },
              { id: "whispering-woods", label: "Whispering Woods" },
              { id: "geo-greens", label: "Geo Greens" },
              { id: "villas", label: "Suites & Chalets" },
              { id: "dining", label: "Dining & Culinary" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === tab.id
                    ? "bg-navy-950 text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:text-navy-950 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="cursor-pointer group relative rounded-3xl overflow-hidden bg-navy-950 border border-slate-200 h-80 flex flex-col justify-end p-6 shadow-md hover:shadow-2xl hover:border-navy-950 transition-all duration-500 hover:-translate-y-1.5"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${photo.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>

              <div className="relative z-10 space-y-1 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-sky-400">
                  {photo.location}
                </span>
                <h3 className="text-sm font-semibold group-hover:text-sky-300 transition-colors line-clamp-2">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 animate-fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev === null || prev === 0 ? filtered.length - 1 : prev - 1
              )
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev === null ? 0 : (prev + 1) % filtered.length
              )
            }
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat rounded-2xl shadow-2xl"
              style={{ backgroundImage: `url(${filtered[lightboxIndex].url})` }}
            />
            <div className="text-center mt-4 space-y-1">
              <h4 className="text-base font-serif font-bold text-white">
                {filtered[lightboxIndex].title}
              </h4>
              <p className="text-xs text-sky-400">
                {filtered[lightboxIndex].location} • Image {lightboxIndex + 1} of {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Floating WhatsApp Concierge Widget */}
      <FloatingWhatsApp />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
