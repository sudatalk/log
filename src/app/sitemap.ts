import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";
import { fetchScheduleContentIdsForSeo } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const contentIds = await fetchScheduleContentIdsForSeo();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/books`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const logRoutes: MetadataRoute.Sitemap = contentIds.map((contentId) => ({
    url: `${SITE_URL}/logs/${contentId}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...logRoutes];
}
