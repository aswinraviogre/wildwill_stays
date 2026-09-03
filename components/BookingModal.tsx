"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Sparkles, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";

interface BookingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultResortSlug?: string;
}

export default function BookingModal({ isOpen: propIsOpen, onClose, defaultResortSlug }: BookingModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedResort, setSelectedResort] = useState(defaultResortSlug || "whispering-woods");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialOccasion, setSpecialOccasion] = useState("Relaxation & Leisure");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const conciergeWhatsAppNumber = "919526459920";

  // Sync with prop if provided
  useEffect(() => {
    if (propIsOpen !== undefined) {
      setInternalOpen(propIsOpen);
    }
  }, [propIsOpen]);

  // Sync defaultResortSlug if changed
  useEffect(() => {
    if (defaultResortSlug) {
      setSelectedResort(defaultResortSlug);
    }
  }, [defaultResortSlug]);

  // Listen for global custom events
  useEffect(() => {
    const handleGlobalOpen = (e: CustomEvent<{ resortSlug?: string }>) => {
      if (e.detail?.resortSlug) {
        setSelectedResort(e.detail.resortSlug);
      }
      setInternalOpen(true);
      setIsSubmitted(false);
    };

    window.addEventListener("open-booking-modal" as any, handleGlobalOpen);
    return () => window.removeEventListener("open-booking-modal" as any, handleGlobalOpen);
  }, []);

  const handleCloseModal = () => {
    setInternalOpen(false);
    setIsSubmitted(false);
    if (onClose) onClose();
  };

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedResort = RESORTS_DATA.find((r) => r.slug === selectedResort);
    const resortName = matchedResort ? `${matchedResort.name} (${matchedResort.badge})` : "Wildvill Stays Wayanad";

    const message = `✨ *Wildvill Stays Reservation Inquiry* ✨
--------------------------------
• *Preferred Retreat:* ${resortName}
• *Check-in Date:* ${checkIn || "Flexible"}
• *Check-out Date:* ${checkOut || "Flexible"}
• *Total Guests:* ${adults} Adults, ${children} Children
• *Occasion / Purpose:* ${specialOccasion}
--------------------------------
*Guest Details:*
• *Name:* ${name || "Valued Guest"}
• *Contact Phone:* ${phone || "Not Provided"}
• *Email:* ${email || "Not Provided"}

Please share current villa availability, customized packages, and direct booking rates.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${conciergeWhatsAppNumber}?text=${encodedMessage}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  if (!internalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white text-slate-900 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navy Header Bar */}
        <div className="flex items-center justify-between p-6 bg-navy-950 text-white">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="text-xl font-serif font-bold text-white">
                Reserve Your Stay at Wildvill
              </h3>
              <p className="text-xs text-slate-300">Instant Concierge Assistance & Direct Rates</p>
            </div>
          </div>
          <button
            onClick={handleCloseModal}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in-scale">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">
                Inquiry Transferred to WhatsApp!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, {name || "Guest"}. Your booking dates and retreat preferences are being sent directly to our private concierge.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 rounded-full bg-navy-950 text-white font-semibold text-sm hover:bg-navy-900 transition-colors shadow-md"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppInquiry} className="space-y-6">
              {/* Resort Choice Pill Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Preferred Retreat
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {RESORTS_DATA.map((resort) => {
                    const isSelected = selectedResort === resort.slug;
                    return (
                      <div
                        key={resort.id}
                        onClick={() => setSelectedResort(resort.slug)}
                        className={`cursor-pointer p-3 rounded-2xl border transition-all duration-300 flex items-center space-x-3 ${
                          isSelected
                            ? "bg-navy-950 text-white border-navy-950 shadow-md scale-[1.02]"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-xl bg-cover bg-center shrink-0 border border-slate-300"
                          style={{ backgroundImage: `url(${resort.heroImage})` }}
                        />
                        <div className="truncate">
                          <div className={`text-[10px] uppercase tracking-wider font-semibold truncate ${isSelected ? "text-sky-300" : "text-navy-950"}`}>
                            {resort.badge.split("&")[0]}
                          </div>
                          <div className={`text-xs font-semibold truncate ${isSelected ? "text-white" : "text-slate-900"}`}>
                            {resort.name.replace("Wildvill ", "")}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dates & Guests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Check-In Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-navy-950 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Check-Out Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-navy-950 shadow-sm"
                  />
                </div>
              </div>

              {/* Guests Count & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Adults (12+ yrs)
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-navy-950 shadow-sm"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5+">5+ Adults (Group)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Children (0-11 yrs)
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-navy-950 shadow-sm"
                  >
                    <option value="0">0 Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3+">3+ Children</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Occasion / Purpose
                  </label>
                  <select
                    value={specialOccasion}
                    onChange={(e) => setSpecialOccasion(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-navy-950 shadow-sm"
                  >
                    <option value="Relaxation & Leisure">Relaxation & Leisure</option>
                    <option value="Honeymoon & Romantic">Honeymoon & Romantic</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                    <option value="Corporate Retreat">Corporate Retreat</option>
                  </select>
                </div>
              </div>

              {/* Guest Contact Information */}
              <div className="space-y-4 pt-2 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Menon"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-navy-950 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-navy-950 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-navy-950 shadow-sm"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-semibold text-sm shadow-md transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Direct Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
