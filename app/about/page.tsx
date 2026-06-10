import type { Metadata } from "next"

import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { Reveal } from "@/components/ui/reveal"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SiteBreadcrumb } from "@/components/ui/site-breadcrumb"
import { aboutValues } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About Savri | Premium Private Dining",
  description:
    "Learn why Savri exists, what the team believes about premium home dining, and the values behind our private chef experience.",
}

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-cream pt-32 text-dark">
        <section className="container mx-auto px-6 pb-20">
          <SiteBreadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">About Savri</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold md:text-6xl">Premium private dining for real homes.</h1>
            <p className="mt-6 text-base leading-8 text-dark/68 md:text-lg">
              Savri started with a simple observation: people want better food at home, but most options are either impersonal delivery or high-friction event catering. We built something in between and better.
            </p>
          </Reveal>
        </section>

        <section className="bg-[#fffaf4] py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1fr_1fr]">
            <Reveal>
            <div className="immersive-card rounded-[2rem] border border-dark/8 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Our Story</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold">Why we started Savri</h2>
              <p className="mt-6 text-base leading-8 text-dark/68">
                We wanted to make private chef experiences feel accessible, dependable, and beautifully simple. Not just for rare celebrations, but for people who care about food, hosting, and quality time at home.
              </p>
              <p className="mt-4 text-base leading-8 text-dark/68">
                That means transparent pricing, properly vetted chefs, thoughtful service standards, and eventually AI that personalizes the experience without making it feel cold.
              </p>
            </div>
            </Reveal>

            <Reveal delayMs={120} variant="right">
            <div className="immersive-card rounded-[2rem] border border-dark/8 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose">Mission</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold">Premium private dining for everyone who values it.</h2>
              <p className="mt-6 text-base leading-8 text-dark/68">
                Our goal is not to imitate restaurant dining at home. It is to create something more intimate: fresh food, your kitchen, your pace, and a chef service you can trust.
              </p>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {aboutValues.map((value, index) => (
                <Reveal key={value.title} delayMs={index * 80}>
                <article className="immersive-card interactive-spotlight rounded-[2rem] border border-dark/8 bg-white p-7">
                  <value.icon className="h-6 w-6 text-rose" />
                  <h2 className="mt-5 font-serif text-3xl font-semibold text-dark">{value.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-dark/68">{value.copy}</p>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
