import Link from "next/link";

export const metadata = {
  title: "Best Feedback Award | TourAudit",
  description: "Learn about the TourAudit Best Feedback Award, eligibility, selection, prize, privacy and withdrawal.",
};

const sectionStyle = { marginTop: 32 };
export default function BestFeedbackAwardPage() {
  return <main style={{maxWidth:800,margin:"0 auto",padding:"48px 24px 72px",lineHeight:1.75}}>
    <p><Link href="/">← TourAudit home</Link></p>
    <p style={{fontWeight:700,letterSpacing:".08em",fontSize:13,textTransform:"uppercase",marginTop:32}}>Feedback recognition</p>
    <h1 style={{fontSize:"clamp(2rem,5vw,3.25rem)",lineHeight:1.12,margin:"12px 0 20px"}}>🎁 TourAudit Best Feedback Award</h1>
    <p style={{fontSize:19}}>Your experience can help make TourAudit more useful for travel professionals. Share thoughtful feedback for consideration for an Amazon gift voucher.</p>
    <div style={{background:"#f1f5f9",borderRadius:16,padding:"20px 24px",marginTop:28}}>
      <strong>₹1,000 Amazon Pay Gift Card</strong>
      <p>One merit-based award. Free and voluntary participation for eligible Indian residents aged 18 or older. Positive and negative feedback are equally welcome.</p>
      <p><strong>Closing date:</strong> 31 December 2026, 11:59 PM IST. The organizer may announce an extension with updated terms.</p>
      <a href="https://app.touraudit.com" style={{display:"inline-block",padding:"11px 18px",background:"#312e81",color:"#fff",borderRadius:9,textDecoration:"none",fontWeight:600}}>Review an itinerary</a>
    </div>
    <section style={sectionStyle}><h2>How to participate</h2>
      <p>Run a TourAudit itinerary review and submit genuine feedback. Participation in the award is optional; ordinary feedback is available without sharing an email or itinerary for the award.</p>
      <p>In the feedback form, select the optional <strong>TourAudit Best Feedback Award</strong> checkbox. If you choose to participate, provide your email address and separately consent to sharing your original itinerary, AI review and feedback for product improvement and award administration. Use the same Submit Feedback button. You do not need to type a special keyword in your comment.</p>
      <p>Please remove traveller names, contact details, booking references and other confidential information before sharing. Do not submit material you are not authorized to disclose.</p>
    </section>
    <section style={sectionStyle}><h2>How feedback is selected</h2>
      <p>Two reviewers independently assess eligible entries using specificity (30%), actionable suggestions (40%) and relevance to improving TourAudit (30%). Positive and negative feedback are treated equally. Ties favour actionable suggestions, then relevance, then specificity, then the earlier eligible entry. This is not a random draw.</p>
      <p>Judging is scheduled for 1–7 January 2027. The selected participant is notified on 8 January and has seven days to respond. If necessary, the next-ranked participant is notified on 16 January and has seven days. If neither claims, the award remains unawarded.</p>
    </section>
    <section style={sectionStyle}><h2>Prize and delivery</h2>
      <p>One ₹1,000 digital Amazon Pay Gift Card will be emailed by 27 January 2027 after eligibility confirmation. There is no claim fee. Issuer redemption and expiry conditions apply. Amazon does not organize or sponsor this award.</p>
    </section>
    <section style={sectionStyle}><h2>Privacy and withdrawal</h2>
      <p>With explicit consent, TechPrompt Universe stores the participant's email, original itinerary, AI review, linked feedback reference and consent information for improving TourAudit, evaluating entries and administering the award. Award participation is not marketing-email consent. Participant identities and submitted content are not published.</p>
      <p>You may withdraw using the private withdrawal code provided with your entry or, while authorized, through your review session. <a href="https://app.touraudit.com/award-withdrawal">Withdraw an award entry</a>. Withdrawal removes associated award data from active storage without deleting ordinary feedback.</p>
      <p>Award records are scheduled for manual deletion from active storage by 31 January 2027, subject to legally required retention. Provider backup retention may differ. Privacy enquiries: <a href="mailto:admin@touraudit.com">admin@touraudit.com</a>.</p>
    </section>
    <section style={sectionStyle}><h2>Eligibility and organizer</h2>
      <p>Open to residents of India aged 18 or older. No purchase or entry fee. One eligible entry per person. Employees of the organizer and those administering or judging the award are excluded.</p>
      <p><strong>Organizer:</strong> TechPrompt Universe, P.O. Box 3398, Bengaluru, Karnataka 560035, India.</p>
      <p><Link href="/best-feedback-award-terms">Read the full award terms</Link>.</p>
    </section>
  </main>;
}
