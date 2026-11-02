import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Contact TourAudit",
  description: "Contact TourAudit with product questions, pilot feedback or partnership enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact TourAudit", description: "Get in touch with TourAudit about the product, pilot feedback or partnerships.", url: "/contact" },
};

export default function ContactPage() {
  return <ContentPage eyebrow="Contact" title="Talk to TourAudit." introduction="Contact us with a product question, pilot feedback or a business enquiry. If a review produced an incorrect or unclear finding, we would also like to hear about it.">
    <section><h2>Product and pilot feedback</h2><p>Tell us which findings were useful, which ones needed clearer language and which review situations deserve better coverage. Specific feedback from travel professionals helps us improve future reviews.</p></section>
    <section><h2>Business enquiries</h2><p>Travel companies interested in testing TourAudit, discussing the product or exploring a relevant collaboration can contact us by email.</p></section>
    <section className="contact-card"><h2>Email</h2><p><a className="text-link" href="mailto:hello@touraudit.com">hello@touraudit.com</a></p><p>Please do not include confidential traveller information, passport details, payment information or live itinerary content in an initial enquiry.</p></section>
  </ContentPage>;
}
