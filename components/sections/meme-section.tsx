"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Share2 } from "lucide-react"

// Meme 1 - The Annual Resolution
function AnnualResolutionMeme() {
  return (
    <div className="bg-[#F5F0EB] border border-rose/20 rounded-[20px] p-7 w-full max-w-[400px] mx-auto shadow-lg shadow-rose/5 flex-shrink-0 snap-center">
      {/* Two panel meme */}
      <div className="space-y-4">
        {/* Panel 1 */}
        <div className="bg-dark/5 rounded-xl p-5">
          <p className="text-rose text-[10px] font-semibold mb-3 uppercase tracking-wider">HAR SAAL 1 JANUARY KO</p>
          <p className="text-dark font-serif text-lg leading-relaxed">
            {"\"This year I will eat healthy."}<br />
            {"Ghar ka khana only."}<br />
            {"No delivery. Final decision."}<br />
            {"Pakka. 100%. Done.\""}
          </p>
        </div>
        
        {/* Panel 2 */}
        <div className="bg-rose/10 rounded-xl p-5">
          <p className="text-rose text-[10px] font-semibold mb-3 uppercase tracking-wider">2 JANUARY 7 PM</p>
          <p className="text-dark font-serif text-lg leading-relaxed">
            {"\"Bhaiya ek butter chicken,"}<br />
            {"garlic naan, dal makhani,"}<br />
            {"gulab jamun bhej dena."}<br />
            {"Aur haan extra gravy lena.\""}
          </p>
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-rose/70 text-sm text-center mt-6 italic leading-relaxed">
        Every. Single. Year.<br />
        We stopped judging. We built<br />
        a solution instead.
      </p>
      
      {/* Footer */}
      <MemeFooter />
    </div>
  )
}

