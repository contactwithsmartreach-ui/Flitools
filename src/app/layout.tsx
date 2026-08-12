import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flitools.cyou"),
  title: {
    default: "FliTools — 100% Client-Side Digital Utilities & Media Tools",
    template: "%s | FliTools",
  },
  description:
    "Free, browser-native digital utilities for converting videos to GIFs, compressing images, trimming voice memos, merging PDFs, generating QR codes, and formatting JSON. 100% private with zero server uploads.",
  keywords: [
    "FliTools",
    "flitools.cyou",
    "client-side tools",
    "image compressor",
    "video to gif",
    "pdf merger",
    "waveform trimmer",
    "json formatter",
    "qr code generator",
    "password generator",
    "privacy digital tools",
  ],
  authors: [{ name: "FliTools", url: "https://flitools.cyou" }],
  creator: "FliTools",
  publisher: "FliTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://flitools.cyou",
  },
  openGraph: {
    title: "FliTools — 100% Client-Side Free Digital Utilities",
    description:
      "Process images, videos, audio, PDFs, and code directly in your browser with zero server uploads. High-speed, private, and free.",
    url: "https://flitools.cyou",
    siteName: "FliTools",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FliTools — Client-Side Digital Utilities & Media Directory",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FliTools — Free Client-Side Utilities",
    description:
      "Convert GIFs, compress photos, merge PDFs, trim waveforms, and format JSON locally in your browser. No files leave your device.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#080314",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080314] text-white selection:bg-purple-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}