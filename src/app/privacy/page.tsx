"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between font-sans">
      <Navbar onMenuClick={() => window.location.href = "/#tools-directory"} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 md:px-8 pt-32 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-black mb-8 transition-colors bg-neutral-100 px-3 py-1.5 rounded-full"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Directory</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl font-light tracking-tight text-neutral-900">Privacy Policy</h1>
            <p className="text-xs text-neutral-500 mt-0.5">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 text-sm leading-relaxed border-t border-neutral-100 pt-8 mt-6">
          <section>
            <h2 className="text-lg font-medium text-black mb-2">1. Zero Data Collection</h2>
            <p>
              At FliTools, we respect your privacy unconditionally. All digital tools hosted on this directory run 100% locally inside your web browser (client-side). We do not collect, store, transmit, or log any files, images, documents, audio clips, or inputs that you upload or process through our web tools.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black mb-2">2. Local Storage & Client Processing</h2>
            <p>
              Your browser processes all operations (such as GIF encoding, image compression, PDF merging, audio waveform rendering, and QR generation) directly on your CPU and GPU using standard Web APIs (such as Web Audio, HTML5 Canvas, and Web Crypto). No server-side file uploads occur at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black mb-2">3. Cookies & Tracking</h2>
            <p>
              FliTools does not use tracking cookies, analytics profiling, or third-party behavioral advertising scripts to track your activity across the internet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black mb-2">4. Third-Party Hosting & CDN Assets</h2>
            <p>
              Static site assets (such as fonts and open-source library bundles like pdf-lib or JSZip) are served securely via trusted Content Delivery Networks (CDNs). No personal information is provided to these providers during file operations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black mb-2">5. Policy Updates</h2>
            <p>
              If we update or expand our utility toolset, this privacy policy will be updated accordingly. Given our client-side architecture, your data privacy remains permanently safeguarded on your own device.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}