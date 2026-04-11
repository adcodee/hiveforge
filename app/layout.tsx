import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiveForge — AI Websites for South West Trades | Live in 48 Hours",
  description:
    "Beehive-mind AI websites forged for South West trades. Plumbers, electricians & builders in Exeter, Devon, Cornwall & Bristol get a high-converting site live in 48 hours. 5–15 extra jobs per month.",
  keywords: [
    "AI websites for tradesmen",
    "website for plumbers Exeter",
    "website for electricians Devon",
    "trades website builder South West",
    "AI web design Cornwall",
    "tradesman website Bristol",
  ],
  openGraph: {
    title: "HiveForge — AI Websites for South West Trades",
    description:
      "High-converting AI websites for trades businesses. Live in 48 hours. 5–15 extra jobs per month.",
    type: "website",
    locale: "en_GB",
    url: "https://hiveforge.co.uk",
  },
  robots: { index: true, follow: true },
};

/* ---------- JSON-LD structured data for Local Business ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HiveForge",
  description:
    "AI-powered website design for South West UK trades businesses. Live in 48 hours.",
  url: "https://hiveforge.co.uk",
  areaServed: [
    { "@type": "City", name: "Exeter" },
    { "@type": "City", name: "Bristol" },
    { "@type": "AdministrativeArea", name: "Devon" },
    { "@type": "AdministrativeArea", name: "Cornwall" },
    { "@type": "AdministrativeArea", name: "Somerset" },
  ],
  founder: { "@type": "Person", name: "Adule" },
  priceRange: "££",
  serviceType: "Web Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
