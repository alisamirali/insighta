"use client";

import { insforge } from "@/lib/insforge-client";
import { InitialAuthState, InsforgeBrowserProvider } from "@insforge/nextjs";

export function InsforgeProvider({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: InitialAuthState;
}) {
  return (
    <InsforgeBrowserProvider
      client={insforge}
      afterSignInUrl="/dashboard"
      initialState={initialState}
    >
      {children}
    </InsforgeBrowserProvider>
  );
}
