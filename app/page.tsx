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
import { Sparkles, ShieldCheck, Utensils, Compass, Users, Heart, ArrowRight, Phone } from "lucide-react";

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedResortSlug, setSelectedResortSlug] = useState<string | undefined>(undefined);

  const handleOpenBooking = (resortSlug?: string) => {
    setSelectedResortSlug(resortSlug);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#fcfbf8] text-[#111b29] selection:bg-[#2d66a1] selection:text-white">
      {/* SaffronStays Clean White Floating Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Showcase with Floating Saffron Search Capsule */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Post-Hero: Category Pills, Header Alignment & Saffron Property Cards */}
      <PropertySwitcher onOpenBooking={handleOpenBooking} />

      {/* Saffron Standard Hospitality 4-Pillar Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative border-b border-[#ece7de]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-1.5 text-[#d98e0e] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
              <span>The Wildvill Benchmark</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#111b29] tracking-tight">
              Hospitality Standards You Can Trust
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm mt-2 font-light">
              Every villa in our collection is managed with unmatched privacy, dedicated culinary teams, and round-the-clock personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="saf-card p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#111b29]">
                100% Gated Privacy
              </h3>
              <p className="text-[#666666] text-xs leading-relaxed font-light">
                Entire estates strictly reserved for your party. No shared amenities or intrusions, ensuring absolute calm.
              </p>
            </div>

            <div className="saf-card p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#111b29]">
                Farm-to-Table Gourmet
              </h3>
              <p className="text-[#666666] text-xs leading-relaxed font-light">
                Dedicated private chefs preparing traditional Malabar delicacies, claypot specialties, and custom requests.
              </p>
            </div>

            <div className="saf-card p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#111b29]">
                Dedicated Butler Care
              </h3>
              <p className="text-[#666666] text-xs leading-relaxed font-light">
                Attentive on-site hospitality team catering to daily tea services, bonfire evenings, and custom itineraries.
              </p>
            </div>

            <div className="saf-card p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#fff6e6] border border-[#fba919]/30 text-[#d98e0e] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#111b29]">
                Curated Nature Trails
              </h3>
              <p className="text-[#666666] text-xs leading-relaxed font-light">
                Direct access to private streams, coffee groves, birdwatching decks, and mountain viewpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SaffronStays Thematic Collections (Stay By Occasion) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fcfbf8] relative border-b border-[#ece7de]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[#d98e0e] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
                <span>Handcrafted Selections</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#111b29] tracking-tight">
                Curated Collections for Every Occasion
              </h2>
            </div>
            <Link
              href="/gallery"
              className="group inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#111b29] hover:text-[#2d66a1] transition-colors"
            >
              <span>Explore All Collections</span>
              <ArrowRight className="w-4 h-4 text-[#111b29] group-hover:text-[#2d66a1] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Theme 1 */}
            <Link
              href="/resorts/mist-meadows"
              className="saf-card overflow-hidden group relative h-72 flex flex-col justify-end p-6 border border-[#ece7de]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111b29] via-[#111b29]/40 to-transparent" />
              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#fba919]">
                  Coffee Valley Sanctuary
                </span>
                <h3 className="text-xl font-serif font-medium">Romantic & Wellness Escapes</h3>
                <p className="text-xs text-white/80 font-light">
                  Heated jacuzzis, private stream picnics & spa therapies.
                </p>
              </div>
            </Link>

            {/* Theme 2 */}
            <Link
              href="/resorts/whispering-woods"
              className="saf-card overflow-hidden group relative h-72 flex flex-col justify-end p-6 border border-[#ece7de]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111b29] via-[#111b29]/40 to-transparent" />
              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#fba919]">
                  Canopy Glasshouse
                </span>
                <h3 className="text-xl font-serif font-medium">Nature & Architecture Lovers</h3>
                <p className="text-xs text-white/80 font-light">
                  Cantilevered glass structures nestled in ancient evergreen canopies.
                </p>
              </div>
            </Link>

            {/* Theme 3 */}
            <Link
              href="/resorts/cloud-peak"
              className="saf-card overflow-hidden group relative h-72 flex flex-col justify-end p-6 border border-[#ece7de]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111b29] via-[#111b29]/40 to-transparent" />
              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#fba919]">
                  Cliffside Infinity Pool
                </span>
                <h3 className="text-xl font-serif font-medium">Celebrations & Group Stays</h3>
                <p className="text-xs text-white/80 font-light">
                  Infinity pool floating over misty valleys at 3,200 ft.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Curated Wayanad Immersion */}
      <CuratedExperiences />

      {/* Guest Reviews */}
      <Testimonials />

      {/* SaffronStays Luxury Direct Concierge Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-[#111b29] text-white p-8 sm:p-14 rounded-3xl shadow-2xl relative z-10 border border-[#ece7de]/20 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#fba919] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
            <span>Dedicated Luxury Concierge</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-medium text-white tracking-tight mb-4">
            Planning a Special Celebration or Family Trip?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Connect directly with our Wayanad destination concierge for personalized villa recommendations, customized menus, and complimentary high-tea arrangements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenBooking()}
              className="btn-saffron w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold shadow-md active:scale-95"
            >
              Check Availability & Rates
            </button>
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

      {/* Saffron Deep Slate Footer */}
      <Footer />

      {/* Floating WhatsApp Concierge Widget */}
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

