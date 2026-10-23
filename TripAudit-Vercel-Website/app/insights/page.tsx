import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./article-data";
import { formatPublishDate, isArticlePublished } from "./publication";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Travel Itinerary Review Insights | TourAudit",
  description: "Practical itinerary quality-control guidance for travel consultants.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Travel Itinerary Review Insights | TourAudit",
    description: "Practical itinerary quality-control guidance for travel consultants.",
    url: "/insights",
  },
};

const originalOrder = [
  "how-to-review-a-travel-itinerary-before-sending",
  "10-common-itinerary-problems",
  "why-correct-itineraries-can-be-impractical",
];

export default function Insights() {
  const scheduled = Object.entries(articles)
    .filter(([slug, article]) => !originalOrder.includes(slug) && isArticlePublished(article))
    .sort(([, a], [, b]) => new Date(b.publishDate ?? 0).getTime() - new Date(a.publishDate ?? 0).getTime());
  const visible = [...scheduled, ...originalOrder.map((slug) => [slug, articles[slug]] as const)];

  return <main className="insights-page">
    <SiteHeader />
    <section className="insights-hero">
      <p className="eyebrow">From the TourAudit desk</p>
      <h1>Better itinerary thinking.</h1>
      <p>Practical guidance for reviewing trip flow, timings, hotels, transfers and client expectations.</p>
    </section>
    <section className="article-grid insights-list">
      {visible.map(([slug, article], index) => {
        const published = formatPublishDate(article.publishDate);
        return <article key={slug}>
          <div className="article-no">{String(index + 1).padStart(2, "0")}</div>
          <p>{article.category} · {article.readTime}{published ? ` · ${published}` : ""}</p>
          <h2>{article.title}</h2>
          <Link href={`/insights/${slug}`}>Read article →</Link>
        </article>;
      })}
    </section>
    <SiteFooter />
  </main>;
}
