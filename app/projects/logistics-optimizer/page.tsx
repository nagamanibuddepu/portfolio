import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Logistics Optimizer — SIH 2025 | Nagamani Buddepu',
  description: 'Full technical breakdown of AI-Enabled Logistics Optimizer for steel supply chain — SIH 2025 Grand Finalist project.',
}

export default function LogisticsOptimizerPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 24px 80px' }}>

        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', marginBottom: 40 }}>
          ← Back to Portfolio
        </Link>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 48 }}>🚢</span>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>AI Logistics Optimizer</h1>
              <p style={{ margin: '4px 0 0', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--accent)' }}>Steel Supply Chain Optimization · Oct – Dec 2025</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
            {['SIH 2025 Grand Finalist', 'Top 2% of 68,000+ Teams', 'Dec 8–9 2025 Finale'].map(t => (
              <span key={t} style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)', padding: '4px 12px', borderRadius: 999, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
            ))}
          </div>
          <a href="https://github.com/nagamanibuddepu" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 13, padding: '8px 16px' }}>⌥ GitHub</a>
        </div>

        {[
          {
            title: '🎯 Objective',
            content: `Built for Smart India Hackathon 2025 — a system-driven logistics optimization module for 5 steel plants across eastern India. The system automates port-to-plant dispatch planning for coking coal and limestone imported via bulk carriers, minimizing total logistics cost while satisfying complex operational constraints.`,
          },
          {
            title: '🔍 Problem Statement',
            content: `Steel plants in eastern India import coking coal and limestone via bulk carriers that dock at major ports. The manual dispatch process — deciding which material goes from which port to which plant by which transport mode — is handled by logistics teams using spreadsheets. This leads to:\n• Suboptimal routing decisions costing crores in excess freight and demurrage\n• Pre-berthing vessel delays due to poor port-to-plant coordination\n• No visibility into cost trade-offs of alternative dispatch scenarios\n\nThe challenge (SIH PS ID: SIH1696) required an AI-based system to automate and optimize this entire process.`,
          },
          {
            title: '🏗️ System Architecture',
            content: `Data Layer: Steel plant capacities, port inventories, vessel schedules, freight rates, rake availability\nOptimization Layer: Least-cost OR engine (Python) — formulates dispatch as linear program with cost objective + constraint set\nML Layer: Random Forest delay prediction model — predicts pre-berthing delay for each vessel-port combination\nSimulation Layer: What-if analysis module — simulates alternative dispatch scenarios and computes cost trade-offs\nVisualization: Dashboard showing optimized dispatch plan, cost breakdown, delay predictions, and scenario comparisons`,
          },
          {
            title: '⚙️ OR Optimization Engine',
            content: `Objective: Minimize total logistics cost = ocean freight + demurrage + port handling + railway freight\n\n4 Cost Variables:\n1. Ocean Freight — per-ton rate × cargo volume × distance\n2. Demurrage — daily rate × excess port waiting time\n3. Port Handling — per-ton handling fee at discharge port\n4. Railway Freight — per-ton-km rate × plant distance from port\n\n6 Operational Constraints:\n1. Port stock capacity — don't exceed port yard storage limits\n2. Plant stock capacity — don't exceed plant silo/yard limits\n3. Rake availability — number of railway rakes available per day per route\n4. Sequential discharge rules — vessel must fully discharge before moving to next berth\n5. Quality-specific dispatch — specific coal grades go to specific plants\n6. Minimum plant inventory — maintain buffer stock above safety threshold`,
          },
          {
            title: '🤖 Random Forest Delay Prediction',
            content: `Features: Port congestion index, vessel size class, day-of-week, tide schedule, existing berth occupancy, cargo type, origin port\nTarget: Pre-berthing delay in hours\nTraining: Historical vessel arrival + berthing records\nIntegration: Predicted delay fed back into OR engine as adjusted available-date for each vessel\nWhat-if: Slider-based UI allows logistics teams to simulate "what if vessel X arrives 12h late?" and see cost impact`,
          },
          {
            title: '🛠️ Tech Stack & Why',
            content: `Python — primary language for OR engine and ML pipeline\nSciPy/PuLP — linear programming library for OR optimization formulation\nScikit-learn Random Forest — robust ensemble model for delay prediction; handles mixed feature types well\nPandas — data manipulation for vessel schedules, cost tables, plant capacities\nMatplotlib/Seaborn — visualization of dispatch plans and cost breakdowns\nStreamlit — rapid dashboard prototype for what-if analysis UI`,
          },
          {
            title: '📊 Results & Impact',
            content: `Covers 5 steel plants across eastern India\nHandles 4 simultaneous cost optimization variables\nEnforces 6 complex operational constraints\nWhat-if analysis allows simulation of 10+ alternative dispatch scenarios\nSelected among Top 2% of 68,000+ teams at SIH 2025 Grand Finale (Dec 8–9, 2025)\nOrganized by Ministry of Education, Government of India`,
          },
          {
            title: '⚡ Challenges',
            content: `Constraint complexity — formulating 6 interconnected operational constraints as a solvable linear program required multiple iterations and domain knowledge from steel logistics\nData availability — working with synthetic but realistic vessel/plant data that accurately represented real-world constraints\nIntegration — connecting the delay prediction ML model output back into the OR engine as a dynamic constraint (vessel availability date)\nWhat-if UX — designing an interface that lets non-technical logistics managers explore scenarios without needing to understand the underlying optimization`,
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14 }}>{s.title}</h2>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: 20 }}>
              {s.content.split('\n').map((line, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, margin: i < s.content.split('\n').length - 1 ? '0 0 8px' : 0 }}>{line}</p>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14 }}>🛠️ Full Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Python', 'Scikit-learn', 'Random Forest', 'PuLP', 'SciPy', 'Pandas', 'Matplotlib', 'Streamlit'].map(t => (
              <span key={t} style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)', padding: '5px 14px', borderRadius: 8, fontSize: 13, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://github.com/nagamanibuddepu" target="_blank" rel="noopener noreferrer" className="btn-primary">⌥ View on GitHub</a>
          <Link href="/#projects" className="btn-ghost">← Back</Link>
        </div>
      </div>
    </main>
  )
}
