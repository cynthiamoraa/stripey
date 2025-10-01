"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnterpriseFeature() {
  const items = [
    {
      title: "Microsoft 365",
      description:
        "Connect your Outlook email, calendar, and OneDrive. Auto-capture time from meetings, emails, and document reviews for accurate billing entries.",
      img: "data:image/jpeg;base64,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",
    },
    {
      title: "Google Workspace",
      description:
        "Sync with Gmail, Google Calendar, and Drive. Track billable activities across email threads, meetings, and collaborative document work.",
      img: "data:image/png;base64,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",
    },
    {
      title: "CSV/e-billing exports",
      description:
        "Export time entries and invoices in standard CSV format or e-billing compliant formats for seamless submission to client portals.",
      img: "data:image/png;base64,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",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000); // 5s per slide
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className=" px-4 lg:px-22  py-20  clip-section-top">
      <div className="relative w-full  mx-auto pt-18  overflow-hidden p-8 ">
        {/* Card Content */}
        <h1 className="text-center text-3xl p-6 mb-8 font-bold">
          Works With Your Stack
        </h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-8 items-center"
          >
            {/* Text */}
            <div className="col-span-4 md:col-span-2">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {items[index].title}
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  {items[index].description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-span-4 md:col-span-2">
              <motion.img
                src={items[index].img}
                alt={items[index].title}
                className="w-full h-70 object-contain rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Row of titles with progress bar */}
        <div className="mt-8 flex justify-around border-t border-gray-200 relative">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative flex-1 text-center px-2 py-3 cursor-pointer transition-colors ${
                i === index ? "text-blue-600 font-semibold" : "text-gray-500"
              }`}
              onClick={() => setIndex(i)}
            >
              {/* Progress bar sitting on border */}
              {i === index && (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}

              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
