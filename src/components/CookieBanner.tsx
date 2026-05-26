'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('emf-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => { localStorage.setItem('emf-cookie-consent', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('emf-cookie-consent', 'declined'); setVisible(false) }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      left: '1.5rem',
      right: '1.5rem',
      zIndex: 9999,
      maxWidth: '860px',
      margin: '0 auto',
      background: '#111110',
      border: '1px solid #D4A84333',
      boxShadow: '0 8px 60px rgba(0,0,0,0.7)',
      animation: 'slideUp 0.5s ease forwards',
      overflow: 'hidden',
    }}>
      <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #D4A843, #F0C866, #D4A843, transparent)' }} />
      <div style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 260px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '15px' }}>🍪</span>
            <span style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '1.15rem', fontWeight: '500' }}>We use cookies</span>
          </div>
          <p style={{ fontFamily: 'var(--font-jost)', color: '#aaa', fontSize: '13px', lineHeight: '1.6', fontWeight: '300', margin: 0 }}>
            We use essential cookies to ensure this website functions correctly. No tracking or advertising cookies.{' '}
            <Link href="/cookies" style={{ color: '#D4A843', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Learn more</Link>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
          <button onClick={decline} style={{
            fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#888', background: 'transparent', border: '1px solid #333',
            padding: '9px 18px', cursor: 'pointer', fontWeight: '400', transition: 'all 0.3s', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#ccc' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#888' }}>
            Decline
          </button>
          <button onClick={accept} className="btn-gold" style={{ padding: '9px 22px', fontSize: '11px', whiteSpace: 'nowrap' }}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
