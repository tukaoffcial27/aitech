import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AITech | Premium AI Tool & SaaS Directory",
  description: "Discover the best AI tools and SaaS solutions. Expert reviews and free alternatives for modern professionals.",
  verification: {
    google: "-z9DAPzX-Yzd8hPw-wDCrYLW13maGYRSDCWd1o9ifd8",
  },
  icons: {
    icon: "/favicon.ico?v=1",
    shortcut: "/favicon.ico?v=1",
    apple: "/favicon.ico?v=1",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* NAVIGASI ELEGAN DENGAN FITUR KLIK MOBILE */}
        <nav className="fixed top-0 w-full z-50 bg-luxury-pearl/80 backdrop-blur-md border-b border-luxury-gold/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-luxury-dark tracking-tighter">AI</span>
              <span className="text-2xl font-light text-luxury-gold tracking-tighter">TECH</span>
            </Link>
            
            {/* Navigasi Desktop */}
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-dark/60">
              <Link href="/categories" className="hover:text-luxury-gold transition">Categories</Link>
              <Link href="/trending" className="hover:text-luxury-gold transition">Trending</Link>
              <Link href="/about" className="hover:text-luxury-gold transition">About</Link>
              <Link href="/submit" className="px-4 py-2 border border-luxury-gold text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-white transition">Submit Tool</Link>
            </div>

            {/* Mobile Menu Icon dengan Logika Klik */}
            <div className="md:hidden">
              <input type="checkbox" id="menu-toggle" className="hidden peer" />
              <label htmlFor="menu-toggle" className="text-luxury-gold cursor-pointer relative z-[70] block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </label>

              {/* Panel Menu Mobile */}
              <div className="fixed inset-0 bg-luxury-pearl z-[60] flex flex-col items-center justify-center gap-8 translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out">
                <Link href="/categories" className="text-lg font-bold uppercase tracking-widest text-luxury-dark">Categories</Link>
                <Link href="/trending" className="text-lg font-bold uppercase tracking-widest text-luxury-dark">Trending</Link>
                <Link href="/about" className="text-lg font-bold uppercase tracking-widest text-luxury-dark">About</Link>
                <Link href="/submit" className="px-8 py-3 bg-luxury-gold text-white rounded-full font-bold uppercase tracking-widest">Submit Tool</Link>
                <label htmlFor="menu-toggle" className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-luxury-gold border-b border-luxury-gold/30">Close Menu</label>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* FOOTER LUXURY */}
        <footer className="bg-luxury-pearl border-t border-luxury-gold/10 py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4 tracking-tighter">AITECH <span className="font-light text-luxury-gold text-sm tracking-widest uppercase ml-2">Review Directory</span></h3>
              <p className="text-luxury-dark/50 text-sm max-w-sm leading-relaxed">
                Empowering your workflow with curated AI insights. We provide objective reviews of the software shaping the future of digital productivity.
              </p>
            </div>
            <div className="text-sm space-y-3 flex flex-col">
              <h4 className="font-bold text-luxury-gold uppercase tracking-widest mb-2">Platform</h4>
              <Link href="/privacy" className="text-luxury-dark/60 hover:text-luxury-dark transition">Privacy Policy</Link>
              <Link href="/terms" className="text-luxury-dark/60 hover:text-luxury-dark transition">Terms of Service</Link>
              <Link href="/contact" className="text-luxury-dark/60 hover:text-luxury-dark transition">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}