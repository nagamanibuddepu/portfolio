'use client'

export default function Footer() {
  return (
    <footer style={{ padding: '32px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 11 }}>NB</div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--text-muted)' }}>© 2026 Nagamani Buddepu</span>
        </div>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>
          Built with ❤️ using Next.js, Tailwind & Framer Motion
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            { label: 'GitHub', href: 'https://github.com/nagamanibuddepu', icon: '⌥' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagamani-buddepu-9612611a6', icon: 'in' },
            { label: 'Email', href: 'mailto:mbuddepu0827@gmail.com', icon: '@' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
              style={{ width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)', textDecoration: 'none', fontSize: 12, fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)' }}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
