import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "How TourAudit Works | TourAudit",
  description: "See how TourAudit adds a structured itinerary review to a travel consultant’s pre-send workflow.",
  alternates: { canonical: "/how-it-works" },
  openGraph: { title: "How TourAudit Works | TourAudit", description: "A clear, consultant-led workflow for reviewing an itinerary before it is sent.", url: "/how-it-works" },
};

export default function HowItWorksPage() {
  return <ContentPage eyebrow="How it works" title="Review before you send." introduction="TourAudit adds a structured second check to your existing workflow without taking the final decision away from the consultant.">
    <section><h2>1. Add the itinerary</h2><p>Paste the client-facing itinerary you want to review. Include the detail available to you so the review has useful context.</p></section>
    <section><h2>2. Run the audit</h2><p>TourAudit examines the supplied itinerary for potential gaps, conflicts and practical concerns across its structure and flow.</p></section>
    <section><h2>3. Review the findings</h2><p>Read concise observations and the context behind them. Missing information is identified as a limitation rather than silently guessed.</p></section>
    <section><h2>4. Apply your judgment</h2><p>Decide which observations matter, confirm current operating information, make any appropriate changes and send when you are satisfied.</p></section>
    <aside className="principle"><h2>A support tool, not a replacement</h2><p>TourAudit supports consultant judgment. It does not replace destination knowledge, supplier confirmation or live operational verification.</p></aside>
  </ContentPage>;
}
