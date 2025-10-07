"use client";

import { Shield, Search } from "lucide-react";
import Guides from "./Guides";

export default function ConfidentialAsk() {
  return (
    <section className="relative bg-white py-24 px-4 lg:px-22">
      <Guides />
      <div className="max-w-6xl relative mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div className="relative group rounded-2xl p-10 shadow-md hover:shadow-xl transition overflow-hidden bg-gradient-to-r from-gray-100 via-gray-50 to-white text-black">
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

          <div className="relative z-10 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold leading-tight">
              Confidential. Compliant. <br /> In Your Control.
            </h2>
            <p className="text-gray-700 text-lg">
              Sque replaces risky tools and manual chaos with a secure legal
              platform built for privilege, client trust, and auditability.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
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
                  className="flex items-center gap-2 bg-black/5 px-3 py-2 rounded-lg"
                >
                  <Shield className="w-4 h-4 text-gray-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2 - Ask */}
        <div className="relative group rounded-2xl p-10 shadow-md hover:shadow-xl transition overflow-hidden bg-gradient-to-r from-gray-100 via-gray-50 to-white text-black">
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-indigo-200 to-purple-200 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

          <div className="relative z-10 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold leading-tight">
              Ask. It Gets Done.
            </h2>

            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Who haven’t I followed up with?"
                className="w-full px-5 py-3 rounded-xl bg-black/5 backdrop-blur-md border border-black/10 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-indigo-500 transition">
                <Search className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-700 text-lg">
              One bar to draft, bill, and find anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
