import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, projectType, budget, location, message } = body

    // 1. Save to Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error: dbError } = await supabase
      .from('quote_requests')
      .insert([{ name, email, phone, project_type: projectType, budget, location, message }])

    if (dbError) {
      console.error('Supabase error:', dbError)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    // 2. Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY!)

    await resend.emails.send({
      from: 'EMF Constructions <noreply@emfconstructions.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; padding: 40px;">
          <div style="border-left: 3px solid #C9A84C; padding-left: 20px; margin-bottom: 30px;">
            <h1 style="color: #C9A84C; font-size: 24px; margin: 0 0 4px;">New Quote Request</h1>
            <p style="color: #666; margin: 0; font-size: 14px;">EMF Constructions</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['Name', name],
              ['Email', email],
              ['Phone', phone || 'Not provided'],
              ['Project Type', projectType],
              ['Budget', budget || 'Not specified'],
              ['Location', location || 'Not specified'],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; width: 140px; border-bottom: 1px solid #222;">${label}</td>
                <td style="padding: 10px 0; color: #e5e5e5; font-size: 14px; border-bottom: 1px solid #222;">${value}</td>
              </tr>
            `).join('')}
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #111; border: 1px solid #222;">
            <p style="color: #888; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 10px;">Message</p>
            <p style="color: #e5e5e5; font-size: 14px; line-height: 1.7; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    })

    // 3. Send confirmation to client
    await resend.emails.send({
      from: 'EMF Constructions <noreply@emfconstructions.com>',
      to: email,
      subject: 'We received your enquiry — EMF Constructions',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; padding: 40px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #C9A84C; font-size: 28px; font-weight: 300; margin: 0 0 8px;">EMF Constructions</h1>
            <p style="color: #555; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0;">Building Excellence</p>
          </div>
          <p style="color: #e5e5e5; font-size: 15px; line-height: 1.8;">Dear ${name},</p>
          <p style="color: #777; font-size: 14px; line-height: 1.8;">Thank you for reaching out. We have received your enquiry and a member of our team will be in touch within <strong style="color: #C9A84C;">24 hours</strong> to discuss your project.</p>
          <p style="color: #777; font-size: 14px; line-height: 1.8;">In the meantime, feel free to explore our work at <a href="https://emfconstructions.com/work" style="color: #C9A84C;">emfconstructions.com/work</a>.</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #222; color: #444; font-size: 12px;">
            <p style="margin: 0;">EMF Constructions · 1240 Oak Avenue, Suite 300 · hello@emfconstructions.com</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quote API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
