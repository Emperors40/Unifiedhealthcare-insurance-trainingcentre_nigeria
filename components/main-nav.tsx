import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b border-muted">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold text-foreground">
          nTop
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/software" className="text-sm text-muted-foreground hover:text-foreground">
            Software
          </Link>
          <Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground">
            Solutions
          </Link>
          <Link href="/innovation" className="text-sm text-muted-foreground hover:text-foreground">
            Innovation
          </Link>
          <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground">
            Resources
          </Link>
          <Link href="/company" className="text-sm text-muted-foreground hover:text-foreground">
            Company
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">Sign in</Button>
        <Button>Get a demo</Button>
      </div>
    </nav>
  )
}

