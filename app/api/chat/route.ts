import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { message, context } = await req.json()

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 })
    }

    const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY

    if (!ANTHROPIC_API_KEY) {
      // Fallback static responses when no API key
      return NextResponse.json({
        reply: getFallbackReply(message),
      })
    }

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 256,
        system: context,
        messages: [{ role: 'user', content: message }],
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Anthropic error:', err)
      return NextResponse.json({ reply: getFallbackReply(message) })
    }

    const data = await res.json()
    const reply = data.content?.[0]?.text || getFallbackReply(message)

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('Chat API error:', err)
    return NextResponse.json({ reply: "I'm having trouble connecting right now. Please reach out directly at mbuddepu0827@gmail.com!" })
  }
}

function getFallbackReply(message: string): string {
  const msg = message.toLowerCase()

  if (msg.includes('skill') || msg.includes('tech') || msg.includes('language'))
    return "Nagamani is skilled in Python, Java, SQL, and R. For ML/Data Science she uses Scikit-learn, XGBoost, LightGBM, Pandas, and NumPy. She also works with Node.js, PostgreSQL, MongoDB, and Git."

  if (msg.includes('project') || msg.includes('built') || msg.includes('work'))
    return "Nagamani has built 4 projects: PriceOptima (AI pricing system at Infosys), AI Logistics Optimizer (SIH 2025 finalist), AI Price Tracker (github.com/nagamanibuddepu/PriceTracker), and Elderly Fall Detection (github.com/nagamanibuddepu/Fall_Detection)."

  if (msg.includes('sih') || msg.includes('hackathon') || msg.includes('achiev'))
    return "Nagamani was a Grand Finalist at Smart India Hackathon 2025 — selected among 1,360 finalist teams from 68,000+ teams across India! She built an AI-driven logistics optimizer for steel supply chain."

  if (msg.includes('contact') || msg.includes('reach') || msg.includes('email'))
    return "You can reach Nagamani at mbuddepu0827@gmail.com or call +91 9398172938. She's also on LinkedIn at nagamani-buddepu-9612611a6."

  if (msg.includes('intern') || msg.includes('infosys') || msg.includes('experience'))
    return "Nagamani is currently an AI Intern at Infosys Springboard (Feb 2026–Present), working on PriceOptima — a machine learning-based dynamic pricing system using XGBoost and LightGBM."

  if (msg.includes('education') || msg.includes('college') || msg.includes('gpa') || msg.includes('cgpa'))
    return "Nagamani is pursuing B.Tech in CSE (Data Science) at MLR Institute of Technology, Hyderabad (2023–2027) with an impressive 9.30 CGPA out of 10."

  if (msg.includes('github') || msg.includes('leetcode') || msg.includes('code') || msg.includes('competitive'))
    return "Find Nagamani on LeetCode (Nagamani_buddepu), GitHub (nagamanibuddepu), CodeChef (nagamani_6264), HackerRank (mbuddepu0827), and GeeksForGeeks (mbuddepggyc)."

  return "I can tell you about Nagamani's projects, skills, achievements, education, or how to contact her. What would you like to know?"
}
