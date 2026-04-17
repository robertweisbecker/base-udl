import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex min-h-svh p-6 bg-background">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-lg leading-loose">
        <div>
          <h1 className="font-semibold text-2xl">Base-UDL</h1>
          <p className="text-muted-foreground">Jump to demo:</p>
        </div>
        <Link href="/login" className="underline flex decoration-1 underline-offset-4 decoration-primary">Login</Link>
        <Link href="/signup" className="underline flex decoration-1 underline-offset-4 decoration-primary">Signup</Link>
        <Link href="/dashboard" className="underline flex decoration-1 underline-offset-4 decoration-primary">Dashboard</Link>
        
        <code className="bg-current/5 px-1 py-px border rounded text-muted-foreground font-mono text-xs">
          (Press <kbd>d</kbd> to toggle dark mode)
        </code>
      </div>
    </main>
  )
}
