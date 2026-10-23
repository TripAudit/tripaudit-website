import type { Article } from "./article-data";

export function isArticlePublished(article: Article, now = new Date()): boolean {
  return !article.publishDate || new Date(article.publishDate).getTime() <= now.getTime();
}

export function formatPublishDate(value?: string): string | null {
  if (!value) return null;
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(value));
}
