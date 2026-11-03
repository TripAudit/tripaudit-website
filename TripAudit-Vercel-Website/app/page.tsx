import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import VoucherAnnouncement from "./components/VoucherAnnouncement";

const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <VoucherAnnouncement />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Itinerary quality control for travel professionals</p>
          <h1>Catch itinerary problems <em>before your client does.</em></h1>
          <p className="lead">TourAudit helps travel consultants review an itinerary before it reaches the client. It highlights possible gaps, timing conflicts, missing information and practical concerns that deserve a closer look.</p>
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
            <div className="report-foot">Consultant review required <span>TourAudit · Pilot</span></div>
          </div><div className="orbit orbit-one" /><div className="orbit orbit-two" />
        </div>
      </section>

      <section className="trust-strip"><p>Good itineraries need more than correct dates.</p><div><span>Timing</span><span>Logic</span><span>Completeness</span><span>Practicality</span></div></section>

      <section className="section intro" id="about">
        <div><p className="eyebrow">A second set of eyes</p><h2>Correct on paper.<br />Practical in real life.</h2></div>
        <div><p className="section-lead">A flight can be confirmed, a hotel can be booked and every date can match, yet the complete itinerary may still create a poor client experience.</p><p>Proofreading asks whether the document reads correctly. Itinerary quality control asks whether the journey works. Is there enough time after arrival? Do the services connect logically? Are important details missing? Does the programme match what the client has been promised?</p><p>TourAudit brings these questions into one pre-send review. The consultant keeps control of every final decision.</p><p><Link className="text-link" href="/why-touraudit">See how TourAudit differs from general AI tools <Arrow /></Link></p></div>
      </section>

      <section className="value-grid">
        <article><b>01</b><h3>Find gaps sooner</h3><p>Spot missing traveller ages, unclear rooming, incomplete transport details and vague inclusions before they lead to confusion.</p></article>
        <article><b>02</b><h3>Question the timing</h3><p>Look again at rushed arrival days, tight connections, back-to-back activities and plans with little margin for real travel conditions.</p></article>
        <article><b>03</b><h3>Protect the experience</h3><p>Consider the trip as a complete journey, not simply a set of correct bookings. Pace, movement and expectations all affect the traveller’s experience.</p></article>
      </section>

      <section className="section process" id="how">
        <div className="section-heading"><p className="eyebrow light">How it works</p><h2>Review before you send.</h2><p>One clear workflow. No extra complexity.</p></div>
        <ol>
          <li><span>1</span><div><h3>Paste the itinerary</h3><p>Add the client-facing itinerary text. Remove unnecessary personal details and include the trip information available to you.</p></div></li>
          <li><span>2</span><div><h3>Run the review</h3><p>TourAudit checks timing, sequence, completeness, service descriptions and overall practicality.</p></div></li>
          <li><span>3</span><div><h3>Read the findings</h3><p>Review each observation, the reason it matters and any limitation caused by missing information.</p></div></li>
          <li><span>4</span><div><h3>Apply your judgment</h3><p>Confirm live operating details, decide which findings matter, revise the itinerary where appropriate and send when you are satisfied.</p></div></li>
        </ol>
      </section>

      <section className="section reviews" id="reviews">
        <div className="section-heading"><p className="eyebrow">What it reviews</p><h2>The small details that shape the whole trip.</h2></div>
        <div className="review-list">
          <article><span>01</span><h3>Timing &amp; sequence</h3><p>Arrival-day plans, transfers, connections, fixed activities, pacing and the order in which destinations and services appear.</p></article>
          <article><span>02</span><h3>Completeness</h3><p>Traveller details, rooming, transport information, inclusions and arrangements that are missing, unclear or inconsistent.</p></article>
          <article><span>03</span><h3>Hotels &amp; location</h3><p>Stay dates, night counts, room information and whether the stated hotel location supports the daily programme.</p></article>
          <article><span>04</span><h3>Service clarity</h3><p>Private versus shared services, guide and ticket inclusions, meeting arrangements and wording that may create the wrong expectation.</p></article>
          <article><span>05</span><h3>Routing &amp; movement</h3><p>Intercity flow, transfer-day demands, repeated sectors, luggage movement and whether the final stay supports the departure plan.</p></article>
          <article><span>06</span><h3>Practicality</h3><p>Plans that may be technically possible but demanding, inconvenient or unsuitable for the travellers and trip described.</p></article>
        </div>
      </section>

      <section className="judgment"><div className="quote-mark">“</div><blockquote>TourAudit does not replace the consultant. It helps the consultant review with more consistency.</blockquote><p>You decide which observations matter, what needs to change and what is right for your client. Destination knowledge, live operational verification and final professional judgment remain yours.</p></section>

      <section className="section insights" id="insights">
        <div className="section-heading row"><div><p className="eyebrow">From the TourAudit desk</p><h2>Better itinerary thinking.</h2></div><Link className="text-link" href="/insights">View all insights <Arrow /></Link></div>
        <div className="article-grid">
          <article><div className="article-no">01</div><p>Quality control · 7 min</p><h3>How to Review a Travel Itinerary Before Sending It to a Client</h3><Link href="/insights/how-to-review-a-travel-itinerary-before-sending">Read article <Arrow /></Link></article>
          <article><div className="article-no">02</div><p>Checklist · 6 min</p><h3>10 Common Itinerary Problems Travel Consultants Should Check</h3><Link href="/insights/10-common-itinerary-problems">Read article <Arrow /></Link></article>
          <article><div className="article-no">03</div><p>Trip design · 5 min</p><h3>Why a Correct Itinerary Can Still Be Impractical</h3><Link href="/insights/why-correct-itineraries-can-be-impractical">Read article <Arrow /></Link></article>
        </div>
      </section>

      <section className="final-cta"><Image src="/touraudit-icon.svg" alt="" width={54} height={54} /><p className="eyebrow light">TourAudit · Controlled public pilot</p><h2>A more confident send starts with a better review.</h2><p>Paste itinerary text and run a structured check before your next itinerary reaches the client.</p><a className="button button-light" href="https://app.touraudit.com">Review an itinerary <Arrow /></a></section>
      <SiteFooter />
    </main>
  );
}
