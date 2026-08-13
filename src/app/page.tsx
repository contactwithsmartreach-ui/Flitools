"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ToolsGrid from "@/components/ToolsGrid";
import ToolModal from "@/components/ToolModal";
import HowItWorksModal from "@/components/HowItWorksModal";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { ToolItem } from "@/data/tools";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  const scrollToTools = () => {
    const el = document.getElementById("tools-directory");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080314] text-white flex flex-col justify-between overflow-x-hidden font-sans">
      
      {/* Fixed Navbar at top */}
      <Navbar onMenuClick={scrollToTools} onSelectTool={(tool) => setSelectedTool(tool)} />

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
              One Hub, Zero <br />
              Limits. Worldwide.
            </motion.h1>

            {/* Buttons styled like purple glass cards */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 pt-2"
            >
              {/* Primary Purple Button */}
              <button
                onClick={scrollToTools}
                className="relative h-fit w-fit px-6 py-3 border-2 border-[rgba(75,30,133,0.6)] rounded-full flex justify-center items-center gap-2.5 overflow-hidden group/btn hover:border-purple-300/80 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-gradient-to-r from-[rgba(75,30,133,1)] via-purple-700 to-[rgba(75,30,133,0.8)] text-white shadow-md cursor-pointer transform-gpu"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                <p className="relative z-10 font-medium tracking-wide text-xs">Explore Directory</p>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-[10%] transition-transform duration-300 text-purple-200" />
              </button>

              {/* Secondary Purple Border Glass Button */}
              <button
                onClick={() => setIsHowItWorksOpen(true)}
                className="relative h-fit w-fit px-6 py-3 border-2 border-purple-300/30 rounded-full flex justify-center items-center gap-2 overflow-hidden group/btn hover:border-purple-300/60 hover:bg-purple-900/30 active:scale-95 transition-all duration-300 backdrop-blur-[12px] text-purple-200 font-medium cursor-pointer text-xs transform-gpu"
              >
                <span>How It Works</span>
              </button>
            </motion.div>
          </div>

          {/* Right block: Tag pills with purple glass theme */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-2 flex-wrap md:flex-nowrap"
          >
            {["Neuromorphic", "AGI", "Cybernetics"].map((tag) => (
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
      <ToolsGrid onSelectTool={(tool) => setSelectedTool(tool)} />

      {/* FAQ Section with JSON-LD backing */}
      <FAQSection />

      {/* Selected Tool Runner Modal */}
      <ToolModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
      />

      {/* How It Works Modal */}
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onExplore={scrollToTools}
      />

      {/* Footer Branding & Legal Links */}
      <Footer />
    </div>
  );
}