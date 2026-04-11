# HiveForge — Agency Website

## Executive Strategy Summary

**Goal:** Convert South West trades business owners into HiveForge clients by demonstrating the exact quality, speed, and conversion power we deliver.

**Why this design converts:**

1. **Instant credibility** — The site itself IS the proof. Trades owners see a fast, mobile-first, professional site and think "I want this for my business."
2. **Objection elimination** — Transparent pricing (no "contact us for a quote"), transparent process (How It Works shows the exact AI methodology), realistic results (5–15 jobs, not "10x your revenue").
3. **Urgency without hype** — "48 hours" is the recurring anchor. Every CTA reinforces speed and simplicity.
4. **Mobile-first psychology** — Trades owners browse on phones between jobs. The floating call button, emergency CTA patterns, and thumb-friendly layout match their real usage.
5. **Hive + Forge brand story** — Memorable metaphor that positions AI as instinctive (not scary) and output as crafted (not cheap).
6. **Multiple conversion paths** — Hero CTA, floating button, inline form, pricing CTAs, "Reply YES" close. Every scroll depth has an exit to conversion.

---

## Folder Structure

```
hiveforge/
├── app/
│   ├── globals.css          # Tailwind + custom styles, honeycomb bg, animations
│   ├── layout.tsx           # Root layout, SEO metadata, JSON-LD schema
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── Navbar.tsx           # Fixed nav with mobile menu
│   ├── Hero.tsx             # Main headline, CTAs, trust pills
│   ├── BrandStory.tsx       # Hive + Forge methodology cards
│   ├── HowItWorks.tsx       # 4-step AI process breakdown
│   ├── Results.tsx          # Stats grid (jobs/month, speed, etc.)
│   ├── Pricing.tsx          # 3-tier comparison (Core, Growth, Full)
│   ├── Testimonials.tsx     # Placeholder testimonials
│   ├── ContactForm.tsx      # Lead capture form with "Reply YES" CTA
│   ├── Footer.tsx           # Footer with links and local areas
│   └── FloatingCTA.tsx      # Fixed floating call button
├── public/                  # Static assets (logo, images)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── package.json
└── README.md
```

---

## Deployment Instructions

### 1. Push to GitHub

```bash
cd hiveforge
git init
git add .
git commit -m "Initial HiveForge site"
gh repo create hiveforge --public --source=. --push
# or push manually to your GitHub repo
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → "Add New Project"
2. Import the `hiveforge` GitHub repo
3. Framework preset: **Next.js** (auto-detected)
4. Click **Deploy** — live in ~60 seconds
5. Custom domain: Add `hiveforge.co.uk` in Vercel dashboard → Domains

### 3. Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Next Steps for Adule

### Immediate (before launch)
- [ ] Replace placeholder phone number in `FloatingCTA.tsx` with real number
- [ ] Add HiveForge logo image to `/public/logo.png` and update Navbar
- [ ] Connect contact form to a backend (options below)
- [ ] Replace placeholder testimonials with real client quotes
- [ ] Add real before/after portfolio screenshots

### Form handler options
- **Formspree** — Easiest. Sign up, get endpoint, replace form `onSubmit` with `fetch` to Formspree URL
- **Next.js API route** — Create `app/api/contact/route.ts` that sends email via Resend/SendGrid
- **Netlify Forms** — If deploying on Netlify instead of Vercel

### Post-launch integrations
- [ ] **Tidio chatbot** — Paste script tag in `layout.tsx` `<head>` for AI chatbot
- [ ] **Google Analytics 4** — Add GA4 script to `layout.tsx`, or use `@next/third-parties`
- [ ] **Google Search Console** — Verify domain, submit sitemap
- [ ] **Google Business Profile** — Link website, add service areas

### Performance checklist
- [ ] Run Lighthouse audit — target 95+ on all metrics
- [ ] Add `loading="lazy"` to any images below the fold
- [ ] Test on real mobile devices (iPhone SE, Android mid-range)
- [ ] Verify JSON-LD schema with Google Rich Results Test

---

## Using This Site to Close Clients

### The demo pitch
> "This is our own site. It was built using the exact same AI system we'll use for yours. Notice how fast it loads, how the call button follows you, how every section builds trust. Your site will work the same way — but for YOUR trade, YOUR area, YOUR customers. And it'll be live in 48 hours."

### Upsell path
1. **Core Website (£497)** — Get them in the door. The site sells itself.
2. **Growth Retainer (£97/mo)** — "Want the chatbot that answers at 2 AM? Want to show up on Google for 'emergency plumber Exeter'? That's the Growth plan."
3. **Full Retainer (£197/mo)** — "Want me to handle everything — content, SEO, Google Business, competitor monitoring? Full Retainer means you never think about your website again."

### Close technique
After showing the demo: "I can have your version live by [day after tomorrow]. All I need is your trade, your area, and 10 minutes on the phone. Want to do it?"

---

## Technical Notes

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom theme (hive/forge colors)
- **Icons:** Lucide React
- **Fonts:** DM Sans (loaded via Google Fonts CDN)
- **Hosting:** Optimised for Vercel (also works on Netlify, Cloudflare Pages)
- **SEO:** Full meta tags, Open Graph, JSON-LD LocalBusiness schema
- **Performance:** No client-side JS except interactive components (form, nav menu, floating CTA). Static rendering for all content sections.
test deploy
