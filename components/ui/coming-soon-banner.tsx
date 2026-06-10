"use client"

export function ComingSoonBanner() {
  return (
    <div
      role="region"
      aria-label="Savri coming soon announcement"
      className="fixed left-0 right-0 top-0 z-[70] flex h-11 w-full items-center justify-center overflow-hidden bg-[#1A1A1A] px-3 text-center text-white"
    >
      <p className="flex items-center justify-center gap-2 whitespace-nowrap text-[11px] leading-tight md:text-[13px]">
        <span className="font-medium text-white/95">
          <span className="hidden sm:inline">Something big is cooking at Savri </span>
          <span className="sm:hidden">Big surprise at Savri </span>
          <span aria-hidden="true">👀</span>
          <span className="hidden sm:inline"> A surprise is on the way.</span>
        </span>
        <span
          className="savri-coming-soon-glow font-semibold uppercase tracking-[0.18em]"
          style={{ color: "#B5636A" }}
        >
          Coming Soon
        </span>
      </p>
    </div>
  )
}
