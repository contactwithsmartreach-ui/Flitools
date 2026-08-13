"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080314] text-white flex flex-col justify-between font-sans">
      <Navbar onMenuClick={() => window.location.href = "/#tools-directory"} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 md:px-8 pt-32 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-purple-300/80 hover:text-white mb-8 transition-colors bg-purple-950/40 border border-purple-300/20 px-3.5 py-1.5 rounded-full"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Directory</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-800 to-purple-950 border border-purple-300/30 text-white flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl font-light tracking-tight text-white">Terms of Service</h1>
            <p className="text-xs text-purple-300/60 mt-0.5">Last updated: February 2025</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-purple-100/80 text-sm leading-relaxed border-t border-purple-900/30 pt-8 mt-6">
          <section>
            <h2 className="text-lg font-medium text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using FliTools, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our web utilities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">2. Description of Utilities</h2>
            <p>
              FliTools provides free, client-side digital utilities for file conversion, media manipulation, code formatting, document processing, and utility generation. All calculations and operations occur directly in your web browser.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">3. Acceptable Use</h2>
            <p>
              You agree to use our web utilities solely for lawful purposes. You are responsible for ensuring that any files, media, or data you process using our tools comply with applicable copyright laws and privacy regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">4. Disclaimer of Warranty & Limitation of Liability</h2>
            <p>
              FliTools provides all tools "as is" and "as available" without warranties of any kind, whether express or implied. In no event shall FliTools or its developers be liable for any loss of data, corrupted files, system performance issues, or damages resulting from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">5. Intellectual Property</h2>
            <p>
              All branding, designs, layouts, and software integration on FliTools are the property of FliTools. Users retain full ownership and intellectual property rights over any files or output generated using our tools.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}