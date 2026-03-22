import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Returns the access token from the HTTP-only session cookie.
// Used by the client-side SDK to restore its in-memory token after page load.
export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("insforge-session")?.value ?? null;
  const userRaw = cookieStore.get("insforge-user")?.value ?? null;

  if (!token) {
    return NextResponse.json({ token: null, user: null });
  }

  let user = null;
  try {
    user = userRaw ? JSON.parse(userRaw) : null;
  } catch {
    // ignore
  }

  return NextResponse.json({ token, user });
}
