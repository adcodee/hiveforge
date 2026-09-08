import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HiveForge — software, web, design and AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0A2540 0%, #0d2f4f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#FF851B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 26,
              color: "white",
            }}
          >
            HF
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, color: "white", display: "flex" }}>
            Hive<span style={{ color: "#FF851B" }}>Forge</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              maxWidth: 980,
              display: "flex",
            }}
          >
            Software, web, design and AI
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)", display: "flex" }}>
            Websites live in 48 hours. You only pay if you&apos;re happy.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["Software", "Web", "Design", "AI"].map((label, i) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.8)",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: i % 2 === 0 ? "#FF851B" : "#FFAA00",
                }}
              />
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
