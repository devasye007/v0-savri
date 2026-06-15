/**
 * Inline-SVG cooking animations. Each component is a small, decorative
 * scene that LOOPS via pure CSS keyframes (no JS) — pan flipping food,
 * steam wisps rising, flame flickering, whisk spinning, knife chopping.
 *
 * Drop one anywhere in a page. They are aria-hidden — purely visual.
 */

export function CookPanFlip({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 160 110" className="h-full w-full">
        <defs>
          <radialGradient id="panFood" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#E0A66E" />
            <stop offset="100%" stopColor="#B5636A" />
          </radialGradient>
          <linearGradient id="panMetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
        </defs>
        <g className="savri-cook-pan">
          {/* Tossed food — animated with savri-cook-pan ".pan-food" via CSS */}
          <circle className="pan-food" cx="60" cy="48" r="9" fill="url(#panFood)" />
          {/* Pan body */}
          <ellipse cx="60" cy="62" rx="48" ry="11" fill="url(#panMetal)" />
          <ellipse cx="60" cy="60" rx="48" ry="11" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.55" />
          {/* Handle */}
          <rect x="105" y="58" width="48" height="6" rx="3" fill="#2a2a2a" />
          <rect x="105" y="58" width="48" height="6" rx="3" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.45" />
          <circle cx="148" cy="61" r="3" fill="#C9A84C" />
        </g>
      </svg>
    </div>
  )
}

export function CookSteam({ className = "" }: { className?: string }) {
  return (
    <div className={`savri-cook-steam pointer-events-none ${className}`} aria-hidden="true">
      <span className="steam steam-1" />
      <span className="steam steam-2" />
      <span className="steam steam-3" />
    </div>
  )
}

export function CookFlame({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 60 96" className="h-full w-full">
        <defs>
          <linearGradient id="flameInner" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFD27A" />
            <stop offset="55%" stopColor="#F09A4B" />
            <stop offset="100%" stopColor="#B5636A" />
          </linearGradient>
          <linearGradient id="flameOuter" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B5636A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="savri-cook-flame">
          <path
            d="M30 92 C8 88 6 60 22 42 C18 56 26 60 28 50 C32 30 22 18 30 4 C32 22 50 28 48 56 C46 80 50 92 30 92 Z"
            fill="url(#flameOuter)"
          />
          <path
            d="M30 88 C14 84 14 64 24 50 C22 60 28 62 30 54 C32 38 26 28 30 14 C32 28 44 36 42 58 C40 78 42 88 30 88 Z"
            fill="url(#flameInner)"
          />
        </g>
      </svg>
    </div>
  )
}

export function CookWhisk({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 80 110" className="h-full w-full">
        <g className="savri-cook-whisk">
          {/* Handle */}
          <rect x="36" y="6" width="8" height="34" rx="3" fill="#C9A84C" />
          {/* Whisk wires */}
          <ellipse cx="40" cy="74" rx="22" ry="34" fill="none" stroke="#C9A84C" strokeWidth="1.6" />
          <ellipse cx="40" cy="74" rx="14" ry="34" fill="none" stroke="#C9A84C" strokeWidth="1.6" />
          <ellipse cx="40" cy="74" rx="6" ry="34" fill="none" stroke="#C9A84C" strokeWidth="1.6" />
          <ellipse cx="40" cy="74" rx="22" ry="6" fill="none" stroke="#C9A84C" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  )
}

export function CookKnife({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 90" className="h-full w-full">
        {/* Board */}
        <rect x="6" y="62" width="108" height="14" rx="2" fill="#3a2a1f" />
        <rect x="6" y="62" width="108" height="14" rx="2" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
        {/* Chopped items */}
        <circle cx="22" cy="55" r="4" fill="#B5636A" />
        <circle cx="34" cy="58" r="3" fill="#C9A84C" />
        <circle cx="46" cy="55" r="3.5" fill="#B5636A" opacity="0.8" />
        {/* Knife */}
        <g className="savri-cook-knife">
          <polygon points="60,8 100,40 70,40" fill="#cfcfcf" stroke="#1a1a1a" strokeWidth="0.6" />
          <rect x="98" y="38" width="18" height="6" rx="2" fill="#2a1a14" transform="rotate(28 107 41)" />
        </g>
      </svg>
    </div>
  )
}
