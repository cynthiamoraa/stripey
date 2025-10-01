// components/BusinessSupport.tsx
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "AI",
    description:
      "Stripe supports businesses across the AI ecosystem—from usage-based billing for AI assistants like Perplexity to premium subscriptions for infrastructure providers like OpenAI.",
    logos: ["OpenAI", "Cursor", "Anthropic"],
  },
  {
    title: "SaaS",
    description:
      "Quickly launch and grow recurring revenue with a unified platform for payments, subscriptions, invoicing, tax, accounting, and more.",
    logos: ["Slack", "Twilio"],
  },
  {
    title: "Marketplaces",
    description:
      "Get everything you need to manage multi-party payments and payouts while ensuring compliance and tax reporting.",
    logos: ["Lyft", "Shopify"],
  },
];

export default function BusinessSupport() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScroll =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Support for any business type
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          From global AI companies to category-defining marketplaces, successful
          businesses across industries grow and scale with Stripe.
        </p>

        {/* Scroll Controls */}
        <div className="relative mt-10">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="min-w-[320px] md:min-w-[380px] bg-white rounded-xl shadow-sm border border-gray-200 p-6 snap-center"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{card.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-purple-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
                <div className="border-t mt-6 pt-4 flex gap-6 flex-wrap">
                  {card.logos.map((logo, i) => (
                    <span key={i} className="text-gray-800 font-medium">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Left/Right Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white border shadow-md p-2 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-purple-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white border shadow-md p-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-purple-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
