"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";

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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-[#ece7de] py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-[#ece7de]/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Link
              href="/"
              className="group flex flex-col items-start focus:outline-none transition-transform active:scale-[0.99]"
            >
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-serif tracking-[0.18em] text-[#111b29] font-bold">
                  WILDVILL
                </span>
                <span className="w-2 h-2 rounded-full bg-[#fba919] inline-block shadow-sm" />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.26em] text-[#666666] uppercase font-medium mt-0.5">
                LUXURY VILLAS & ESTATES • WAYANAD
              </span>
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {/* The Estates Dropdown */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setEstatesDropdownOpen(true)}
                onMouseLeave={() => setEstatesDropdownOpen(false)}
              >
                <button
                  className="relative flex items-center space-x-1.5 text-sm font-medium text-[#111b29] py-1 transition-colors hover:text-[#2d66a1] focus:outline-none after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#fba919] after:transition-transform after:duration-300 hover:after:scale-x-100"
                  aria-expanded={estatesDropdownOpen}
                >
                  <span>Our Stays</span>
                  <ChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform duration-300 text-[#111b29]" />
                </button>

                {/* Dropdown Menu Container */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[360px] pt-3 transition-all duration-300 origin-top ${
                    estatesDropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="bg-white p-3.5 rounded-2xl border border-[#ece7de] shadow-[0_20px_40px_rgba(17,27,41,0.12)] space-y-1.5 backdrop-blur-md">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#999999] px-2.5 pt-1 pb-0.5">
                      Private Wayanad Estates
                    </div>
                    {RESORTS_DATA.map((resort) => (
                      <Link
                        key={resort.id}
                        href={`/resorts/${resort.slug}`}
                        className="block p-2.5 rounded-xl hover:bg-[#fff6e6] transition-all group/item"
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#d98e0e]">
                          {resort.badge}
                        </div>
                        <div className="text-sm font-serif font-semibold text-[#111b29] group-hover/item:text-[#2d66a1] flex items-center justify-between">
                          <span>{resort.name}</span>
                          <span className="text-xs font-sans text-[#111b29] font-medium">Starts {resort.startingPrice}</span>
                        </div>
                        <div className="text-xs text-[#666666] truncate mt-0.5 flex items-center">
                          <MapPin className="w-3 h-3 text-[#999] mr-1 shrink-0" />
                          <span>{resort.location}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery Link */}
              <Link
                href="/gallery"
                className={`relative text-sm font-medium py-1 transition-colors hover:text-[#2d66a1] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#fba919] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === "/gallery"
                    ? "text-[#2d66a1] font-semibold after:scale-x-100"
                    : "text-[#111b29]"
                }`}
              >
                Gallery
              </Link>
            </nav>

            {/* Right: Direct Call & Mobile Hamburger */}
            <div className="flex items-center justify-end space-x-2.5 sm:space-x-3.5">
              <a
                href="tel:+919526459920"
                className="inline-flex items-center justify-center space-x-2 sm:space-x-2.5 h-9 sm:h-10 px-3 sm:px-4 rounded-full bg-[#fff6e6] hover:bg-[#ffeed1] border border-[#fba919]/40 text-[#111b29] transition-all shadow-xs hover:shadow-sm active:scale-95 group shrink-0"
                title="Call Wildvill Reservations"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow-xs flex items-center justify-center text-[#d98e0e] shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span className="tracking-tight text-xs sm:text-sm font-semibold whitespace-nowrap leading-none">
                  +91 95264 59920
                </span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full text-[#111b29] hover:bg-[#fff6e6] hover:text-[#2d66a1] transition-colors focus:outline-none shrink-0"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white p-6 pt-6 flex flex-col justify-between border-l border-[#ece7de] shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#ece7de] pb-4">
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-lg font-serif font-bold text-[#111b29] tracking-wider">
                    WILDVILL
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#fba919]" />
                </div>
                <p className="text-xs text-[#666666]">Luxury Villas & Estates in Wayanad</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-[#111b29]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#111b29] p-3 rounded-xl hover:bg-[#fff6e6] transition-colors flex items-center justify-between"
              >
                <span>About Us</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#111b29] p-3 rounded-xl hover:bg-[#fff6e6] transition-colors flex items-center justify-between"
              >
                <span>Contact</span>
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#ece7de]">
            <a
              href="tel:+919526459920"
              className="flex items-center justify-center space-x-2 w-full py-3 text-xs text-[#111b29] border border-[#ece7de] rounded-full hover:bg-slate-50 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#fba919]" />
              <span>Direct Concierge: +91 95264 59920</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
