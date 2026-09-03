import type { Metadata } from "next"; import Link from "next/link"; import { articles } from "./article-data"; import SiteHeader from "../components/SiteHeader"; import SiteFooter from "../components/SiteFooter";
export const metadata: Metadata={title:"Travel Itinerary Review Insights | TourAudit",description:"Practical itinerary quality-control guidance for travel consultants.",alternates:{canonical:"/insights"},openGraph:{title:"Travel Itinerary Review Insights | TourAudit",description:"Practical itinerary quality-control guidance for travel consultants.",url:"/insights"}};
const cards=[
 ["how-to-review-a-travel-itinerary-before-sending","01"],
 ["10-common-itinerary-problems","02"],
 ["why-correct-itineraries-can-be-impractical","03"]
];
export default function Insights(){return <main className="insights-page"><SiteHeader/><section className="insights-hero"><p className="eyebrow">From the TourAudit desk</p><h1>Better itinerary thinking.</h1><p>Practical guidance for reviewing trip flow, timings, hotels, transfers and client expectations.</p></section><section className="article-grid insights-list">{cards.map(([slug,no])=>{const a=articles[slug];return <article key={slug}><div className="article-no">{no}</div><p>{a.category} · {a.readTime}</p><h2>{a.title}</h2><Link href={`/insights/${slug}`}>Read article →</Link></article>})}</section><SiteFooter/></main>}
