"use client";

import React from "react";
import { CATALOG } from "../data/products";

export default function CategoryShowcase() {
  // Dynamically calculate dynamic counts of products in each category
  const countByCategory = (tabName: string) => {
    return CATALOG.filter((p) => p.tab === tabName).length;
  };

  const handleCategoryClick = (tabName: string) => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("select-catalog-tab", { detail: tabName });
      window.dispatchEvent(event);
      document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = [
    {
      tab: "valves",
      title: "Ball Valves",
      desc: "CPVC, UPVC, PP hybrid, three-way, MS handle, and rigid PVC valves in standard sizing.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
          <path
            d="M16 2v4M16 26v4M2 16h4M26 16h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10 6l2 3M20 23l2 3M6 10l3 2M23 20l3 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      class: "hover:border-primary/30 group-hover:text-primary"
    },
    {
      tab: "agri",
      title: "Agricultural Products",
      desc: "Service saddles, pipe saddles, D-joint leak sleeves, kundi bari, flanges, bore caps, NRVs, check valves, and air valves.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 28V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M16 16C16 10 8 6 8 6s0 8 8 10z"
            fill="currentColor"
            className="opacity-25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 20C16 14 24 10 24 10s0 8-8 10z"
            fill="currentColor"
            className="opacity-25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M6 28h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      class: "hover:border-secondary/30 group-hover:text-secondary md:col-span-2 lg:col-span-2 bg-gradient-to-br from-surface-white to-surface-container-low"
    },
    {
      tab: "fittings",
      title: "Pipe Fittings",
      desc: "Hose collars, connectors, reduce bushings, check nuts, tank nipples, PP elbows, tees, unions, plugs, and caps.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M4 16h10M18 16h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M16 4v6M16 22v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      class: "hover:border-primary/30 group-hover:text-primary"
    },
    {
      tab: "Rain",
      title: "Rain Pipe Fittings",
      desc: "Jointers, MTAs, end caps, gromets, lateral cocks, and semi/virgin rain pipes in standard dimensions.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 4v4M10 6l2 2M22 6l-2 2M16 10c-3.5 0-6 2.5-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.5-2.5-6-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      class: "hover:border-accent/30 group-hover:text-accent"
    },
    {
      tab: "Compression",
      title: "Compressor Fittings",
      desc: "FTA/MTA adaptors and elbows in plain & brass threads, end caps, couplers, compression tees, and DI pipe saddles.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M16 6v10M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      class: "hover:border-primary/30 group-hover:text-primary"
    },
    {
      tab: "Irrigation",
      title: "Irrigation Products",
      desc: "Drip jointers, take-offs, end caps, gromets, lateral cocks, Pepsi cocks, micro/butterfly sprinklers, drippers, and ventury sets.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 4v6M10 8l2 2M22 8l-2 2M6 28h20M12 28v-8a4 4 0 0 1 8 0v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      class: "hover:border-secondary/30 group-hover:text-secondary"
    },
    {
      tab: "bathroom",
      title: "Sanitary & Cork",
      desc: "PP/ABS ball cocks, connection pipes, T-cock/pan/handi taps, push/jug cocks, showers, waste pipes, and fancy crystal bib cocks.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M8 8a8 8 0 0 1 16 0v4H8V8z" stroke="currentColor" strokeWidth="2" />
          <rect x="4" y="12" width="24" height="4" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M10 16v8M22 16v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 24h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      class: "hover:border-accent/30 group-hover:text-accent"
    }
  ];

  return (
    <section className="py-section-gap-desktop bg-surface font-body" id="products">
      <div className="max-w-7xl mx-auto px-4 md:px-grid-margin-desktop">
        {/* Section Header */}
        <div className="text-left mb-16 space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
            What We Manufacture
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface leading-tight">
            Seven Core Product Lines
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Every component is manufactured under strict ISO 9001:2008 standards using high-density virgin polymer formulations (PP, CPVC, UPVC, Rigid PVC) optimized for chemical resistance, pressure integrity, and UV longevity in the field.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const count = countByCategory(cat.tab);
            const isWide = cat.tab === "agri";

            return (
              <div
                key={idx}
                onClick={() => handleCategoryClick(cat.tab)}
                className={`group bento-card cursor-pointer bg-surface-white border border-outline-variant/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between h-full hover:border-primary/20 transition-all duration-300 relative overflow-hidden ${
                  isWide ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-surface-white to-surface-container-low" : "col-span-1"
                }`}
              >
                <div className="space-y-4 flex-1">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded bg-surface-muted text-on-surface-variant flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-surface-white">
                    {cat.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold font-headline text-on-surface group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                {/* Bottom Row - aligns Count Badge and Arrow perfectly on the same line */}
                <div className="pt-6 mt-6 flex justify-between items-center border-t border-outline-variant/5">
                  <span className="inline-block text-xs font-bold font-body text-secondary bg-secondary/5 border border-secondary/15 px-3 py-1.5 rounded-full select-none transition-colors group-hover:bg-secondary/10">
                    {count} Products
                  </span>
                  <span className="text-on-surface-variant opacity-60 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 flex items-center">
                    <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
