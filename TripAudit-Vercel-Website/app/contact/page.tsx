import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Contact TourAudit",
  description: "Contact TourAudit with product questions, pilot feedback or partnership enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact TourAudit", description: "Get in touch with TourAudit about the product, pilot feedback or partnerships.", url: "/contact" },
};

export default function ContactPage() {
  return <ContentPage eyebrow="Contact" title="Talk to TourAudit." introduction="For product questions, pilot feedback or partnership enquiries, contact the TourAudit team.">
    <section className="contact-card"><h2>Email</h2><p><a className="text-link" href="mailto:hello@touraudit.com">hello@touraudit.com</a></p><p>Please do not include confidential traveller information or live itinerary details in an initial enquiry.</p></section>
  </ContentPage>;
}
