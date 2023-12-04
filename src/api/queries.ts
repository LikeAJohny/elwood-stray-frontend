import type { Schema } from "@/types/schemas.ts";
import { sanityClient } from "@/api/client.ts";

export async function loadSchema<T>(id: string): Promise<Schema<T>> {
  const query = `*[_type == '${id}']`;
  const schema = await sanityClient.fetch<Schema<T>[]>(query);

  return schema[0];
}
