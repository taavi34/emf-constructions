'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function QuotePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', location: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', phone: '', projectType: '', location: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#1a1a18', border: '1px solid #2a2a28', color: '#e5e5e5',
    fontFamily: 'var(--font-jost)', fontSize: '16px', fontWeight: '300', padding: '14px 16px',
    outline: 'none', transition: 'border-color 0.3s',
  }
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em',
    textTransform: 'uppercase' as const, color: '#999', fontWeight: '500',
    display: 'block', marginBottom: '8px',
  }

  const GoldLine = () => <span style={{ display: 'block', width: '40px', height: '1px', background: 'linear-gradient(to right, #D4A843, #F0C866)', flexShrink: 0 }} />

  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '4rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', background: '#171717', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #D4A84344, transparent)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
          <GoldLine />
          <span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Let's Talk</span>
          <GoldLine />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: '400', color: '#fff', marginBottom: '1rem' }}>
          Get a <span className="gold-text" style={{ fontStyle: 'italic' }}>Quote</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '17px', lineHeight: '1.9', fontWeight: '300', maxWidth: '480px', margin: '0 auto' }}>
          Share your vision with us. We'll get back to you with an honest assessment and next steps.
        </p>
      </section>

      <section style={{ padding: '3rem 2rem 7rem', background: '#171717' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

          <div>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px solid #D4A84322', background: '#1a1a18' }}>
                <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3rem', marginBottom: '1rem' }}>✦</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', color: '#fff', marginBottom: '1rem', fontWeight: '400' }}>Thank You</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '16px', lineHeight: '1.8', fontWeight: '300' }}>
                  Thanks for reaching out. We've received your request and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+61 4XX XXX XXX" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Project Location</label>
                    <input name="location" value={form.location} onChange={handleChange} placeholder="Perth, WA" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Project Type *</label>
                  <select name="projectType" value={form.projectType} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Select a category</option>
                    <option>New Build</option>
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Civil Construction</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tell Us About Your Project *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Describe your vision, timeline, and any specific requirements..."
                    style={{ ...inputStyle, resize: 'vertical' as const }} />
                </div>
                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-jost)', color: '#e05555', fontSize: '15px' }}>Something went wrong. Please try again or email us directly.</p>
                )}
                <button type="submit" disabled={status === 'loading'} className="btn-gold"
                  style={{ width: '100%', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                  {status === 'loading' ? 'Sending...' : 'Submit Enquiry →'}
                </button>
              </form>
            )}
          </div>

          <div style={{ paddingTop: '1rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.8rem' }}>
                <GoldLine />
                <span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: '500' }}>Contact</span>
              </div>
              {[
                { icon: '📞', label: 'Phone', value: '+61 478 685 503' },
                { icon: '✉️', label: 'Email', value: 'Email coming soon' },
                { icon: '📍', label: 'Address', value: 'Perth, Western Australia (City & Rural)' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px', marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '4px', fontWeight: '500' }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-jost)', color: '#ccc', fontSize: '16px', fontWeight: '300' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '2rem', border: '1px solid #D4A84322', background: '#1a1a18' }}>
              <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '1.2rem' }}>What to Expect</div>
              {['On-site, face-to-face consultation', 'Free initial consultation', 'Detailed project assessment', 'No obligation quote'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '0.8rem', alignItems: 'center' }}>
                  <span style={{ display: 'block', width: '16px', height: '1px', background: 'linear-gradient(to right, #D4A843, #F0C866)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-jost)', color: '#ccc', fontSize: '15px', fontWeight: '300' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
