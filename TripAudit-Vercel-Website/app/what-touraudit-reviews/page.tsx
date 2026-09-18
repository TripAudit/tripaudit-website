import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "What TourAudit Reviews | TourAudit",
  description: "Learn which itinerary gaps, conflicts and practical concerns TourAudit can help travel consultants review.",
  alternates: { canonical: "/what-touraudit-reviews" },
  openGraph: { title: "What TourAudit Reviews | TourAudit", description: "A structured second check across itinerary timing, completeness, stays and practicality.", url: "/what-touraudit-reviews" },
};

export default function ReviewsPage() {
  return <ContentPage eyebrow="What it reviews" title="The small details that shape the whole trip." introduction="TourAudit reviews the information supplied in an itinerary and identifies potential concerns for the consultant to assess.">
    <div className="content-grid">
      <section><h2>Timing and sequence</h2><p>Arrival days, transfers, connections, pacing and the order of the journey.</p></section>
      <section><h2>Completeness</h2><p>Traveller information, inclusions, arrangements and details that may need clarification.</p></section>
      <section><h2>Hotels and location</h2><p>Stay dates, night counts and whether the stated location supports the daily plan.</p></section>
      <section><h2>Practicality</h2><p>Plans that may be technically possible but demanding, inconvenient or unrealistic for the trip as described.</p></section>
    </div>
    <aside className="principle"><h2>What remains with the consultant</h2><p>TourAudit does not provide guaranteed or exhaustive detection. Current schedules, availability, closures, weather, strikes, supplier conditions and destination-specific facts still require live verification.</p></aside>
  </ContentPage>;
}
