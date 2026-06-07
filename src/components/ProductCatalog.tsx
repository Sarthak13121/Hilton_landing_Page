"use client";

import React, { useState, useEffect } from "react";
import { CATALOG, Product } from "../data/products";
import { triggerEmailInquiry } from "../utils/email";

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<string>("valves");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Synchronize tab clicks from external navigation events (e.g., from Footer or Category grid)
  useEffect(() => {
    const handleSelectTabEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
        setSearchQuery(""); // Clear search when switching tabs via category clicks
      }
    };
    window.addEventListener("select-catalog-tab", handleSelectTabEvent);
    return () => window.removeEventListener("select-catalog-tab", handleSelectTabEvent);
  }, []);

  // Lock body scroll when product details modal is open to prevent background scrolling/address-bar resize on mobile
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
    };
  }, [selectedProduct]);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setSearchQuery(""); // Clear search to avoid confusion when switching tabs
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Perform search filtering
  const getFilteredProducts = () => {
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      return CATALOG.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q) ||
          p.size.toLowerCase().includes(q) ||
          p.variant.toLowerCase().includes(q)
      );
    }
    return CATALOG.filter((p) => p.tab === activeTab);
  };

  const filteredProducts = getFilteredProducts();

  // Helper to count products in a tab
  const getTabCount = (tabName: string) => {
    return CATALOG.filter((p) => p.tab === tabName).length;
  };

  const tabs = [
    { id: "valves", label: "Ball Valves", icon: "settings" },
    { id: "agri", label: "Agricultural Products", icon: "agriculture" },
    { id: "fittings", label: "Pipe Fittings", icon: "hub" },
    { id: "Rain", label: "Rain Pipe Fittings", icon: "water_drop" },
    { id: "Compression", label: "Compressor Fittings", icon: "compress" },
    { id: "Irrigation", label: "Irrigation Products", icon: "opacity" },
    { id: "bathroom", label: "Sanitary & Cork", icon: "shower" }
  ];

  return (
    <section className="py-section-gap-desktop bg-surface-white font-body border-t border-b border-outline-variant/10" id="catalog">
      <div className="max-w-7xl mx-auto px-4 md:px-grid-margin-desktop">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
              Product Directory
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface">
              Full Product Catalog
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl">
              Browse across all 213 products in our catalog. Perform a quick search by product name, model code, size specification, or material type.
            </p>
          </div>
        </div>

        {/* Dynamic Search Input Bar */}
        <div className="relative w-full max-w-3xl mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input
            type="text"
            placeholder='Search by product name, size (e.g. 1/2"), variant details, or Model #'
            className="w-full pl-11 pr-11 py-4 bg-surface rounded border border-outline-variant/50 focus:border-primary focus:bg-surface-white outline-none text-xs sm:text-sm font-medium transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          )}
        </div>

        {/* Categories Tab Selector Bar */}
        <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-outline-variant/10 pb-4 mb-8 overflow-x-auto select-none no-scrollbar">
          {tabs.map((tab) => {
            const count = getTabCount(tab.id);
            const isActive = activeTab === tab.id && searchQuery === "";

            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded text-xs sm:text-sm font-bold font-headline transition-all duration-200 focus:outline-none whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-primary text-surface-white shadow-sm"
                    : "bg-surface text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                {tab.label}
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[9px] font-extrabold ${
                    isActive ? "bg-surface-white text-primary" : "bg-outline-variant/30 text-on-surface"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Metadata Bar */}
        <div className="flex justify-between items-center text-xs text-on-surface-variant font-medium mb-6">
          <div className="flex items-center gap-2">
            Showing <strong className="text-primary">{filteredProducts.length}</strong> products
            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded text-[10px]">
                Search Query: &quot;{searchQuery}&quot;
              </span>
            )}
          </div>
        </div>

        {/* Product Cards Grid Showcase */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className="group bento-card cursor-pointer bg-surface-white border border-outline-variant/15 rounded-2xl p-3 sm:p-4 flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition-all duration-300 animate-in fade-in duration-200"
              >
                {/* Image Frame */}
                <div className="aspect-square bg-surface-white rounded-xl p-3 flex items-center justify-center overflow-hidden mb-3 border border-outline-variant/5">
                  <img
                    alt={p.name}
                    className="max-h-[90%] max-w-[90%] object-contain transition-transform duration-500 group-hover:scale-105"
                    src={`/images/${p.img}`}
                    onError={(e) => {
                      e.currentTarget.src = "/images/Picture1.png"; // Dynamic fallback if missing
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Body Details */}
                <div className="flex flex-col justify-between flex-1 gap-2.5 sm:gap-4 text-left pt-1">
                  <div className="space-y-1">
                    <span className="text-[9px] sm:text-[10px] font-extrabold font-headline uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      Model #{p.id}
                    </span>
                    <h3 className="text-xs sm:text-base font-bold font-headline text-on-surface pt-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {p.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-on-surface-variant font-medium leading-relaxed pt-1 line-clamp-2">
                      {p.size}
                    </p>
                  </div>

                  {/* Actions Frame */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-outline-variant/10 w-full mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(p);
                      }}
                      className="w-full sm:flex-1 text-center border border-outline-variant text-on-surface-variant py-2 rounded-lg text-xs font-bold font-headline hover:bg-surface-muted transition-colors focus:outline-none cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const emailBody = `Hello Hilton Plastic,\n\nI am interested in the following product:\n\nModel #: ${p.id}\nProduct: ${p.name}\nSize: ${p.size}\nVariant: ${p.variant}\n\nPlease send me pricing, minimum order quantity, and availability.\n\nThank you.`;
                        const subject = `Inquiry: Model ${p.id} – ${p.name}`;
                        triggerEmailInquiry(subject, emailBody);
                      }}
                      className="w-full sm:flex-1 text-center bg-primary text-surface-white py-2 rounded-lg text-xs font-bold font-headline hover:bg-primary-dark transition-colors flex items-center justify-center gap-1 focus:outline-none shadow-sm cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Fallback State Card */
          <div className="flex flex-col items-center justify-center p-12 border border-dashed border-outline-variant/40 rounded-lg text-center max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined text-[32px]">search_off</span>
            </div>
            <h3 className="text-lg font-bold font-headline text-on-surface">No Products Found</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              We couldn&apos;t find any products matching <strong className="text-primary">&quot;{searchQuery}&quot;</strong>. Try checking spelling or browsing other categories.
            </p>
            <button
              onClick={clearSearch}
              className="bg-primary text-surface-white px-5 py-2 rounded font-headline font-bold text-xs hover:bg-primary-dark transition-colors shadow-sm focus:outline-none cursor-pointer"
            >
              Clear Search Query
            </button>
          </div>
        )}

        {/* HIGH-FIDELITY PRODUCT DETAILS POPUP MODAL SCREEN OVERLAY */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 bg-on-surface/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-surface-white w-full max-w-md md:max-w-3xl rounded-2xl shadow-2xl border border-outline-variant/20 flex flex-col md:flex-row relative animate-in zoom-in-95 duration-200 max-h-[85vh] md:max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-outline-variant/20 bg-surface-white/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/20 transition-all cursor-pointer focus:outline-none"
              >
                <span className="material-symbols-outlined text-[18px] font-bold">close</span>
              </button>

              {/* Modal Left Image section */}
              <div className="w-full md:w-1/2 bg-surface-white p-6 md:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-outline-variant/10 shrink-0 h-44 md:h-auto">
                <img
                  alt={selectedProduct.name}
                  className="max-h-[160px] md:max-h-[240px] max-w-[80%] object-contain"
                  src={`/images/${selectedProduct.img}`}
                  onError={(e) => {
                    e.currentTarget.src = "/images/Picture1.png";
                  }}
                />
              </div>

              {/* Modal Right Info column */}
              <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between text-left gap-6 overflow-y-auto flex-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold font-headline uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      Model #{selectedProduct.id}
                    </span>
                    <span className="text-[10px] font-extrabold font-headline uppercase tracking-widest text-secondary bg-secondary/5 px-2 py-0.5 rounded border border-secondary/10">
                      Category: {selectedProduct.tab}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-headline text-on-surface leading-snug">
                    {selectedProduct.name}
                  </h3>

                  {/* Specifications details */}
                  <div className="divide-y divide-outline-variant/10 text-xs sm:text-sm font-medium">
                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-on-surface-variant font-bold">Available Sizes</span>
                      <span className="text-on-surface font-semibold text-right max-w-[180px]">
                        {selectedProduct.size}
                      </span>
                    </div>
                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-on-surface-variant font-bold">Color / Finish</span>
                      <span className="text-on-surface font-semibold text-right">
                        {selectedProduct.variant}
                      </span>
                    </div>
                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-on-surface-variant font-bold">Material Grade</span>
                      <span className="text-on-surface font-semibold text-right">
                        Polypropylene
                      </span>
                    </div>
                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-on-surface-variant font-bold">Manufacturer</span>
                      <span className="text-on-surface font-semibold text-right">
                        Hilton Plastic, Ahmedabad
                      </span>
                    </div>
                  </div>
                </div>

                {/* Inquiry Panel in Modal */}
                <div className="space-y-3 pt-4 border-t border-outline-variant/10">
                  <button
                    onClick={() => {
                      const emailBody = `Hello Hilton Plastic,\n\nI am interested in the following product:\n\nModel #: ${selectedProduct.id}\nProduct: ${selectedProduct.name}\nSize: ${selectedProduct.size}\nVariant: ${selectedProduct.variant}\n\nPlease send me pricing, minimum order quantity, and availability.\n\nThank you.`;
                      const subject = `Inquiry: Model ${selectedProduct.id} – ${selectedProduct.name}`;
                      triggerEmailInquiry(subject, emailBody);
                    }}
                    className="w-full text-center bg-primary text-surface-white py-3 rounded text-xs font-bold font-headline hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 focus:outline-none shadow-sm cursor-pointer"
                  >
                    📧 Send Email Inquiry for This Item
                  </button>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1.5 text-[10px] sm:text-xs">
                    <a
                      href="tel:+919624096424"
                      className="flex-1 text-center border border-outline-variant text-on-surface-variant py-2.5 rounded font-bold hover:bg-surface-muted transition-colors flex items-center justify-center gap-1 focus:outline-none"
                    >
                      📞 Bharatbhai (Sales)
                    </a>
                    <a
                      href="tel:+919824096423"
                      className="flex-1 text-center border border-outline-variant text-on-surface-variant py-2.5 rounded font-bold hover:bg-surface-muted transition-colors flex items-center justify-center gap-1 focus:outline-none"
                    >
                      📞 Vishnubhai (Ops)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
