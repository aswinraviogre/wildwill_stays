"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/resortsData";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200 relative text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-navy-900" />
            <span className="text-xs font-semibold tracking-[0.2em] text-navy-950 uppercase">
              Guest Impressions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Unforgettable Stories from Our Guests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg flex flex-col justify-between relative group hover:border-navy-950 transition-all hover:shadow-xl"
            >
              <Quote className="w-10 h-10 text-navy-100 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex space-x-1 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-light">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 relative z-10">
                <div className="font-semibold text-slate-900 text-base">
                  {review.name}
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 mt-1">
                  <span className="text-navy-900 font-semibold">{review.stayedAt}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
