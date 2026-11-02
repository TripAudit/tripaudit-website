import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://touraudit.com"),
  title: "TourAudit | Itinerary Quality Control for Travel Consultants",
  description: "TourAudit helps travel consultants identify potential itinerary gaps, conflicts and practical concerns before an itinerary reaches the client.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "TourAudit",
    title: "TourAudit | Itinerary Quality Control for Travel Consultants",
    description: "A structured second review for travel consultants before an itinerary reaches the client.",
  },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  icons: {
    icon: "/touraudit-icon.svg",
    shortcut: "/touraudit-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://touraudit.com/#organization",
        name: "TourAudit",
        url: "https://touraudit.com",
        logo: "https://touraudit.com/touraudit-logo-horizontal.svg",
        email: "hello@touraudit.com",
        description: "TourAudit provides AI-assisted itinerary quality control for travel consultants.",
      },
      {
        "@type": "WebSite",
        "@id": "https://touraudit.com/#website",
        url: "https://touraudit.com",
        name: "TourAudit",
        publisher: { "@id": "https://touraudit.com/#organization" },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
