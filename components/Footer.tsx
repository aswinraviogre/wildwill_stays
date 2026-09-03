"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { RESORTS_DATA } from "@/data/resortsData";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Col 1 & 2: Brand & Description (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-serif tracking-[0.25em] text-white font-bold">
                  WILDVILL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              </div>
              <span className="text-[10px] tracking-[0.35em] text-slate-400 uppercase font-light">
                Luxury Stays • Wayanad
              </span>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-light">
              A curated boutique collection of luxury sanctuaries in Wayanad, Kerala. Uniting organic valley coffee estates, cantilevered glasshouse forest chalets, and dramatic high-altitude cliffside havens.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://wa.me/919526459920"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-300 hover:text-white hover:bg-emerald-600 transition-all"
                aria-label="WhatsApp Concierge"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: The Resorts */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              The Retreats
            </h4>
            <ul className="space-y-2.5 text-sm">
              {RESORTS_DATA.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/resorts/${r.slug}`}
                    className="hover:text-sky-300 transition-colors block"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/gallery" className="hover:text-sky-300 transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-sky-300 transition-colors">
                  Wayanad Excursions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Information
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-sky-300 transition-colors">
                  Location & Driving Routes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-300 transition-colors">
                  Guest Concierge & FAQs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sky-300 transition-colors">
                  Property Lookbook
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-sky-300 transition-colors">
                  Curated Itineraries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Concierge Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  Meppadi, Chembra & Vythiri, Wayanad, Kerala 673577
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+919526459920" className="text-xs text-slate-300 hover:text-white">
                  +91 95264 59920
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:reservations@wildvill.com" className="text-xs text-slate-300 hover:text-white">
                  reservations@wildvill.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Wildvill Stays. All rights reserved. Handcrafted boutique luxury in Wayanad.
          </div>
          <div className="flex items-center space-x-4">
            <span>Direct Concierge: +91 95264 59920</span>
            <span>•</span>
            <span>Kerala Tourism Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
