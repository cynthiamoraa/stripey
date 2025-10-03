"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridLines from "./GrideLines";

export default function EnterpriseFeature() {
  const items = [
    {
      title: "Microsoft 365",
      description:
        "Connect your Outlook email, calendar, and OneDrive. Auto-capture time from meetings, emails, and document reviews for accurate billing entries.",
      img: "https://www.sque.ai/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1831234%2Fpexels-photo-1831234.jpeg&w=3840&q=75",
    },
    {
      title: "Google Workspace",
      description:
        "Sync with Gmail, Google Calendar, and Drive. Track billable activities across email threads, meetings, and collaborative document work.",
      img: "https://www.sque.ai/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F9176221%2Fpexels-photo-9176221.jpeg&w=3840&q=75",
    },
    {
      title: "CSV/e-billing exports",
      description:
        "Export time entries and invoices in standard CSV format or e-billing compliant formats for seamless submission to client portals.",
      img: "https://www.sque.ai/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F9175415%2Fpexels-photo-9175415.jpeg&w=3840&q=75",
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
    <section className=" px-4 lg:px-22 bg-[#fff] py-20  clip-section-top">
      <div className="relative max-w-6xl  mx-auto pt-18  overflow-hidden p-8 ">
        {/* Card Content */}
        <GridLines lines={5} color="border-amber-400" dashed />
        <h1 className="text-center lg:text-left text-black text-4xl  mb-8 font-bold">
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
                className="w-fit h-70 object-contain rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Row of titles with progress bar */}
        <div className="mt-16 flex justify-around border-t border-gray-200 relative">
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
                  className="absolute top-0 left-0 right-0 h-[1px] bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}

              <div className="mt-8">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
