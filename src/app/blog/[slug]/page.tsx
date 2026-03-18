import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const WP_API = 'https://peachpuff-wolf-392873.hostingersite.com/wp-json/wp/v2';

const validSlugs = [
  'what-is-flange-size',
  'inspect-threaded-flanges',
  'buying-guide-reducing-threaded-flanges',
  'threaded-flange-installation-procedure',
  'reducing-threaded-flanges',
  'advantages-of-threaded-flanges',
  'threaded-flange-connections',
  'threaded-flange-dimensions-and-weights',
  'male-and-female-threaded-flange',
  'threaded-flange-types'
];

async function getPost(slug: string) {
  const res = await fetch(`${WP_API}/posts?slug=${slug}&_embed`, { next: { revalidate: 86400 } });
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };
  const title = post.title.rendered.replace(/&amp;/g,'&').replace(/&#8217;/g,"'").replace(/&#8211;/g,'-') + ' | Threaded Flanges';
  const desc = post.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim().substring(0, 160) || '';
  return {
    title,
    description: desc,
    openGraph: { title, description: desc, type: 'article', url: `https://threadedflange.com/blog/${slug}` },
    twitter: { card: 'summary', title, description: desc },
    alternates: { canonical: `https://threadedflange.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlugs.includes(slug)) notFound();
  const post = await getPost(slug);
  if (!post) notFound();

  const title = post.title.rendered.replace(/&amp;/g,'&').replace(/&#8217;/g,"'").replace(/&#8211;/g,'-');
  const dateStr = new Date(post.date).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        "headline": title,
        "datePublished": post.date,
        "author":{"@type":"Organization","name":"Threaded Flanges"},
        "publisher":{"@type":"Organization","name":"Threaded Flanges","url":"https://threadedflange.com"}
      })}} />
      <style dangerouslySetInnerHTML={{__html:`
        body > header.border-gray-200 { display: none !important; }
        .wp-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
        .wp-content p { margin-bottom: 1rem; line-height: 1.8; color: #94a3b8; }
        .wp-content h2, .wp-content h3 { margin: 1.5rem 0 0.75rem; color: #38bdf8; font-weight: 700; }
        .wp-content h2 { font-size: 1.5rem; }
        .wp-content h3 { font-size: 1.25rem; }
        .wp-content ul, .wp-content ol { margin: 1rem 0; padding-left: 2rem; color: #94a3b8; }
        .wp-content li { margin-bottom: 0.5rem; line-height: 1.7; }
        .wp-content a { color: #38bdf8; text-decoration: underline; }
        .wp-content table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
        .wp-content th, .wp-content td { border: 1px solid #334155; padding: 0.5rem; text-align: left; color: #94a3b8; }
        .wp-content th { background: #1e293b; font-weight: 600; }
      `}} />
      <div style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', padding:'3rem 1.5rem', color:'white'}}>
        <div style={{maxWidth:'960px', margin:'0 auto'}}>
          <Link href="/blog" style={{color:'#38bdf8', textDecoration:'none', fontSize:'0.875rem'}}>← Back to Blog</Link>
          <h1 style={{fontSize:'2.25rem', fontWeight:800, marginTop:'1rem', lineHeight:1.2, color:'#38bdf8'}}>{title}</h1>
          <p style={{marginTop:'0.75rem', opacity:0.8, fontSize:'0.875rem', color:'#94a3b8'}}>{dateStr}</p>
        </div>
      </div>
      <article className="wp-content" style={{maxWidth:'960px', margin:'0 auto', padding:'2rem 1.5rem', background:'#0f172a', color:'#ffffff'}}>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </article>
      <footer style={{background:'#020617', color:'white', padding:'2rem 1.5rem', textAlign:'center', marginTop:'3rem'}}>
        <p style={{fontSize:'0.875rem', opacity:0.7}}>&copy; 2026 Threaded Flanges &middot; All rights reserved</p>
        <p style={{fontSize:'0.875rem', marginTop:'0.5rem'}}><a href="https://texasflange.com?ref=threadedflange" style={{color:'#38bdf8', textDecoration:'none'}}>texasflange.com</a> &middot; 281-484-8325</p>
      </footer>
    </>
  );
}