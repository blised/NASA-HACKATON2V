"use client"

/**
 * ThemeProvider component
 * Created and documented with AI assistance (model: GPT-5)
 * Deployment target: Vercel (Next.js 14 / App Router)
 */

import * as React from "react"
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

/**
 * Wraps the NextThemesProvider for global theme control.
 * Enables light/dark/system mode management throughout the app.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
