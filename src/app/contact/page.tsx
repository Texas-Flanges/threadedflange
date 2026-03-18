import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Threaded Flanges',
  description: 'Get in touch with Threaded Flanges for quotes, technical support, and more information.',
  alternates: { canonical: 'https://threadedflange.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://threadedflange.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://threadedflange.com/contact"
          }
        ]
      })}} />
      <section style={{backgroundImage:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'3rem 1.5rem'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <h1 style={{fontSize:'2.25rem', fontWeight:800}}>Contact Us</h1>
          <p style={{fontSize:'1.125rem', marginTop:'0.5rem', opacity:0.85}}>We're here to help with your flange needs</p>
        </div>
      </section>

      <section style={{padding:'4rem 1.5rem', background:'#0f172a', color:'#ffffff'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'3rem'}}>
            <div>
              <h2 style={{fontSize:'2rem', fontWeight:700, marginBottom:'2rem', color:'#38bdf8'}}>Get in Touch</h2>
              <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
                <div>
                  <h3 style={{fontSize:'1.25rem', fontWeight:700, marginBottom:'0.5rem', color:'#38bdf8'}}>Phone</h3>
                  <p style={{fontSize:'1.125rem'}}><a href="tel:+1-281-484-8325" style={{color:'#38bdf8', textDecoration:'none'}}>281-484-8325</a></p>
                </div>
                <div>
                  <h3 style={{fontSize:'1.25rem', fontWeight:700, marginBottom:'0.5rem', color:'#38bdf8'}}>Email</h3>
                  <p style={{fontSize:'1.125rem'}}><a href="mailto:sales@texasflange.com" style={{color:'#38bdf8', textDecoration:'none'}}>sales@texasflange.com</a></p>
                </div>
                <div>
                  <h3 style={{fontSize:'1.25rem', fontWeight:700, marginBottom:'0.5rem', color:'#38bdf8'}}>Website</h3>
                  <p style={{fontSize:'1.125rem'}}><a href="https://texasflange.com?ref=threadedflange" target="_blank" rel="noopener noreferrer" style={{color:'#38bdf8', textDecoration:'none'}}>texasflange.com</a></p>
                </div>
              </div>
            </div>

            <div style={{background:'#1e293b', border:'1px solid #334155', padding:'2rem', borderRadius:'8px'}}>
              <h2 style={{fontSize:'2rem', fontWeight:700, marginBottom:'1.5rem', color:'#38bdf8'}}>Quote Request</h2>
              <p style={{marginBottom:'1.5rem', color:'#94a3b8', lineHeight:1.6}}>
                For detailed quotes and rush orders, please visit our main website or call our sales team directly.
                We provide rapid response times for all inquiries.
              </p>
              <a href="https://www.texasflange.com/contact-us/?ref=threadedflange" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', padding:'0.75rem 2rem', background:'#38bdf8', color:'#0f172a', borderRadius:'6px', fontWeight:600, textDecoration:'none'}}>
                Request a Quote
              </a>
              <p style={{marginTop:'1.5rem', fontSize:'0.875rem', color:'#94a3b8'}}>
                Professional-grade threaded connections and expert technical support available nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}