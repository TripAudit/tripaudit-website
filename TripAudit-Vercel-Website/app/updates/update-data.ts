export const professionalUpdate = {
  date: "17 November 2026",
  publishDate: "2026-11-17T00:00:00+05:30",
  title: "Introducing TourAudit Professional: 50 itinerary reviews for US$5",
  description: "Google sign-in, an account allowance and 50 itinerary reviews valid for 30 days from manual activation. No automatic charges.",
  href: "/updates/touraudit-professional",
};

export const updates = [
  professionalUpdate,
  {
    date: "10 November 2026",
    publishDate: "2026-11-10T00:00:00+05:30",
    title: "TourAudit’s free pilot introduces a structured second check for travel itineraries",
    description: "Travel professionals can submit an itinerary for an advisory operational review before sending it to a client.",
    href: "/updates/free-pilot-itinerary-review",
  },
];

export function isUpdatePublished(update: { publishDate: string }, now = new Date()): boolean {
  return new Date(update.publishDate).getTime() <= now.getTime();
}

export function getPublishedUpdates(now = new Date()) {
  return updates.filter((update) => isUpdatePublished(update, now));
}
