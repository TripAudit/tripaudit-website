import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Subscription and Refund Policy | TourAudit",
  description: "TourAudit Professional subscription terms, manual renewal, cancellations, refunds and grievance contact.",
  alternates: { canonical: "/subscription-refund-policy" },
  openGraph: {
    title: "Subscription and Refund Policy | TourAudit",
    description: "Terms for the US$5 Professional plan: 50 reviews for 30 days, with manual payment and activation.",
    url: "/subscription-refund-policy",
  },
};

export default function SubscriptionRefundPolicy() {
  return (
    <ContentPage eyebrow="TourAudit Professional" title="Subscription, Cancellation and Refund Policy"
      introduction="TourAudit is operated by TechPrompt Universe. This policy applies to TourAudit Professional.">
      <p>Effective date: 16 November 2026</p>
      <section>
        <h2>Subscription plan</h2>
        <p>TourAudit Professional costs US$5 and includes 50 itinerary reviews, valid for 30 days from manual activation.</p>
        <p>Your account displays your activation date, expiry date and remaining credits. Unused credits expire at the end of the subscription period and do not carry forward.</p>
      </section>
      <section>
        <h2>Subscription requests and payment</h2>
        <p>Sign in with Google to request a subscription. Submitting a request does not charge you or activate your plan.</p>
        <p>We review requests manually and send a payment link. Your subscription starts only after we independently verify receipt of payment and activate your account.</p>
        <p>Requests are reviewed daily. Payment links and activation may take longer than 24 hours. Your 30-day validity starts at activation, rather than when you submit the request or make payment.</p>
        <p>The total amount payable, including any applicable taxes or charges collected by us, will be disclosed before payment. Your payment provider may apply currency-conversion or other charges.</p>
      </section>
      <section>
        <h2>Review credits</h2>
        <p>One successfully completed Professional review uses one credit. Failed reviews do not permanently consume credits. A review in progress temporarily reserves one credit.</p>
        <p>If a credit is deducted but your report does not arrive, contact us with the review reference displayed in your account. Following investigation, an eligible credit may be restored once to its original subscription period. Restoring a credit does not automatically extend its expiry. Issues involving expired periods will be considered separately.</p>
        <p>Existing request limits, security controls and AI spending controls continue to apply. A subscription does not provide unlimited or unrestricted access.</p>
        <p>Professional credits are associated with your authenticated account. The free pilot remains separate and uses its existing allowances.</p>
      </section>
      <section>
        <h2>Manual renewal</h2>
        <p>Your subscription does not renew automatically. TourAudit does not make automatic or recurring charges.</p>
        <p>To continue after your credits are used or your subscription expires, request a renewal through your account. Each renewal requires payment verification and manual activation, providing a fresh allowance of 50 reviews for 30 days. Unused credits from an earlier period do not transfer.</p>
      </section>
      <section>
        <h2>Scope of the service</h2>
        <p>TourAudit provides AI-assisted operational observations about the itinerary you submit. Reviews may contain errors or omissions and do not guarantee that every issue will be identified.</p>
        <p>You remain responsible for checking bookings, timings, supplier arrangements, entry requirements and other travel details before relying on a report.</p>
      </section>
      <section>
        <h2>Cancellation before payment</h2>
        <p>You may withdraw a subscription request without charge by emailing <a href="mailto:admin@touraudit.com">admin@touraudit.com</a> from your registered account email address.</p>
      </section>
      <section>
        <h2>Cancellation after payment, before activation</h2>
        <p>If you cancel before activation, we will refund your subscription payment after verifying the transaction.</p>
      </section>
      <section>
        <h2>Cancellation after activation</h2>
        <p>You may choose not to renew at any time. Unless you request earlier closure, your existing access continues until your credits are used or your subscription expires.</p>
        <p>We do not normally offer refunds for a change of mind after activation, partial use, or credits that expire unused.</p>
        <p>This does not restrict your rights where the service is faulty, unavailable, materially different from what was promised, or where applicable law requires a remedy.</p>
      </section>
      <section>
        <h2>Payment mistakes and service problems</h2>
        <p>Contact us about duplicate payments, incorrect charges, payment received without activation, or a material service failure.</p>
        <p>We will investigate and arrange an appropriate remedy, which may include activation, credit correction, an extension or a refund.</p>
        <p>A restored review credit is separate from a monetary refund.</p>
      </section>
      <section>
        <h2>Requesting a refund</h2>
        <p>Email <a href="mailto:admin@touraudit.com">admin@touraudit.com</a> from your registered account email address. Include your payment reference and a brief explanation of the request.</p>
        <p>Do not send passwords, full card numbers, bank-login details or unnecessary personal information.</p>
        <p>Approved refunds will be processed within 10–15 business days from the date of approval, normally through the original payment method. Your bank or payment provider may take additional time to reflect the amount. Any shorter timeframe required by applicable law will take precedence.</p>
      </section>
      <section>
        <h2>Complaints and grievances</h2>
        <p>TourAudit is operated by TechPrompt Universe.</p>
        <p>Address: 537, Wondermark, Aerocity, Delhi</p>
        <p>Grievance contact: Santosh</p>
        <p>Email: <a href="mailto:admin@touraudit.com">admin@touraudit.com</a></p>
        <p>For subscription queries, cancellations, refunds or grievances, email us from your registered account email address. Include the relevant subscription, payment or review reference and a brief description of the issue.</p>
        <p>We will acknowledge complaints within 48 hours and aim to resolve them within one month, subject to any stricter applicable legal requirements.</p>
      </section>
      <section>
        <h2>Changes to this policy</h2>
        <p>Any changes will be published on this page with an updated effective date. Changes to price or allowance will apply to future purchases and renewals, without reducing an already activated subscription’s allowance or validity.</p>
      </section>
      <section>
        <h2>Your statutory rights</h2>
        <p>Nothing in this policy limits rights or remedies available under applicable consumer law.</p>
      </section>
    </ContentPage>
  );
}
