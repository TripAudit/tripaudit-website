import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "What TourAudit Reviews | TourAudit",
  description: "Learn which itinerary gaps, conflicts and practical concerns TourAudit can help travel consultants review.",
  alternates: { canonical: "/what-touraudit-reviews" },
  openGraph: { title: "What TourAudit Reviews | TourAudit", description: "A structured second check across itinerary timing, completeness, stays and practicality.", url: "/what-touraudit-reviews" },
};

export default function ReviewsPage() {
  return <ContentPage eyebrow="What it reviews" title="The small details that shape the whole trip." introduction="TourAudit examines the itinerary text for gaps, conflicts and practical concerns. It gives the consultant a focused list of points to check before the plan reaches the traveller.">
    <div className="content-grid">
      <section><h2>Timing and sequence</h2><p>TourAudit considers whether the stated timings and order form a workable journey. Examples include an overloaded arrival day, a fixed activity too close to a transfer, a short connection, repeated early starts or a departure plan with insufficient margin.</p></section>
      <section><h2>Completeness and consistency</h2><p>The review looks for material information that is missing, unclear or contradictory: traveller ages, flight or train details, room configuration, meal plans, transfers, inclusions, day counts, city names and services that appear in one section but not another.</p></section>
      <section><h2>Hotels and location</h2><p>TourAudit checks stay dates, night allocation, room information and the relationship between the hotel and the programme. A hotel can be valid yet still create unnecessary daily travel, difficult luggage access or problems for early and late services.</p></section>
      <section><h2>Routing and movement</h2><p>The review considers destination order, intercity sectors, transfer-day workload, luggage movement and whether the final stay supports the departure point. It may highlight backtracking, missing transport or a stay too short for the activities promised.</p></section>
      <section><h2>Service and inclusion clarity</h2><p>TourAudit looks for wording that could create different expectations: private versus shared transport, driver versus guide, included entrances, self-guided time, meeting points, pickup arrangements and services that remain optional or unconfirmed.</p></section>
      <section><h2>Traveller practicality</h2><p>A plan may be possible on paper and still be tiring or inconvenient. TourAudit considers the stated pace, repeated fixed commitments, walking or luggage demands and relevant traveller details such as children’s ages or mobility needs.</p></section>
    </div>
    <section><h2>What TourAudit does not independently verify</h2><p>TourAudit does not independently confirm live schedules, availability, ticket inventory, attraction closures, weather, strikes, supplier conditions or every destination-specific fact. These can change after an itinerary is prepared and must be checked through appropriate current sources.</p></section>
    <section><h2>Can every possible concern be detected?</h2><p>No. The review depends on the text submitted and may not identify every issue. A finding may also be irrelevant when the consultant knows about an arrangement that is not written in the itinerary.</p></section>
    <aside className="principle"><h2>What remains with the consultant</h2><p>The consultant decides which findings matter, confirms current operating information and approves the final plan. TourAudit supports that review; it does not replace professional judgment.</p></aside>
  </ContentPage>;
}
