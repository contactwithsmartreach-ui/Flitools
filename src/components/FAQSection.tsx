"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, Zap, Lock, HardDrive } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ_DATA = [
  {
    question: "How does FliTools guarantee 100% privacy and client-side processing?",
    answer:
      "All calculations, media encoding, PDF merging, waveform rendering, and password generation are executed directly inside your web browser using Web APIs (such as WebAssembly, Web Audio, HTML5 Canvas, and Web Crypto). Your files never leave your computer or phone, and zero bytes are uploaded to remote servers."
  },
  {
    question: "Is FliTools free to use for personal and commercial projects?",
    answer:
      "Yes! All tools on FliTools are completely free with no user limits, subscriptions, software installation, or sign-ups required."
  },
  {
    question: "What types of utilities are available in the directory?",
    answer:
      "FliTools offers a comprehensive suite of utilities including: Image to GIF Converter, Video to GIF Converter, Image Compressor & Resizer, Voice Memo Waveform Trimmer, Markdown to HTML Converter, JSON Formatter & Validator, QR Code Generator, PDF Merger & Splitter, and Password Generator."
  },
  {
    question: "Can I use FliTools without an internet connection?",
    answer:
      "Yes. Once the webpage loads in your browser, all processing scripts run locally. You can compress images, split PDFs, or generate passwords even when completely offline."
  },
  {
    question: "Are there file size limits when processing media or PDFs?",
    answer:
      "Because processing happens locally on your own machine, file limits depend entirely on your device's available memory (RAM) and CPU performance, rather than artificial server constraints."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 px-4 md:px-12 bg-[#080314] text-white relative z-30">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-950/60 border border-purple-300/20 px-3.5 py-1 rounded-full text-xs text-purple-200 font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            Everything You Need to Know
          </h2>
          <p className="text-xs text-purple-300/60 max-w-xl mx-auto leading-relaxed">
            Learn more about our client-side architecture, data privacy guarantees, and how browser-native tools outperform traditional cloud convertors.
          </p>
        </div>

        {/* Feature Grid Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
          <div className="p-4 rounded-2xl border border-purple-300/20 bg-purple-950/30 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-300/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-purple-300" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Zero File Uploads</h4>
              <p className="text-[10px] text-purple-300/60">Files stay in RAM</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-purple-300/20 bg-purple-950/30 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-300/20 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-purple-300" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">High Speed</h4>
              <p className="text-[10px] text-purple-300/60">Local CPU/GPU render</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-purple-300/20 bg-purple-950/30 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-300/20 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4 text-purple-300" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">100% Confidential</h4>
              <p className="text-[10px] text-purple-300/60">No data logging</p>
            </div>
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-3 pt-2">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[rgba(75,30,133,0.5)] bg-gradient-to-br from-[rgba(45,15,85,0.6)] via-purple-900/20 to-purple-950/60 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-purple-900/30 transition-colors"
                >
                  <span className="text-sm font-medium text-purple-100 pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-purple-900/60 border border-purple-300/20 flex items-center justify-center text-purple-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-purple-700 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-xs text-purple-200/80 leading-relaxed border-t border-purple-300/10 pt-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}