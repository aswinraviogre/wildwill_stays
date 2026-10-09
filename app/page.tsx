"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import ThoughtfullyChosen from "@/components/ThoughtfullyChosen";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Sparkles, ShieldCheck, Utensils, Compass, Phone } from "lucide-react";
import { CONTACT_CONFIG, buildWhatsAppUrl } from "@/constants/contact";

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedResortSlug, setSelectedResortSlug] = useState<string | undefined>(undefined);

  const handleOpenBooking = (resortSlug?: string) => {
    setSelectedResortSlug(resortSlug);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1d2b1f] selection:bg-[#c29053] selection:text-white">
      {/* Refined Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 1. Hero Section matching reference image */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 2 & 3. Destination Selection Section (Ooty, Coorg, Wayanad) & Existing Property Integration */}
      <DestinationSection onOpenBooking={handleOpenBooking} />

      {/* Value Proposition matching reference image */}
      <ThoughtfullyChosen />

      {/* Hospitality Standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-1.5 text-[#b58742] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Wildvill Benchmark</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#1d2b1f] tracking-tight">
              Hospitality Standards You Can Trust
            </h2>
            <p className="text-[#656e63] text-xs sm:text-sm mt-2 font-light">
              Every villa in our collection is managed with unmatched privacy, dedicated culinary teams, and round-the-clock personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E2D5] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#c29053]/30 text-[#b58742] flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1d2b1f]">
                100% Gated Privacy
              </h3>
              <p className="text-[#656e63] text-xs leading-relaxed font-light">
                Entire estates strictly reserved for your party. No shared amenities or intrusions, ensuring absolute calm.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E2D5] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#c29053]/30 text-[#b58742] flex items-center justify-center shadow-xs">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1d2b1f]">
                Farm-to-Table Gourmet
              </h3>
              <p className="text-[#656e63] text-xs leading-relaxed font-light">
                Dedicated private chefs preparing traditional Malabar delicacies, claypot specialties, and custom requests.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E2D5] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#c29053]/30 text-[#b58742] flex items-center justify-center shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1d2b1f]">
                Dedicated Butler Care
              </h3>
              <p className="text-[#656e63] text-xs leading-relaxed font-light">
                Attentive on-site hospitality team catering to daily tea services, bonfire evenings, and custom itineraries.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E2D5] space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#c29053]/30 text-[#b58742] flex items-center justify-center shadow-xs">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1d2b1f]">
                Curated Nature Trails
              </h3>
              <p className="text-[#656e63] text-xs leading-relaxed font-light">
                Direct access to private streams, coffee groves, birdwatching decks, and mountain viewpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Concierge Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-[#1b2b1f] text-white p-8 sm:p-14 rounded-3xl shadow-2xl relative z-10 border border-white/10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#e2ba84] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#e2ba84]" />
            <span>Dedicated Luxury Concierge</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-medium text-white tracking-tight mb-4">
            Planning a Special Celebration or Family Trip?
          </h2>

          <p className="text-[#d0c9bc] text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Connect directly with our destination concierge for personalized villa recommendations, customized menus, and private high-tea arrangements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold rounded-full bg-[#c29053] hover:bg-[#ad7e43] text-white shadow-md transition-all active:scale-95 uppercase tracking-wider"
            >
              Check Availability &amp; Book
            </button>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#1b2b1f] transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#e2ba84]" />
              <span>WhatsApp Concierge: {CONTACT_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Unified Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultResortSlug={selectedResortSlug}
      />
    </main>
  );
}
