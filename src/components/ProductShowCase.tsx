"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STEPS = [
  {
    id: "find work",
    title: "Find Work You Already Did",
    copy: "Connect Google/Microsoft. Sque surfaces billable work from email, calendar, files, and call notes — with clear narratives.",
    cta: "Start with Billing →",
    seeAlso: [
      "Invoicing for invoice creation, collection, and tracking",
      "Usage-based billing for metering, billing, and insights",
      "Sigma for custom revenue reports—no SQL required",
    ],
  },
  {
    id: "approve",
    title: "Approve & Check",
    copy: "Review drafts, apply categories, and approve in one flow. Automated checks catch issues before you send.",
    cta: "Start with Connect →",
    seeAlso: [
      "Terminal for custom in-person payments",
      "Instant Payouts for fast payments to users",
      "Payment Elements for customizable UIs",
    ],
  },
  {
    id: "invoice",
    title: "Invoice & Collect",
    copy: "Send invoices with a downloadable proof bundle. Track payments and reduce days-to-cash by 7–12 days.",
    cta: "Start with Issuing →",
    seeAlso: [
      "Treasury for financial accounts",
      "Capital for offering fast, flexible financing",
      "Connect for powering platform payments",
    ],
  },
];

export default function ProductShowcase() {
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
    <section className="bg-[#f6f9fc] py-24 px-4 lg:px-22">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center lg:text-left mb-20">
        <h4 className="text-sm font-semibold text-purple-600 mb-2">
          How Sque Works
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Find Work → Approve → Invoice → Paid
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl ">
          Sque is the Legal Revenue & Operating System — it captures work
          automatically, gives you downloadable proof, and runs billing as your
          system of record.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-6">
        {/* Video */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-auto rounded-lg"
            playsInline
            muted
            autoPlay
            loop
            controls
            preload="metadata"
            poster="/images/sque.png"
            src="https://storage.googleapis.com/sque_storage/videos/Screen%20Recording%202025-08-26%20at%209.28.54%E2%80%AFAM.mov"
          >
            <source
              src="https://storage.googleapis.com/sque_storage/videos/Screen%20Recording%202025-08-26%20at%209.28.54%E2%80%AFAM.mp4"
              type="video/mp4"
            />
            <source
              src="https://storage.googleapis.com/sque_storage/videos/Screen%20Recording%202025-08-26%20at%209.28.54%E2%80%AFAM.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Cards */}
        <div className="relative">
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white h-50 rounded-xl shadow-sm  border-t-4 border-[#635bff] p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
