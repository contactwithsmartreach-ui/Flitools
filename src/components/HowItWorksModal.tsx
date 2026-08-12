"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Cpu, ShieldCheck, ArrowRight, Zap, HardDrive } from "lucide-react";

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
      icon: <Search className="w-5 h-5 text-black" />,
      title: "Select Your Utility",
      description: "Browse our browser-native directory for media converters, document processors, or developer tools. No sign-ups or installation required."
    },
    {
      number: "02",
      icon: <Cpu className="w-5 h-5 text-black" />,
      title: "Local Execution",
      description: "Drag & drop files or type input. Your browser executes calculations in real-time using WebAssembly, Web Audio, and Web Crypto APIs."
    },
    {
      number: "03",
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
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
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-neutral-200 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-neutral-100">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Client-Side Architecture
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-black">
                How FliTools Works
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Steps list */}
          <div className="py-6 space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-sm font-semibold text-xs">
                  {step.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-neutral-900">{step.title}</h3>
                    <span className="text-[11px] font-mono font-medium text-neutral-400">{step.number}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Banner note */}
          <div className="p-4 rounded-2xl bg-black text-white flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-400 shrink-0" />
              <p className="text-xs font-medium text-neutral-200">
                Works completely offline once loaded. Zero server lag.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-neutral-100">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onExplore();
              }}
              className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-neutral-800 transition-all shadow-sm cursor-pointer"
            >
              <span>Explore Tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}