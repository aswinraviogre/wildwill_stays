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
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = (resortSlug?: string) => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking(resortSlug);
    } else {
      window.dispatchEvent(new CustomEvent("open-booking-modal", { detail: { resortSlug } }));
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-[#ece7de] py-3.5"
            : "bg-white/90 backdrop-blur-sm border-b border-[#ece7de]/80 py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo in SaffronStays Typography */}
            <Link
              href="/"
              className="group flex flex-col items-start focus:outline-none"
            >
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-serif tracking-[0.18em] text-[#111b29] font-bold">
                  WILDVILL
                </span>
                <span className="w-2 h-2 rounded-full bg-[#fba919] inline-block" />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#666666] uppercase font-medium">
                LUXURY VILLAS & ESTATES • WAYANAD
              </span>
            </Link>

            {/* Center: Desktop Navigation with SaffronStays hover underlines */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Destinations Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setDestinationsDropdownOpen(true)}
                onMouseLeave={() => setDestinationsDropdownOpen(false)}
              >
                <button className="relative flex items-center space-x-1 text-sm font-medium text-[#111b29] py-2 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#fba919] after:transition-transform after:duration-300 hover:after:scale-x-100">
                  <span>Destinations</span>
                  <ChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform duration-300 text-[#111b29]" />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 transition-all duration-300 origin-top ${
                    destinationsDropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="bg-white p-4 rounded-2xl border border-[#ece7de] shadow-[0_20px_40px_rgba(17,27,41,0.12)] space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#666666] px-2">
                      Wayanad Regions
                    </div>
                    <Link
                      href="/resorts/mist-meadows"
                      className="block p-2.5 rounded-xl hover:bg-[#fff6e6] transition-colors"
                    >
                      <div className="flex items-center text-sm font-medium text-[#111b29]">
                        <MapPin className="w-3.5 h-3.5 text-[#fba919] mr-2" />
                        <span>Meppadi Valley</span>
                      </div>
                      <p className="text-xs text-[#666666] ml-5">40-acre coffee & stream estate</p>
                    </Link>
                    <Link
                      href="/resorts/whispering-woods"
                      className="block p-2.5 rounded-xl hover:bg-[#fff6e6] transition-colors"
                    >
                      <div className="flex items-center text-sm font-medium text-[#111b29]">
                        <MapPin className="w-3.5 h-3.5 text-[#fba919] mr-2" />
                        <span>Chembra Foothills</span>
                      </div>
                      <p className="text-xs text-[#666666] ml-5">Canopy glass chalet & mist trails</p>
                    </Link>
                    <Link
                      href="/resorts/cloud-peak"
                      className="block p-2.5 rounded-xl hover:bg-[#fff6e6] transition-colors"
                    >
                      <div className="flex items-center text-sm font-medium text-[#111b29]">
                        <MapPin className="w-3.5 h-3.5 text-[#fba919] mr-2" />
                        <span>Vythiri Heights</span>
                      </div>
                      <p className="text-xs text-[#666666] ml-5">3,200 ft cliffside infinity pool</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* The Estates Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setEstatesDropdownOpen(true)}
                onMouseLeave={() => setEstatesDropdownOpen(false)}
              >
                <button className="relative flex items-center space-x-1 text-sm font-medium text-[#111b29] py-2 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#fba919] after:transition-transform after:duration-300 hover:after:scale-x-100">
                  <span>Our Stays</span>
                  <ChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform duration-300 text-[#111b29]" />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-88 pt-2 transition-all duration-300 origin-top ${
                    estatesDropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="bg-white p-3.5 rounded-2xl border border-[#ece7de] shadow-[0_20px_40px_rgba(17,27,41,0.12)] space-y-1.5">
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

              <Link
                href="/experiences"
                className={`relative text-sm font-medium py-2 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#fba919] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === "/experiences"
                    ? "text-[#2d66a1] font-semibold after:scale-x-100"
                    : "text-[#111b29] hover:text-[#2d66a1]"
                }`}
              >
                Experiences
              </Link>

              <Link
                href="/gallery"
                className={`relative text-sm font-medium py-2 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#fba919] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === "/gallery"
                    ? "text-[#2d66a1] font-semibold after:scale-x-100"
                    : "text-[#111b29] hover:text-[#2d66a1]"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className={`relative text-sm font-medium py-2 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#fba919] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === "/contact"
                    ? "text-[#2d66a1] font-semibold after:scale-x-100"
                    : "text-[#111b29] hover:text-[#2d66a1]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Direct Call & SaffronStays Signature Blue Pill Button */}
            <div className="flex items-center space-x-5">
              <a
                href="tel:+919526459920"
                className="hidden md:flex items-center space-x-2 text-sm font-medium text-[#111b29] hover:text-[#2d66a1] transition-colors"
                title="Call Wildvill Reservations"
              >
                <div className="w-8 h-8 rounded-full bg-[#fff6e6] border border-[#fba919]/30 flex items-center justify-center text-[#fba919]">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="hidden xl:inline tracking-tight font-semibold text-xs">
                  +91 95264 59920
                </span>
              </a>

              <button
                onClick={() => handleBookNow()}
                className="btn-saf-blue px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-transform hover:scale-105 active:scale-95 flex items-center space-x-1.5"
              >
                <span>Book Stays</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#111b29] hover:text-[#2d66a1] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

            <nav className="flex flex-col space-y-1.5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#111b29] p-2 rounded-xl hover:bg-[#fff6e6] transition-colors"
              >
                Home
              </Link>

              <div className="pt-2 text-[11px] font-bold uppercase tracking-wider text-[#999] px-2">
                Our Private Estates
              </div>
              {RESORTS_DATA.map((resort) => (
                <Link
                  key={resort.id}
                  href={`/resorts/${resort.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-[#fff6e6] text-sm text-[#111b29] transition-colors"
                >
                  <div>
                    <div className="font-serif font-medium">{resort.name}</div>
                    <div className="text-[11px] text-[#666]">{resort.location}</div>
                  </div>
                  <span className="text-xs font-semibold text-[#2d66a1]">{resort.startingPrice}</span>
                </Link>
              ))}

              <div className="pt-3 text-[11px] font-bold uppercase tracking-wider text-[#999] px-2">
                Explore More
              </div>
              <Link
                href="/experiences"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#111b29] p-2 rounded-xl hover:bg-[#fff6e6] transition-colors"
              >
                Curated Experiences
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#111b29] p-2 rounded-xl hover:bg-[#fff6e6] transition-colors"
              >
                Photo Gallery
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#111b29] p-2 rounded-xl hover:bg-[#fff6e6] transition-colors"
              >
                Contact & Reservations
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#ece7de] space-y-3">
            <button
              onClick={() => handleBookNow()}
              className="btn-saf-blue w-full py-3.5 text-center text-sm shadow-md"
            >
              Book Stays
            </button>
            <a
              href="tel:+919526459920"
              className="flex items-center justify-center space-x-2 w-full py-2.5 text-xs text-[#111b29] border border-[#ece7de] rounded-full hover:bg-slate-50 font-medium"
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
