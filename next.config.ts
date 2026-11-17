import type { NextConfig } from "next";

// The site is a fully static export (out/), served by a Cloudflare Worker's static assets (see wrangler.jsonc).
// Redirects and feed rewrites live in public/_redirects, because Next.js redirects()/rewrites() need a Node server.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
