"use client"

import { useState, useRef, useEffect } from "react"
import { Share2 } from "lucide-react"

// Meme 1 - Sunday Planning Meme
function SundayMeme() {
  return (
    <div className="bg-cream border border-rose/20 rounded-2xl p-6 w-full max-w-[380px] mx-auto shadow-lg shadow-rose/5 flex-shrink-0 snap-center">
      {/* Two panel meme */}
      <div className="space-y-4">
        {/* Panel 1 */}
        <div className="bg-dark/5 rounded-xl p-4">
          <p className="text-rose text-xs font-medium mb-2 uppercase tracking-wide">Every Sunday</p>
          <p className="text-dark font-medium leading-relaxed">
            {"\"Okay this week I'm cooking."}<br />
            {"Going to buy sabzi from INA market."}<br />
            {"Make dal chawal. Be healthy."}<br />
            {"Ghar ka khana only. Final.\""}
          </p>
        </div>
        
        {/* Panel 2 */}
        <div className="bg-rose/10 rounded-xl p-4">
          <p className="text-rose text-xs font-medium mb-2 uppercase tracking-wide">Tuesday 8PM</p>
          <p className="text-dark font-medium leading-relaxed">
            {"\"Bhaiya ek butter chicken"}<br />
            {"aur garlic naan bhej do."}<br />
            {"Extra gravy. Jaldi karna.\""}
          </p>
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-dark/60 text-sm text-center mt-5 italic">
        The weekly cycle. We know.
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
        {"Delhi rent: ₹35,000/month"}<br />
        {"Delhi metro: ₹50/trip"}<br />
        {"Delhi parking: ₹200/hour"}<br /><br />
        {"Also Delhi:"}<br />
        {"bhai ₹50 delivery charge"}<br />
        {"toh bohot zyada hai yaar 💀"}
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
    { label: "Lawful Good", text: "Wakes up and makes poha from scratch", highlight: false },
    { label: "Neutral Good", text: "Has a Savri chef", highlight: true },
    { label: "Chaotic Good", text: "Calls mom and pretends to ask how she is but actually wants the recipe", highlight: false },
    { label: "Lawful Neutral", text: "Dhaba near office every single day", highlight: false },
    { label: "True Neutral", text: "Bread and whatever is in the fridge", highlight: false },
    { label: "Chaotic Neutral", text: "Maggi at 2AM and zero regrets", highlight: false },
    { label: "Lawful Evil", text: "Orders a salad bowl and then orders pizza 30 minutes later", highlight: false },
    { label: "Neutral Evil", text: "Has Zomato Gold, Swiggy One, AND still complains about delivery charges", highlight: false },
    { label: "Chaotic Evil", text: "Ate samosa chaat for dinner and told themselves it counts as a balanced meal", highlight: false },
  ]

  return (
    <div className="bg-cream border border-rose/20 rounded-2xl p-5 w-full max-w-[380px] mx-auto shadow-lg shadow-rose/5 flex-shrink-0 snap-center">
      {/* Title */}
      <h3 className="font-serif text-dark text-lg font-medium text-center mb-4">
        Delhi food personality types
      </h3>
      
      {/* 3x3 Grid */}
      <div className="grid grid-cols-3 gap-2">
        {alignments.map((item, index) => (
          <div 
            key={index}
            className={`p-2 rounded-lg text-center flex flex-col justify-start ${
              item.highlight 
                ? "bg-rose text-cream" 
                : "bg-dark/5 text-dark"
            }`}
          >
            <p className={`text-[9px] font-medium uppercase tracking-wide mb-1 ${
              item.highlight ? "text-cream/80" : "text-dark/50"
            }`}>
              {item.label}
            </p>
            <p className={`text-[10px] font-medium leading-tight ${
              item.highlight ? "text-cream" : "text-dark/80"
            }`}>
              {item.text}
              {item.highlight && <span className="text-gold ml-1">★</span>}
            </p>
            {item.highlight && (
              <p className="text-[8px] text-cream/60 mt-1 italic">the smart ones</p>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <MemeFooter />
    </div>
  )
}

// Meme 4 - WhatsApp Chat Style
function WhatsAppMeme() {
  return (
    <div className="bg-dark rounded-2xl p-5 w-full max-w-[380px] mx-auto shadow-lg shadow-dark/20 flex-shrink-0 snap-center">
      {/* Chat header */}
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-cream/10">
        <div className="w-10 h-10 rounded-full bg-rose flex items-center justify-center text-lg">
          👨‍🍳
        </div>
        <div className="flex-1">
          <p className="text-cream font-medium text-sm">Savri Chef</p>
          <p className="text-green-400 text-xs">Online</p>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="space-y-3 mb-5">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-rose rounded-2xl rounded-br-md px-4 py-2 max-w-[75%]">
            <p className="text-cream text-sm">Bhai aaj kya banega?</p>
          </div>
        </div>
        
        {/* Chef message */}
        <div className="flex justify-start">
          <div className="bg-cream/10 rounded-2xl rounded-bl-md px-4 py-2 max-w-[75%]">
            <p className="text-cream text-sm">Aap batao — dal makhani chalegi ya butter chicken?</p>
          </div>
        </div>
        
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-rose rounded-2xl rounded-br-md px-4 py-2 max-w-[75%]">
            <p className="text-cream text-sm">Dono 🙏</p>
          </div>
        </div>
        
        {/* Chef message */}
        <div className="flex justify-start">
          <div className="bg-cream/10 rounded-2xl rounded-bl-md px-4 py-2 max-w-[75%]">
            <p className="text-cream text-sm">Ji bilkul. Roti bhi?</p>
          </div>
        </div>
        
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-rose rounded-2xl rounded-br-md px-4 py-2 max-w-[75%]">
            <p className="text-cream text-sm">Haan yaar aur thoda chawal bhi please 🥲</p>
          </div>
        </div>
        
        {/* Chef message with ticks */}
        <div className="flex justify-start">
          <div className="bg-cream/10 rounded-2xl rounded-bl-md px-4 py-2 max-w-[75%]">
            <p className="text-cream text-sm">30 minutes mein ready ho jayega. <span className="text-blue-400">✓✓</span></p>
          </div>
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-cream/70 text-sm text-center mt-4 leading-relaxed">
        This conversation could be yours.<br />Every day.
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
        <SundayMeme />
        <TweetMeme />
        <AlignmentMeme />
        <WhatsAppMeme />
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
        Okay but in all seriousness —<br className="md:hidden" />
        {" "}here is what we built for you.
      </p>
    </section>
  )
}
