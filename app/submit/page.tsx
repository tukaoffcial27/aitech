import { Send } from 'lucide-react';

export default function SubmitTool() {
  return (
    <main className="pt-44 pb-24 px-6 max-w-3xl mx-auto">
      <div className="bg-white border border-luxury-gold/20 rounded-[3rem] p-12 shadow-2xl gold-gradient-border">
        <h1 className="text-4xl font-black text-luxury-dark mb-4 tracking-tighter italic">Submit Your <span className="text-luxury-gold not-italic font-light">AI Tool</span></h1>
        <p className="text-luxury-dark/50 mb-10">Join our curated directory of elite intelligence solutions.</p>
        
        <form className="space-y-6">
          <input type="text" placeholder="AI Tool Name" className="w-full p-5 rounded-2xl bg-luxury-cream border-none focus:ring-2 focus:ring-luxury-gold outline-none" />
          <input type="url" placeholder="Official Website URL" className="w-full p-5 rounded-2xl bg-luxury-cream border-none focus:ring-2 focus:ring-luxury-gold outline-none" />
          <textarea placeholder="Brief Description (USP)" rows={4} className="w-full p-5 rounded-2xl bg-luxury-cream border-none focus:ring-2 focus:ring-luxury-gold outline-none"></textarea>
          <button className="w-full bg-luxury-dark text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-luxury-gold transition-all flex items-center justify-center gap-3">
            Submit for Review <Send size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}