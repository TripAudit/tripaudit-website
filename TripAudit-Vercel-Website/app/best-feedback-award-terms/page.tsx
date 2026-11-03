import Link from "next/link";

export const metadata = {
  title: "Best Feedback Award Terms | TourAudit",
  description: "Eligibility, merit-based judging, prize, privacy and withdrawal conditions for the TourAudit Best Feedback Award.",
};

export default function AwardTermsPage() {
  return <main style={{maxWidth:760,margin:"0 auto",padding:"48px 24px",lineHeight:1.7}}>
    <p><Link href="/">← TourAudit home</Link></p>
    <h1>TourAudit Best Feedback Award — Terms</h1>
    <p>Organizer: TechPrompt Universe, P.O. Box 3398, Bengaluru, Karnataka 560035, India. Contact: <a href="mailto:admin@touraudit.com">admin@touraudit.com</a>.</p>
    <h2>Eligibility and entry</h2>
    <p>Open to residents of India aged 18 or older. Free and voluntary, with no purchase required. One eligible entry per person. Organizer staff, administrators and judges are excluded. Complete a TourAudit itinerary review, submit genuine feedback, and optionally select the Best Feedback Award checkbox within the feedback form. If participating, provide an email address and separate explicit consent to sharing the original itinerary, AI review and linked feedback. No keyword is required in the comment. Ordinary feedback does not require award participation.</p>
    <h2>Period</h2>
    <p>Entries close on 31 December 2026 at 11:59 PM IST. The opening date will be announced when entries are activated. Any extension will be reflected in these terms.</p>
    <h2>Selection</h2>
    <p>Two reviewers independently score eligible feedback for specificity (30%), actionable suggestions (40%) and relevance to improving TourAudit (30%). Positive and negative feedback are treated equally. Ties favour actionable suggestions, then relevance, then specificity, then the earlier eligible entry. No random selection.</p>
    <p>Judging is scheduled for 1–7 January 2027. The selected participant will be emailed on 8 January and have seven days to respond. If necessary, the next-ranked participant will be notified on 16 January with seven days to respond. If neither claims, the award remains unawarded.</p>
    <h2>Prize</h2>
    <p>One ₹1,000 digital Amazon Pay Gift Card, delivered by email by 27 January 2027 following eligibility verification. No claim fee. Issuer redemption and expiry conditions apply. Amazon does not organize or sponsor this award.</p>
    <h2>Privacy and withdrawal</h2>
    <p>With explicit consent, TourAudit stores the participant email, original itinerary, AI review, linked feedback reference and consent information to evaluate feedback, improve TourAudit and administer the award. This is not marketing-email consent. Do not share confidential traveller information. No participant identity or submitted content will be publicly disclosed.</p>
    <p>Participants may withdraw through their active review session or private withdrawal code, removing associated award data from active storage without deleting ordinary feedback. Award data is scheduled for manual deletion from active storage by 31 January 2027, subject to legally required retention; backup retention may differ. Privacy enquiries: <a href="mailto:admin@touraudit.com">admin@touraudit.com</a>.</p>
  </main>;
}
