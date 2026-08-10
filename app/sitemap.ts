import type { MetadataRoute } from "next";

const baseUrl = "https://megagis.ro";

const locales = ["ro", "en", "de"] as const;

const staticRoutes = [
  "",
  "/servicii",
  "/proiecte",
  "/despre-noi",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

const serviceSlugs = [
  "cadastru",
  "topografie",
  "gis",
  "urbanism",
  "consultanta",
  "cadastru-sistematic",
  "topografie-geodezie",
  "gis-cartografie",
  "registrul-spatiilor-verzi",
  "consultanta-tehnica",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];
  const currentDate = new Date();

  const getRouteMeta = (path: string) => {
    if (path === "") return { priority: 1.0, changeFrequency: "daily" as const };
    if (path === "/servicii" || path === "/proiecte")
      return { priority: 0.9, changeFrequency: "weekly" as const };
    if (path.startsWith("/servicii/"))
      return { priority: 0.8, changeFrequency: "weekly" as const };
    if (
      path === "/despre-noi" ||
      path === "/contact" ||
      path === "/faq"
    )
      return { priority: 0.8, changeFrequency: "monthly" as const };
    return { priority: 0.5, changeFrequency: "monthly" as const };
  };

  // Static routes for both languages
  for (const route of staticRoutes) {
    const { priority, changeFrequency } = getRouteMeta(route);
    for (const lang of locales) {
      routes.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            "ro-RO": `${baseUrl}/ro${route}`,
            "en-US": `${baseUrl}/en${route}`,
            "de-DE": `${baseUrl}/de${route}`,
            "x-default": `${baseUrl}/ro${route}`,
          },
        },
      });
    }
  }

  // Dynamic service subpage routes
  for (const slug of serviceSlugs) {
    const servicePath = `/servicii/${slug}`;
    const { priority, changeFrequency } = getRouteMeta(servicePath);
    for (const lang of locales) {
      routes.push({
        url: `${baseUrl}/${lang}${servicePath}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            "ro-RO": `${baseUrl}/ro${servicePath}`,
            "en-US": `${baseUrl}/en${servicePath}`,
            "de-DE": `${baseUrl}/de${servicePath}`,
            "x-default": `${baseUrl}/ro${servicePath}`,
          },
        },
      });
    }
  }

  return routes;
}
