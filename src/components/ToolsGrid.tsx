"use client";

import React, { useState, useMemo } from "react";
import { TOOLS_LIST, CATEGORIES, ToolItem } from "@/data/tools";
import { 
  Search, 
  FileText, 
  Code, 
  Image as ImageIcon, 
  Sparkles, 
  Wrench, 
  Layers,
  Film,
  QrCode,
  Shield,
  Mic,
  FileCode,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5 text-purple-200" />,
  Code: <Code className="w-5 h-5 text-purple-200" />,
  FileCode: <FileCode className="w-5 h-5 text-purple-200" />,
  Image: <ImageIcon className="w-5 h-5 text-purple-200" />,
  Film: <Film className="w-5 h-5 text-purple-200" />,
  QrCode: <QrCode className="w-5 h-5 text-purple-200" />,
  Shield: <Shield className="w-5 h-5 text-purple-200" />,
  Mic: <Mic className="w-5 h-5 text-purple-200" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-200" />,
  Wrench: <Wrench className="w-5 h-5 text-purple-200" />
};

interface ToolsGridProps {
  onSelectTool?: (tool: ToolItem) => void;
}

export default function ToolsGrid({ onSelectTool }: ToolsGridProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Memoize search filtering to prevent re-computation on unrelated state updates
  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();
    return TOOLS_LIST.filter((tool) => {
      const matchesCategory =
        selectedCategory === "All" || tool.category === selectedCategory;
      const matchesSearch =
        !query ||
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <section id="tools-directory" className="w-full py-16 px-4 md:px-12 bg-[#080314]/90 text-white relative z-30 transform-gpu">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-purple-900/30 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              Directory & Utilities
            </h2>
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300/60 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools..."
              className="w-full bg-[#170830] rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow-md shadow-purple-900/50"
                  : "bg-purple-950/60 text-purple-200 hover:bg-purple-900/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid display */}
        {filteredTools.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-purple-950/20">
            <Layers className="w-10 h-10 text-purple-400/60 mx-auto mb-3" />
            <h3 className="text-base font-medium text-purple-100">No tools found</h3>
            <p className="text-xs text-purple-300/60 mt-1 max-w-sm mx-auto">
              We couldn't find any tools matching your search criteria. Try adjusting your query or filter category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  layout="position"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={() => onSelectTool?.(tool)}
                  className="relative min-h-[19em] w-full rounded-3xl bg-gradient-to-br from-[#240c42] via-[#1a0733] to-[#120424] text-white p-6 flex justify-between flex-col gap-4 hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-300 group/card hover:-translate-y-1 cursor-pointer overflow-hidden transform-gpu"
                >
                  <div className="absolute top-5 right-5 flex items-center gap-2 z-20">
                    {tool.badge && (
                      <span className="bg-purple-950/90 text-purple-200 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 space-y-3 pt-1">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-2xl bg-purple-900/50 flex items-center justify-center">
                        {iconMap[tool.iconName] || <Wrench className="w-5 h-5 text-purple-200" />}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-200/90 bg-purple-950/80 px-2.5 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-white group-hover/card:text-purple-200 transition-colors">
                      {tool.title}
                    </h3>

                    <p className="text-xs text-purple-100/80 leading-relaxed font-light line-clamp-3">
                      {tool.description}
                    </p>
                  </div>

                  {/* Clean, High-Contrast Action Button */}
                  <div className="relative z-10 pt-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 group-hover/card:bg-purple-500 text-white text-xs font-semibold transition-all duration-200 shadow-md shadow-purple-950/40">
                      <span>Explore Tool</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white group-hover/card:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}