export default function CookiePolicyPage() {
  return (
    <>
      <section style={{ paddingTop: '140px', paddingBottom: '4rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', background: '#111110', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #C9A84C44, transparent)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontFamily: 'var(--font-jost)', color: '#C9A84C', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '500' }}>Legal</span>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#C9A84C' }} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '400', color: '#fff' }}>
          Cookie <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Policy</span>
        </h1>
      </section>

      <section style={{ padding: '4rem 2rem 7rem', background: '#111110' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {[
            {
              title: 'What Are Cookies',
              body: 'Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide information to website owners about how their site is used.',
            },
            {
              title: 'How We Use Cookies',
              body: 'EMF Constructions uses cookies solely to ensure the website functions correctly. We do not use cookies for advertising, tracking across other websites, or selling data to third parties. The cookies we set are essential for basic site functionality such as navigation and form submission.',
            },
            {
              title: 'Types of Cookies We Use',
              body: 'Essential cookies: Required for the website to function. These cannot be disabled as they are necessary to deliver the services you request. We do not use any marketing, analytics, or tracking cookies.',
            },
            {
              title: 'Third-Party Services',
              body: 'Our website is hosted on Vercel and uses Supabase for secure data storage. These services may set their own technical cookies as part of their infrastructure. We do not control these cookies but they are limited to operational purposes only.',
            },
            {
              title: 'Your Choices',
              body: 'You can control and delete cookies through your browser settings. Please be aware that disabling cookies may affect the functionality of this website. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites.',
            },
            {
              title: 'Data Retention',
              body: 'Information submitted through our quote request form is stored securely and used solely to respond to your enquiry. We do not share your information with third parties for marketing purposes.',
            },
            {
              title: 'Contact Us',
              body: 'If you have any questions about our use of cookies or this policy, please contact us at hello@emfconstructions.com or through our Get a Quote page.',
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: i < 6 ? '1px solid #1e1e1c' : 'none' }}>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: '500', color: '#fff', marginBottom: '1rem' }}>{section.title}</h2>
              <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '14px', lineHeight: '1.9', fontWeight: '300' }}>{section.body}</p>
            </div>
          ))}

          <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '12px', letterSpacing: '0.05em' }}>
            Last updated: April 2026
          </p>
        </div>
      </section>
    </>
  )
}
