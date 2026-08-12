"use client";

import React, { useState } from "react";
import { TOOLS_LIST, CATEGORIES, ToolItem } from "@/data/tools";
import { 
  Search, 
  FileText, 
  Code, 
  Image as ImageIcon, 
  Sparkles, 
  Wrench, 
  ArrowRight,
  Layers,
  Film,
  QrCode,
  Shield,
  Mic,
  FileCode,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  Code: <Code className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  FileCode: <FileCode className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  Image: <ImageIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  Film: <Film className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  QrCode: <QrCode className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  Shield: <Shield className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  Mic: <Mic className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  Sparkles: <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
  Wrench: <Wrench className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
};

interface ToolsGridProps {
  onSelectTool?: (tool: ToolItem) => void;
}

export default function ToolsGrid({ onSelectTool }: ToolsGridProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = TOOLS_LIST.filter((tool) => {
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;
    const matchesSearch =
      tool.title.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tools-directory" className="w-full py-16 px-4 md:px-12 bg-white text-black relative z-30">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-full text-xs font-medium text-neutral-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span>Catalog ({TOOLS_LIST.length} Tools Available)</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900">
              Directory & Utilities
            </h2>
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools..."
              className="w-full bg-neutral-50 border border-neutral-200 rounded-full pl-10 pr-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid display */}
        {filteredTools.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/50">
            <Layers className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-base font-medium text-neutral-700">No tools found</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
              We couldn't find any tools matching your criteria. Try adjusting your search query or selected category.
            </p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectTool?.(tool)}
                  className="group relative bg-neutral-50/60 hover:bg-white rounded-3xl p-6 border border-neutral-200/80 hover:border-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top subtle accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-900 via-neutral-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex items-center justify-center text-neutral-900 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                        {iconMap[tool.iconName] || <Wrench className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />}
                      </div>

                      {tool.badge ? (
                        <span className="inline-flex items-center gap-1 bg-black text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                          <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{tool.badge}</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono font-medium text-neutral-400 bg-white border border-neutral-200/80 px-2.5 py-1 rounded-full">
                          Ready
                        </span>
                      )}
                    </div>

                    {/* Tool Title & Description */}
                    <h3 className="text-lg font-medium text-neutral-900 group-hover:text-black mb-2 flex items-center justify-between">
                      <span>{tool.title}</span>
                    </h3>
                    
                    <p className="text-xs text-neutral-500 group-hover:text-neutral-600 line-clamp-2 leading-relaxed transition-colors">
                      {tool.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-medium">
                    <span className="bg-white border border-neutral-200/80 px-3 py-1 rounded-full text-[11px] font-normal text-neutral-600 shadow-2xs">
                      {tool.category}
                    </span>

                    <span className="flex items-center gap-1.5 text-black font-semibold text-xs group-hover:translate-x-1 transition-transform duration-200">
                      <span>Launch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}