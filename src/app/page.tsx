'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  const services = [
    { title: 'Custom Homes', desc: 'Bespoke residential builds tailored to your vision and lifestyle.', icon: '⌂' },
    { title: 'Commercial', desc: 'Office, retail and mixed-use projects executed at the highest standard.', icon: '▣' },
    { title: 'Renovations', desc: 'Full-home transformations and high-end interior remodels.', icon: '◈' },
    { title: 'Design-Build', desc: 'Integrated design and construction under one accountable team.', icon: '✦' },
    { title: 'Luxury Renovation', desc: 'Elevating existing properties to new heights of refinement.', icon: '◆' },
    { title: 'Custom Carpentry', desc: 'Hand-crafted millwork and joinery defining interiors with lasting character.', icon: '⬡' },
  ]

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '100%', label: 'Licensed & Insured' },
    { value: '5★', label: 'Client Rating' },
  ]

  const process = [
    { num: '01', title: 'Consult', desc: 'We listen carefully to understand your goals, budget and timeline.' },
    { num: '02', title: 'Design', desc: 'Detailed plans, transparent estimates and material selection.' },
    { num: '03', title: 'Build', desc: 'Master craftsmen execute with precision, on time and on budget.' },
    { num: '04', title: 'Deliver', desc: 'Final walkthrough, warranty and dedicated aftercare service.' },
  ]

  const projects = [
    { title: 'The Onyx Residence', category: 'Luxury Residential', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80' },
    { title: 'Maison Noir Kitchen', category: 'Interior Renovation', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
    { title: 'Aurum Tower', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80' },
  ]

  const GoldLine = () => (
    <span style={{ display: 'block', width: '40px', height: '1px', background: 'linear-gradient(to right, #D4A843, #F0C866)' }} />
  )

  const SectionLabel = ({ text }: { text: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem' }}>
      <GoldLine />
      <span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>{text}</span>
    </div>
  )

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0f0f0ef0 0%, #0f0f0ec0 55%, #0f0f0e 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, #D4A84308 0%, transparent 65%)' }} />
        </div>

        <div style={{ textAlign: 'center', padding: '0 2rem', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '2rem', animation: 'fadeIn 1s ease forwards' }}>
            <GoldLine />
            <span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Building Excellence Since 2009</span>
            <GoldLine />
          </div>

          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: '400', color: '#fff', lineHeight: '1.05', marginBottom: '1.5rem', animation: 'fadeUp 1s ease 0.2s both' }}>
            We Build<br />
            <span className="gold-text" style={{ fontStyle: 'italic' }}>Timeless</span><br />
            Structures
          </h1>

          <p style={{ fontFamily: 'var(--font-jost)', color: '#ccc', fontSize: 'clamp(14px, 2vw, 17px)', lineHeight: '1.9', fontWeight: '300', maxWidth: '560px', margin: '0 auto 2.5rem', animation: 'fadeUp 1s ease 0.4s both' }}>
            Premier residential and commercial construction. Two decades of meticulous craftsmanship, uncompromising quality and timeless design.
          </p>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', animation: 'fadeUp 1s ease 0.6s both' }}>
            <Link href="/quote" className="btn-gold">Start Your Project →</Link>
            <Link href="/work" className="btn-ghost">View Our Work</Link>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #D4A843, transparent)' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#0a0a09', borderTop: '1px solid #D4A84322', borderBottom: '1px solid #D4A84322', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '1rem 0' }}>
              <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.8rem', fontWeight: '600', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginTop: '6px', fontWeight: '500' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section style={{ padding: '7rem 2rem', background: '#0f0f0e' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div ref={addRef} className="reveal">
            <div style={{ position: 'relative', height: '500px', overflow: 'hidden', boxShadow: '0 16px 60px rgba(212,168,67,0.15)' }}>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="EMF team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, #0f0f0e 0%, transparent 100%)' }} />
            </div>
          </div>

          <div ref={addRef} className="reveal">
            <SectionLabel text="About EMF" />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '400', color: '#fff', marginBottom: '0.5rem', lineHeight: '1.15' }}>
              Two Decades of<br /><span className="gold-text" style={{ fontStyle: 'italic' }}>Mastery.</span>
            </h2>
            <div style={{ width: '40px', height: '2px', background: 'linear-gradient(to right, #D4A843, #F0C866)', margin: '1.5rem 0' }} />
            <p style={{ fontFamily: 'var(--font-jost)', color: '#ccc', fontSize: '15px', lineHeight: '1.9', fontWeight: '300', marginBottom: '1.2rem' }}>
              EMF Constructions was founded on a simple principle: every detail matters. From the first sketch to the final walk-through, our team treats your project as our own — combining heritage craftsmanship with modern engineering.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#aaa', fontSize: '14px', lineHeight: '1.9', fontWeight: '300', marginBottom: '2rem' }}>
              We partner with leading architects, designers and trades to deliver landmark buildings, luxury residences and refined renovations across the region.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
              {['Licensed', 'Award Winning', 'On Schedule'].map((badge, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="gold-text" style={{ fontSize: '1.4rem', marginBottom: '4px' }}>
                    {i === 0 ? '✓' : i === 1 ? '★' : '◷'}
                  </div>
                  <div style={{ fontFamily: 'var(--font-jost)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', fontWeight: '500' }}>{badge}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-gold">Our Story</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '7rem 2rem', background: '#0a0a09' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionLabel text="Our Services" />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#fff', lineHeight: '1.1' }}>
              Full-Spectrum <span className="gold-text">Construction</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#aaa', fontSize: '14px', lineHeight: '1.8', fontWeight: '300', maxWidth: '520px', margin: '1rem auto 0' }}>
              From foundation to finish — every service delivered by our in-house team of master builders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: '#D4A84314' }} className="services-grid">
            {services.map((s, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ padding: '2.5rem', background: '#0a0a09', transition: 'background 0.3s', transitionDelay: `${i * 0.07}s`, cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#141413')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0a0a09')}>
                <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: '500', color: '#fff', marginBottom: '0.7rem' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#aaa', fontSize: '13px', lineHeight: '1.8', fontWeight: '300' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: '7rem 2rem', background: '#0f0f0e' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionLabel text="Our Process" />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#fff' }}>
              A Clear <span className="gold-text">Path</span> to Completion
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0', position: 'relative' }}>
            {process.map((step, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ padding: '2.5rem 2rem', transitionDelay: `${i * 0.1}s`, position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4A843, #F0C866)', flexShrink: 0 }} />
                  <span className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: '300' }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: '500', color: '#fff', marginBottom: '0.7rem' }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#aaa', fontSize: '13px', lineHeight: '1.8', fontWeight: '300' }}>{step.desc}</p>
                {i < process.length - 1 && (
                  <div style={{ position: 'absolute', top: '2.5rem', right: 0, width: '1px', height: '60%', background: 'linear-gradient(to bottom, #D4A84344, transparent)' }} className="process-divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ padding: '7rem 2rem', background: '#0a0a09' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <SectionLabel text="Featured Work" />
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#fff' }}>
                Recent <span className="gold-text">Projects</span>
              </h2>
            </div>
            <Link href="/work" style={{ fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4A843', textDecoration: 'none', fontWeight: '500' }}>
              View All →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {projects.map((p, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ overflow: 'hidden', boxShadow: '0 8px 40px rgba(212,168,67,0.1)' }}>
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  </div>
                  <div style={{ padding: '1.2rem 0', borderBottom: '1px solid #1a1a18' }}>
                    <div style={{ fontFamily: 'var(--font-jost)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4A843', marginBottom: '6px', fontWeight: '500' }}>{p.category}</div>
                    <div style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '1.3rem', fontWeight: '500' }}>{p.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ padding: '6rem 2rem', background: '#0f0f0e', borderTop: '1px solid #D4A84318', borderBottom: '1px solid #D4A84318' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div ref={addRef} className="reveal">
            <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3rem', lineHeight: 1, marginBottom: '1.5rem', opacity: 0.6 }}>❝</div>
            <blockquote style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: '400', color: '#f0f0f0', lineHeight: '1.6', marginBottom: '2rem', fontStyle: 'italic' }}>
              EMF transformed our vision into a residence beyond what we imagined. Their attention to every detail — from the steelwork to the gold inlay — is unmatched.
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(to right, transparent, #D4A843)' }} />
              <span style={{ fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4A843', fontWeight: '500' }}>Catherine M., Hillcrest Residence</span>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(to left, transparent, #D4A843)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '8rem 2rem', background: '#0a0a09', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.06 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, #D4A84308 0%, transparent 60%)' }} />
        </div>
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <div ref={addRef} className="reveal">
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '400', color: '#fff', marginBottom: '1.2rem', lineHeight: '1.1' }}>
              Ready to <span className="gold-text">Build</span> Something Extraordinary?
            </h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '15px', lineHeight: '1.8', fontWeight: '300', marginBottom: '2.5rem' }}>
              Schedule a complimentary consultation with our team and let's bring your project to life.
            </p>
            <Link href="/quote" className="btn-gold">Get a Free Quote →</Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-divider { display: none !important; }
        }
        @media (max-width: 580px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
