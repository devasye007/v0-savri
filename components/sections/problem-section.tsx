"use client"

import { useInView } from "@/hooks/use-in-view"
import { Clock, ThumbsDown, RotateCcw } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "45 minutes. Every time.",
    description: null,
  },
  {
    icon: ThumbsDown,
    title: "Cold roti. Watery gravy.",
    description: "Money you can't get back.",
  },
  {
    icon: RotateCcw,
    title: "Tomorrow you'll order again.",
    description: "Because what's the option.",
  },
]

export function ProblemSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2
          className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl text-center font-medium leading-tight max-w-3xl mx-auto mb-16 md:mb-24 transition-all duration-600"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {"You've been ordering in."}
          <br />
          Every. Single. Day.
        </h2>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center transition-all duration-600"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark/5 mb-6">
                <problem.icon className="w-7 h-7 text-dark/70" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-dark text-xl md:text-2xl font-medium mb-2">
                {problem.title}
              </h3>
              {problem.description && (
                <p className="text-dark/60 text-base">{problem.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Transition line */}
        <p
          className="font-serif text-rose text-2xl md:text-3xl text-center font-medium transition-all duration-600"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "500ms",
          }}
        >
          There is now an option.
        </p>
      </div>
    </section>
  )
}
