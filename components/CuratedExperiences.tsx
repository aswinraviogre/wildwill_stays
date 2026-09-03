"use client";

import React from "react";
import Link from "next/link";
import { WAYANAD_HIGHLIGHTS } from "@/data/resortsData";
import { Compass, Sparkles, MapPin, ArrowRight } from "lucide-react";

export default function CuratedExperiences() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
            <Compass className="w-3.5 h-3.5 text-navy-900" />
            <span className="text-xs font-semibold tracking-[0.2em] text-navy-950 uppercase">
              Wayanad Immersion
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Curated Local Experiences
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Beyond the luxury of your private villa lies the untouched wilderness of Wayanad. Our dedicated resident naturalists curate bespoke private excursions for our guests.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WAYANAD_HIGHLIGHTS.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 flex flex-col justify-end p-6 h-[400px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${exp.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />

              {/* Distance Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md text-sky-300 border border-white/10">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.distance}</span>
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2 text-white">
                <h3 className="text-xl font-serif font-bold group-hover:text-sky-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/experiences"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-navy-950 hover:bg-navy-900 text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Explore All Wayanad Itineraries</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
