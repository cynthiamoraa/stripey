"use client";
import Link from "next/link";
import { useState } from "react";

import Logo from "../public/Sque_icon_universal.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 max-w-6xl mx-auto px-2 md:px-4 lg:px-23 ">
      <div className="relative max-w-screen-xl mx-auto px-6 flex items-center justify-between h-18  pt-6">
        <div className="flex items-center space-x-3 pr-8">
          {/* <img
            src="/Sque_icon_universal.svg"
            alt="Sque Logo"
            width={44}
            height={38}
          /> */}
          <Link
            href="#home"
            className="font-bold tracking-tight text-2xl text-white"
          >
            Sque
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center justify-between w-full">
          {/* Left side links */}
          <div className="flex gap-8 items-center font-bold text-white hover:text-white">
            <a href="#contact" className="">
              Features
            </a>
            <a href="#contact" className="">
              Resources
            </a>

            {/* <a href="#features" className="text-white hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-white">
              PricingProducts Solutions Developers Startups Enterprise Pricing
              Sign in
            </a>
            <a href="#faqs" className="text-white hover:text-white">
              FAQs
            </a>
            <a href="#contact" className="text-white hover:text-white">
              Contact
            </a> */}
          </div>

          {/* Right side button */}
          <div>
            <Link
              href="#"
              className="ml-4   text-white px-4 py-2 font-medium hover:opacity-90 transition"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="ml-4 rounded-2xl bg-white text-[bg] px-4 py-2 font-medium hover:opacity-90 transition"
            >
              Get started
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden backdrop-blur supports-[backdrop-filter]:bg-white/10 px-3 pt-1 rounded-2xl">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {!isOpen ? (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="24"
                viewBox="0 0 26 26"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            ) : (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="lg:hidden fixed inset-0 z-[9999] bg-white text-gray-700 grid grid-rows-[auto,1fr,auto] h-screen">
          {/* Header */}
          <div className="flex items-center justify-between  border-b border-gray-200 border-dashed px-4 ">
            <Link
              href="#home"
              className="font-bold tracking-tight text-2xl text-[#635bff]"
            >
              Sque
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col px-4 ">
            <a
              href="#contact"
              className="py-6 md:py-8 font-bold border-b border-gray-200 border-dashed"
            >
              Products
            </a>
            <a
              href="#contact"
              className="py-6 md:py-8 font-bold border-b border-gray-200 border-dashed"
            >
              Solutions
            </a>
            <a
              href="#contact"
              className="py-6 md:py-8 font-bold border-b border-gray-200 border-dashed"
            >
              Developers
            </a>
            <a
              href="#contact"
              className="py-6 md:py-8 font-bold border-b border-gray-200 border-dashed"
            >
              Startups
            </a>
            <a
              href="#contact"
              className="py-6 md:py-8 font-bold border-b border-gray-200 border-dashed"
            >
              Enterprise
            </a>
            <a
              href="#contact"
              className="py-6 md:py-8 font-bold border-b border-gray-200 border-dashed"
            >
              Pricing
            </a>
          </div>

          {/* Footer */}
          <div className="flex justify-center items-center  py-3 ">
            <Link
              href="#"
              className="bg-[#635bff] text-white font-bold w-fit rounded-xl px-6 py-2  hover:opacity-90 transition  max-w-xs text-center"
            >
              Sign in
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
