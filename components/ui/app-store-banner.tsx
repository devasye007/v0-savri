"use client"

import { usePathname } from "next/navigation"

import { APP_STORE_URL } from "@/lib/site-data"

/**
 * Site-wide top announcement strip — App Store launch + SAVRI200 coupon.
 * Full-width, fixed, 44px tall (h-11) so the navbar's `top-11` offset stays
 * correct. The "Get" button is the rightmost element and stays visible and
 * tappable at every width.
 */
export function AppStoreBanner() {
  const pathname = usePathname()

  // Hidden on the standalone QR links page, matching the other strips.
  if (pathname === "/links") return null

  return (
    <div
      role="region"
      aria-label="Savri is now on the App Store"
      className="fixed left-0 right-0 top-0 z-[70] flex h-11 w-full items-center bg-[#1A1A1A] px-3 text-white"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 sm:gap-4">
        <p className="flex min-w-0 items-center gap-1.5 text-[11px] font-medium leading-tight text-white/95 md:text-[13px]">
          <span aria-hidden="true">🎉</span>
          <span className="hidden truncate sm:inline">
            Savri is now on the <span className="font-semibold text-white">App Store</span> — get{" "}
            <span className="font-semibold text-[#C9A84C]">₹200 off</span> your first booking with code{" "}
            <span className="font-semibold text-white">SAVRI200</span>
          </span>
          <span className="truncate sm:hidden">
            Now on the <span className="font-semibold text-white">App Store</span> —{" "}
            <span className="font-semibold text-[#C9A84C]">₹200 off</span> with{" "}
            <span className="font-semibold text-white">SAVRI200</span>
          </span>
        </p>

        {/* App Store URL placeholder — see APP_STORE_URL in lib/site-data.ts */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
          aria-label="Get Savri on the App Store"
          className="inline-flex h-7 shrink-0 items-center justify-center rounded-full bg-[#B5636A] px-4 text-[12px] font-semibold leading-none text-[#F5F0E8] shadow-sm transition hover:bg-[#9A5158] md:px-5"
        >
          Get
        </a>
      </div>
    </div>
  )
}
