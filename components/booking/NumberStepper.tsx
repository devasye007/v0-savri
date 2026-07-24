"use client"

import { Minus, Plus } from "lucide-react"

type Props = {
  value: number
  onChange: (next: number) => void
  min?: number
  max?: number
  step?: number
  label?: string
  ariaLabel?: string
}

/** Accessible +/- numeric stepper matching the Savri dark palette. */
export function NumberStepper({ value, onChange, min = 0, max = 999, step = 1, ariaLabel }: Props) {
  const dec = () => onChange(Math.max(min, value - step))
  const inc = () => onChange(Math.min(max, value + step))

  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5">
      <button
        type="button"
        onClick={dec}
        disabled={value <= min}
        aria-label={`Decrease ${ariaLabel || ""}`.trim()}
        className="flex h-11 w-11 items-center justify-center rounded-full text-cream transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span
        className="min-w-12 select-none text-center text-lg font-semibold tabular-nums text-cream"
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={inc}
        disabled={value >= max}
        aria-label={`Increase ${ariaLabel || ""}`.trim()}
        className="flex h-11 w-11 items-center justify-center rounded-full text-cream transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
