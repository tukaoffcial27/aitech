import { Metadata } from 'next';
import data from '../../../global-ai.json';
import { notFound } from 'next/navigation';
import { Star, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// BARIS PENTING: Mengizinkan halaman baru yang dibuat robot langsung bisa diakses tanpa build ulang
export const dynamicParams = true;

export async function generateStaticParams() {
  return data.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = data.find((d) => d.slug === slug);
  if (!item) return { title: 'Review Not Found' };
  return {
    title: `${item.aiName} Professional Review & Analysis 2026 | AITech`,
    description: `Deep dive review of ${item.aiName} for ${item.category}. Explore features, pricing, and professional use cases.`,
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data.find((d) => d.slug === slug);
  
  // Jika slug tidak ditemukan di database, tampilkan halaman 404 standar
  if (!item) notFound();

  return (
    <main className="pt-32 bg-luxury-pearl min-h-screen pb-20">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-luxury-gold">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/trending">Reviews</Link>
          <span>/</span>
          <span className="text-luxury-dark/40">{item.aiName}</span>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-white border border-luxury-gold/20 rounded-[3rem] p-8 md:p-16 shadow-xl gold-gradient-border">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex-1">
              <span className="inline-block px-4 py-1 bg-luxury-cream text-luxury-gold rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                {item.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-luxury-dark mb-6 tracking-tighter italic">
                {item.aiName} <span className="text-luxury-gold not-italic font-light">Deep Dive</span>
              </h1>
              <p className="text-xl text-luxury-dark/60 leading-relaxed mb-8">
                {item.usp}
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex gap-1 text-luxury-gold">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="#C5A059" />)}
                </div>
                <span className="text-sm font-bold text-luxury-dark/40 uppercase tracking-widest">Industry Standard 2026</span>
              </div>
              
              <a 
                href={item.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-luxury-dark text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-luxury-gold transition-all flex items-center justify-center gap-3 no-underline shadow-2xl hover:scale-105"
              >
                Visit {item.aiName} Official <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 text-luxury-dark/70 leading-loose text-lg">
        <h2 className="text-3xl font-black text-luxury-dark mb-8 tracking-tight uppercase">
          Professional Assessment: {item.aiName} in the Modern Workflow
        </h2>
        <p className="mb-8">
          In the rapidly consolidating landscape of artificial intelligence, {item.aiName} has emerged as a formidable contender within the {item.category} niche.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-16">
          <div className="space-y-4">
            <h3 className="font-black text-luxury-gold uppercase text-xs tracking-[0.2em]">Core Advantages</h3>
            <ul className="space-y-4">
              {["High-precision algorithmic output", "Seamless API integration protocols", "Enterprise-grade security standards", "Real-time collaborative features"].map((text) => (
                <li key={text} className="flex items-start gap-3 text-sm font-medium text-luxury-dark">
                  <CheckCircle2 size={18} className="text-luxury-gold shrink-0" /> {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-luxury-cream p-8 rounded-[2rem] border border-luxury-gold/10">
            <ShieldCheck className="text-luxury-gold mb-4" />
            <h4 className="font-bold text-luxury-dark mb-2">Editor's Note</h4>
            <p className="text-xs leading-relaxed italic">
              "When analyzing {item.aiName}, it becomes clear that their commitment to {item.usp} is what separates them from the current market saturation."
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}