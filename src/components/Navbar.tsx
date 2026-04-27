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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(15,15,14,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid #D4A84322' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px',
            border: '1px solid #D4A843',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-cormorant)',
            background: 'linear-gradient(135deg, #D4A843 0%, #F0C866 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            fontSize: '18px', fontWeight: '600',
          }}>E</div>
          <div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '15px', fontWeight: '600', letterSpacing: '0.15em', lineHeight: 1, background: 'linear-gradient(135deg, #D4A843, #F0C866)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>EMF</div>
            <div style={{ fontFamily: 'var(--font-jost)', color: '#666', fontSize: '9px', fontWeight: '400', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Constructions</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: pathname === link.href ? '#D4A843' : '#ccc',
              textDecoration: 'none', transition: 'color 0.3s', fontWeight: '400',
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/quote" className="btn-gold" style={{ padding: '10px 22px', fontSize: '10px' }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }} className="mobile-burger" aria-label="Menu">
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: '22px', height: '1px', background: '#D4A843' }} />)}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: '#141413', borderTop: '1px solid #D4A84322', padding: '1.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-jost)', fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: pathname === link.href ? '#D4A843' : '#ccc', textDecoration: 'none',
            }}>{link.label}</Link>
          ))}
          <Link href="/quote" onClick={() => setMenuOpen(false)} className="btn-gold" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
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
