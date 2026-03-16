"use client";

import { useState, useEffect } from "react";

export function IntroAnimation() {
  const [shouldShow, setShouldShow] = useState(false);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Check sessionStorage on mount
    if (typeof window !== "undefined") {
      const hasSeenIntro = sessionStorage.getItem("savri_intro");
      if (hasSeenIntro) {
        setIsRemoved(true);
        return;
      }
      setShouldShow(true);
      sessionStorage.setItem("savri_intro", "true");
    }
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    // Phase timings based on specification
    const timers = [
      setTimeout(() => setPhase(1), 600),    // Start letter animation
      setTimeout(() => setPhase(2), 1400),   // Start hairline + tagline
      setTimeout(() => setPhase(3), 2000),   // Hold still
      setTimeout(() => setIsExiting(true), 2400), // Start exit
      setTimeout(() => setIsRemoved(true), 2800), // Remove from DOM
    ];

    return () => timers.forEach(clearTimeout);
  }, [shouldShow]);

  if (isRemoved || !shouldShow) return null;

  const letters = ["S", "a", "v", "r", "i"];
  const letterDelays = [0, 150, 300, 450, 600]; // Staggered delays in ms

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#F5F0EB",
        opacity: isExiting ? 0 : 1,
        transition: "opacity 0.4s ease-in",
      }}
    >
      {/* Main logo container */}
      <div className="flex flex-col items-center">
        {/* Wordmark */}
        <div 
          className="flex items-baseline"
          style={{ letterSpacing: "0.28em" }}
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              className="font-serif text-[48px] md:text-[72px] font-medium"
              style={{
                color: "#B5636A",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: phase >= 1 ? `${letterDelays[index]}ms` : "0ms",
              }}
            >
              {letter}
            </span>
          ))}
          
          {/* Gold shimmer overlay */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              opacity: phase >= 1 ? 1 : 0,
            }}
          >
            <div
              className="absolute inset-y-0 w-20"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)",
                left: phase >= 1 ? "calc(100% + 40px)" : "-80px",
                transition: "left 0.5s linear",
                transitionDelay: phase >= 1 ? "800ms" : "0ms",
              }}
            />
          </div>
        </div>

        {/* Hairline */}
        <div
          className="mt-3 h-px overflow-hidden"
          style={{
            width: phase >= 2 ? "100%" : "0%",
            maxWidth: "200px",
            transition: "width 0.5s linear",
            transitionDelay: phase >= 2 ? "0ms" : "0ms",
          }}
        >
          <div
            className="h-full w-full"
            style={{ backgroundColor: "rgba(181, 99, 106, 0.5)" }}
          />
        </div>

        {/* Tagline */}
        <p
          className="mt-3 font-serif text-[13px] tracking-[0.35em]"
          style={{
            color: "rgba(181, 99, 106, 0.55)",
            opacity: phase >= 2 ? 1 : 0,
            transition: "opacity 0.4s ease-out",
            transitionDelay: phase >= 2 ? "300ms" : "0ms",
          }}
        >
          Your chef. Your kitchen. Your table.
        </p>
      </div>

      {/* Loading dots */}
      <div
        className="absolute bottom-[60px] flex items-center gap-2"
        style={{
          opacity: phase >= 1 && phase < 3 ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor: "#B5636A",
              animation: "dotPulse 0.9s ease-in-out infinite",
              animationDelay: `${i * 300}ms`,
            }}
          />
        ))}
      </div>

      {/* Made in India */}
      <p
        className="absolute bottom-[30px] text-[10px] tracking-[0.2em]"
        style={{
          color: "rgba(181, 99, 106, 0.3)",
          opacity: phase >= 1 ? 1 : 0,
          transition: "opacity 0.4s ease-out",
          transitionDelay: phase >= 1 ? "400ms" : "0ms",
        }}
      >
        <span className="opacity-70">🇮🇳</span> Made in India
      </p>

      {/* Keyframes for dot pulse */}
      <style jsx>{`
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
