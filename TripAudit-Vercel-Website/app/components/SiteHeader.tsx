"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const APP_URL = "https://app.touraudit.com";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape") closeMenu();
    }}>
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
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
        <span>{menuOpen ? "Close" : "Menu"}</span>
      </button>
      <nav id="mobile-navigation" className={`mobile-navigation${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/how-it-works" onClick={closeMenu}>How It Works</Link>
        <Link href="/what-touraudit-reviews" onClick={closeMenu}>What TourAudit Reviews</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/faq" onClick={closeMenu}>FAQ</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <a className="button mobile-cta" href={APP_URL} onClick={closeMenu}>Review an itinerary <span aria-hidden="true">→</span></a>
      </nav>
    </header>
  );
}
