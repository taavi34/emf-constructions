'use client'
import { useState } from 'react'

export default function QuotePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', budget: '', location: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', phone: '', projectType: '', budget: '', location: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#1a1a18', border: '1px solid #2a2a28', color: '#e5e5e5',
    fontFamily: 'var(--font-jost)', fontSize: '14px', fontWeight: '300', padding: '14px 16px',
    outline: 'none', transition: 'border-color 0.3s',
  }
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const,
    color: '#888', fontWeight: '500', display: 'block', marginBottom: '8px',
  }

  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '4rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', background: '#111110', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #C9A84C44, transparent)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Let's Talk</span>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: '400', color: '#fff', marginBottom: '1rem' }}>
          Get a <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Quote</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '15px', lineHeight: '1.9', fontWeight: '300', maxWidth: '480px', margin: '0 auto' }}>
          Share your vision with us. We'll get back to you within 24 hours with an honest assessment and next steps.
        </p>
      </section>

      <section style={{ padding: '3rem 2rem 7rem', background: '#111110' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px solid #C9A84C22', background: '#1a1a18' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '3rem', marginBottom: '1rem' }}>✦</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', color: '#fff', marginBottom: '1rem', fontWeight: '400' }}>Thank You</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '14px', lineHeight: '1.8', fontWeight: '300' }}>
                  Your enquiry has been received. A member of our team will be in touch within 24 hours.
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
                    <option>Luxury Residential</option>
                    <option>Interior Renovation</option>
                    <option>Commercial</option>
                    <option>New Build</option>
                    <option>Luxury Renovation</option>
                    <option>Custom Carpentry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Estimated Budget</label>
                  <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Select a range</option>
                    <option>Under $100,000</option>
                    <option>$100,000 – $500,000</option>
                    <option>$500,000 – $1,000,000</option>
                    <option>$1,000,000 – $5,000,000</option>
                    <option>$5,000,000+</option>
                    <option>To Be Discussed</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tell Us About Your Project *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Describe your vision, timeline, and any specific requirements..." style={{ ...inputStyle, resize: 'vertical' as const }} />
                </div>
                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-jost)', color: '#e05555', fontSize: '13px' }}>Something went wrong. Please try again or email us directly.</p>
                )}
                <button type="submit" disabled={status === 'loading'} style={{
                  fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: '#111', background: status === 'loading' ? '#a07830' : '#C9A84C',
                  padding: '16px 32px', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  fontWeight: '600', transition: 'all 0.3s', width: '100%',
                  boxShadow: status === 'loading' ? 'none' : '0 4px 24px #C9A84C44',
                }}>
                  {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>

          <div style={{ paddingTop: '1rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', width: '30px', height: '1px', background: '#C9A84C' }} />
                <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: '500' }}>Contact</span>
              </div>
              {[
                { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: '✉️', label: 'Email', value: 'hello@emfconstructions.com' },
                { icon: '📍', label: 'Address', value: '1240 Oak Avenue, Suite 300' },
                { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 8am–6pm' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '16px', marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '4px', fontWeight: '500' }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '14px', fontWeight: '300' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '2rem', border: '1px solid #C9A84C22', background: '#1a1a18' }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '1rem' }}>What to Expect</div>
              {['Response within 24 hours', 'Free initial consultation', 'Detailed project assessment', 'No obligation quote'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '0.7rem', alignItems: 'center' }}>
                  <span style={{ display: 'block', width: '16px', height: '1px', background: '#C9A84C', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '13px', fontWeight: '300' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
