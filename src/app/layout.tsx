import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FAQ_DATA } from "@/data/faq";

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
  verification: {
    google: "8f5oGnTurIKaIFnVOX8xhKQfUOsuSMFkb8DcoY-5OBg",
  },
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
    "markdown to html",
    "free online converter",
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
        url: "https://flitools.cyou/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FliTools — Client-Side Digital Utilities Directory",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FliTools — Free Client-Side Digital Utilities",
    description:
      "Convert GIFs, compress photos, merge PDFs, trim waveforms, and format JSON locally in your browser. No files leave your device.",
    images: ["https://flitools.cyou/opengraph-image"],
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
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Construct FAQPage structured JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  // Construct WebSite & WebApplication structured JSON-LD schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FliTools",
    "url": "https://flitools.cyou",
    "description": "100% Client-Side Free Digital Utilities Directory & Media Converters",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="8f5oGnTurIKaIFnVOX8xhKQfUOsuSMFkb8DcoY-5OBg" />
        <meta name="monetag" content="baab059b9971b49bcca61ee98d6c0cae" />
        <script src="https://quge5.com/88/tag.min.js" data-zone="270108" async data-cfasync="false"></script>
        {/* Direct Open Graph meta tags for WhatsApp, Telegram, iMessage & Facebook crawlers */}
        <meta property="og:title" content="FliTools — 100% Client-Side Free Digital Utilities" />
        <meta property="og:description" content="Process images, videos, audio, PDFs, and code directly in your browser with zero server uploads." />
        <meta property="og:image" content="https://flitools.cyou/opengraph-image" />
        <meta property="og:image:secure_url" content="https://flitools.cyou/opengraph-image" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FliTools — Client-Side Digital Utilities Directory" />
        <meta property="og:url" content="https://flitools.cyou" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FliTools" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FliTools — 100% Client-Side Free Digital Utilities" />
        <meta name="twitter:description" content="Convert GIFs, compress photos, merge PDFs, trim waveforms, and format JSON locally in your browser. No files leave your device." />
        <meta name="twitter:image" content="https://flitools.cyou/opengraph-image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080314] text-white selection:bg-purple-500 selection:text-white`}
      >
        <script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}