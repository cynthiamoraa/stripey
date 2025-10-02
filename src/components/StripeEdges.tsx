"use client";

export default function StripeEdges() {
  return (
    <div className="relative w-full bg-gray-50 overflow-hidden">
      {/* Left stripes */}
      <div className="absolute top-0 left-0 w-40 h-[90px] transform -skew-y-6">
        <div className="bg-cyan-400 h-5 w-full mb-1" />
        <div className="bg-blue-600 h-5 w-full mb-1" />
        <div className="bg-purple-600 h-5 w-full" />
      </div>

      {/* Right stripes */}
      <div className="absolute top-0 right-0 w-40 h-[90px] transform -skew-y-6">
        <div className="bg-cyan-400 h-5 w-full mb-1" />
        <div className="bg-blue-600 h-5 w-full mb-1" />
        <div className="bg-purple-600 h-5 w-full" />
      </div>

      {/* Section content */}
      <div className="relative max-w-6xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Section Title</h2>
        <p className="text-lg text-gray-600">
          Content goes here with background angled stripes on the sides.
        </p>
      </div>
    </div>
  );
}
