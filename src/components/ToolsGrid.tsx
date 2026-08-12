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
  Layers,
  Film,
  QrCode,
  Shield,
  Mic,
  FileCode
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

  const filteredTools = TOOLS_LIST.filter((tool) => {
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;
    const matchesSearch =
      tool.title.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tools-directory" className="w-full py-16 px-4 md:px-12 bg-[#080314]/90 text-white relative z-30">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-purple-900/30 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              Directory & Utilities
            </h2>
          </div>

          {/* Search input with purple glass glow */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300/60" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools..."
              className="w-full bg-purple-950/40 border border-purple-300/20 rounded-full pl-10 pr-4 py-2.5 text-xs text-purple-100 placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer border ${
                selectedCategory === cat
                  ? "border-[rgba(75,30,133,0.8)] bg-gradient-to-r from-[rgba(75,30,133,1)] via-purple-700 to-[rgba(75,30,133,0.9)] text-white shadow-md shadow-purple-950/50"
                  : "border-purple-300/20 bg-purple-950/30 text-purple-200 hover:bg-purple-900/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid display using Uiverse card structure */}
        {filteredTools.length === 0 ? (
          <div className="py-20 text-center rounded-3xl border-2 border-dashed border-purple-900/30 bg-purple-950/20">
            <Layers className="w-10 h-10 text-purple-400/60 mx-auto mb-3" />
            <h3 className="text-base font-medium text-purple-100">No tools found</h3>
            <p className="text-xs text-purple-300/60 mt-1 max-w-sm mx-auto">
              We couldn't find any tools matching your search criteria. Try adjusting your query or filter category.
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
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectTool?.(tool)}
                  className="relative min-h-[19em] w-full border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] via-purple-700/80 to-[rgba(75,30,133,0.2)] text-white p-[1.5em] flex justify-between flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group/card hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em] pointer-events-none"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover/card:animate-pulse pointer-events-none"></div>

                  <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                    {tool.badge && (
                      <span className="bg-purple-950/80 border border-purple-300/30 text-purple-100 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full">
                        {tool.badge}
                      </span>
                    )}
                    <div className="flex gap-1.5 ml-1">
                      <div className="w-2 h-2 rounded-full bg-purple-300/50"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-300/30"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-300/10"></div>
                    </div>
                  </div>

                  <div className="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3 pt-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-300/20 shadow-inner">
                        {iconMap[tool.iconName] || <Wrench className="w-5 h-5 text-purple-200" />}
                      </div>
                      <span className="text-[11px] font-medium tracking-wide uppercase text-purple-200/80 bg-purple-950/40 px-2.5 py-0.5 rounded-full border border-purple-300/10">
                        {tool.category}
                      </span>
                    </div>

                    <h1 className="text-[1.5em] font-bold leading-tight bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
                      {tool.title}
                    </h1>

                    <p className="text-[0.88em] text-purple-100/90 leading-relaxed font-light line-clamp-3">
                      {tool.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-2">
                    <button
                      className="relative h-fit w-fit px-[1.4em] py-[0.7em] border-[1px] border-purple-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-purple-500/10 text-white cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>

                      <p className="relative z-10 font-medium tracking-wide text-xs">Explore Now</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="relative z-10 w-4 h-4 group-hover/btn:translate-x-[10%] transition-transform duration-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover/card:animate-pulse pointer-events-none"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}