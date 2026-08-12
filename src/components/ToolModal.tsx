"use client";

import React, { useState } from "react";
import { ToolItem } from "@/data/tools";
import { X, ExternalLink, Sparkles, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ToolModalProps {
  tool: ToolItem | null;
  onClose: () => void;
}

export default function ToolModal({ tool, onClose }: ToolModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!tool) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full bg-white rounded-3xl shadow-2xl border border-neutral-200 text-black overflow-hidden flex flex-col transition-all duration-300 ${
            isFullscreen ? "h-[96vh] max-w-[98vw]" : "h-[88vh] max-w-5xl"
          }`}
        >
          {/* Header bar */}
          <div className="px-3 sm:px-6 py-3 border-b border-neutral-200 flex items-center justify-between gap-2 bg-neutral-50/80 shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="bg-black text-white text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full shrink-0">
                {tool.category}
              </span>
              <h3 className="text-xs sm:text-base font-medium text-neutral-900 truncate">
                {tool.title}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="w-8 h-8 rounded-full bg-neutral-200/70 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors shrink-0"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <a
                href={tool.htmlPath || tool.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-200/70 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors shrink-0"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-black text-white hover:bg-neutral-800 flex items-center justify-center transition-colors shrink-0"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 w-full h-full bg-neutral-100 overflow-hidden relative">
            {tool.htmlPath ? (
              <iframe
                src={tool.htmlPath}
                title={tool.title}
                className="w-full h-full border-none"
              />
            ) : (
              <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-4 bg-white">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-7 h-7 animate-spin-slow" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-lg font-medium text-neutral-800">Tool Interface Placeholder</h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    Attach your HTML file for <span className="font-semibold">{tool.title}</span> and it will be embedded directly inside this live frame.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}