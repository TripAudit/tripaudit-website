import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "How TourAudit Works | TourAudit",
  description: "See how TourAudit adds a structured itinerary review to a travel consultant’s pre-send workflow.",
  alternates: { canonical: "/how-it-works" },
  openGraph: { title: "How TourAudit Works | TourAudit", description: "A clear, consultant-led workflow for reviewing an itinerary before it is sent.", url: "/how-it-works" },
};

export default function HowItWorksPage() {
  return <ContentPage eyebrow="How it works" title="Review before you send." introduction="TourAudit adds an AI-assisted, structured second check to a travel consultant’s existing pre-send workflow. The consultant remains responsible for interpreting the findings and approving the final itinerary.">
    <section><h2>What should I submit?</h2><p>Paste the client-facing itinerary text you want to review. Include the dates, destinations, accommodation, transport, activities, service descriptions and traveller context already available to you. Better context generally allows a more useful review.</p><p>TourAudit currently accepts pasted text only. Remove unnecessary names and identifying details, and never include passport numbers, payment-card information, medical information or other highly sensitive personal data.</p></section>
    <section><h2>1. Paste the itinerary</h2><p>Add the itinerary in the same form you are preparing to send or review internally. It can be a concise trip outline, a client-facing programme or a more detailed operational plan.</p></section>
    <section><h2>2. Run the review</h2><p>TourAudit examines the information supplied for potential concerns involving timing, destination sequence, transfers, stays, inclusions, missing details, service clarity and traveller practicality.</p></section>
    <section><h2>3. Read the findings</h2><p>The review presents observations for the consultant to consider. A finding may identify a possible conflict, explain why a detail matters, or ask for information needed to assess the plan properly. Missing information is shown as a limitation rather than replaced with an invented assumption.</p></section>
    <section><h2>4. Apply your judgment</h2><p>Assess every observation against your destination knowledge, supplier arrangements and the client’s circumstances. Confirm current information, make appropriate changes and send the itinerary only when you are satisfied.</p></section>
    <section><h2>What does a finding look like?</h2><p>For example, an itinerary may show an international arrival at 15:40 followed by a fixed guided activity at 17:30. TourAudit may flag the limited margin for immigration, baggage collection, transfer and hotel arrival. The consultant then decides whether the activity should be moved, made flexible or retained because additional arrangements are known.</p></section>
    <section><h2>What happens when information is incomplete?</h2><p>TourAudit can still review the text supplied, but its conclusions may be limited. It may ask for traveller ages, transport times, hotel locations, rooming, service type or inclusion details when those facts materially affect the review.</p></section>
    <aside className="principle"><h2>A support tool, not a replacement</h2><p>TourAudit does not confirm live availability, current schedules, closures, weather, strikes or supplier conditions. It supports consultant judgment; it does not replace destination knowledge, supplier confirmation or live operational verification.</p></aside>
  </ContentPage>;
}
