import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/books", "/logs/"],
        disallow: [
          "/login",
          "/login/",
          "/register",
          "/write",
          "/profile",
          "/my-reviews",
          "/api/",
        ],
      },
      {
        userAgent: "Yeti",
        allow: ["/", "/books", "/logs/"],
        disallow: [
          "/login",
          "/login/",
          "/register",
          "/write",
          "/profile",
          "/my-reviews",
          "/api/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
