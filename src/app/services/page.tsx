import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Threaded Flanges',
  description: 'Explore our range of services and products for threaded connections.',
  alternates: { canonical: 'https://threadedflange.com/services' },
};

export default function ServicesPage() {
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
            "name": "Services",
            "item": "https://threadedflange.com/services"
          }
        ]
      })}} />
      <section style={{backgroundImage:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'3rem 1.5rem'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <h1 style={{fontSize:'2.25rem', fontWeight:800}}>Our Services</h1>
        </div>
      </section>

      <section style={{padding:'4rem 1.5rem', background:'#0f172a'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <h2 style={{fontSize:'2rem', fontWeight:700, marginBottom:'3rem', textAlign:'center', color:'#38bdf8'}}>What We Offer</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'2rem', marginBottom:'3rem'}}>
            <div style={{background:'#1e293b', border:'1px solid #334155', borderRadius:'8px', padding:'2rem'}}>
              <h3 style={{fontSize:'1.5rem', fontWeight:700, marginBottom:'1rem', color:'#38bdf8'}}>Product Supply</h3>
              <p style={{marginBottom:'1rem', color:'#94a3b8', lineHeight:1.6}}>
                Complete inventory of threaded connections in all standard sizes, materials, and pressure ratings.
                From standard ANSI specifications to custom configurations.
              </p>
              <ul style={{listStyle:'none', padding:0, color:'#94a3b8', fontSize:'0.875rem'}}>
                <li>✓ Standard ANSI flanges</li>
                <li>✓ API certified products</li>
                <li>✓ Custom specifications</li>
                <li>✓ Material options</li>
              </ul>
            </div>

            <div style={{background:'#1e293b', border:'1px solid #334155', borderRadius:'8px', padding:'2rem'}}>
              <h3 style={{fontSize:'1.5rem', fontWeight:700, marginBottom:'1rem', color:'#38bdf8'}}>Custom Manufacturing</h3>
              <p style={{marginBottom:'1rem', color:'#94a3b8', lineHeight:1.6}}>
                When standard products don't fit your application, our engineering team designs and manufactures
                custom solutions to your exact specifications.
              </p>
              <ul style={{listStyle:'none', padding:0, color:'#94a3b8', fontSize:'0.875rem'}}>
                <li>✓ Engineering support</li>
                <li>✓ Rapid prototyping</li>
                <li>✓ Specialized designs</li>
                <li>✓ Quality assurance</li>
              </ul>
            </div>

            <div style={{background:'#1e293b', border:'1px solid #334155', borderRadius:'8px', padding:'2rem'}}>
              <h3 style={{fontSize:'1.5rem', fontWeight:700, marginBottom:'1rem', color:'#38bdf8'}}>Technical Support</h3>
              <p style={{marginBottom:'1rem', color:'#94a3b8', lineHeight:1.6}}>
                Our experienced team provides detailed technical guidance, material consultation, and application support
                to ensure you get the right product for your needs.
              </p>
              <ul style={{listStyle:'none', padding:0, color:'#94a3b8', fontSize:'0.875rem'}}>
                <li>✓ Application consulting</li>
                <li>✓ Material selection</li>
                <li>✓ Standards compliance</li>
                <li>✓ Performance guidance</li>
              </ul>
            </div>
          </div>

          <div style={{background:'#1e293b', border:'1px solid #334155', borderRadius:'8px', padding:'2rem'}}>
            <h3 style={{fontSize:'1.5rem', fontWeight:700, marginBottom:'1rem', color:'#38bdf8'}}>Rush Order Fulfillment</h3>
            <p style={{fontSize:'1.125rem', color:'#94a3b8', lineHeight:1.6}}>
              Need it fast? We offer expedited manufacturing and shipping options to keep your projects on schedule.
              Call us at <a href="tel:+1-281-484-8325" style={{color:'#38bdf8', textDecoration:'none'}}>281-484-8325</a> to discuss your timeline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}