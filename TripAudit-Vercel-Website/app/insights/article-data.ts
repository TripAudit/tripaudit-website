import { scheduledArticles } from "./scheduled-articles";
import { decemberArticles } from "./december-articles";

export type ArticleSection = { heading: string; paragraphs?: string[]; bullets?: string[]; link?: { href: string; label: string } };
export type Article = { title: string; seoTitle: string; description: string; category: string; readTime: string; publishDate?: string; intro: string[]; sections: ArticleSection[]; related?: { href: string; label: string }[]; cta?: string };

export const articles: Record<string, Article> = {
  "interlaken-spiez-train-connection-example": {
    title: "Worked Itinerary Review: A Tight Train Connection at Spiez",
    seoTitle: "Interlaken to Spiez Train Connection: Worked Itinerary Review | TourAudit",
    description: "See how a travel consultant checks a 14:00 Interlaken pickup against a 14:10 train from Spiez and what to confirm before changing the itinerary.",
    category: "Worked examples",
    readTime: "3 min read",
    publishDate: "2026-11-26",
    intro: ["A 14:00 pickup in Interlaken leaves only ten minutes before a 14:10 train departs from Spiez. That window has to cover the road transfer, getting out with luggage and reaching the platform before departure. A consultant should flag the connection and confirm an earlier pickup or a later train before presenting it as workable."],
    sections: [
      {
        heading: "Original timing in the benchmark",
        paragraphs: ["This example uses a sanitised TourAudit review benchmark. The times below are reproduced from the sample itinerary. Verify current services for the actual travel date."],
        bullets: ["14:00 pickup in Interlaken.", "14:10 train departure from Spiez.", "Total time between pickup and scheduled departure: ten minutes."],
      },
      {
        heading: "Where the connection breaks down",
        paragraphs: ["The two times refer to different places. The travellers still have to leave the pickup point, reach Spiez station, unload their luggage and get to the departure platform. They need to be ready to board before 14:10. The itinerary leaves no credible allowance for all those steps and gives no confirmed transfer duration to support the connection."],
      },
      {
        heading: "What a consultant would change",
        paragraphs: ["If the 14:10 train is fixed, work backwards from the time the group should be at the platform. Confirm the road transfer and station access, then move the pickup earlier and allow a buffer for delays. If the pickup is fixed, check a later train and review any onward booking affected by the revised arrival time."],
      },
      {
        heading: "What needs independent verification",
        bullets: ["Rail operator: confirm the departure for the actual travel date, any disruption, and ticket or reservation conditions for the proposed train.", "Transfer supplier: confirm the pickup address, availability for the revised time, estimated drive time and station drop-off point.", "Station and traveller details: check walking or step-free access, luggage needs, and any assistance or extra boarding time the group requires."],
        paragraphs: ["Update the client itinerary and supplier instructions once the revised arrangements are confirmed. Mark any detail still awaiting confirmation."],
      },
    ],
    related: [
      { href: "/insights/train-connections-beyond-timetable", label: "How to check a train connection beyond the timetable" },
      { href: "/insights/how-to-review-a-travel-itinerary-before-sending", label: "Follow the full pre-send itinerary review guide" },
      { href: "/what-touraudit-reviews", label: "See what TourAudit reviews" },
    ],
  },
  "how-to-review-a-travel-itinerary-before-sending": {
    title: "How to Review a Travel Itinerary Before Sending It to a Client",
    seoTitle: "How to Review a Travel Itinerary Before Sending It | TourAudit",
    description: "A practical pre-send itinerary review process for travel consultants covering trip flow, timings, hotels, transfers, traveller needs and client expectations.",
    category: "Quality control", readTime: "7 min read",
    intro: ["Before sending a travel itinerary, check that hotel nights match the dates, transfers and connections allow enough time, and the daily schedule suits the travellers. Confirm missing pickup details, timings or inclusions with the relevant supplier. If a detail is still pending when you send the proposal, label it clearly."],
    sections: [
      { heading: "1. Start with the trip summary", paragraphs: ["Before reviewing each day, confirm that the summary agrees with the detailed programme. If the itinerary says six nights, the hotel allocation should total six nights. If departure is from Zurich, the final stay and airport transfer should make sense."], bullets: ["Total days and nights", "Arrival and departure cities", "Destination sequence and nights per destination", "Traveller number and type", "Intercity transport", "Major promised activities"] },
      { heading: "2. Read it as the traveller will experience it", paragraphs: ["Do not review only whether each individual service is possible. Read every day in sequence and account for wake-up times, transfers, check-in, walking, meals, rest and possible delays. Several valid components can combine into one exhausting day."] },
      { heading: "3. Check arrival day separately", paragraphs: ["Usable time depends on immigration, baggage, airport exit, transfer duration, check-in and fatigue—not only the scheduled landing time. Fixed activities increase the risk. When flight details are uncertain, use flexible wording rather than promising a full programme."] },
      { heading: "4. Review routing and transfers", paragraphs: ["Check movement between every service, including luggage handling, station changes, vehicle-access restrictions and the last practical connection. A central hotel may still require a difficult walk from the nearest drop-off point."], bullets: ["Airport or station to hotel", "Hotel to activity and return", "Luggage on transfer days", "Reservations and seat bookings", "Vehicle access near the hotel"] },
      { heading: "5. Test the daily pace", paragraphs: ["Count the demands of the day, not just attractions: early starts, long journeys, changes, walking, queues, altitude, fixed tickets and late arrivals. Suitability changes with age, mobility and the pace promised to the client."] },
      { heading: "6. Check activity timing and operating conditions", paragraphs: ["Confirm normal opening days, seasonal operations, reservation requirements, duration, last entry, meeting points and restrictions. Do not present uncertain information as guaranteed; mark details that need live reconfirmation."] },
      { heading: "7. Review hotels beyond the star category", paragraphs: ["Review location, room and bedding configuration, meal plan, accessibility, check-in timing, taxes and practical transport access. A budget that buys a spacious hotel in one destination may provide a much smaller room in central Paris; set the expectation before the client discovers it."] },
      { heading: "8. Look for missing information", paragraphs: ["Ask the relevant supplier to confirm any detail that affects how the trip will operate, such as a pickup point, a timed entry or whether a transfer is shared. Confirm traveller details with the client."], bullets: ["Traveller ages and mobility needs", "Flight or train times", "Hotel names and locations", "Meal and room configuration", "Luggage quantity", "Pass validity", "Private versus shared services"], link: { href: "/insights/missing-itinerary-information", label: "See what missing itinerary information to confirm before sending or booking" } },
      { heading: "9. Check inclusions and expectations", paragraphs: ["Clarify guides, vehicles, tickets, meals, transfers, waiting time, porterage, taxes, free time, optional activities and walking limitations. Many complaints begin with a difference between what the consultant meant and what the client understood."] },
      { heading: "10. Complete a final consistency pass", paragraphs: ["Recheck dates, day numbers, city names, traveller and room counts, nights, transport sectors, repeated activities, contradictory inclusions and copy-and-paste remnants. Then test whether promises such as relaxed, family-friendly, luxury or accessible are supported by the daily plan."] },
      { heading: "Pre-send itinerary checklist", bullets: ["Match travel dates, hotel nights and room counts to the trip summary.", "Allow time for check-out, luggage, transfers and boarding at each connection.", "Check that walking, early starts, fixed tickets and rest breaks suit the travellers.", "Verify meeting points, operating times and what each supplier includes.", "Label pending details and recheck the client copy for conflicting promises."] },
      { heading: "Add a structured second check", paragraphs: ["TourAudit helps travel consultants review itineraries for potential planning conflicts, operational gaps and missing information before they reach the client. It supports the consultant’s final review; it does not replace destination knowledge or live operational verification."], link: { href: "/what-touraudit-reviews", label: "See what TourAudit checks before you send an itinerary" } }
    ]
  },
  "10-common-itinerary-problems": {
    title: "10 Common Itinerary Problems Travel Consultants Should Check",
    seoTitle: "10 Common Travel Itinerary Problems to Check | TourAudit",
    description: "Check these 10 common itinerary problems before sending a proposal, from night-count mismatches and poor routing to hotel location and unrealistic first days.",
    category: "Checklist", readTime: "6 min read",
    intro: ["Most itinerary problems are not dramatic errors. They are small gaps between services, timings and expectations. Each component may look acceptable on its own, yet the complete trip may not work smoothly.", "Here are ten problems worth checking before an itinerary reaches the client."],
    sections: [
      {heading: "1. The nights do not match the trip duration",paragraphs: ["A seven-day, six-night itinerary lists only five hotel nights and gives no overnight transport for the sixth."],bullets: ["What to check: Match each night to a hotel or overnight service and reconcile the total with the trip summary."]},
      {heading: "2. The arrival day is overloaded",paragraphs: ["An early-afternoon landing is followed by a fixed museum entry before the plan allows for baggage collection and the hotel transfer."],bullets: ["What to check: Work forward from landing through airport exit and check-in before committing to a timed activity."]},
      {heading: "3. The sequence creates unnecessary travel",paragraphs: ["Travellers return to a city they passed through the previous day to catch a train."],bullets: ["What to check: Map the stops and check whether changing the order reduces backtracking without disrupting confirmed arrangements."]},
      {heading: "4. Transfer time is treated as free time",paragraphs: ["A pickup at 14:00 and a train at 14:10 look like a connection on paper. The plan still needs time to reach the station, unload luggage and get to the platform."],bullets: ["What to check: Work back from boarding and allow time for each step, including any station change."],link: {href: "/insights/train-connections-beyond-timetable",label: "See how to review a train connection beyond the timetable"}},
      {heading: "5. Too many demanding activities are together",paragraphs: ["A mountain excursion, a walking tour and a late transfer are scheduled on the same day."],bullets: ["What to check: Review the combined demands, including early starts, walking, queues and time for meals or rest."]},
      {heading: "6. Hotel location is ignored",paragraphs: ["A hotel in a pedestrian zone looks convenient on the map, but the vehicle may need to drop travellers off several streets away."],bullets: ["What to check: Confirm the legal drop-off point and check the walk with luggage and any mobility needs in mind."]},
      {heading: "7. Operating days and seasons are missed",paragraphs: ["An itinerary includes a boat trip on a date when the supplier may be running a reduced seasonal schedule."],bullets: ["What to check: Confirm the operating date, departure time, reservation requirements and any fallback with the supplier."]},
      {heading: "8. Traveller details are missing",paragraphs: ["A family of four is listed, but the children’s ages and bedding needs are missing."],bullets: ["What to check: Confirm ages, room configuration, mobility needs and luggage before committing to tickets, rooms or vehicle size."]},
      {heading: "9. Transport passes do not match",paragraphs: ["A rail pass may cover the route while a particular train still requires a separate seat reservation."],bullets: ["What to check: Check the dates, route and service against the pass terms, including compulsory reservations and exclusions."]},
      {heading: "10. The wording creates the wrong expectation",paragraphs: ["The proposal says guided sightseeing, while the booking includes only admission and an audio guide."],bullets: ["What to check: Match the client-facing wording to the booked service and spell out any limitations that affect the experience."]},
      { heading: "Why these problems survive proofreading", paragraphs: ["Proofreading finds spelling and formatting errors. Operational review asks what happens between services, whether the traveller has enough time, what assumptions remain unwritten and which detail could create a complaint."] },
      { heading: "A practical final review", paragraphs: ["Once you have flagged the individual problems, review the trip in order from arrival to departure. Confirm outstanding supplier details and make sure the final client copy reflects the arrangements."], link: { href: "/insights/how-to-review-a-travel-itinerary-before-sending", label: "Follow the full pre-send itinerary review guide" } },
      { heading: "Which itinerary problems can TourAudit help flag?", paragraphs: ["TourAudit can flag potential issues with timings, transfers, itinerary flow and missing details for you to assess before sending a proposal."], link: { href: "/what-touraudit-reviews", label: "See which itinerary issues TourAudit reviews" } }
    ]
  },
  "why-correct-itineraries-can-be-impractical": {
    title: "Why a Correct Itinerary Can Still Be Impractical",
    seoTitle: "Why a Correct Travel Itinerary Can Be Impractical | TourAudit",
    description: "A travel itinerary can be technically accurate but operationally weak. Learn how pace, transfers, walking, timing and expectations affect real trip quality.",
    category: "Trip design", readTime: "5 min read",
    intro: ["Every hotel exists. Every attraction is open. Every train can be booked. The number of nights is correct. And yet the itinerary may still be a poor plan.", "Technical correctness confirms that the listed components are valid. Practicality asks whether a real traveller can complete them comfortably, in sequence and under normal travel conditions."],
    sections: [
      { heading: "Possibility is not suitability", paragraphs: ["An eight-minute train connection may be possible but unsuitable for a family with luggage or an elderly couple unfamiliar with the station. Good review goes beyond ‘Can this be done?’ and asks ‘Should this be recommended to this client?’"] },
      { heading: "The missing time between services", paragraphs: ["Itineraries often record main services but omit packing, check-out, station transfer, platform finding, changes, hotel transfer, luggage storage and travel to the next activity. If only train time is counted, several hours can disappear."] },
      { heading: "Walking changes the experience", paragraphs: ["Coaches may not enter historic centres, drivers may use designated drop-off points and stations may require long platform walks or level changes. Review walking together with age, mobility, weather, luggage, surfaces and the number of active days."] },
      { heading: "A relaxed itinerary can have too many commitments", paragraphs: ["Fixed commitments reduce flexibility. Three timed tickets can become stressful even over short distances because one delay affects every later reservation."], bullets: ["Early departure after a late arrival", "Back-to-back fixed entries", "Activities immediately after transfers", "No meal or rest window", "Late return before another early start"] },
      { heading: "Weather and altitude add invisible effort", paragraphs: ["Mountain travel may be operationally available but demanding due to altitude, weather exposure, queues and multiple transport stages. Preserve flexibility rather than filling every theoretical hour."] },
      { heading: "Hotel quality does not correct poor location", paragraphs: ["A well-rated hotel can weaken the itinerary if its location creates long daily transfers. Consider activity locations, early starts, late returns, local transport, luggage access and vehicle restrictions."] },
      { heading: "The plan may not match the client promise", paragraphs: ["If a trip is sold as relaxed, luxury, accessible or senior-friendly, the services and daily programme must support that promise. Vague assurances are not enough."] },
      { heading: "Operational knowledge has a time limit", paragraphs: ["Strikes, closures, maintenance, weather and overcrowding can change after a proposal is prepared. Separate what is known and included, what is normally expected and what must be reconfirmed closer to travel."] },
      { heading: "A better practicality test", bullets: ["Is the sequence sensible?", "Is there enough time around each service?", "Does the effort suit these travellers?", "Is there flexibility when something runs late?", "Does the programme match the holiday promise?", "Have important limitations been explained?"], paragraphs: ["A strong itinerary offers smooth flow, realistic breaks and correct expectations. TourAudit helps identify potential conflicts, operational gaps and missing information; its findings support—not replace—the consultant’s current knowledge and professional judgement."] }
    ]
  },
  ...scheduledArticles,
  ...decemberArticles,
};
