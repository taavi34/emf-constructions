export default function PrivacyPolicyPage() {
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
          Privacy <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Policy</span>
        </h1>
      </section>

      <section style={{ padding: '4rem 2rem 7rem', background: '#111110' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-jost)', color: '#888', fontSize: '13px', lineHeight: '1.8', fontWeight: '300', marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid #1e1e1c' }}>
            This is a placeholder Privacy Policy. It will be reviewed and finalised with accurate business details. It should not be treated as complete or legally final until then.
          </p>

          {[
            {
              title: 'Introduction',
              body: 'EMF Contracting respects your privacy. This policy explains what personal information we collect through this website, why we collect it, and how it is stored and used.',
            },
            {
              title: 'Information We Collect',
              body: 'When you submit a quote request through this website, we collect the information you provide, which may include your name, email address, phone number, location, project type, and any project details you share with us.',
            },
            {
              title: 'How We Use Your Information',
              body: 'We use the information you submit solely to respond to your enquiry, discuss your project, and provide you with a quote. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
            },
            {
              title: 'Data Storage and Security',
              body: 'Quote request information is stored securely using Supabase, and email notifications are sent using Resend. This website is hosted on Vercel. These providers may process your information as part of their infrastructure, solely to deliver the services this website relies on.',
            },
            {
              title: 'Third-Party Services',
              body: 'We use third-party services (including Supabase, Resend, and Vercel) to operate this website and process quote requests. These providers have their own privacy and security practices governing the data they process on our behalf.',
            },
            {
              title: 'Your Rights',
              body: 'You may ask us what personal information we hold about you, request a correction, or request that we delete it. To make a request, please contact us using the details below.',
            },
            {
              title: 'Data Retention',
              body: 'We retain quote request information for as long as reasonably necessary to respond to your enquiry and for our business records. You can request earlier deletion at any time.',
            },
            {
              title: 'Changes to This Policy',
              body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page.',
            },
            {
              title: 'Contact Us',
              body: 'If you have any questions about this Privacy Policy or how your information is handled, please contact us through our Get a Quote page.',
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: i < 8 ? '1px solid #1e1e1c' : 'none' }}>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: '500', color: '#fff', marginBottom: '1rem' }}>{section.title}</h2>
              <p style={{ fontFamily: 'var(--font-jost)', color: '#bbb', fontSize: '14px', lineHeight: '1.9', fontWeight: '300' }}>{section.body}</p>
            </div>
          ))}

          <p style={{ fontFamily: 'var(--font-jost)', color: '#555', fontSize: '12px', letterSpacing: '0.05em' }}>
            Last updated: July 2026 (placeholder)
          </p>
        </div>
      </section>
    </>
  )
}
