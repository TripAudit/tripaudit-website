import Image from "next/image";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Itinerary quality control for travel professionals</p>
          <h1>Catch itinerary problems <em>before your client does.</em></h1>
          <p className="lead">TourAudit gives travel consultants a structured second review—highlighting missing details, potential conflicts and practical concerns before an itinerary is sent.</p>
          <div className="hero-actions"><a className="button" href="https://app.touraudit.com">Review an itinerary <Arrow /></a><a className="text-link" href="/how-it-works">See how it works ↓</a></div>
          <p className="microcopy"><span>✓</span> Built for professional judgment &nbsp; <span>✓</span> Your itinerary stays under your control</p>
        </div>
        <div className="report-wrap" aria-label="Example TourAudit review report">
          <div className="report">
            <div className="report-top"><div><small>TOURAUDIT REVIEW</small><strong>Japan · 8 days</strong></div><span className="status">Review ready</span></div>
            <div className="summary"><div className="score">3</div><div><strong>items to review</strong><p>Before this itinerary goes to your client</p></div></div>
            <div className="finding warn"><span>!</span><div><strong>Arrival day may be too ambitious</strong><p>Landing at 15:40 leaves limited time for a 17:30 guided activity.</p></div></div>
            <div className="finding notice"><span>i</span><div><strong>Traveller ages are missing</strong><p>Add ages to assess rooming and activity suitability.</p></div></div>
            <div className="finding pass"><span>✓</span><div><strong>Hotel nights align</strong><p>Check-in and check-out dates match the daily plan.</p></div></div>
            <div className="report-foot">Consultant review required <span>TourAudit · Beta</span></div>
          </div><div className="orbit orbit-one" /><div className="orbit orbit-two" />
        </div>
      </section>

      <section className="trust-strip"><p>Good itineraries need more than correct dates.</p><div><span>Timing</span><span>Logic</span><span>Completeness</span><span>Practicality</span></div></section>

      <section className="section intro" id="about">
        <div><p className="eyebrow">A second set of eyes</p><h2>Correct on paper.<br />Practical in real life.</h2></div>
        <div><p className="section-lead">A flight can be confirmed, a hotel can be booked and every date can match—yet the itinerary may still create a poor client experience.</p><p>TourAudit helps you spot potential gaps, conflicts and practical concerns that are easy to miss when deadlines are tight and trips are complex.</p></div>
      </section>

      <section className="value-grid">
        <article><b>01</b><h3>Find gaps sooner</h3><p>Surface missing traveller details, unclear transfers and incomplete arrangements before handover.</p></article>
        <article><b>02</b><h3>Question the timing</h3><p>Notice rushed arrival days, awkward connections and plans that leave too little margin.</p></article>
        <article><b>03</b><h3>Protect the experience</h3><p>Review the itinerary as a journey—not just a collection of individually correct bookings.</p></article>
      </section>

      <section className="section process" id="how">
        <div className="section-heading"><p className="eyebrow light">How it works</p><h2>Review before you send.</h2><p>One clear workflow. No extra complexity.</p></div>
        <ol>
          <li><span>1</span><div><h3>Add the itinerary</h3><p>Upload or paste the client itinerary you want to review.</p></div></li>
          <li><span>2</span><div><h3>Run the audit</h3><p>TourAudit examines the trip for potential quality-control concerns.</p></div></li>
          <li><span>3</span><div><h3>Review the findings</h3><p>See concise observations with the context needed to assess them.</p></div></li>
          <li><span>4</span><div><h3>Apply your judgment</h3><p>Decide what matters, make changes and send with greater confidence.</p></div></li>
        </ol>
      </section>

      <section className="section reviews" id="reviews">
        <div className="section-heading"><p className="eyebrow">What it reviews</p><h2>The small details that shape the whole trip.</h2></div>
        <div className="review-list">
          <article><span>01</span><h3>Timing &amp; sequence</h3><p>Arrival days, transfers, connections, pacing and the order of the journey.</p></article>
          <article><span>02</span><h3>Completeness</h3><p>Traveller information, inclusions, arrangements and details that need clarification.</p></article>
          <article><span>03</span><h3>Hotels &amp; location</h3><p>Stay dates, night counts and whether the location supports the daily plan.</p></article>
          <article><span>04</span><h3>Practicality</h3><p>Plans that may be technically possible but demanding, inconvenient or unrealistic.</p></article>
        </div>
      </section>

      <section className="judgment"><div className="quote-mark">“</div><blockquote>TourAudit does not replace the consultant. It helps the consultant review with more consistency.</blockquote><p>You decide which observations matter, what needs to change and what is right for your client. Destination knowledge, live operational verification and final professional judgment remain yours.</p></section>

      <section className="section insights" id="insights">
        <div className="section-heading row"><div><p className="eyebrow">From the TourAudit desk</p><h2>Better itinerary thinking.</h2></div><a className="text-link" href="/insights">View all insights <Arrow /></a></div>
        <div className="article-grid">
          <article><div className="article-no">01</div><p>Quality control · 7 min</p><h3>How to Review a Travel Itinerary Before Sending It to a Client</h3><a href="/insights/how-to-review-a-travel-itinerary-before-sending">Read article <Arrow /></a></article>
          <article><div className="article-no">02</div><p>Checklist · 6 min</p><h3>10 Common Itinerary Problems Travel Consultants Should Check</h3><a href="/insights/10-common-itinerary-problems">Read article <Arrow /></a></article>
          <article><div className="article-no">03</div><p>Trip design · 5 min</p><h3>Why a Correct Itinerary Can Still Be Impractical</h3><a href="/insights/why-correct-itineraries-can-be-impractical">Read article <Arrow /></a></article>
        </div>
      </section>

      <section className="final-cta"><Image src="/touraudit-icon.svg" alt="" width={54} height={54} /><p className="eyebrow light">TourAudit · Public beta</p><h2>A more confident send starts with a better review.</h2><p>Run a structured check before your next itinerary reaches the client.</p><a className="button button-light" href="https://app.touraudit.com">Review an itinerary <Arrow /></a></section>
      <SiteFooter />
    </main>
  );
}
