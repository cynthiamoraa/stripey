"use client";

import { Shield, Search } from "lucide-react";

export default function ConfidentialAsk() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Card 1 - Confidential */}
        <div
          className="relative group rounded-2xl p-10 shadow-md hover:shadow-xl transition text-white overflow-hidden md:translate-y-10"
          style={{
            background:
              "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative z-10 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold leading-tight">
              Confidential. Compliant. <br /> In Your Control.
            </h2>
            <p className="text-white/90 text-lg">
              Sque replaces risky tools and manual chaos with a secure legal
              platform built for privilege, client trust, and auditability.
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              {[
                "Private by design",
                "Defense-grade security",
                "Full audit trail & access logs",
                "Role-based permissions",
                "SSO + MFA (Google & Microsoft)",
                "SOC Ready, Data retention & export controls",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg"
                >
                  <Shield className="w-4 h-4" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2 - Ask */}
        <div
          className="relative group rounded-2xl p-10 shadow-md hover:shadow-xl transition text-white overflow-hidden md:-translate-y-10"
          style={{
            background:
              "linear-gradient(135deg, #0ea5e9 0%, #6366F1 50%, #9333ea 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative z-10 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold leading-tight">
              Ask. It Gets Done.
            </h2>

            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Who haven’t I followed up with?"
                className="w-full px-5 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-yellow-300 transition">
                <Search className="w-6 h-6" />
              </button>
            </div>

            <p className="text-white/90 text-lg">
              One bar to draft, bill, and find anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
