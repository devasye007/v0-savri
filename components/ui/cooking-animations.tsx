/**
 * Cooking animation primitives — inline-SVG, multi-layer compositions
 * with gradients, drop shadows, and pure-CSS keyframe motion. Each scene
 * has multiple independently-animated channels so it reads as a real
 * kitchen moment, not a single rotating icon.
 *
 * All components are aria-hidden — purely visual accents. Loops are pure
 * CSS (no JS), so they keep running while the element is in the viewport.
 */

/* ──────────────────────────────────────────────────────────────────────
 * Master cooking scene — pan over flame, food tumbling, steam rising,
 * sparks drifting, ambient warm glow. Drop it into a section as the
 * signature kitchen moment.
 * ────────────────────────────────────────────────────────────────────── */
export function CookingScene({ className = "" }: { className?: string }) {
  return (
    <div className={`savri-cooking-scene pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 520" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Warm ambient glow behind everything */}
          <radialGradient id="csAmbient" cx="50%" cy="78%" r="55%">
            <stop offset="0%" stopColor="#B5636A" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#C9A84C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#B5636A" stopOpacity="0" />
          </radialGradient>

          {/* Pan metal — top-lit gradient */}
          <linearGradient id="csPanBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="55%" stopColor="#161616" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="csPanInside" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="csHandle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a2a1f" />
            <stop offset="100%" stopColor="#1a0f08" />
          </linearGradient>

          {/* Food gradient — roasted vegetable look */}
          <radialGradient id="csFoodA" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFB872" />
            <stop offset="55%" stopColor="#D4915A" />
            <stop offset="100%" stopColor="#7A3E1F" />
          </radialGradient>
          <radialGradient id="csFoodB" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#E7869B" />
            <stop offset="55%" stopColor="#B5636A" />
            <stop offset="100%" stopColor="#6B2A33" />
          </radialGradient>
          <radialGradient id="csFoodC" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#F1D27A" />
            <stop offset="55%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#7A6125" />
          </radialGradient>

          {/* Flame gradients — 3 layers from outer to core */}
          <linearGradient id="csFlameOuter" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#B5636A" stopOpacity="0" />
            <stop offset="35%" stopColor="#B5636A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#B5636A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="csFlameMid" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FF8344" />
            <stop offset="50%" stopColor="#F1A24C" />
            <stop offset="100%" stopColor="#B5636A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="csFlameInner" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FFE69C" />
            <stop offset="60%" stopColor="#FFB54C" />
            <stop offset="100%" stopColor="#F08344" stopOpacity="0" />
          </linearGradient>

          {/* Steam gradient — soft cream wisp */}
          <radialGradient id="csSteam" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5F0E8" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#F5F0E8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F5F0E8" stopOpacity="0" />
          </radialGradient>

          {/* Drop-shadow filter for the pan */}
          <filter id="csShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feFlood floodColor="#000000" floodOpacity="0.55" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft blur for steam */}
          <filter id="csSteamBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Warm ambient glow */}
        <ellipse className="ambient-glow" cx="400" cy="380" rx="320" ry="140" fill="url(#csAmbient)" />

        {/* Steam wisps (behind pan) */}
        <g filter="url(#csSteamBlur)" className="savri-cook-steam" style={{ position: "absolute" }}>
          <g style={{ animation: "savriSteamDrift 3.2s ease-in-out infinite", animationDelay: "0s",  transformOrigin: "320px 240px" }}>
            <ellipse cx="320" cy="240" rx="18" ry="32" fill="url(#csSteam)" />
          </g>
          <g style={{ animation: "savriSteamDrift 3.2s ease-in-out infinite", animationDelay: "0.5s", transformOrigin: "380px 230px" }}>
            <ellipse cx="380" cy="230" rx="14" ry="28" fill="url(#csSteam)" />
          </g>
          <g style={{ animation: "savriSteamDrift 3.2s ease-in-out infinite", animationDelay: "1s",   transformOrigin: "440px 250px" }}>
            <ellipse cx="440" cy="250" rx="20" ry="34" fill="url(#csSteam)" />
          </g>
          <g style={{ animation: "savriSteamDrift 3.2s ease-in-out infinite", animationDelay: "1.5s", transformOrigin: "300px 260px" }}>
            <ellipse cx="300" cy="260" rx="10" ry="22" fill="url(#csSteam)" />
          </g>
          <g style={{ animation: "savriSteamDrift 3.2s ease-in-out infinite", animationDelay: "1.9s", transformOrigin: "470px 240px" }}>
            <ellipse cx="470" cy="240" rx="12" ry="24" fill="url(#csSteam)" />
          </g>
        </g>

        {/* Pan + food group (rocks together) */}
        <g className="savri-cook-pan" style={{ transformOrigin: "560px 350px" }}>
          {/* Handle */}
          <rect x="520" y="332" width="180" height="22" rx="10" fill="url(#csHandle)" filter="url(#csShadow)" />
          <rect x="520" y="332" width="180" height="6" rx="3" fill="#5a3f29" opacity="0.6" />
          <circle cx="690" cy="343" r="4" fill="#C9A84C" opacity="0.7" />

          {/* Pan body (back lip) */}
          <ellipse cx="400" cy="340" rx="180" ry="46" fill="url(#csPanBody)" filter="url(#csShadow)" />

          {/* Pan rim ring */}
          <ellipse cx="400" cy="332" rx="180" ry="46" fill="none" stroke="#3a3a3a" strokeWidth="3" />

          {/* Pan interior */}
          <ellipse cx="400" cy="332" rx="170" ry="40" fill="url(#csPanInside)" />

          {/* Gold rim highlight */}
          <ellipse cx="400" cy="332" rx="172" ry="40" fill="none" stroke="#C9A84C" strokeWidth="1.4" opacity="0.45" />

          {/* Food pieces inside pan */}
          <g className="food-a" style={{ transformOrigin: "350px 320px" }}>
            <circle cx="350" cy="320" r="20" fill="url(#csFoodA)" />
            <circle cx="345" cy="313" r="6" fill="#FFE0B5" opacity="0.55" />
          </g>
          <g className="food-b" style={{ transformOrigin: "400px 318px" }}>
            <circle cx="400" cy="318" r="22" fill="url(#csFoodB)" />
            <circle cx="394" cy="310" r="6.5" fill="#FFC8D5" opacity="0.55" />
          </g>
          <g className="food-c" style={{ transformOrigin: "455px 322px" }}>
            <circle cx="455" cy="322" r="18" fill="url(#csFoodC)" />
            <circle cx="450" cy="316" r="5" fill="#FFF1B5" opacity="0.6" />
          </g>
        </g>

        {/* Flame underneath the pan */}
        <g transform="translate(400, 420)" className="savri-cook-flame">
          {/* Outer flame envelope */}
          <path
            className="flame-outer"
            d="M0 0 C-72 -32 -82 -100 -52 -150 C-60 -110 -28 -106 -22 -136 C-12 -180 -42 -218 -2 -250 C2 -208 56 -198 50 -148 C46 -90 60 -50 0 0 Z"
            fill="url(#csFlameOuter)"
          />
          {/* Middle flame */}
          <path
            className="flame-mid"
            d="M0 -4 C-50 -28 -56 -84 -34 -126 C-40 -94 -18 -94 -16 -118 C-10 -156 -32 -188 -2 -218 C4 -184 38 -176 36 -134 C32 -82 42 -50 0 -4 Z"
            fill="url(#csFlameMid)"
          />
          {/* Inner core */}
          <path
            className="flame-inner"
            d="M0 -10 C-26 -28 -28 -62 -16 -94 C-20 -78 -8 -82 -6 -100 C-2 -130 -16 -150 0 -180 C6 -154 24 -148 20 -110 C16 -76 22 -50 0 -10 Z"
            fill="url(#csFlameInner)"
          />

          {/* Rising sparks */}
          <circle className="spark spark-1" cx="-30" cy="-20" r="2.5" fill="#FFD27A" />
          <circle className="spark spark-2" cx="25"  cy="-10" r="2"   fill="#C9A84C" />
          <circle className="spark spark-3" cx="-12" cy="-30" r="1.6" fill="#FFE69C" />
          <circle className="spark spark-4" cx="40"  cy="-22" r="2.2" fill="#FFB54C" />
          <circle className="spark spark-5" cx="-44" cy="-12" r="1.8" fill="#F1A24C" />
        </g>
      </svg>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────────
 * Small standalone pieces (used as accents around the page)
 * ────────────────────────────────────────────────────────────────────── */

export function CookPanFlip({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 130" className="h-full w-full">
        <defs>
          <linearGradient id="pfPan" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <radialGradient id="pfFood" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFB872" />
            <stop offset="100%" stopColor="#7A3E1F" />
          </radialGradient>
          <filter id="pfShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="3" />
            <feComponentTransfer><feFuncA type="linear" slope="0.5" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g className="savri-cook-pan" style={{ transformOrigin: "140px 80px" }}>
          <g className="food-a" style={{ transformOrigin: "65px 60px" }}>
            <circle cx="65" cy="60" r="10" fill="url(#pfFood)" />
            <circle cx="62" cy="56" r="3" fill="#FFE0B5" opacity="0.5" />
          </g>
          <g className="food-b" style={{ transformOrigin: "95px 60px" }}>
            <circle cx="95" cy="60" r="8" fill="#B5636A" />
          </g>
          <ellipse cx="80" cy="80" rx="60" ry="14" fill="url(#pfPan)" filter="url(#pfShadow)" />
          <ellipse cx="80" cy="76" rx="60" ry="14" fill="none" stroke="#C9A84C" strokeWidth="1.2" opacity="0.5" />
          <rect x="135" y="74" width="55" height="6" rx="3" fill="#2a1a14" />
          <circle cx="186" cy="77" r="3" fill="#C9A84C" opacity="0.8" />
        </g>
      </svg>
    </div>
  )
}

export function CookFlame({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 80 130" className="h-full w-full">
        <defs>
          <linearGradient id="cfOuter" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#B5636A" stopOpacity="0" />
            <stop offset="35%" stopColor="#B5636A" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#B5636A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cfMid" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FF8344" />
            <stop offset="55%" stopColor="#F1A24C" />
            <stop offset="100%" stopColor="#B5636A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cfInner" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FFE69C" />
            <stop offset="60%" stopColor="#FFB54C" />
            <stop offset="100%" stopColor="#F08344" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="savri-cook-flame" transform="translate(40, 125)">
          <path
            className="flame-outer"
            d="M0 0 C-30 -14 -35 -50 -22 -72 C-26 -52 -12 -50 -10 -64 C-6 -84 -18 -100 -2 -116 C2 -98 24 -90 22 -70 C20 -42 26 -22 0 0 Z"
            fill="url(#cfOuter)"
          />
          <path
            className="flame-mid"
            d="M0 -3 C-22 -16 -25 -42 -16 -60 C-19 -46 -8 -46 -7 -56 C-4 -74 -14 -88 -2 -102 C2 -86 18 -82 16 -64 C14 -38 18 -22 0 -3 Z"
            fill="url(#cfMid)"
          />
          <path
            className="flame-inner"
            d="M0 -8 C-12 -16 -13 -32 -8 -46 C-10 -38 -4 -40 -3 -50 C-1 -62 -8 -72 0 -86 C3 -72 12 -68 10 -52 C8 -36 10 -22 0 -8 Z"
            fill="url(#cfInner)"
          />
          <circle className="spark spark-1" cx="-15" cy="-10" r="1.8" fill="#FFD27A" />
          <circle className="spark spark-2" cx="12"  cy="-6"  r="1.4" fill="#C9A84C" />
          <circle className="spark spark-3" cx="-5"  cy="-18" r="1.2" fill="#FFE69C" />
          <circle className="spark spark-4" cx="18"  cy="-14" r="1.6" fill="#FFB54C" />
          <circle className="spark spark-5" cx="-22" cy="-8"  r="1.3" fill="#F1A24C" />
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
      <span className="steam steam-4" />
      <span className="steam steam-5" />
    </div>
  )
}

export function CookWhisk({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 130" className="h-full w-full">
        <defs>
          <radialGradient id="cwBatter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F1D27A" />
            <stop offset="80%" stopColor="#C9A84C" />
          </radialGradient>
        </defs>
        <g className="savri-cook-whisk">
          {/* Bowl */}
          <path d="M10 80 Q50 130 90 80 L82 78 Q50 116 18 78 Z" fill="#2a1a14" />
          <ellipse className="batter-pool" cx="50" cy="80" rx="38" ry="6" fill="url(#cwBatter)" />
          {/* Whisk swinging */}
          <g className="whisk-arm" style={{ transformOrigin: "50px 6px" }}>
            <rect x="46" y="6" width="8" height="44" rx="3" fill="#C9A84C" />
            <ellipse cx="50" cy="76" rx="22" ry="34" fill="none" stroke="#C9A84C" strokeWidth="1.6" />
            <ellipse cx="50" cy="76" rx="14" ry="34" fill="none" stroke="#C9A84C" strokeWidth="1.6" />
            <ellipse cx="50" cy="76" rx="6"  ry="34" fill="none" stroke="#C9A84C" strokeWidth="1.6" />
            <ellipse cx="50" cy="76" rx="22" ry="6"  fill="none" stroke="#C9A84C" strokeWidth="1.6" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export function CookKnife({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 140 100" className="h-full w-full">
        <defs>
          <linearGradient id="ckBlade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f0f0" />
            <stop offset="100%" stopColor="#9a9a9a" />
          </linearGradient>
        </defs>
        {/* Cutting board */}
        <rect x="10" y="68" width="120" height="16" rx="2" fill="#3a2a1f" />
        <rect x="10" y="68" width="120" height="3"  rx="2" fill="#5a3f29" opacity="0.5" />
        {/* Chopped veg */}
        <circle cx="28" cy="60" r="5"   fill="#B5636A" />
        <circle cx="40" cy="62" r="3.5" fill="#C9A84C" />
        <circle cx="52" cy="60" r="4"   fill="#B5636A" opacity="0.85" />
        <circle cx="62" cy="63" r="3"   fill="#C9A84C" />
        {/* Compressing shadow under knife */}
        <ellipse className="knife-shadow savri-cook-knife" cx="92" cy="82" rx="22" ry="3" fill="#000000" opacity="0.55" />
        <g className="savri-cook-knife">
          <g className="knife" style={{ transformOrigin: "112px 64px" }}>
            <polygon points="68,8 110,46 78,46" fill="url(#ckBlade)" stroke="#1a1a1a" strokeWidth="0.6" />
            <polygon points="68,8 78,8 78,46" fill="#dadada" opacity="0.5" />
            <rect x="106" y="42" width="22" height="8" rx="2" fill="#2a1a14" transform="rotate(28 117 46)" />
          </g>
        </g>
      </svg>
    </div>
  )
}
