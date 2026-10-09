"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
  size?: "default" | "large";
}

export default function BrandLogo({
  variant = "dark",
  className = "",
  onClick,
  size = "default"
}: BrandLogoProps) {
  const isLight = variant === "light";
  const isLarge = size === "large";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group flex items-center space-x-3 focus:outline-none transition-transform active:scale-[0.98] ${className}`}
    >
      {/* Official Wildvill Brand Logo Emblem */}
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl sm:rounded-2xl transition-transform duration-300 group-hover:scale-105 shadow-xs ${
          isLight
            ? "border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            : "border border-[#164230]/25 shadow-[0_2px_10px_rgba(22,66,48,0.12)]"
        } ${isLarge ? "w-14 h-14 sm:w-16 sm:h-16" : "w-10 h-10 sm:w-12 sm:h-12"}`}
      >
        <Image
          src="/images/logo/wildvill-logo.jpg"
          alt="Wildvill Stays Official Logo"
          fill
          sizes="(max-width: 640px) 48px, 64px"
          className="object-cover"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.16em] font-semibold leading-none ${
            isLarge ? "text-lg sm:text-2xl" : "text-base sm:text-lg"
          } ${isLight ? "text-white" : "text-[#1d2b1f]"}`}
        >
          WILDVILL STAYS
        </span>
        <span
          className={`tracking-[0.24em] uppercase font-medium mt-1 leading-none ${
            isLarge ? "text-[9px] sm:text-[10px]" : "text-[8px] sm:text-[9px]"
          } ${isLight ? "text-[#c2ab87]" : "text-[#706d64]"}`}
        >
          OOTY &nbsp;•&nbsp; COORG &nbsp;•&nbsp; WAYANAD
        </span>
      </div>
    </Link>
  );
}
