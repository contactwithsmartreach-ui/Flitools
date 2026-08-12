"use client";

import React from "react";
import { ToolItem } from "@/data/tools";
import { X, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ToolModalProps {
  tool: ToolItem | null;
  onClose: () => void;
}

export default function ToolModal({ tool, onClose }: ToolModalProps) {
  if (!tool) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-neutral-200 text-black overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-full text-xs font-medium text-neutral-600 mb-4">
            <span>{tool.category}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-2">
            {tool.title}
          </h2>
          <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
            {tool.description}
          </p>

          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-black text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-neutral-800">Tool Interface Ready</h4>
              <p className="text-xs text-neutral-500 mt-1">
                Attach your HTML file for <span className="font-semibold">{tool.title}</span> and we will hook it up directly to this pathway (<code className="bg-neutral-200/60 px-1 py-0.5 rounded text-[11px]">{tool.path}</code>).
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => alert(`Path set to: ${tool.path}. Send HTML code anytime to attach real implementation!`)}
              className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
            >
              <span>Launch Playground</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}