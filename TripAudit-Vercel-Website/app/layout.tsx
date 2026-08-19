import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripAudit | Itinerary Quality Control for Travel Consultants",
  description: "Itinerary quality control for travel consultants. Catch itinerary problems before your client does.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/tripaudit-icon.svg",
    shortcut: "/tripaudit-icon.svg",
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
