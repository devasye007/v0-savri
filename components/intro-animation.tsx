"use client";

import { useState, useEffect, useRef } from "react";

export function IntroAnimation() {
  const [shouldShow, setShouldShow] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    if (!shouldShow || !videoRef.current) return;

    const video = videoRef.current;

    // Handle video end
    const handleVideoEnd = () => {
      setIsExiting(true);
      setTimeout(() => setIsRemoved(true), 400); // 400ms fade out
    };

    video.addEventListener("ended", handleVideoEnd);

    // Play video
    video.play().catch(() => {
      // If autoplay fails, show for a brief moment then exit
      setTimeout(handleVideoEnd, 2000);
    });

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [shouldShow]);

  if (isRemoved || !shouldShow) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: "#F5F0EB",
        opacity: isExiting ? 0 : 1,
        transition: "opacity 0.4s ease-in",
      }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain max-w-[80vw] max-h-[80vh]"
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/logo-animation.mov" type="video/quicktime" />
        <source src="/videos/logo-animation.mov" type="video/mp4" />
      </video>
    </div>
  );
}
