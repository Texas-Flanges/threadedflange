import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Threaded Flanges',
  description: 'Learn about Threaded Flanges and our commitment to quality threaded connections.',
  alternates: { canonical: 'https://threadedflange.com/about' },
};

export default function AboutPage() {
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
            "name": "About",
            "item": "https://threadedflange.com/about"
          }
        ]
      })}} />
      <section style={{backgroundImage:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'3rem 1.5rem'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <h1 style={{fontSize:'2.25rem', fontWeight:800}}>About Threaded Flanges</h1>
        </div>
      </section>

      <section style={{padding:'4rem 1.5rem', background:'#0f172a', color:'#ffffff'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <h2 style={{fontSize:'1.875rem', fontWeight:700, marginBottom:'1.5rem', color:'#38bdf8'}}>Who We Are</h2>
          <p style={{fontSize:'1.125rem', marginBottom:'1rem', lineHeight:1.6, color:'#94a3b8'}}>
            Threaded Flanges is a leading supplier of premium threaded connections serving customers nationwide.
            With a commitment to quality, reliability, and customer service, we have established ourselves as a trusted partner
            for engineers and procurement professionals across multiple industries.
          </p>
          <p style={{fontSize:'1.125rem', marginBottom:'1rem', lineHeight:1.6, color:'#94a3b8'}}>
            We combine decades of manufacturing expertise with cutting-edge production capabilities
            to deliver products that exceed industry standards. Whether you need standard specifications or custom-engineered solutions,
            our team is equipped to meet your requirements.
          </p>

          <h2 style={{fontSize:'1.875rem', fontWeight:700, marginBottom:'1.5rem', marginTop:'3rem', color:'#38bdf8'}}>Our Commitment</h2>
          <ul style={{marginBottom:'2rem'}}>
            <li style={{display:'flex', gap:'1rem', marginBottom:'1rem', fontSize:'1.125rem', lineHeight:1.6}}>
              <span style={{color:'#38bdf8', fontWeight:'bold', flexShrink:0}}>✓</span>
              <span style={{color:'#94a3b8'}}><strong>Quality First:</strong> Every product undergoes rigorous testing and inspection.</span>
            </li>
            <li style={{display:'flex', gap:'1rem', marginBottom:'1rem', fontSize:'1.125rem', lineHeight:1.6}}>
              <span style={{color:'#38bdf8', fontWeight:'bold', flexShrink:0}}>✓</span>
              <span style={{color:'#94a3b8'}}><strong>Expert Support:</strong> Our engineers are available to help with technical questions and specifications.</span>
            </li>
            <li style={{display:'flex', gap:'1rem', marginBottom:'1rem', fontSize:'1.125rem', lineHeight:1.6}}>
              <span style={{color:'#38bdf8', fontWeight:'bold', flexShrink:0}}>✓</span>
              <span style={{color:'#94a3b8'}}><strong>Competitive Pricing:</strong> Direct manufacturing means better value for our customers.</span>
            </li>
            <li style={{display:'flex', gap:'1rem', marginBottom:'1rem', fontSize:'1.125rem', lineHeight:1.6}}>
              <span style={{color:'#38bdf8', fontWeight:'bold', flexShrink:0}}>✓</span>
              <span style={{color:'#94a3b8'}}><strong>Fast Delivery:</strong> Extensive inventory and rapid fulfillment capabilities.</span>
            </li>
          </ul>

          <h2 style={{fontSize:'1.875rem', fontWeight:700, marginBottom:'1.5rem', marginTop:'3rem', color:'#38bdf8'}}>Industry Excellence</h2>
          <p style={{fontSize:'1.125rem', lineHeight:1.6, color:'#94a3b8'}}>
            We proudly serve customers across all major industries and regions, delivering products and expertise to leading industrial companies,
            engineering firms, and equipment manufacturers. Our understanding of industry-specific needs allows us to provide
            tailored solutions that meet exacting requirements and preferences.
          </p>
        </div>
      </section>
    </div>
  );
}