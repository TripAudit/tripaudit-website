import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Product Updates | TourAudit",
  description: "Product updates from TourAudit, including changes to the itinerary-review pilot and the consultant review experience.",
  alternates: { canonical: "/updates" },
  openGraph: {
    type: "website",
    title: "Product Updates | TourAudit",
    description: "Follow practical updates to TourAudit's itinerary-review pilot and consultant experience.",
    url: "/updates",
  },
};

const updates = [
  {
    date: "10 November 2026",
    title: "TourAudit’s free pilot introduces a structured second check for travel itineraries",
    description: "Travel professionals can submit an itinerary for an advisory operational review before sending it to a client.",
    href: "/updates/free-pilot-itinerary-review",
  },
];

export default function UpdatesPage() {
  return (
    <main className="insights-page">
      <SiteHeader />
      <section className="insights-hero">
        <p className="eyebrow">Product updates</p>
        <h1>What is changing at TourAudit.</h1>
        <p>Clear notes on additions and improvements to TourAudit’s itinerary-review workflow.</p>
      </section>
      <section className="article-grid insights-list">
        <h2 className="insights-list-title">Latest updates</h2>
        {updates.map((update, index) => (
          <article key={update.href}>
            <div className="article-no">{String(index + 1).padStart(2, "0")}</div>
            <p>Product update · {update.date}</p>
            <h2>{update.title}</h2>
            <p className="update-summary">{update.description}</p>
            <Link href={update.href}>Read update →</Link>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
