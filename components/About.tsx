'use client'

export default function About() {
  const cards = [
    { icon: '🎓', label: 'Education', value: 'B.Tech CSE (Data Science)', sub: 'MLR Institute of Technology · 2023–2027 · CGPA 9.30' },
    { icon: '💼', label: 'Current Role', value: 'AI Intern — Infosys Springboard', sub: 'Building PriceOptima — ML dynamic pricing system' },
    { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana, India', sub: 'Open to remote and hybrid opportunities' },
    { icon: '🎂', label: 'Birthday', value: '27 January 2003', sub: 'Age 22 · Aquarius ♒' },
  ]

  const timeline = [
    { year: '2023', color: 'var(--accent)', title: 'Started B.Tech CSE (Data Science)', desc: 'Joined MLR Institute of Technology. Started with 9.30 CGPA, diving into algorithms and data science.' },
    { year: '2025', color: 'var(--accent-2)', title: 'SIH 2025 Grand Finalist', desc: 'Selected from 68,000+ teams across India. Built AI-driven logistics optimizer for steel supply chain.' },
    { year: '2026', color: 'var(--accent)', title: 'AI Intern — Infosys Springboard', desc: 'Working on PriceOptima — ML-based dynamic pricing using XGBoost & LightGBM to maximize revenue.' },
    { year: '2027', color: 'var(--accent-2)', title: 'Expected Graduation', desc: 'Graduating with B.Tech CSE (Data Science), aiming for product company roles in AI/ML.' },
  ]

  return (
    <section id="about" style={{ padding: '96px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0 }} className="mesh-bg" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag" style={{ marginBottom: 20, display: 'inline-flex' }}>About Me</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', margin: '16px 0' }}>
            Building Intelligent Systems <br /><span className="gradient-text">One Line at a Time</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Passionate about using data and code to solve real-world problems — from competitive programming to ML-powered pricing engines.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {cards.map(c => (
              <div key={c.label} className="glass" style={{ borderRadius: 16, padding: 18, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 3 }}>{c.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>{c.value}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{c.sub}</div>
                </div>
              </div>
            ))}
            <div className="glass" style={{ borderRadius: 16, padding: 18, borderLeft: '3px solid var(--accent)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', marginBottom: 8 }}>// my_passion.py</div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                I love building things that matter — from AI pricing engines to logistics optimizers. I believe the intersection of <strong style={{ color: 'var(--text-primary)' }}>software engineering</strong> and <strong style={{ color: 'var(--accent)' }}>machine learning</strong> is where the most exciting problems live.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{ position: 'absolute', left: 8, top: 8, bottom: 8, width: 1, background: `linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)` }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timeline.map(t => (
                <div key={t.year} style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -28, top: 6, width: 12, height: 12, borderRadius: '50%', background: t.color, border: '2px solid var(--bg-primary)' }} />
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: t.color, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                    📅 {t.year}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 4 }}>{t.title}</div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
