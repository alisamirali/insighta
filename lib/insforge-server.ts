import { auth } from "@insforge/nextjs/server";
import { createClient } from "@insforge/sdk";

export async function getAuthenticatedClient() {
  const { user } = await auth();

  const insforge = createClient({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
  });

  return { insforge, user };
}
