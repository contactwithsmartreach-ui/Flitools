"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoaderScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick initial load timer for super fast experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080314] text-white select-none pointer-events-none"
        >
          {/* Ambient background glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-900/25 blur-[120px] pointer-events-none" />

          {/* Loader content */}
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-800 border border-purple-300/30 flex items-center justify-center text-white shadow-xl shadow-purple-950/80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="4" width="6" height="14" rx="2.5" fill="#e9d5ff" transform="rotate(-35 8 11)" />
                  <rect x="12" y="4" width="6" height="14" rx="2.5" fill="#c084fc" transform="rotate(-35 15 11)" />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white">
                FliTools
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xs text-purple-300/60 font-medium tracking-widest uppercase"
            >
              Loading 100% Client-Side Suite…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}