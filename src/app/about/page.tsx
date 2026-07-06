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

  const GoldLine = () => <span style={{ display: 'block', width: '40px', height: '1px', background: 'linear-gradient(to right, #D4A843, #F0C866)', flexShrink: 0 }} />

  const values = [
    { title: 'Craftsmanship', desc: 'Every joint, surface and finish is treated as a signature. We do not cut corners, ever.' },
    { title: 'Partnership', desc: 'Your vision drives every decision. We listen, advise, and build alongside you from day one.' },
    { title: 'Precision', desc: 'On time, on budget, and beyond expectation. Our project management is as refined as our builds.' },
    { title: 'Legacy', desc: 'We build structures that outlast trends, designed to be lived in, worked in, and passed down.' },
  ]

  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', background: '#171717', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #D4A84344, transparent)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
          <GoldLine />
          <span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Our Story</span>
          <GoldLine />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: '400', color: '#fff', marginBottom: '1.2rem' }}>
          About <span className="gold-text" style={{ fontStyle: 'italic' }}>EMF</span>
        </h1>
      </section>

      <section style={{ padding: '4rem 2rem 6rem', background: '#171717' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div ref={addRef} className="reveal">
            <div style={{ width: '100%', height: '500px', overflow: 'hidden', boxShadow: '0 16px 60px rgba(212,168,67,0.15)' }}>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="EMF team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ background: 'linear-gradient(135deg, #D4A843, #F0C866)', padding: '14px 20px', display: 'inline-block' }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: '600', color: '#111', lineHeight: 1 }}>90+</div>
              <div style={{ fontFamily: 'var(--font-jost)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#111a', fontWeight: '600' }}>Years Combined Experience</div>
            </div>
          </div>

          <div ref={addRef} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
              <GoldLine />
              <span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '400', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Building the extraordinary,<br />one structure at a time.
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#ccc', fontSize: '17px', lineHeight: '1.9', fontWeight: '300', marginBottom: '1.2rem' }}>
              EMF Contracting handles all aspects of construction and management for clients across Perth (both city and rural), backed by a team with over 90 years of combined experience in the building and construction industry. Our work spans new builds, residential construction, commercial construction and civil construction.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '16px', lineHeight: '1.9', fontWeight: '300', marginBottom: '2.5rem' }}>
              We're fully licensed and insured. Every project starts with an on-site, face-to-face meeting, moves through planning and design until the vision is right, and is delivered on time and on budget, with honest, direct communication the whole way through.
            </p>
            <Link href="/quote" className="btn-gold">Work With Us</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem 7rem', background: '#111110' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
              <GoldLine />
              <span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>What We Stand For</span>
              <GoldLine />
            </div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '400', color: '#fff' }}>Our Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: '#D4A84318' }}>
            {values.map((v, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ padding: '2.8rem 2rem', background: '#111110', transitionDelay: `${i * 0.1}s` }}>
                <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem', fontWeight: '300', marginBottom: '1rem', opacity: 0.5, lineHeight: 1 }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.55rem', fontWeight: '500', color: '#fff', marginBottom: '0.8rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '15px', lineHeight: '1.8', fontWeight: '300' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
