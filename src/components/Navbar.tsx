"use client";

import React from "react";
import { Plus, Grid } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-4 md:px-8 md:py-6 flex items-center justify-between"
    >
      {/* Left side items */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Logo: two rotated rounded rectangles at -35deg */}
        <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/10 shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <rect
              x="5"
              y="4"
              width="6"
              height="14"
              rx="2.5"
              fill="#000000"
              transform="rotate(-35 8 11)"
            />
            <rect
              x="12"
              y="4"
              width="6"
              height="14"
              rx="2.5"
              fill="#000000"
              transform="rotate(-35 15 11)"
            />
          </svg>
          <span className="font-semibold text-sm tracking-tight text-black hidden md:inline-block">
            FliTools
          </span>
        </div>

        {/* Menu button */}
        <button
          onClick={onMenuClick}
          className="flex items-center gap-2 bg-black text-white rounded-full px-3 py-1.5 hover:bg-neutral-800 transition-all cursor-pointer shadow-md"
        >
          <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0">
            <Plus className="w-3 h-3 stroke-[3]" />
          </div>
          <span className="text-[11px] font-medium tracking-wide">Menu</span>
        </button>

        {/* Tags pill */}
        <div className="hidden md:flex items-center gap-3 bg-[#F4F4F6]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 text-[11px] text-neutral-600 font-medium">
          <span>Tool Directory</span>
          <span className="w-1 h-1 rounded-full bg-neutral-400" />
          <span>Cognitive AI</span>
        </div>
      </div>

      {/* Right side items */}
      <div className="hidden md:flex items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-2 bg-[#F4F4F6]/90 backdrop-blur-md pl-1.5 pr-3.5 py-1.5 rounded-full border border-black/5 text-[11px] font-medium text-neutral-800">
          <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white shrink-0">
            {/* 4-dot grid icon */}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <circle cx="2" cy="2" r="1.2" />
              <circle cx="8" cy="2" r="1.2" />
              <circle cx="2" cy="8" r="1.2" />
              <circle cx="8" cy="8" r="1.2" />
            </svg>
          </div>
          <span>Adaptive Systems</span>
        </div>
      </div>
    </motion.nav>
  );
}