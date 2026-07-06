'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const revealRefs = useRef<HTMLElement[]>([])
  const router = useRouter()

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

  const GoldLine = () => (
    <span style={{ display: 'block', width: '40px', height: '1px', background: 'linear-gradient(to right, #D4A843, #F0C866)', flexShrink: 0 }} />
  )

  const SectionLabel = ({ text, center = false }: { text: string; center?: boolean }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem', justifyContent: center ? 'center' : 'flex-start' }}>
      <GoldLine />
      <span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>{text}</span>
      {center && <GoldLine />}
    </div>
  )

  const services = [
    { title: 'New Builds', desc: 'Ground-up construction delivered on time and on budget, from planning through to handover.', icon: '⌂' },
    { title: 'Residential Construction', desc: 'Homes and residential projects built with honest communication from first meeting to final walkthrough.', icon: '◈' },
    { title: 'Commercial Construction', desc: 'Commercial builds and fit-outs backed by decades of combined industry experience.', icon: '▣' },
    { title: 'Civil Construction', desc: 'Civil works delivered with the same on-site, hands-on approach we bring to every project.', icon: '◻' },
  ]

  const stats = [
    { value: '90+', label: 'Years Combined Experience' },
    { value: '100%', label: 'Licensed & Insured' },
  ]

  const process = [
    { num: '01', title: 'Consult', desc: 'We listen carefully to understand your goals, budget and timeline.' },
    { num: '02', title: 'Design', desc: 'Detailed plans, transparent estimates and material selection.' },
    { num: '03', title: 'Build', desc: 'Master craftsmen execute with precision, on time and on budget.' },
    { num: '04', title: 'Deliver', desc: 'Final walkthrough, warranty and dedicated aftercare service.' },
  ]

  const featuredProjects = [
    { title: 'Henderson Warehouse Refurbishment', category: 'Commercial', slug: 'henderson-warehouse-refurbishment', image: 'https://images.unsplash.com/photo-1565636291661-2ba5f34d2d40?w=800&q=80' },
    { title: 'Residential Renovations', category: 'Residential', slug: 'residential-renovations', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80' },
    { title: 'Greylands Hospital Concreting', category: 'Civil', slug: 'greylands-hospital-concreting', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80' },
  ]

  const badges = [
    { icon: '✓', label: 'Licensed' },
    { icon: '★', label: 'Award Winning' },
    { icon: '◷', label: 'On Schedule' },
  ]

  return (
    <>
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #171717f0 0%, #171717c0 55%, #171717 100%)' }} />
        </div>
        <div style={{ textAlign: 'center', padding: '120px 2rem 140px', maxWidth: '960px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '2.2rem', animation: 'fadeIn 1s ease forwards' }}>
            <GoldLine /><span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '12px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Building Excellence</span><GoldLine />
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(4rem, 11vw, 7.5rem)', fontWeight: '400', color: '#fff', lineHeight: '1.03', marginBottom: '1.8rem', animation: 'fadeUp 1s ease 0.2s both' }}>
            We Build<br /><span className="gold-text" style={{ fontStyle: 'italic' }}>Timeless</span><br />Structures
          </h1>
          <p style={{ fontFamily: 'var(--font-jost)', color: '#ccc', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '1.85', fontWeight: '300', maxWidth: '580px', margin: '0 auto 2.8rem', animation: 'fadeUp 1s ease 0.4s both' }}>
            New builds, residential, commercial and civil construction across Perth — backed by over 90 years of combined industry experience.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', animation: 'fadeUp 1s ease 0.6s both' }}>
            <Link href="/quote" className="btn-gold">Start Your Project</Link>
            <Link href="/work" className="btn-ghost">View Our Work</Link>
          </div>
        </div>
        <div className="scroll-indicator" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, #D4A843, transparent)' }} />
        </div>
      </section>

      <section style={{ background: '#111110', borderTop: '1px solid #D4A84322', borderBottom: '1px solid #D4A84322', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '1.2rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '2px', lineHeight: 1.1, paddingBottom: '4px' }}>
                <span className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3.2rem', fontWeight: '600' }}>{s.value}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginTop: '8px', fontWeight: '500' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '8rem 2rem', background: '#171717' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div ref={addRef} className="reveal">
            <div style={{ position: 'relative', height: '520px', overflow: 'hidden', boxShadow: '0 20px 70px rgba(212,168,67,0.15)' }}>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="EMF Contracting team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, #171717 0%, transparent 100%)' }} />
            </div>
          </div>
          <div ref={addRef} className="reveal">
            <SectionLabel text="About EMF" />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', fontWeight: '400', color: '#fff', lineHeight: '1.1', marginBottom: '0.3rem' }}>90+ Years of</h2>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', fontWeight: '400', lineHeight: '1.1' }}><span className="gold-text" style={{ fontStyle: 'italic' }}>Combined Mastery.</span></h2>
            <div style={{ width: '50px', height: '2px', background: 'linear-gradient(to right, #D4A843, #F0C866)', margin: '1.8rem 0' }} />
            <p style={{ fontFamily: 'var(--font-jost)', color: '#ccc', fontSize: '17px', lineHeight: '1.9', fontWeight: '300', marginBottom: '1.2rem' }}>
              EMF Contracting handles all aspects of construction and management, backed by a team with over 90 years of combined experience in the building and construction industry.
            </p>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '16px', lineHeight: '1.9', fontWeight: '300', marginBottom: '2.5rem' }}>
              We work face-to-face with every client from the first meeting, through planning and design, to a build delivered on time and on budget — with honest communication the whole way through.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '2.8rem' }}>
              {badges.map((b, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.2rem', fontWeight: '400', marginBottom: '6px', lineHeight: 1 }}>{b.icon}</div>
                  <div style={{ fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', fontWeight: '500' }}>{b.label}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-gold">Our Story</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 2rem', background: '#111110' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <SectionLabel text="Our Services" center />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', fontWeight: '400', color: '#fff', lineHeight: '1.1' }}>Full-Spectrum <span className="gold-text">Construction</span></h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '17px', lineHeight: '1.8', fontWeight: '300', maxWidth: '540px', margin: '1.2rem auto 0' }}>From foundation to finish — every service delivered by our in-house team of master builders.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#D4A84314' }} className="services-grid">
            {services.map((s, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ padding: '2.8rem', background: '#0f0f0f', transition: 'background 0.3s', transitionDelay: `${i * 0.07}s` }}
                onMouseEnter={e => (e.currentTarget.style.background = '#161614')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0f0f0f')}>
                <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.4rem', marginBottom: '1.2rem', lineHeight: 1 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.55rem', fontWeight: '500', color: '#fff', marginBottom: '0.8rem' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '15px', lineHeight: '1.8', fontWeight: '300' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 2rem', background: '#171717' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <SectionLabel text="Our Process" center />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', fontWeight: '400', color: '#fff' }}>A Clear <span className="gold-text">Path</span> to Completion</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="process-grid">
            {process.map((step, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ padding: '2.5rem 2rem', transitionDelay: `${i * 0.1}s`, borderLeft: i > 0 ? '1px solid #D4A84320' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.4rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4A843, #F0C866)', flexShrink: 0 }} />
                  <span className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: '300' }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.55rem', fontWeight: '500', color: '#fff', marginBottom: '0.8rem' }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '15px', lineHeight: '1.8', fontWeight: '300' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — click navigates to /work?project=slug */}
      <section style={{ padding: '8rem 2rem', background: '#111110' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div ref={addRef} className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <SectionLabel text="Featured Work" />
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', fontWeight: '400', color: '#fff' }}>Recent <span className="gold-text">Projects</span></h2>
            </div>
            <Link href="/work" style={{ fontFamily: 'var(--font-jost)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4A843', textDecoration: 'none', fontWeight: '500' }}>View All →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {featuredProjects.map((p, i) => (
              <div key={i} ref={addRef} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div onClick={() => router.push(`/work?project=${p.slug}`)} style={{ cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: '0 8px 40px rgba(212,168,67,0.08)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 50px rgba(212,168,67,0.22)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(212,168,67,0.08)' }}>
                  <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                    <div style={{ position: 'absolute', inset: 0, background: 'transparent', transition: 'background 0.35s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.25)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')} />
                  </div>
                  <div style={{ padding: '1.3rem 0 0.8rem', borderBottom: '1px solid #222', background: '#111110' }}>
                    <div style={{ fontFamily: 'var(--font-jost)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4A843', marginBottom: '6px', fontWeight: '500' }}>{p.category}</div>
                    <div style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '1.5rem', fontWeight: '500' }}>{p.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '7rem 2rem', background: '#171717', borderTop: '1px solid #D4A84318', borderBottom: '1px solid #D4A84318' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <div ref={addRef} className="reveal">
            <div className="gold-text" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '4rem', lineHeight: 1, marginBottom: '1.5rem', opacity: 0.5 }}>❝</div>
            <blockquote style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: '400', color: '#f0f0f0', lineHeight: '1.65', marginBottom: '2rem', fontStyle: 'italic' }}>
              Fast delivery and refreshingly straightforward communication from start to finish.
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(to right, transparent, #D4A843)' }} />
              <span style={{ fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4A843', fontWeight: '500' }}>— Client, Perth</span>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(to left, transparent, #D4A843)' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '9rem 2rem', background: '#0f0f0f', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.06 }} /></div>
        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          <div ref={addRef} className="reveal">
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', fontWeight: '400', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.1' }}>Ready to <span className="gold-text">Build</span> Something<br />Extraordinary?</h2>
            <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '17px', lineHeight: '1.8', fontWeight: '300', marginBottom: '2.8rem' }}>Schedule a complimentary consultation with our team and let's bring your project to life.</p>
            <Link href="/quote" className="btn-gold">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } .process-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { .services-grid { grid-template-columns: 1fr !important; } .process-grid { grid-template-columns: 1fr !important; } .scroll-indicator { display: none !important; } }
      `}</style>
    </>
  )
}
