'use client';

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ImageOff, 
  ShieldCheck, 
  Clock, 
  Truck,
  Quote,
  Users
} from 'lucide-react';
import Link from 'next/link';

// Components
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { SafeImage } from '@/components/SafeImage';

// Hooks & Data
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { DATA } from '@/lib/data';

export default function LandingPage() {
  const heroReveal = useScrollReveal<HTMLDivElement>();
  const featureReveal = useScrollReveal<HTMLElement>();
  const productReveal = useScrollReveal<HTMLElement>();
  const aboutReveal = useScrollReveal<HTMLElement>();
  const testimonialReveal = useScrollReveal<HTMLElement>();

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage src={DATA.images.hero} alt="Luxury Perfume" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary/30" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center" ref={heroReveal.ref}>
          <div className={`transition-all duration-1000 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.9] tracking-tight mb-8">
              Unveil Your <span className="text-secondary italic">Signature</span> Scent.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Discover premium, powerful perfumes without the designer price tag. Luxury, unlocked in the heart of Abuja.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/vault" className="w-full sm:w-auto px-10 py-5 bg-secondary text-primary font-black text-lg rounded-full hover:bg-accent hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                SHOP COLLECTION
              </Link>
              <Link href="/#about" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="bg-secondary/5 border-y border-white/5 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hidden md:grid md:grid-cols-3 gap-12">
            {DATA.stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold text-white leading-none">{stat.number}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden flex overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap min-w-max hover:[animation-play-state:paused] active:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
              {[...DATA.stats, ...DATA.stats, ...DATA.stats].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 px-10 group shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-bold text-white leading-none">{stat.number}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section id="whyunboxed" className="py-24 bg-primary" ref={featureReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader title="The Unboxed Advantage" subtitle="Why choose Adinas Scents for your signature fragrance?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DATA.features.map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-primary transition-all">
                  <feature.icon size={32} className="text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - Curated 3 items */}
      <section id="vault" className="py-24 bg-primary/50" ref={productReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${productReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader title="The Vault Highlights" subtitle="A curated selection of our most intense, long-lasting scents." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {DATA.products.slice(0, 3).map((product, i) => (
              <div key={i} className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-secondary/20 transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <SafeImage 
                    src={product.image || DATA.images.products[i % DATA.images.products.length]} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-secondary text-primary font-bold px-3 py-1 rounded-full text-xs">
                    BEST SELLER
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-secondary transition-colors">{product.name}</h3>
                  <p className="text-white/40 text-sm line-clamp-2 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-accent">{product.price}</span>
                    <Link href="/contact" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/vault" className="inline-flex items-center gap-4 px-12 py-5 border border-secondary/30 text-secondary rounded-full font-bold hover:bg-secondary hover:text-primary transition-all group">
              VIEW COMPLETE VAULT
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative overflow-hidden" ref={aboutReveal.ref}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden transition-all duration-1000 ${aboutReveal.isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <SafeImage src={DATA.images.about} alt="Fragrance Craft" fill className="object-cover" />
            <div className="absolute inset-0 border-[20px] border-primary/20" />
          </div>
          <div className={`transition-all duration-1000 delay-300 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="text-secondary font-mono tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 leading-tight">Why Choose <span className="text-secondary italic">Unboxed</span>?</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              We believe the essence of a fragrance lies in its concentration, not its box. By specializing in high-quality unboxed perfumes, we eliminate unnecessary packaging costs, passing significant savings directly to you.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              You get 100% of the pure scent experience, curated for lasting impact. Every bottle is hand-selected and verified to ensure it meets our rigorous standards for longevity and sillage.
            </p>
            <div className="space-y-4">
              {['100% Original Concentrates', 'Minimalist Handcrafted Packaging', 'Eco-Conscious Selection'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 size={20} className="text-secondary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-24 bg-white/[0.02]" ref={testimonialReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader title="Loved by Abuja's Elite" />
          <div className="grid md:grid-cols-2 gap-8">
            {DATA.testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/5 relative group">
                <Quote size={60} className="absolute -top-4 -right-4 text-white/5 group-hover:text-secondary/10 transition-colors duration-500" />
                <p className="text-xl text-white/80 italic leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary border border-secondary/30">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-secondary/70 text-sm uppercase tracking-wider">{t.role}</p>
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