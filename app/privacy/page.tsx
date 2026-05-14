import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — HiveForge",
  description: "HiveForge privacy policy. How we collect, use and protect your data.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-hive-orange font-semibold text-sm mb-10 hover:underline"
        >
          ← Back to HiveForge
        </Link>

        <h1 className="text-4xl font-extrabold text-forge-black mb-2">Privacy Policy</h1>
        <p className="text-forge-black/40 text-sm mb-10">Last updated: May 2025</p>

        <div className="prose prose-sm max-w-none text-forge-black/70 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">1. Who we are</h2>
            <p>
              HiveForge is a trading name operated by Adule Grant, providing AI-assisted web design and digital marketing services to trades businesses in the South West UK. Our website address is{" "}
              <a href="https://hiveforge.co.uk" className="text-hive-orange hover:underline">
                hiveforge.co.uk
              </a>
              .
            </p>
            <p className="mt-2">Contact: adulegrant@hiveforge.co.uk</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">2. What data we collect</h2>
            <p>When you use the contact form on our website, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Your name</li>
              <li>Your phone number or email address</li>
              <li>Your trade and location</li>
              <li>Any additional message you provide</li>
            </ul>
            <p className="mt-3">
              We also collect standard server logs (IP address, browser type, pages visited) and, if you accept cookies, analytics data via Google Analytics 4.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">3. How we use your data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your enquiry and provide a free proposal</li>
              <li>To improve our website and services</li>
              <li>We do not sell or share your data with third parties for marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">4. Legal basis (UK GDPR)</h2>
            <p>
              We process your contact form data under <strong>legitimate interests</strong> — specifically, to respond to a business enquiry you initiated. Analytics data is processed only with your <strong>consent</strong>, which you can withdraw at any time by declining cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">5. Third-party services</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Resend</strong> — used to deliver contact form emails (resend.com privacy policy applies)
              </li>
              <li>
                <strong>Google Analytics 4</strong> — used for anonymous website analytics (only if you accept cookies)
              </li>
              <li>
                <strong>Tidio</strong> — AI chatbot widget (tidio.com privacy policy applies)
              </li>
              <li>
                <strong>Vercel</strong> — website hosting and serverless functions
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">6. Cookies</h2>
            <p>
              We use cookies for website analytics (Google Analytics 4). You can accept or decline cookies when you first visit our site. Declining cookies means no analytics data is collected. You can change your preference at any time by clearing your browser cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">7. Data retention</h2>
            <p>
              Contact form enquiries are retained for up to 12 months. If you become a client, project data is retained for the duration of our working relationship plus 2 years for legal compliance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">8. Your rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at adulegrant@hiveforge.co.uk. We will respond within 30 days. You also have the right to lodge a complaint with the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hive-orange hover:underline"
              >
                ICO (ico.org.uk)
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-forge-black mb-3">9. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be noted at the top of this page with an updated date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
