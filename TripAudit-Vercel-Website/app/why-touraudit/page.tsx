import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Why TourAudit? AI Itinerary Review vs ChatGPT",
  description: "Why use TourAudit when you have ChatGPT? Learn how travel professionals can review itinerary timings, transfers, connections and operational risks.",
  alternates: { canonical: "/why-touraudit" },
  openGraph: {
    title: "Why TourAudit? AI Itinerary Review vs ChatGPT",
    description: "How TourAudit gives travel professionals a repeatable way to review itinerary timings, transfers, connections and operational concerns.",
    url: "/why-touraudit",
  },
};

const reviewAreas = [
  "Airport arrival, departure and transfer arrangements",
  "Flight, railway and ground-transfer connections",
  "Sightseeing timings and travel allowances",
  "Hotel dates, overnight stays and itinerary consistency",
  "Vehicle service duration and availability",
  "Missing or unclear inclusions and exclusions",
  "Pickup locations, meeting points and guide arrangements",
  "Activities that may not fit the available time",
  "Inconsistencies between different parts of an itinerary",
];

export default function WhyTourAuditPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Why Use TourAudit When You Already Have ChatGPT?",
    url: "https://www.touraudit.com/why-touraudit",
    description: "A practical comparison of TourAudit and general AI tools for travel itinerary review.",
    isPartOf: { "@id": "https://www.touraudit.com/#website" },
    about: { "@id": "https://www.touraudit.com/#organization" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ContentPage
        eyebrow="Why TourAudit?"
        title="Why use TourAudit when you already have ChatGPT?"
        introduction="Travel consultants can use ChatGPT, Gemini and other AI tools to prepare itineraries, research destinations and improve proposals. TourAudit serves a different purpose: it reviews whether the itinerary is likely to work in practice."
      >
        <section>
          <h2>1. Can ChatGPT or Gemini review a travel itinerary?</h2>
          <p>Yes. Both can identify inconsistencies and suggest improvements. The result, however, depends on the instructions and information provided. A broad request may produce comments about descriptions, formatting, destinations or general improvements.</p>
          <p>TourAudit follows a dedicated itinerary-review process. It combines travel-operational rules with AI analysis, so consultants do not need to write detailed review instructions each time. Its advantage is not that general AI tools cannot perform these checks. It is that TourAudit brings relevant checks together in a repeatable workflow.</p>
        </section>

        <section>
          <h2>2. What makes TourAudit different from general AI tools?</h2>
          <p>TourAudit concentrates on the practical arrangements behind an itinerary.</p>
          <p>Consider a traveller arriving in Paris at 2:00 PM, followed by a hotel transfer and sightseeing at 4:00 PM. The plan may appear reasonable until immigration, baggage collection, airport traffic and hotel check-in are considered.</p>
          <p>TourAudit is designed to highlight concerns like this for the consultant to examine. The same approach applies to railway connections, sightseeing schedules, vehicle arrangements, meeting points and other operational details.</p>
        </section>

        <section>
          <h2>3. Why review an itinerary before sending it?</h2>
          <p>An itinerary can look complete and still contain operational gaps. A hotel may be booked correctly while the transfer is missing. An activity may be included without enough time to reach the meeting point. A train may depart too soon after the previous service ends.</p>
          <p>These issues can lead to inconvenience, extra expense or last-minute changes. A review gives the consultant time to clarify or adjust the arrangements before the client receives them.</p>
        </section>

        <section>
          <h2>4. What operational issues can TourAudit identify?</h2>
          <p>Depending on the information supplied, TourAudit may identify concerns involving:</p>
          <ul>{reviewAreas.map((area) => <li key={area}>{area}</li>)}</ul>
          <p>Findings are advisory. Some may require correction, while others need only clarification or supplier confirmation.</p>
        </section>

        <section>
          <h2>5. Can TourAudit review complex international itineraries?</h2>
          <p>Yes. TourAudit is intended for itineraries involving several destinations, transport arrangements and scheduled activities.</p>
          <p>For example, a traveller may complete sightseeing in Rome before taking an afternoon train to Naples. The departure can appear reasonable until sightseeing duration, baggage collection, station access and reporting time are considered together. TourAudit may flag the connection for the consultant to check.</p>
          <p>Current transport schedules and service arrangements must still be confirmed through authoritative sources.</p>
        </section>

        <section>
          <h2>6. Will TourAudit flag every missing detail as an error?</h2>
          <p>No. Itineraries are prepared at different stages and levels of detail. A skeleton itinerary may include only destinations, dates and main activities. A client-facing version usually adds descriptions and broad timings. An operational itinerary may specify vehicles, meeting points, service durations and inclusions.</p>
          <p>TourAudit takes the document’s purpose into account. An unspecified meeting point may be acceptable in an early proposal but need attention before the final operational itinerary is issued.</p>
        </section>

        <section>
          <h2>7. Why would an experienced travel consultant need TourAudit?</h2>
          <p>Experience remains essential. TourAudit does not replace it.</p>
          <p>Even experienced consultants can overlook a detail when handling complex itineraries or several enquiries at once. TourAudit provides an additional review that may identify concerns worth investigating. The consultant decides whether each finding is relevant and what action is necessary.</p>
        </section>

        <section>
          <h2>8. Does TourAudit verify live schedules, availability or supplier services?</h2>
          <p>No. TourAudit does not independently confirm live flight schedules, railway timetables, hotel availability, attraction closures or supplier commitments. These must be checked through current, authoritative sources.</p>
          <p>TourAudit reviews the information supplied and identifies potential operational concerns. It is not a live booking-verification system.</p>
        </section>

        <section>
          <h2>9. Who can benefit from TourAudit?</h2>
          <p>TourAudit is intended for travel consultants, travel agencies, destination management companies and tour operators. It is particularly useful for customized itineraries involving several destinations, transfers, activities and service providers.</p>
          <p>Agencies can add TourAudit to their existing checking process without replacing the systems they use to prepare quotations or itineraries.</p>
        </section>

        <section>
          <h2>10. How much does TourAudit cost?</h2>
          <p>TourAudit currently offers a free pilot for travel professionals.</p>
          <p>A professional subscription is planned at US$5 per month for up to 50 itinerary reviews. The proposed plan is intended for independent consultants and small agencies. Subscription availability and final terms will be announced when the paid service launches.</p>
        </section>

        <aside className="principle">
          <h2>Prepare your itinerary. Then check it.</h2>
          <p>Continue using ChatGPT, Gemini, your itinerary software or your own expertise to prepare the proposal. TourAudit helps you examine it from an operational perspective before it reaches the client.</p>
          <p><Link className="button" href="https://app.touraudit.com">Try TourAudit free</Link></p>
        </aside>

        <p><small>TourAudit provides AI-assisted itinerary reviews based on submitted information. Its observations are advisory and do not guarantee that an itinerary is accurate, complete or free of operational issues.</small></p>
      </ContentPage>
    </>
  );
}
