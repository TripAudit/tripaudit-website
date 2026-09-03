import Image from "next/image";
import Link from "next/link";

const APP_URL = "https://app.touraudit.com";

export default function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <footer className={className}>
      <div className="footer-brand">
        <Image src="/touraudit-logo-horizontal.svg" alt="TourAudit" width={175} height={44} />
        <p>Itinerary quality control for travel professionals.</p>
      </div>
      <div>
        <strong>Explore</strong>
        <Link href="/how-it-works">How it works</Link>
        <Link href="/what-touraudit-reviews">What it reviews</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/faq">FAQ</Link>
      </div>
      <div>
        <strong>Company</strong>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <span>Privacy Policy — pending final review</span>
      </div>
      <div>
        <strong>Product</strong>
        <a href={APP_URL}>Open TourAudit</a>
        <span>Public beta</span>
      </div>
      <p className="copyright">© 2026 TourAudit. All rights reserved.</p>
    </footer>
  );
}
