import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    // If no key or placeholder, just log and return success
    if (!RESEND_API_KEY || RESEND_API_KEY === 'not-needed' || RESEND_API_KEY === 'placeholder') {
      console.log('📧 Contact form (no Resend key):', { name, email, subject, message })
      return NextResponse.json({ success: true, mode: 'logged' })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['mbuddepu0827@gmail.com'],
        reply_to: email,
        subject: `[Portfolio] ${subject} — from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0f; color: #f0f0f5; border-radius: 12px;">
            <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h2 style="color: #00E5CC; margin: 0 0 4px;">New Portfolio Message</h2>
              <p style="color: #8888a8; margin: 0; font-size: 13px;">via nagamani.dev contact form</p>
            </div>
            <p><strong style="color: #8888a8;">From:</strong> <span style="color: #f0f0f5;">${name}</span></p>
            <p><strong style="color: #8888a8;">Email:</strong> <a href="mailto:${email}" style="color: #00E5CC;">${email}</a></p>
            <p><strong style="color: #8888a8;">Subject:</strong> <span style="color: #f0f0f5;">${subject}</span></p>
            <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #00E5CC;">
              <p style="margin: 0; white-space: pre-wrap; color: #f0f0f5; line-height: 1.7;">${message}</p>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
