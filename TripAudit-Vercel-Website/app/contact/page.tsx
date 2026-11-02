import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Contact TourAudit",
  description: "Contact TourAudit with product questions, pilot feedback or partnership enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact TourAudit", description: "Get in touch with TourAudit about the product, pilot feedback or partnerships.", url: "/contact" },
};

export default function ContactPage() {
  return <ContentPage eyebrow="Contact" title="Talk to TourAudit." introduction="Contact the TourAudit team about product questions, pilot feedback, an incorrect or unclear finding, or a relevant business enquiry.">
    <section><h2>Product and pilot feedback</h2><p>Tell us what was useful, what was unclear and which itinerary-review situations deserve better coverage. Practical feedback from travel professionals helps improve the relevance and language of future reviews.</p></section>
    <section><h2>Business enquiries</h2><p>Travel businesses interested in the TourAudit pilot, product collaboration or a professional discussion can contact the team by email.</p></section>
    <section className="contact-card"><h2>Email</h2><p><a className="text-link" href="mailto:hello@touraudit.com">hello@touraudit.com</a></p><p>Please do not include confidential traveller information, passport details, payment information or live itinerary content in an initial enquiry.</p></section>
  </ContentPage>;
}
