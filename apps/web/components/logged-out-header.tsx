import Link from "next/link";

import { Logo } from "@/components/logo";

export default function LoggedOutHeader() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Logo className="h-8" />
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/login" className="text-foreground hover:text-primary transition-colors">
            Sign in
          </Link>
          <Link href="/signup" className="text-foreground hover:text-primary transition-colors">
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
