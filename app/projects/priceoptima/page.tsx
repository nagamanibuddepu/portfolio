import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PriceOptima — AI Dynamic Pricing System | Nagamani Buddepu',
  description: 'Full technical breakdown of PriceOptima — ML-powered dynamic pricing system built at Infosys Springboard internship.',
}

export default function PriceOptimaPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 24px 80px' }}>

        {/* Back */}
        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', marginBottom: 40 }}>
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 48 }}>💰</span>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>PriceOptima</h1>
              <p style={{ margin: '4px 0 0', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--accent)' }}>AI Dynamic Pricing System · Feb 2026 – Present</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Active', 'Infosys Springboard', 'Internship Project'].map(t => (
              <span key={t} style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)', padding: '4px 12px', borderRadius: 999, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Sections */}
        {[
          {
            title: '🎯 Objective',
            content: `PriceOptima is an end-to-end ML-powered dynamic pricing system that recommends optimal product prices to maximize revenue while maintaining competitive positioning. The system ingests historical sales, inventory, and competitor pricing data, engineers rich pricing signals, and benchmarks multiple ML models against a rule-based baseline — serving recommendations through a FastAPI backend and React.js dashboard.`,
          },
          {
            title: '🔍 Problem Statement',
            content: `Static pricing strategies fail to adapt to real-time market conditions — inventory fluctuations, seasonal demand shifts, competitor price changes, and conversion rate variations. Businesses lose revenue by either underpricing during high-demand periods or overpricing when inventory is excess. PriceOptima solves this with an intelligent, data-driven pricing engine.`,
          },
          {
            title: '🏗️ System Architecture',
            content: `Data Layer: Raw pricing dataset → 17-step Python/Pandas cleaning pipeline → PostgreSQL storage\nFeature Layer: 12 engineered pricing signals computed per product-time slice\nModel Layer: Rule-based baseline | XGBoost | LightGBM — all benchmarked on revenue lift, conversion rate, profit margin KPIs\nServing Layer: FastAPI inference service → React.js dashboard with Recharts KPI visualizations\nFlow: Cleaned dataset → Feature engineering → Model inference → FastAPI endpoint → Dashboard`,
          },
          {
            title: '⚙️ Data Cleaning Pipeline (17 Steps)',
            content: `1. Missing value imputation (median/mode strategy)\n2. Duplicate row removal\n3. Price constraint validation (min/max bounds)\n4. Cost constraint validation\n5. Discount range validation (0–100%)\n6. Inventory non-negativity check\n7. Outlier filtering via IQR method on price\n8. Outlier filtering on cost\n9. Outlier filtering on inventory levels\n10. Column standardization to snake_case\n11. Data type enforcement (float, int, category)\n12. Negative price correction\n13. Zero-cost record handling\n14. Temporal consistency check (date ordering)\n15. Category label normalization\n16. Cross-column consistency (price > cost check)\n17. Final schema validation & export`,
          },
          {
            title: '📐 Feature Engineering (12 Signals)',
            content: `1. Demand Ratio — sales velocity relative to category average\n2. Inventory Pressure — stock level normalized against reorder threshold\n3. Competitor Price Gap — % difference from nearest competitor price\n4. Conversion Rate — units sold / page visits ratio\n5. Traffic Intensity — relative site traffic for the product\n6. Price Elasticity Estimate — demand sensitivity to price change\n7. Day-of-Week Seasonality — Mon–Sun demand patterns\n8. Month Seasonality — monthly demand index\n9. Is Weekend — binary flag for weekend pricing boost\n10. Margin Pressure — (price - cost) / price ratio\n11. Historical Price Volatility — rolling std dev of price\n12. Stock-to-Sales Ratio — inventory coverage in days`,
          },
          {
            title: '🤖 Tech Stack & Why',
            content: `Python + Pandas — industry standard for data pipelines, rich ecosystem for feature engineering\nXGBoost & LightGBM — gradient boosting models excel on tabular pricing data; LightGBM faster on large datasets\nFastAPI — async Python framework ideal for low-latency ML inference APIs\nPostgreSQL — relational DB for structured pricing/inventory data with strong query performance\nReact.js + Recharts — modern dashboard with real-time KPI visualization\nRule-based baseline — essential benchmark to measure true ML uplift`,
          },
          {
            title: '📊 KPIs & Evaluation',
            content: `Revenue Lift — % revenue increase vs rule-based baseline pricing\nConversion Rate — proportion of price recommendations that resulted in a sale\nProfit Margin — (revenue - cost) / revenue per recommendation\nModel Comparison: XGBoost vs LightGBM vs Rule-based across all three KPIs`,
          },
          {
            title: '⚡ Challenges',
            content: `Data quality — raw dataset had 23% missing values, requiring careful imputation strategy that didn't introduce bias\nFeature leakage — ensuring no future information leaked into training features (especially time-based signals)\nBaseline design — building a fair rule-based baseline required deep domain understanding of pricing logic\nModel selection — choosing between XGBoost and LightGBM required controlled benchmarking across multiple KPIs, not just accuracy`,
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

        {/* Tech stack pills */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14 }}>🛠️ Full Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Python', 'Pandas', 'NumPy', 'XGBoost', 'LightGBM', 'Scikit-learn', 'FastAPI', 'React.js', 'Recharts', 'PostgreSQL', 'Git'].map(t => (
              <span key={t} style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid rgba(0,229,204,0.2)', padding: '5px 14px', borderRadius: 8, fontSize: 13, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://github.com/nagamanibuddepu" target="_blank" rel="noopener noreferrer" className="btn-primary">⌥ View on GitHub</a>
          <Link href="/#projects" className="btn-ghost">← Back to Projects</Link>
        </div>
      </div>
    </main>
  )
}
