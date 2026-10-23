import type { MetadataRoute } from "next";
import { articles } from "./insights/article-data";
import { isArticlePublished } from "./insights/publication";

export const dynamic = "force-dynamic";

const routes = [
  "",
  "/how-it-works",
  "/what-touraudit-reviews",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/insights",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map((route) => ({ url: `https://touraudit.com${route}` }));
  const insightPages = Object.entries(articles)
    .filter(([, article]) => isArticlePublished(article))
    .map(([slug, article]) => ({
      url: `https://touraudit.com/insights/${slug}`,
      ...(article.publishDate ? { lastModified: new Date(article.publishDate) } : {}),
    }));

  return [...pages, ...insightPages];
}
