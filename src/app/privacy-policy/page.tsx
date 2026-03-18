import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Threaded Flanges',
  description: 'Privacy policy for Threaded Flanges website.',
  alternates: { canonical: 'https://threadedflange.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
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
            "name": "Privacy Policy",
            "item": "https://threadedflange.com/privacy-policy"
          }
        ]
      })}} />
      <section style={{backgroundImage:'linear-gradient(135deg, #0f172a, #1e293b)', color:'white', padding:'3rem 1.5rem'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <h1 style={{fontSize:'2.25rem', fontWeight:800}}>Privacy Policy</h1>
        </div>
      </section>

      <section style={{padding:'4rem 1.5rem', background:'#0f172a', color:'#ffffff'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <p style={{color:'#94a3b8', marginBottom:'1.5rem', lineHeight:1.6}}>
            Last updated: March 2026
          </p>

          <h2 style={{fontSize:'1.875rem', fontWeight:700, marginBottom:'1.5rem', marginTop:'2rem', color:'#38bdf8'}}>Introduction</h2>
          <p style={{color:'#94a3b8', marginBottom:'1rem', lineHeight:1.6}}>
            Threaded Flanges ("we," "us," or "our") operates the threadedflange.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
          </p>

          <h2 style={{fontSize:'1.875rem', fontWeight:700, marginBottom:'1.5rem', marginTop:'2rem', color:'#38bdf8'}}>Information Collection and Use</h2>
          <p style={{color:'#94a3b8', marginBottom:'1rem', lineHeight:1.6}}>
            We collect several different types of information for various purposes to provide and improve our service to you.
          </p>

          <h3 style={{fontSize:'1.25rem', fontWeight:700, marginBottom:'1rem', marginTop:'1.5rem', color:'#38bdf8'}}>Types of Data Collected</h3>
          <ul style={{color:'#94a3b8', marginBottom:'1rem', lineHeight:1.6, paddingLeft:'2rem'}}>
            <li>Contact information (name, email, phone number)</li>
            <li>Technical data (IP address, browser type, pages visited)</li>
            <li>Usage data (how you interact with our website)</li>
          </ul>

          <h2 style={{fontSize:'1.875rem', fontWeight:700, marginBottom:'1.5rem', marginTop:'2rem', color:'#38bdf8'}}>Use of Data</h2>
          <p style={{color:'#94a3b8', marginBottom:'1rem', lineHeight:1.6}}>
            Threaded Flanges uses the collected data for various purposes, including:
          </p>
          <ul style={{color:'#94a3b8', marginBottom:'1rem', lineHeight:1.6, paddingLeft:'2rem'}}>
            <li>To provide and maintain our website</li>
            <li>To notify you about changes to our website</li>
            <li>To allow you to participate in interactive features of our website</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our website</li>
            <li>To monitor the usage of our website</li>
          </ul>

          <h2 style={{fontSize:'1.875rem', fontWeight:700, marginBottom:'1.5rem', marginTop:'2rem', color:'#38bdf8'}}>Security of Data</h2>
          <p style={{color:'#94a3b8', marginBottom:'1rem', lineHeight:1.6}}>
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
          </p>

          <h2 style={{fontSize:'1.875rem', fontWeight:700, marginBottom:'1.5rem', marginTop:'2rem', color:'#38bdf8'}}>Contact Us</h2>
          <p style={{color:'#94a3b8', marginBottom:'1rem', lineHeight:1.6}}>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul style={{color:'#94a3b8', marginBottom:'1rem', lineHeight:1.6, paddingLeft:'2rem'}}>
            <li>By email: <a href="mailto:sales@texasflange.com" style={{color:'#38bdf8', textDecoration:'none'}}>sales@texasflange.com</a></li>
            <li>By phone: <a href="tel:+1-281-484-8325" style={{color:'#38bdf8', textDecoration:'none'}}>281-484-8325</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
