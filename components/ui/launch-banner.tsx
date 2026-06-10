"use client"

import { BOOKING_URL } from "@/lib/site-data"

export function LaunchBanner() {
  return (
    <div
      role="region"
      aria-label="Savri bookings now open"
      style={{
        position: "fixed",
        top: 44,
        left: 0,
        right: 0,
        height: 44,
        zIndex: 60,
        backgroundColor: "#B5636A",
        color: "#F5F0E8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        gap: 12,
        fontSize: 13,
        lineHeight: 1.2,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#22C55E",
            animation: "savri-launch-pulse 2s infinite",
            flexShrink: 0,
          }}
        />
        <span style={{ fontWeight: 600, whiteSpace: "nowrap" }}>Now Open</span>
      </div>

      <span
        className="hidden sm:inline"
        style={{
          opacity: 0.92,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Private Chef · Delhi NCR · From ₹549
      </span>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#F5F0E8",
          textDecoration: "none",
          fontWeight: 700,
          whiteSpace: "nowrap",
          padding: "4px 12px",
          border: "1px solid #F5F0E8",
          borderRadius: 999,
          transition: "background-color 0.2s ease, color 0.2s ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#F5F0E8"
          e.currentTarget.style.color = "#B5636A"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent"
          e.currentTarget.style.color = "#F5F0E8"
        }}
      >
        Book Now →
      </a>
    </div>
  )
}
