export default function TermsPage() {
  return (
    <main className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-luxury-dark/70 leading-relaxed">
      <h1 className="text-5xl font-black text-luxury-dark mb-10 tracking-tighter italic border-b border-luxury-gold/20 pb-6">
        Terms of <span className="text-luxury-gold not-italic font-light">Service</span>
      </h1>
      
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-luxury-dark uppercase tracking-tighter">1. Acceptance of Terms</h2>
          <p>
            By accessing AITech (aitech.codenify.app), you agree to be bound by these terms of service and comply with all applicable laws and regulations. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-luxury-dark uppercase tracking-tighter">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on AITech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not modify or copy the materials for commercial purposes without explicit consent.
          </p>
        </div>

        <div className="space-y-4 bg-white border border-luxury-gold/20 p-8 rounded-[2rem]">
          <h2 className="text-2xl font-bold text-luxury-dark uppercase tracking-tighter">3. Disclaimer of Reviews</h2>
          <p>
            The AI tool reviews provided on this platform are for informational purposes only. While we strive for accuracy, AITech does not warrant that the descriptions, pricing, or features of the AI tools listed are current or error-free.
          </p>
        </div>
      </section>
    </main>
  );
}