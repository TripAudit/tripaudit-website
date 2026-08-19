import type { Metadata } from "next"; import Link from "next/link"; import { articles } from "./article-data";
export const metadata: Metadata={title:"Travel Itinerary Review Insights | TripAudit",description:"Practical itinerary quality-control guidance for travel consultants."};
const cards=[
 ["how-to-review-a-travel-itinerary-before-sending","01"],
 ["10-common-itinerary-problems","02"],
 ["why-correct-itineraries-can-be-impractical","03"]
];
export default function Insights(){return <main className="insights-page"><header className="site-header"><Link className="brand" href="/"><img src="/tripaudit-logo-horizontal.svg" alt="TripAudit"/><span>Beta</span></Link><nav><Link href="/#how">How it works</Link><Link href="/#reviews">What it reviews</Link><Link href="/insights">Insights</Link><Link href="/#about">About</Link></nav><a className="button button-small" href="https://app.domain.com">Review an itinerary →</a></header><section className="insights-hero"><p className="eyebrow">From the TripAudit desk</p><h1>Better itinerary thinking.</h1><p>Practical guidance for reviewing trip flow, timings, hotels, transfers and client expectations.</p></section><section className="article-grid insights-list">{cards.map(([slug,no])=>{const a=articles[slug];return <article key={slug}><div className="article-no">{no}</div><p>{a.category} · {a.readTime}</p><h2>{a.title}</h2><Link href={`/insights/${slug}`}>Read article →</Link></article>})}</section></main>}
