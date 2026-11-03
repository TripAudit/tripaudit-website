import type { Metadata } from "next";
import Link from "next/link";
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
  ["What type of itinerary can I submit?", "You can paste a concise trip outline, a client-facing itinerary or a detailed operational programme. Dates, destinations, stays, transport, activities, inclusions and relevant traveller details help TourAudit provide a more useful review."],
  ["Can I upload a file or image?", "No. The current pilot accepts pasted itinerary text only. File and image uploads are not supported."],
  ["What information should I remove before submitting?", "Remove unnecessary traveller-identifying information. Never submit passport numbers, payment-card information, medical information or other highly sensitive personal data."],
  ["Can TourAudit review an incomplete itinerary?", "Yes, although the result may be limited. TourAudit may point out that ages, timings, hotel locations, rooming, transport or inclusion details are needed for a fuller assessment."],
  ["What does a TourAudit finding contain?", "A finding describes a possible concern and explains why it may matter. It may highlight a conflict, ask for clarification or identify an assumption to verify before sending the itinerary."],
  ["Can a finding be incorrect or not relevant?", "Yes. The itinerary may leave out an arrangement already known to the consultant, or TourAudit may interpret the wording differently from what was intended. Assess every finding before acting on it."],
  ["Does TourAudit make bookings or change the itinerary?", "No. TourAudit reviews the supplied text. It does not book services, confirm availability or automatically change the consultant’s itinerary."],
  ["Can TourAudit review family, group and multi-city trips?", "It can review the information supplied for different trip types, including family and multi-city itineraries. The quality of the review depends on whether relevant traveller, rooming, transport and service details are included."],
  ["Is TourAudit free?", "TourAudit is currently available as a controlled public pilot. Access and pilot conditions may change as the service develops."],
  ["How can I report an unhelpful finding?", "Use the feedback option shown after an eligible review, or contact the TourAudit team without sending confidential traveller information."],
];

export default function FaqPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    <ContentPage eyebrow="Frequently asked questions" title="Clear answers about TourAudit." introduction="Find out what to submit, what the review can identify and which decisions remain with the travel professional.">
      <div className="faq-list">{questions.map(([question, answer]) => <section key={question}><h2>{question}</h2><p>{answer}</p></section>)}</div>
      <aside className="principle"><h2>How is TourAudit different from ChatGPT or Gemini?</h2><p>General AI tools can review an itinerary when given suitable instructions. TourAudit brings travel-operational checks into a repeatable workflow designed for consultants. <Link className="text-link" href="/why-touraudit">Read the full comparison →</Link></p></aside>
    </ContentPage>
  </>;
}
