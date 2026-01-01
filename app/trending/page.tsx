import data from '../../global-ai.json';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

export default function TrendingPage() {
  return (
    <main className="pt-44 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-black text-luxury-dark mb-16 tracking-tighter uppercase italic">Trending <span className="text-luxury-gold not-italic font-light">Solutions</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.slice(0, 6).map((item) => (
          <div key={item.slug} className="flex gap-8 p-8 bg-white border border-luxury-gold/10 rounded-[3rem] items-center">
            <div className="w-20 h-20 bg-luxury-cream rounded-full flex items-center justify-center text-luxury-gold font-black text-2xl italic">{item.aiName[0]}</div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-luxury-dark">{item.aiName}</h3>
                <div className="flex items-center gap-1 text-luxury-gold"><Star size={12} fill="#C5A059" /> 5.0</div>
              </div>
              <p className="text-sm text-luxury-dark/50 mb-4 line-clamp-1">{item.usp}</p>
              <Link href={`/reviews/${item.slug}`} className="text-[10px] font-black uppercase tracking-widest text-luxury-dark hover:text-luxury-gold transition flex items-center gap-2">View Analysis <ArrowRight size={12}/></Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}