// This award is a review-only draft. Production activation requires a
// separate founder-authorized change after email entry and approved award terms exist.
export function isVoucherPreview(environment: {
  vercelEnv?: string;
  nodeEnv?: string;
}) {
  if (environment.vercelEnv === "production") return process.env.TOURAUDIT_AWARD_PUBLIC === "enabled";
  return environment.vercelEnv === "preview" || environment.nodeEnv === "development";
}

export default function VoucherAnnouncement() {
  if (!isVoucherPreview({
    vercelEnv: process.env.VERCEL_ENV,
    nodeEnv: process.env.NODE_ENV,
  })) return null;

  return (
    <aside className="voucher-announcement" aria-labelledby="voucher-heading">
      <div className="voucher-icon" aria-hidden="true">🎁</div>
      <div className="voucher-copy">
        <p className="voucher-draft">{process.env.VERCEL_ENV === "production" ? "Best Feedback Award" : "Preview only · Award not open"}</p>
        <h2 id="voucher-heading">TourAudit Best Feedback Award</h2>
        <p className="voucher-intro">Help us improve TourAudit!</p>
        <p>Amazon Gift Voucher award</p>
        <p>Review an itinerary, share your genuine feedback, and mention <strong>&quot;amazon feedback&quot;</strong> in your comment.</p>
        <p>Want to participate? You may voluntarily provide your email address when submitting feedback.</p>
        <p>The TourAudit team will select feedback based on its usefulness, actionable suggestions and relevance to improving TourAudit.</p>
        <p className="voucher-date">Last date: <time dateTime="2026-12-31">31 December 2026</time></p>
        <p className="voucher-fineprint">Participation is free and optional. Positive and negative feedback are equally welcome.</p>
        <p className="voucher-fineprint"><a href="/best-feedback-award-terms">Read award terms</a>.</p>
        {process.env.VERCEL_ENV !== "production" && <p className="voucher-preview-note">Draft announcement for review. Award entry must be active before publication.</p>}
      </div>
      <a className="button voucher-cta" href="https://app.touraudit.com">Try TourAudit <span aria-hidden="true">→</span></a>
    </aside>
  );
}
