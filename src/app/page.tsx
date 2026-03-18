import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Threaded Pipe Flanges | Threaded Flanges",
  description: "Threaded (screwed) flanges for piping connections without welding. Ideal for low-pressure, non-critical applications and systems requiring frequent disasse",
  keywords: "threaded flanges, screwed flanges, NPT flanges, no-weld flanges, threaded pipe flanges",
  openGraph: {
    title: "Threaded Pipe Flanges | Threaded Flanges",
    description: "Threaded (screwed) flanges for piping connections without welding. Ideal for low-pressure, non-critical applications and systems requiring frequent disasse",
    url: "https://threadedflange.com",
    type: "website",
    images: []
  },
  twitter: {
    card: "summary_large_image",
    title: "Threaded Pipe Flanges | Threaded Flanges",
    description: "Threaded (screwed) flanges for piping connections without welding. Ideal for low-pressure, non-critical applications and systems requiring frequent disasse"
  },
  alternates: { canonical: "https://threadedflange.com" }
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([{
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Threaded Flanges",
        "url":"https://threadedflange.com",
        "contactPoint":{"@type":"ContactPoint","telephone":"+1-281-484-8325","contactType":"sales","email":"sales@texasflange.com"}
      },{
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity":[{"@type":"Question","name":"What is a threaded flange?","acceptedAnswer":{"@type":"Answer","text":"A threaded flange has NPT (National Pipe Thread) internal threads matching the pipe external threads. The pipe screws directly into the flange, eliminating the need for welding."}},{"@type":"Question","name":"When should threaded flanges be avoided?","acceptedAnswer":{"@type":"Answer","text":"Avoid threaded flanges for temperatures above 500 degrees F (thread sealant degradation), cyclic service (thread loosening), toxic or flammable services, and pressures above Class 300."}}]
    }])}} />

      <style dangerouslySetInnerHTML={{__html: `
        /* Hide old layout header */
        body > header.border-gray-200, header.border-gray-200 { display: none !important; }
        .rv { opacity: 1; transform: none; }
body > header.border-gray-200 { display: none !important; }
        
      `}} />

      

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{background:'#0f172a', borderBottomColor:'#334155'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <a href="/" className="text-xl font-bold text-white no-underline">Threaded Flanges</a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-white/80 hover:text-white text-sm no-underline">About</a>
            <a href="#specifications" className="text-white/80 hover:text-white text-sm no-underline">Specs</a>
            <a href="#industries" className="text-white/80 hover:text-white text-sm no-underline">Industries</a>
            <a href="/blog" className="text-white/80 hover:text-white text-sm no-underline">Blog</a>
            <a href="#faq" className="text-white/80 hover:text-white text-sm no-underline">FAQ</a>
            <a href="https://www.texasflange.com/contact-us/?ref=threadedflange" className="px-4 py-2 rounded-lg text-sm font-semibold no-underline" style={{background:'#38bdf8', color:'#0f172a'}}>Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white" style={{backgroundImage:'linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url(/hero-threaded-flange.jpg)', backgroundSize:'cover', backgroundPosition:'center', background:'#0f172a'}}>
        <div className="text-center px-6 max-w-4xl">
          <p className="text-sm font-bold tracking-[0.3em] mb-4 opacity-70">YOUR SOURCE FOR THREADED FLANGES</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Threaded Pipe Flanges</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Threaded (screwed) flanges for piping connections without welding. Ideal for low-pressure, non-critical applications and systems requiring frequent disassembly.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://www.texasflange.com/contact-us/?ref=threadedflange" className="px-8 py-3 rounded-lg font-semibold text-lg no-underline" style={{background:'#38bdf8', color:'#0f172a'}}>Request a Quote</a>
            <a href="tel:281-484-8325" className="px-8 py-3 rounded-lg font-semibold text-lg no-underline border-2 text-white hover:bg-white/10" style={{borderColor:'#38bdf8'}}>Call 281-484-8325</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 rv" style={{background:'#0f172a', color:'#ffffff'}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{color:'#38bdf8'}}>About Threaded Flanges</h2>
            <p className="text-lg leading-relaxed opacity-90" style={{color:'#94a3b8'}}>We maintain one of the largest inventories of threaded flanges in the Houston area. Every flange is manufactured to ASME, ANSI, and API standards with full material traceability and certification.</p>
            <p className="text-lg leading-relaxed mt-4 opacity-90" style={{color:'#94a3b8'}}>Threaded (screwed) flanges for piping connections without welding. Ideal for low-pressure, non-critical applications and systems requiring frequent disassembly.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1548945665-56d2712b4986?w=600&h=400&fit=crop&auto=format&q=80" alt="Threaded Flanges - Industrial pipe flanges" width="600" height="400" style={{width:"100%",height:"300px",borderRadius:"12px",objectFit:"cover"}} />
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section id="specifications" className="py-20 px-6 rv" style={{background:'#1e293b', color:'#ffffff'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#38bdf8'}}>Product Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl p-8 shadow-lg text-center" style={{background:'#0f172a', borderColor:'#334155', border:'1px solid'}}>
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#38bdf8'}}>Material Grades</h3>
              <p style={{color:'#94a3b8'}}>A105, A182 F304/F316, A350 LF2</p>
            </div>
            <div className="rounded-xl p-8 shadow-lg text-center" style={{background:'#0f172a', borderColor:'#334155', border:'1px solid'}}>
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h5"/><path d="M2 12l3-3"/><path d="M2 12l3 3"/><path d="M22 12h-5"/><path d="M22 12l-3-3"/><path d="M22 12l-3 3"/><path d="M12 2v5"/><path d="M12 2l3 3"/><path d="M12 2l-3 3"/><path d="M12 22v-5"/><path d="M12 22l3-3"/><path d="M12 22l-3-3"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#38bdf8'}}>Size Range</h3>
              <p style={{color:'#94a3b8'}}>1/2" through 60" and larger custom sizes available</p>
            </div>
            <div className="rounded-xl p-8 shadow-lg text-center" style={{background:'#0f172a', borderColor:'#334155', border:'1px solid'}}>
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#38bdf8'}}>Standards</h3>
              <p style={{color:'#94a3b8'}}>ASME B16.5, B16.47, API 605, MSS SP-44</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20 px-6 rv" style={{background:'#0f172a', color:'#ffffff'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#38bdf8'}}>Industries Served</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1e293b', borderColor:'#334155', border:'1px solid'}}><p className="font-medium" style={{color:'#94a3b8'}}>Low-Pressure Utility</p></div>
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1e293b', borderColor:'#334155', border:'1px solid'}}><p className="font-medium" style={{color:'#94a3b8'}}>Air Systems</p></div>
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1e293b', borderColor:'#334155', border:'1px solid'}}><p className="font-medium" style={{color:'#94a3b8'}}>Water Lines</p></div>
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1e293b', borderColor:'#334155', border:'1px solid'}}><p className="font-medium" style={{color:'#94a3b8'}}>Non-Hazardous Service</p></div>
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1e293b', borderColor:'#334155', border:'1px solid'}}><p className="font-medium" style={{color:'#94a3b8'}}>Temporary Connections</p></div>
          </div>
        </div>
      </section>

            <section id="datacenter" className="py-20 px-6 rv" style={{background:'#1e293b', color:'#ffffff'}}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8" style={{color:'#38bdf8'}}>Data Center Infrastructure</h2>
                <p className="text-lg leading-relaxed opacity-90" style={{color:'#94a3b8'}}>We supply flanges for data center cooling systems, fire suppression piping, and critical infrastructure. Hyperscale facilities require precision-manufactured flanges that meet demanding specifications for reliability and performance.</p>
              </div>
            </section>
      {/* FAQ */}
      <section id="faq" className="py-20 px-6 rv" style={{background:'#0f172a', color:'#ffffff'}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#38bdf8'}}>Frequently Asked Questions</h2>
          <details className="mb-4 rounded-lg shadow p-4 cursor-pointer group" style={{background:'#1e293b', borderColor:'#334155', border:'1px solid'}}>
            <summary className="font-semibold text-lg list-none flex justify-between items-center" style={{color:'#38bdf8'}}>What is a threaded flange?<span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span></summary>
            <p className="mt-3 leading-relaxed" style={{color:'#94a3b8'}}>A threaded flange has NPT (National Pipe Thread) internal threads matching the pipe external threads. The pipe screws directly into the flange, eliminating the need for welding.</p>
          </details>
          <details className="mb-4 rounded-lg shadow p-4 cursor-pointer group" style={{background:'#1e293b', borderColor:'#334155', border:'1px solid'}}>
            <summary className="font-semibold text-lg list-none flex justify-between items-center" style={{color:'#38bdf8'}}>When should threaded flanges be avoided?<span className="text-gray-400 group-open:rotate-45 transition-transform text-2xl">+</span></summary>
            <p className="mt-3 leading-relaxed" style={{color:'#94a3b8'}}>Avoid threaded flanges for temperatures above 500 degrees F (thread sealant degradation), cyclic service (thread loosening), toxic or flammable services, and pressures above Class 300.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-white text-center rv" style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', color:'#ffffff'}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6" style={{color:'#38bdf8'}}>Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto" style={{color:'#94a3b8'}}>Contact us for competitive pricing, technical specifications, and fast delivery on threaded flanges.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://www.texasflange.com/contact-us/?ref=threadedflange" className="px-8 py-3 rounded-lg font-semibold text-lg no-underline" style={{background:'#38bdf8', color:'#0f172a'}}>Request a Quote</a>
            <a href="mailto:sales@texasflange.com" className="px-8 py-3 rounded-lg font-semibold text-lg no-underline" style={{background:'transparent', color:'#38bdf8', border:'2px solid #38bdf8'}}>Email Us</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{background:'#020617', color:'white'}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Threaded Flanges</h3>
            <p className="text-sm opacity-70">Your source for quality industrial pipe flanges.</p>
            <p className="text-sm opacity-70 mt-4">Mon–Fri, 8 AM – 5 PM CST</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{color:'#38bdf8'}}>Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href="#about" className="text-white no-underline hover:opacity-100">About</a>
              <a href="#specifications" className="text-white no-underline hover:opacity-100">Specifications</a>
              <a href="#industries" className="text-white no-underline hover:opacity-100">Industries</a>
              <a href="#faq" className="text-white no-underline hover:opacity-100">FAQ</a>
                  <a href="/blog" className="text-white no-underline hover:opacity-100">Blog</a>
                  <a href="/contact" className="text-white no-underline hover:opacity-100">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{color:'#38bdf8'}}>Contact</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href="tel:281-484-8325" className="text-white no-underline">281-484-8325</a>
              <a href="mailto:sales@texasflange.com" className="text-white no-underline">sales@texasflange.com</a>
              <a href="https://www.texasflange.com/contact-us/?ref=threadedflange" className="text-white no-underline">Request a Quote</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{color:'#38bdf8'}}>Related</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href="https://www.texasflange.com?ref=threadedflange" className="text-white no-underline">texasflange.com</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/20 text-center text-sm opacity-60">
          <p>&copy; 2026 Threaded Flanges &middot; All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
