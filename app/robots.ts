import { metaData } from "./lib/config";

// Static export: rendered once at build time.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  };
}
