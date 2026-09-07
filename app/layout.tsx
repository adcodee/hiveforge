import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiveForge — Software, web, design and AI",
  description:
    "HiveForge is a software, web development, design and AI agency. Websites, custom apps and backend systems. Live example: Patch Access.",
  keywords: [
    "software agency UK",
    "web development Wiltshire",
    "AI agency",
    "custom app development",
    "taxi booking software",
    "HiveForge",
  ],
  openGraph: {
    title: "HiveForge — Software, web, design and AI",
    description:
      "Websites, custom software and AI, built by HiveForge. See Patch Access live.",
    type: "website",
    locale: "en_GB",
    url: "https://hiveforge.co.uk",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/Icon-Logo.png',
  },
};

/* ---------- JSON-LD structured data for Local Business ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HiveForge",
  description:
    "Software, web development, design and AI. Websites, custom apps and backend systems.",
  url: "https://hiveforge.co.uk",
  areaServed: { "@type": "Country", name: "United Kingdom" },
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
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white antialiased">
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
