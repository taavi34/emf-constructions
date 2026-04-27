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

  const accept = () => {
    localStorage.setItem('emf-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('emf-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 4rem)',
      maxWidth: '860px',
      background: '#111110',
      border: '1px solid #D4A84333',
      padding: '1.5rem 2rem',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      flexWrap: 'wrap',
      animation: 'slideUp 0.5s ease forwards',
      boxShadow: '0 8px 60px rgba(0,0,0,0.6), 0 0 0 1px #D4A84318',
    }}>
      {/* Gold accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, transparent, #D4A843, #F0C866, #D4A843, transparent)' }} />

      <div style={{ flex: 1, minWidth: '260px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '16px' }}>🍪</span>
          <span style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '1.2rem', fontWeight: '500', letterSpacing: '0.02em' }}>
            We use cookies
          </span>
        </div>
        <p style={{ fontFamily: 'var(--font-jost)', color: '#aaa', fontSize: '13px', lineHeight: '1.7', fontWeight: '300' }}>
          We use essential cookies to ensure this website functions correctly. No tracking or advertising cookies.{' '}
          <Link href="/cookies" style={{ color: '#D4A843', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Learn more
          </Link>
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#888', background: 'transparent', border: '1px solid #333',
            padding: '10px 20px', cursor: 'pointer', fontWeight: '400', transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#555'; e.currentTarget.style.color = '#ccc' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#888' }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="btn-gold"
          style={{ padding: '10px 24px', fontSize: '11px' }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
