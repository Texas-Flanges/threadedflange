'use client';

import Link from 'next/link';

interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <article style={{background:'#1e293b', border:'1px solid #334155', borderRadius:'8px', overflow:'hidden', transition:'box-shadow 0.3s'}}>
      <div style={{padding:'1.5rem'}}>
        <h3 style={{fontSize:'1.25rem', fontWeight:700, marginBottom:'0.5rem'}}>
          <Link href={'/blog/' + post.slug} style={{color:'#38bdf8', textDecoration:'none'}}>
            {post.title}
          </Link>
        </h3>
        <p style={{color:'#94a3b8', marginBottom:'1rem'}}>{post.description}</p>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <time style={{fontSize:'0.875rem', color:'#64748b'}}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <Link href={'/blog/' + post.slug} style={{color:'#38bdf8', textDecoration:'none', fontWeight:600}}>
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}