import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "What TourAudit Reviews | TourAudit",
  description: "Learn which itinerary gaps, conflicts and practical concerns TourAudit can help travel consultants review.",
  alternates: { canonical: "/what-touraudit-reviews" },
  openGraph: { title: "What TourAudit Reviews | TourAudit", description: "A structured second check across itinerary timing, completeness, stays and practicality.", url: "/what-touraudit-reviews" },
};

export default function ReviewsPage() {
  return <ContentPage eyebrow="What it reviews" title="The small details that shape the whole trip." introduction="TourAudit reviews the itinerary text supplied and identifies potential gaps, conflicts and practical concerns for the consultant to assess before the plan reaches the traveller.">
    <div className="content-grid">
      <section><h2>Timing and sequence</h2><p>TourAudit considers whether the stated timings and order form a workable journey. Examples include an overloaded arrival day, a fixed activity too close to a transfer, a short connection, repeated early starts or a departure plan with insufficient margin.</p></section>
      <section><h2>Completeness and consistency</h2><p>The review looks for material information that is missing, unclear or contradictory: traveller ages, flight or train details, room configuration, meal plans, transfers, inclusions, day counts, city names and services that appear in one section but not another.</p></section>
      <section><h2>Hotels and location</h2><p>TourAudit checks stay dates, night allocation, room information and the relationship between the hotel and the programme. A hotel can be valid yet still create unnecessary daily travel, difficult luggage access or problems for early and late services.</p></section>
      <section><h2>Routing and movement</h2><p>The review considers destination order, intercity sectors, transfer-day workload, luggage movement and whether the final stay supports the departure point. It may highlight backtracking, missing transport or a stay too short for the activities promised.</p></section>
      <section><h2>Service and inclusion clarity</h2><p>TourAudit looks for wording that could create different expectations: private versus shared transport, driver versus guide, included entrances, self-guided time, meeting points, pickup arrangements and services that remain optional or unconfirmed.</p></section>
      <section><h2>Traveller practicality</h2><p>A plan may be technically possible but still demanding. TourAudit considers the pace described, repeated fixed commitments, walking or luggage demands and known traveller context such as children’s ages or mobility information.</p></section>
    </div>
    <section><h2>What TourAudit does not independently verify</h2><p>TourAudit does not independently confirm live schedules, availability, ticket inventory, attraction closures, weather, strikes, supplier conditions or every destination-specific fact. These can change after an itinerary is prepared and must be checked through appropriate current sources.</p></section>
    <section><h2>Can every possible concern be detected?</h2><p>No. A review is based on the text supplied and is not guaranteed to be complete or error-free. Relevant context may be absent, and a finding may not apply when the consultant knows an arrangement that is not written in the itinerary.</p></section>
    <aside className="principle"><h2>What remains with the consultant</h2><p>The consultant decides which observations matter, confirms current operating information and approves the final plan. TourAudit is designed to make that professional review more structured and consistent—not to replace it.</p></aside>
  </ContentPage>;
}
