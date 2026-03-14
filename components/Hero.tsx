'use client'
import { useEffect, useRef, useState } from 'react'

const ROLES = ['Software Engineer', 'AI & Data Science Enthusiast', 'ML Systems Builder', 'Competitive Programmer']

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [typing, setTyping] = useState(true)
  const timer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const role = ROLES[roleIdx]
    if (typing) {
      if (displayed.length < role.length) {
        timer.current = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65)
      } else {
        timer.current = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timer.current = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 38)
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timer.current)
  }, [displayed, typing, roleIdx])

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      {/* Backgrounds */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} className="mesh-bg" />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} className="grid-bg" />

      {/* Orbs */}
      <div className="orb" style={{ width: 500, height: 500, top: -150, left: -150, background: 'radial-gradient(circle, rgba(0,229,204,0.12) 0%, transparent 70%)', zIndex: 0 }} />
      <div className="orb anim-float" style={{ width: 350, height: 350, bottom: -80, right: -80, background: 'radial-gradient(circle, rgba(123,108,246,0.1) 0%, transparent 70%)', zIndex: 0 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>

          {/* Left */}
          <div>
            {/* Badge */}
            <div className="anim-fade-up" style={{ marginBottom: 28 }}>
              <span className="section-tag">
                <span className="anim-pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                Available for Internships & Roles
              </span>
            </div>

            {/* Name */}
            <div className="anim-fade-up delay-1">
              <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 12, margin: '0 0 12px' }}>
                <span style={{ color: 'var(--text-primary)' }}>Nagamani</span><br />
                <span className="gradient-text">Buddepu</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="anim-fade-up delay-2" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 16, color: 'var(--accent)', margin: '16px 0', minHeight: 28, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ color: 'var(--text-muted)' }}>$ </span>
              <span>{displayed}</span>
              <span className="anim-blink" style={{ color: 'var(--accent)', marginLeft: 2 }}>|</span>
            </div>

            {/* Bio */}
            <p className="anim-fade-up delay-3" style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: '0 0 20px' }}>
              CSE (Data Science) student at <strong style={{ color: 'var(--text-primary)' }}>MLR Institute of Technology</strong> with a 9.30 CGPA.
              AI intern at Infosys, SIH 2025 Grand Finalist, building intelligent systems that matter.
            </p>

            {/* Location */}
            <p className="anim-fade-up delay-3" style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'JetBrains Mono, monospace', margin: '0 0 28px' }}>
              📍 Hyderabad, Telangana, India
            </p>

            {/* CTAs */}
            <div className="anim-fade-up delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href="#contact" className="btn-ghost">Get in Touch</a>
              <a href="/resume.pdf" download className="btn-ghost">↓ Resume</a>
            </div>

            {/* Socials */}
            <div className="anim-fade-up delay-5" style={{ display: 'flex', gap: 10 }}>
              {[
                { label: 'GitHub', href: 'https://github.com/nagamanibuddepu', icon: '⌥' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagamani-buddepu-9612611a6', icon: 'in' },
                { label: 'Email', href: 'mailto:mbuddepu0827@gmail.com', icon: '@' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} style={{
                  width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 13,
                  fontFamily: 'JetBrains Mono, monospace', fontWeight: 600,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — card */}
          <div className="anim-fade-up delay-3" style={{ position: 'relative' }}>
            <div className="glass" style={{ borderRadius: 20, padding: 24 }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 20, borderBottom: '1px solid var(--border)', marginBottom: 20 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#000', fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 16,
                }}>NB</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>Nagamani Buddepu</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--text-muted)' }}>@nagamanibuddepu</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)', padding: '4px 10px', borderRadius: 999 }}>
                  <span className="anim-pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  Active
                </div>
              </div>

              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'CGPA', value: '9.30', sub: 'Out of 10' },
                  { label: 'SIH 2025', value: '🏆', sub: 'Grand Finalist' },
                  { label: 'Internship', value: 'AI', sub: 'Infosys Springboard' },
                  { label: 'Projects', value: '4+', sub: 'Built & Deployed' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 14 }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>{s.label}</div>
                    <div className="gradient-text" style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700 }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 8 }}>// current stack</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['Python', 'XGBoost', 'FastAPI', 'Node.js', 'PostgreSQL', 'ML'].map(t => (
                    <span key={t} style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid rgba(0,229,204,0.15)', padding: '3px 10px', borderRadius: 6, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* College */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <div style={{ width: 3, height: 32, borderRadius: 2, background: 'linear-gradient(to bottom, var(--accent), var(--accent-2))' }} />
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>B.Tech CSE (Data Science) · MLR Institute of Technology · 2023–2027</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="anim-float" style={{
              position: 'absolute', top: -18, right: -10,
              background: 'var(--bg-card)', backdropFilter: 'blur(20px)',
              border: '1px solid var(--border)', borderRadius: 14,
              padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ fontSize: 20 }}>🏆</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>SIH 2025</div>
                <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent)' }}>Grand Finalist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ textAlign: 'center', marginTop: 60, color: 'var(--text-muted)', fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>
          <div>scroll</div>
          <div className="anim-bounce-y" style={{ marginTop: 4 }}>↓</div>
        </div>
      </div>
    </section>
  )
}
