import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = RESUME_DATA.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
