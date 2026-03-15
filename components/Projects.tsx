'use client'

const projects = [
  {
    id: 'priceoptima',
    title: 'PriceOptima',
    subtitle: 'AI Dynamic Pricing System',
    period: 'Feb 2026 – Present',
    desc: 'End-to-end ML-powered dynamic pricing system built during Infosys Springboard internship. Built a 17-step data cleaning pipeline, engineered 12 pricing signals, and benchmarked XGBoost vs LightGBM models against a rule-based baseline using KPIs like revenue lift, conversion rate, and profit margin.',
    tags: ['Python', 'XGBoost', 'LightGBM', 'FastAPI', 'React.js', 'PostgreSQL', 'Pandas'],
    emoji: '💰',
    status: 'Active — Infosys Internship',
    statusColor: '#22c55e',
    github: 'https://github.com/nagamanibuddepu',
    live: null,
    highlights: ['17-step data cleaning pipeline', '12 engineered pricing signals', 'XGBoost vs LightGBM benchmarking', 'FastAPI + React dashboard'],
  },
  {
    id: 'logistics-optimizer',
    title: 'AI Logistics Optimizer',
    subtitle: 'Steel Supply Chain — SIH 2025',
    period: 'Oct 2025 – Dec 2025',
    desc: 'AI-driven logistics optimization for 5 steel plants across eastern India. Built an OR optimization engine handling 4 cost variables and 6 operational constraints for port-to-plant dispatch planning of coking coal and limestone. Random Forest model predicts pre-berthing delays with what-if analysis.',
    tags: ['Python', 'Random Forest', 'OR Optimization', 'ML', 'Supply Chain', 'What-if Analysis'],
    emoji: '🚢',
    status: 'SIH 2025 Grand Finalist',
    statusColor: '#f59e0b',
    github: 'https://github.com/nagamanibuddepu',
    live: null,
    highlights: ['OR engine: 4 cost vars, 6 constraints', 'Random Forest delay prediction', 'What-if dispatch simulation', 'Top 2% of 68,000+ teams'],
  },
  {
    id: 'pricetracker',
    title: 'PriceTracker',
    subtitle: 'AI-Powered Price Comparison Platform',
    period: 'May 2025 – Jun 2025',
    desc: 'Full-stack price comparison engine aggregating identical SKUs across 10 major Indian e-commerce platforms via 3 concurrent data pipelines. Replaced sequential Puppeteer scraping with BullMQ + Redis job queue — cutting execution from 25s to ~7s (72% reduction). Features 30-day price history, wishlist alerts, and Google Gemini AI deal assistant.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'BullMQ', 'Puppeteer', 'Google Gemini'],
    emoji: '🔍',
    status: 'Live',
    statusColor: '#7B6CF6',
    github: 'https://github.com/nagamanibuddepu/PriceTracker',
    live: 'https://pricetracker-production-4711.up.railway.app/',
    highlights: ['10 platforms: Amazon, Flipkart, Myntra+', 'BullMQ queue: 25s → 7s (72% faster)', '30-day price history tracking', 'Google Gemini deal assistant'],
  },
  {
    id: 'fallguard',
    title: 'FallGuard',
    subtitle: 'IoT-Based Elderly Fall Detection',
    period: 'Sep 2023 – Nov 2023',
    desc: 'Fall detection prototype using NodeMCU (ESP8266) and MPU6050 IMU sensor. Implemented a multi-threshold algorithm on acceleration magnitude and orientation change to classify falls with minimal false positives. WiFi-based emergency alerts via IFTTT Webhooks instantly notify caregivers upon detection.',
    tags: ['NodeMCU', 'ESP8266', 'MPU6050', 'Python', 'IFTTT Webhooks', 'IoT', 'C++'],
    emoji: '🛡️',
    status: 'Live Demo',
    statusColor: '#06b6d4',
    github: 'https://github.com/nagamanibuddepu/Fall_Detection',
    live: 'https://nagamanibuddepu.github.io/Fall_Detection/',
    highlights: ['NodeMCU + MPU6050 sensor fusion', 'Multi-threshold fall algorithm', 'WiFi alerts via IFTTT Webhooks', 'Minimal false positive rate'],
  },
]

function Card({ p }: { p: typeof projects[0] }) {
  return (
    <div className="glass" style={{ borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.2s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)' }}>

      {/* Top */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 28 }}>{p.emoji}</span>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{p.title}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{p.subtitle}</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <span style={{ background: `${p.statusColor}18`, color: p.statusColor, border: `1px solid ${p.statusColor}30`, borderRadius: 999, padding: '3px 10px', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>
            {p.status}
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-muted)' }}>{p.period}</span>
        </div>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{p.desc}</p>

      {/* Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, marginBottom: 14 }}>
        {p.highlights.map(h => (
          <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, fontSize: 12, color: 'var(--text-muted)' }}>
            <span style={{ color: 'var(--accent)', fontSize: 10, marginTop: 2, flexShrink: 0 }}>›</span> {h}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
        {p.tags.map(t => (
          <span key={t} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: 6, fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
        ))}
      </div>

      {/* Footer links */}
      <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <a href={p.github} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          ⌥ GitHub
        </a>
        {p.live && (
          <>
            <span style={{ color: 'var(--border)' }}>·</span>
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              ● Live Demo
            </a>
          </>
        )}
        <a href={`/projects/${p.id}`}
          style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent)', textDecoration: 'none', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
          Full Details →
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Projects</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', margin: '16px 0 12px' }}>
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto', fontSize: 14 }}>
            From hackathon-winning AI systems to production platforms — each with full technical breakdowns.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {projects.map(p => <Card key={p.id} p={p} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="https://github.com/nagamanibuddepu" target="_blank" rel="noopener noreferrer" className="btn-ghost">⌥ All Repos on GitHub</a>
        </div>
      </div>
    </section>
  )
}
