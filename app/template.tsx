"use client"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell animate-page-enter">
      <div className="page-transition-veil" />
      {children}
    </div>
  )
}
