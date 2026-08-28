"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ToolsGrid from "@/components/ToolsGrid";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import LoaderScreen from "@/components/LoaderScreen";
import type { ToolItem } from "@/data/tools";
import { ArrowRight } from "lucide-react";

const DIRECT_LINK_URL = "https://omg10.com/4/11677481";

// Code-split heavy interactive modals so they load dynamically on demand
const ToolModal = dynamic(() => import("@/components/ToolModal"), {
  ssr: false,
});

const HowItWorksModal = dynamic(() => import("@/components/HowItWorksModal"), {
  ssr: false,
});

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  const scrollToTools = () => {
    window.open(DIRECT_LINK_URL, "_blank");
    const el = document.getElementById("tools-directory");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080314] text-white flex flex-col justify-between overflow-x-hidden font-sans">
      
      {/* Starting loader screen */}
      <LoaderScreen />

      {/* Fixed Navbar at top */}
      <Navbar onMenuClick={scrollToTools} onSelectTool={(tool) => {
        window.open(DIRECT_LINK_URL, "_blank");
        setSelectedTool(tool);
      }} />

      {/* Hero Section Container (Full Viewport) */}
      <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-4 md:px-12 z-10 overflow-hidden">
        
        {/* Absolutely positioned full-screen background video with smooth edge fading */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none transform-gpu"
        >
          {/* Video Wrapper */}
          <div className="w-full h-full relative overflow-hidden">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-50 transform-gpu"
            />
            {/* Left and Right Side Fading */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080314] via-transparent via-30% via-70% to-[#080314] pointer-events-none" />
            
            {/* Top and Bottom Fading */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080314]/80 via-transparent via-40% to-[#080314] pointer-events-none" />
            
            {/* Radial Vignette to soften all corner edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080314_85%)] pointer-events-none" />
          </div>
        </motion.div>

        {/* Spacer for center flex layout */}
        <div className="flex-1" />

        {/* Footer Content pinned to bottom over dark gradient fade-up */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 w-full pt-16 pb-4 bg-gradient-to-t from-[#080314] via-[#080314]/90 to-transparent flex flex-col md:flex-row md:items-end justify-between gap-8 transform-gpu"
        >
          {/* Left block */}
          <div className="flex flex-col gap-4 max-w-3xl">

            {/* Heading */}
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-light text-[clamp(2rem,8vw,4.5rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-[-0.03em] leading-none text-white"
            >
              Free Digital Tools. <br />
              Private & In-Browser.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-[16px] md:text-[18px] text-purple-100/90 leading-relaxed font-light max-w-[300px] md:max-w-[560px]"
            >
              Process PDFs, media, and code with 100% client-side privacy. All conversions run locally inside your browser with zero server uploads.
            </motion.p>

            {/* CTA Buttons Block */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 flex-wrap sm:flex-nowrap pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={scrollToTools}
                className="relative h-fit w-fit px-6 py-3 border-2 border-[rgba(75,30,133,0.7)] rounded-full flex justify-center items-center gap-2.5 overflow-hidden group/btn hover:border-purple-300/80 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-gradient-to-r from-[rgba(75,30,133,1)] via-purple-700 to-[rgba(75,30,133,0.9)] text-white shadow-md cursor-pointer transform-gpu"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                <p className="relative z-10 font-semibold tracking-wide text-xs">Browse Free Tools</p>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-[10%] transition-transform duration-300 text-purple-200" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  window.open(DIRECT_LINK_URL, "_blank");
                  setIsHowItWorksOpen(true);
                }}
                className="relative h-fit w-fit px-5 py-2.5 border border-purple-400/25 rounded-full flex justify-center items-center gap-2 overflow-hidden group/btn hover:border-purple-300/50 hover:bg-[#211033] active:scale-95 transition-all duration-300 backdrop-blur-[10px] bg-[#211033]/60 text-purple-200/85 hover:text-white font-medium cursor-pointer text-xs transform-gpu"
              >
                <span>How It Works</span>
              </button>
            </motion.div>
          </div>

          {/* Right block: Category tag pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-2 flex-wrap md:flex-nowrap"
          >
            {["PDF Studio", "Media Converters", "Developer Tools"].map((tag) => (
              <span
                key={tag}
                className="border border-[rgba(168,85,247,0.3)] bg-purple-950/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-medium text-purple-200 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Tool Directory Section */}
      <ToolsGrid onSelectTool={(tool) => {
        window.open(DIRECT_LINK_URL, "_blank");
        setSelectedTool(tool);
      }} />

      {/* FAQ Section with JSON-LD backing */}
      <FAQSection />

      {/* Lazy-loaded Tool Runner Modal */}
      {selectedTool && (
        <ToolModal
          tool={selectedTool}
          onClose={() => setSelectedTool(null)}
        />
      )}

      {/* Lazy-loaded How It Works Modal */}
      {isHowItWorksOpen && (
        <HowItWorksModal
          isOpen={isHowItWorksOpen}
          onClose={() => setIsHowItWorksOpen(false)}
          onExplore={scrollToTools}
        />
      )}

      {/* Footer Branding & Legal Links */}
      <Footer />
    </div>
  );
}