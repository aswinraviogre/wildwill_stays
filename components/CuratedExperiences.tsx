"use client";

import React from "react";
import Link from "next/link";
import { WAYANAD_HIGHLIGHTS } from "@/data/resortsData";
import { Compass, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function CuratedExperiences() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative text-[#111b29] border-b border-[#ece7de]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[#d98e0e] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#fba919]" />
              <span>Immersive Kerala Escapes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#111b29] tracking-tight">
              Curated Wayanad Experiences
            </h2>
            <p className="text-[#666666] mt-1.5 text-xs sm:text-sm max-w-xl font-light">
              Tailor-made itineraries guided by our resident naturalists — from organic coffee tastings to secret freshwater stream treks.
            </p>
          </div>

          <Link
            href="/experiences"
            className="group inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#111b29] hover:text-[#2d66a1] transition-colors"
          >
            <span>View All Experiences</span>
            <ArrowRight className="w-4 h-4 text-[#111b29] group-hover:text-[#2d66a1] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WAYANAD_HIGHLIGHTS.map((exp, idx) => (
            <div
              key={idx}
              className="saf-card overflow-hidden group flex flex-col justify-end p-6 h-[380px] relative border border-[#ece7de]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${exp.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111b29] via-[#111b29]/60 to-black/20" />

              {/* Distance Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[10px] font-semibold bg-white/95 backdrop-blur-md text-[#111b29] shadow-sm">
                  <MapPin className="w-3 h-3 text-[#fba919]" />
                  <span>{exp.distance}</span>
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2 text-white">
                <h3 className="text-lg sm:text-xl font-serif font-medium group-hover:text-[#fba919] transition-colors leading-snug">
                  {exp.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-3 leading-relaxed font-light">
                  {exp.description}
                </p>
                <div className="pt-2 flex items-center text-xs font-medium text-[#fba919]">
                  <span>Discover Activity</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

