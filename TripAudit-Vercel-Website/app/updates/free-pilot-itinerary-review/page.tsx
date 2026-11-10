import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const title = "TourAudit’s free pilot introduces a structured second check for travel itineraries";
const description = "TourAudit’s free pilot gives travel professionals an advisory operational review of an itinerary before it is sent to a client.";
const canonicalUrl = "https://touraudit.com/updates/free-pilot-itinerary-review";

export const metadata: Metadata = {
  title: "Free Pilot for Itinerary Review | TourAudit",
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    title,
    description,
    url: canonicalUrl,
    publishedTime: "2026-11-10",
    authors: ["TourAudit"],
  },
};

export default function FreePilotItineraryReviewUpdate() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description,
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    mainEntityOfPage: canonicalUrl,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      "@id": "https://touraudit.com/#organization",
      name: "TourAudit",
      url: "https://touraudit.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://touraudit.com/#organization",
      name: "TourAudit",
      url: "https://touraudit.com",
      logo: {
        "@type": "ImageObject",
        url: "https://touraudit.com/touraudit-logo-horizontal.svg",
      },
    },
  };

  return (
    <main className="article-page">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article>
        <header className="article-hero">
          <Link className="back-link" href="/updates">← All product updates</Link>
          <p className="eyebrow">Product update · 10 November 2026</p>
          <h1>{title}</h1>
          <p className="article-deck">A practical pre-send review can help travel professionals pause over operational details that deserve another look.</p>
        </header>

        <div className="article-body">
          <p className="article-intro">TourAudit’s free pilot is now available to travel professionals who want a structured second check of an itinerary before it reaches the client. A consultant can submit the client-facing itinerary text and receive an advisory review focused on how the proposed journey may work in practice.</p>

          <section>
            <h2>What the free pilot is designed to do</h2>
            <p>An itinerary may contain the correct destinations, dates and services while still leaving operational questions unresolved. An arrival-day activity might allow little time for immigration, baggage collection and the transfer to the hotel. A connection may look comfortable until reporting time or luggage movement is considered. Important traveller or service information may also be absent from the version being reviewed.</p>
            <p>TourAudit provides a consistent place to examine concerns like these. It reviews the information supplied, highlights observations that may merit attention and explains why a point could matter. The purpose is not to rewrite the consultant’s work or make the final decision. It is to add a deliberate review stage while changes can still be made clearly and calmly.</p>
          </section>

          <section>
            <h2>Who the pilot is for</h2>
            <p>The pilot is intended for travel consultants, independent itinerary planners, travel agencies, destination management companies and tour operators. It is particularly relevant when a journey includes several destinations, transfers, transport connections, timed activities or arrangements from different suppliers.</p>
            <p>It can also support a small team that wants a repeatable checking step when a colleague is not available to review every proposal. TourAudit does not require a new itinerary-writing process: the professional prepares the itinerary as usual, submits the available text and evaluates the resulting findings before sending the final version.</p>
            <p>For a closer look at the workflow, see <Link href="/how-it-works">how TourAudit works</Link>. The <Link href="/what-touraudit-reviews">review coverage overview</Link> explains the types of itinerary details that may be considered.</p>
          </section>

          <section>
            <h2>How the second check fits into professional work</h2>
            <p>The most useful time to run a review is after the main itinerary has been assembled but before it is treated as client-ready. The consultant should include enough context for an operational reading, such as dates, approximate timings, transport sectors, hotel stays, planned activities and relevant traveller information. Unnecessary personal information should be removed.</p>
            <p>When the review is returned, each finding should be assessed against the booking stage, destination knowledge and the client’s circumstances. A concern may lead to an itinerary change, a clearer description, a question for the supplier or no action at all. The consultant remains responsible for deciding what is relevant.</p>
          </section>

          <section>
            <h2>Professional judgment remains essential</h2>
            <p>TourAudit’s findings are advisory. The service does not guarantee that an itinerary is accurate, complete or free of operational issues. It does not replace destination expertise, supplier communication, current schedule checks or the consultant’s understanding of the traveller.</p>
            <p>The review is based on the information submitted. Missing context can limit what it can usefully assess, and a highlighted point may be acceptable once information outside the itinerary is considered. Travel professionals should confirm live operating details through authoritative sources and apply their own judgment before sending or operating the itinerary.</p>
            <p>This limitation is deliberate: TourAudit is a second check for the professional, not a substitute for the professional. More detail on this distinction is available in <Link href="/why-touraudit">why TourAudit complements existing tools and expertise</Link>.</p>
          </section>

          <aside className="article-cta">
            <p className="eyebrow">Controlled public pilot</p>
            <h2>Review an itinerary before you send it.</h2>
            <p>Submit itinerary text for an advisory operational review, then evaluate each finding using your destination knowledge and professional judgment.</p>
            <a className="button" href="https://app.touraudit.com">Open TourAudit <span aria-hidden="true">→</span></a>
          </aside>
        </div>
      </article>
      <SiteFooter className="article-footer" />
    </main>
  );
}
