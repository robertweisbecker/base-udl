"use client"

import { useId, useState } from "react"
import ThemeToggle from "@/components/navbar-components/theme-toggle"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { useSidebar } from "@workspace/ui/components/sidebar"
import { IconLayoutSidebar, IconQuestionMark, IconLanguage } from "@tabler/icons-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { Logo } from "./logo"


const languages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Japanese", value: "ja" },
]

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const id = useId()
  const [language, setLanguage] = useState("en")
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex w-full shrink-0 items-center border-b bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80">
      <div className="flex h-(--header-height) w-full max-w-none items-center gap-2 px-2">
        <Button
          variant="neutral"
          size="icon"
          onClick={toggleSidebar}
        >
          <IconLayoutSidebar />
        </Button>
        <Separator
          orientation="vertical"
          className="me-2 data-vertical:h-4 data-vertical:self-auto"
        />
        <Logo className="h-6 dark:**:fill-white" />
        <div className="ms-auto flex items-center gap-2">
          
            <Button variant="neutral" size="sm" >
              <IconQuestionMark  />
              Help
            </Button>
            <Select defaultValue="en" onValueChange={(value) => {
              setLanguage(value as string)
            }}>
              <SelectTrigger
                aria-label="Select language"
                size="sm"
                id={`language-${id}`}
              >
              <IconLanguage  />
              <SelectValue placeholder="Language" >{languages.find(lang => lang.value === language)?.label}</SelectValue>
            </SelectTrigger>
            <SelectContent >
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  <span className="flex items-center gap-2">
                    <span className="truncate">{lang.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
            <ThemeToggle />
          
        </div>
      </div>
    </header>
  )
}
