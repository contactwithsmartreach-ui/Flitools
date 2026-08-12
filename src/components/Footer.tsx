"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-100 text-neutral-600 text-xs py-8 px-4 md:px-12 z-30 relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Links & Brand Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <rect x="5" y="4" width="6" height="14" rx="2.5" fill="#000000" transform="rotate(-35 8 11)" />
              <rect x="12" y="4" width="6" height="14" rx="2.5" fill="#000000" transform="rotate(-35 15 11)" />
            </svg>
            <span className="font-semibold text-neutral-900 tracking-tight">FliTools</span>
          </div>

          {/* Legal Pages Navigation */}
          <div className="flex items-center gap-6 font-medium text-neutral-600">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-black transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}