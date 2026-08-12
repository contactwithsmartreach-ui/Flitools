"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Wrench, ExternalLink, Sparkles, Image, Film, Mic, FileCode, Code, QrCode, FileText, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TOOLS_LIST, ToolItem } from "@/data/tools";

interface NavbarProps {
  onMenuClick?: () => void;
  onSelectTool?: (tool: ToolItem) => void;
}

// Icon helper map
const iconMap: Record<string, React.ReactNode> = {
  Image: <Image className="w-3.5 h-3.5" />,
  Film: <Film className="w-3.5 h-3.5" />,
  Mic: <Mic className="w-3.5 h-3.5" />,
  FileCode: <FileCode className="w-3.5 h-3.5" />,
  Code: <Code className="w-3.5 h-3.5" />,
  QrCode: <QrCode className="w-3.5 h-3.5" />,
  FileText: <FileText className="w-3.5 h-3.5" />,
  Shield: <Shield className="w-3.5 h-3.5" />,
};

export default function Navbar({ onMenuClick, onSelectTool }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToolClick = (tool: ToolItem) => {
    setIsOpen(false);
    if (onSelectTool) {
      onSelectTool(tool);
    } else {
      onMenuClick?.();
    }
  };

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-4 md:px-8 md:py-6 flex items-center justify-between"
    >
      {/* Left side items */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/10 shadow-sm hover:bg-white transition-colors">
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
        </a>

        {/* Tools Dropdown Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-black text-white rounded-full px-3.5 py-1.5 hover:bg-neutral-800 transition-all cursor-pointer shadow-md text-[11px] font-medium tracking-wide"
          >
            <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0">
              <Wrench className="w-3 h-3 stroke-[2.5]" />
            </div>
            <span>Tools</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute left-0 mt-2 w-72 sm:w-80 bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-2xl rounded-2xl p-2 z-50 text-black max-h-[80vh] overflow-y-auto"
              >
                <div className="px-3 py-2 border-b border-neutral-100 flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    Tool Directory ({TOOLS_LIST.length})
                  </span>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onMenuClick?.();
                    }}
                    className="text-[10px] font-medium text-black hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-0.5">
                  {TOOLS_LIST.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleToolClick(tool)}
                      className="w-full flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-neutral-100 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-neutral-100 group-hover:bg-black group-hover:text-white flex items-center justify-center text-neutral-700 transition-colors shrink-0">
                          {iconMap[tool.iconName] || <Sparkles className="w-3.5 h-3.5" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-neutral-900 group-hover:text-black truncate">
                            {tool.title}
                          </p>
                          <p className="text-[10px] text-neutral-400 truncate">
                            {tool.category}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-neutral-300 group-hover:text-neutral-700 transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tags pill */}
        <div className="hidden md:flex items-center gap-3 bg-[#F4F4F6]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 text-[11px] text-neutral-600 font-medium">
          <span>Tool Directory</span>
          <span className="w-1 h-1 rounded-full bg-neutral-400" />
          <span>Client-Side</span>
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