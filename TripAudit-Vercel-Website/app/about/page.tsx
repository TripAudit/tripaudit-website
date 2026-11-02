import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "About TourAudit | Itinerary Quality Control",
  description: "TourAudit is a structured itinerary quality-control tool designed to support travel consultants before they send a trip to a client.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About TourAudit", description: "A structured second check designed to support travel consultants and their professional judgment.", url: "/about" },
};

export default function AboutPage() {
  return <ContentPage eyebrow="About TourAudit" title="A second set of eyes for itinerary review." introduction="TourAudit helps travel professionals examine an itinerary before it reaches the client. It brings timing, routing, service details and practical concerns into one focused review.">
    <section><h2>Why TourAudit exists</h2><p>An itinerary can contain valid flights, confirmed hotels and correct dates and still be difficult for the traveller. The first day may be too full, a transfer may not leave enough margin, or an important inclusion may be unclear. These issues often sit between individual bookings, which makes them easy to miss when a consultant is working quickly.</p></section>
    <section><h2>More than proofreading</h2><p>Proofreading looks at language and presentation. TourAudit looks at how the trip fits together. It asks whether the arrival day is realistic, whether transfers and activities connect sensibly, whether rooming and inclusions are clear, and whether the proposed pace suits the travellers described.</p></section>
    <section><h2>The consultant remains in control</h2><p>TourAudit presents possible concerns and explains why they may matter. The consultant decides whether a finding is relevant, checks it against current supplier information and chooses what to change. The service does not edit the itinerary or make a professional decision on the consultant’s behalf.</p></section>
    <section><h2>What the review can know</h2><p>The review is based on the text submitted. It cannot see private supplier discussions, arrangements that have not been written down or destination conditions that have changed since the itinerary was prepared. Local knowledge and current operational checks therefore remain essential.</p></section>
    <section><h2>Current pilot</h2><p>TourAudit is being tested with travel professionals through a controlled public pilot. Their feedback helps us improve the relevance and clarity of the findings while we keep the product’s role deliberately limited.</p></section>
  </ContentPage>;
}
