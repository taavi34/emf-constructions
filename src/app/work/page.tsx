'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const categories = ['All', 'Luxury Residential', 'Interior Renovation', 'Commercial', 'Luxury Renovation', 'New Build', 'Custom Carpentry']

const projects = [
  {
    title: 'The Onyx Residence',
    category: 'Luxury Residential',
    desc: 'A 6,200 sq ft custom home featuring blackened steel, floor-to-ceiling glass and bespoke gold-leaf detailing.',
    location: 'Hillcrest, CA',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
  },
  {
    title: 'Maison Noir Kitchen',
    category: 'Interior Renovation',
    desc: 'Full gut renovation with hand-finished cabinetry, brass hardware and Italian Calacatta marble.',
    location: 'Beverly Hills, CA',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    title: 'Aurum Tower',
    category: 'Commercial',
    desc: 'An 8-story mixed-use tower with a signature illuminated facade and curated retail spaces.',
    location: 'Downtown LA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    title: 'Midnight Spa Bath',
    category: 'Luxury Renovation',
    desc: 'Master bath transformation with book-matched marble, brushed brass fixtures and underfloor heating.',
    location: 'Malibu, CA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  },
  {
    title: 'The Foundry Project',
    category: 'New Build',
    desc: 'Ground-up multi-unit residential build delivered three weeks ahead of schedule.',
    location: 'Pasadena, CA',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    title: 'Heritage Stairwell',
    category: 'Custom Carpentry',
    desc: 'Sculptural floating staircase combining black walnut treads with hand-forged iron and brass detail.',
    location: 'Santa Monica, CA',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'The Whitmore Estate',
    category: 'Luxury Residential',
    desc: 'A sprawling hillside estate with panoramic views, infinity pool, and bespoke stone cladding throughout.',
    location: 'Bel Air, CA',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    title: 'Obsidian Office HQ',
    category: 'Commercial',
    desc: 'A 12-floor corporate headquarters with biophilic design, custom lighting installations and rooftop terrace.',
    location: 'Century City, CA',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: 'The Amber Library',
    category: 'Custom Carpentry',
    desc: 'Floor-to-ceiling walnut shelving, rolling library ladders and a bespoke reading nook with brass inlay.',
    location: 'Brentwood, CA',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
]

export default function WorkPage() {
  const [active, setActive] = useState('All')
  const revealRefs = useRef<HTMLElement[]>([])

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

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

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: '140px', paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', background: '#0a0a0a', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #C9A84C44, transparent)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase' }}>Our Portfolio</span>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: '300', color: '#f0f0f0', marginBottom: '1.2rem' }}>
          Work <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Done</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '14px', lineHeight: '1.9', fontWeight: '300', maxWidth: '500px', margin: '0 auto' }}>
          A curated selection of completed projects — each one a testament to craftsmanship, partnership, and pride.
        </p>
      </section>

      {/* Filter tabs */}
      <section style={{ background: '#0a0a0a', paddingBottom: '2rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', minWidth: 'max-content' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '9px 18px',
                  border: active === cat ? '1px solid #C9A84C' : '1px solid #222',
                  background: active === cat ? '#C9A84C' : 'transparent',
                  color: active === cat ? '#0a0a0a' : '#555',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ padding: '1rem 2rem 7rem', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1px', background: '#111' }}>
          {filtered.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              ref={addRef}
              className="reveal"
              style={{
                background: '#0a0a0a',
                overflow: 'hidden',
                position: 'relative',
                transitionDelay: `${(i % 3) * 0.1}s`,
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Category badge */}
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: '#0a0a0acc', backdropFilter: 'blur(4px)',
                  border: '1px solid #C9A84C44',
                  padding: '4px 12px',
                  fontFamily: 'var(--font-jost)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: '500',
                }}>
                  {project.category}
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: '500', color: '#f0f0f0', marginBottom: '0.6rem', letterSpacing: '0.01em' }}>{project.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '13px', lineHeight: '1.7', fontWeight: '300', marginBottom: '1rem' }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-jost)', color: '#444', fontSize: '11px', letterSpacing: '0.1em' }}>📍 {project.location}</span>
                  <span style={{ fontFamily: 'var(--font-jost)', color: '#444', fontSize: '11px', letterSpacing: '0.1em' }}>🗓 {project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '5rem 2rem', background: '#080808', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-cormorant)', color: '#f0f0f0', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: '300', marginBottom: '1rem' }}>
          Your Project Could Be <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Next.</span>
        </p>
        <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '13px', marginBottom: '2rem', fontWeight: '300' }}>Tell us about your vision — we'd be honoured to bring it to life.</p>
        <a href="/quote" style={{
          fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#0a0a0a', background: '#C9A84C', padding: '14px 36px', textDecoration: 'none', fontWeight: '500',
        }}>
          Start a Conversation
        </a>
      </section>
    </>
  )
}
