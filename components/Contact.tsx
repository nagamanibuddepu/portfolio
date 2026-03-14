'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) setForm({ name: '', email: '', subject: '', message: '' })
    } catch { setStatus('error') }
    setTimeout(() => setStatus('idle'), 5000)
  }

  const inputStyle = { width: '100%', padding: '12px 16px', borderRadius: 12, fontSize: 14, fontFamily: 'DM Sans, sans-serif', background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box' as const, transition: 'border-color 0.2s' }

  return (
    <section id="contact" style={{ padding: '96px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0 }} className="mesh-bg" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Contact</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', margin: '16px 0 12px' }}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 440, margin: '0 auto' }}>Open to internships, projects, and collaborations. Drop me a message!</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { icon: '✉️', label: 'Email', value: 'mbuddepu0827@gmail.com', href: 'mailto:mbuddepu0827@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+91 9398172938', href: 'tel:+919398172938' },
              { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana, India', href: null },
            ].map(item => (
              <div key={item.label} className="glass" style={{ borderRadius: 14, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: 14, color: 'var(--text-primary)', textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}>{item.value}</a>
                    : <span style={{ fontSize: 14, color: 'var(--text-primary)' }}>{item.value}</span>}
                </div>
              </div>
            ))}

            <div className="glass" style={{ borderRadius: 14, padding: 16 }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 12 }}>// Social Links</div>
              {[
                { label: 'LinkedIn', handle: 'nagamani-buddepu', url: 'https://www.linkedin.com/in/nagamani-buddepu-9612611a6' },
                { label: 'GitHub', handle: 'nagamanibuddepu', url: 'https://github.com/nagamanibuddepu' },
                { label: 'Threads', handle: '@nm_buddepu', url: 'https://www.threads.com/@nm_buddepu' },
                { label: 'Instagram', handle: 'nm_buddepu', url: '#' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{s.label}</span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    {s.handle} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass" style={{ borderRadius: 20, padding: 28 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 20 }}>// send_message.ts</div>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[['name', 'Name', 'Your name', 'text'], ['email', 'Email', 'your@email.com', 'email']].map(([id, label, ph, type]) => (
                  <div key={id}>
                    <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>{label}</label>
                    <input type={type} required placeholder={ph} value={form[id as keyof typeof form]}
                      onChange={e => update(id, e.target.value)} style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>Subject</label>
                <input type="text" required placeholder="What's this about?" value={form.subject}
                  onChange={e => update('subject', e.target.value)} style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>Message</label>
                <textarea required rows={5} placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={e => update('message', e.target.value)}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ padding: '13px 24px', opacity: status === 'sending' ? 0.6 : 1 }}>
                {status === 'sending' ? '⏳ Sending...' : status === 'sent' ? '✅ Message Sent!' : status === 'error' ? '❌ Try Again' : '✉️ Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
