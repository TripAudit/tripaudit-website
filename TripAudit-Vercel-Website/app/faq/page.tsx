import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "TourAudit FAQ | Itinerary Review Questions",
  description: "Answers to common questions about TourAudit’s itinerary review scope, workflow and limitations.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "TourAudit FAQ", description: "Common questions about TourAudit’s itinerary review scope, workflow and limitations.", url: "/faq" },
};

const questions = [
  ["Who is TourAudit for?", "TourAudit is designed for travel consultants and other travel professionals reviewing client-facing itineraries before sending."],
  ["What does TourAudit identify?", "It identifies potential itinerary gaps, conflicts, missing information and practical concerns in the material supplied for review."],
  ["Does TourAudit replace a consultant?", "No. It supports consultant judgment. The consultant remains responsible for the final itinerary and professional decision."],
  ["Does TourAudit verify live travel information?", "No. Current schedules, availability, closures, weather, strikes, supplier terms and other changing conditions must be verified through appropriate current sources."],
  ["Does a review guarantee that every issue has been found?", "No. TourAudit is a structured support tool and does not claim guaranteed accuracy or exhaustive detection."],
  ["Is TourAudit a destination-knowledge service?", "No. Destination knowledge and specialist local context remain with the consultant and relevant suppliers."],
];

export default function FaqPage() {
  return <ContentPage eyebrow="Frequently asked questions" title="Clear answers about the review." introduction="TourAudit has a deliberately controlled role in the consultant’s workflow.">
    <div className="faq-list">{questions.map(([question, answer]) => <section key={question}><h2>{question}</h2><p>{answer}</p></section>)}</div>
  </ContentPage>;
}
