'use client'

const categories = [
  {
    title: 'Languages', emoji: '💻', color: 'var(--accent)',
    skills: [{ n: 'Python', l: 92 }, { n: 'Java', l: 80 }, { n: 'SQL', l: 88 }, { n: 'C', l: 75 }, { n: 'R', l: 65 }],
  },
  {
    title: 'Data Science & ML', emoji: '🤖', color: 'var(--accent-2)',
    skills: [{ n: 'Pandas & NumPy', l: 92 }, { n: 'Scikit-learn', l: 85 }, { n: 'XGBoost & LightGBM', l: 82 }, { n: 'Matplotlib', l: 85 }, { n: 'Feature Engineering', l: 88 }],
  },
  {
    title: 'Web Development', emoji: '🌐', color: '#f59e0b',
    skills: [{ n: 'Next.js & React', l: 78 }, { n: 'Node.js', l: 78 }, { n: 'TypeScript', l: 72 }, { n: 'FastAPI', l: 70 }, { n: 'HTML & CSS', l: 88 }],
  },
  {
    title: 'Databases & Tools', emoji: '🗄️', color: '#06b6d4',
    skills: [{ n: 'PostgreSQL', l: 82 }, { n: 'MongoDB', l: 75 }, { n: 'Redis', l: 65 }, { n: 'Git & GitHub', l: 92 }, { n: 'BullMQ', l: 62 }],
  },
]

const fundamentals = ['Data Structures & Algorithms', 'Object Oriented Programming', 'DBMS', 'Operating Systems']
const tools = ['Git', 'GitHub', 'BullMQ', 'Puppeteer', 'Vercel', 'Recharts']
const familiar = ['Hadoop', 'Apache Spark', 'Power BI', 'Flask', 'IFTTT Webhooks']
const pills = ['Python','Java','SQL','TypeScript','C','R','Pandas','NumPy','Matplotlib','Scikit-learn','XGBoost','LightGBM','Random Forest','Feature Engineering','EDA','Next.js','Node.js','FastAPI','HTML','CSS','JavaScript','PostgreSQL','MongoDB','Redis','BullMQ','Puppeteer','Git','GitHub','Vercel']

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '96px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(123,108,246,0.04) 0%, transparent 70%)' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Skills</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', margin: '16px 0 12px' }}>
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 420, margin: '0 auto', fontSize: 14 }}>
            Languages, frameworks and tools I use to build production systems.
          </p>
        </div>

        {/* Skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 20 }}>
          {categories.map(cat => (
            <div key={cat.title} className="glass" style={{ borderRadius: 20, padding: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                <span style={{ fontSize: 20 }}>{cat.emoji}</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{cat.title}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {cat.skills.map(s => (
                  <div key={s.n}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--text-secondary)' }}>{s.n}</span>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{s.l}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill anim-grow-bar" style={{ width: `${s.l}%`, background: `linear-gradient(90deg, ${cat.color}, var(--accent-2))` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom pill groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 40 }}>
          {[
            { title: '🧠 CS Fundamentals', items: fundamentals, color: 'var(--accent)', glow: 'var(--accent-glow)' },
            { title: '🔧 Dev Tools', items: tools, color: '#f59e0b', glow: 'rgba(245,158,11,0.12)' },
            { title: '🔭 Familiar With', items: familiar, color: 'var(--accent-2)', glow: 'var(--accent-2-glow)' },
          ].map(g => (
            <div key={g.title} className="glass" style={{ borderRadius: 16, padding: 20 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', marginBottom: 14 }}>{g.title}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.items.map(i => (
                  <span key={i} style={{ background: g.glow, color: g.color, border: `1px solid ${g.color}25`, padding: '4px 12px', borderRadius: 8, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="anim-marquee" style={{ display: 'flex', gap: 12, width: 'max-content' }}>
            {[...pills, ...pills].map((p, i) => (
              <span key={i} className="glass" style={{ padding: '7px 16px', borderRadius: 999, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-secondary)', whiteSpace: 'nowrap', flexShrink: 0 }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
