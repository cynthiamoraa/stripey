"use client";

import { useState } from "react";
import GlobeCanvas from "./globe";

// Map statuses to colors
const statusColors: Record<string, string> = {
  Now: "bg-green-100 text-green-700",
  Pro: "bg-purple-100 text-purple-700",
  "Pro Early Access": "bg-purple-100 text-purple-700",
  "Early Access": "bg-yellow-100 text-yellow-700",
  Roadmap: "bg-orange-100 text-orange-700",
  "Enterprise Early Access": "bg-blue-100 text-blue-700",
  "Now / Early Access": "bg-green-100 text-green-700",
};

export default function PracticeHeroSection() {
  const tabs = [
    "Practice",
    "Use Cases",
    "Firm Size",
    "Roles",
    "What Sque Does",
  ];

  const tabContent: Record<
    string,
    {
      pain?: string;
      sque?: string[];
      proof?: string;
      tags?: string[];
      sections?: any[];
    }
  > = {
    Practice: {
      pain: "Billable work hides in email, calls, and review — hours go unbilled...",
      sque: [
        "Auto-finds billable work and drafts clear entries.",
        "One-click approvals with clear categories and an activity log.",
        "Pre-submission checks to prevent rejected e-bills.",
      ],
      proof:
        "First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      tags: [
        "Litigation",
        "Corporate/Transactional",
        "Immigration",
        "Family",
        "PI/Contingency",
        "Healthcare/Insurance Defense",
      ],
    },
    "Use Cases": {
      pain: "Hidden work; inconsistent narratives; month-end scramble.",
      sque: [
        "Auto-finds work, drafts clear narratives, pushes to invoice with proof.",
      ],
      proof:
        "First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      tags: [
        "Time Capture & Revenue",
        "Approvals & Disputes",
        "Client Billing Rules",
        "Drafting & Redlining",
        "Collections & Retainers",
        "Evidence & Audits",
      ],
    },
    "Firm Size": {
      pain: "Admin drain; forget work; want simple.",
      sque: ["Finds work; one-click invoice; value in days."],
      proof:
        "First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      tags: ["Solo", "Team (5)", "Mid (25)", "BigLaw (100)", "Mega (250)"],
    },
    Roles: {
      pain: "You want revenue integrity, standardization, proof.",
      sque: ["Time captured +10–25%, policy approvals, Evidence Packs."],
      proof:
        "First invoice in 48 hours • Proof bundle in 14 days • 0 rejected e-bills",
      tags: [
        "Managing Partner",
        "Billing/Finance",
        "Legal Ops",
        "Attorney/Associate",
        "Paralegal",
      ],
    },
    "What Sque Does": {
      sections: [
        {
          section: "Billing & Revenue Protection",
          items: [
            {
              title: "Invoice creation & delivery",
              status: "Now",
              description:
                "Create professional invoices and deliver them automatically with your branding.",
            },
            {
              title: "Manual time & expenses",
              status: "Now",
              description:
                "Track hours and expenses with clear categories and matter assignment.",
            },
            {
              title: "Collections reminders & payment tracking",
              status: "Pro",
              description:
                "Automated follow-ups for overdue invoices and payment status tracking.",
            },
            {
              title: "Online payments (card/ACH)",
              status: "Roadmap",
              description:
                "Accept secure online payments directly through invoices.",
            },
          ],
        },
        {
          section: "AI Assistance",
          items: [
            {
              title: "AI redlining suggestions",
              status: "Now",
              description:
                "Intelligent document review and redline suggestions.",
            },
            {
              title: "Billing checks (client rules)",
              status: "Early Access",
              description:
                "Automated validation of entries against client billing rules.",
            },
            {
              title: "Time-entry suggestions",
              status: "Roadmap",
              description:
                "Recommendations from calendar, email, and document activity.",
            },
          ],
        },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("Practice");

  return (
    <div
      className="relative  overflow-hidden bg-[#0a2540] text-white pl-4 lg:pl-22 clip-section-both"
    >
      {/* Globe background */}
      <div className="absolute inset-y-0 right-[-30%] pt-8  h-full w-full  -z-0">
        <GlobeCanvas />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl py-24 px-6 lg:px-12">
        <header className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold">
            Built for Your Practice, Use Case, and Team
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Sque adapts to how your firm works — and stays audit-ready by
            design.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap w-fit mx-auto justify-center gap-3 mb-8 border border-gray-500 p-1 rounded-full bg-white/10 backdrop-blur">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border text-sm shadow-sm transition ${
                activeTab === tab
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white/10 text-slate-200 border-slate-600 hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tags */}
        {tabContent[activeTab].tags && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabContent[activeTab].tags!.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-white/10 text-white rounded-full border border-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content for Practice / Use Cases / Firm Size / Roles */}
        {activeTab !== "What Sque Does" && (
          <div className="grid gap-6 md:grid-cols-3">
            <article className="bg-white/10 rounded-2xl p-6 shadow-md backdrop-blur">
              <h4 className="text-lg font-semibold mb-3">Your pain</h4>
              <p className="text-sm leading-relaxed">
                {tabContent[activeTab].pain}
              </p>
            </article>

            <article className="bg-white/10 rounded-2xl p-6 shadow-md backdrop-blur">
              <h4 className="text-lg font-semibold mb-3">What Sque does</h4>
              <ul className="text-sm space-y-2 leading-relaxed list-disc pl-5">
                {tabContent[activeTab].sque?.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="bg-white/10 rounded-2xl p-6 shadow-md backdrop-blur">
              <h4 className="text-lg font-semibold mb-3">Proof</h4>
              <p className="text-sm leading-relaxed">
                {tabContent[activeTab].proof}
              </p>
            </article>
          </div>
        )}

        {/* Content for What Sque Does */}
        {activeTab === "What Sque Does" && (
          <>
            <div className="grid md:grid-cols-2 gap-10 pb-16">
              {tabContent["What Sque Does"].sections!.map((section) => (
                <div
                  key={section.section}
                  className="p-6 rounded-2xl bg-white/10 shadow-md backdrop-blur"
                >
                  <h3 className="text-lg font-bold text-center mb-4">
                    {section.section}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item: any) => (
                      <div
                        key={item.title}
                        className="p-4 border-b border-gray-600"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{item.title}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              statusColors[item.status] ||
                              "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-200">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700">
                Start Free Trial
              </button>
              <p className="text-sm text-gray-400 mt-2">
                No credit card required • Setup in minutes • Cancel anytime
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
