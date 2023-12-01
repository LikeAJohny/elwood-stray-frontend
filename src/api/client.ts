import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "5ypa2irl",
    dataset: "production",
    apiVersion: "2023-10-16",
    useCdn: false,
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
