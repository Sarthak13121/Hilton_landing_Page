"use client";

import React from "react";

export default function Footer() {
  const triggerTabScroll = (tabName: string) => {
    // Dispatch custom tab select event if catalog is active on page
    if (typeof window !== "undefined") {
      const event = new CustomEvent("select-catalog-tab", { detail: tabName });
      window.dispatchEvent(event);
      document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-inverse-surface border-t border-surface-white/5 text-surface-white font-body mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-grid-margin-desktop py-section-gap-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-grid-gutter">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold font-headline uppercase tracking-tight leading-none text-surface-white">
                Hilton Plastic
              </span>
              <span className="text-[10px] text-surface-white/35 font-body mt-2.5 font-medium leading-none uppercase tracking-wider">
                Est. 1994 · Ahmedabad
              </span>
            </div>
            <p className="text-surface-white/60 text-xs leading-relaxed max-w-xs">
              Ahmedabad-based manufacturer of high-grade agricultural irrigation, industrial plumbing fittings, and plastic components. Supplying pan-India since 1994.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-sm text-primary text-[10px] font-bold uppercase tracking-wider">
                ISO 9001:2008 Certified
              </span>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h4 className="text-secondary font-bold text-xs uppercase tracking-widest font-headline">
              Product Range
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => triggerTabScroll("valves")}
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200 text-left bg-transparent border-none cursor-pointer p-0"
                >
                  Ball Valves
                </button>
              </li>
              <li>
                <button
                  onClick={() => triggerTabScroll("agri")}
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200 text-left bg-transparent border-none cursor-pointer p-0"
                >
                  Agricultural Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => triggerTabScroll("fittings")}
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200 text-left bg-transparent border-none cursor-pointer p-0"
                >
                  Pipe Fittings
                </button>
              </li>
              <li>
                <button
                  onClick={() => triggerTabScroll("Rain")}
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200 text-left bg-transparent border-none cursor-pointer p-0"
                >
                  Rain Pipe Fittings
                </button>
              </li>
              <li>
                <button
                  onClick={() => triggerTabScroll("Compression")}
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200 text-left bg-transparent border-none cursor-pointer p-0"
                >
                  Compressor Fittings
                </button>
              </li>
              <li>
                <button
                  onClick={() => triggerTabScroll("Irrigation")}
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200 text-left bg-transparent border-none cursor-pointer p-0"
                >
                  Irrigation Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => triggerTabScroll("bathroom")}
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200 text-left bg-transparent border-none cursor-pointer p-0"
                >
                  Sanitary &amp; Cork
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-secondary font-bold text-xs uppercase tracking-widest font-headline">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200"
                  href="#about"
                >
                  About Hilton
                </a>
              </li>
              <li>
                <a
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200"
                  href="#digital-catalog"
                >
                  Digital Flipbook
                </a>
              </li>
              <li>
                <a
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200"
                  href="#why-choose-us"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  className="text-surface-white/60 text-xs hover:text-surface-white transition-colors duration-200"
                  href="#contact"
                >
                  Dealer Application
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support Desk */}
          <div className="space-y-6">
            <h4 className="text-secondary font-bold text-xs uppercase tracking-widest font-headline">
              Direct Support
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hiltonplasticvalve1993@gmail.com"
                className="text-surface-white/60 hover:text-surface-white text-xs flex items-center gap-3 transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  mail
                </span>
                hiltonplasticvalve1993@gmail.com
              </a>
              <a
                href="tel:+919624096424"
                className="text-surface-white/60 hover:text-surface-white text-xs flex items-center gap-3 transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  phone_in_talk
                </span>
                +91 96240 96424 (Bharatbhai)
              </a>
              <a
                href="tel:+919824096423"
                className="text-surface-white/60 hover:text-surface-white text-xs flex items-center gap-3 transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  phone_in_talk
                </span>
                +91 98240 96423 (Vishnubhai)
              </a>
              <div className="text-surface-white/50 text-[10px] leading-relaxed pt-2">
                <strong>Factory Address:</strong>
                <br />
                Rakhiyal, GIDC Industrial Area,
                <br />
                Ahmedabad, Gujarat — 380 023, India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-surface-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-surface-white/40 text-xs">
          <p>© 2026 Hilton Plastic. All rights reserved. Ahmedabad, Gujarat.</p>
          <div className="flex gap-8">
            <span className="font-medium text-[11px] uppercase tracking-wider text-secondary">
              Est. 1994 · Manufacturing Dependability
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
