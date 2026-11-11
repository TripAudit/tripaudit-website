import type { MetadataRoute } from "next";
import { articles } from "./insights/article-data";
import { isArticlePublished } from "./insights/publication";

export const dynamic = "force-dynamic";

const routes = [
  "",
  "/how-it-works",
  "/what-touraudit-reviews",
  "/why-touraudit",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/insights",
  "/updates",
];

const updatePages = [
  {
    route: "/updates/free-pilot-itinerary-review",
    published: "2026-11-10",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map((route) => ({ url: `https://www.touraudit.com${route}` }));
  const insightPages = Object.entries(articles)
    .filter(([, article]) => isArticlePublished(article))
    .map(([slug, article]) => ({
      url: `https://www.touraudit.com/insights/${slug}`,
      ...(article.publishDate ? { lastModified: new Date(article.publishDate) } : {}),
    }));

  const updates = updatePages.map((update) => ({
    url: `https://www.touraudit.com${update.route}`,
    lastModified: new Date(update.published),
  }));

  return [...pages, ...updates, ...insightPages];
}
