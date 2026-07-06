'use client'
import { useState, useEffect, useCallback, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'

const categories = ['All', 'Commercial', 'Residential', 'Civil']

type Project = {
  title: string; slug: string; category: string; desc: string
  location: string; year: string; size: string; duration: string
  image: string; details: string; highlights: string[]; images: string[]
}

const projects: Project[] = [
  { title: 'Henderson Warehouse Refurbishment', slug: 'henderson-warehouse-refurbishment', category: 'Commercial', desc: 'A 2,000 sqm warehouse renovation and refurbishment in Henderson.', location: 'Henderson, WA', year: '', size: '2,000 sqm', duration: '', image: 'https://images.unsplash.com/photo-1565636291661-2ba5f34d2d40?w=800&q=80', details: 'A large-scale renovation and refurbishment of a 2,000 sqm warehouse in Henderson, delivered with the same on-site, hands-on approach EMF Contracting brings to every project — clear communication and a build kept on time and on budget.', highlights: ['2,000 sqm warehouse footprint', 'Full renovation and refurbishment scope', 'On-site project management throughout'], images: ['https://images.unsplash.com/photo-1565636291661-2ba5f34d2d40?w=1200&q=80'] },
  { title: 'Residential Renovations', slug: 'residential-renovations', category: 'Residential', desc: 'Residential renovation projects across the Perth metro and rural area.', location: 'Perth, WA', year: '', size: '', duration: '', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80', details: 'Residential renovation work carried out across the Perth area, with the same face-to-face, client-first process used on every EMF Contracting project — an on-site meeting from the start, planning and design through to the client\'s desired vision, and honest communication along the way.', highlights: ['On-site consultation from the first meeting', 'Planning and design tailored to the client\'s vision', 'Delivered on time and on budget'], images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80'] },
  { title: 'Greylands Hospital Concreting', slug: 'greylands-hospital-concreting', category: 'Civil', desc: 'Concreting works carried out at Greylands Hospital.', location: 'Perth, WA', year: '', size: '', duration: '', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', details: 'Civil concreting works completed at Greylands Hospital — one of the projects EMF Contracting is proudest to showcase, reflecting the team\'s depth of experience across civil and institutional construction.', highlights: ['Civil / institutional concreting scope', 'Completed at a live hospital site', 'One of EMF Contracting\'s flagship projects'], images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80'] },
]

function WorkContent() {
  const [active, setActive] = useState('All')
  const [visible, setVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  // Auto-open modal from URL param (e.g. ?project=the-onyx-residence)
  useEffect(() => {
    const slug = searchParams.get('project')
    if (slug) {
      const found = projects.find(p => p.slug === slug)
      if (found) { setSelectedProject(found); setActiveImage(0) }
    } else {
      setSelectedProject(null)
    }
  }, [searchParams])

  const closeModal = useCallback(() => {
    // Remove param but stay on /work
    router.replace('/work', { scroll: false })
  }, [router])

  const openModal = (project: Project) => {
    router.replace(`/work?project=${project.slug}`, { scroll: false })
  }

  useEffect(() => {
    if (!selectedProject) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [selectedProject, closeModal])

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  const GoldLine = () => <span style={{ display: 'block', width: '40px', height: '1px', background: 'linear-gradient(to right, #D4A843, #F0C866)', flexShrink: 0 }} />

  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '4rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', background: '#171717', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #D4A84344, transparent)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
          <GoldLine /><span style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Our Portfolio</span><GoldLine />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: '400', color: '#fff', marginBottom: '1.2rem' }}>
          Work <span className="gold-text" style={{ fontStyle: 'italic' }}>Done</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '17px', lineHeight: '1.9', fontWeight: '300', maxWidth: '500px', margin: '0 auto' }}>
          A curated selection of completed projects — each one a testament to craftsmanship, partnership, and pride.
        </p>
      </section>

      <section style={{ background: '#171717', paddingBottom: '2.5rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', minWidth: 'max-content' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                fontFamily: 'var(--font-jost)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '10px 20px', border: active === cat ? '1px solid #D4A843' : '1px solid #2a2a28',
                background: active === cat ? 'linear-gradient(135deg, #D4A843, #F0C866)' : 'transparent',
                color: active === cat ? '#111' : '#999', cursor: 'pointer', transition: 'all 0.3s', fontWeight: '500', whiteSpace: 'nowrap',
              }}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 2rem 7rem', background: '#171717' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}>
            {filtered.map((project, i) => (
              <div key={project.slug} style={{ animation: `cardFadeIn 0.4s ease ${i * 0.06}s both`, cursor: 'pointer' }} onClick={() => openModal(project)}>
                <div style={{ background: '#0f0f0f', overflow: 'hidden', boxShadow: '0 8px 40px rgba(212,168,67,0.1)', height: '100%', transition: 'box-shadow 0.3s, transform 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 50px rgba(212,168,67,0.22)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(212,168,67,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s', display: 'block' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                    {/* Hover darkening only — no text */}
                    <div style={{ position: 'absolute', inset: 0, background: 'transparent', transition: 'background 0.35s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.28)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')} />
                    <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(15,15,15,0.85)', backdropFilter: 'blur(4px)', border: '1px solid #D4A84344', padding: '4px 12px', fontFamily: 'var(--font-jost)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4A843', fontWeight: '500' }}>
                      {project.category}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: '500', color: '#fff', marginBottom: '0.6rem' }}>{project.title}</h3>
                    <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '15px', lineHeight: '1.7', fontWeight: '300', marginBottom: '1rem' }}>{project.desc}</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-jost)', color: '#666', fontSize: '12px' }}>📍 {project.location}</span>
                      <span style={{ fontFamily: 'var(--font-jost)', color: '#666', fontSize: '12px' }}>🗓 {project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem', background: '#111110', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '400', marginBottom: '1rem' }}>
          Your Project Could Be <span className="gold-text" style={{ fontStyle: 'italic' }}>Next.</span>
        </p>
        <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '17px', marginBottom: '2.5rem', fontWeight: '300' }}>Tell us about your vision — we'd be honoured to bring it to life.</p>
        <Link href="/quote" className="btn-gold">Start a Conversation</Link>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div onClick={closeModal} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', animation: 'modalFadeIn 0.3s ease', overflowY: 'auto' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#111110', width: '100%', maxWidth: '960px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', border: '1px solid #D4A84322', animation: 'modalSlideUp 0.35s ease' }}>
            <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #D4A843, #F0C866, #D4A843, transparent)' }} />
            <button onClick={closeModal} style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', zIndex: 10, background: '#1a1a18', border: '1px solid #333', width: '40px', height: '40px', color: '#aaa', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget).style.borderColor = '#D4A843'; (e.currentTarget).style.color = '#D4A843' }}
              onMouseLeave={e => { (e.currentTarget).style.borderColor = '#333'; (e.currentTarget).style.color = '#aaa' }}>✕</button>

            <div style={{ position: 'relative', height: 'clamp(240px, 45vw, 480px)', overflow: 'hidden' }}>
              <img src={selectedProject.images[activeImage]} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #111110 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1rem', right: '1.2rem', fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '11px', letterSpacing: '0.2em', fontWeight: '500' }}>
                {activeImage + 1} / {selectedProject.images.length}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem 1.5rem', background: '#0f0f0f', overflowX: 'auto' }}>
              {selectedProject.images.map((img, i) => (
                <div key={i} onClick={() => setActiveImage(i)} style={{ width: '80px', height: '56px', flexShrink: 0, overflow: 'hidden', border: activeImage === i ? '2px solid #D4A843' : '2px solid transparent', cursor: 'pointer', transition: 'border-color 0.2s', opacity: activeImage === i ? 1 : 0.5 }}>
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            <div style={{ padding: '2rem 2rem 2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-jost)', color: '#D4A843', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: '500', marginBottom: '6px' }}>{selectedProject.category}</div>
                  <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '400', color: '#fff', lineHeight: '1.1' }}>{selectedProject.title}</h2>
                </div>
                <div style={{ display: 'flex', gap: '2rem', flexShrink: 0, flexWrap: 'wrap' }}>
                  {[{ label: 'Location', value: selectedProject.location }, { label: 'Completed', value: selectedProject.year }, { label: 'Size', value: selectedProject.size }, { label: 'Duration', value: selectedProject.duration }].filter(stat => stat.value).map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '500' }}>{stat.label}</div>
                      <div style={{ fontFamily: 'var(--font-cormorant)', color: '#D4A843', fontSize: '1rem', fontWeight: '500' }}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ width: '100%', height: '1px', background: '#D4A84318', marginBottom: '1.8rem' }} />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '1.3rem', fontWeight: '500', marginBottom: '1rem' }}>Project Overview</h3>
                  <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '15px', lineHeight: '1.9', fontWeight: '300' }}>{selectedProject.details}</p>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', color: '#fff', fontSize: '1.3rem', fontWeight: '500', marginBottom: '1rem' }}>Project Highlights</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '0.7rem' }}>
                        <span style={{ display: 'block', width: '16px', height: '1px', background: 'linear-gradient(to right, #D4A843, #F0C866)', flexShrink: 0, marginTop: '10px' }} />
                        <span style={{ fontFamily: 'var(--font-jost)', color: '#ccc', fontSize: '15px', lineHeight: '1.7', fontWeight: '300' }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #1e1e1c', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', color: '#888', fontSize: '1.1rem', fontStyle: 'italic' }}>Interested in a similar project?</p>
                <Link href="/quote" className="btn-gold" onClick={closeModal}>Start Your Project</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes cardFadeIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes modalFadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes modalSlideUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </>
  )
}

export default function WorkPage() {
  return (
    <Suspense fallback={null}>
      <WorkContent />
    </Suspense>
  )
}
