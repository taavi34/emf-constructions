import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid #C9A84C22',
      padding: '4rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{
                width: '32px', height: '32px',
                border: '1px solid #C9A84C',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '16px',
              }}>E</div>
              <div>
                <div style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '14px', fontWeight: '600', letterSpacing: '0.15em' }}>EMF CONSTRUCTIONS</div>
                <div style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Building Excellence</div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '13px', lineHeight: '1.8', fontWeight: '300', maxWidth: '260px' }}>
              Crafting timeless structures with uncompromising quality. From luxury residences to commercial landmarks — EMF Constructions brings vision to reality.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-jost)', color: '#888', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.2rem', fontWeight: '500' }}>Navigate</h4>
            {[
              { href: '/', label: 'Home' },
              { href: '/work', label: 'Work Done' },
              { href: '/about', label: 'About' },
              { href: '/quote', label: 'Get a Quote' },
            ].map(link => (
              <div key={link.href} style={{ marginBottom: '0.7rem' }}>
                <Link href={link.href} style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '13px', textDecoration: 'none', transition: 'color 0.3s', fontWeight: '300' }}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-jost)', color: '#888', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.2rem', fontWeight: '500' }}>Contact</h4>
            {[
              { icon: '📞', text: '+1 (555) 123-4567' },
              { icon: '✉️', text: 'hello@emfconstructions.com' },
              { icon: '📍', text: '1240 Oak Avenue, Suite 300' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '0.8rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '12px' }}>{item.icon}</span>
                <span style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '13px', fontWeight: '300' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'var(--font-jost)', color: '#333', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            © 2026 EMF Constructions — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
