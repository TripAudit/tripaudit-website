import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
