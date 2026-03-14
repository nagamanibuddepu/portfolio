# Nagamani Buddepu — Developer Portfolio

A modern, full-stack developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a minimal, elegant Apple/Vercel-inspired aesthetic featuring glassmorphism UI, smooth animations, dark/light mode, and an AI-powered chatbot assistant.

---

## ✨ Features

- **🌗 Dark / Light Mode** — Persisted via localStorage
- **🤖 AI Chatbot** — Powered by Claude (Anthropic API) with smart fallbacks
- **📧 Contact Form** — Email delivery via Resend API
- **🎬 Framer Motion Animations** — Smooth page load, scroll, and hover animations
- **📱 Fully Responsive** — Mobile-first, works on all screens
- **⚡ SEO Optimized** — Metadata, OpenGraph, Twitter cards
- **🎨 Glassmorphism UI** — Backdrop blur, gradient borders, mesh backgrounds
- **📊 GitHub Stats** — Live contribution graphs via GitHub Readme Stats
- **🏆 Achievements Section** — SIH 2025 Grand Finalist highlight
- **🔗 Coding Profiles** — LeetCode, GitHub, CodeChef, HackerRank, GFG, Code360
- **⌨️ Typing Animation** — Hero role typewriter effect
- **📥 Resume Download** — Direct download button in navbar

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Fonts | Playfair Display + DM Sans + JetBrains Mono |
| Email | Resend API |
| Chatbot | Anthropic Claude API (claude-haiku) |
| Deployment | Vercel |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nagamanibuddepu/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Get from https://resend.com (free tier: 3,000 emails/month)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx

# Get from https://console.anthropic.com
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

> **Note:** Both keys are optional for development. The contact form will log to console, and the chatbot will use smart static fallback responses.

### 4. Add your resume

Place your resume PDF at:
```
public/resume.pdf
```

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + fonts + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   ├── globals.css         # Global styles, CSS variables, glassmorphism
│   └── api/
│       ├── contact/route.ts  # Contact form → Resend email API
│       └── chat/route.ts     # AI chatbot → Anthropic Claude API
├── components/
│   ├── ThemeProvider.tsx   # Dark/light mode context
│   ├── Navbar.tsx          # Sticky nav + theme toggle + mobile menu
│   ├── Hero.tsx            # Landing with typewriter + stats card
│   ├── About.tsx           # Bio + timeline
│   ├── Projects.tsx        # Project cards with stack + highlights
│   ├── Skills.tsx          # Categorized skills + animated bars
│   ├── Achievements.tsx    # SIH 2025 + certifications + stats
│   ├── CodingProfiles.tsx  # Platform cards + GitHub stats images
│   ├── Contact.tsx         # Contact form + social links
│   ├── Footer.tsx          # Footer
│   └── Chatbot.tsx         # Floating AI chat widget
├── public/
│   └── resume.pdf          # ← Add your resume here
├── tailwind.config.js
├── next.config.js
├── vercel.json
└── .env.example
```

---

## 🌐 Deploying to Vercel

### Option A — Vercel Dashboard (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select your repository
4. Add environment variables:
   - `RESEND_API_KEY`
   - `ANTHROPIC_API_KEY`
5. Click **Deploy** ✅

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 🎨 Customization

### Colors (CSS Variables in `globals.css`)

```css
:root {
  --accent: #00E5CC;      /* Primary teal accent */
  --accent-2: #7B6CF6;    /* Secondary purple accent */
}
```

### Fonts

Swap fonts in `app/layout.tsx` — currently uses:
- **Playfair Display** (display/headings)
- **DM Sans** (body text)
- **JetBrains Mono** (code/labels)

### Content

All personal information is hardcoded in the component files for simplicity. For a CMS-driven approach, extract to a `data/` folder or use a headless CMS like Sanity or Contentful.

---

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com) (free)
2. Get your API key from the dashboard
3. Add to `.env.local` as `RESEND_API_KEY`
4. Update the `to` email in `app/api/contact/route.ts` (already set to your email)

For a custom domain (e.g., `contact@nagamanibuddepu.com`), verify your domain in the Resend dashboard and update the `from` field.

---

## 🤖 Chatbot Setup (Anthropic)

1. Sign up at [console.anthropic.com](https://console.anthropic.com)
2. Create an API key
3. Add to `.env.local` as `ANTHROPIC_API_KEY`
4. The chatbot uses `claude-haiku` (fast + affordable)
5. Without a key, smart static fallback responses are used

---

## 📊 GitHub Stats

The coding profiles section uses [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) for live stats images. These auto-update from GitHub's API — no configuration needed.

---

## 📄 License

MIT — feel free to fork and customize for your own portfolio!

---

*Built by Nagamani Buddepu · [GitHub](https://github.com/nagamanibuddepu) · [LinkedIn](https://www.linkedin.com/in/nagamani-buddepu-9612611a6)*
