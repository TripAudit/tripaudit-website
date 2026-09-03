import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "About TourAudit | Itinerary Quality Control",
  description: "TourAudit is a structured itinerary quality-control tool designed to support travel consultants before they send a trip to a client.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About TourAudit", description: "A structured second check designed to support travel consultants and their professional judgment.", url: "/about" },
};

export default function AboutPage() {
  return <ContentPage eyebrow="About TourAudit" title="A second set of eyes for itinerary review." introduction="TourAudit is built for travel professionals who want a more consistent final review before an itinerary reaches the client.">
    <section><h2>Why it exists</h2><p>A trip can be correct on paper and still contain unclear transfers, missing information, difficult timing or a demanding sequence. TourAudit helps bring those potential concerns into one structured review.</p></section>
    <section><h2>Consultant-led by design</h2><p>The consultant decides what matters, what needs to change and what is appropriate for the traveller. TourAudit provides observations to consider; it does not make the final professional decision.</p></section>
    <section><h2>A controlled scope</h2><p>TourAudit works from the itinerary information supplied. Destination knowledge, current supplier information and live operational checks remain essential.</p></section>
  </ContentPage>;
}
