"use client";
import { useState } from "react";
import Guides from "./Guides";

const faqs = [
  {
    q: "How fast will we see ROI?",
    a: "Many firms cover the subscription within the first billing cycle; results vary by practice mix and data quality.",
  },
  {
    q: "Does Sque replace our practice management system?",
    a: "Sque focuses on revenue and proof. Many firms run Sque alongside existing tools, then consolidate as Sque becomes the billing system of record.",
  },
  {
    q: "What about data security?",
    a: "SOC 2 program in progress. Your data remains yours; opt-in governs any model improvement. See our Privacy and Trust Center.",
  },
  {
    q: "Do you integrate with QuickBooks/Xero?",
    a: "CSV exports are available now; direct integrations are on the roadmap.",
  },
  {
    q: "Can we try before committing?",
    a: "Yes. The free trial includes automation actions so you see value immediately. No credit card required.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white relative py-16 px-4 lg:px-22">
      <Guides />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-200 p-4">
              {/* Question Row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center py-4 text-left"
              >
                <span className="text-3xl font-bold text-cyan-400 w-6">
                  {openIndex === i ? "–" : "+"}
                </span>
                <span className="ml-3 text-lg font-bold text-gray-800">
                  {item.q}
                </span>
              </button>

              {/* Answer (directly below question) */}
              {openIndex === i && (
                <div className="pl-9 pb-4 text-gray-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
