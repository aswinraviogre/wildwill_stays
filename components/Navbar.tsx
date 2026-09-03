"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Phone, ChevronDown } from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";

interface NavbarProps {
  onOpenBooking?: (resortSlug?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resortsDropdownOpen, setResortsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy-950 ${
          isScrolled
            ? "py-3 shadow-xl shadow-navy-950/20 border-b border-white/10"
            : "py-4.5 border-b border-navy-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Link
              href="/"
              className="group flex flex-col items-start focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-serif tracking-[0.25em] text-white font-bold group-hover:text-sky-300 transition-colors">
                  WILDVILL
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              </div>
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-slate-300 uppercase font-light">
                Luxury Stays • Wayanad
              </span>
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {/* Resorts Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setResortsDropdownOpen(true)}
                onMouseLeave={() => setResortsDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1.5 text-sm font-medium text-slate-200 hover:text-white py-2 transition-colors">
                  <span>Our Retreats</span>
                  <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 w-80 pt-2 transition-all duration-300 origin-top ${
                    resortsDropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="bg-navy-900 p-3 rounded-2xl border border-white/15 shadow-2xl backdrop-blur-2xl space-y-1">
                    {RESORTS_DATA.map((resort) => (
                      <Link
                        key={resort.id}
                        href={`/resorts/${resort.slug}`}
                        className="block p-3 rounded-xl hover:bg-navy-800 transition-all group/item"
                      >
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                          {resort.badge}
                        </div>
                        <div className="text-sm font-semibold text-white group-hover/item:text-sky-300 flex items-center justify-between">
                          <span>{resort.name.replace("Wildvill ", "")}</span>
                          <span className="text-xs text-slate-400 font-normal">From {resort.startingPrice}</span>
                        </div>
                        <div className="text-xs text-slate-400 truncate mt-0.5">
                          {resort.location}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/resorts/mist-meadows"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/resorts/mist-meadows"
                    ? "text-sky-400 font-semibold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                Mist & Meadows
              </Link>

              <Link
                href="/resorts/whispering-woods"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/resorts/whispering-woods"
                    ? "text-emerald-400 font-semibold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                Whispering Woods
              </Link>

              <Link
                href="/resorts/cloud-peak"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/resorts/cloud-peak"
                    ? "text-sky-400 font-semibold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                Cloud Peak
              </Link>

              <Link
                href="/experiences"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/experiences"
                    ? "text-sky-400 font-semibold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                Experiences
              </Link>

              <Link
                href="/gallery"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/gallery"
                    ? "text-sky-400 font-semibold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/contact"
                    ? "text-sky-400 font-semibold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Sticky Book Now CTA & Mobile Trigger */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleBookNow()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden text-xs sm:text-sm font-semibold tracking-wider text-navy-950 uppercase rounded-full bg-white hover:bg-sky-50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-navy-950" />
                  <span>Book Stay</span>
                </span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-navy-950 p-6 pt-20 flex flex-col justify-between border-l border-white/10 transition-transform duration-300 ease-out overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-sky-400 font-semibold">
                  Wildvill Luxury Stays
                </span>
                <p className="text-sm text-slate-300 mt-0.5">Wayanad Retreat Collection</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-100 hover:text-sky-400 transition-colors py-1"
              >
                Home Overview
              </Link>
              <div className="pt-2 pb-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                The Retreats
              </div>
              <Link
                href="/resorts/mist-meadows"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors flex items-center justify-between p-2 rounded-xl hover:bg-white/5"
              >
                <span>Mist & Meadows</span>
                <span className="text-xs px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Valley</span>
              </Link>
              <Link
                href="/resorts/whispering-woods"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors flex items-center justify-between p-2 rounded-xl hover:bg-white/5"
              >
                <span>Whispering Woods</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Forest Glasshouse</span>
              </Link>
              <Link
                href="/resorts/cloud-peak"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors flex items-center justify-between p-2 rounded-xl hover:bg-white/5"
              >
                <span>Cloud Peak</span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">Cliff Edge</span>
              </Link>

              <div className="pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Discover
              </div>
              <Link
                href="/experiences"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors py-1"
              >
                Wayanad Experiences
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors py-1"
              >
                Photo & Video Gallery
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-sky-400 transition-colors py-1"
              >
                Contact & Location
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => handleBookNow()}
              className="w-full py-3 bg-white text-navy-950 hover:bg-slate-100 font-semibold rounded-xl text-center shadow-lg transition-all"
            >
              Book Your Stay
            </button>
            <a
              href="tel:+919526459920"
              className="flex items-center justify-center space-x-2 w-full py-2.5 text-xs text-slate-300 hover:text-white border border-white/10 rounded-xl"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Concierge: +91 95264 59920</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
