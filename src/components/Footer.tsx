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
              <div className="flex items-center justify-between gap-3 text-surface-white/60 text-xs">
                <a
                  href="tel:+919824096423"
                  className="hover:text-surface-white flex items-center gap-3 transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    phone_in_talk
                  </span>
                  +91 98240 96423 (Vishnubhai)
                </a>
                <a
                  href="https://wa.me/919824096423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 flex items-center gap-1 transition-colors duration-200 ml-auto font-medium"
                  title="Chat on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="mr-0.5">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.13-1.348a9.96 9.96 0 0 0 4.88 1.27h.005c5.506 0 9.99-4.478 9.99-9.987C22 6.478 17.517 2 12.012 2zm6.368 14.183c-.279.782-1.393 1.442-1.921 1.545-.48.093-.996.15-2.827-.608-2.339-.97-3.83-3.328-3.947-3.483-.117-.156-.957-1.272-.957-2.428 0-1.155.601-1.722.816-1.956.215-.234.481-.294.643-.294.16 0 .32.001.46.007.144.006.338-.053.528.404.195.47.669 1.63.727 1.748.058.118.098.254.019.41-.078.156-.118.254-.235.39-.117.137-.246.305-.35.41-.11.111-.225.23-.097.45.127.22.566.932 1.214 1.51.836.744 1.54.974 1.756 1.084.215.11.343.094.469-.052.127-.146.547-.638.694-.855.147-.216.293-.182.498-.104.205.078 1.3.613 1.525.727.225.114.375.172.43.267.056.096.056.554-.223 1.336z"/>
                  </svg>
                  Chat
                </a>
              </div>
              <div className="flex items-center justify-between gap-3 text-surface-white/60 text-xs">
                <a
                  href="tel:+919624096424"
                  className="hover:text-surface-white flex items-center gap-3 transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    phone_in_talk
                  </span>
                  +91 96240 96424 (Bharatbhai)
                </a>
                <a
                  href="https://wa.me/919624096424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 flex items-center gap-1 transition-colors duration-200 ml-auto font-medium"
                  title="Chat on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="mr-0.5">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.13-1.348a9.96 9.96 0 0 0 4.88 1.27h.005c5.506 0 9.99-4.478 9.99-9.987C22 6.478 17.517 2 12.012 2zm6.368 14.183c-.279.782-1.393 1.442-1.921 1.545-.48.093-.996.15-2.827-.608-2.339-.97-3.83-3.328-3.947-3.483-.117-.156-.957-1.272-.957-2.428 0-1.155.601-1.722.816-1.956.215-.234.481-.294.643-.294.16 0 .32.001.46.007.144.006.338-.053.528.404.195.47.669 1.63.727 1.748.058.118.098.254.019.41-.078.156-.118.254-.235.39-.117.137-.246.305-.35.41-.11.111-.225.23-.097.45.127.22.566.932 1.214 1.51.836.744 1.54.974 1.756 1.084.215.11.343.094.469-.052.127-.146.547-.638.694-.855.147-.216.293-.182.498-.104.205.078 1.3.613 1.525.727.225.114.375.172.43.267.056.096.056.554-.223 1.336z"/>
                  </svg>
                  Chat
                </a>
              </div>
              <div className="text-surface-white/50 text-[10px] leading-relaxed pt-2">
                <strong>Factory Address:</strong>
                <br />
                <a
                  href="https://maps.app.goo.gl/qWPBsyLDB19aRBQN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200 inline-flex items-start gap-1 mt-1"
                >
                  <span className="material-symbols-outlined text-primary text-[14px] mt-0.5">
                    location_on
                  </span>
                  <span>
                    12, Ajay Estate, Rakhial,
                    <br />
                    Ahmedabad, Gujarat — 380 021, India
                  </span>
                </a>
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
