import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Self-hosted via next/font instead of a CSS @import from
// fonts.googleapis.com - the @import was render-blocking and added an
// avoidable network round-trip on a site whose whole pitch is page speed.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiveforge.co.uk"),
  title: "HiveForge — Software, web, design and AI",
  description:
    "HiveForge is a South West UK software, web development, design and AI agency. Websites, custom apps and backend systems. Live example: Patch Access.",
  keywords: [
    "software agency South West UK",
    "web development Wiltshire",
    "web design Salisbury",
    "AI agency Wiltshire",
    "custom app development South West",
    "HiveForge",
  ],
  openGraph: {
    title: "HiveForge — Software, web, design and AI",
    description:
      "Websites, custom software and AI, built by HiveForge. See Patch Access live.",
    type: "website",
    locale: "en_GB",
    url: "https://hiveforge.co.uk",
    siteName: "HiveForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "HiveForge — Software, web, design and AI",
    description:
      "Websites, custom software and AI, built by HiveForge. See Patch Access live.",
  },
  robots: { index: true, follow: true },
  // app/icon.png + app/apple-icon.png (Next.js file convention) generate the
  // right <link> tags automatically - the old manual entry pointed straight
  // at the raw 2000x2000, 1.3MB source logo as the favicon.
};

/* ---------- JSON-LD structured data for Local Business ----------
   South West UK is the real target market (per agency brief); "United
   Kingdom" as areaServed was too broad to carry any local-search weight -
   Google's local ranking signals discount country-level scope almost
   entirely. Town list matches the original brief's Phase 4 priority order,
   still true after the broader software/web/design/AI service pivot -
   the pivot changed WHAT HiveForge sells, not WHERE. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HiveForge",
  description:
    "Software, web development, design and AI. Websites, custom apps and backend systems.",
  url: "https://hiveforge.co.uk",
  areaServed: [
    { "@type": "City", name: "Salisbury" },
    { "@type": "City", name: "Warminster" },
    { "@type": "City", name: "Trowbridge" },
    { "@type": "City", name: "Bath" },
    { "@type": "City", name: "Andover" },
    { "@type": "City", name: "Amesbury" },
    { "@type": "City", name: "Devizes" },
    { "@type": "AdministrativeArea", name: "Wiltshire" },
    { "@type": "AdministrativeArea", name: "South West England" },
  ],
  founder: { "@type": "Person", name: "Adule" },
  priceRange: "££",
  serviceType: ["Software Development", "Web Design", "AI"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`scroll-smooth ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white antialiased font-body">
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
