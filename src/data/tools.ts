import { LucideIcon, Wrench, Code, FileText, Image, Zap, Cpu, Sparkles, Layers, Film, QrCode, Shield, Mic, FileCode } from "lucide-react";

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  path: string;
  iconName: string;
  category: string;
  badge?: string;
  isExternal?: boolean;
  htmlPath?: string;
}

export const TOOLS_LIST: ToolItem[] = [
  {
    id: "audio-studio",
    title: "Audio Studio",
    description: "Edit, process, analyze, and convert audio files completely inside your browser.",
    path: "/tools/audio-studio.html",
    htmlPath: "/tools/audio-studio.html",
    iconName: "Mic",
    category: "Media",
    badge: "Live Tool"
  },
  {
    id: "pdf-studio",
    title: "PDF Studio",
    description: "Complete client-side suite for viewing, editing, organizing, and converting PDF documents.",
    path: "/tools/pdf-studio.html",
    htmlPath: "/tools/pdf-studio.html",
    iconName: "FileText",
    category: "Documents",
    badge: "Live Tool"
  },
  {
    id: "image-to-pdf",
    title: "Image to PDF Converter",
    description: "Convert and combine multiple images into a single PDF document 100% locally.",
    path: "/tools/image-to-pdf.html",
    htmlPath: "/tools/image-to-pdf.html",
    iconName: "FileText",
    category: "Documents",
    badge: "Live Tool"
  },
  {
    id: "image-to-text-ocr",
    title: "Image to Text (OCR)",
    description: "Extract readable text from photos, screenshots, and scanned documents 100% locally.",
    path: "/tools/image-to-text-ocr.html",
    htmlPath: "/tools/image-to-text-ocr.html",
    iconName: "FileText",
    category: "Utilities",
    badge: "Live Tool"
  },
  {
    id: "img-to-gif",
    title: "Image to GIF Converter",
    description: "Convert sequence of images into animated GIFs directly in your browser.",
    path: "/tools/img-to-gif.html",
    htmlPath: "/tools/img-to-gif.html",
    iconName: "Image",
    category: "Media",
    badge: "Live Tool"
  },
  {
    id: "video-to-gif",
    title: "Video to GIF Converter",
    description: "Trim, adjust frame rates, and convert video clips into optimized animated GIFs.",
    path: "/tools/video-to-gif.html",
    htmlPath: "/tools/video-to-gif.html",
    iconName: "Film",
    category: "Media",
    badge: "Live Tool"
  },
  {
    id: "image-compressor-resizer",
    title: "Image Compressor & Resizer",
    description: "Compress, resize, scale, and convert image formats locally with zero quality loss.",
    path: "/tools/image-compressor-resizer.html",
    htmlPath: "/tools/image-compressor-resizer.html",
    iconName: "Image",
    category: "Media",
    badge: "Live Tool"
  },
  {
    id: "voice-memo-waveform-trimmer",
    title: "Voice Memo Waveform Trimmer",
    description: "Record audio or load voice memos, visualize waveforms, trim precision clips, and export locally.",
    path: "/tools/voice-memo-waveform-trimmer.html",
    htmlPath: "/tools/voice-memo-waveform-trimmer.html",
    iconName: "Mic",
    category: "Media",
    badge: "Live Tool"
  },
  {
    id: "markdown-html-converter",
    title: "Markdown to HTML Converter",
    description: "Convert Markdown to sanitized HTML with live side-by-side preview and rich formatting.",
    path: "/tools/markdown-html-converter.html",
    htmlPath: "/tools/markdown-html-converter.html",
    iconName: "FileCode",
    category: "Developer",
    badge: "Live Tool"
  },
  {
    id: "json-formatter-validator",
    title: "JSON Formatter & Validator",
    description: "Clean, format, validate, minify, and inspect JSON data with precise error highlighting.",
    path: "/tools/json-formatter-validator.html",
    htmlPath: "/tools/json-formatter-validator.html",
    iconName: "Code",
    category: "Developer",
    badge: "Live Tool"
  },
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    description: "Generate and customize clean QR codes instantly with instant export options.",
    path: "/tools/qr-code-generator.html",
    htmlPath: "/tools/qr-code-generator.html",
    iconName: "QrCode",
    category: "Utilities",
    badge: "Live Tool"
  },
  {
    id: "pdf-merger-splitter",
    title: "PDF Merger & Splitter",
    description: "Merge multiple PDFs or extract specific page ranges securely in your browser.",
    path: "/tools/pdf-merger-splitter.html",
    htmlPath: "/tools/pdf-merger-splitter.html",
    iconName: "FileText",
    category: "Documents",
    badge: "Live Tool"
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description: "Generate strong, secure passwords and passphrase combinations with instant entropy rating.",
    path: "/tools/password-generator.html",
    htmlPath: "/tools/password-generator.html",
    iconName: "Shield",
    category: "Utilities",
    badge: "Live Tool"
  }
];

export const CATEGORIES = ["All", "Media", "Documents", "Utilities", "Developer"];