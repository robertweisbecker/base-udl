"use client"

import { Moon, Sun } from "@phosphor-icons/react"
import { useTheme } from "next-themes"

import { Button } from "@workspace/ui/components/button"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className="size-8 text-muted-foreground"
      size="icon"
      variant="outline"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun aria-hidden="true" size={16} className="scale-100 dark:scale-0 transition-transform" />
      <Moon aria-hidden="true" size={16} className="absolute scale-0 dark:scale-100 transition-transform" />
    </Button>
  )
}
