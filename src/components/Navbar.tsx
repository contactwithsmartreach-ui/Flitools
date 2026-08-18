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
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-4 md:px-8 md:py-6 flex items-center justify-between"
    >
      {/* Left side items */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 bg-[#170830] text-white px-3.5 py-1.5 rounded-full shadow-lg hover:bg-purple-900 transition-colors"
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
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full px-4 py-1.5 transition-all cursor-pointer shadow-md text-xs font-semibold tracking-wide active:scale-95"
          >
            <Wrench className="w-3.5 h-3.5 text-white" />
            <span>Tools</span>
            <ChevronDown className={`w-3 h-3 text-purple-200 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute left-0 mt-2 w-72 sm:w-80 bg-[#16062d] shadow-2xl shadow-purple-950/90 rounded-2xl p-2.5 z-50 text-white max-h-[80vh] overflow-y-auto scrollbar-none border border-purple-800/40"
              >
                <div className="px-3 py-2 border-b border-purple-800/30 flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-200/70">
                    Tool Directory ({TOOLS_LIST.length})
                  </span>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onMenuClick?.();
                    }}
                    className="text-[10px] font-medium text-purple-300 hover:text-white underline cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-1">
                  {TOOLS_LIST.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleToolClick(tool)}
                      className="w-full flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-purple-600/30 transition-colors text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-purple-900/50 flex items-center justify-center shrink-0">
                          {iconMap[tool.iconName] || <Sparkles className="w-3.5 h-3.5 text-purple-200" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-white truncate">
                            {tool.title}
                          </p>
                          <p className="text-[10px] text-purple-300/60 truncate">
                            {tool.category}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-purple-300 shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tags pill */}
        <div className="hidden md:flex items-center gap-2.5 bg-purple-950/60 px-3.5 py-1.5 rounded-full text-[11px] text-purple-200 font-medium">
          <span>Directory</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span>Client-Side</span>
        </div>
      </div>

      {/* Right side items */}
      <div className="hidden md:flex items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-2 bg-[#170830] px-3.5 py-1.5 rounded-full text-[11px] font-medium text-purple-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Adaptive Systems</span>
        </div>
      </div>
    </motion.nav>
  );
}