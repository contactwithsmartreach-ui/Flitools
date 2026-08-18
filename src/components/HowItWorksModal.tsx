"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
}

export default function HowItWorksModal({ isOpen, onClose, onExplore }: HowItWorksModalProps) {
  if (!isOpen) return null;

  const steps = [
    {
      number: "01",
      icon: <Search className="w-5 h-5 text-purple-200" />,
      title: "Select Your Utility",
      description: "Browse our browser-native directory for media converters, document processors, or developer tools. No sign-ups or installation required."
    },
    {
      number: "02",
      icon: <Cpu className="w-5 h-5 text-purple-200" />,
      title: "Local Execution",
      description: "Drag & drop files or type input. Your browser executes calculations in real-time using WebAssembly, Web Audio, and Web Crypto APIs."
    },
    {
      number: "03",
      icon: <ShieldCheck className="w-5 h-5 text-purple-200" />,
      title: "100% Private Export",
      description: "Save your processed files directly to your device. Zero bytes leave your machine—guaranteeing complete privacy and high-speed execution."
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-purple-950/70 backdrop-blur-md"
        />

        {/* Modal Container with purple glass theme */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-gradient-to-br from-[#1d0b36] via-[#2d0f55] to-[#120524] text-white rounded-3xl shadow-2xl border-2 border-[rgba(75,30,133,0.6)] overflow-hidden z-10 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-purple-300/10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/70">
                  Client-Side Architecture
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                How FliTools Works
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-purple-900/40 hover:bg-purple-800/60 border border-purple-300/20 text-purple-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Steps list styled like mini glass cards */}
          <div className="py-6 space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex items-start gap-4 p-4 rounded-[1.2em] border border-[rgba(75,30,133,0.5)] bg-gradient-to-br from-[rgba(75,30,133,0.6)] via-purple-900/40 to-[rgba(75,30,133,0.2)] backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-300/20 flex items-center justify-center shrink-0 shadow-inner">
                  {step.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                    <span className="text-[11px] font-mono font-medium text-purple-300/60">{step.number}</span>
                  </div>
                  <p className="text-xs text-purple-100/80 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-purple-300/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-medium text-purple-200/80 hover:bg-purple-900/30 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onExplore();
              }}
              className="relative overflow-hidden flex items-center gap-2 bg-gradient-to-r from-[rgba(75,30,133,1)] via-purple-700 to-[rgba(75,30,133,0.9)] text-white px-6 py-2.5 rounded-full text-xs font-medium border border-purple-300/30 hover:border-purple-300/60 transition-all shadow-md cursor-pointer group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Explore Tools</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 text-purple-200 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}