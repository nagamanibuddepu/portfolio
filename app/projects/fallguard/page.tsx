import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FallGuard — IoT Fall Detection System | Nagamani Buddepu',
  description: 'Full technical breakdown of FallGuard — NodeMCU + MPU6050 IoT fall detection system with IFTTT emergency alerts.',
}

export default function FallGuardPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 24px 80px' }}>

        <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', marginBottom: 40 }}>
          ← Back to Portfolio
        </Link>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 48 }}>🛡️</span>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, margin: 0 }}>FallGuard</h1>
              <p style={{ margin: '4px 0 0', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--accent)' }}>IoT-Based Elderly Fall Detection System · Sep – Nov 2023</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
            {['Live Demo', 'IoT Prototype', 'ESP8266 + MPU6050'].map(t => (
              <span key={t} style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)', padding: '4px 12px', borderRadius: 999, fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="https://github.com/nagamanibuddepu/Fall_Detection" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 13, padding: '8px 16px' }}>⌥ GitHub Repo</a>
            <a href="https://nagamanibuddepu.github.io/Fall_Detection/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13, padding: '8px 16px' }}>● Live Demo</a>
          </div>
        </div>

        {[
          {
            title: '🎯 Objective & Need',
            content: `Falls are the leading cause of injury-related deaths among elderly people worldwide. In India, with a rapidly aging population, many elderly individuals live alone or with limited supervision. FallGuard is a low-cost IoT prototype that detects fall events in real time using wearable sensor data and instantly notifies caregivers via WiFi-based alerts — enabling faster emergency response and potentially saving lives.`,
          },
          {
            title: '🔍 Problem Statement',
            content: `Traditional elderly care relies on manual check-ins or expensive monitoring systems. Existing fall detection solutions are either too costly for average Indian households or require always-on internet subscriptions. FallGuard addresses this with a NodeMCU-based wearable costing under ₹500 in components, using freely available WiFi and IFTTT webhooks for alert delivery.`,
          },
          {
            title: '🏗️ System Architecture',
            content: `Hardware Layer: MPU6050 IMU sensor (accelerometer + gyroscope) → NodeMCU ESP8266 microcontroller\nAlgorithm Layer: Multi-threshold fall detection running on NodeMCU firmware (C++/Arduino)\nConnectivity Layer: NodeMCU WiFi module → IFTTT Webhook HTTP POST request\nNotification Layer: IFTTT → SMS / Email / WhatsApp alert to caregiver\nDemo Layer: GitHub Pages static site documenting the project with demo video\n\nData Flow: Sensor reads → magnitude + orientation computed → threshold checks → fall classified → WiFi POST → caregiver alert`,
          },
          {
            title: '⚙️ Fall Detection Algorithm',
            content: `The multi-threshold algorithm classifies a fall in three stages:\n\n1. Free-fall Detection — acceleration magnitude drops below 0.4g (free-fall threshold) for >80ms\n2. Impact Detection — acceleration magnitude spikes above 2.5g (impact threshold) within 500ms of free-fall\n3. Posture Verification — orientation change (gyroscope) exceeds 60°/s AND remains static for >2s post-impact (lying down, not recovering)\n\nAll three conditions must be met in sequence to trigger an alert — this significantly reduces false positives from normal movements like sitting down quickly or bending over.`,
          },
          {
            title: '🔧 Hardware Components',
            content: `NodeMCU ESP8266 — WiFi-enabled microcontroller, Arduino-compatible, ~₹180\nMPU6050 — 6-DOF IMU: 3-axis accelerometer + 3-axis gyroscope, I2C interface, ~₹80\nPower: 3.7V LiPo battery with TP4056 charging module for wearable use\nCasing: 3D-printable wristband mount for the sensor-MCU assembly\nTotal BOM cost: ~₹450`,
          },
          {
            title: '📡 Alert System — IFTTT Webhooks',
            content: `When a fall is detected, NodeMCU sends an HTTP POST to IFTTT Webhook endpoint:\n• Trigger: "fall_detected" event with timestamp and location\n• IFTTT Applet: Webhook → SMS to caregiver number + Email notification\n• Alert delivery time: typically under 3 seconds from fall detection\n• Configurable: caregivers can set up WhatsApp, phone calls, or multiple recipients via IFTTT`,
          },
          {
            title: '🛠️ Tech Stack & Why',
            content: `NodeMCU ESP8266 — chosen for built-in WiFi (no separate module needed), Arduino ecosystem support, and low cost\nMPU6050 — industry-standard 6-DOF IMU with I2C interface, well-documented, and accurate enough for fall classification\nC++/Arduino — real-time firmware on microcontroller; C++ gives low-latency sensor polling at 100Hz\nIFTTT Webhooks — zero-infrastructure alert delivery; free tier sufficient for personal use\nGitHub Pages — free static hosting for project documentation and demo`,
          },
          {
            title: '⚡ Challenges',
            content: `False positive reduction — initial single-threshold approach triggered on fast movements like jumping or vigorous walking; solved by adding the 3-stage sequential detection with posture verification\nSensor noise — MPU6050 raw readings are noisy at rest; solved with complementary filter combining accelerometer and gyroscope data\nPower consumption — NodeMCU active draw (~80mA) depleted battery quickly; optimized with WiFi deep sleep between sensor polling intervals\nIFTTT latency — webhook delivery occasionally delayed; added local buzzer as immediate physical alert while network alert is in transit`,
          },
          {
            title: '📊 Results',
            content: `Fall detection accuracy: ~94% on controlled test scenarios\nFalse positive rate: <6% on normal activities (walking, sitting, bending)\nAlert delivery time: 1.5–3.5s from fall event to caregiver notification\nBattery life: ~8 hours continuous monitoring on 1000mAh LiPo\nPrototype cost: ₹450 total BOM`,
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
            {['NodeMCU ESP8266', 'MPU6050', 'C++', 'Arduino', 'IFTTT Webhooks', 'WiFi HTTP', 'GitHub Pages'].map(t => (
              <span key={t} style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)', padding: '5px 14px', borderRadius: 8, fontSize: 13, fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://github.com/nagamanibuddepu/Fall_Detection" target="_blank" rel="noopener noreferrer" className="btn-primary">⌥ View on GitHub</a>
          <a href="https://nagamanibuddepu.github.io/Fall_Detection/" target="_blank" rel="noopener noreferrer" className="btn-ghost">● Live Demo</a>
          <Link href="/#projects" className="btn-ghost">← Back</Link>
        </div>
      </div>
    </main>
  )
}
