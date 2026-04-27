'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function AboutPage() {
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

  const values = [
    { title: 'Craftsmanship', desc: 'Every joint, surface and finish is treated as a signature. We do not cut corners — ever.' },
    { title: 'Partnership', desc: 'Your vision drives every decision. We listen, advise, and build alongside you from day one.' },
    { title: 'Precision', desc: 'On time, on budget, and beyond expectation. Our project management is as refined as our builds.' },
    { title: 'Legacy', desc: 'We build structures that outlast trends — designed to be lived in, worked in, and passed down.' },
  ]

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: '140px', paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', background: '#0a0a0a', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #C9A84C44, transparent)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>Our Story</span>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: '300', color: '#f0f0f0', marginBottom: '1.2rem' }}>
          About <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>EMF</span>
        </h1>
      </section>

      {/* Story */}
      <section style={{ padding: '4rem 2rem 6rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div ref={addRef} className="reveal">
            <div style={{ width: '100%', height: '480px', background: '#111', position: 'relative', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="EMF Constructions team"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
              />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: '#C9A84C', padding: '12px 20px' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: '600', color: '#0a0a0a', lineHeight: 1 }}>15+</div>
                <div style={{ fontFamily: 'var(--font-jost)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a99', fontWeight: '500' }}>Years of Excellence</div>
              </div>
            </div>
          </div>

          <div ref={addRef} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '300', color: '#f0f0f0', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Building the extraordinary,<br />one structure at a time.
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '14px', lineHeight: '1.9', fontWeight: '300', marginBottom: '1.2rem' }}>
              Founded in 2009, EMF Constructions has grown from a boutique residential builder into one of the most respected construction firms on the West Coast. Our work spans luxury homes, commercial landmarks, and everything in between.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '14px', lineHeight: '1.9', fontWeight: '300', marginBottom: '2rem' }}>
              What sets us apart is our relentless attention to detail and our belief that every client deserves a bespoke experience — from the first meeting to the final handover.
            </p>
            <Link href="/quote" style={{
              fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#0a0a0a', background: '#C9A84C', padding: '14px 32px', textDecoration: 'none', fontWeight: '500',
            }}>
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 2rem', background: '#080808' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>What We Stand For</span>
              <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '300', color: '#f0f0f0' }}>Our Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: '#C9A84C11' }}>
            {values.map((v, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ padding: '2.5rem 2rem', background: '#080808', transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', color: '#C9A84C', fontSize: '2.5rem', fontWeight: '300', marginBottom: '1rem', opacity: 0.4 }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: '500', color: '#f0f0f0', marginBottom: '0.8rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '13px', lineHeight: '1.8', fontWeight: '300' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
