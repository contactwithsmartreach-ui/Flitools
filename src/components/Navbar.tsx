"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Wrench, ExternalLink, Sparkles, Image, Film, Mic, FileCode, Code, QrCode, FileText, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TOOLS_LIST, ToolItem } from "@/data/tools";

interface NavbarProps {
  onMenuClick?: () => void;
  onSelectTool?: (tool: ToolItem) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Image: <Image className="w-3.5 h-3.5 text-purple-200" />,
  Film: <Film className="w-3.5 h-3.5 text-purple-200" />,
  Mic: <Mic className="w-3.5 h-3.5 text-purple-200" />,
  FileCode: <FileCode className="w-3.5 h-3.5 text-purple-200" />,
  Code: <Code className="w-3.5 h-3.5 text-purple-200" />,
  QrCode: <QrCode className="w-3.5 h-3.5 text-purple-200" />,
  FileText: <FileText className="w-3.5 h-3.5 text-purple-200" />,
  Shield: <Shield className="w-3.5 h-3.5 text-purple-200" />,
};

export default function Navbar({ onMenuClick, onSelectTool }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-4 md:px-8 md:py-6 flex items-center justify-between transform-gpu"
    >
      {/* Left side items */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 bg-gradient-to-br from-[#2a134a] via-[#4b1e85] to-[#1e0a38] text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-300/30 shadow-lg shadow-purple-900/30 hover:border-purple-300/60 transition-all group transform-gpu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <rect x="5" y="4" width="6" height="14" rx="2.5" fill="#e9d5ff" transform="rotate(-35 8 11)" />
            <rect x="12" y="4" width="6" height="14" rx="2.5" fill="#c084fc" transform="rotate(-35 15 11)" />
          </svg>
          <span className="font-semibold text-sm tracking-tight text-white hidden md:inline-block">
            FliTools
          </span>
        </a>

        {/* Tools Dropdown Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative overflow-hidden flex items-center gap-2 text-white rounded-full px-4 py-1.5 transition-all cursor-pointer shadow-md text-[11px] font-medium tracking-wide border border-purple-300/30 bg-gradient-to-r from-purple-900/90 via-purple-700/80 to-purple-950/90 hover:border-purple-300/60 hover:shadow-purple-500/20 active:scale-95 group/btn transform-gpu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>

            <div className="w-5 h-5 rounded-full bg-purple-300/20 text-purple-200 flex items-center justify-center shrink-0 border border-purple-300/30">
              <Wrench className="w-3 h-3 stroke-[2.5]" />
            </div>
            <span className="relative z-10">Tools</span>
            <ChevronDown className={`w-3 h-3 text-purple-200 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute left-0 mt-2 w-72 sm:w-80 bg-gradient-to-br from-[rgba(45,15,85,0.98)] via-[rgba(75,30,133,0.95)] to-[rgba(25,8,50,0.98)] backdrop-blur-2xl border-2 border-[rgba(168,85,247,0.4)] shadow-2xl shadow-purple-950/80 rounded-2xl p-2.5 z-50 text-white max-h-[80vh] overflow-y-auto scrollbar-none transform-gpu"
              >
                <div className="px-3 py-2 border-b border-purple-300/10 flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-200/60">
                    Tool Directory ({TOOLS_LIST.length})
                  </span>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onMenuClick?.();
                    }}
                    className="text-[10px] font-medium text-purple-300 hover:text-white underline"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-1">
                  {TOOLS_LIST.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleToolClick(tool)}
                      className="w-full flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-purple-600/20 border border-transparent hover:border-purple-300/20 transition-all text-left group transform-gpu"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-300/20 group-hover:bg-purple-600/40 flex items-center justify-center transition-colors shrink-0">
                          {iconMap[tool.iconName] || <Sparkles className="w-3.5 h-3.5 text-purple-200" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-white group-hover:text-purple-100 truncate">
                            {tool.title}
                          </p>
                          <p className="text-[10px] text-purple-300/60 truncate">
                            {tool.category}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-purple-400/50 group-hover:text-purple-200 transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tags pill */}
        <div className="hidden md:flex items-center gap-2.5 bg-purple-950/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-300/20 text-[11px] text-purple-200 font-medium transform-gpu">
          <span>Directory</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
          <span>Client-Side</span>
        </div>
      </div>

      {/* Right side items */}
      <div className="hidden md:flex items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-950/70 via-purple-900/50 to-purple-950/70 backdrop-blur-md pl-1.5 pr-3.5 py-1.5 rounded-full border border-purple-300/20 text-[11px] font-medium text-purple-200 shadow-sm transform-gpu">
          <div className="w-6 h-6 rounded-full bg-purple-800/80 border border-purple-300/30 flex items-center justify-center text-white shrink-0">
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