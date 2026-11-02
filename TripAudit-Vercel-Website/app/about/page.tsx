import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "About TourAudit | Itinerary Quality Control",
  description: "TourAudit is a structured itinerary quality-control tool designed to support travel consultants before they send a trip to a client.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About TourAudit", description: "A structured second check designed to support travel consultants and their professional judgment.", url: "/about" },
};

export default function AboutPage() {
  return <ContentPage eyebrow="About TourAudit" title="A second set of eyes for itinerary review." introduction="TourAudit is an AI-assisted itinerary quality-control tool built for travel professionals who want a more consistent final review before a client-facing itinerary is sent.">
    <section><h2>What problem does TourAudit address?</h2><p>Travel itineraries combine accommodation, transport, activities, timings, inclusions and traveller expectations. Each booking can be individually correct while the complete journey remains rushed, unclear or difficult to operate. Under deadline pressure, these cross-service concerns are easy to overlook.</p></section>
    <section><h2>Why is itinerary review different from proofreading?</h2><p>Proofreading checks language, presentation and obvious inconsistencies. Itinerary quality control asks operational questions: Does the arrival day leave usable time? Do transfers and activities connect logically? Are rooming and inclusions clear? Does the routing make sense? Is the stated pace suitable for the travellers described?</p></section>
    <section><h2>Consultant-led by design</h2><p>The consultant decides what matters, what needs to change and what is appropriate for the traveller. TourAudit provides observations and context to consider; it does not make the final professional decision or modify the itinerary automatically.</p></section>
    <section><h2>A controlled scope</h2><p>TourAudit works from the itinerary text supplied. It does not have complete knowledge of private supplier discussions, unlisted arrangements or changing destination conditions. Destination expertise, current supplier information and live operational checks remain essential.</p></section>
    <section><h2>Improving through a controlled public pilot</h2><p>TourAudit is currently being tested with travel professionals. Consultant feedback helps improve the relevance, clarity and usefulness of future reviews while the product retains a deliberately limited role in the workflow.</p></section>
  </ContentPage>;
}
