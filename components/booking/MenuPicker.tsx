"use client"

import { useMemo, useState } from "react"
import { Check, Leaf, Drumstick } from "lucide-react"

import { menu, categoryOrder, categoryLabels, type Dish, type DishCategory } from "@/lib/menu"

type Filter = "all" | "veg" | "nonveg"

type Props = {
  selected: Set<string>
  onToggle: (id: string) => void
}

/**
 * Filterable dish picker shared by the party and daily flows. Renders the full
 * lib/menu grouped by category with a Veg / Non-Veg / All toggle. No prices are
 * shown here — pricing is handled by the parent flow.
 */
export function MenuPicker({ selected, onToggle }: Props) {
  const [filter, setFilter] = useState<Filter>("all")

  const grouped = useMemo(() => {
    const match = (d: Dish) => (filter === "all" ? true : filter === "veg" ? d.isVeg : !d.isVeg)
    return categoryOrder
      .map((cat) => ({ cat, dishes: menu.filter((d) => d.category === cat && match(d)) }))
      .filter((g) => g.dishes.length > 0)
  }, [filter])

  return (
    <div>
      {/* Filter toggle */}
      <div className="sticky top-0 z-10 -mx-1 mb-5 flex gap-2 bg-dark/80 px-1 py-2 backdrop-blur-sm">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")} label="All" />
        <FilterButton active={filter === "veg"} onClick={() => setFilter("veg")} label="Veg" icon={<Leaf className="h-3.5 w-3.5" />} />
        <FilterButton active={filter === "nonveg"} onClick={() => setFilter("nonveg")} label="Non-Veg" icon={<Drumstick className="h-3.5 w-3.5" />} />
      </div>

      <div className="space-y-8">
        {grouped.map(({ cat, dishes }) => (
          <section key={cat}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
              {categoryLabels[cat as DishCategory]}
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {dishes.map((d) => {
                const isOn = selected.has(d.id)
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => onToggle(d.id)}
                    aria-pressed={isOn}
                    className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition ${
                      isOn
                        ? "border-rose bg-rose/15 text-cream"
                        : "border-white/10 bg-white/[0.03] text-cream/80 hover:border-white/25 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                        isOn ? "border-rose bg-rose text-cream" : "border-white/25"
                      }`}
                    >
                      {isOn ? <Check className="h-3.5 w-3.5" /> : null}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-1.5 text-sm font-medium">
                        {d.isVeg ? (
                          <Leaf className="h-3.5 w-3.5 text-emerald-400" aria-label="Veg" />
                        ) : (
                          <Drumstick className="h-3.5 w-3.5 text-rose" aria-label="Non-veg" />
                        )}
                        {d.name}
                      </span>
                      {d.note ? <span className="mt-0.5 block text-xs text-cream/50">{d.note}</span> : null}
                    </span>
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean
  onClick: () => void
  label: string
  icon?: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
        active ? "bg-rose text-cream" : "border border-white/15 text-cream/70 hover:text-cream"
      }`}
    >
      {icon}
      {label}
    </button>
  )
}
