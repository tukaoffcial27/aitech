import data from '../../global-ai.json';
import Link from 'next/link';

export default function CategoriesPage() {
  const categories = Array.from(new Set(data.map(item => item.category)));

  return (
    <main className="pt-44 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-black text-luxury-dark mb-16 tracking-tighter uppercase italic border-l-8 border-luxury-gold pl-8">Intelligence <span className="text-luxury-gold not-italic font-light">Categories</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map(cat => (
          <div key={cat} className="group p-10 bg-white border border-luxury-gold/10 rounded-[2.5rem] hover:bg-luxury-cream transition-all">
            <h3 className="text-2xl font-bold text-luxury-dark mb-4">{cat}</h3>
            <p className="text-sm text-luxury-dark/40 mb-8">{data.filter(i => i.category === cat).length} Tools Listed</p>
            <Link href={`/trending`} className="text-xs font-black uppercase tracking-widest text-luxury-gold group-hover:underline">Explore {cat} &rarr;</Link>
          </div>
        ))}
      </div>
    </main>
  );
}