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
      <div className="relative w-full max-w-6xl h-full">
        {/* left & right solid borders (inside the max width) */}
        <div className="absolute left-0 top-0 h-full border-l border-gray-200" />
        <div className="absolute right-0 top-0 h-full border-r border-gray-200" />

        {/* inner evenly-spaced lines */}
        {Array.from({ length: lines }).map((_, i) => {
          const leftPercent = ((i + 1) / (lines + 1)) * 100;
          return (
            <div
              key={i}
              className="absolute hidden md:block top-0 h-full border-l border-dashed border-gray-200"
              style={{ left: `${leftPercent}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}
