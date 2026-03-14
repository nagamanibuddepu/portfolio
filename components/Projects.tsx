'use client'

const projects = [
  {
    id: 1,
    title: 'PriceOptima',
    subtitle: 'AI Dynamic Pricing System',
    desc: 'ML system that recommends optimal product prices using historical sales and inventory data. Uses XGBoost and LightGBM to predict price ranges that maximize revenue.',
    tags: ['Python', 'XGBoost', 'LightGBM', 'FastAPI', 'ML'],
    emoji: '💰',
    status: 'Active — Infosys Internship',
    statusColor: '#22c55e',
    github: 'https://github.com/nagamanibuddepu',
    highlights: ['XGBoost & LightGBM prediction', 'REST API for insights', 'Feature engineering', 'Revenue optimization'],
  },
  {
    id: 2,
    title: 'AI Logistics Optimizer',
    subtitle: 'SIH 2025 Grand Finalist',
    desc: 'AI-driven logistics optimization for steel supply chain. Optimized vessel scheduling and dispatch planning with Random Forest predicting pre-berthing delays.',
    tags: ['Python', 'Random Forest', 'Optimization', 'ML', 'Supply Chain'],
    emoji: '🚢',
    status: 'SIH 2025 Grand Finalist',
    statusColor: '#f59e0b',
    github: 'https://github.com/nagamanibuddepu',
    highlights: ['Random Forest delay prediction', 'Vessel scheduling', 'Real-time dispatch planning', 'Top 2% of 68K+ teams'],
  },
  {
    id: 3,
    title: 'AI Price Tracker',
    subtitle: 'Cross-Platform Price Comparison',
    desc: 'Full-stack web app that scrapes and compares product prices across e-commerce platforms in real time. Includes wishlist price-drop alerts and an AI chatbot recommending fashion & beauty products based on skin type and body type.',
    tags: ['Node.js', 'Python', 'AI Chatbot', 'Web Scraping', 'PostgreSQL', 'REST API'],
    emoji: '🔍',
    status: 'Completed',
    statusColor: '#7B6CF6',
    github: 'https://github.com/nagamanibuddepu/PriceTracker',
    highlights: ['Real-time cross-platform scraping', 'AI chatbot for style picks', 'Wishlist price-drop alerts', 'Smart product deduplication'],
  },
  {
    id: 4,
    title: 'Elderly Fall Detection',
    subtitle: 'IoT Safety & Alert System',
    desc: 'IoT-based fall detection system using accelerometer and gyroscope sensor data to identify fall events in real time. Instantly triggers automated alerts to caregivers when a fall is detected.',
    tags: ['IoT', 'Python', 'Accelerometer', 'Gyroscope', 'Alert System'],
    emoji: '🏥',
    status: 'Completed',
    statusColor: '#06b6d4',
    github: 'https://github.com/nagamanibuddepu/Fall_Detection',
    highlights: ['Accelerometer + gyroscope fusion', 'Real-time fall detection', 'Instant caregiver alerts', 'Low-latency embedded processing'],
  },
]

function Card({ p }: { p: typeof projects[0] }) {
  return (
    <div className="glass" style={{ borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.2s, box-shadow 0.2s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)' }}>

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 28 }}>{p.emoji}</span>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{p.title}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{p.subtitle}</div>
          </div>
        </div>
        <span style={{ background: `${p.statusColor}18`, color: p.statusColor, border: `1px solid ${p.statusColor}30`, borderRadius: 999, padding: '3px 10px', fontSize: 11, fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {p.status}
        </span>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>

      {/* Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 16 }}>
        {p.highlights.map(h => (
          <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-muted)' }}>
            <span style={{ color: 'var(--accent)', fontSize: 10 }}>›</span> {h}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
        {p.tags.map(t => (
          <span key={t} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: 6, fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', gap: 16 }}>
        <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          ⌥ View on GitHub
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
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
            From hackathon-winning AI systems to production ML APIs — here's what I've shipped.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {projects.map(p => <Card key={p.id} p={p} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="https://github.com/nagamanibuddepu" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            ⌥ See all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
