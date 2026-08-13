import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "FliTools — 100% Client-Side Free Digital Utilities Directory";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080314",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Ambient Radial Glows */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(126, 34, 206, 0.4) 0%, rgba(8, 3, 20, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "-120px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(75, 30, 133, 0.45) 0%, rgba(8, 3, 20, 0) 70%)",
          }}
        />

        {/* Top Header Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "rgba(88, 28, 135, 0.8)",
              border: "1.5px solid rgba(192, 132, 252, 0.5)",
              padding: "8px 22px",
              borderRadius: "999px",
            }}
          >
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#38bdf8" }} />
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#e0f2fe", letterSpacing: "1px" }}>
              100% CLIENT-SIDE • ZERO SERVER UPLOADS
            </span>
          </div>

          <span style={{ fontSize: "20px", fontWeight: 700, color: "#c084fc", letterSpacing: "0.5px" }}>
            flitools.cyou
          </span>
        </div>

        {/* Center Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", zIndex: 10, maxWidth: "920px" }}>
          {/* Logo & Brand Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "20px",
                backgroundColor: "#2e1065",
                border: "2px solid rgba(192, 132, 252, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
              }}
            >
              🛠️
            </div>
            <span style={{ fontSize: "64px", fontWeight: 800, color: "#ffffff", letterSpacing: "-1.5px" }}>
              FliTools
            </span>
          </div>

          <div style={{ fontSize: "44px", fontWeight: 300, color: "#f3e8ff", letterSpacing: "-1px", lineHeight: 1.15 }}>
            Free Browser Digital <span style={{ fontWeight: 800, color: "#ffffff" }}>Utilities & Media Tools</span>
          </div>

          <div style={{ fontSize: "20px", color: "#d8b4fe", opacity: 0.9, lineHeight: 1.45 }}>
            Process GIFs, compress photos, split PDFs, trim waveforms, format JSON & generate QR codes — 100% locally in your browser.
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", gap: "16px", zIndex: 10 }}>
          <div style={{ backgroundColor: "#2e1065", border: "1px solid rgba(192, 132, 252, 0.4)", padding: "10px 24px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, color: "#f3e8ff" }}>
            🔒 100% Private
          </div>
          <div style={{ backgroundColor: "#2e1065", border: "1px solid rgba(192, 132, 252, 0.4)", padding: "10px 24px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, color: "#f3e8ff" }}>
            ⚡ High Speed Execution
          </div>
          <div style={{ backgroundColor: "#2e1065", border: "1px solid rgba(192, 132, 252, 0.4)", padding: "10px 24px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, color: "#f3e8ff" }}>
            ✨ Free & Unlimited
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}