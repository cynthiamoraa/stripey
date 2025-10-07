import React from "react";

interface GuidesProps {
  lines?: number; // number of inner vertical lines (3 for 4 columns)
  className?: string;
  color?: string; // 👈 new color prop
}

export default function Guides({
  lines = 3,
  className = "",
  color = "#e5e7eb", // default = Tailwind gray-200
}: GuidesProps) {
  return (
    // this wrapper is absolute and must be inside a relative container (the section/container)
    <div
      className={`pointer-events-none absolute inset-0 flex justify-center ${className}`}
      aria-hidden
    >
      <div className="relative w-full  h-full">
        {/* ✅ Left & right solid borders (inside the max width) */}
        <div
          className="absolute l left-4 lg:left-22 top-0 h-full border-l"
          style={{ borderColor: color }}
        />
        <div
          className="absolute right-4 lg:right-22 top-0 h-full border-r"
          style={{ borderColor: color }}
        />

        {/* ✅ Inner evenly spaced dashed lines */}
        {Array.from({ length: lines }).map((_, i) => {
          const leftPercent = ((i + 1) / (lines + 1)) * 100;
          return (
            <div
              key={i}
              className="absolute top-0 h-full border-l border-dashed hidden md:block"
              style={{
                left: `${leftPercent}%`,
                borderColor: color, // 👈 this now takes full effect
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
