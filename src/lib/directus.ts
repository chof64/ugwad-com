import { Directus } from "@directus/sdk";

const directus = new Directus(
  `https://${process.env.NEXT_PUBLIC_DIRECTUS_DOMAIN}`,
  { auth: { staticToken: process.env.DIRECTUS_API_TOKEN } }
);
export default directus;
