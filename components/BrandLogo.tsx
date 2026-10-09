"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
}

export default function BrandLogo({
  variant = "dark",
  className = "",
  onClick
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group flex items-center space-x-3 focus:outline-none transition-transform active:scale-[0.98] ${className}`}
    >
      {/* Botanical Leaf Motif matching reference image */}
      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-7 h-7 sm:w-8 sm:h-8 ${
            isLight ? "text-[#e8d5b5]" : "text-[#233827]"
          }`}
        >
          {/* Main botanical stem */}
          <path
            d="M8 26C11.5 21.5 16 15 23 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Top Leaf */}
          <path
            d="M23 8C20 8.5 17.5 10 16 12C18.5 12.5 21 11.5 23 8Z"
            fill="currentColor"
          />
          {/* Right Upper Leaf */}
          <path
            d="M21 11C23.5 11.5 26 13.5 26.5 16.5C23.5 16 21.5 14 21 11Z"
            fill="currentColor"
          />
          {/* Left Middle Leaf */}
          <path
            d="M17 14C14 14.5 12 16.5 11.5 19.5C14.5 19 16.5 17 17 14Z"
            fill="currentColor"
          />
          {/* Right Lower Leaf */}
          <path
            d="M15 17C17.5 17.5 19.5 19.5 20 22C17.5 21.8 15.5 20 15 17Z"
            fill="currentColor"
          />
          {/* Left Lower Small Leaf */}
          <path
            d="M12 20.5C9.5 21 8 22.5 7.5 24.5C9.8 24.2 11.2 22.8 12 20.5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`text-lg sm:text-xl font-serif tracking-[0.16em] font-medium leading-none ${
            isLight ? "text-white" : "text-[#1d2b1f]"
          }`}
        >
          WILDVILL STAYS
        </span>
        <span
          className={`text-[8.5px] sm:text-[9.5px] tracking-[0.24em] uppercase font-medium mt-1 leading-none ${
            isLight ? "text-[#c2ab87]" : "text-[#706d64]"
          }`}
        >
          OOTY &nbsp;•&nbsp; COORG &nbsp;•&nbsp; WAYANAD
        </span>
      </div>
    </Link>
  );
}
