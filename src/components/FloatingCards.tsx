"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

type TaskCard = {
  company: string;
  description: string;
  tags: string[];
  time: string;
  rate: string;
  total: string;
  source: string;
};

const cards: TaskCard[] = [
  {
    company: "Johnson Corp",
    description:
      "Email thread analysis regarding liability clauses in manufacturing agreement",
    tags: ["Contract Review #2024-001", "Legal Research"],
    time: "0.8h",
    rate: "$450",
    total: "$360",
    source: "Gmail - thread with 8 messages",
  },
  {
    company: "Smith & Associates",
    description:
      "Strategy session - Discovery motion preparation and witness interviews",
    tags: ["Litigation Support #2024-002", "Client Meeting"],
    time: "2.5h",
    rate: "$450",
    total: "$1125",
    source: "Calendar - Zoom meeting",
  },
  {
    company: "Davis Legal Group",
    description:
      "Draft and review of asset purchase agreement - multiple revisions",
    tags: ["Corporate Merger #2024-003", "Document Drafting"],
    time: "3.2h",
    rate: "$450",
    total: "$1440",
    source: "Word Document - tracked changes",
  },
  {
    company: "Wilson Industries",
    description:
      "Client consultation on trademark filing and brand protection strategy",
    tags: ["IP Protection #2024-004", "Client Consultation"],
    time: "1.5h",
    rate: "$450",
    total: "$675",
    source: "Phone call - auto-detected",
  },
  {
    company: "TechStart Inc",
    description: "Research on SAFE agreements and investor rights provisions",
    tags: ["Funding Round #2024-005", "Legal Research"],
    time: "1.8h",
    rate: "$450",
    total: "$810",
    source: "Browser activity",
  },
  {
    company: "Greenfield Partners",
    description:
      "Negotiation meeting with sellers and review of due diligence checklist",
    tags: ["Real Estate Acquisition #2024-006", "Negotiation"],
    time: "2.0h",
    rate: "$450",
    total: "$900",
    source: "Calendar - Teams meeting",
  },
];

export default function FloatingCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000); // change card every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-20 flex items-center justify-center h-full  ">
      <div className="relative w-full max-w-6xl flex items-center justify-center h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={clsx(
              "absolute w-80 cursor-pointer transition-all duration-2000 ease-in-out bg-white hover:shadow-2xl group",
              idx === activeIndex
                ? "opacity-100 z-20 scale-100"
                : "opacity-0 z-10 scale-95 translate-y-8"
            )}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-lg p-2">
              <div className="bg-white dark:bg-card border border-border shadow-md rounded-lg p-5 w-80 mx-auto flex flex-col gap-4 h-96 justify-center">
                {/* Company + Description */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground !text-base">
                      {card.company}
                    </span>
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-muted-foreground !text-xs">
                      {card.description}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex mt-1 flex-col gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-muted-foreground !text-xs py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-dashed border-border my-2" />

                {/* Time + Rate */}
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span className="text-foreground">{card.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rate</span>
                    <span className="text-foreground">{card.rate}</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-border my-2" />

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold text-muted-foreground">
                    Total
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    {card.total}
                  </span>
                </div>

                {/* Source */}
                <div className="text-xs text-muted-foreground/60 text-center mt-2">
                  Source: {card.source}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
