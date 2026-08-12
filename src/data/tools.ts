import { LucideIcon, Wrench, Code, FileText, Image, Zap, Cpu, Sparkles, Layers, Film, QrCode } from "lucide-react";

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
    description: "Compress, resize, and convert images to WebP, JPEG, or PNG directly in client memory.",
    path: "/tools/image-compressor-resizer.html",
    htmlPath: "/tools/image-compressor-resizer.html",
    iconName: "Image",
    category: "Media",
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
    id: "sample-1",
    title: "PDF Converter & Merger",
    description: "Fast in-browser PDF manipulation and page reordering.",
    path: "/tools/pdf-converter",
    iconName: "FileText",
    category: "Documents",
    badge: "Popular"
  },
  {
    id: "sample-2",
    title: "JSON Formatter & Validator",
    description: "Clean, format, and validate complex JSON data structures instantly.",
    path: "/tools/json-formatter",
    iconName: "Code",
    category: "Developer",
    badge: "Fast"
  },
  {
    id: "sample-4",
    title: "AI Prompt Enhancer",
    description: "Transform concise ideas into rich, structured LLM prompts.",
    path: "/tools/prompt-enhancer",
    iconName: "Sparkles",
    category: "AI Tools",
    badge: "New"
  }
];

export const CATEGORIES = ["All", "Media", "Utilities", "Developer", "Documents", "AI Tools"];