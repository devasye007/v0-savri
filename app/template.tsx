"use client"

import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Standalone hub pages (e.g. the QR links page) open instantly — no entry sequence.
  if (pathname === "/links") {
    return <>{children}</>
  }

  return (
    <div className="page-shell animate-page-enter">
      <div className="page-transition-veil" />
      {children}
    </div>
  )
}
