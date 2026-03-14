'use client'

const profiles = [
  { name: 'LeetCode', handle: 'Nagamani_buddepu', url: 'https://leetcode.com/u/Nagamani_buddepu/', emoji: '🟡', color: '#FFA116', bg: 'rgba(255,161,22,0.07)', border: 'rgba(255,161,22,0.2)', desc: 'Daily DSA practice & problem solving', badge: 'Active' },
  { name: 'GitHub', handle: 'nagamanibuddepu', url: 'https://github.com/nagamanibuddepu', emoji: '⚫', color: '#e0e0e0', bg: 'rgba(224,224,224,0.05)', border: 'rgba(224,224,224,0.1)', desc: 'Open source projects & contributions', badge: 'Public' },
  { name: 'CodeChef', handle: 'nagamani_6264', url: 'https://www.codechef.com/users/nagamani_6264', emoji: '🟤', color: '#cd7f32', bg: 'rgba(205,127,50,0.07)', border: 'rgba(205,127,50,0.2)', desc: 'Competitive programming contests', badge: 'Rated' },
  { name: 'Coding Ninjas', handle: 'Code360 Profile', url: 'https://www.naukri.com/code360/profile/5185685d-882d-4348-8150-fba288e230ea', emoji: '🔴', color: '#e74c3c', bg: 'rgba(231,76,60,0.07)', border: 'rgba(231,76,60,0.2)', desc: 'Structured learning & challenges', badge: 'Learning' },
  { name: 'HackerRank', handle: 'mbuddepu0827', url: 'https://www.hackerrank.com/profile/mbuddepu0827', emoji: '🟢', color: '#00EA64', bg: 'rgba(0,234,100,0.07)', border: 'rgba(0,234,100,0.2)', desc: 'Certificates & skill assessments', badge: 'Certified' },
  { name: 'GeeksforGeeks', handle: 'mbuddepggyc', url: 'https://www.geeksforgeeks.org/profile/mbuddepggyc', emoji: '🟩', color: '#2F8D46', bg: 'rgba(47,141,70,0.07)', border: 'rgba(47,141,70,0.2)', desc: 'DSA articles & interview prep', badge: 'Active' },
]

export default function CodingProfiles() {
  return (
    <section id="profiles" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Coding Profiles</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--text-primary)', margin: '16px 0 12px' }}>
            Where I <span className="gradient-text">Code & Compete</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto' }}>My competitive programming journey across platforms.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginBottom: 40 }}>
          {profiles.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', background: p.bg, border: `1px solid ${p.border}`, borderRadius: 18, padding: 20, textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{p.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{p.name}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>@{p.handle}</div>
                  </div>
                </div>
                <span style={{ fontSize: 13, color: p.color }}>↗</span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: '0 0 14px', lineHeight: 1.5 }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}25`, padding: '3px 10px', borderRadius: 999, fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}>{p.badge}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: p.color }}>View →</span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub stats */}
        <div className="glass" style={{ borderRadius: 20, padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 20 }}>📊</span>
              <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>GitHub Activity</span>
            </div>
            <a href="https://github.com/nagamanibuddepu" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none' }}>
              @nagamanibuddepu ↗
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
            {[
              `https://github-readme-stats.vercel.app/api?username=nagamanibuddepu&show_icons=true&theme=transparent&hide_border=true&title_color=00E5CC&icon_color=7B6CF6&text_color=8888a8&bg_color=00000000`,
              `https://github-readme-streak-stats.herokuapp.com/?user=nagamanibuddepu&theme=transparent&hide_border=true&ring=00E5CC&fire=7B6CF6&currStreakLabel=00E5CC&sideLabels=8888a8&dates=55556e&sideNums=f0f0f5`,
            ].map((src, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid var(--border)', minHeight: 100 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="GitHub Stats" style={{ width: '100%', display: 'block' }} loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
