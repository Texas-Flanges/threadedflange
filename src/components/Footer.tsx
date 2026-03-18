'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{background:'#020617', color:'white', padding:'3rem 1.5rem'}}>
      <div style={{maxWidth:'1280px', margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'2rem', marginBottom:'2rem'}}>
          <div>
            <h3 style={{fontSize:'1.25rem', fontWeight:700, marginBottom:'1rem'}}>Threaded Flanges</h3>
            <p style={{color:'#94a3b8'}}>
              Leading supplier of quality flanges for industrial applications.
            </p>
            <p style={{color:'#94a3b8', marginTop:'1rem', fontSize:'0.875rem'}}>Mon–Fri, 8 AM – 5 PM CST</p>
          </div>

          <div>
            <h4 style={{fontSize:'1.125rem', fontWeight:700, marginBottom:'1rem', color:'#38bdf8'}}>Quick Links</h4>
            <ul style={{listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'0.5rem'}}>
              <li><Link href="/" style={{color:'#94a3b8', textDecoration:'none'}}>Home</Link></li>
              <li><Link href="/about" style={{color:'#94a3b8', textDecoration:'none'}}>About</Link></li>
              <li><Link href="/services" style={{color:'#94a3b8', textDecoration:'none'}}>Services</Link></li>
              <li><Link href="/blog" style={{color:'#94a3b8', textDecoration:'none'}}>Blog</Link></li>
              <li><Link href="/contact" style={{color:'#94a3b8', textDecoration:'none'}}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{fontSize:'1.125rem', fontWeight:700, marginBottom:'1rem', color:'#38bdf8'}}>Resources</h4>
            <ul style={{listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'0.5rem'}}>
              <li><Link href="/privacy-policy" style={{color:'#94a3b8', textDecoration:'none'}}>Privacy Policy</Link></li>
              <li><a href="https://www.texasflange.com?ref=threadedflange" target="_blank" rel="noopener noreferrer" style={{color:'#94a3b8', textDecoration:'none'}}>Texas Flange</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{fontSize:'1.125rem', fontWeight:700, marginBottom:'1rem', color:'#38bdf8'}}>Contact</h4>
            <p style={{color:'#94a3b8', marginBottom:'0.5rem'}}>
              Phone: <a href="tel:+1-281-484-8325" style={{color:'#38bdf8', textDecoration:'none'}}>281-484-8325</a>
            </p>
            <p style={{color:'#94a3b8', marginBottom:'0.5rem'}}>
              Email: <a href="mailto:sales@texasflange.com" style={{color:'#38bdf8', textDecoration:'none'}}>sales@texasflange.com</a>
            </p>
            <p style={{color:'#94a3b8'}}>
              Website: <a href="https://texasflange.com?ref=threadedflange" target="_blank" rel="noopener noreferrer" style={{color:'#38bdf8', textDecoration:'none'}}>texasflange.com</a>
            </p>
          </div>
        </div>

        <div style={{borderTop:'1px solid #334155', paddingTop:'2rem', textAlign:'center', color:'#64748b', fontSize:'0.875rem'}}>
          <p>&copy; 2026 Threaded Flanges. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}