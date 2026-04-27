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

  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)',
      }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px)`,
        }} />
        {/* Gold glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, #C9A84C08 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ textAlign: 'center', padding: '0 2rem', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '2rem', animation: 'fadeIn 1s ease forwards' }}>
            <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '400' }}>Building Excellence Since 2009</span>
            <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: '300',
            color: '#f0f0f0',
            lineHeight: '1.05',
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
            animation: 'fadeUp 1s ease 0.2s both',
          }}>
            We Build<br />
            <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Timeless</span><br />
            Structures
          </h1>

          <p style={{
            fontFamily: 'var(--font-jost)',
            color: '#777',
            fontSize: 'clamp(14px, 2vw, 16px)',
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
              color: '#0a0a0a', background: '#C9A84C', padding: '14px 32px', textDecoration: 'none', fontWeight: '500',
            }}>
              View Our Work
            </Link>
            <Link href="/quote" style={{
              fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#C9A84C', border: '1px solid #C9A84C44', padding: '14px 32px', textDecoration: 'none', fontWeight: '400',
            }}>
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--font-jost)', color: '#444', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#C9A84C', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.8rem', fontWeight: '600', color: '#0a0a0a', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a99', marginTop: '6px', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '7rem 2rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '300', color: '#f0f0f0', letterSpacing: '-0.01em' }}>
              Our Services
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: '#C9A84C11' }}>
            {services.map((service, i) => (
              <div
                key={i}
                ref={addRef}
                className="reveal"
                style={{
                  padding: '2.5rem',
                  background: '#0a0a0a',
                  transition: 'background 0.3s',
                  transitionDelay: `${i * 0.1}s`,
                  cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#111')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
              >
                <div style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: '500', color: '#f0f0f0', marginBottom: '0.8rem', letterSpacing: '0.02em' }}>{service.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '13px', lineHeight: '1.8', fontWeight: '300' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '7rem 2rem', background: '#080808', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '500px', height: '300px',
          background: 'radial-gradient(ellipse, #C9A84C06 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <div ref={addRef} className="reveal">
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1rem' }}>Your Project Could Be</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '300', color: '#f0f0f0', marginBottom: '1.5rem' }}>
              Next<span style={{ color: '#C9A84C' }}>.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '14px', lineHeight: '1.8', fontWeight: '300', marginBottom: '2.5rem' }}>
              Tell us about your vision — we'd be honoured to bring it to life.
            </p>
            <Link href="/quote" style={{
              fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#0a0a0a', background: '#C9A84C', padding: '16px 40px', textDecoration: 'none', fontWeight: '500',
            }}>
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}
