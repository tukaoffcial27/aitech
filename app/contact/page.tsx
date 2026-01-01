import { Mail, Globe, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-44 pb-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-black text-luxury-dark mb-6 tracking-tighter uppercase italic">
          Get in <span className="text-luxury-gold not-italic font-light">Touch</span>
        </h1>
        <p className="text-xl text-luxury-dark/50 max-w-2xl mx-auto">
          Have an AI tool you want us to review? Or perhaps a partnership inquiry? Our team is ready to assist you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-10 bg-luxury-cream rounded-[3rem] border border-luxury-gold/10 text-center hover:shadow-xl transition-all">
          <Mail className="mx-auto text-luxury-gold mb-6" size={40} />
          <h3 className="font-bold text-luxury-dark mb-2">Email Us</h3>
          <p className="text-sm text-luxury-dark/60">hello@codenify.app</p>
        </div>

        <div className="p-10 bg-white rounded-[3rem] border border-luxury-gold/20 shadow-lg text-center hover:shadow-2xl transition-all">
          <Globe className="mx-auto text-luxury-gold mb-6" size={40} />
          <h3 className="font-bold text-luxury-dark mb-2">Our Network</h3>
          <p className="text-sm text-luxury-dark/60">aitech.codenify.app</p>
        </div>

        <div className="p-10 bg-luxury-cream rounded-[3rem] border border-luxury-gold/10 text-center hover:shadow-xl transition-all">
          <MapPin className="mx-auto text-luxury-gold mb-6" size={40} />
          <h3 className="font-bold text-luxury-dark mb-2">HQ Location</h3>
          <p className="text-sm text-luxury-dark/60">Global Operations Center</p>
        </div>
      </div>
    </main>
  );
}