'use client'
import { useState, useEffect, useCallback, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'

const categories = ['All', 'Luxury Residential', 'Interior Renovation', 'Commercial', 'Luxury Renovation', 'New Build', 'Custom Carpentry']

type Project = {
  title: string; slug: string; category: string; desc: string
  location: string; year: string; size: string; duration: string
  image: string; details: string; highlights: string[]; images: string[]
}

const projects: Project[] = [
  { title: 'The Onyx Residence', slug: 'the-onyx-residence', category: 'Luxury Residential', desc: 'A 6,200 sq ft custom home featuring blackened steel, floor-to-ceiling glass and bespoke gold-leaf detailing.', location: 'Hillcrest, CA', year: '2024', size: '6,200 sq ft', duration: '18 months', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80', details: 'The Onyx Residence stands as one of our most ambitious residential projects to date. The client envisioned a home that blurred the line between architecture and sculpture — and that is precisely what was delivered. Every surface was considered, every material selected for its tactile quality as much as its visual impact.', highlights: ['Blackened steel structural frame', 'Floor-to-ceiling glazing on three facades', 'Bespoke gold-leaf ceiling detailing', 'Heated polished concrete floors', 'Custom-built walnut joinery throughout', 'Infinity-edge pool with automatic cover'], images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80'] },
  { title: 'Maison Noir Kitchen', slug: 'maison-noir-kitchen', category: 'Interior Renovation', desc: 'Full gut renovation with hand-finished cabinetry, brass hardware and Italian Calacatta marble.', location: 'Beverly Hills, CA', year: '2024', size: '420 sq ft', duration: '4 months', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', details: 'The Maison Noir Kitchen is a study in contrast — dark hand-finished cabinetry set against luminous Calacatta marble, with aged brass hardware tying every element together. The client wanted a kitchen that felt like a professional chef\'s space without sacrificing the warmth of a family home.', highlights: ['Hand-painted lacquer cabinetry in Noir', 'Italian Calacatta Oro marble benchtops', 'Aged brass Waterworks tapware', 'Integrated Gaggenau appliance suite', 'Custom island with under-bench wine storage', 'Concealed pantry with full-height shelving'], images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80', 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80', 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80'] },
  { title: 'Aurum Tower', slug: 'aurum-tower', category: 'Commercial', desc: 'An 8-story mixed-use tower with a signature illuminated facade and curated retail spaces.', location: 'Downtown LA', year: '2023', size: '48,000 sq ft', duration: '26 months', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', details: 'Aurum Tower redefined the downtown skyline with its signature gold-anodised aluminium facade that catches the California sun at every angle. The ground-floor retail precinct was designed to activate the streetscape, while upper floors house premium commercial tenancies with panoramic city views.', highlights: ['Gold-anodised aluminium curtain wall system', 'LEED Gold certified construction', '8 floors of premium commercial space', '3 ground-floor retail tenancies', 'Rooftop terrace with 360° views', 'Dedicated end-of-trip cycling facilities'], images: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80'] },
  { title: 'Midnight Spa Bath', slug: 'midnight-spa-bath', category: 'Luxury Renovation', desc: 'Master bath transformation with book-matched marble, brushed brass fixtures and underfloor heating.', location: 'Malibu, CA', year: '2023', size: '180 sq ft', duration: '6 weeks', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', details: 'The Midnight Spa Bath transformed a dated ensuite into a sanctuary of calm. Book-matched Nero Marquina marble wraps the walls and floor, creating a seamless dark canvas that makes the brushed brass fixtures glow like jewellery. The freestanding soaking tub commands centre stage.', highlights: ['Book-matched Nero Marquina marble', 'Freestanding Kaldewei soaking tub', 'Floor-mounted brushed brass tapware', 'Hydronic underfloor heating system', 'Frameless steam shower with bench seat', 'Backlit mirror with integrated demister'], images: ['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80', 'https://images.unsplash.com/photo-1620626011761-996317702782?w=1200&q=80', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80'] },
  { title: 'The Foundry Project', slug: 'the-foundry-project', category: 'New Build', desc: 'Ground-up multi-unit residential build delivered three weeks ahead of schedule.', location: 'Pasadena, CA', year: '2023', size: '22,000 sq ft', duration: '14 months', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', details: 'The Foundry Project is a collection of 12 premium residential apartments built on a former light industrial site. The architecture honours the heritage of the site through exposed steel, raw concrete and reclaimed brick, while the interiors offer contemporary luxury.', highlights: ['12 premium residential apartments', 'Exposed structural steel and concrete', 'Reclaimed brick feature facades', 'Communal rooftop garden and BBQ', 'Individual basement parking per unit', 'Smart home automation in all apartments'], images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80', 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80', 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80', 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=80'] },
  { title: 'Heritage Stairwell', slug: 'heritage-stairwell', category: 'Custom Carpentry', desc: 'Sculptural floating staircase combining black walnut treads with hand-forged iron and brass detail.', location: 'Santa Monica, CA', year: '2022', size: 'Custom commission', duration: '10 weeks', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', details: 'The Heritage Stairwell is as much sculpture as it is structure. Each black walnut tread was individually hand-finished over six weeks by our master carpenter. The hand-forged iron balustrade was commissioned from a local blacksmith, with brass cap details adding warmth.', highlights: ['Solid black walnut floating treads', 'Hand-forged iron balustrade', 'Solid brass cap and handrail details', 'Engineered steel spine structure', 'Individual tread hand-oiling process', 'Integrated LED tread lighting'], images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80', 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1200&q=80', 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80'] },
  { title: 'The Whitmore Estate', slug: 'the-whitmore-estate', category: 'Luxury Residential', desc: 'A sprawling hillside estate with panoramic views, infinity pool, and bespoke stone cladding throughout.', location: 'Bel Air, CA', year: '2022', size: '9,400 sq ft', duration: '24 months', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', details: 'Set on a prominent hillside lot with uninterrupted views, The Whitmore Estate is a landmark of contemporary California living. Hand-selected limestone cladding, a 25-metre infinity pool and a full entertainer\'s wing make this one of our most celebrated residential projects.', highlights: ['Hand-selected French limestone cladding', '25-metre infinity-edge pool', 'Dedicated home cinema and bar', 'Six-car subterranean garage', 'Fully landscaped 1.2 acre grounds', 'Crestron whole-home automation'], images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'] },
  { title: 'Obsidian Office HQ', slug: 'obsidian-office-hq', category: 'Commercial', desc: 'A 12-floor corporate headquarters with biophilic design, custom lighting and rooftop terrace.', location: 'Century City, CA', year: '2022', size: '72,000 sq ft', duration: '30 months', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', details: 'The Obsidian Office HQ was designed to attract and retain world-class talent through an environment that prioritises wellbeing, collaboration and inspiration. Biophilic design principles run throughout, from living green walls to timber-lined breakout zones.', highlights: ['Living green wall installations per floor', 'Timber-lined collaboration zones', 'Full rooftop terrace and garden', 'Wellness floor with gym and meditation rooms', 'Café and restaurant on ground level', 'EV charging in all basement levels'], images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80'] },
  { title: 'The Amber Library', slug: 'the-amber-library', category: 'Custom Carpentry', desc: 'Floor-to-ceiling walnut shelving, rolling library ladders and a bespoke reading nook with brass inlay.', location: 'Brentwood, CA', year: '2021', size: 'Custom commission', duration: '8 weeks', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', details: 'The Amber Library was commissioned by an avid book collector who wanted a room worthy of their 4,000-volume collection. Floor-to-ceiling American walnut shelving wraps three walls, accessed by a pair of rolling brass-railed library ladders.', highlights: ['Floor-to-ceiling American walnut shelving', 'Twin rolling brass-railed library ladders', 'Bespoke window seat with storage', 'Brass inlay detailing throughout', 'Integrated LED strip lighting in shelves', 'Hidden TV and media cabinet behind panel'], images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80', 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&q=80'] },
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
                  {[{ label: 'Location', value: selectedProject.location }, { label: 'Completed', value: selectedProject.year }, { label: 'Size', value: selectedProject.size }, { label: 'Duration', value: selectedProject.duration }].map((stat, i) => (
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
