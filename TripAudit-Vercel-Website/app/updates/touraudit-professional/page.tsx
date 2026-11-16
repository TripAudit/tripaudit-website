import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentPage from "../../components/ContentPage";
import { isUpdatePublished, professionalUpdate } from "../update-data";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  if (!isUpdatePublished(professionalUpdate)) notFound();
  return {
    title: "TourAudit Professional: 50 Reviews for US$5 | TourAudit",
    description: professionalUpdate.description,
    alternates: { canonical: professionalUpdate.href },
    openGraph: {
      type: "article",
      title: professionalUpdate.title,
      description: professionalUpdate.description,
      url: professionalUpdate.href,
      publishedTime: professionalUpdate.publishDate,
    },
  };
}

export default function ProfessionalUpdate() {
  if (!isUpdatePublished(professionalUpdate)) notFound();
  return (
    <ContentPage eyebrow="Product update · 17 November 2026"
      title={professionalUpdate.title}
      introduction="TourAudit Professional is available for travel consultants who want a dedicated allowance for regular itinerary reviews.">
      <section>
        <h2>50 reviews, valid for 30 days</h2>
        <p>The Professional plan costs US$5 and provides 50 itinerary reviews for 30 days from manual activation. Unused credits expire at the end of the period.</p>
        <p>Each successfully completed Professional review uses one credit. Failed reviews do not permanently consume credits. Existing rate limits and AI spending controls still apply.</p>
      </section>
      <section>
        <h2>Google sign-in and your account</h2>
        <p>Sign in with Google to request a subscription. Your account shows your subscription status, remaining reviews, activation date and expiry date. You can also request renewal there.</p>
        <p>We use your Google identity and verified email for account administration. We do not request access to Gmail, Google Drive or contacts.</p>
      </section>
      <section>
        <h2>Manual payments and activation</h2>
        <p>After you submit a request, we send a payment link manually. Your allowance starts only after payment has been independently verified and your subscription is activated.</p>
        <p>Requests and payment verification are reviewed daily. Payment links and activation may take longer than 24 hours. Submitting a request does not charge you.</p>
        <p>Renewals are manual. There are no automatic renewals or recurring charges.</p>
      </section>
      <section>
        <h2>The free pilot remains available</h2>
        <p>You can continue using the free pilot without Google sign-in, subject to its existing shared allowances. Professional reviews use the same itinerary-review process, with credits assigned to your account.</p>
        <p>TourAudit provides AI-assisted operational observations. It does not replace destination knowledge, current supplier checks or your professional judgment.</p>
      </section>
      <section>
        <h2>Request TourAudit Professional</h2>
        <p><a href="https://app.touraudit.com/subscription">View the plan and request a subscription</a>, or <a href="https://app.touraudit.com/account">open your account</a>.</p>
        <p>Before paying, read our <Link href="/subscription-refund-policy">Subscription and Refund Policy</Link>.</p>
        <p><Link href="/updates">All product updates</Link></p>
      </section>
    </ContentPage>
  );
}
