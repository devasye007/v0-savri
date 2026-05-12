"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

type OccasionKey = "birthday" | "anniversary" | "datenight" | "family" | "mealprep"

// ── Occasion Icons ─────────────────────────────────────────────────────────────
const CakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="10" width="16" height="8" rx="1" />
    <rect x="5" y="6" width="10" height="4" />
    <line x1="7" y1="6" x2="7" y2="3" />
    <line x1="10" y1="6" x2="10" y2="3" />
    <line x1="13" y1="6" x2="13" y2="3" />
  </svg>
)

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 16.5C10 16.5 3 12 3 7.5a4 4 0 0 1 7-2.65A4 4 0 0 1 17 7.5c0 4.5-7 9-7 9z" />
  </svg>
)

const CandleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7.5" y="8" width="5" height="9" rx="0.75" />
    <line x1="10" y1="8" x2="10" y2="5.5" />
    <path d="M8.5 4.5c0 0 0.5-1 1.5-1s1.5 1 1.5 1" />
    <circle cx="10" cy="4" r="0.75" fill="currentColor" stroke="none" />
  </svg>
)

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5l7-6 7 6V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <polyline points="7.5,18 7.5,12 12.5,12 12.5,18" />
  </svg>
)

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="7.5" />
    <polyline points="10,5.5 10,10 13.5,13" />
  </svg>
)

type OccasionData = {
  label: string
  Icon: React.FC
  starter: string
  main: string
  dessert: string
  cuisine: string
}

const occasions: Record<OccasionKey, OccasionData> = {
  birthday: {
    label: "Birthday Party",
    Icon: CakeIcon,
    starter: "Seekh Kebab & Paneer Tikka",
    main: "Dum Biryani + Dal Makhani + Butter Naan",
    dessert: "Gulab Jamun",
    cuisine: "North Indian",
  },
  anniversary: {
    label: "Anniversary",
    Icon: HeartIcon,
    starter: "Bruschetta & Caprese Salad",
    main: "Garlic Bread + Grilled Chicken",
    dessert: "Tiramisu",
    cuisine: "Continental",
  },
  datenight: {
    label: "Date Night",
    Icon: CandleIcon,
    starter: "Hummus & Pita + Soup",
    main: "Risotto or Grilled Fish + Salad",
    dessert: "Chocolate Lava Cake",
    cuisine: "Multi-cuisine",
  },
  family: {
    label: "Family Dinner",
    Icon: HomeIcon,
    starter: "Mixed Veg Soup + Papad",
    main: "Rajma Chawal + Aloo Gobi + Roti",
    dessert: "Kheer",
    cuisine: "North Indian",
  },
  mealprep: {
    label: "Meal Prep",
    Icon: ClockIcon,
    starter: "—",
    main: "5 healthy containers — protein + carbs + vegetables",
    dessert: "Fruit bowl",
    cuisine: "Healthy & Diet",
  },
}

const occasionKeys = Object.keys(occasions) as OccasionKey[]

export function OccasionSelectorSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  const [selected, setSelected] = useState<OccasionKey>("birthday")
  const [displayed, setDisplayed] = useState<OccasionKey>("birthday")
  const [cardVisible, setCardVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSelect = (key: OccasionKey) => {
    if (key === selected) return
    if (timerRef.current) clearTimeout(timerRef.current)
    setCardVisible(false)
    setSelected(key)
    timerRef.current = setTimeout(() => {
      setDisplayed(key)
      setCardVisible(true)
    }, 220)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const occ = occasions[displayed]
  const { Icon } = occ

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dark">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          <h2 className="font-serif text-cream text-3xl md:text-4xl lg:text-5xl font-medium mb-3">
            What's the occasion?
          </h2>
          <p className="text-cream/50 text-base md:text-lg">
            Choose your occasion and we'll show you what's possible.
          </p>
        </div>

        {/* Occasion buttons — 2 cols mobile, 5 cols desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 100ms, transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 100ms",
          }}
        >
          {occasionKeys.map((key) => {
            const isActive = key === selected
            const { Icon: BtnIcon } = occasions[key]
            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 focus:outline-none"
                style={{
                  borderColor: isActive ? "#B5636A" : "rgba(181,99,106,0.25)",
                  backgroundColor: isActive ? "#B5636A" : "transparent",
                  color: isActive ? "#0A0A0A" : "#B5636A",
                }}
              >
                <BtnIcon />
                <span className="leading-tight text-center" style={{ color: isActive ? "#0A0A0A" : "#F5F0EB" }}>
                  {occasions[key].label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Occasion card */}
        <div
          style={{
            opacity: isInView ? (cardVisible ? 1 : 0) : 0,
            transform: cardVisible ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.25s ease, transform 0.25s ease",
          }}
        >
          <div
            className="rounded-2xl border border-rose/20 overflow-hidden"
            style={{ backgroundColor: "#141414" }}
          >
            {/* Card header */}
            <div className="px-6 py-5 border-b border-cream/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span style={{ color: "#B5636A" }}>
                  <Icon />
                </span>
                <h3 className="font-serif text-cream text-xl md:text-2xl font-medium">
                  {occ.label}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium border border-rose/30 text-rose">
                {occ.cuisine}
              </span>
            </div>

            {/* 3-course menu */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cream/5">
              {[
                { course: "Starter", dish: occ.starter },
                { course: "Main", dish: occ.main },
                { course: "Dessert", dish: occ.dessert },
              ].map(({ course, dish }) => (
                <div key={course} className="px-6 py-5">
                  <p className="text-rose text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                    {course}
                  </p>
                  <p className="text-cream/80 text-sm leading-relaxed">{dish}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-6 py-5 border-t border-cream/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-cream/40 text-xs">
                Menu is illustrative — your chef customises it for you.
              </p>
              <a
                href="#waitlist"
                className="shrink-0 bg-rose text-cream px-6 py-3 rounded-lg text-sm font-medium hover:bg-rose-dark transition-colors duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ display: "inline-block" }}
              >
                Book This Experience →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
