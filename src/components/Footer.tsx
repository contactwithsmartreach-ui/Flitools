"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-100 text-neutral-600 text-xs py-12 px-4 md:px-12 z-30 relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* Top Disclaimer Badge Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
          <div className="flex items-center gap-2.5 text-neutral-800 font-medium shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Client-Side Privacy Guarantee</span>
          </div>
          <p className="text-neutral-500 text-[11px] leading-relaxed max-w-xl">
            All file processing, conversions, and generation happen locally on your device. Zero data or files are ever transmitted to any external server.
          </p>
        </div>

        {/* Links & Copyright Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-neutral-100">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <rect x="5" y="4" width="6" height="14" rx="2.5" fill="#000000" transform="rotate(-35 8 11)" />
              <rect x="12" y="4" width="6" height="14" rx="2.5" fill="#000000" transform="rotate(-35 15 11)" />
            </svg>
            <span className="font-semibold text-neutral-900 tracking-tight">FliTools</span>
            <span className="text-neutral-400">© {new Date().getFullYear()}</span>
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

        {/* Branding Credit */}
        <div className="pt-2">
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
}