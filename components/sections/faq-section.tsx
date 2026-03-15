"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronDown, Mail, Instagram } from "lucide-react"

const faqs = [
  {
    question: "What exactly is Savri?",
    answer: `Savri is a private chef booking app launching in Delhi NCR in June 2026. You book a verified trained chef through the app — they come to your home, cook fresh in your kitchen, serve the meal, and leave everything clean. It is not food delivery. It is not a restaurant. It is your own personal chef — at your door, on your schedule.`,
  },
  {
    question: "Is this only for rich people?",
    answer: `Not at all — and that is exactly why we built Savri. A private chef at home has always felt like something only for very wealthy households. Savri changes that. Our pricing is designed for real Delhi families — working professionals, dual income households, anyone who is tired of ordering in every single day. Pricing will be announced at launch. Join the waitlist to be first to know.`,
  },
  {
    question: "What areas in Delhi NCR does Savri cover at launch?",
    answer: `Savri launches in June 2026 across South Delhi, Noida, and West Delhi first. We are expanding to more areas quickly after launch. Join the waitlist and tell us your area — we will notify you the moment Savri is available in your neighbourhood.`,
  },
  {
    question: "How are Savri chefs verified?",
    answer: `Every Savri chef goes through a multi-step verification process before their first booking. This includes identity verification, background check, cooking trial, and a full onboarding assessment. You will see each chef's verified badge and profile before you confirm any booking. Your home is safe. Your food is in good hands.`,
  },
  {
    question: "What if my chef cancels at the last minute?",
    answer: `It will not leave you without a meal. Savri's substitute chef guarantee means if your regular chef cannot make it — we send a verified replacement. Always. No missed meals. Ever. This is a core promise of Savri — not a feature. A guarantee.`,
  },
  {
    question: "What is the difference between the Regular and Gold plan?",
    answer: `Regular plan includes 2 meals per day — breakfast or lunch plus dinner — cooked fresh in your home every day by a verified Savri chef. Gold plan includes 3 meals per day — breakfast, lunch, and dinner — plus priority chef matching, premium and luxury cuisine access, and exclusive Gold member benefits. Pricing for both plans will be announced at launch in June 2026.`,
  },
  {
    question: "Can I book a chef for a one-time party or event?",
    answer: `Absolutely — and it is one of our most popular use cases. Savri chefs are available for kitty parties, birthdays, anniversaries, date nights, family gatherings, and corporate dinners. You can also add a bartender, waiters, table decorator, and live cooking counter to your party booking. No subscription needed for one-time bookings.`,
  },
  {
    question: "Can I choose what the chef cooks for me?",
    answer: `Yes — completely. You share your preferences, dietary requirements, and favourite dishes when you book. Your chef learns your taste over time and gets better with every visit. The AI-powered weekly meal planner also lets you plan your entire week in advance — automatically shared with your chef every Sunday.`,
  },
  {
    question: "I am a trained chef. How do I join Savri?",
    answer: `We are actively hiring verified chefs across South Delhi, Noida, and West Delhi right now. Savri offers flexible working hours, consistent bookings, and the chance to build your own loyal client base in premium Delhi homes. Scroll down to the chef section and apply directly. IHM graduates are especially encouraged to apply.`,
  },
  {
    question: "When does Savri launch and how do I get early access?",
    answer: `Savri launches in Delhi NCR in June 2026. The best way to get early access is to join the waitlist right now. Waitlist members get priority access before the general public — Gold waitlist members get the very first bookings. Scroll down and join the list. It takes 30 seconds.`,
  },
]

export function FaqSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number>(0) // First question open by default

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section ref={ref} id="faq" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section Label */}
        <p
          className="text-rose text-xs font-medium tracking-[0.2em] uppercase text-center mb-4 transition-all duration-500"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          Frequently Asked
        </p>

        {/* Headline */}
        <h2
          className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-4 transition-all duration-500"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "80ms",
          }}
        >
          Everything you want to know.
        </h2>

        {/* Sub-headline */}
        <p
          className="text-dark/60 text-base md:text-lg text-center mb-16 transition-all duration-500"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "160ms",
          }}
        >
          And a few things you hadn't thought to ask.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-rose/15 transition-all duration-400"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${240 + index * 80}ms`,
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between py-5 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-dark font-medium text-[17px] md:text-[17px] pr-4 leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className="w-5 h-5 text-rose flex-shrink-0 transition-transform duration-300 ease-out"
                  style={{
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  strokeWidth={2}
                />
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p
                  className="text-dark/70 text-[15px] leading-[1.7] pb-5 pr-10 transition-opacity duration-200"
                  style={{
                    transitionDelay: openIndex === index ? "100ms" : "0ms",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div
          className="mt-16 text-center transition-all duration-500"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "1200ms",
          }}
        >
          <p className="text-dark/60 text-base mb-4">Still have a question?</p>

          <div className="flex flex-col items-center gap-3">
            <a
              href="mailto:savrifounder@gmail.com"
              className="inline-flex items-center gap-2 text-rose hover:text-rose-dark transition-colors duration-200"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-base">savrifounder@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/savri.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose hover:text-rose-dark transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-base">@savri.in</span>
            </a>
          </div>

          <p className="text-dark/50 text-sm mt-4">
            We reply to every message. Usually the same day.
          </p>
        </div>
      </div>
    </section>
  )
}
