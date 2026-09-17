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
    }, 300);
  };

  return (
    <div
      id="enquiry-form"
      className="bg-white rounded-3xl border border-[#ece7de] shadow-xl overflow-hidden scroll-mt-28"
    >
      {/* Top Brand Banner */}
      <div className="bg-[#111b29] text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#fba919] text-[11px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
              <span>Direct Concierge Service</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Plan Your Stay via WhatsApp
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light">
              Submit your dates and details to chat directly with our estate concierge.
            </p>
          </div>

          <div className="flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs text-slate-200 font-medium">Concierge Online</span>
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
            <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-1.5">
              Selected Property
            </label>
            <div className="relative">
              <input
                type="text"
                readOnly
                value={resortName}
                className="w-full px-4 py-3 rounded-xl bg-[#f7f5f0] border border-[#ece7de] text-[#111b29] font-serif font-semibold text-base focus:outline-none cursor-default shadow-inner"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#111b29] text-white text-[10px] font-bold uppercase tracking-wider">
                Confirmed
              </div>
            </div>
          </div>

          {/* Dates (Check-in & Check-out) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-1.5 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#d98e0e]" />
                <span>Check-in Date</span>
              </label>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  if (checkOut && e.target.value > checkOut) {
                    setCheckOut(e.target.value);
                  }
                }}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#ece7de] text-[#111b29] text-sm focus:outline-none focus:ring-2 focus:ring-[#111b29]/20 focus:border-[#111b29] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-1.5 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#d98e0e]" />
                <span>Check-out Date</span>
              </label>
              <input
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#ece7de] text-[#111b29] text-sm focus:outline-none focus:ring-2 focus:ring-[#111b29]/20 focus:border-[#111b29] transition-all"
              />
            </div>
          </div>

          {/* Guests (Adults & Children) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-1.5 flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-[#d98e0e]" />
                <span>Adults</span>
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#ece7de] text-[#111b29] text-sm focus:outline-none focus:ring-2 focus:ring-[#111b29]/20 focus:border-[#111b29] transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Adult" : "Adults"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-1.5 flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-[#d98e0e]" />
                <span>Children</span>
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#ece7de] text-[#111b29] text-sm focus:outline-none focus:ring-2 focus:ring-[#111b29]/20 focus:border-[#111b29] transition-all"
              >
                {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Child" : "Children"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Customer Details (Name & WhatsApp Number) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-1.5">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#ece7de] text-[#111b29] text-sm focus:outline-none focus:ring-2 focus:ring-[#111b29]/20 focus:border-[#111b29] transition-all placeholder:text-[#999999]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#666666] mb-1.5">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#ece7de] text-[#111b29] text-sm focus:outline-none focus:ring-2 focus:ring-[#111b29]/20 focus:border-[#111b29] transition-all placeholder:text-[#999999]"
              />
            </div>
          </div>
        </div>

        {/* Submit Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center space-x-2.5 group cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white text-white transition-transform group-hover:scale-110" />
            <span>Send Enquiry on WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-[11px] text-[#666666] border-t border-[#ece7de]">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Instant Concierge Chat</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#111b29]" />
            <span>100% Direct Villa Booking</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#d98e0e]" />
            <span>No Hidden Platform Fees</span>
          </div>
        </div>
      </form>
    </div>
  );
}
