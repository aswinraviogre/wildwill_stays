"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  MapPin,
  Phone,
  Mail,
  Compass,
  Sparkles,
  Send,
  MessageSquare,
  Car,
  Plane,
  CheckCircle2
} from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "whispering-woods",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedResort = RESORTS_DATA.find((r) => r.slug === formData.property)?.name || "Wildvill Stays";
    const text = `✨ *Wildvill Stays Web Contact Inquiry* ✨
• *Name:* ${formData.name}
• *WhatsApp / Phone:* ${formData.phone}
• *Email:* ${formData.email || "Not Provided"}
• *Preferred Property:* ${selectedResort}
• *Note / Query:* ${formData.message}`;

    const url = `https://wa.me/919526459920?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-navy-950 selection:text-white">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Header Banner */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-navy-950 text-xs font-semibold uppercase tracking-[0.25em] shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>Direct Concierge & Reservations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight">
            Connect with Wildvill Stays
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Our private reservation desk is available 24/7 on WhatsApp & phone to assist with room availability, bespoke dining requests, private transfers, and customized Wayanad itineraries.
          </p>
        </div>
      </section>

      {/* Contact Cards & Inquiry Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Channels & Driving Guide (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                Direct Contact Channels
              </h2>
              <p className="text-slate-600 text-sm font-light">
                Reach our guest relations team directly for fast bookings, tariff inquiries, and special requests.
              </p>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919526459920"
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-4 p-5 rounded-2xl bg-white border-2 border-emerald-500 hover:border-emerald-600 transition-all group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Instant WhatsApp Concierge
                  </div>
                  <div className="text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    +91 95264 59920
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Live responses within 5 minutes for availability & quotes
                  </div>
                </div>
              </a>

              {/* Direct Phone */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-950 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-950">
                    Direct Front Desk & Reservations
                  </div>
                  <a href="tel:+919526459920" className="text-base font-semibold text-slate-900 hover:text-navy-900">
                    +91 95264 59920
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Mon - Sun: 7:00 AM - 11:00 PM IST
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-950 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-950">
                    Email Correspondence
                  </div>
                  <a href="mailto:reservations@wildvill.com" className="text-base font-semibold text-slate-900 hover:text-navy-900">
                    reservations@wildvill.com
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    For corporate retreats, buyout inquiries & event bookings
                  </div>
                </div>
              </div>
            </div>

            {/* Travel & Driving Distances */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center space-x-2">
                <Car className="w-5 h-5 text-navy-950" />
                <span>How to Reach Wayanad</span>
              </h3>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="flex items-center space-x-1.5">
                    <Plane className="w-3.5 h-3.5 text-navy-950" />
                    <span>Calicut International Airport (CCJ)</span>
                  </span>
                  <span className="font-semibold text-slate-900">78 km (2.5 hrs)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="flex items-center space-x-1.5">
                    <Plane className="w-3.5 h-3.5 text-navy-950" />
                    <span>Kannur International Airport (CNN)</span>
                  </span>
                  <span className="font-semibold text-slate-900">98 km (3 hrs)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="flex items-center space-x-1.5">
                    <Car className="w-3.5 h-3.5 text-navy-950" />
                    <span>Bangalore (via Mysore & Bandipur)</span>
                  </span>
                  <span className="font-semibold text-slate-900">275 km (5.5 hrs)</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Car className="w-3.5 h-3.5 text-navy-950" />
                    <span>Kochi / Cochin</span>
                  </span>
                  <span className="font-semibold text-slate-900">220 km (6 hrs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-950">
                Direct Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in-scale">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">
                    Inquiry Sent via WhatsApp!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-light">
                    Thank you, {formData.name}. We have routed your request to our reservation desk at <strong>+91 95264 59920</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Varma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-navy-950 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 95264 59920"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-navy-950 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-navy-950 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Select Property of Interest
                      </label>
                      <select
                        value={formData.property}
                        onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-navy-950 shadow-sm"
                      >
                        {RESORTS_DATA.map((r) => (
                          <option key={r.id} value={r.slug}>
                            {r.name} ({r.badge})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message / Specific Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your proposed dates, number of guests, or special celebrations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-navy-950 shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-semibold text-sm shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-2xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send to WhatsApp (+91 95264 59920)</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-950">
              Guest FAQs
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-semibold text-slate-900">
                What are the check-in and check-out timings?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be accommodated subject to villa availability and prior coordination with our concierge.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-semibold text-slate-900">
                Are meals included, and can dietary preferences be customized?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Complimentary gourmet breakfast is included with all stays. We also provide customized all-inclusive meal plans (lunch, high tea, candlelit dinner) prepared according to your Jain, vegan, or gluten-free preferences.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-base font-semibold text-slate-900">
                Is private transportation or airport pickup available?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Yes, our concierge arranges luxury chauffeur pickups from Calicut International Airport (CCJ), Kannur (CNN), Mysore, and Bangalore, as well as 4x4 transfers for plantation excursions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solid Navy Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