// Meme 2 - The Delhi Food Math (Tweet Style)
function DelhiFoodMathMeme() {
  return (
    <div className="bg-[#0A0A0A] rounded-[20px] p-7 w-full max-w-[400px] mx-auto shadow-lg shadow-dark/20 flex-shrink-0 snap-center">
      {/* Fake tweet header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-rose flex items-center justify-center">
          <span className="text-xl">👨‍💼</span>
        </div>
        <div>
          <p className="text-cream font-semibold text-sm">Every Delhi Professional</p>
          <p className="text-cream/40 text-xs">@delhikaharinsaan</p>
        </div>
      </div>
      
      {/* Tweet content */}
      <p className="text-cream text-lg leading-relaxed mb-6">
        {"Monthly budget planning:"}<br /><br />
        {"Rent: ₹25,000 ✓"}<br />
        {"Metro: ₹2,000 ✓"}<br />
        {"Zomato: 'thoda sa' ✓"}<br /><br />
        {"*checks Zomato bill at month end*"}<br /><br />
        {"Zomato: ₹18,000"}<br /><br />
        {"Rent: 😭"}
      </p>
      
      {/* Fake engagement */}
      <div className="flex items-center gap-8 text-cream/40 text-sm border-t border-cream/10 pt-4 mb-5">
        <span>142.7K Likes</span>
        <span>38.2K Retweets</span>
      </div>
      
      {/* Savri pill */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose/20 text-rose text-xs font-medium">
          hum fix kar rahe hain yeh ✓
        </span>
      </div>
      
      {/* Footer */}
      <MemeFooter dark />
    </div>
  )
}

// Meme 3 - The WhatsApp Group
function WhatsAppGroupMeme() {
  return (
    <div className="bg-[#111B21] rounded-[20px] overflow-hidden w-full max-w-[400px] mx-auto shadow-lg shadow-dark/20 flex-shrink-0 snap-center">
      {/* WhatsApp header */}
      <div className="bg-[#202C33] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#2A3942] flex items-center justify-center text-lg">
          🏠
        </div>
        <div className="flex-1">
          <p className="text-cream font-medium text-sm">Flat no. 304 — Boys/Girls</p>
          <p className="text-cream/50 text-xs">3 members</p>
        </div>
      </div>
      
      {/* Chat area with wallpaper */}
      <div className="p-4 space-y-2 min-h-[320px]" style={{ background: "linear-gradient(180deg, #0B141A 0%, #111B21 100%)" }}>
        {/* Rahul */}
        <div className="flex justify-start">
          <div className="bg-[#202C33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
            <p className="text-[#53BDEB] text-xs font-medium mb-1">Rahul</p>
            <p className="text-cream/90 text-sm">Yaar aaj khaana kaun banega?</p>
          </div>
        </div>
        
        {/* Priya */}
        <div className="flex justify-start">
          <div className="bg-[#202C33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
            <p className="text-[#E791C8] text-xs font-medium mb-1">Priya</p>
            <p className="text-cream/90 text-sm">Main nahi kar sakti aaj bohot thak gayi hun 😭</p>
          </div>
        </div>
        
        {/* Amit */}
        <div className="flex justify-start">
          <div className="bg-[#202C33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
            <p className="text-[#FFD279] text-xs font-medium mb-1">Amit</p>
            <p className="text-cream/90 text-sm">Mere se bhi nahi hoga presentation hai kal</p>
          </div>
        </div>
        
        {/* Rahul */}
        <div className="flex justify-start">
          <div className="bg-[#202C33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
            <p className="text-[#53BDEB] text-xs font-medium mb-1">Rahul</p>
            <p className="text-cream/90 text-sm">Zomato?</p>
          </div>
        </div>
        
        {/* Priya */}
        <div className="flex justify-start">
          <div className="bg-[#202C33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
            <p className="text-[#E791C8] text-xs font-medium mb-1">Priya</p>
            <p className="text-cream/90 text-sm">Kal bhi Zomato tha</p>
          </div>
        </div>
        
        {/* Amit */}
        <div className="flex justify-start">
          <div className="bg-[#202C33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
            <p className="text-[#FFD279] text-xs font-medium mb-1">Amit</p>
            <p className="text-cream/90 text-sm">Kal bhi</p>
          </div>
        </div>
        
        {/* Rahul */}
        <div className="flex justify-start">
          <div className="bg-[#202C33] rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
            <p className="text-[#53BDEB] text-xs font-medium mb-1">Rahul</p>
            <p className="text-cream/90 text-sm">Parson bhi 💀</p>
          </div>
        </div>
        
        {/* All three */}
        <div className="flex justify-start">
          <div className="bg-[#202C33] rounded-lg px-3 py-2 max-w-[80%]">
            <p className="text-cream/90 text-sm">😭😭😭</p>
          </div>
        </div>
        
        {/* Savri system message */}
        <div className="flex justify-center mt-4">
          <div className="bg-gold/20 border border-gold/40 rounded-lg px-4 py-3 text-center">
            <p className="text-gold text-sm font-medium">Savri has entered the chat.</p>
            <p className="text-gold/70 text-xs mt-1">Private chef. Your kitchen. June 2026.</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-[#202C33] px-4 py-3">
        <MemeFooter dark />
      </div>
    </div>
  )
}

// Meme 4 - The Delhi Alignment Chart
function AlignmentChartMeme() {
  const alignments = [
    { 
      row: "GOOD", 
      col: "LAWFUL", 
      text: "Meal preps every Sunday. Has colour coded dabbas. Follows Rujuta Diwekar. We don't know this person.",
      highlight: false 
    },
    { 
      row: "GOOD", 
      col: "NEUTRAL", 
      text: "Has a Savri chef 😌",
      highlight: true 
    },
    { 
      row: "GOOD", 
      col: "CHAOTIC", 
      text: "Calls maa every evening pretending to catch up but actually needs the rajma recipe",
      highlight: false 
    },
    { 
      row: "NEUTRAL", 
      col: "LAWFUL", 
      text: "Same dhaba near office every single day. Knows the owner's family history.",
      highlight: false 
    },
    { 
      row: "NEUTRAL", 
      col: "TRUE", 
      text: "Whatever is in the fridge. Bread. Ketchup. Cheese slice. Calls it a meal. Sleeps fine.",
      highlight: false 
    },
    { 
      row: "NEUTRAL", 
      col: "CHAOTIC", 
      text: "Maggi at 2 AM with leftover Chinese and an egg on top. Zero regrets.",
      highlight: false 
    },
    { 
      row: "EVIL", 
      col: "LAWFUL", 
      text: "Orders a 'healthy bowl' then Uber Eats a pizza before the healthy bowl arrives",
      highlight: false 
    },
    { 
      row: "EVIL", 
      col: "NEUTRAL", 
      text: "Has every food delivery app. Every loyalty programme. Every coupon code. Still complains about charges.",
      highlight: false 
    },
    { 
      row: "EVIL", 
      col: "CHAOTIC", 
      text: "Ek samosa se dinner ho jaata hai. 'Main bahut kam khaata hun' wala insaan.",
      highlight: false 
    },
  ]

  return (
    <div className="bg-[#F5F0EB] border border-rose/20 rounded-[20px] p-6 w-full max-w-[400px] mx-auto shadow-lg shadow-rose/5 flex-shrink-0 snap-center">
      {/* Title */}
      <h3 className="font-serif text-dark text-xl font-medium text-center mb-1">
        Delhi Food Personality Types
      </h3>
      <p className="text-rose text-xs text-center mb-5">Kaun sa hai tu? 👀</p>
      
      {/* Column headers */}
      <div className="grid grid-cols-3 gap-1.5 mb-1.5">
        <div className="text-center text-[9px] font-bold text-dark/50 uppercase tracking-wide">Lawful</div>
        <div className="text-center text-[9px] font-bold text-dark/50 uppercase tracking-wide">Neutral</div>
        <div className="text-center text-[9px] font-bold text-dark/50 uppercase tracking-wide">Chaotic</div>
      </div>
      
      {/* 3x3 Grid */}
      <div className="grid grid-cols-3 gap-1.5">
        {alignments.map((item, index) => (
          <div 
            key={index}
            className={`p-2.5 rounded-lg flex flex-col justify-start min-h-[90px] relative ${
              item.highlight 
                ? "bg-rose text-cream" 
                : "bg-dark/5 text-dark"
            }`}
          >
            {item.highlight && (
              <span className="absolute top-1.5 right-1.5 text-gold text-xs">★</span>
            )}
            <p className={`text-[9px] font-semibold leading-tight ${
              item.highlight ? "text-cream" : "text-dark/80"
            }`}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
      
      {/* Caption */}
      <p className="text-rose/70 text-xs text-center mt-5 leading-relaxed">
        Neutral Good is the only correct answer.<br />
        Join the list. savri.co.in
      </p>
      
      {/* Footer */}
      <MemeFooter />
    </div>
  )
}

// Meme 5 - The Stages of Hunger
function StagesOfHungerMeme() {
  const stages = [
    "\"Kuch nahi chahiye, bahut kha liya lunch mein\"",
    "\"Thoda sa kuch hoga toh theek hai warna nahi bhi chalega\"",
    "\"Yaar kuch order karte hain\"",
    "\"45 minute delivery time? 😐\"",
    "\"Fine. Order kiya.\"",
    "\"Kahan hai mera order? Ab toh 55 minute ho gaye\"",
    "\"Aagaya. Thanda hai. Gravy pani ho gayi. Roti like cardboard.\"",
    "\"Kal se ghar ka khana. Pakka.\"",
    "* Goes to step 1 the next day *",
  ]

  return (
    <div className="bg-[#F5F0EB] border border-rose/20 rounded-[20px] p-7 w-full max-w-[400px] mx-auto shadow-lg shadow-rose/5 flex-shrink-0 snap-center">
      {/* Title */}
      <h3 className="font-serif text-dark text-xl font-medium text-center mb-6">
        Delhi mein bhookh ke stages
      </h3>
      
      {/* Numbered list */}
      <ol className="space-y-3">
        {stages.map((stage, index) => (
          <li key={index} className="flex gap-3 items-start">
            <span className="text-rose font-bold text-sm min-w-[20px]">{index + 1}.</span>
            <span className="text-dark text-sm leading-relaxed">{stage}</span>
          </li>
        ))}
      </ol>
      
      {/* Caption */}
      <p className="text-rose font-semibold text-sm text-center mt-6 leading-relaxed">
        Step 8 toh aayega nahi.<br />
        Savri aayega. June mein.
      </p>
      
      {/* Footer */}
      <MemeFooter />
    </div>
  )
}

// Meme 6 - The Honest Search History
function SearchHistoryMeme() {
  const searches = [
    "ghar ka khana delivery Delhi",
    "ghar ka khana kaise banaye easy",
    "ghar ka khana banane wala app",
    "ghar ka khana why so hard",
    "maa ke haath ka khana alternative",
    "dal makhani recipe easy 5 minute",
    "pressure cooker kaise chalate hain",
    "ghar ka khana Delhi affordable",
    "private chef at home Delhi",
  ]

  return (
    <div className="bg-[#0A0A0A] rounded-[20px] p-7 w-full max-w-[400px] mx-auto shadow-lg shadow-dark/20 flex-shrink-0 snap-center">
      {/* Title */}
      <p className="text-gold text-[10px] font-semibold uppercase tracking-wider text-center mb-5">
        DELHI PROFESSIONAL KI REAL SEARCH HISTORY 👀
      </p>
      
      {/* Fake Google search bar */}
      <div className="bg-cream rounded-full px-4 py-3 flex items-center gap-3 mb-4">
        <svg className="w-5 h-5 text-dark/60" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-dark/70 text-sm flex-1">ghar ka khana De...</span>
      </div>
      
      {/* Search suggestions */}
      <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
        {searches.map((search, index) => (
          <div 
            key={index}
            className={`flex items-center gap-3 px-4 py-2.5 border-b border-cream/5 last:border-b-0 ${
              index === searches.length - 1 ? "bg-gold/20" : ""
            }`}
          >
            <span className="text-cream/40 text-sm">🔍</span>
            <span className={`text-sm ${index === searches.length - 1 ? "text-gold font-medium" : "text-cream/80"}`}>
              {index === searches.length - 1 ? "✨ Savri — private chef Delhi" : search}
            </span>
          </div>
        ))}
      </div>
      
      {/* Arrow and caption */}
      <div className="flex items-center justify-end gap-2 mt-4">
        <span className="text-rose text-xs">yeh wala. bas yahi chahiye tha.</span>
        <span className="text-rose">→</span>
      </div>
      
      {/* Footer */}
      <div className="mt-4 text-center">
        <p className="text-cream/40 text-xs mb-1">@savri.in</p>
        <p className="text-gold text-xs">savri.co.in</p>
      </div>
      
      <MemeFooter dark hideBranding />
    </div>
  )
}

// Shared footer component
function MemeFooter({ dark = false, hideBranding = false }: { dark?: boolean; hideBranding?: boolean }) {
  const [showTooltip, setShowTooltip] = useState(false)
  
  return (
    <div className={`flex items-center justify-between mt-5 pt-4 border-t ${dark ? "border-cream/10" : "border-dark/10"}`}>
      {!hideBranding && (
        <Image
          src="/images/logo-savri.png"
          alt="Savri"
          width={60}
          height={18}
          className={`h-4 w-auto ${dark ? "opacity-40" : "opacity-50"}`}
        />
      )}
      {hideBranding && <span />}
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
            Screenshot karo aur share karo
          </span>
        )}
      </button>
    </div>
  )
}

export function MemeSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const memeCount = 6

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
      <div className="text-center mb-10">
        <p className="text-rose text-xs font-medium uppercase tracking-[0.2em] mb-2">
          Real Talk
        </p>
        <p className="text-dark/60 text-sm max-w-xs mx-auto leading-relaxed">
          Agar yeh tumhara life nahi hai<br />
          toh hum nahi jaante kya hai. 🙂
        </p>
      </div>

      {/* Desktop: Horizontal scroll / Mobile: Vertical stack */}
      <div 
        ref={scrollRef}
        className="flex md:flex-row flex-col gap-6 md:gap-8 px-6 md:px-12 lg:px-20 md:overflow-x-auto md:snap-x md:snap-mandatory md:scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <AnnualResolutionMeme />
        <DelhiFoodMathMeme />
        <WhatsAppGroupMeme />
        <AlignmentChartMeme />
        <StagesOfHungerMeme />
        <SearchHistoryMeme />
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
      <p className="text-rose text-center mt-12 md:mt-16 text-base md:text-lg font-medium px-6">
        Okay yaar hum samajh gaye.<br />
        Ab solution bhi sun lo. 👇
      </p>
    </section>
  )
}
