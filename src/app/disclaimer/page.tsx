"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, ArrowLeft, Cpu, ShieldCheck, HardDrive } from "lucide-react";

export default function DisclaimerPage() {
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
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl font-light tracking-tight text-neutral-900">Client-Side Disclaimer</h1>
            <p className="text-xs text-neutral-500 mt-0.5">Important disclosure regarding tool processing</p>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="p-4 rounded-2xl border border-neutral-200 bg-neutral-50">
            <Cpu className="w-5 h-5 text-black mb-2" />
            <h3 className="text-xs font-semibold text-neutral-900 mb-1">In-Browser Computing</h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              All computations use your device's native browser capabilities (WASM, Canvas, Web Audio).
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-neutral-200 bg-neutral-50">
            <HardDrive className="w-5 h-5 text-black mb-2" />
            <h3 className="text-xs font-semibold text-neutral-900 mb-1">Zero Server Uploads</h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Your files never leave your computer or phone. No network uploads or cloud backups exist.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-neutral-200 bg-neutral-50">
            <ShieldCheck className="w-5 h-5 text-black mb-2" />
            <h3 className="text-xs font-semibold text-neutral-900 mb-1">Maximum Security</h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Sensitive PDFs, images, and passwords remain entirely confidential and under your control.
            </p>
          </div>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-700 text-sm leading-relaxed border-t border-neutral-100 pt-8">
          <section>
            <h2 className="text-lg font-medium text-black mb-2">1. Client-Side Processing Disclosure</h2>
            <p>
              Every tool available on FliTools operates 100% locally inside your web browser. When you select or drag files into any tool (such as our Image Compressor, PDF Splitter, Video to GIF converter, or Waveform Trimmer), your browser reads and modifies the file in system memory (RAM).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black mb-2">2. Performance & Device Capabilities</h2>
            <p>
              Because all conversions are executed by your device's browser hardware:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-neutral-600">
              <li>Processing speeds depend on your computer or smartphone's processor (CPU/GPU) and available RAM.</li>
              <li>Extremely large files (such as multi-gigabyte video files) may require significant memory.</li>
              <li>No Internet connection is needed once the webpage is loaded.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black mb-2">3. Accuracy & Backup Recommendation</h2>
            <p>
              While our open-source processing libraries are rigorously tested, users should maintain backups of original files before converting or trimming documents and media. FliTools provides no guarantee against inadvertent file corruption during client-side operations.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}