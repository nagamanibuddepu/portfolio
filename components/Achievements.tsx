'use client'

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '96px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0 }} className="mesh-bg" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Achievements</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', margin: '16px 0 12px' }}>
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 40 }}>
          {[
            { icon: '🏆', label: 'SIH Finalist', value: '2025', sub: 'National Level' },
            { icon: '⭐', label: 'CGPA', value: '9.30', sub: 'Out of 10.00' },
            { icon: '👥', label: 'Teams Outranked', value: '66K+', sub: 'In SIH 2025' },
            { icon: '🤖', label: 'Internship', value: 'AI', sub: 'Infosys Springboard' },
          ].map(s => (
            <div key={s.label} className="glass" style={{ borderRadius: 16, padding: 20, textAlign: 'center' }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{s.icon}</div>
              <div className="gradient-text" style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)', margin: '4px 0 2px' }}>{s.label}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* SIH Card */}
        <div style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 20, padding: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, flexShrink: 0 }}>🏆</div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>Smart India Hackathon 2025</h3>
                <span style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)', padding: '3px 12px', borderRadius: 999, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>Grand Finalist</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.65, margin: '0 0 16px' }}>
                Selected among the top 1,360 finalist teams from over 68,000+ teams competing across India — the largest student hackathon in the world. Built an AI-driven logistics optimizer for the steel supply chain.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                {[['68,000+', 'Teams Applied'], ['1,360', 'Finalist Teams'], ['Top 2%', 'Our Rank']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ color: '#f59e0b', fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700 }}>{v}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 48, fontWeight: 800, color: 'rgba(245,158,11,0.12)' }}>2025</div>
          </div>
        </div>

        {/* Certifications */}
        <h3 style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>🎖️ Certifications & Learning</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
          {[
            { emoji: '🤖', title: 'AI/ML Fundamentals', issuer: 'Infosys Springboard', year: '2026', color: 'var(--accent)' },
            { emoji: '📊', title: 'Data Science with Python', issuer: 'Self-Paced', year: '2024', color: 'var(--accent-2)' },
            { emoji: '🧩', title: 'Problem Solving', issuer: 'HackerRank', year: '2024', color: '#f59e0b' },
            { emoji: '🗄️', title: 'SQL Advanced', issuer: 'HackerRank', year: '2024', color: '#06b6d4' },
          ].map(c => (
            <div key={c.title} className="glass" style={{ borderRadius: 14, padding: 18 }}>
              <div style={{ fontSize: 22, marginBottom: 10 }}>{c.emoji}</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)', marginBottom: 4 }}>{c.title}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c.color, marginBottom: 2 }}>{c.issuer}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{c.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
