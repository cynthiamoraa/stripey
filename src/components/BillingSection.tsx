"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$79",
    sub: "(annual) • per user/mo",
    features: [
      "50 Automation Actions (Overage $0.10–$0.25)",
      "AI Redlining",
      "Microsoft 365 / Google",
      "CSV / E-Billing Export",
    ],
    button: "Start Free Trial",
    tag: "Early Access",
  },
  {
    name: "Pro",
    price: "$149",
    sub: "(annual) • per user/mo",
    features: [
      "200 Automation Actions",
      "Approvals & Disputes",
      "Retainers & Collections",
      "Early Access: Signed Activity Logs + Billing Checks",
    ],
    button: "Start Free Trial",
    tag: "Early Access",
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "(Early Access)",
    features: [
      "SSO / SCIM",
      "Compliance Pack",
      "Drafting+",
      "Advanced Logging / DLP",
      "1,000 Automation Actions",
    ],
    button: "Book Strategy Call",
    tag: "Early Access",
  },
];

export default function BillingSection() {
  return (
    <section className="bg-[#0a2540] py-30 px-4 lg:px-22 clip-section-bottom ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center px-6 lg:text-left mb-16">
          <h4 className="text-md font-semibold text-cyan-400 mb-8">
            Simple Plans
          </h4>

          <h3 className="text-4xl font-bold text-white">
            Adopt the Operating System in Stages
          </h3>
        </header>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.09,
                backgroundColor: "rgb(237, 233, 254)", // light purple
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-2xl flex flex-col justify-between min-h-[500px]"
            >
              {/* Tag */}
              {plan.tag && (
                <span className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.tag}
                </span>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-gray-900 mt-2">
                {plan.price}
              </p>
              <p className="text-gray-500 text-sm">{plan.sub}</p>

              {/* Includes */}
              <div className="mt-6 flex-1">
                <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                  Includes
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="mt-8 px-6 py-3 rounded-xl font-semibold transition bg-purple-600 text-white hover:bg-purple-700">
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <footer className="mt-12 text-center text-gray-400 text-sm max-w-3xl mx-auto">
          Guarantee: 14-Day Activation + 30/60-Day ROI Money-Back. <br />
          <span className="text-gray-400">
            (30 days for Starter/Pro; 60 days for Enterprise or teams with
            strict client billing rules.)
          </span>
        </footer>
      </div>
    </section>
  );
}
