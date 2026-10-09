"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Calendar,
  Users,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { buildWhatsAppUrl } from "@/constants/contact";

interface WhatsAppEnquiryCardProps {
  resortName: string;
  resortSlug?: string;
}

export default function WhatsAppEnquiryCard({ resortName }: WhatsAppEnquiryCardProps) {
  // Today's date formatted as YYYY-MM-DD for min date
  const today = new Date().toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [customerName, setCustomerName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const getMinCheckOut = () => {
    if (!checkIn) return today;
    const d = new Date(checkIn);
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  const handleCheckInChange = (val: string) => {
    setCheckIn(val);
    setErrorMessage("");
    if (checkOut && val && checkOut <= val) {
      const nextDay = new Date(val);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split("T")[0]);
    }
  };

  const handleSendWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!customerName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!whatsappNumber.trim()) {
      setErrorMessage("Please enter your WhatsApp number.");
      return;
    }

    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      setErrorMessage("Check-out date must be later than check-in date.");
      return;
    }

    // Format the WhatsApp Message
    const formattedCheckIn = checkIn ? checkIn : "Flexible / To be confirmed";
    const formattedCheckOut = checkOut ? checkOut : "Flexible / To be confirmed";

    const message = `✨ *Wildvill Stays - Villa Reservation Enquiry* ✨
--------------------------------
🏡 *Property Name:* ${resortName}
📅 *Check-in Date:* ${formattedCheckIn}
📅 *Check-out Date:* ${formattedCheckOut}
👥 *Guests:* ${adults} Adults, ${children} Children
--------------------------------
👤 *Customer Name:* ${customerName.trim()}
📱 *Customer WhatsApp Number:* ${whatsappNumber.trim()}
--------------------------------
Hello Wildvill Concierge, I would like to check availability and enquire about staying at ${resortName}. Please share availability and details.`;

    const whatsappUrl = buildWhatsAppUrl(message);

    setIsSuccess(true);

    // Open WhatsApp Click-to-Chat in a new window/tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <div
      id="enquiry-form"
      className="bg-white rounded-3xl border border-[#E8E2D5] shadow-lg overflow-hidden scroll-mt-28"
    >
      {/* Top Brand Banner */}
      <div className="bg-[#1b2b1f] text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-[#c29053]/15 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#e2ba84] text-[11px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Concierge Service</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-tight">
              Plan Your Stay via WhatsApp
            </h3>
            <p className="text-[#c2ab87] text-xs sm:text-sm font-light">
              Submit your dates and details to chat directly with our estate concierge.
            </p>
          </div>

          <div className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs text-white/90 font-medium">Concierge Active</span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSendWhatsAppEnquiry} className="p-6 sm:p-8 space-y-6">
        {errorMessage && (
          <div className="flex items-center space-x-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {isSuccess && (
          <div className="flex items-center space-x-2 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm animate-fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#25D366]" />
            <span>Redirecting to WhatsApp chat with your pre-filled inquiry...</span>
          </div>
        )}

        <div className="space-y-4">
          {/* Property Name (Auto Selected) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#5e665d] mb-1.5">
              Selected Property
            </label>
            <div className="relative">
              <input
                type="text"
                readOnly
                value={resortName}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] text-[#1d2b1f] font-serif font-semibold text-base focus:outline-none cursor-default shadow-xs"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#1b2b1f] text-white text-[10px] font-bold uppercase tracking-wider">
                Confirmed
              </div>
            </div>
          </div>

          {/* Dates (Check-in & Check-out) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5e665d] mb-1.5 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c29053]" />
                <span>Check-in Date</span>
              </label>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-sm focus:outline-none focus:border-[#c29053] transition-all shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5e665d] mb-1.5 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c29053]" />
                <span>Check-out Date</span>
              </label>
              <input
                type="date"
                min={getMinCheckOut()}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-sm focus:outline-none focus:border-[#c29053] transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Guests (Adults & Children) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5e665d] mb-1.5 flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-[#c29053]" />
                <span>Adults</span>
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-sm focus:outline-none focus:border-[#c29053] transition-all shadow-xs"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Adult" : "Adults"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5e665d] mb-1.5 flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-[#c29053]" />
                <span>Children</span>
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-sm focus:outline-none focus:border-[#c29053] transition-all shadow-xs"
              >
                {[0, 1, 2, 3, 4, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Child" : "Children"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5e665d] mb-1.5">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Menon"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-sm placeholder-slate-400 focus:outline-none focus:border-[#c29053] transition-all shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5e665d] mb-1.5">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E2D5] text-[#1d2b1f] text-sm placeholder-slate-400 focus:outline-none focus:border-[#c29053] transition-all shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Submit Enquiry to WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-2 border-t border-[#f0ebe1] flex flex-wrap items-center justify-between text-[11px] text-[#737a71] gap-2">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-[#c29053]" />
            <span>Guaranteed Direct Rates</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-[#c29053]" />
            <span>Instant Response During Business Hours</span>
          </div>
        </div>
      </form>
    </div>
  );
}
