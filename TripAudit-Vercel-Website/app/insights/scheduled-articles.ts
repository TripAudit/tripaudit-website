import type { Article } from "./article-data";

export const scheduledArticles: Record<string, Article> = {
  "review-arrival-departure-days": {
    title: "How to Review Arrival and Departure Days in a Travel Itinerary",
    seoTitle: "How to Review Arrival and Departure Days | TourAudit",
    description: "A practical checklist for reviewing airport timings, transfers, check-in, usable time and departure-day risk in a travel itinerary.",
    category: "Timing and flow",
    readTime: "6 min read",
    publishDate: "2026-10-27T00:00:00+05:30",
    intro: [
      "Arrival and departure days often look simple on paper: land, transfer, check in, and begin the programme. In practice, these are the days with the least predictable usable time and the greatest chance of a missed service.",
      "A sound review separates the scheduled flight time from the time the traveller can realistically use. It also leaves enough margin for the parts of the journey that rarely appear in a proposal."
    ],
    sections: [
      { heading: "Start with the complete arrival sequence", paragraphs: ["Work forward from the scheduled landing time. Allow for immigration, baggage collection, customs, meeting the driver, traffic, hotel registration and any waiting created by an early check-in. A 10:00 landing does not mean the client is ready for sightseeing at 10:30."] },
      { heading: "Treat uncertain flight details as a planning gap", paragraphs: ["If the flight number or arrival time is not confirmed, avoid attaching a fixed attraction to the first day. State what is provisional, ask for the missing detail and keep the plan flexible until the transport is known."] },
      { heading: "Check whether the first activity can tolerate delay", paragraphs: ["A walk at leisure may be moved. A timed museum ticket, show, cruise or last cable-car departure may not. The less flexible the service, the more arrival margin the itinerary needs."], bullets: ["Ticket change and cancellation terms", "Last entry or final departure", "Distance from the hotel", "Meal and rest time before the activity", "A workable alternative if the flight is late"] },
      { heading: "Review early hotel access", paragraphs: ["Standard check-in may be several hours after arrival. Confirm whether early check-in is included, requested but not guaranteed, or unavailable. If luggage storage is the fallback, explain it and make sure the first-day programme suits travellers who may not have changed or rested."] },
      { heading: "Work backwards on departure day", paragraphs: ["Begin with the airline or operator's recommended reporting time, then add the transfer, traffic margin, hotel check-out and time to collect luggage. A final activity should end early enough that one modest delay does not threaten the flight or train."] },
      { heading: "Check overnight and cross-midnight travel carefully", paragraphs: ["A flight departing shortly after midnight belongs operationally to the previous evening. Confirm the hotel night, pickup date and day label. These details are common sources of one-day errors."] },
      { heading: "Use a short pre-send checklist", bullets: ["Are flight or train details confirmed?", "Is hotel access realistic?", "Is the first activity flexible?", "Is the departure buffer sufficient?", "Do pickup dates match cross-midnight services?", "Does the wording explain uncertainty?"], paragraphs: ["Arrival and departure days deserve their own review, not a quick glance at the endpoints. See how this fits into the broader TourAudit approach in How It Works and the complete itinerary review checklist."] }
    ],
    related: [
      { href: "/how-it-works", label: "See how TourAudit works" },
      { href: "/insights/how-to-review-a-travel-itinerary-before-sending", label: "Read the complete pre-send review guide" }
    ]
  },
  "hotel-location-checks": {
    title: "Hotel Location Checks Travel Consultants Should Make",
    seoTitle: "Hotel Location Checks for Travel Itineraries | TourAudit",
    description: "Review hotel location for access, daily travel time, luggage, neighbourhood fit and the activities promised in the itinerary.",
    category: "Hotels and location",
    readTime: "6 min read",
    publishDate: "2026-10-30T00:00:00+05:30",
    intro: [
      "A hotel can have the right star rating, room type and price while still being the wrong choice for the itinerary. Location affects every day of the trip: transfer time, early starts, late returns, walking, luggage handling and the client's impression of convenience.",
      "The useful question is not simply whether the hotel is central. It is whether the location works for this particular programme and these particular travellers."
    ],
    sections: [
      { heading: "Map the hotel against the actual programme", paragraphs: ["List the places the client will repeatedly visit: meeting points, stations, attractions, restaurants and departure hubs. A hotel close to one landmark may be inconvenient for the rest of the trip. Review the total movement it creates, not the marketing description."] },
      { heading: "Check practical access, not straight-line distance", paragraphs: ["A short distance can involve steep streets, bridges, stairs, pedestrian zones or infrequent public transport. Confirm where a vehicle can stop and what the traveller must do between the drop-off point and reception."] },
      { heading: "Review the first and last transfer", paragraphs: ["Airport and station access matters most when arrival is late, departure is early or the group has significant luggage. Compare the saving on the room with any extra private transfers, taxis or lost holiday time."] },
      { heading: "Test the location against traveller needs", paragraphs: ["A lively central district may suit some clients and disturb others. Families may value food and pharmacy access; older travellers may need lifts and level approaches; business travellers may prioritise a reliable commute. Avoid treating location as one universal score."], bullets: ["Walking ability and mobility aids", "Children's ages and daily routines", "Noise sensitivity", "Late-night transport availability", "Nearby meals and essential services"] },
      { heading: "Check the wording used in the proposal", paragraphs: ["Words such as central, nearby and walking distance need context. State an approximate journey, the likely transport mode or the specific area instead of creating an expectation the hotel cannot meet."] },
      { heading: "Consider changes across the stay", paragraphs: ["A hotel may work for sightseeing but not for a 05:30 excursion pickup. If the itinerary has several early departures, calculate the repeated inconvenience. In multi-city trips, also check that similarly named properties have not been copied into the wrong destination."] },
      { heading: "A practical hotel-location checklist", bullets: ["Does the hotel suit the main daily routes?", "Can the booked vehicle reach it?", "Is luggage movement manageable?", "Are early and late transfers realistic?", "Does the neighbourhood suit the client?", "Is the proposal wording specific?"], paragraphs: ["Hotel review should connect accommodation details to the complete trip flow. TourAudit helps consultants surface these connections before the itinerary reaches the client."] }
    ],
    related: [
      { href: "/what-touraudit-reviews", label: "See what TourAudit reviews" },
      { href: "/insights/10-common-itinerary-problems", label: "Review 10 common itinerary problems" }
    ]
  },
  "multi-city-routing-night-allocation": {
    title: "How to Review a Multi-City Itinerary for Routing and Night Allocation",
    seoTitle: "Review Multi-City Routing and Night Allocation | TourAudit",
    description: "Check destination order, travel sectors, usable nights and departure logistics in a multi-city travel itinerary.",
    category: "Routing",
    readTime: "7 min read",
    publishDate: "2026-11-03T00:00:00+05:30",
    intro: [
      "Multi-city itineraries can appear complete because every destination has a hotel and every sector has transport. The hidden weakness is often the relationship between them: the order creates backtracking, a two-night stay provides only one usable day, or the final city does not suit the departure.",
      "Reviewing routing and night allocation together reveals whether the journey works as a whole."
    ],
    sections: [
      { heading: "Draw the route before reading the daily detail", paragraphs: ["Write the arrival point, each overnight city and the departure point in order. This simple view makes repeated sectors, geographical reversals and unnecessary returns easier to see."] },
      { heading: "Separate hotel nights from usable destination time", paragraphs: ["Two nights do not always mean two sightseeing days. A late arrival and early onward departure may leave one short day. Show the client what the allocation delivers rather than relying on the night count alone."] },
      { heading: "Account for the full transfer day", paragraphs: ["Door-to-door movement includes packing, check-out, local transport, waiting, the main journey, arrival transfer and check-in. A three-hour train can consume most of a day once these stages are included."] },
      { heading: "Check the weakest connection", paragraphs: ["A route is only as reliable as its least forgiving sector. Review short changes, separate tickets, the last service of the day, seasonal routes and stations that require a transfer across the city."], bullets: ["Minimum connection time", "Reservation requirements", "Luggage handling", "Backup service availability", "Consequences of a missed connection"] },
      { heading: "Match night allocation to the reason for visiting", paragraphs: ["A transit stop, major sightseeing base and resort stay do not need the same allocation. Check whether the promised experiences fit the time available and whether frequent hotel changes undermine the intended pace."] },
      { heading: "Review the final city against departure logistics", paragraphs: ["Confirm the final overnight location, airport or station, reporting time and transfer duration. If the client must reverse the route for departure, consider whether an open-jaw flight or different final allocation is more sensible."] },
      { heading: "Run a consistency pass", bullets: ["Do total hotel nights match the trip duration?", "Does every intercity movement exist?", "Are dates continuous?", "Are city names and stations correct?", "Is each stay long enough for its purpose?", "Does the final stay support departure?"], paragraphs: ["This review protects both practicality and client expectation. It is especially useful before transport is ticketed and changes become expensive."] }
    ],
    related: [
      { href: "/insights/why-correct-itineraries-can-be-impractical", label: "Why correct itineraries can still be impractical" },
      { href: "/how-it-works", label: "See how TourAudit works" }
    ]
  },
  "family-itinerary-review": {
    title: "Family Itinerary Review: Ages, Rooms, Transfers and Daily Pace",
    seoTitle: "Family Travel Itinerary Review Checklist | TourAudit",
    description: "A consultant checklist for reviewing child ages, room configuration, transfers, activities, meals and daily pace in family itineraries.",
    category: "Traveller suitability",
    readTime: "7 min read",
    publishDate: "2026-11-06T00:00:00+05:30",
    intro: [
      "The word family is not enough information to review an itinerary. A couple travelling with a toddler has different room, transport and pacing needs from parents travelling with teenagers.",
      "A useful family review converts the traveller profile into operational checks throughout the programme."
    ],
    sections: [
      { heading: "Confirm each child's age at travel", paragraphs: ["Age can affect fares, attraction entry, bedding, meal plans and whether a child is allowed to join an activity. Record the age at the travel date, not only at enquiry, and confirm any infant documentation requirements."] },
      { heading: "Review the exact room configuration", paragraphs: ["Family room, triple room, connecting rooms and extra bed are not interchangeable. Confirm occupancy limits, bed types, cot availability and whether connecting rooms are guaranteed or merely requested. Explain what the client will actually receive."] },
      { heading: "Match the vehicle to people and luggage", paragraphs: ["A vehicle that seats the passengers may not hold pushchairs, suitcases and child seats. Confirm child-restraint requirements and whether the supplier provides suitable seats. Include transfer duration and rest-stop needs on longer journeys."] },
      { heading: "Test the day from the youngest traveller's perspective", paragraphs: ["Long queues, late dinners and repeated early starts affect children differently. Check the programme for meal gaps, rest opportunities, toilet access, weather exposure and the ability to leave an activity early."], bullets: ["Back-to-back timed entries", "Long guided visits without breaks", "Late arrival followed by an early start", "Adult-oriented evening programmes", "Activities with height or age restrictions"] },
      { heading: "Check activity suitability instead of assuming it", paragraphs: ["Family-friendly may describe the destination, not every service. Verify minimum ages, height limits, swimming ability, supervision rules, equipment sizes and the physical effort required."] },
      { heading: "Make inclusions clear", paragraphs: ["State whether child tickets, meals, seats and transfers are included. If an infant travels free but receives no separate seat or meal, that limitation should be visible before booking."] },
      { heading: "Use a family-specific final check", bullets: ["Are ages and dates of birth known?", "Is bedding confirmed?", "Does the vehicle fit luggage and child seats?", "Are activities permitted and suitable?", "Are meals and breaks realistic?", "Can the plan adapt when the family needs to slow down?"], paragraphs: ["A family itinerary should remain enjoyable when ordinary travel friction appears. TourAudit supports this structured review while the consultant applies supplier knowledge and judgement."] }
    ],
    related: [
      { href: "/what-touraudit-reviews", label: "See what TourAudit reviews" },
      { href: "/insights/how-to-review-a-travel-itinerary-before-sending", label: "Read the complete pre-send review guide" }
    ]
  },
  "private-vs-shared-services": {
    title: "Private vs Shared Travel Services: What an Itinerary Must Explain",
    seoTitle: "Private vs Shared Travel Services in Itineraries | TourAudit",
    description: "Clarify pickup, waiting, routing, guide, vehicle and timing expectations when an itinerary includes private or shared travel services.",
    category: "Client expectations",
    readTime: "6 min read",
    publishDate: "2026-11-10T00:00:00+05:30",
    intro: [
      "Private and shared are short labels with large consequences. They shape pickup times, waiting, routing, guide attention, luggage arrangements and the traveller's ability to change the plan.",
      "When an itinerary uses these terms without explaining the service, the consultant and client may imagine different experiences."
    ],
    sections: [
      { heading: "Define what is private", paragraphs: ["A private vehicle does not automatically mean a private guide, exclusive attraction access or unlimited waiting. Identify which element is exclusive to the booking: transfer, vehicle, driver, guide or tour."] },
      { heading: "Explain how shared pickup works", paragraphs: ["Shared services may use a hotel pickup window, central meeting point or feeder transfer. State what the traveller must do, how long they may wait and whether other hotels or terminals are served before the main journey begins."] },
      { heading: "Check timing against the rest of the itinerary", paragraphs: ["Shared timings may be confirmed only shortly before travel and can vary with the route. Avoid placing another fixed service too close to the expected return. For private services, confirm whether the departure time is genuinely flexible or subject to tickets and operating hours."] },
      { heading: "Review luggage and accessibility", paragraphs: ["Shared vehicles may have baggage limits and fixed vehicle types. Private vehicles still require the correct capacity. Confirm wheelchairs, pushchairs, sports equipment and large luggage before treating the transport as suitable."] },
      { heading: "Clarify guide and driver roles", paragraphs: ["A driver may not be licensed or contracted to provide guiding. A meet-and-greet representative may only assist at arrival. Describe roles accurately so the client knows where commentary, escorting and local support begin and end."] },
      { heading: "State the practical limitations", bullets: ["Pickup window or meeting-point requirement", "Possible stops for other passengers", "Maximum waiting time", "Route and stop flexibility", "Language and guiding inclusion", "Cancellation and no-show rules"], paragraphs: ["Limitations are not negative when they are explained before booking. Clear wording helps the client choose the service that fits their priorities."] },
      { heading: "Use consistent terminology", paragraphs: ["Check the daily programme, inclusions and supplier notes for contradictions. A service should not be called private in one section and shared in another. If the exact arrangement is pending, label it as unconfirmed rather than filling the gap with an assumption."] }
    ],
    related: [
      { href: "/insights/10-common-itinerary-problems", label: "Review 10 common itinerary problems" },
      { href: "/how-it-works", label: "See how TourAudit works" }
    ]
  },
  "missing-itinerary-information": {
    title: "Missing Itinerary Information to Confirm Before Sending or Booking",
    seoTitle: "Missing Travel Itinerary Information Checklist | TourAudit",
    description: "Identify missing traveller, hotel, transport, activity and inclusion details that should be confirmed before an itinerary is sent or booked.",
    category: "Completeness",
    readTime: "7 min read",
    publishDate: "2026-11-13T00:00:00+05:30",
    intro: [
      "An itinerary can look polished while important decisions remain hidden. Missing information may prevent a proper review, create the wrong expectation or force the operations team to make assumptions later.",
      "The right response is not to invent precision. It is to identify what is missing, decide when it must be known and state any temporary assumption clearly."
    ],
    sections: [
      { heading: "Traveller information", paragraphs: ["Confirm the number of travellers, children's ages, rooming, mobility, dietary needs and relevant assistance. These details affect price, service eligibility, vehicle capacity and daily suitability."], bullets: ["Names and ages at travel", "Room and bedding needs", "Mobility or accessibility requirements", "Dietary requirements", "Luggage or special equipment"] },
      { heading: "Arrival, departure and intercity transport", paragraphs: ["Flight numbers, terminals, train stations and timings connect the itinerary's major parts. Without them, arrival-day activities, transfers and the final departure margin cannot be reviewed reliably."] },
      { heading: "Accommodation details", paragraphs: ["A star category without a hotel name or area is not enough to assess location. Confirm property, room type, occupancy, meal plan, check-in terms, taxes and whether special requests are guaranteed."] },
      { heading: "Activity operating details", paragraphs: ["Review dates, opening patterns, duration, meeting point, ticket type, guide language, age limits and physical requirements. Mark live details that must be reconfirmed closer to travel."] },
      { heading: "Service scope and responsibility", paragraphs: ["State whether transfers are private or shared, where drivers meet clients, what waiting is included and which services are self-guided. Clarify who handles tickets, reservations and local payments."] },
      { heading: "Commercial and client-facing inclusions", paragraphs: ["The programme and inclusion list should agree. Check meals, entrances, guides, porterage, city taxes, resort fees, optional activities and gratuities. If a price depends on availability or exchange rates, explain the condition."] },
      { heading: "Decide what blocks sending and what blocks booking", paragraphs: ["Not every unknown has the same urgency. A proposal may be sent with a clearly marked provisional hotel, while a transfer cannot be operated without flight details. Separate information needed now, before confirmation and before travel."] },
      { heading: "A final completeness question", paragraphs: ["Could a client, reservations colleague and local supplier each read this itinerary and understand the same trip? If not, list the missing facts and assumptions before the document moves forward. TourAudit helps surface such gaps; the consultant decides what must be resolved at each stage."] }
    ],
    related: [
      { href: "/what-touraudit-reviews", label: "See what TourAudit reviews" },
      { href: "/insights/how-to-review-a-travel-itinerary-before-sending", label: "Read the complete pre-send review guide" }
    ]
  },
"train-connections-beyond-timetable": {
  "title": "A Train Connection Needs More Than a Timetable Check",
  "seoTitle": "How to Review Train Connections in an Itinerary | TourAudit",
  "description": "Review station changes, luggage, arrival margins and the next commitment when checking a train connection in a client itinerary.",
  "category": "Transport planning",
  "readTime": "4 min read",
  "publishDate": "2026-11-20T09:00:00+05:30",
  "intro": [
    "A train journey can look tidy in a proposal: depart at 09:00, arrive at 11:00, change trains and continue. The traveller experiences something less tidy. There is a hotel to leave, a station to navigate and luggage to move before the next platform is even in sight.",
    "The useful question is not simply whether a connection appears in a timetable. It is whether the whole movement makes sense for the people taking the trip."
  ],
  "sections": [
    {
      "heading": "Start before the first departure",
      "paragraphs": [
        "Work backwards from the train. Allow for leaving the hotel, reaching the correct station, finding the platform and completing any applicable boarding or security steps. Check the actual service requirements rather than applying one reporting margin to every train.",
        "A transfer described as a short drive can still leave little room for a delayed pickup. Where a fixed departure depends on that transfer, make the dependency visible in the plan."
      ]
    },
    {
      "heading": "Read the station names carefully",
      "paragraphs": [
        "A city name does not establish that two trains use the same station. A change across the city is a separate journey, with its own transport, luggage handling and delay risk.",
        "For a same-station change, consider what the traveller may need to do between platforms. A short connection deserves closer attention when the party has children, limited mobility or several bags. Do not assume a platform layout or lift availability without checking."
      ]
    },
    {
      "heading": "Consider what happens after a missed connection",
      "paragraphs": [
        "An illustrative connection of twelve minutes might be manageable for one traveller and uncomfortable for another. Its consequences also matter. Is there another suitable service, or would a missed train disrupt the only practical onward journey?",
        "Check ticket conditions and connection protection with the relevant operator or seller. Avoid promising that a later service can be used unless that has been confirmed."
      ]
    },
    {
      "heading": "Keep the arrival plan honest",
      "paragraphs": [
        "Arrival at the station is not arrival at the hotel. Add the onward transfer, luggage arrangements and check-in before assessing whether an afternoon activity fits.",
        "A fixed tour immediately after a rail arrival creates a chain of commitments. If the train is delayed, the tour may be affected too. A flexible afternoon may be a better fit when the client has no reason to accept that pressure."
      ]
    },
    {
      "heading": "Write down the detail that changes the decision",
      "paragraphs": [
        "The client does not need a station operations manual. They do need the correct stations, the nature of any change and clear responsibility for transfers and reservations.",
        "Before sending, read the day from hotel door to hotel door. If the sequence only works when every step runs perfectly, revisit it."
      ]
    }
  ],
  "related": [
    {
      "href": "https://app.touraudit.com",
      "label": "Try the TourAudit free pilot"
    },
    {
      "href": "/what-touraudit-reviews",
      "label": "What TourAudit reviews"
    }
  ]
},
"driver-hours-private-tour-itinerary": {
  "title": "A Private Vehicle Is Not Available Without Limits",
  "seoTitle": "Review Driver Hours and Vehicle Use in Private Tours | TourAudit",
  "description": "Check vehicle service windows, waiting time, overtime and transfer assumptions before sending a private-tour itinerary.",
  "category": "Private touring",
  "readTime": "4 min read",
  "publishDate": "2026-11-24T09:00:00+05:30",
  "intro": [
    "A private vehicle can make a complicated day feel simple. The same driver collects the clients, takes them between stops and returns them to the hotel. That convenience can hide a basic question: what period of service has actually been booked?",
    "An itinerary may list a full day of activities while the supplier confirmation covers a shorter window. The mismatch becomes harder to resolve once clients are already travelling."
  ],
  "sections": [
    {
      "heading": "Put the service window beside the programme",
      "paragraphs": [
        "Compare the confirmed start and finish times with the day's first pickup and final drop-off. Include travel between stops and any waiting that falls within the booked service.",
        "For example, a programme running from 08:00 to 20:00 needs clarification if the vehicle is confirmed for ten hours. That does not automatically mean the day is impossible. It means the service and the programme have not yet been reconciled."
      ]
    },
    {
      "heading": "Waiting is part of the arrangement",
      "paragraphs": [
        "While clients visit an attraction or stop for lunch, the vehicle arrangement still needs to be understood. Does waiting count towards the booked hours? Can the driver leave and return? Are later transfers separately priced?",
        "Confirm these points with the supplier. Avoid describing a vehicle as available throughout the day when only specific transfers are included."
      ]
    },
    {
      "heading": "Look beyond the headline overtime rate",
      "paragraphs": [
        "If the quotation mentions overtime, check how it is calculated, who approves it and how clients will be informed. An illustrative rate of EUR 90 per hour is useful only when the likely service duration is also understood.",
        "The presence of an overtime price does not guarantee that an extension will be available. Supplier conditions, driver availability and applicable operating rules still need to be checked."
      ]
    },
    {
      "heading": "Check what the vehicle can actually reach",
      "paragraphs": [
        "A private transfer does not establish that the vehicle can stop outside every hotel or attraction. Confirm access and suitable pickup or drop-off points where restrictions may affect the day.",
        "If the final approach involves walking or local transport, explain it before travel. This matters particularly when clients have luggage or have chosen private touring to reduce physical effort."
      ]
    },
    {
      "heading": "Resolve the gap before the client has to",
      "paragraphs": [
        "Once a concern is identified, adjust the programme, book the required service or explain an agreed additional charge. Do not leave the driver and traveller to negotiate an unclear promise during the trip.",
        "Clear wording can be brief: state the confirmed service window, important access limitations and the process for requesting extra use."
      ]
    }
  ],
  "related": [
    {
      "href": "https://app.touraudit.com",
      "label": "Try the TourAudit free pilot"
    },
    {
      "href": "/what-touraudit-reviews",
      "label": "What TourAudit reviews"
    }
  ]
},
"timed-tickets-flexibility-itinerary": {
  "title": "When Timed Tickets Make a Sightseeing Day Too Fragile",
  "seoTitle": "Plan Timed Tickets Without Overloading the Day | TourAudit",
  "description": "Review the dependencies between timed entries, guided tours, meals and transfers before committing clients to a fixed sightseeing schedule.",
  "category": "Daily planning",
  "readTime": "4 min read",
  "publishDate": "2026-11-27T09:00:00+05:30",
  "intro": [
    "A morning museum, an afternoon guided tour and an evening performance can each be a good choice. Together, they may leave the traveller with a day that is easy to disrupt.",
    "Timed tickets are not the problem. The difficulty begins when an itinerary treats the spaces between them as empty time rather than part of the journey."
  ],
  "sections": [
    {
      "heading": "Separate fixed commitments from flexible visits",
      "paragraphs": [
        "Mark the activities that require arrival at a particular time. Then distinguish them from places that can be visited earlier, later or another day.",
        "This simple separation shows where the day has room to recover. A walk through a neighbourhood can move. A tour with a set meeting time may not."
      ]
    },
    {
      "heading": "Include the part before the entry time",
      "paragraphs": [
        "An entry booked for 11:00 may require the traveller to arrive earlier. Check the supplier's meeting instructions, ticket collection, security arrangements and late-arrival conditions.",
        "Also establish where the previous activity finishes. The distance between two attraction names may say little about the time required to leave one, reach the next entrance and find the meeting point."
      ]
    },
    {
      "heading": "Protect ordinary human needs",
      "paragraphs": [
        "Meals, toilets, rest and the occasional wrong turn are not exceptional events. A realistic plan leaves room for them.",
        "Consider an illustrative day with entry at 10:00 and a guided tour at 13:00. It may fit, but only after checking the first visit's likely duration, the transfer and a sensible meal opportunity. The three-hour gap alone does not answer the question."
      ]
    },
    {
      "heading": "Look for the commitment that puts everything else at risk",
      "paragraphs": [
        "A timed visit after an airport arrival or intercity journey depends on more than sightseeing choices. A delay earlier in the day can affect the booking before the clients reach the city.",
        "Where possible, place a priority activity on a day with fewer dependencies. If the timing must stay, explain the risk and confirm the relevant change or cancellation terms before booking."
      ]
    },
    {
      "heading": "Leave the client a choice",
      "paragraphs": [
        "A proposal does not need to fill every available hour. One important booking and a flexible set of nearby options can produce a more comfortable day than several tightly linked reservations.",
        "Review the schedule against the pace the client asked for. A trip sold as relaxed should give them some freedom to linger, pause or change their mind."
      ]
    }
  ],
  "related": [
    {
      "href": "https://app.touraudit.com",
      "label": "Try the TourAudit free pilot"
    },
    {
      "href": "/what-touraudit-reviews",
      "label": "What TourAudit reviews"
    }
  ]
},
"itinerary-handover-supplier-confirmations": {
  "title": "The Final Itinerary Should Agree With the Supplier Confirmations",
  "seoTitle": "Check Itinerary and Supplier Confirmation Consistency | TourAudit",
  "description": "A practical final handover check for hotel nights, room arrangements, transfers, sightseeing inclusions and unresolved changes.",
  "category": "Quality control",
  "readTime": "4 min read",
  "publishDate": "2026-12-01T09:00:00+05:30",
  "intro": [
    "A proposal often changes several times before travel. A hotel is replaced, a transfer moves to a different time, or a tour is confirmed with a different meeting arrangement. Each change may be correct in one document and absent from another.",
    "The final itinerary should describe the trip that has been arranged. A polished document can still carry an earlier version of the booking."
  ],
  "sections": [
    {
      "heading": "Choose the documents you are comparing",
      "paragraphs": [
        "Use the current itinerary and the latest supplier confirmations. Where an amendment is unresolved, identify it as pending rather than treating a request as a confirmed service.",
        "Keep a clear version date so the colleague doing the final check knows which document is intended for the client. A filename containing 'final' is not enough when several versions carry that label."
      ]
    },
    {
      "heading": "Compare the details that affect delivery",
      "paragraphs": [
        "Start with travel dates, hotel nights, traveller numbers and room arrangements. Then compare transport sectors, pickup times, meeting points and the scope of sightseeing services.",
        "Look for meaningful differences rather than identical wording. 'Airport transfer' and 'private arrival transfer' might describe the same booking, but they might also conceal an assumption about exclusivity that needs confirmation."
      ]
    },
    {
      "heading": "Follow one amendment through the whole trip",
      "paragraphs": [
        "Suppose a hotel moves to another part of the city. The accommodation section may be updated while the pickup address, arrival instructions and suggested evening programme still refer to the original location.",
        "Check every section affected by the change. The same approach applies when a flight changes, a rail sector is replaced or a guided visit moves to another day."
      ]
    },
    {
      "heading": "Separate an inclusion from a suggestion",
      "paragraphs": [
        "A named attraction can appear in a programme without its ticket being included. A restaurant recommendation can be mistaken for a meal reservation if the wording is vague.",
        "Make booked services, optional activities and independent suggestions easy to distinguish. The client should not have to infer payment responsibility from the layout of the page."
      ]
    },
    {
      "heading": "Hand over the unresolved points clearly",
      "paragraphs": [
        "Some details may still depend on a supplier update. Give those points a clear owner and a next action rather than burying them in a general disclaimer.",
        "Use AI-assisted review to help identify contradictions in the itinerary, but check the actual confirmations yourself. A review cannot establish that a booking exists merely because the document says it does."
      ]
    }
  ],
  "related": [
    {
      "href": "https://app.touraudit.com",
      "label": "Try the TourAudit free pilot"
    },
    {
      "href": "/what-touraudit-reviews",
      "label": "What TourAudit reviews"
    }
  ]
},
"prioritise-itinerary-review-findings": {
  "title": "Which Itinerary Findings Should You Fix First?",
  "seoTitle": "How to Prioritise Itinerary Review Findings | TourAudit",
  "description": "Separate operational problems, questions to verify and optional improvements so an itinerary review leads to useful decisions.",
  "category": "Professional judgment",
  "readTime": "4 min read",
  "publishDate": "2026-12-04T09:00:00+05:30",
  "intro": [
    "An itinerary review is useful when it helps a consultant decide what to do next. A long list of observations can have the opposite effect if a missed transfer and a minor wording suggestion receive the same attention.",
    "The first step is to judge each finding against the itinerary, the booking stage and what you already know about the client."
  ],
  "sections": [
    {
      "heading": "Deal with problems that could prevent the trip from working",
      "paragraphs": [
        "Start with contradictions and gaps that affect service delivery: an overnight stay that does not match the hotel allocation, a departure that conflicts with another booking, or an essential transfer with no workable arrangement.",
        "Confirm the evidence before changing the plan. If a review claims the night count is wrong, total the stays yourself. A confident explanation is not a substitute for a correct calculation."
      ]
    },
    {
      "heading": "Put important uncertainties in a verification list",
      "paragraphs": [
        "Some observations depend on information that may have changed or is not included in the document. Opening arrangements, access restrictions and service conditions may need confirmation from the relevant operator.",
        "Turn the observation into a specific question. 'Check the attraction' is less useful than identifying the intended visit date and the particular operating detail that needs confirmation. Do not present an unverified concern as an established error."
      ]
    },
    {
      "heading": "Judge improvements against the client's priorities",
      "paragraphs": [
        "A faster route is not automatically a better route. The client may have requested a stop, preferred a particular hotel or accepted a demanding day to see a priority attraction.",
        "Consider whether a suggestion improves this client's trip. If it removes something they value, there should be a clear reason to recommend it."
      ]
    },
    {
      "heading": "Do not add information just to satisfy the review",
      "paragraphs": [
        "A proposal and an operational handover serve different purposes. A missing driver contact in an early proposal may be entirely normal; a missing arrangement that prevents a confirmed transfer from working is a different matter.",
        "Add detail when it helps the reader make a decision or complete the journey. Avoid expanding the itinerary with generic warnings that distract from the points requiring action."
      ]
    },
    {
      "heading": "Finish with decisions, not an untouched findings list",
      "paragraphs": [
        "For each important observation, record a useful outcome: correct the itinerary, clarify the wording, ask the supplier, explain the limitation to the client, or accept the arrangement for a documented reason.",
        "TourAudit's observations support that process. They remain advisory, and the consultant makes the final decision using the booking evidence, current information and the traveller's needs."
      ]
    }
  ],
  "related": [
    {
      "href": "https://app.touraudit.com",
      "label": "Try the TourAudit free pilot"
    },
    {
      "href": "/what-touraudit-reviews",
      "label": "What TourAudit reviews"
    }
  ]
}
};
