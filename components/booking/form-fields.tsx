"use client"

import type { ReactNode } from "react"

const fieldBase =
  "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-cream placeholder:text-cream/35 outline-none transition focus:border-rose focus:bg-white/[0.06]"

export function FieldLabel({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-cream/80">
      {children}
    </label>
  )
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldBase} ${props.className || ""}`} />
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldBase} min-h-24 resize-y ${props.className || ""}`} />
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={`${fieldBase} appearance-none ${props.className || ""}`}>
      {props.children}
    </select>
  )
}

export function FieldError({ children }: { children: ReactNode }) {
  if (!children) return null
  return <p className="mt-1.5 text-sm text-rose">{children}</p>
}
