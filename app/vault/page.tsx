'use client';

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { SafeImage } from '@/components/SafeImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { DATA } from '@/lib/data';

export default function ProductVaultPage() {
  const vaultReveal = useScrollReveal<HTMLElement>();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-primary">
      <Navbar />

      <section className="pt-32 pb-24" ref={vaultReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${vaultReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <SectionHeader 
            title="The Fragrance Vault" 
            subtitle="Explore our complete collection of intense, long-lasting unboxed fragrances." 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DATA.products.map((product, i) => (
              <div key={i} className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-secondary/20 transition-all duration-500 flex flex-col h-full">
                <div className="relative aspect-[3/4] overflow-hidden">
                  {product.image ? (
                    <SafeImage 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/20 flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={32} />
                      </div>
                      <p className="text-secondary font-heading font-bold text-lg mb-1">Coming Soon</p>
                      <p className="text-white/40 text-xs">Exquisite Scent in Prep</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
                  {i < 4 && (
                    <div className="absolute top-4 right-4 bg-secondary text-primary font-bold px-3 py-1 rounded-full text-xs">
                      BEST SELLER
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-secondary transition-colors">{product.name}</h3>
                  <p className="text-white/40 text-sm line-clamp-2 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xl font-bold text-accent">{product.price}</span>
                    <Link href="/contact" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
