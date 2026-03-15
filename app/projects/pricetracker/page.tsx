import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PriceTracker — AI Price Comparison Platform | Nagamani Buddepu',
  description: 'Full technical breakdown of PriceTracker — full-stack price comparison engine across 10 Indian e-commerce platforms.',
}

export default function PriceTrackerPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 24px 80px' }}>

        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', marginBottom: 40 }}>
          ← Back to Portfolio
        </Link>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 48 }}>🔍</span>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>PriceTracker</h1>
              <p style={{ margin: '4px 0 0', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--accent)' }}>AI-Powered Price Comparison Platform · May – Jun 2025</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
            {['Live on Railway', 'Full Stack', '10 Platforms'].map(t => (
              <span key={t} style={{ background: 'rgba(123,108,246,0.1)', color: '#7B6CF6', border: '1px solid rgba(123,108,246,0.2)', padding: '4px 12px', borderRadius: 999, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="https://github.com/nagamanibuddepu/PriceTracker" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 13, padding: '8px 16px' }}>⌥ GitHub Repo</a>
            <a href="https://pricetracker-production-4711.up.railway.app/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13, padding: '8px 16px' }}>● Live Demo</a>
          </div>
        </div>

        {[
          {
            title: '🎯 Objective',
            content: `PriceTracker is a full-stack price intelligence platform that aggregates product prices across 10 major Indian e-commerce platforms in real time — Amazon, Flipkart, Myntra, Nykaa, Meesho, AJIO, and more. It helps shoppers find the best deal instantly, track price history, set wishlist alerts, and get AI-powered product recommendations.`,
          },
          {
            title: '🔍 Problem Statement',
            content: `Indian e-commerce is fragmented across 10+ platforms with identical SKUs priced differently everywhere. Manual comparison is time-consuming and price-sensitive shoppers miss deals. Existing tools are slow (sequential scraping), don't cover Indian platforms comprehensively, and lack AI personalization. PriceTracker solves all three.`,
          },
          {
            title: '🏗️ System Architecture',
            content: `Frontend: Next.js SSR app with product search, comparison tables, price history charts\nScraping Layer: 3 concurrent Puppeteer pipelines → BullMQ + Redis job queue (parallelized)\nAPI Layer: Node.js Express REST API serving search results, history, wishlist endpoints\nDatabase: MongoDB — product catalog, 30-day price history, user wishlists, 12-hour search cache\nAI Layer: Google Gemini API — contextual deal assistant for outfit, skincare, cross-platform recommendations\nDeployment: Railway (backend + frontend), MongoDB Atlas`,
          },
          {
            title: '⚡ Performance Optimization',
            content: `Before: Sequential Puppeteer scraping — 25s average job execution time, poor UX\nAfter: BullMQ + Redis job queue with 3 concurrent pipelines:\n• Job execution: 25s → ~7s (72% reduction)\n• Perceived latency: ~4.5s via partial result streaming\n• 12-hour MongoDB search cache eliminates redundant scraping for repeated queries\n• Partial result streaming shows first results while remaining scrapers run`,
          },
          {
            title: '🤖 AI Features — Google Gemini',
            content: `Contextual Deal Assistant — users describe what they're looking for in natural language\nOutfit Recommendations — suggests complete outfit combinations based on selected items\nSkincare Recommendations — recommends products based on skin type and concerns\nCross-platform Deal Analysis — compares value across platforms considering shipping, return policies\nPrice Drop Predictions — analyzes 30-day history to suggest optimal buy timing`,
          },
          {
            title: '🛠️ Tech Stack & Why',
            content: `Next.js — SSR for SEO + fast initial load on product pages\nNode.js + Express — non-blocking I/O ideal for concurrent scraping coordination\nPuppeteer — headless Chrome automation for JS-rendered e-commerce pages\nBullMQ + Redis — distributed job queue enabling parallel scraping workers\nMongoDB — flexible schema for varied product structures across 10 platforms\nGoogle Gemini — state-of-the-art multimodal LLM for contextual recommendations\nRailway — simple PaaS deployment supporting Node.js + Redis + MongoDB in one project`,
          },
          {
            title: '📊 Key Features',
            content: `✓ Real-time price comparison across 10 Indian e-commerce platforms\n✓ SKU deduplication — groups identical products across platforms\n✓ 30-day price history charts (MongoDB time series)\n✓ Target-price wishlist alerts — notifies when price drops below threshold\n✓ 12-hour search result caching to minimize scraping load\n✓ Google Gemini AI chatbot for personalized deal recommendations\n✓ Partial result streaming for sub-5s perceived latency`,
          },
          {
            title: '⚡ Challenges',
            content: `Anti-scraping measures — e-commerce platforms use bot detection; solved with request rotation, user-agent cycling, and rate limiting\nSKU deduplication — matching identical products across platforms with different naming conventions required fuzzy matching + normalization\nData freshness vs. load — balancing real-time accuracy with scraping infrastructure cost; solved with 12-hour cache + demand-based refresh\nGemini prompt engineering — crafting prompts that give genuinely useful, context-aware recommendations rather than generic responses`,
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14 }}>{s.title}</h2>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: 20 }}>
              {s.content.split('\n').map((line, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, margin: i < s.content.split('\n').length - 1 ? '0 0 8px' : 0 }}>{line}</p>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14 }}>🛠️ Full Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Next.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'Puppeteer', 'Google Gemini', 'TypeScript', 'Railway', 'MongoDB Atlas'].map(t => (
              <span key={t} style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid rgba(0,229,204,0.2)', padding: '5px 14px', borderRadius: 8, fontSize: 13, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://github.com/nagamanibuddepu/PriceTracker" target="_blank" rel="noopener noreferrer" className="btn-primary">⌥ View on GitHub</a>
          <a href="https://pricetracker-production-4711.up.railway.app/" target="_blank" rel="noopener noreferrer" className="btn-ghost">● Live Demo</a>
          <Link href="/#projects" className="btn-ghost">← Back</Link>
        </div>
      </div>
    </main>
  )
}
