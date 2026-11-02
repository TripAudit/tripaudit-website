import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "How TourAudit Works | TourAudit",
  description: "See how TourAudit adds a structured itinerary review to a travel consultant’s pre-send workflow.",
  alternates: { canonical: "/how-it-works" },
  openGraph: { title: "How TourAudit Works | TourAudit", description: "A clear, consultant-led workflow for reviewing an itinerary before it is sent.", url: "/how-it-works" },
};

export default function HowItWorksPage() {
  return <ContentPage eyebrow="How it works" title="Review before you send." introduction="TourAudit fits into the final review stage of a travel consultant’s workflow. Paste the itinerary, read the findings and decide what needs attention before sending it to the client.">
    <section><h2>What should I submit?</h2><p>Submit the itinerary text you want to check. Dates, destinations, hotels, transport, activities, service descriptions and relevant traveller details all provide useful context.</p><p>The pilot accepts pasted text only. Remove names and other identifying details that are not needed for the review. Never include passport numbers, payment-card details, medical information or other highly sensitive personal data.</p></section>
    <section><h2>1. Paste the itinerary</h2><p>Add a concise trip outline, a client-facing programme or a detailed operational itinerary. Use the version that is ready for your final internal check.</p></section>
    <section><h2>2. Run the review</h2><p>TourAudit examines the submitted plan for possible issues with timing, destination order, transfers, stays, inclusions, service descriptions and overall practicality.</p></section>
    <section><h2>3. Read the findings</h2><p>Each finding identifies a point to consider and explains why it may matter. When important information is absent, TourAudit states the limitation instead of filling the gap with an unsupported assumption.</p></section>
    <section><h2>4. Make the final decision</h2><p>Compare the findings with your destination knowledge, supplier arrangements and the client’s needs. Check current operating information, revise the plan where necessary and send it only when you are satisfied.</p></section>
    <section><h2>Example of a practical finding</h2><p>Suppose an international flight arrives at 15:40 and a fixed guided activity starts at 17:30. TourAudit may point out that immigration, baggage collection, the transfer and hotel arrival leave little margin. The consultant can then move the activity, make it flexible or retain it if other arrangements make the timing workable.</p></section>
    <section><h2>If the itinerary is incomplete</h2><p>TourAudit can still review the available text, but some conclusions may be limited. It may ask for traveller ages, transport times, hotel locations, rooming, service type or inclusion details when they affect the assessment.</p></section>
    <aside className="principle"><h2>A support tool, not a replacement</h2><p>TourAudit does not confirm live availability, current schedules, closures, weather, strikes or supplier conditions. It supports consultant judgment; it does not replace destination knowledge, supplier confirmation or live operational verification.</p></aside>
  </ContentPage>;
}
