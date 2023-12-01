import { sanityClient } from "./client.ts";
import type { Sections } from "@/types/sections.ts";

export async function getSections(): Promise<Sections> {
  const query = `*`;

  return await sanityClient.fetch(query);
}
