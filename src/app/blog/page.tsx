import { Metadata } from 'next';
import Link from 'next/link';

const WP_API = 'https://peachpuff-wolf-392873.hostingersite.com/wp-json/wp/v2';

export const metadata: Metadata = {
  title: 'Blog | Threaded Flanges',
  description: 'Technical articles about threaded flanges, installation, inspection, and industrial piping.',
  alternates: { canonical: 'https://threadedflange.com/blog' },
};

async function getPosts() {
  const res = await fetch(`${WP_API}/posts?per_page=20&_fields=title,slug,excerpt,date`, { next: { revalidate: 86400 } });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`body > header.border-gray-200 { display: none !important; }`}} />
      <div style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', padding:'3rem 1.5rem', color:'white'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <h1 style={{fontSize:'2.5rem', fontWeight:800, color:'#38bdf8'}}>Blog</h1>
          <p style={{marginTop:'0.5rem', opacity:0.85, color:'#94a3b8'}}>Technical insights on threaded flanges and industrial piping</p>
        </div>
      </div>
      <div style={{maxWidth:'960px', margin:'0 auto', padding:'2rem 1.5rem', background:'#0f172a'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'1.5rem'}}>
          {posts.map((post: any) => {
            const title = post.title.rendered.replace(/&amp;/g,'&').replace(/&#8217;/g,"'").replace(/&#8211;/g,'-');
            const excerpt = post.excerpt?.rendered?.replace(/<[^>]+>/g,'').trim().substring(0,150) || '';
            const dateStr = new Date(post.date).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{textDecoration:'none', color:'inherit'}}>
                <div style={{background:'#1e293b', border:'1px solid #334155', borderRadius:'8px', padding:'1.25rem', height:'100%', transition:'box-shadow 0.2s', cursor:'pointer'}}>
                  <h2 style={{fontSize:'1.125rem', fontWeight:700, color:'#38bdf8', lineHeight:1.3}}>{title}</h2>
                  <p style={{color:'#94a3b8', fontSize:'0.875rem', marginTop:'0.5rem', lineHeight:1.6}}>{excerpt}</p>
                  <p style={{color:'#64748b', fontSize:'0.75rem', marginTop:'0.75rem'}}>{dateStr}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <footer style={{background:'#020617', color:'white', padding:'2rem 1.5rem', textAlign:'center', marginTop:'3rem'}}>
        <p style={{fontSize:'0.875rem', opacity:0.7}}>&copy; 2026 Threaded Flanges &middot; All rights reserved</p>
        <p style={{fontSize:'0.875rem', marginTop:'0.5rem'}}><a href="https://texasflange.com?ref=threadedflange" style={{color:'#38bdf8', textDecoration:'none'}}>texasflange.com</a> &middot; 281-484-8325</p>
      </footer>
    </>
  );
}