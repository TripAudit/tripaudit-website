import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy Information | TourAudit",
  description: "Interim privacy information for the TourAudit controlled public pilot.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Information | TourAudit",
    description: "Interim privacy information for the TourAudit controlled public pilot.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Controlled public pilot"
      title="Privacy Information"
      introduction="TourAudit is currently operating as a controlled public pilot. Our full Privacy Policy and detailed data-handling disclosures are being finalized."
    >
      <section>
        <h2>During the pilot</h2>
        <ul>
          <li>Submit itinerary text only.</li>
          <li>Do not submit passport numbers, payment-card details, medical information or other highly sensitive personal information.</li>
          <li>Remove unnecessary traveller-identifying information before submitting an itinerary.</li>
          <li>TourAudit uses submitted itinerary information only to provide and improve the itinerary-review service during testing.</li>
        </ul>
      </section>
      <section>
        <h2>Website analytics</h2>
        <p>TourAudit may use Google Analytics on the public marketing website to understand page visits, traffic sources and general website use. This marketing-site integration is separate from the itinerary-review application and is not used to send submitted itinerary text to Google Analytics.</p>
      </section>
      <aside className="principle" aria-label="Interim privacy notice">
        <p><strong>This interim page will be replaced by the complete Privacy Policy before broader public use.</strong></p>
      </aside>
      <p>Last updated: November 2026</p>
    </ContentPage>
  );
}
