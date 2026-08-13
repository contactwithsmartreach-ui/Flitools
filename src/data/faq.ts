export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How does FliTools guarantee 100% privacy and client-side processing?",
    answer:
      "All calculations, media encoding, PDF merging, waveform rendering, and password generation are executed directly inside your web browser using Web APIs (such as WebAssembly, Web Audio, HTML5 Canvas, and Web Crypto). Your files never leave your computer or phone, and zero bytes are uploaded to remote servers."
  },
  {
    question: "Is FliTools free to use for personal and commercial projects?",
    answer:
      "Yes! All tools on FliTools are completely free with no user limits, subscriptions, software installation, or sign-ups required."
  },
  {
    question: "What types of utilities are available in the directory?",
    answer:
      "FliTools offers a comprehensive suite of utilities including: Image to GIF Converter, Video to GIF Converter, Image Compressor & Resizer, Voice Memo Waveform Trimmer, Markdown to HTML Converter, JSON Formatter & Validator, QR Code Generator, PDF Merger & Splitter, and Password Generator."
  },
  {
    question: "Can I use FliTools without an internet connection?",
    answer:
      "Yes. Once the webpage loads in your browser, all processing scripts run locally. You can compress images, split PDFs, or generate passwords even when completely offline."
  },
  {
    question: "Are there file size limits when processing media or PDFs?",
    answer:
      "Because processing happens locally on your own machine, file limits depend entirely on your device's available memory (RAM) and CPU performance, rather than artificial server constraints."
  }
];