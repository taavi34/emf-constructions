'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work Done' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid #C9A84C22' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '36px',
            height: '36px',
            border: '1px solid #C9A84C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-cormorant)',
            color: '#C9A84C',
            fontSize: '18px',
            fontWeight: '600',
          }}>E</div>
          <div>
            <div style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '16px', fontWeight: '600', letterSpacing: '0.15em', lineHeight: 1 }}>EMF</div>
            <div style={{ fontFamily: 'var(--font-jost)', color: '#888', fontSize: '9px', fontWeight: '400', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Constructions</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: pathname === link.href ? '#C9A84C' : '#aaa',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontWeight: '400',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              background: '#C9A84C',
              padding: '10px 22px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'background 0.3s',
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
          className="mobile-burger"
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: '22px', height: '1px', background: '#C9A84C' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#111',
          borderTop: '1px solid #C9A84C22',
          padding: '1.5rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: pathname === link.href ? '#C9A84C' : '#aaa',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              background: '#C9A84C',
              padding: '12px 22px',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '500',
              marginTop: '0.5rem',
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
