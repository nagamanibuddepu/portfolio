'use client'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

const NAV = ['about','projects','skills','achievements','profiles','contact']

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '10px 0' : '18px 0',
      background: scrolled ? 'var(--bg-card)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            color: '#000', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 13,
          }}>NB</div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--text-secondary)' }}>nagamani.dev</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hide-mobile">
          {NAV.map(id => (
            <a key={id} href={`#${id}`} style={{
              padding: '7px 14px', borderRadius: 10, fontSize: 13,
              color: 'var(--text-secondary)', textDecoration: 'none', textTransform: 'capitalize',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
              {id}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={toggle} style={{
            width: 36, height: 36, borderRadius: 10, border: '1px solid var(--border)',
            background: 'var(--bg-card)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15, transition: 'all 0.2s',
          }}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="/resume.pdf" download className="btn-primary hide-mobile" style={{ fontSize: 13, padding: '8px 16px' }}>
            ↓ Resume
          </a>
          <button onClick={() => setOpen(!open)} className="show-mobile" style={{
            width: 36, height: 36, borderRadius: 10, border: '1px solid var(--border)',
            background: 'var(--bg-card)', cursor: 'pointer', color: 'var(--text-primary)', fontSize: 18,
          }}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--bg-card)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)', padding: '12px 24px',
        }}>
          {NAV.map(id => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '10px 4px', fontSize: 14,
              color: 'var(--text-secondary)', textDecoration: 'none', textTransform: 'capitalize',
              borderBottom: '1px solid var(--border)',
            }}>{id}</a>
          ))}
          <a href="/resume.pdf" download className="btn-primary" style={{ marginTop: 12, width: '100%', fontSize: 13 }}>
            ↓ Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hide-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>
  )
}
