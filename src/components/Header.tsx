'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header style={{background:'#0f172a', borderBottom:'1px solid #334155', position:'sticky', top:0, zIndex:50}}>
      <div style={{maxWidth:'1280px', margin:'0 auto', padding:'1rem 1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Link href="/" style={{fontSize:'1.5rem', fontWeight:700, color:'#38bdf8', textDecoration:'none'}}>
          Threaded Flanges
        </Link>
        <nav style={{display:'flex', gap:'2rem'}}>
          <Link href="/" style={{color:'#94a3b8', textDecoration:'none', transition:'color 0.3s'}}>
            Home
          </Link>
          <Link href="/about" style={{color:'#94a3b8', textDecoration:'none', transition:'color 0.3s'}}>
            About
          </Link>
          <Link href="/services" style={{color:'#94a3b8', textDecoration:'none', transition:'color 0.3s'}}>
            Services
          </Link>
          <Link href="/blog" style={{color:'#94a3b8', textDecoration:'none', transition:'color 0.3s'}}>
            Blog
          </Link>
          <Link href="/contact" style={{color:'#94a3b8', textDecoration:'none', transition:'color 0.3s'}}>
            Contact
          </Link>
        </nav>
        <Link href="https://texasflange.com/contact?ref=threadedflange" target="_blank" rel="noopener noreferrer" style={{padding:'0.5rem 1rem', background:'#38bdf8', color:'#0f172a', borderRadius:'6px', fontWeight:600, textDecoration:'none'}}>
          Get a Quote
        </Link>
      </div>
    </header>
  );
}