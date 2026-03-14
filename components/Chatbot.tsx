'use client'
import { useState, useRef, useEffect } from 'react'

type Msg = { role: 'user' | 'bot'; text: string }

const CONTEXT = `You are Nagamani Buddepu's portfolio assistant. Answer questions about her concisely in 2-3 sentences.

Facts:
- Name: Nagamani Buddepu
- Role: B.Tech CSE (Data Science) at MLR Institute of Technology, Hyderabad (2023-2027), CGPA 9.30
- Birthday: 27 Jan 2003, Hyderabad, India
- Contact: mbuddepu0827@gmail.com, +91 9398172938
- AI Intern at Infosys Springboard (Feb 2026-Present) — PriceOptima (XGBoost/LightGBM dynamic pricing)
- SIH 2025 Grand Finalist (from 68,000+ teams)
- Projects: PriceOptima, AI Logistics Optimizer (SIH), AI Price Tracker (github.com/nagamanibuddepu/PriceTracker), Elderly Fall Detection (github.com/nagamanibuddepu/Fall_Detection)
- Skills: Python, Java, SQL, R, Pandas, NumPy, Scikit-learn, XGBoost, LightGBM, Node.js, PostgreSQL, MongoDB, Git
- Profiles: LeetCode (Nagamani_buddepu), GitHub (nagamanibuddepu), CodeChef (nagamani_6264), HackerRank (mbuddepu0827)
- LinkedIn: nagamani-buddepu-9612611a6`

function fallback(msg: string): string {
  const m = msg.toLowerCase()
  if (m.includes('skill') || m.includes('tech')) return "Nagamani is skilled in Python, Java, SQL, XGBoost, LightGBM, Pandas, NumPy, Node.js, PostgreSQL, MongoDB, and Git."
  if (m.includes('pricetracker') || m.includes('price tracker')) return "The AI Price Tracker is a full-stack web app comparing prices across e-commerce platforms, with wishlist alerts and an AI chatbot for fashion recommendations. GitHub: github.com/nagamanibuddepu/PriceTracker"
  if (m.includes('fall')) return "The Elderly Fall Detection system uses accelerometer and gyroscope sensors to detect falls in real time and instantly alert caregivers. GitHub: github.com/nagamanibuddepu/Fall_Detection"
  if (m.includes('project') || m.includes('built')) return "Nagamani built: PriceOptima (Infosys AI pricing), AI Logistics Optimizer (SIH 2025), AI Price Tracker (PriceTracker repo), and Elderly Fall Detection (Fall_Detection repo)."
  if (m.includes('sih') || m.includes('hackathon')) return "Nagamani was a Grand Finalist at SIH 2025 — selected from 68,000+ teams across India!"
  if (m.includes('contact') || m.includes('email')) return "Reach Nagamani at mbuddepu0827@gmail.com or +91 9398172938. LinkedIn: nagamani-buddepu-9612611a6"
  if (m.includes('intern') || m.includes('infosys')) return "Nagamani is an AI Intern at Infosys Springboard (Feb 2026–Present), building PriceOptima — an ML-based dynamic pricing system using XGBoost and LightGBM."
  if (m.includes('education') || m.includes('cgpa') || m.includes('college')) return "Nagamani is pursuing B.Tech CSE (Data Science) at MLR Institute of Technology, Hyderabad (2023–2027) with a 9.30 CGPA."
  if (m.includes('github') || m.includes('leetcode') || m.includes('profile')) return "Find her on LeetCode (Nagamani_buddepu), GitHub (nagamanibuddepu), CodeChef (nagamani_6264), HackerRank (mbuddepu0827), GFG (mbuddepggyc)."
  return "I can tell you about Nagamani's projects, skills, experience, education, or how to contact her. What would you like to know?"
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{ role: 'bot', text: "Hi! I'm Nagamani's portfolio assistant 👋 Ask me anything about her projects, skills, or experience!" }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  const send = async (text?: string) => {
    const msg = text || input.trim()
    if (!msg || loading) return
    setInput('')
    setMsgs(m => [...m, { role: 'user', text: msg }])
    setLoading(true)
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: msg, context: CONTEXT }) })
      const data = await res.json()
      setMsgs(m => [...m, { role: 'bot', text: data.reply || fallback(msg) }])
    } catch {
      setMsgs(m => [...m, { role: 'bot', text: fallback(msg) }])
    }
    setLoading(false)
  }

  const quick = ['What are her top skills?', 'Tell me about SIH 2025', 'What is PriceOptima?', 'GitHub links?']

  return (
    <>
      {/* Toggle */}
      <button onClick={() => setOpen(o => !o)} style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 200,
        width: 54, height: 54, borderRadius: 16,
        background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
        border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, boxShadow: '0 8px 32px rgba(0,229,204,0.3)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
        {open ? '✕' : '🤖'}
        {!open && (
          <span style={{ position: 'absolute', top: -4, right: -4, width: 18, height: 18, borderRadius: '50%', background: 'var(--accent)', color: '#000', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace' }}>AI</span>
        )}
      </button>

      {/* Window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 90, right: 24, zIndex: 199,
          width: 360, maxHeight: 500,
          background: 'var(--bg-primary)', border: '1px solid var(--border-hover)',
          borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        }}>
          {/* Header */}
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🤖</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>Nagamani's Assistant</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 5 }}>
                <span className="anim-pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} /> Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div className={m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'} style={{ maxWidth: '82%' }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div className="chat-bubble-bot" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  {[0,1,2].map(i => (
                    <div key={i} className="anim-pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          {msgs.length <= 2 && (
            <div style={{ padding: '0 12px 8px', display: 'flex', flexWrap: 'wrap', gap: 6, flexShrink: 0, borderTop: '1px solid var(--border)' }}>
              {quick.map(q => (
                <button key={q} onClick={() => send(q)} style={{
                  padding: '4px 10px', borderRadius: 999, fontSize: 11,
                  fontFamily: 'JetBrains Mono, monospace', background: 'var(--bg-card)',
                  border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer',
                  transition: 'color 0.2s', marginTop: 8,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: '10px 12px', borderTop: '1px solid var(--border)', display: 'flex', gap: 8, flexShrink: 0 }}>
            <input
              type="text" placeholder="Ask anything..."
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              style={{ flex: 1, padding: '9px 14px', borderRadius: 12, fontSize: 13, fontFamily: 'DM Sans, sans-serif', background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)', outline: 'none' }}
            />
            <button onClick={() => send()} disabled={!input.trim() || loading} style={{
              width: 36, height: 36, borderRadius: 10, border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15,
              opacity: (!input.trim() || loading) ? 0.4 : 1,
            }}>→</button>
          </div>
        </div>
      )}
    </>
  )
}
