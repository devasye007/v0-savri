"use client"

import { useState, useRef, useEffect } from "react"
import { Share2 } from "lucide-react"

// Meme 1 - The Delivery Meme (Drake/Expectation vs Reality format)
function DeliveryMeme() {
  return (
    <div className="bg-cream border border-rose/20 rounded-2xl p-6 w-full max-w-[380px] mx-auto shadow-lg shadow-rose/5 flex-shrink-0 snap-center">
      {/* Two panel meme */}
      <div className="space-y-4">
        {/* Panel 1 */}
        <div className="bg-dark/5 rounded-xl p-4">
          <p className="text-rose text-xs font-medium mb-2 uppercase tracking-wide">Every Sunday night</p>
          <p className="text-dark font-medium leading-relaxed">
            {'"I\'ll cook this week.'}<br />
            {'Meal prep. Eat healthy.'}<br />
            {'Be that person."'}
          </p>
        </div>
        
        {/* Panel 2 */}
        <div className="bg-rose/10 rounded-xl p-4">
          <p className="text-rose text-xs font-medium mb-2 uppercase tracking-wide">Also every Sunday night</p>
          <p className="text-dark font-medium leading-relaxed">
            {'"...so anyway here\'s'}<br />
            {'my 4th delivery order'}<br />
            {'this week."'}
          </p>
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-dark/60 text-sm text-center mt-5 italic">
        {"We don't judge."}<br />
        {"We just cook."}
      </p>
      
      {/* Footer */}
      <MemeFooter />
    </div>
  )
}

