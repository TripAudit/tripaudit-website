import Image from "next/image";
import Link from "next/link";

const APP_URL = "https://app.touraudit.com";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="TourAudit home">
        <Image src="/touraudit-logo-horizontal.svg" alt="TourAudit" width={180} height={45} priority />
        <span>Beta</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/how-it-works">How it works</Link>
        <Link href="/what-touraudit-reviews">What it reviews</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <a className="button button-small" href={APP_URL}>
        Review an itinerary <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}
