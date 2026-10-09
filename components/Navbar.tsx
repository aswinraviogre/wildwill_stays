"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, MapPin, MessageSquare, Sparkles } from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";
import { CONTACT_CONFIG, buildWhatsAppUrl } from "@/constants/contact";
import BrandLogo from "@/components/BrandLogo";

interface NavbarProps {
  onOpenBooking?: (resortSlug?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [estatesDropdownOpen, setEstatesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(23,36,25,0.06)] border-b border-[#E8E2D5] py-2.5 sm:py-3"
            : "bg-[#FAF7F2] border-b border-[#E8E2D5]/70 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo with botanical leaf icon & serif typography */}
            <BrandLogo />

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-9">
              {/* The Estates Dropdown */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setEstatesDropdownOpen(true)}
                onMouseLeave={() => setEstatesDropdownOpen(false)}
              >
                <button
                  className="relative flex items-center space-x-1.5 text-xs font-semibold tracking-wider uppercase text-[#1d2b1f] py-1 transition-colors hover:text-[#c29053] focus:outline-none"
                  aria-expanded={estatesDropdownOpen}
                >
                  <span>Our Stays</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Dropdown Menu Container */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[340px] pt-2 transition-all duration-300 origin-top ${
                    estatesDropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="bg-white p-3 rounded-2xl border border-[#E8E2D5] shadow-[0_20px_40px_rgba(23,36,25,0.12)] space-y-1 backdrop-blur-md">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#999] px-2.5 pt-1 pb-0.5">
                      Signature Wayanad Villas
                    </div>
                    {RESORTS_DATA.map((resort) => (
                      <Link
                        key={resort.id}
                        href={`/resorts/${resort.slug}`}
                        className="block p-2.5 rounded-xl hover:bg-[#FAF7F2] transition-all group/item"
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#c29053]">
                          {resort.badge}
                        </div>
                        <div className="text-sm font-serif font-semibold text-[#1d2b1f] group-hover/item:text-[#c29053]">
                          <span>{resort.name}</span>
                        </div>
                        <div className="text-xs text-[#70776f] truncate mt-0.5 flex items-center">
                          <MapPin className="w-3 h-3 text-[#999] mr-1 shrink-0" />
                          <span>{resort.location}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* About Link */}
              <Link
                href="/about"
                className={`text-xs font-semibold tracking-wider uppercase transition-colors hover:text-[#c29053] ${
                  pathname === "/about" ? "text-[#c29053]" : "text-[#1d2b1f]"
                }`}
              >
                About
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`text-xs font-semibold tracking-wider uppercase transition-colors hover:text-[#c29053] ${
                  pathname === "/contact" ? "text-[#c29053]" : "text-[#1d2b1f]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Actions: WhatsApp + Book Now (Desktop) + Hamburger (Mobile) */}
            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="hidden sm:inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#c29053] hover:bg-[#ad7e43] text-white text-xs font-semibold tracking-wider uppercase shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Book Now</span>
              </button>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center justify-center space-x-1.5 h-9 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white transition-all shadow-xs text-xs font-semibold tracking-wider uppercase active:scale-95"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Button matching reference image clean lines */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#1d2b1f] hover:bg-white/80 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[1.8]" />
                ) : (
                  <div className="w-6 h-5 flex flex-col justify-between py-0.5">
                    <span className="w-full h-0.5 bg-[#1d2b1f] rounded-full" />
                    <span className="w-full h-0.5 bg-[#1d2b1f] rounded-full" />
                    <span className="w-full h-0.5 bg-[#1d2b1f] rounded-full" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FAF7F2] p-6 flex flex-col justify-between border-l border-[#E8E2D5] shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-4">
              <BrandLogo onClick={() => setMobileMenuOpen(false)} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white text-[#1d2b1f]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#999] px-3 pt-2 pb-1">
                Our Destinations &amp; Stays
              </div>
              {RESORTS_DATA.map((resort) => (
                <Link
                  key={resort.id}
                  href={`/resorts/${resort.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#c29053]">
                    {resort.badge}
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#1d2b1f]">
                    {resort.name}
                  </div>
                </Link>
              ))}

              <div className="border-t border-[#E8E2D5] my-2 pt-2" />
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-wider uppercase text-[#1d2b1f] p-3 rounded-xl hover:bg-white transition-colors block"
              >
                About Wildvill
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-wider uppercase text-[#1d2b1f] p-3 rounded-xl hover:bg-white transition-colors block"
              >
                Contact &amp; Route Guide
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E8E2D5] space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full py-3 text-xs text-white bg-[#c29053] hover:bg-[#ad7e43] rounded-full font-semibold uppercase tracking-wider shadow-md transition-colors flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Now</span>
            </button>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 text-xs text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full font-semibold shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
