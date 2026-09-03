"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySwitcher from "@/components/PropertySwitcher";
import CuratedExperiences from "@/components/CuratedExperiences";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { Sparkles, HeartHandshake, Compass } from "lucide-react";

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedResortSlug, setSelectedResortSlug] = useState<string | undefined>(undefined);

  const handleOpenBooking = (resortSlug?: string) => {
    setSelectedResortSlug(resortSlug);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-navy-950 selection:text-white">
      {/* Dynamic Navy Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Showcase with Navy Quick Cards */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Interactive Property Switcher */}
      <PropertySwitcher onOpenBooking={handleOpenBooking} />

      {/* Why Wildvill / Signature Hospitality Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-950 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Ultra-Exclusive Seclusion
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                All three properties are strictly private gated estates with a boutique number of villas, ensuring absolute quiet and discrete personal butler service.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-950 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Bespoke Curated Dining
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Farm-to-table culinary creations prepared by master chefs using indigenous spices, claypot cooking, fresh mountain catch, and organic herbs.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-950 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Prime Wayanad Locations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Nestled in pristine micro-climates across Meppadi, Chembra Foothills & Vythiri, offering convenient access to heart-shaped lakes, waterfalls, and tea estates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Wayanad Immersion */}
      <CuratedExperiences />

      {/* Guest Reviews */}
      <Testimonials />

      {/* Final Call to Action Banner in Navy Blue */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto bg-navy-950 text-white p-10 sm:p-16 rounded-3xl shadow-2xl relative z-10 border border-navy-900">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
            Plan Your Wayanad Getaway
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3 mb-6">
            Ready for an Unforgettable Escape?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Reserve directly with our private concierge for exclusive complimentary plantation tours, high tea on the deck, and customized dining arrangements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-navy-950 font-semibold text-sm shadow-xl transition-all duration-300 hover:scale-105"
            >
              Check Availability & Rates
            </button>
            <a
              href="https://wa.me/919526459920"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Instant WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>

      {/* Solid Navy Footer */}
      <Footer />

      {/* Floating WhatsApp Concierge Widget (Logo Only) */}
      <FloatingWhatsApp />

      {/* Interactive Booking Drawer / Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultResortSlug={selectedResortSlug}
      />
    </main>
  );
}
