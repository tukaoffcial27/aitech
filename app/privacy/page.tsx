export default function PrivacyPage() {
  return (
    <main className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-luxury-dark/70 leading-relaxed">
      <h1 className="text-5xl font-black text-luxury-dark mb-10 tracking-tighter italic border-b border-luxury-gold/20 pb-6">
        Privacy <span className="text-luxury-gold not-italic font-light">Policy</span>
      </h1>
      
      <section className="space-y-8">
        <p className="font-bold text-luxury-dark uppercase tracking-widest text-xs">Last Updated: January 2026</p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-luxury-dark">1. Commitment to Privacy</h2>
          <p>
            At AITech, we understand that privacy is paramount in the digital age. This policy outlines how we handle data within our AI directory and review platform. As a subsidiary of Codenify, we adhere to high standards of transparency and data protection.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-luxury-dark">2. Information Collection</h2>
          <p>
            We do not require users to create accounts or provide personal information to browse our 1,000+ AI tool reviews. However, like most professional directories, we collect non-identifying information such as browser type, language preference, and referring site to improve our user experience.
          </p>
        </div>

        <div className="space-y-4 bg-luxury-cream p-8 rounded-[2rem] border border-luxury-gold/10">
          <h2 className="text-2xl font-bold text-luxury-dark">3. Cookies & Advertisements</h2>
          <p>
            To support our free directory, we utilize Google AdSense to serve relevant advertisements. These third-party vendors may use cookies (such as the DART cookie) to serve ads based on your visit to AITech and other sites on the Internet. You may opt-out of personalized advertising by visiting your Google Ad Settings.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-luxury-dark">4. Third-Party Links</h2>
          <p>
            Our reviews often contain buttons labeled "Visit Official" which redirect you to external websites. We have no control over, and assume no responsibility for, the content or privacy practices of any third-party sites or services.
          </p>
        </div>
      </section>
    </main>
  );
}