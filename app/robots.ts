import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bytespider", "CCBot", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: "https://megagis.ro/sitemap.xml",
  };
}
