import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { directReviewUpdate, isUpdatePublished } from "../update-data";

export const dynamic = "force-dynamic";

const canonicalUrl = "https://www.touraudit.com/updates/direct-ai-itinerary-review";
const metaDescription = "TourAudit now reviews itinerary text directly to identify tight connections, transfer gaps, room discrepancies and demanding sightseeing schedules.";

export function generateMetadata(): Metadata {
  if (!isUpdatePublished(directReviewUpdate)) notFound();

  return {
    title: "Direct AI Itinerary Review Process | TourAudit",
    description: metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      title: directReviewUpdate.title,
      description: metaDescription,
      url: canonicalUrl,
      publishedTime: directReviewUpdate.publishDate,
      authors: ["TourAudit"],
    },
  };
}

export default function DirectAiItineraryReviewUpdate() {
  if (!isUpdatePublished(directReviewUpdate)) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: directReviewUpdate.title,
    description: metaDescription,
    datePublished: directReviewUpdate.publishDate,
    dateModified: directReviewUpdate.publishDate,
    mainEntityOfPage: canonicalUrl,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      "@id": "https://www.touraudit.com/#organization",
      name: "TourAudit",
      url: "https://www.touraudit.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.touraudit.com/#organization",
      name: "TourAudit",
      url: "https://www.touraudit.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.touraudit.com/touraudit-logo-horizontal.svg",
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
          <p className="eyebrow">Product update · 17 November 2026</p>
          <h1>{directReviewUpdate.title}</h1>
          <p className="article-deck">Submitted itinerary text now moves directly into TourAudit’s AI-assisted operational review, with fewer processing stages between submission and findings.</p>
        </header>

        <div className="article-body">
          <p className="article-intro">TourAudit now reviews the itinerary text supplied by a travel professional directly. The previous separate extraction stage has been removed, simplifying the process while keeping the review focused on practical arrangements that may deserve closer attention before an itinerary reaches the traveller.</p>

          <section>
            <h2>What does TourAudit review in a travel itinerary?</h2>
            <p>TourAudit examines the submitted text for operational concerns across the journey. These may include tight flight, train or ground-transport connections; missing or unclear transfers; differences between room allocations and traveller numbers; demanding sightseeing schedules; inconsistencies between itinerary sections; and information that may be needed to understand how an arrangement will operate.</p>
            <p>For example, a connection can appear possible until transfer time, luggage handling and reporting requirements are considered together. A sightseeing programme may fit on paper but leave limited allowance for travel between activities. The <Link href="/what-touraudit-reviews">TourAudit review coverage</Link> explains the main areas considered in more detail.</p>
            <p>Not every concern will apply to every itinerary, and the review does not guarantee that all possible issues will be detected. Its usefulness depends partly on the completeness and clarity of the information submitted.</p>
          </section>

          <section>
            <h2>Why was the review process changed?</h2>
            <p>The earlier process first converted itinerary text into a separate extracted representation before the operational review began. TourAudit now assesses the submitted itinerary text directly, removing that intermediate stage and reducing the number of processing steps.</p>
            <p>This creates a more direct review path and keeps the source itinerary available as a complete document during the assessment. The change does not alter the basic consultant workflow: submit the relevant itinerary text, read the observations and decide what requires clarification or revision. See <Link href="/how-it-works">how TourAudit works</Link> for the current process.</p>
          </section>

          <section>
            <h2>Does TourAudit replace professional itinerary checking?</h2>
            <p>No. TourAudit’s findings are advisory. Travel consultants should assess each observation using their destination knowledge, the traveller’s requirements and current information from airlines, hotels, transport providers, attractions and other authoritative supplier sources.</p>
            <p>TourAudit does not independently verify live schedules, availability, closures or supplier commitments. A highlighted issue may require a correction, a supplier check, clearer wording or no change once additional context is considered. Professional judgment remains responsible for the final itinerary. The distinction is explained further on <Link href="/why-touraudit">Why TourAudit?</Link></p>
          </section>

          <section>
            <h2>Have TourAudit’s privacy or security arrangements changed?</h2>
            <p>No. Removing the extraction stage does not change TourAudit’s existing privacy choices or security controls. Travel professionals should continue to remove traveller names, contact details, booking references and other unnecessary personal or confidential information before submitting an itinerary.</p>
            <p>The change concerns how the itinerary review is performed. It does not expand the information users are asked to provide or remove the controls already applied to the service.</p>
          </section>

          <aside className="article-cta">
            <p className="eyebrow">Review before you send</p>
            <h2>Add an operational check to your itinerary workflow.</h2>
            <p>Submit the relevant itinerary text, review the advisory findings and apply your destination knowledge and professional judgment.</p>
            <a className="button" href="https://app.touraudit.com/">Review an itinerary with TourAudit <span aria-hidden="true">→</span></a>
          </aside>
        </div>
      </article>
      <SiteFooter className="article-footer" />
    </main>
  );
}
