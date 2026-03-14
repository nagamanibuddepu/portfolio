'use client'

const categories = [
  { title: 'Programming Languages', emoji: '💻', color: 'var(--accent)',
    skills: [{ n: 'Python', l: 90 }, { n: 'Java', l: 80 }, { n: 'SQL', l: 85 }, { n: 'C', l: 75 }, { n: 'R', l: 65 }] },
  { title: 'Data Science & ML', emoji: '🤖', color: 'var(--accent-2)',
    skills: [{ n: 'Scikit-learn', l: 85 }, { n: 'Pandas & NumPy', l: 90 }, { n: 'XGBoost / LightGBM', l: 80 }, { n: 'Matplotlib', l: 85 }, { n: 'EDA & Data Cleaning', l: 90 }] },
  { title: 'Web Development', emoji: '🌐', color: '#f59e0b',
    skills: [{ n: 'Node.js', l: 75 }, { n: 'JavaScript', l: 75 }, { n: 'HTML & CSS', l: 85 }, { n: 'REST APIs', l: 80 }, { n: 'FastAPI / Flask', l: 70 }] },
  { title: 'Databases & Tools', emoji: '🗄️', color: '#06b6d4',
    skills: [{ n: 'PostgreSQL', l: 80 }, { n: 'MongoDB', l: 70 }, { n: 'Git & GitHub', l: 90 }, { n: 'Power BI', l: 65 }, { n: 'Linux', l: 70 }] },
]

const pills = ['Python','Java','SQL','R','C','Pandas','NumPy','Scikit-learn','XGBoost','LightGBM','Matplotlib','Random Forest','EDA','Node.js','JavaScript','HTML','CSS','FastAPI','Flask','PostgreSQL','MongoDB','Git','GitHub','DSA','OOP','DBMS','OS','Hadoop','Spark','Power BI']

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
          <p style={{ color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto' }}>Tools, languages and frameworks I use daily.</p>
        </div>

        {/* Skill categories */}
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

        {/* Core CS & Familiar with */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 40 }}>
          {[
            { title: '🧠 Core CS Fundamentals', items: ['Data Structures & Algorithms', 'Object Oriented Programming', 'DBMS', 'Operating Systems'], color: 'var(--accent)', glow: 'var(--accent-glow)' },
            { title: '🔭 Familiar With', items: ['Hadoop', 'Apache Spark', 'Power BI', 'FastAPI', 'Flask'], color: 'var(--accent-2)', glow: 'var(--accent-2-glow)' },
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
