import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-primary relative overflow-hidden">
      <div className="py-16 flex items-center gap-6 px-8 max-w-6xl mx-auto mb-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        <span className="text-secondary font-mono text-xs tracking-[0.3em] uppercase whitespace-nowrap">
          Est. Abuja 2024
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <span className="font-heading text-4xl font-black text-secondary tracking-tighter">AS</span>
            <span className="text-white text-xl font-heading font-bold tracking-tight">Adinas Scents</span>
          </Link>
          <p className="text-white/40 max-w-sm mb-8 leading-relaxed mx-auto md:mx-0">
            Exquisite fragrances, curated for the modern individual. Experience luxury unboxed.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://instagram.com/@adinas.scents" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-secondary hover:bg-white/10 transition-all">
              <Instagram size={20} />
            </a>
            <a href="mailto:contact@adinasscents.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-secondary hover:bg-white/10 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Quick Links</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><Link href="/vault" className="hover:text-secondary transition-colors">Fragrance Vault</Link></li>
            <li><Link href="/#about" onClick={(e) => handleNavClick(e, '/#about')} className="hover:text-secondary transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Legal</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Delivery Terms</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Returns</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Adinas Scents. Handcrafted in Abuja.
        </p>
        <p className="text-white/20 text-xs tracking-widest uppercase">
          Luxury Unboxed • Fragrance Excellence
        </p>
      </div>
    </footer>
  );
};
