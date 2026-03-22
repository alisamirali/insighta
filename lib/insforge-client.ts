/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@insforge/sdk";

export const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});

// The @insforge/react InsforgeManager calls sdk.auth.getCurrentSession()
// but the SDK doesn't expose this method. We polyfill it by reading the
// access token from our own Next.js session endpoint (which reads the
// HTTP-only cookie server-side and returns it safely).
if (typeof (insforge.auth as any).getCurrentSession === "undefined") {
  (insforge.auth as any).getCurrentSession = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const { token, user } = await res.json();
      if (token && user) {
        // Restore the token into the SDK's in-memory store
        (insforge as any).tokenManager?.setAccessToken(token);
        (insforge as any).http?.setAuthToken(token);
        return {
          data: {
            session: { accessToken: token, user },
          },
        };
      }
    } catch {
      // ignore
    }
    return { data: { session: null } };
  };
}
