import { ShieldCheck, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-44 pb-24 bg-luxury-pearl min-h-screen">
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-luxury-dark mb-8 tracking-tighter italic">
          About <span className="text-luxury-gold not-italic font-light">AI TECH</span>
        </h1>
        <p className="text-xl text-luxury-dark/60 leading-relaxed mb-16">
          We are a premium subsidiary of Codenify, dedicated to curating the world's most sophisticated AI and SaaS solutions for the digital elite.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20 text-left">
          <div className="p-8 bg-white border border-luxury-gold/10 rounded-[2.5rem] shadow-sm">
            <Target className="text-luxury-gold mb-4" />
            <h3 className="font-bold text-luxury-dark mb-2">Our Mission</h3>
            <p className="text-xs text-luxury-dark/50 italic">To filter the noise and deliver only high-integrity AI tools.</p>
          </div>
          <div className="p-8 bg-white border border-luxury-gold/10 rounded-[2.5rem] shadow-sm">
            <ShieldCheck className="text-luxury-gold mb-4" />
            <h3 className="font-bold text-luxury-dark mb-2">Vetted Quality</h3>
            <p className="text-xs text-luxury-dark/50 italic">Every tool is tested for security and scalability standards.</p>
          </div>
          <div className="p-8 bg-white border border-luxury-gold/10 rounded-[2.5rem] shadow-sm">
            <Award className="text-luxury-gold mb-4" />
            <h3 className="font-bold text-luxury-dark mb-2">Expertise</h3>
            <p className="text-xs text-luxury-dark/50 italic">Backed by the technical editorial team at Codenify.</p>
          </div>
        </div>

        <article className="prose prose-luxury mx-auto text-left text-luxury-dark/70 leading-loose">
          <p className="mb-6">
            In 2026, artificial intelligence is no longer just a trend—it is the foundation of modern industry. At **AI TECH**, we understand that time is the ultimate luxury. Our directory is designed to save you hours of research by providing objective, expert-level reviews of SaaS tools.
          </p>
          <p>
            Our commitment to transparency is reflected in our public records, including our verified AdSense authorization (Publisher ID: **pub-6834526241041119**), ensuring a secure and trusted environment for our global readers.
          </p>
        </article>
      </section>
    </main>
  );
}