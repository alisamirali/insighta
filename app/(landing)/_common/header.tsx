"use client";

import { InsightaLogo } from "@/components/insighta-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@insforge/nextjs";
import Link from "next/link";

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        <Link href="/">
          <InsightaLogo />
        </Link>

        <nav className="flex-1 hidden md:flex items-center justify-center gap-6 pl-5">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Why Insighta?
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <Button variant="secondary">Login</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="default">Sign Up</Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
}
