"use server";

import { getAuthenticatedClient } from "@/lib/insforge-server";
import { nanoid } from "nanoid";

export async function addWebsite(domain: string) {
  const { insforge, user } = await getAuthenticatedClient();

  if (!user) return { error: "Unauthorized" };

  if (!domain) return { error: "Domain is required" };

  const userId = user.id;

  //Check if domain exist
  const { data: existingData } = await insforge.database
    .from("websites")
    .select("id")
    .eq("domain", domain)
    .single();

  if (existingData) return { error: "Domain already registered" };

  const siteId = `P-${nanoid().toUpperCase()}`;

  const { data: website, error } = await insforge.database
    .from("websites")
    .insert([
      {
        domain,
        site_id: siteId,
        user_id: userId,
      },
    ])
    .select()
    .single();

  if (error) return { error: "Failed to add website" };

  return { success: true, website };
}

export async function getWebsites() {
  const { insforge, user } = await getAuthenticatedClient();
  if (!user) return { error: "Unauthorized" };

  const { data: websites, error } = await insforge.database
    .from("websites")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) return { error: "Failed to fetch websites" };

  return { websites };
}
