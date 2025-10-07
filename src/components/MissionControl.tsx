"use client";
import Guides from "./Guides";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", revenue: 20 },
  { name: "Feb", revenue: 35 },
  { name: "Mar", revenue: 50 },
  { name: "Apr", revenue: 30 },
];

export default function MissionControl() {
  return (
    <section className="relative bg-[#f6f9fc] py-20 px-4 lg:px-22">
      {/* Top Header */}
      <Guides  />
      <div className="max-w-6xl relative mx-auto px-6 text-center lg:text-left">
        <h4 className="text-sm font-semibold text-purple-600 mb-2">
          Mission Control
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Find, Approve, Invoice, Collect — with proof
        </h2>
        <p className="text-lg text-gray-600  mx-auto text-center lg:text-left">
          Find Work — Time captured: +10–25% typical. <br />
          Approve & Check — Proof coverage: majority of entries by Day 30.{" "}
          <br />
          Invoice & Collect — Days-to-cash: −7 to −12.
        </p>
      </div>

      {/* Highlight Box */}
      <div className="max-w-6xl relative mx-auto mt-12 px-6">
        <div className="rounded-2xl shadow-xl shadow-purple-200 bg-gray-50 p-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Your Legal Mission Control
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            This is your operating system for legal revenue: <br />
            Find → Approve → Invoice → Collect — with audit-ready proof.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-12">
            <input
              type="text"
              placeholder="Ask Sage anything..."
              className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.65 6.65a7.5 7.5 0 016.5 9.5z"
                />
              </svg>
            </button>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-[white] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col">
              <h4 className="text-lg font-semibold mb-2">Smart To-Do List</h4>
              <ul className="text-gray-600 text-sm space-y-3 flex-1">
                <li>Review Johnson contract amendments</li>
                <li>Prepare discovery documents</li>
                <li>Follow up on settlement offer</li>
                <li>Draft response to counsel</li>
              </ul>
              <button className="mt-6 text-purple-600 font-medium hover:text-purple-700">
                Add Task →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[white] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col">
              <h4 className="text-lg font-semibold mb-2">Your Calendar</h4>
              <ul className="text-gray-600 text-sm space-y-3 flex-1">
                <li>Client meeting - Johnson Corp</li>
                <li>Court hearing - Smith v. Jones</li>
                <li>Team strategy session</li>
                <li>Deposition prep</li>
              </ul>
              <button className="mt-6 text-purple-600 font-medium hover:text-purple-700">
                Add Event →
              </button>
            </div>

            {/* Card 3 (Chart) */}
            <div className="bg-[white] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col">
              <h4 className="text-lg font-semibold mb-2">
                State of the Business
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-indigo-600">
                    $145.0k
                  </div>
                  <div className="text-sm text-gray-500">Revenue</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-indigo-600">
                    320.0h
                  </div>
                  <div className="text-sm text-gray-500">Total Hours</div>
                </div>
              </div>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#6366f1"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "#6366f1" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <button className="mt-6 text-purple-600 font-medium hover:text-purple-700">
                Add Case →
              </button>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-12">
            <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl shadow hover:bg-purple-700 transition">
              Open Evidence Pack Sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
