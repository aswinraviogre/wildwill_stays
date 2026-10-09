"use client";

import React from "react";
import Link from "next/link";
import { WAYANAD_HIGHLIGHTS } from "@/data/resortsData";
import { Compass, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function CuratedExperiences() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative text-[#1d2b1f] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[#b58742] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immersive Kerala Escapes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#1d2b1f] tracking-tight">
              Curated Wayanad Experiences
            </h2>
            <p className="text-[#656e63] mt-1.5 text-xs sm:text-sm max-w-xl font-light">
              Tailor-made itineraries guided by our resident naturalists — from organic coffee tastings to secret freshwater stream treks.
            </p>
          </div>

          <Link
            href="/experiences"
            className="group inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#1d2b1f] hover:text-[#c29053] transition-colors"
          >
            <span>View All Experiences</span>
            <ArrowRight className="w-4 h-4 text-[#1d2b1f] group-hover:text-[#c29053] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WAYANAD_HIGHLIGHTS.map((exp, idx) => (
            <div
              key={idx}
              className="saf-card overflow-hidden group flex flex-col justify-end p-6 h-[380px] relative border border-[#E8E2D5]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${exp.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2b1f] via-[#1b2b1f]/60 to-black/20" />

              {/* Distance Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[10px] font-semibold bg-white/95 backdrop-blur-md text-[#1d2b1f] shadow-xs">
                  <MapPin className="w-3 h-3 text-[#c29053]" />
                  <span>{exp.distance}</span>
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2 text-white">
                <h3 className="text-lg sm:text-xl font-serif font-medium group-hover:text-[#e2ba84] transition-colors leading-snug">
                  {exp.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
