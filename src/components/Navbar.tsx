"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-white/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm py-3"
          : "bg-surface-white border-b border-transparent py-4"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-4 md:px-grid-margin-desktop max-w-7xl mx-auto">
        {/* Logo and Brand Title */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            alt="Hilton Logo"
            className="h-11 md:h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            src="/images/logo.png"
          />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold font-headline text-primary uppercase tracking-tight leading-none">
              Hilton Plastic
            </span>
            <span className="text-[10px] text-on-surface-variant font-body mt-0.5 font-medium leading-none">
              Est. 1994 · Ahmedabad
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-bold font-body text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#products"
          >
            Products
          </a>
          <a
            className="text-sm font-bold font-body text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#about"
          >
            About Us
          </a>
          <a
            className="text-sm font-bold font-body text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#digital-catalog"
          >
            Catalog Book
          </a>
          <a
            className="text-sm font-bold font-body text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#catalog"
          >
            Full Catalog
          </a>
          <a
            className="text-sm font-bold font-body text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#why-choose-us"
          >
            Why Us
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-primary text-surface-white px-5 py-2 rounded font-headline font-bold text-xs hover:bg-primary-dark transition-all duration-200 shadow-sm active:scale-95 flex items-center gap-2"
          >
            Get a Quote
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>

        {/* Mobile Navigation Trigger (Hamburger) */}
        <button
          className="flex flex-col justify-center items-center w-8 h-8 rounded border border-outline-variant/30 bg-surface-muted md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span
            className={`w-4 h-0.5 bg-on-surface transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-on-surface my-1 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-on-surface transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Drawer Slider */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-on-surface/30 backdrop-blur-sm md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-surface-white border-l border-outline-variant/10 p-6 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4">
            <a
              href="#products"
              onClick={() => setIsOpen(false)}
              className="text-base font-bold font-body text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/10"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-base font-bold font-body text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/10"
            >
              About Us
            </a>
            <a
              href="#digital-catalog"
              onClick={() => setIsOpen(false)}
              className="text-base font-bold font-body text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/10"
            >
              Catalog Book
            </a>
            <a
              href="#catalog"
              onClick={() => setIsOpen(false)}
              className="text-base font-bold font-body text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/10"
            >
              Full Catalog
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setIsOpen(false)}
              className="text-base font-bold font-body text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/10"
            >
              Why Choose Us
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-primary text-surface-white py-3 rounded font-headline font-bold text-sm shadow hover:bg-primary-dark transition-all mt-4"
          >
            Request Bulk Quote
          </a>
        </div>
      </div>
    </header>
  );
}
