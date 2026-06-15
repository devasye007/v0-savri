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
  // Composition lives in a 1200 × 900 viewBox, centred around y=560 (pan top
  // edge). Flame lives below pan (y ≈ 600–880), steam rises above pan
  // (y ≈ 120–420). All food pieces stay within the pan's ellipse so they
  // never escape during the rock + toss animation.
  return (
    <div className={`savri-cooking-scene pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 900" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="csAmbient" cx="50%" cy="72%" r="48%">
            <stop offset="0%" stopColor="#B5636A" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#C9A84C" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#B5636A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="csPanBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="55%" stopColor="#161616" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <radialGradient id="csPanInside" cx="50%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
          <linearGradient id="csHandle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a3022" />
            <stop offset="100%" stopColor="#1a0a04" />
          </linearGradient>
          <radialGradient id="csFoodA" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFC890" />
            <stop offset="60%" stopColor="#D4915A" />
            <stop offset="100%" stopColor="#5A2A12" />
          </radialGradient>
          <radialGradient id="csFoodB" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F296AC" />
            <stop offset="55%" stopColor="#B5636A" />
            <stop offset="100%" stopColor="#5A1F26" />
          </radialGradient>
          <radialGradient id="csFoodC" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FBE08E" />
            <stop offset="55%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#5C4416" />
          </radialGradient>
          <radialGradient id="csFoodD" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#8FD89A" />
            <stop offset="55%" stopColor="#4F9A6A" />
            <stop offset="100%" stopColor="#1F3F2A" />
          </radialGradient>
          <radialGradient id="csFoodE" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFB872" />
            <stop offset="55%" stopColor="#B5636A" />
            <stop offset="100%" stopColor="#5A2A2A" />
          </radialGradient>
          <linearGradient id="csFlameOuter" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#B5636A" stopOpacity="0" />
            <stop offset="35%" stopColor="#B5636A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#B5636A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="csFlameMid" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FF7A30" />
            <stop offset="50%" stopColor="#FFA24C" />
            <stop offset="100%" stopColor="#FF8344" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="csFlameInner" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FFF1B5" />
            <stop offset="55%" stopColor="#FFC465" />
            <stop offset="100%" stopColor="#FF8344" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="csSteam" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5F0E8" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#F5F0E8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F5F0E8" stopOpacity="0" />
          </radialGradient>
          <filter id="csShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
            <feOffset dx="0" dy="14" result="offsetblur" />
            <feFlood floodColor="#000000" floodOpacity="0.75" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="csSteamBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="csFlameGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" />
            <feComposite in="SourceGraphic" operator="over" />
          </filter>
        </defs>

        {/* Warm ambient glow */}
        <ellipse className="ambient-glow" cx="600" cy="650" rx="520" ry="240" fill="url(#csAmbient)" />

        {/* Steam wisps — 10 wisps spanning width above pan, drifting */}
        <g filter="url(#csSteamBlur)">
          {[
            { cx: 440, cy: 320, rx: 22, ry: 50, d: 0,    dx:  6 },
            { cx: 520, cy: 280, rx: 18, ry: 44, d: 0.35, dx: -5 },
            { cx: 600, cy: 260, rx: 24, ry: 56, d: 0.7,  dx:  8 },
            { cx: 680, cy: 290, rx: 20, ry: 48, d: 1.0,  dx: -6 },
            { cx: 760, cy: 320, rx: 22, ry: 52, d: 1.3,  dx:  4 },
            { cx: 480, cy: 380, rx: 14, ry: 32, d: 1.6,  dx: -3 },
            { cx: 720, cy: 380, rx: 16, ry: 36, d: 1.9,  dx:  5 },
            { cx: 560, cy: 360, rx: 12, ry: 28, d: 0.2,  dx: -4 },
            { cx: 640, cy: 380, rx: 18, ry: 40, d: 0.55, dx:  6 },
            { cx: 600, cy: 220, rx: 26, ry: 60, d: 0.9,  dx:  0 },
          ].map((w, i) => (
            <g
              key={i}
              style={{
                animation: "savriSteamDrift 3.4s ease-in-out infinite",
                animationDelay: `${w.d}s`,
                transformOrigin: `${w.cx}px ${w.cy}px`,
                ["--dx" as string]: `${w.dx}px`,
              }}
            >
              <ellipse cx={w.cx} cy={w.cy} rx={w.rx} ry={w.ry} fill="url(#csSteam)" />
            </g>
          ))}
        </g>

        {/* Pan + food, rocks together */}
        <g className="savri-cook-pan" style={{ transformOrigin: "880px 580px" }}>
          {/* Handle — extends right */}
          <rect x="820" y="552" width="260" height="32" rx="14" fill="url(#csHandle)" filter="url(#csShadow)" />
          <rect x="820" y="552" width="260" height="10" rx="5" fill="#6a4a32" opacity="0.55" />
          <circle cx="1062" cy="568" r="7" fill="#C9A84C" opacity="0.85" />
          <circle cx="1062" cy="568" r="3" fill="#FFE69C" opacity="0.9" />

          {/* Pan body outer ring (back lip + outer) */}
          <ellipse cx="600" cy="572" rx="280" ry="74" fill="url(#csPanBody)" filter="url(#csShadow)" />

          {/* Pan rim */}
          <ellipse cx="600" cy="552" rx="280" ry="74" fill="none" stroke="#4a4a4a" strokeWidth="4" />

          {/* Pan interior (deep dish) */}
          <ellipse cx="600" cy="552" rx="265" ry="66" fill="url(#csPanInside)" />

          {/* Gold rim highlight */}
          <ellipse cx="600" cy="550" rx="268" ry="66" fill="none" stroke="#C9A84C" strokeWidth="2" opacity="0.5" />

          {/* Inner shadow for depth */}
          <ellipse cx="600" cy="546" rx="240" ry="56" fill="none" stroke="#000" strokeWidth="6" opacity="0.4" />

          {/* Food pieces — five different colours, each tossing independently */}
          <g className="food-a" style={{ transformOrigin: "455px 540px" }}>
            <circle cx="455" cy="540" r="32" fill="url(#csFoodA)" />
            <ellipse cx="445" cy="528" rx="10" ry="6" fill="#FFE0B5" opacity="0.6" />
          </g>
          <g className="food-b" style={{ transformOrigin: "545px 535px" }}>
            <circle cx="545" cy="535" r="36" fill="url(#csFoodB)" />
            <ellipse cx="534" cy="523" rx="11" ry="7" fill="#FFD0DC" opacity="0.6" />
          </g>
          <g className="food-c" style={{ transformOrigin: "640px 540px" }}>
            <circle cx="640" cy="540" r="30" fill="url(#csFoodC)" />
            <ellipse cx="630" cy="528" rx="9" ry="5" fill="#FFF1B5" opacity="0.7" />
          </g>
          <g className="food-a" style={{ transformOrigin: "730px 535px", animationDelay: "0.4s" }}>
            <circle cx="730" cy="535" r="32" fill="url(#csFoodD)" />
            <ellipse cx="720" cy="523" rx="10" ry="6" fill="#D4F0CC" opacity="0.6" />
          </g>
          <g className="food-c" style={{ transformOrigin: "820px 540px", animationDelay: "0.55s" }}>
            <circle cx="820" cy="540" r="28" fill="url(#csFoodE)" />
            <ellipse cx="811" cy="529" rx="8" ry="5" fill="#FFD2B0" opacity="0.65" />
          </g>
        </g>

        {/* Flame underneath the pan — sits at viewport y 600 → 880 */}
        <g transform="translate(600, 870)" className="savri-cook-flame">
          {/* Outer flame envelope — wide, dim rose halo */}
          <g filter="url(#csFlameGlow)">
            <path
              className="flame-outer"
              d="M0 0
                 C-160 -50 -180 -180 -110 -280
                 C-128 -200 -52 -190 -42 -240
                 C-22 -330 -82 -400 0 -460
                 C82 -400 22 -330 42 -240
                 C52 -190 128 -200 110 -280
                 C180 -180 160 -50 0 0 Z"
              fill="url(#csFlameOuter)"
            />
          </g>
          {/* Middle flame — orange body */}
          <path
            className="flame-mid"
            d="M0 -10
               C-100 -56 -114 -160 -64 -240
               C-78 -180 -32 -180 -28 -224
               C-18 -296 -56 -360 0 -410
               C56 -360 18 -296 28 -224
               C32 -180 78 -180 64 -240
               C114 -160 100 -56 0 -10 Z"
            fill="url(#csFlameMid)"
          />
          {/* Inner core — bright yellow */}
          <path
            className="flame-inner"
            d="M0 -28
               C-52 -56 -56 -128 -32 -184
               C-40 -150 -16 -160 -14 -200
               C-6 -250 -32 -290 0 -340
               C32 -290 6 -250 14 -200
               C16 -160 40 -150 32 -184
               C56 -128 52 -56 0 -28 Z"
            fill="url(#csFlameInner)"
          />

          {/* Rising sparks scattered around the flame */}
          <circle className="spark spark-1" cx="-70" cy="-40"  r="4"   fill="#FFD27A" />
          <circle className="spark spark-2" cx="60"  cy="-30"  r="3.5" fill="#C9A84C" />
          <circle className="spark spark-3" cx="-30" cy="-70"  r="2.5" fill="#FFE69C" />
          <circle className="spark spark-4" cx="90"  cy="-60"  r="3"   fill="#FFB54C" />
          <circle className="spark spark-5" cx="-100" cy="-30" r="3"   fill="#F1A24C" />
          <circle className="spark spark-1" cx="40"  cy="-100" r="2.5" fill="#FFE69C" style={{ animationDelay: "0.3s" }} />
          <circle className="spark spark-3" cx="-50" cy="-110" r="2"   fill="#FFD27A" style={{ animationDelay: "0.8s" }} />
          <circle className="spark spark-4" cx="110" cy="-30"  r="2.2" fill="#C9A84C" style={{ animationDelay: "1.4s" }} />
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