// Meme 2 - The Tweet Meme
function TweetMeme() {
  return (
    <div className="bg-dark rounded-2xl p-5 w-full max-w-[380px] mx-auto shadow-lg shadow-dark/20 flex-shrink-0 snap-center">
      {/* Fake tweet header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center">
          <span className="text-rose text-sm font-bold">D</span>
        </div>
        <div>
          <p className="text-cream font-medium text-sm">every delhi brain ever</p>
          <p className="text-cream/40 text-xs">@everydelhibrainever</p>
        </div>
      </div>
      
      {/* Tweet content */}
      <p className="text-cream text-lg leading-relaxed mb-5">
        {"Me: I should really start eating home-cooked food."}<br /><br />
        {"Also me: opens delivery app before I even finish that sentence."}
      </p>
      
      {/* Fake engagement */}
      <div className="flex items-center gap-6 text-cream/40 text-sm border-t border-cream/10 pt-4 mb-4">
        <span>47.2K Likes</span>
        <span>12.1K Retweets</span>
      </div>
      
      {/* Savri tag */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose/20 text-rose text-xs font-medium">
          we fixed this <span className="text-gold">✓</span>
        </span>
      </div>
      
      {/* Footer */}
      <MemeFooter dark />
    </div>
  )
}

// Meme 3 - The Alignment Chart
function AlignmentMeme() {
  const alignments = [
    { label: "Lawful Good", text: "Cooks every day", highlight: false },
    { label: "Neutral Good", text: "Meal preps Sunday", highlight: false },
    { label: "Chaotic Good", text: "Has a Savri chef", highlight: true },
    { label: "Lawful Neutral", text: "Dhaba regular", highlight: false },
    { label: "True Neutral", text: "Whatever is in fridge", highlight: false },
    { label: "Chaotic Neutral", text: "Maggi at 2AM", highlight: false },
    { label: "Lawful Evil", text: "Orders healthy bowls", highlight: false },
    { label: "Neutral Evil", text: "Delivery app regular", highlight: false },
    { label: "Chaotic Evil", text: "Samosa for dinner", highlight: false },
  ]

  return (
    <div className="bg-cream border border-rose/20 rounded-2xl p-5 w-full max-w-[380px] mx-auto shadow-lg shadow-rose/5 flex-shrink-0 snap-center">
      {/* Title */}
      <h3 className="font-serif text-dark text-lg font-medium text-center mb-4">
        Types of Delhi eaters
      </h3>
      
      {/* 3x3 Grid */}
      <div className="grid grid-cols-3 gap-2">
        {alignments.map((item, index) => (
          <div 
            key={index}
            className={`p-2 rounded-lg text-center ${
              item.highlight 
                ? "bg-rose text-cream" 
                : "bg-dark/5 text-dark"
            }`}
          >
            <p className={`text-[10px] font-medium uppercase tracking-wide mb-1 ${
              item.highlight ? "text-cream/80" : "text-dark/50"
            }`}>
              {item.label}
            </p>
            <p className={`text-xs font-medium leading-tight ${
              item.highlight ? "text-cream" : "text-dark/80"
            }`}>
              {item.text}
              {item.highlight && <span className="text-gold ml-1">★</span>}
            </p>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <MemeFooter />
    </div>
  )
}

// Meme 4 - The Honest Truth (Distracted Boyfriend text version)
function HonestMeme() {
  return (
    <div className="bg-rose rounded-2xl p-6 w-full max-w-[380px] mx-auto shadow-lg shadow-rose/20 flex-shrink-0 snap-center">
      {/* Visual arrangement mimicking distracted boyfriend */}
      <div className="relative h-48 mb-6">
        {/* The thing being ignored (left/back) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-cream/20 backdrop-blur-sm rounded-lg p-3 max-w-[100px] border border-cream/30">
          <p className="text-cream/80 text-xs font-medium text-center">
            Cooking at home
          </p>
        </div>
        
        {/* The distraction (right/front) */}
        <div className="absolute right-0 top-4 bg-gold rounded-lg p-3 max-w-[140px] shadow-lg">
          <p className="text-dark text-xs font-medium text-center">
            Opening delivery app for the 5th time this week
          </p>
        </div>
        
        {/* The boyfriend (center) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-dark rounded-lg p-3 max-w-[120px]">
          <p className="text-cream text-xs font-medium text-center">
            You, every evening
          </p>
        </div>
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 180">
          <path d="M 150 140 L 80 90" stroke="rgba(245,240,235,0.3)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 150 140 L 220 50" stroke="rgba(212,175,55,0.5)" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Caption */}
      <p className="text-cream text-center font-medium leading-relaxed">
        {"We get it."}<br />
        {"That's literally why we built this."}
      </p>
      
      {/* Footer */}
      <MemeFooter dark />
    </div>
  )
}

// Shared footer component
function MemeFooter({ dark = false }: { dark?: boolean }) {
  const [showTooltip, setShowTooltip] = useState(false)
  
  return (
    <div className={`flex items-center justify-between mt-5 pt-4 border-t ${dark ? "border-cream/10" : "border-dark/10"}`}>
      <span className={`text-xs ${dark ? "text-cream/40" : "text-dark/40"}`}>
        @savri.in
      </span>
      <button 
        className={`relative p-2 rounded-full transition-colors ${
          dark 
            ? "hover:bg-cream/10 text-cream/40 hover:text-cream" 
            : "hover:bg-dark/10 text-dark/40 hover:text-dark"
        }`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Share"
      >
        <Share2 className="w-4 h-4" strokeWidth={1.5} />
        {showTooltip && (
          <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded whitespace-nowrap ${
            dark ? "bg-cream text-dark" : "bg-dark text-cream"
          }`}>
            Screenshot and share
          </span>
        )}
      </button>
    </div>
  )
}

export function MemeSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const memeCount = 4

  // Track scroll position for dots
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = container.scrollWidth / memeCount
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, memeCount - 1))
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.scrollWidth / memeCount
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      {/* Section label */}
      <p className="text-rose text-xs font-medium uppercase tracking-[0.2em] text-center mb-10">
        Real Talk
      </p>

      {/* Desktop: Horizontal scroll / Mobile: Vertical stack */}
      <div 
        ref={scrollRef}
        className="flex md:flex-row flex-col gap-6 md:gap-8 px-6 md:px-12 lg:px-20 md:overflow-x-auto md:snap-x md:snap-mandatory md:scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <DeliveryMeme />
        <TweetMeme />
        <AlignmentMeme />
        <HonestMeme />
      </div>

      {/* Navigation dots - desktop only */}
      <div className="hidden md:flex justify-center gap-2 mt-8">
        {Array.from({ length: memeCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === activeIndex 
                ? "bg-rose" 
                : "border border-rose/40 hover:border-rose"
            }`}
            aria-label={`Go to meme ${index + 1}`}
          />
        ))}
      </div>

      {/* Transition text */}
      <p className="text-rose text-center mt-12 md:mt-16 text-sm md:text-base font-medium px-6">
        Okay but seriously —<br className="md:hidden" />
        {" "}here is what we built.
      </p>
    </section>
  )
}
