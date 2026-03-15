'use client'

const certs = [
  {
    emoji: '🤖',
    title: 'Agentic AI Executive',
    issuer: 'ServiceNow',
    date: 'Feb 2026',
    color: '#00EA64',
    bg: 'rgba(0,234,100,0.07)',
    border: 'rgba(0,234,100,0.2)',
    verifyUrl: 'https://www.servicenow.com/community/in/blogs/ai-certification/bg-p/blog',
    description: 'Micro-certification covering agentic AI systems, autonomous workflows, and AI-driven automation on the ServiceNow platform.',
  },
  {
    emoji: '📊',
    title: 'Data Science for Engineers',
    issuer: 'NPTEL — IIT Madras',
    date: 'Jul–Sep 2025',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.2)',
    verifyUrl: 'https://nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS101S537003631',
    description: 'Elite certification with 68% consolidated score (24.46/25 assignments + 43.94/75 exam). Covered statistical modeling, ML algorithms, and data-driven engineering.',
  },
  {
    emoji: '🔐',
    title: 'Foundations of Cybersecurity',
    issuer: 'Google — Coursera',
    date: 'May 2024',
    color: '#4285F4',
    bg: 'rgba(66,133,244,0.07)',
    border: 'rgba(66,133,244,0.2)',
    verifyUrl: 'https://coursera.org/verify/ZMCBC2WDLQ44',
    description: 'Google Career Certificate covering core security concepts, threat analysis, network security, and security frameworks (NIST, CIA triad).',
  },
  {
    emoji: '🐍',
    title: 'Data Science Essentials with Python',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 2025',
    color: '#00BCEB',
    bg: 'rgba(0,188,235,0.07)',
    border: 'rgba(0,188,235,0.2)',
    verifyUrl: 'https://www.netacad.com/certificates',
    description: 'Covers Python for data science — DataFrames, data cleaning, Matplotlib visualizations, linear models, and hypothesis testing.',
  },
]

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

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 40 }}>
          {[
            { icon: '🏆', label: 'SIH Finalist', value: '2025', sub: 'National Level' },
            { icon: '⭐', label: 'CGPA', value: '9.30', sub: 'Out of 10.00' },
            { icon: '👥', label: 'Teams Outranked', value: '66K+', sub: 'In SIH 2025' },
            { icon: '🤖', label: 'Internship', value: 'AI', sub: 'Infosys Springboard' },
            { icon: '📝', label: 'LeetCode', value: '140+', sub: 'Problems Solved' },
            { icon: '🟤', label: 'CodeChef', value: '650+', sub: 'Problems Solved' },
          ].map(s => (
            <div key={s.label} className="glass" style={{ borderRadius: 16, padding: 18, textAlign: 'center' }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
              <div className="gradient-text" style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontWeight: 600, fontSize: 12, color: 'var(--text-primary)', margin: '3px 0 2px' }}>{s.label}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--text-muted)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* SIH Card */}
        <div style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 20, padding: 32, marginBottom: 40 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, flexShrink: 0 }}>🏆</div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>Smart India Hackathon 2025</h3>
                <span style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)', padding: '3px 12px', borderRadius: 999, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>Grand Finale — Dec 8–9, 2025</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, margin: '0 0 12px' }}>
                Led development of an AI-based logistics optimization solution for the steel supply chain — advanced to the national finale among <strong style={{ color: 'var(--text-primary)' }}>1,360 finalist teams selected from 68,000+ teams</strong> across India. Organized by Ministry of Education, Government of India.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                {[['68,000+', 'Teams Applied'], ['1,360', 'Finalist Teams'], ['Top 2%', 'Our Rank'], ['Dec 2025', 'Finale Date']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ color: '#f59e0b', fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700 }}>{v}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 48, fontWeight: 800, color: 'rgba(245,158,11,0.1)' }}>SIH</div>
          </div>
        </div>

        {/* Certifications */}
        <h3 style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          🎖️ Certifications
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', fontWeight: 400 }}>— click any to verify</span>
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {certs.map(c => (
            <div key={c.title} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 18, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Top */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${c.color}18`, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{c.emoji}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-primary)', marginBottom: 3 }}>{c.title}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c.color }}>{c.issuer}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{c.date}</div>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{c.description}</p>

              {/* Verify link */}
              <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: c.color, textDecoration: 'none', marginTop: 'auto', padding: '6px 12px', borderRadius: 8, background: `${c.color}10`, border: `1px solid ${c.color}20`, width: 'fit-content', transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = `${c.color}20`)}
                onMouseLeave={e => (e.currentTarget.style.background = `${c.color}10`)}>
                ✓ Verify Certificate ↗
              </a>
            </div>
          ))}
        </div>

        {/* LeetCode badges */}
        <div className="glass" style={{ borderRadius: 16, padding: 20, marginTop: 20 }}>
          <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 14 }}>🏅 Coding Badges</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { label: '50-Day Badge', platform: 'LeetCode', color: '#FFA116' },
              { label: 'Feb LeetCoding Challenge', platform: 'LeetCode', color: '#FFA116' },
              { label: 'Problem Solver — Gold', platform: 'CodeChef', color: '#cd7f32' },
              { label: 'Contest Contender — Bronze', platform: 'CodeChef', color: '#cd7f32' },
            ].map(b => (
              <span key={b.label} style={{ background: `${b.color}12`, color: b.color, border: `1px solid ${b.color}25`, padding: '6px 14px', borderRadius: 999, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>
                {b.label} · {b.platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
