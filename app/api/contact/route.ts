import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Use Resend if API key is available, otherwise log
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['mbuddepu0827@gmail.com'],
          subject: `[Portfolio] ${subject} — from ${name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
              <h2 style="color: #00E5CC; margin-bottom: 8px;">New Portfolio Message</h2>
              <hr style="border-color: #eee; margin-bottom: 24px;" />
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border-color: #eee; margin: 16px 0;" />
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `,
          reply_to: email,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error('Resend error:', err)
        return NextResponse.json({ error: 'Email failed to send' }, { status: 500 })
      }
    } else {
      // Dev mode: just log
      console.log('📧 Contact form submission:', { name, email, subject, message })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
