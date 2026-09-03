import type { MetadataRoute } from "next";

const routes = [
  "",
  "/how-it-works",
  "/what-touraudit-reviews",
  "/about",
  "/faq",
  "/contact",
  "/insights",
  "/insights/how-to-review-a-travel-itinerary-before-sending",
  "/insights/10-common-itinerary-problems",
  "/insights/why-correct-itineraries-can-be-impractical",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://touraudit.com${route}` }));
}
