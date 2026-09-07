"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Sparkles, ArrowRight } from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";

export default function Footer() {
  return (
    <footer className="bg-[#111b29] text-slate-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-1.5">
                <span className="text-2xl font-serif tracking-[0.18em] text-white font-bold">
                  WILDVILL
                </span>
                <span className="w-2 h-2 rounded-full bg-[#fba919]" />
              </div>
              <span className="text-[10px] tracking-[0.28em] text-slate-400 uppercase font-medium">
                LUXURY VILLAS & ESTATES • WAYANAD
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-light">
              Wildvill Stays curates secluded private estates in Wayanad, Kerala. Featuring private heated jacuzzis, cantilevered forest canopies, and cliffside infinity pools with 5-star private butler hospitality.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://wa.me/919526459920"
                target="_blank"
                rel="noreferrer"
                className="btn-saffron px-4 py-2 text-xs flex items-center space-x-2"
              >
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href="tel:+919526459920"
                className="px-4 py-2 rounded-full border border-white/20 text-xs font-semibold text-white hover:border-[#fba919] transition-colors"
              >
                Call: +91 95264 59920
              </a>
            </div>
          </div>

          {/* Col 3: Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/resorts/mist-meadows" className="hover:text-[#fba919] transition-colors">
                  Meppadi Coffee Valley
                </Link>
              </li>
              <li>
                <Link href="/resorts/whispering-woods" className="hover:text-[#fba919] transition-colors">
                  Chembra Foothills
                </Link>
              </li>
              <li>
                <Link href="/resorts/cloud-peak" className="hover:text-[#fba919] transition-colors">
                  Vythiri Cloud Heights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#fba919] transition-colors">
                  How to Reach & Route Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: The Villas & Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Signature Stays
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {RESORTS_DATA.map((r) => (
                <li key={r.id}>
                  <Link href={`/resorts/${r.slug}`} className="hover:text-[#fba919] transition-colors">
                    {r.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/experiences" className="hover:text-[#fba919] transition-colors">
                  Curated Excursions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#fba919] transition-colors">
                  Photo & Video Lookbook
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Booking Assurance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Direct Booking Perks
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fba919]" />
                <span>Complimentary Plantation High Tea</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fba919]" />
                <span>Dedicated 24/7 Private Butler</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fba919]" />
                <span>Zero Booking Fees & Best Rates</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fba919]" />
                <span>Custom Farm-to-Table Dining</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Wildvill Stays Private Limited. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Hospitality</Link>
            <span>•</span>
            <span className="text-[#fba919]">Kerala Tourism Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

