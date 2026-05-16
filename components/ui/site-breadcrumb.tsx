import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function SiteBreadcrumb({
  items,
}: {
  items: { label: string; href?: string }[]
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-dark/55">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
          {index > 0 ? <ChevronRight className="h-4 w-4" /> : null}
          {item.href ? (
            <Link href={item.href} className="hover:text-dark">
              {item.label}
            </Link>
          ) : (
            <span className="text-dark">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
