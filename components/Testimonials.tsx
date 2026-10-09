"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/resortsData";
import { Star, CheckCircle, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#E8E2D5] relative text-[#1d2b1f]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-1.5 text-[#b58742] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Guest Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#1d2b1f] tracking-tight">
            Guest Stories &amp; Memories
          </h2>
          <p className="text-[#656e63] text-xs sm:text-sm mt-2 font-light">
            Read authentic reviews from families, couples, and travelers who experienced our secluded retreats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="saf-card p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#c29053] transition-all bg-white"
            >
              <div className="space-y-4">
                {/* 5-Star Rating in Warm Gold */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1 text-[#c29053]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c29053]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center space-x-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified Stay</span>
                  </span>
                </div>

                <p className="text-[#3a443a] text-xs sm:text-sm leading-relaxed italic font-light">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E8E2D5] flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#c29053]/40 flex items-center justify-center font-serif font-bold text-sm text-[#c29053]">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#1d2b1f] text-sm truncate">
                    {review.name}
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#737a71]">
                    <span className="text-[#b58742] font-medium truncate">{review.stayedAt}</span>
                    <span className="shrink-0">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
