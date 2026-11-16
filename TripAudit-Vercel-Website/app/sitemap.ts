import type { MetadataRoute } from "next";
import { getPublishedUpdates } from "./updates/update-data";
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
  "/subscription-refund-policy",
  "/insights",
  "/updates",
];


export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map((route) => ({ url: `https://www.touraudit.com${route}` }));
  const insightPages = Object.entries(articles)
    .filter(([, article]) => isArticlePublished(article))
    .map(([slug, article]) => ({
      url: `https://www.touraudit.com/insights/${slug}`,
      ...(article.publishDate ? { lastModified: new Date(article.publishDate) } : {}),
    }));

  const updates = getPublishedUpdates().map((update) => ({
    url: `https://www.touraudit.com${update.href}`,
    lastModified: new Date(update.publishDate),
  }));

  return [...pages, ...updates, ...insightPages];
}
