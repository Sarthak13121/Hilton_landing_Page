"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    { src: "/images/Picture1.png", alt: "Solid Seal Ball Valve (Short Handle)" },
    { src: "/images/Picture61.png", alt: "Service Saddle (White)" },
    { src: "/images/Picture76.png", alt: "Hose Collar (Out Thread)" },
    { src: "/images/Picture103.png", alt: "P.P. Cap/plug" },
    { src: "/images/Picture72.png", alt: "Foot Valve (Threaded)" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, [heroImages.length]);
  return (
    <section className="relative min-h-[85vh] flex items-center bg-mesh py-12 md:py-20 overflow-hidden border-b border-outline-variant/15">
      {/* Dynamic backdrop glow circles */}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-grid-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content column */}
        <div className="space-y-8 lg:col-span-7 flex flex-col items-start text-left">
          {/* ISO Certification Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full select-none">
            <span className="material-symbols-outlined text-[16px] animate-pulse">verified</span>
            <span className="text-[10px] font-bold uppercase tracking-wider font-headline">
              ISO 9001:2008 Certified Manufacturer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-on-surface leading-[1.1] tracking-tight">
            Agricultural &amp; Industrial <br />
            <span className="text-primary font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Plastic Fittings
            </span>{" "}
            <br />
            Built to Last.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant font-body max-w-2xl leading-relaxed">
            Ahmedabad&apos;s trusted partner since 1994, manufacturing 391+ precision-moulded components. Specially formulated UPVC, CPVC, and PP solutions engineered to deliver water management reliability in field irrigation and heavy industry.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#digital-catalog"
              className="bg-primary text-surface-white px-6 py-3.5 rounded font-headline font-bold text-xs sm:text-sm hover:bg-primary-dark transition-all shadow hover:-translate-y-0.5 active:scale-95 duration-200 flex items-center gap-2"
            >
              Open Book Catalog
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
            </a>
            <a
              href="#contact"
              className="bg-surface-white border border-outline-variant/60 text-on-surface-variant px-6 py-3.5 rounded font-headline font-bold text-xs sm:text-sm hover:bg-surface-container hover:text-primary transition-all duration-200 flex items-center gap-2"
            >
              Request Bulk Quote
              <span className="material-symbols-outlined text-[18px]">send</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 w-full border-t border-outline-variant/10">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-headline text-primary">30+</div>
              <p className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-wider mt-1">
                Years Active
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-headline text-primary">391+</div>
              <p className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-wider mt-1">
                Certified SKUs
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-headline text-primary">5</div>
              <p className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-wider mt-1">
                Product Lines
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-headline text-primary">India</div>
              <p className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-wider mt-1">
                Wide Delivery
              </p>
            </div>
          </div>
        </div>

        {/* Right Graphic/Mockup column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] aspect-square bg-surface-white shadow-xl rounded-2xl flex items-center justify-center border border-outline-variant/20 group hover:shadow-2xl hover:border-primary/20 transition-all duration-300 overflow-hidden">
            {/* Soft backdrop glow to center images */}
            <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Slide Container */}
            <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-8">
              {heroImages.map((imgInfo, idx) => {
                const isActive = currentImageIndex === idx;
                return (
                  <img
                    key={idx}
                    alt={imgInfo.alt}
                    className={`absolute w-auto h-auto max-w-[85%] max-h-[85%] object-contain transition-all duration-1000 ease-in-out ${
                      isActive 
                        ? "opacity-100 scale-100 z-10" 
                        : "opacity-0 scale-95 z-0"
                    }`}
                    src={imgInfo.src}
                    onError={(e) => {
                      e.currentTarget.src = "/images/Picture1.png"; // Secure fallback
                    }}
                  />
                );
              })}
            </div>
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentImageIndex === idx 
                      ? "bg-primary w-5" 
                      : "bg-outline-variant/60 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
