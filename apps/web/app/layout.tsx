import { Geist, Geist_Mono, Figtree } from "next/font/google"
import { Agentation } from "agentation"
import { DialRoot } from "dialkit"

import "@workspace/ui/globals.css"
import "dialkit/styles.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { TooltipProvider } from "@workspace/ui/components/tooltip"

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", figtree.variable)}
    >
      <body className="bg-sidebar min-h-screen text-foreground">
        <TooltipProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <DialRoot />
        </TooltipProvider>
      </body>
      {process.env.NODE_ENV === "development" && <Agentation />}
    </html>
  )
}
