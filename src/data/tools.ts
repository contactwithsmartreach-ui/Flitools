import { LucideIcon, Wrench, Code, FileText, Image, Zap, Cpu, Sparkles, Layers } from "lucide-react";

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  path: string;
  iconName: string;
  category: string;
  badge?: string;
  isExternal?: boolean;
}

// Structured tools list - ready for adding new HTML/page tools
export const TOOLS_LIST: ToolItem[] = [
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
    id: "sample-3",
    title: "Image Compressor & WebP",
    description: "Compress images with zero visual loss directly in client memory.",
    path: "/tools/image-compressor",
    iconName: "Image",
    category: "Media"
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

export const CATEGORIES = ["All", "Developer", "Documents", "Media", "AI Tools", "Utilities"];