"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true) // Default to dark theme

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = savedTheme === "dark" || (!savedTheme && true)

    setIsDark(prefersDark)
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <Button
      onClick={toggleTheme}
      size="sm"
      variant="outline"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card hover:scale-110 transition-all duration-300 shadow-lg bg-transparent"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
    </Button>
  )
}
