// components/HoverArrow.tsx
"use client";
import React from "react";

type Props = {
  size?: number; // base size in px (default 10)
  color?: string; // CSS color for stroke (default currentColor)
  className?: string;
  title?: string; // optional accessible title
};

export default function HoverArrow({
  size = 10,
  color = "currentColor",
  className = "",
  title,
}: Props) {
  const strokeWidth = Math.max(1, size * 0.12); // keep stroke proportional

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={`HoverArrow ${className}`}
      style={{ verticalAlign: "middle", color }}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <g
        fillRule="evenodd"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="HoverArrow__linePath" d="M0 5h7" />
        <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" />
      </g>
      <style jsx>{`
        .HoverArrow {
          display: inline-block;
          transition: transform 220ms cubic-bezier(0.2, 0.9, 0.2, 1);
          transform-origin: center;
        }
        .HoverArrow__tipPath {
          stroke-dasharray: 12;
          stroke-dashoffset: 12;
          transition: stroke-dashoffset 260ms ease, opacity 200ms ease;
          opacity: 0.9;
        }
        /* When parent link is hovered (use .has-arrow-hover on the parent or hover the svg directly) */
        .HoverArrow:hover {
          transform: translateX(4px);
        }
        .HoverArrow:hover .HoverArrow__tipPath {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      `}</style>
    </svg>
  );
}
