"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Sparkles, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";
import { buildWhatsAppUrl } from "@/constants/contact";

interface BookingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultResortSlug?: string;
}

export default function BookingModal({
  isOpen: propIsOpen,
  onClose,
  defaultResortSlug
}: BookingModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedResort, setSelectedResort] = useState(defaultResortSlug || "whispering-woods");
  
  // Format today's date YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];
  
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialOccasion, setSpecialOccasion] = useState("Relaxation & Leisure");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync with prop
  useEffect(() => {
    if (propIsOpen !== undefined) {
      setInternalOpen(propIsOpen);
      if (propIsOpen) {
        setValidationError(null);
        setIsSubmitted(false);
      }
    }
  }, [propIsOpen]);

  // Sync defaultResortSlug
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
      setValidationError(null);
    };

    window.addEventListener("open-booking-modal" as any, handleGlobalOpen);
    return () => window.removeEventListener("open-booking-modal" as any, handleGlobalOpen);
  }, []);

  // Calculate minimum check-out date (strictly next day of check-in)
  const getMinCheckOut = () => {
    if (!checkIn) return todayStr;
    const d = new Date(checkIn);
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  const handleCheckInChange = (val: string) => {
    setCheckIn(val);
    setValidationError(null);
    // If checkOut is earlier than or equal to new checkIn, reset or bump checkOut
    if (checkOut && val && checkOut <= val) {
      const nextDay = new Date(val);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split("T")[0]);
    }
  };

  const handleCheckOutChange = (val: string) => {
    setCheckOut(val);
    setValidationError(null);
  };

  const handleCloseModal = () => {
    setInternalOpen(false);
    setIsSubmitted(false);
    setValidationError(null);
    if (onClose) onClose();
  };

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();

    // Strict validation: check-out must be strictly greater than check-in
    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      setValidationError("Check-out date must be later than check-in date.");
      return;
    }

    if (!phone || phone.trim().length < 6) {
      setValidationError("Please enter a valid WhatsApp or contact phone number.");
      return;
    }

    setValidationError(null);

    const matchedResort = RESORTS_DATA.find((r) => r.slug === selectedResort);
    const resortName = matchedResort
      ? `${matchedResort.name} (${matchedResort.badge})`
      : "Wildvill Stays Retreat";

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

Please confirm villa availability, customized packages, and direct booking rates.`;

    const whatsappUrl = buildWhatsAppUrl(message);

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  if (!internalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-fade-in"
      onClick={handleCloseModal}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] text-[#1d2b1f] rounded-3xl border border-[#E8E2D5] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 bg-[#1b2b1f] text-white">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-full bg-[#c29053]/20 border border-[#c29053]/40 flex items-center justify-center text-[#e2ba84]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-medium text-white tracking-tight">
                Reserve Your Stay at Wildvill
              </h3>
              <p className="text-[11px] sm:text-xs text-[#c2ab87]">
                Instant Concierge Assistance &amp; Direct Rates
              </p>
            </div>
          </div>
          <button
            onClick={handleCloseModal}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4 animate-fade-in-scale">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-medium text-[#1d2b1f]">
                Inquiry Sent to WhatsApp!
              </h4>
              <p className="text-[#5e665d] text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">
                Thank you, {name || "Guest"}. Your reservation dates and villa preferences are being forwarded directly to our private concierge desk.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleCloseModal}
                  className="px-8 py-3 rounded-full bg-[#1b2b1f] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#2b3d2f] transition-colors shadow-md"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppInquiry} className="space-y-5">
              {/* Validation Alert */}
              {validationError && (
                <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Resort Selection */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5e665d] mb-2">
                  1. Select Preferred Retreat
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {RESORTS_DATA.map((resort) => {
                    const isSelected = selectedResort === resort.slug;
                    return (
                      <div
                        key={resort.id}
                        onClick={() => setSelectedResort(resort.slug)}
                        className={`cursor-pointer p-3 rounded-2xl border transition-all duration-200 flex items-center space-x-3 ${
                          isSelected
                            ? "bg-[#1b2b1f] text-white border-[#1b2b1f] shadow-md scale-[1.01]"
                            : "bg-white border-[#E8E2D5] text-[#1d2b1f] hover:border-[#c29053]/50"
                        }`}
                      >
                        <div
                          className="w-12 h-12 rounded-xl bg-cover bg-center shrink-0 border border-white/20"
                          style={{ backgroundImage: `url(${resort.heroImage})` }}
                        />
                        <div className="truncate">
                          <div
                            className={`text-[10px] uppercase tracking-wider font-semibold truncate ${
                              isSelected ? "text-[#e2ba84]" : "text-[#b58742]"
                            }`}
                          >
                            {resort.badge}
                          </div>
                          <div
                            className={`text-xs sm:text-sm font-serif font-semibold truncate ${
                              isSelected ? "text-white" : "text-[#1d2b1f]"
                            }`}
                          >
                            {resort.name}
                          </div>
                          <div
                            className={`text-[11px] truncate ${
                              isSelected ? "text-white/70" : "text-[#737a71]"
                            }`}
                          >
                            From {resort.startingPrice} / night
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Check-In and Check-Out Dates */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5e665d] mb-2">
                  2. Travel Dates
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2b1f] mb-1">
                      Check-In Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={checkIn}
                      onChange={(e) => handleCheckInChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm focus:outline-none focus:border-[#c29053] shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2b1f] mb-1">
                      Check-Out Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={getMinCheckOut()}
                      value={checkOut}
                      onChange={(e) => handleCheckOutChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm focus:outline-none focus:border-[#c29053] shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Guests Count & Occasion */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5e665d] mb-2">
                  3. Party Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2b1f] mb-1">
                      Adults (12+ yrs)
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm focus:outline-none focus:border-[#c29053] shadow-xs"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5+">5+ Adults (Group)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2b1f] mb-1">
                      Children (0-11 yrs)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm focus:outline-none focus:border-[#c29053] shadow-xs"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3+">3+ Children</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2b1f] mb-1">
                      Occasion
                    </label>
                    <select
                      value={specialOccasion}
                      onChange={(e) => setSpecialOccasion(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm focus:outline-none focus:border-[#c29053] shadow-xs"
                    >
                      <option value="Relaxation & Leisure">Relaxation &amp; Leisure</option>
                      <option value="Honeymoon & Romantic">Honeymoon &amp; Romantic</option>
                      <option value="Family Holiday">Family Holiday</option>
                      <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                      <option value="Workation">Workation</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guest Contact Information */}
              <div className="space-y-3 pt-2 border-t border-[#E8E2D5]">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5e665d]">
                  4. Guest Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2b1f] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Menon"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[#c29053] shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2b1f] mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[#c29053] shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d2b1f] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[#c29053] shadow-xs"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="inline-flex items-center justify-center py-3.5 px-6 rounded-full border border-[#E8E2D5] hover:bg-white text-[#5e665d] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
