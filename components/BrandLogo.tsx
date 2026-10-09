"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  onClick?: () => void;
  size?: "default" | "large";
  variant?: "dark" | "light";
  layout?: "horizontal" | "stacked";
}

export default function BrandLogo({
  className = "",
  onClick,
  size = "default",
  layout = "horizontal"
}: BrandLogoProps) {
  const isLarge = size === "large";
  const isStacked = layout === "stacked";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group flex items-center focus:outline-none transition-transform active:scale-[0.98] ${className}`}
      aria-label="Wildvill Stays Home"
    >
      {isStacked ? (
        <div
          className={`relative transition-transform duration-300 group-hover:scale-105 shrink-0 ${
            isLarge
              ? "w-20 h-20 sm:w-24 sm:h-24"
              : "w-12 h-12 sm:w-14 sm:h-14"
          }`}
        >
          <Image
            src="/images/logo/wildvill-logo.jpg"
            alt="Wildvill Stays Official Logo"
            fill
            priority
            unoptimized
            className="object-contain rounded-2xl"
          />
        </div>
      ) : (
        <div
          className={`relative transition-transform duration-300 group-hover:scale-105 shrink-0 ${
            isLarge
              ? "h-14 sm:h-16 w-44 sm:w-52"
              : "h-10 sm:h-12 w-32 sm:w-36"
          }`}
        >
          <Image
            src="/images/logo/wildvill-logo-horizontal-transparent.png"
            alt="Wildvill Stays Official Logo"
            fill
            priority
            unoptimized
            className="object-contain object-left"
          />
        </div>
      )}
    </Link>
  );
}
