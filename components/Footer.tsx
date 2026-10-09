"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Sparkles, ArrowRight, MessageSquare } from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";
import { CONTACT_CONFIG, buildWhatsAppUrl } from "@/constants/contact";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#172419] text-[#e0dad0] pt-16 pb-28 sm:pb-14 px-4 sm:px-6 lg:px-8 border-t border-[#2d3f30]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" />

            <p className="text-xs sm:text-sm text-[#b8b0a2] max-w-sm leading-relaxed font-light">
              Wildvill Stays curates secluded private retreats across Wayanad, Ooty, and Coorg. Experience glass chalets, private pool villas, and misty nature trails managed with thoughtful personalized hospitality.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center space-x-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href={CONTACT_CONFIG.telLink}
                className="px-4 py-2 rounded-full border border-white/20 text-xs font-semibold text-white hover:border-[#c29053] transition-colors"
              >
                Call: {CONTACT_CONFIG.displayPhone}
              </a>
            </div>
          </div>

          {/* Col 3: Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-[0.2em] text-[#e8d5b5]">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#aba395]">
              <li>
                <a href="#destinations" className="hover:text-[#e8d5b5] transition-colors">
                  Wayanad, Kerala (Available)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#e8d5b5] transition-colors">
                  Ooty, Tamil Nadu (Coming Soon!)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#e8d5b5] transition-colors">
                  Coorg, Karnataka (Coming Soon!)
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e8d5b5] transition-colors">
                  Route Guide &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: The Villas & Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-[0.2em] text-[#e8d5b5]">
              Signature Stays
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#aba395]">
              {RESORTS_DATA.map((r) => (
                <li key={r.id}>
                  <Link href={`/resorts/${r.slug}`} className="hover:text-[#e8d5b5] transition-colors">
                    {r.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/experiences" className="hover:text-[#e8d5b5] transition-colors">
                  Curated Excursions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#e8d5b5] transition-colors">
                  Photo Lookbook
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-[0.2em] text-[#e8d5b5]">
              Direct Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-[#aba395]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#c29053] shrink-0 mt-0.5" />
                <span>Wayanad, Kerala, South India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#c29053] shrink-0" />
                <span>{CONTACT_CONFIG.displayPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#c29053] shrink-0" />
                <span>{CONTACT_CONFIG.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c8477] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Wildvill Stays. All rights reserved. Handcrafted private stays in Ooty, Coorg &amp; Wayanad.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-[#e8d5b5] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#e8d5b5] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
