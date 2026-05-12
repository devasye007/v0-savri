"use client"

import { useEffect } from "react"

// Reads ?ref= from the URL on first load and stores it in localStorage.
// This runs silently — no UI rendered.
export function ReferralTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get("ref")
    if (ref) {
      localStorage.setItem("savri_ref", ref)
      console.log("[Savri] Referral tracked:", ref)
    }
  }, [])

  return null
}
