"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth, UserButton } from "@insforge/nextjs";

export function Header() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="w-full z-50 pt-3 pb-7 bg-background">
      <div className="flex h-14 items-center justify-end gap-2 w-full">
        <ThemeToggle />
        {isSignedIn && isLoaded && <UserButton mode="simple" />}
      </div>
    </header>
  );
}

export default Header;
