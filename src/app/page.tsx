'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  const services = [
    { title: 'Luxury Residential', desc: 'Bespoke homes built to the highest standard — where architecture meets artistry.', icon: '⬡' },
    { title: 'Interior Renovation', desc: 'Transformative renovations that reimagine spaces with precision and elegance.', icon: '◈' },
    { title: 'Commercial', desc: 'Commercial landmarks that blend function with striking architectural presence.', icon: '▣' },
    { title: 'New Build', desc: 'Ground-up construction delivered on time, on budget, and beyond expectation.', icon: '◻' },
    { title: 'Luxury Renovation', desc: 'Elevating existing properties to new heights of refinement and value.', icon: '◆' },
    { title: 'Custom Carpentry', desc: 'Hand-crafted millwork and joinery that define interiors with lasting character.', icon: '✦' },
  ]

  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '200+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '$2B+', label: 'Value Delivered' },
  ]

  const projects = [
    { title: 'The Onyx Residence', category: 'Luxury Residential', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80' },
    { title: 'Maison Noir Kitchen', category: 'Interior Renovation', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
    { title: 'Aurum Tower', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80' },
  ]

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
            alt="EMF Constructions luxury home"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #111110ee 0%, #111110bb 50%, #111110 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, #C9A84C08 0%, transparent 70%)' }} />
        </div>

        <div style={{ textAlign: 'center', padding: '0 2rem', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '2rem', animation: 'fadeIn 1s ease forwards' }}>
            <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Building Excellence Since 2009</span>
            <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: '400',
            color: '#ffffff',
            lineHeight: '1.05',
            marginBottom: '1.5rem',
            animation: 'fadeUp 1s ease 0.2s both',
            textShadow: '0 2px 40px #0008',
          }}>
            We Build<br />
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Timeless</span><br />
            Structures
          </h1>

          <p style={{
            fontFamily: 'var(--font-jost)',
            color: '#ccc',
            fontSize: 'clamp(14px, 2vw, 17px)',
            lineHeight: '1.9',
            fontWeight: '300',
            maxWidth: '560px',
            margin: '0 auto 2.5rem',
            animation: 'fadeUp 1s ease 0.4s both',
          }}>
            From luxury residences to commercial landmarks — EMF Constructions crafts spaces that endure. Every project is a testament to craftsmanship, partnership, and pride.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeUp 1s ease 0.6s both' }}>
            <Link href="/work" style={{
              fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#111', background: '#C9A84C', padding: '15px 36px', textDecoration: 'none', fontWeight: '600',
              boxShadow: '0 4px 30px #C9A84C66',
            }}>
              View Our Work
            </Link>
            <Link href="/quote" style={{
              fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#fff', border: '1px solid #ffffff55', padding: '15px 36px', textDecoration: 'none', fontWeight: '400',
              backdropFilter: 'blur(4px)',
            }}>
              Get a Quote
            </Link>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--font-jost)', color: '#888', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: '#C9A84C', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3rem', fontWeight: '600', color: '#111', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#111a', marginTop: '6px', fontWeight: '600' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — fixed 3-col grid, no empty cell */}
      <section style={{ padding: '7rem 2rem', background: '#111110' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#fff' }}>Our Services</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#C9A84C18' }} className="services-grid">
            {services.map((service, i) => (
              <div
                key={i}
                ref={addRef}
                className="reveal"
                style={{
                  padding: '2.5rem',
                  background: '#111110',
                  transition: 'background 0.3s',
                  transitionDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1c1c1a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#111110')}
              >
                <div style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: '500', color: '#fff', marginBottom: '0.8rem' }}>{service.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#aaa', fontSize: '13px', lineHeight: '1.8', fontWeight: '300' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section style={{ padding: '7rem 2rem', background: '#0e0e0d' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
                <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Portfolio</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#fff' }}>Featured Work</h2>
            </div>
            <Link href="/work" style={{
              fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#C9A84C', border: '1px solid #C9A84C44', padding: '11px 24px', textDecoration: 'none', fontWeight: '500',
            }}>
              View All →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {projects.map((p, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ position: 'relative', height: '320px', overflow: 'hidden', boxShadow: '0 8px 40px #C9A84C22' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0e0e0dcc 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem' }}>
                    <div style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '500' }}>{p.category}</div>
                    <div style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '1.3rem', fontWeight: '500' }}>{p.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section style={{ padding: '7rem 2rem', background: '#111110' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div ref={addRef} className="reveal">
            <div style={{ position: 'relative', height: '480px', overflow: 'hidden', boxShadow: '0 12px 60px #C9A84C2a' }}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="EMF team at work"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: '#C9A84C', padding: '14px 20px' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.2rem', fontWeight: '600', color: '#111', lineHeight: 1 }}>15+</div>
                <div style={{ fontFamily: 'var(--font-jost)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#111a', fontWeight: '600' }}>Years of Excellence</div>
              </div>
            </div>
          </div>

          <div ref={addRef} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Building the extraordinary,<br />one structure at a time.
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '14px', lineHeight: '1.9', fontWeight: '300', marginBottom: '1.2rem' }}>
              Founded in 2009, EMF Constructions has grown from a boutique residential builder into one of the most respected construction firms in the region. Our work spans luxury homes, commercial landmarks, and everything in between.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '14px', lineHeight: '1.9', fontWeight: '300', marginBottom: '2rem' }}>
              What sets us apart is our relentless attention to detail and belief that every client deserves a bespoke experience — from first meeting to final handover.
            </p>
            <Link href="/about" style={{
              fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#111', background: '#C9A84C', padding: '14px 32px', textDecoration: 'none', fontWeight: '600',
              boxShadow: '0 4px 24px #C9A84C44', display: 'inline-block',
            }}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 2rem', background: '#0e0e0d', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.07 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, #C9A84C08 0%, transparent 60%)' }} />
        </div>
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <div ref={addRef} className="reveal">
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1rem' }}>Your Project Could Be</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: '400', color: '#fff', marginBottom: '1.5rem' }}>
              Next<span style={{ color: '#C9A84C' }}>.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '15px', lineHeight: '1.8', fontWeight: '300', marginBottom: '2.5rem' }}>
              Tell us about your vision — we'd be honoured to bring it to life.
            </p>
            <Link href="/quote" style={{
              fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#111', background: '#C9A84C', padding: '18px 48px', textDecoration: 'none', fontWeight: '600',
              boxShadow: '0 6px 40px #C9A84C55', display: 'inline-block',
            }}>
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
