"use client";

import Image from "next/image";
import { getProjectLogo } from "@/lib/project-logos";

interface ProjectLogoBadgeProps {
  item: {
    logoPath?: string | null;
    logoAlt?: string | null;
    client?: string;
    location?: string;
    county?: string;
    title?: string;
  };
  className?: string;
  size?: "default" | "large";
}

export function ProjectLogoBadge({
  item,
  className = "",
  size = "default",
}: ProjectLogoBadgeProps) {
  const logoInfo = getProjectLogo(item);

  if (logoInfo && logoInfo.src) {
    const isLarge = size === "large";
    const dimensionsClass = isLarge
      ? "w-20 h-20 md:w-24 md:h-24"
      : "w-14 h-14 md:w-16 md:h-16";

    return (
      <div
        className={`relative bg-transparent border-0 shadow-none flex items-center justify-center shrink-0 overflow-visible transition-all duration-300 ${dimensionsClass} ${className}`}
      >
        <Image
          src={logoInfo.src}
          alt={logoInfo.alt}
          width={isLarge ? 128 : 80}
          height={isLarge ? 128 : 80}
          className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          unoptimized={logoInfo.src.endsWith(".svg")}
        />
      </div>
    );
  }

  // If logo doesn't exist, do not visualize anything
  return null;
}
