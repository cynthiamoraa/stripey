import React from "react";

interface GridLinesProps {
  lines?: number;
  color?: string; // tailwind color classes
  dashed?: boolean;
  className?: string;
}

const GridLines: React.FC<GridLinesProps> = ({
  lines = 5,
  color = "border-amber-400",
  dashed = true,
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="h-full w-full flex justify-between">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`border-l ${
              dashed ? "border-dashed" : "border-solid"
            } ${color} h-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default GridLines;
