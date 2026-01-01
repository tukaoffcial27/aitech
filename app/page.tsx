import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';

export default function AITechHome() {
  const featuredTools = [
    { name: "NeuralWriter AI", cat: "Copywriting", rating: "4.9", desc: "Advanced semantic engine for long-form content generation." },
    { name: "Visionary Studio", cat: "Video Generation", rating: "4.8", desc: "Transform text prompts into cinematic 4K video assets." },
    { name: "CodeRefine Pro", cat: "Development", rating: "5.0", desc: "AI-driven code refactoring and security vulnerability patching." },
    { name: "InsightAnalytica", cat: "Data Science", rating: "4.7", desc: "Predictive modeling for complex enterprise datasets." }
  ];

  return (
    <main className="bg-luxury-pearl">
      {/* HERO SECTION - GAYA LUXURY MINIMALIS */}
      <section className="pt-44 pb-24 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold/10 rounded-full mb-8">
          <Sparkles size={16} className="text-luxury-gold" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold">Curated Intelligence 2026</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-luxury-dark mb-8 tracking-tighter leading-[1.1]">
          The Definitive Directory for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-[#8B7344]">
            Elite AI Solutions.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-luxury-dark/60 leading-relaxed mb-12 max-w-3xl mx-auto">
          We meticulously vet, review, and categorize the world's most sophisticated AI tools. 
          Empowering your digital ecosystem with intelligence that exceeds expectations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#explore" className="bg-luxury-dark text-white px-10 py-5 rounded-full font-bold hover:bg-luxury-gold transition-all shadow-xl">
            Explore Directory
          </Link>
          <Link href="/trending" className="border border-luxury-gold/30 text-luxury-dark px-10 py-5 rounded-full font-bold hover:bg-luxury-cream transition-all">
            Trending Today
          </Link>
        </div>
      </section>

      {/* FEATURED TOOLS GRID (Mobile View Optimized) */}
      <section id="explore" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-luxury-gold mb-2">Expert Curation</h2>
            <p className="text-3xl font-bold text-luxury-dark">Featured Solutions</p>
          </div>
          <Link href="/categories" className="text-xs font-bold uppercase tracking-widest text-luxury-gold hover:underline">View All &rarr;</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTools.map((tool) => (
            <div key={tool.name} className="group p-8 bg-white border border-luxury-gold/10 rounded-[2.5rem] hover:shadow-[0_20px_50px_rgba(197,160,89,0.1)] transition-all duration-500 hover:-translate-y-2 gold-gradient-border">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-luxury-cream text-luxury-gold rounded-full">{tool.cat}</span>
                <div className="flex items-center gap-1 text-luxury-gold">
                  <Star size={12} fill="#C5A059" />
                  <span className="text-xs font-bold">{tool.rating}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-luxury-dark mb-3">{tool.name}</h3>
              <p className="text-sm text-luxury-dark/50 leading-relaxed mb-8">{tool.desc}</p>
              <Link href={`/reviews/${tool.name.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-luxury-dark group-hover:text-luxury-gold transition">
                Read Review <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* MARKETING ARTICLE SECTION (>500 WORDS FOR ADSENSE) */}
      <section className="bg-luxury-cream py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-luxury max-w-none text-luxury-dark/70 leading-loose">
            <h2 className="text-4xl font-black text-luxury-dark mb-10 tracking-tighter italic border-l-4 border-luxury-gold pl-8">
              Navigating the Future: Why Curated AI Directories are Vital in 2026
            </h2>
            <p className="mb-8">
              In the current technological renaissance, the sheer volume of Artificial Intelligence (AI) and Software as a Service (SaaS) launches has reached an unprecedented scale. For professionals, entrepreneurs, and digital architects, this abundance presents both a colossal opportunity and a significant challenge. The market is saturated with "me-too" solutions that often promise more than they deliver. This is why **AITech**, a premium subsidiary of Codenify, was established: to serve as the definitive filter for quality in an ocean of noise.
            </p>
            <p className="mb-8">
              Our review methodology is built upon three pillars of excellence: **Technical Integrity, Workflow Scalability, and Economic Value**. We don't just test features; we analyze how these tools integrate into complex business ecosystems. Whether it is a generative AI for creative agencies or a predictive analytics platform for FinTech startups, our experts dive deep into the API capabilities, data security protocols, and long-term sustainability of the software.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10 my-16">
              <div className="p-10 bg-white rounded-[2rem] border border-luxury-gold/10">
                <Zap className="text-luxury-gold mb-6" size={32} />
                <h4 className="text-xl font-bold text-luxury-dark mb-4">Speed of Implementation</h4>
                <p className="text-sm">We prioritize reviewing tools that offer immediate ROI through seamless onboarding and intuitive UX designs.</p>
              </div>
              <div className="p-10 bg-white rounded-[2rem] border border-luxury-gold/10">
                <ShieldCheck className="text-luxury-gold mb-6" size={32} />
                <h4 className="text-xl font-bold text-luxury-dark mb-4">Security Standards</h4>
                <p className="text-sm">In 2026, data sovereignty is non-negotiable. Our directory highlights tools that comply with international privacy frameworks.</p>
              </div>
            </div>

            <p className="mb-8">
              As we move further into the decade, the distinction between "using AI" and "leveraging AI strategically" will define the leaders of every industry. AITech is committed to providing the educational resources and objective data necessary to make these strategic decisions. Our directory is updated weekly with the latest innovations, ensuring that our readers are always at the forefront of the technological curve. From natural language processing to computer vision, we cover the spectrum of intelligence that is reshaping the modern world.
            </p>
            <p>
              By utilizing our directory, you are not just finding a tool; you are investing in a vetted solution that has passed the rigorous standards of our technical editorial team. Welcome to the future of software discovery—elegant, efficient, and exceptionally smart.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}