import { ImageResponse } from "next/og";

export const alt = "David Agbugba | Software Architect/Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#11110f",
          color: "#f1f0eb",
          fontFamily: "sans-serif"
        }}
      >
        <svg width="96" height="96" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="14" fill="#1d1d1a" />
          <path
            d="M14 14h15c12 0 21 8 21 18s-9 18-21 18H14V14Zm10 9v18h5c6 0 10-3.8 10-9s-4-9-10-9h-5Z"
            fill="#d8ff3e"
          />
          <circle cx="49" cy="15" r="4" fill="#f1f0eb" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1
            }}
          >
            David Agbugba
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 44,
              fontWeight: 600,
              color: "#d8ff3e"
            }}
          >
            Software Architect / Developer
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 1040,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#a3a29c"
            }}
          >
            Business websites, landing pages and custom applications, built
            end to end.
          </div>
        </div>
      </div>
    ),
    size
  );
}
