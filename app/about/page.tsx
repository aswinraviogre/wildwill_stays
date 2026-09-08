"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Utensils,
  Compass,
  Heart,
  Trees,
  Phone
} from "lucide-react";

export default function AboutPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fcfbf8] text-[#111b29] selection:bg-[#2d66a1] selection:text-white">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#ece7de] text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-5 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
            <span>Our Story & Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#111b29] tracking-tight leading-[1.15]">
            Handcrafted Luxury in the <br />
            <span className="italic font-medium text-[#fba919]">Heart of Wayanad.</span>
          </h1>

          <p className="text-[#666666] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Wildvill was born from a desire to create private, secluded sanctuaries in Wayanad where architectural elegance harmoniously coexists with the untamed Western Ghats.
          </p>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-1.5 text-[#d98e0e] text-xs font-bold uppercase tracking-[0.2em]">
              <Compass className="w-3.5 h-3.5 text-[#fba919]" />
              <span>The Wildvill Vision</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#111b29] tracking-tight">
              A Refined Sanctuary Away from the Everyday
            </h2>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-light">
              Nestled across misty valleys, ancient rainforests, and rolling coffee estates, each Wildvill property is an exclusive estate designed for travelers seeking complete privacy, personalized hospitality, and bespoke culinary journeys.
            </p>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-light">
              We believe in non-intrusive luxury — private estates where your group enjoys exclusive access to private pools, dedicated butler service, and farm-to-table gourmet meals prepared by master chefs.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#ece7de]">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111b29]">3</div>
                <div className="text-xs text-[#666666] font-medium uppercase tracking-wider mt-0.5">Signature Estates</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#111b29]">100%</div>
                <div className="text-xs text-[#666666] font-medium uppercase tracking-wider mt-0.5">Private Buyouts</div>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="h-64 sm:h-80 rounded-3xl bg-cover bg-center shadow-lg border border-[#ece7de]"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80)"
              }}
            />
            <div
              className="h-64 sm:h-80 rounded-3xl bg-cover bg-center shadow-lg border border-[#ece7de] mt-8"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80)"
              }}
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#ece7de]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-1.5 text-[#d98e0e] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
              <span>What Sets Us Apart</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#111b29] tracking-tight">
              Pillars of Wildvill Hospitality
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="saf-card p-6 space-y-3 border border-[#ece7de]">
              <div className="w-12 h-12 rounded-2xl bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#111b29]">Gated Privacy</h3>
              <p className="text-[#666666] text-xs leading-relaxed font-light">
                Entire properties exclusively reserved for your party with zero shared amenities.
              </p>
            </div>

            <div className="saf-card p-6 space-y-3 border border-[#ece7de]">
              <div className="w-12 h-12 rounded-2xl bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#111b29]">Bespoke Culinary</h3>
              <p className="text-[#666666] text-xs leading-relaxed font-light">
                Dedicated in-house chefs preparing traditional Malabar meals and customized cuisines.
              </p>
            </div>

            <div className="saf-card p-6 space-y-3 border border-[#ece7de]">
              <div className="w-12 h-12 rounded-2xl bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] flex items-center justify-center">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#111b29]">Eco-Architecture</h3>
              <p className="text-[#666666] text-xs leading-relaxed font-light">
                Glass chalets and timber villas built harmoniously within ancient tea and coffee canopies.
              </p>
            </div>

            <div className="saf-card p-6 space-y-3 border border-[#ece7de]">
              <div className="w-12 h-12 rounded-2xl bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#111b29]">24/7 Concierge Care</h3>
              <p className="text-[#666666] text-xs leading-relaxed font-light">
                Continuous concierge assistance for bonfire evenings, excursions, and custom celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Concierge Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fcfbf8]">
        <div className="max-w-4xl mx-auto bg-[#111b29] text-white p-8 sm:p-12 rounded-3xl shadow-2xl text-center space-y-6 border border-[#ece7de]/20">
          <h2 className="text-2xl sm:text-4xl font-serif font-medium text-white tracking-tight">
            Plan Your Wayanad Retreat
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
            Connect with our reservations desk directly on WhatsApp for tailored tariffs, villa availability, and custom packages.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="btn-saffron w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold shadow-md active:scale-95"
            >
              Contact Reservations
            </Link>
            <a
              href="https://wa.me/919526459920"
              target="_blank"
              rel="noreferrer"
              className="btn-saf-outline w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#111b29] transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#fba919]" />
              <span>WhatsApp Concierge: +91 95264 59920</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <FloatingWhatsApp />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
