'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  ImageOff, 
  ShieldCheck, 
  Clock, 
  Truck,
  Quote,
  Sparkles
} from 'lucide-react';

/**
 * UTILS & HOOKS
 */
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallbackClassName?: string;
}

function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: SafeImageProps) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-secondary/20 ${fallbackClassName || className || ''}`}>
        <ImageOff size={32} className="text-secondary/40" />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}

/**
 * DATA
 */
const DATA = {
  brand: {
    name: "Adinas Scents",
    tagline: "Fragrances That Make You Stand-Out",
    description: "Curating the finest selection of premium, long-lasting unboxed perfumes, meticulously sourced for the discerning individual who values quality and exclusivity without the designer markup. Experience true olfactory luxury in the heart of Abuja."
  },
  images: {
    hero: "https://picsum.photos/seed/beauty0/1920/1080",
    about: "https://picsum.photos/seed/beauty1/800/1000",
    products: [
      "https://picsum.photos/seed/beauty2/800/600",
      "https://picsum.photos/seed/beauty3/800/600",
      "https://picsum.photos/seed/beauty4/800/600",
      "https://picsum.photos/seed/beauty5/800/600"
    ]
  },
  products: [
    { name: "Oud Imperial (Unboxed)", price: "₦35,000", description: "A deep, smoky oud blended with exotic spices. Intense and sophisticated for evening wear." },
    { name: "Coastal Breeze (Unboxed)", price: "₦22,500", description: "Crisp, clean aquatic notes with hints of sea salt and bergamot. Perfect for daytime elegance." },
    { name: "Velvet Rose Attar", price: "₦48,000", description: "Pure, concentrated rose oil extract. Rich, romantic, and incredibly long-lasting." },
    { name: "Midnight Amber EDP (Tester)", price: "₦29,900", description: "Warm amber base layered with vanilla and sandalwood. A truly seductive signature scent." }
  ],
  features: [
    { title: "Unboxed Authenticity", description: "Guaranteed original fragrance oils, decanted and presented in high-quality, minimalist packaging.", icon: ShieldCheck },
    { title: "Longevity Guaranteed", description: "Our collection is curated for high concentration and superior staying power.", icon: Clock },
    { title: "Sharp Abuja Delivery", description: "Fast, secure delivery services across the FCT, ensuring your scent arrives perfectly.", icon: Truck }
  ],
  stats: [
    { number: "1,600+", label: "Boutique Followers", icon: Sparkles },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Unique Scents", icon: ShieldCheck }
  ],
  testimonials: [
    { name: "Chioma N.", role: "Client", text: "The longevity of the Oud Imperial is unbelievable. My new office scent is officially here." },
    { name: "Tunde A.", role: "Customer", text: "Fantastic value for money. The Coastal Breeze is fresh, and the ordering process was seamless." }
  ]
};

/**
 * COMPONENTS
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* L2 Logo Style */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="font-heading text-3xl font-black text-secondary tracking-tighter group-hover:text-accent transition-colors">
            AS
          </span>
          <span className="hidden sm:block text-white/60 text-[10px] font-mono tracking-[0.3em] uppercase border-l border-white/20 pl-3">
            Adinas Scents
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Vault', 'Why Unboxed?', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s|\?/g, '')}`} className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-secondary transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-secondary text-primary px-6 py-2.5 rounded-full font-bold text-sm tracking-tight hover:bg-accent hover:scale-105 transition-all shadow-lg animate-glow">
            SHOP COLLECTION
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-primary border-l border-white/10 p-10 flex flex-col animate-slideIn">
            <button className="self-end text-white mb-10" onClick={() => setMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {['Vault', 'Why Unboxed?', 'Reviews', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s|\?/g, '')}`} onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-bold text-white hover:text-secondary transition-colors">
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-secondary text-primary px-6 py-4 rounded-xl font-black text-center mt-4">
                SHOP COLLECTION
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-6">
    <h2 className={`text-4xl md:text-6xl font-heading font-bold ${light ? 'text-white' : 'text-white'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-white/60' : 'text-white/40'}`}>
        {subtitle}
      </p>
    )}
    <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
  </div>
);

export default function LandingPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const heroReveal = useScrollReveal();
  const featureReveal = useScrollReveal();
  const productReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const testimonialReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO SECTION - HR-B */}
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
              <a href="#vault" className="w-full sm:w-auto px-10 py-5 bg-secondary text-primary font-black text-lg rounded-full hover:bg-accent hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                SHOP COLLECTION
              </a>
              <a href="#about" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        {/* Floating Decor */}
        <div className="absolute bottom-10 left-10 hidden lg:block animate-float opacity-30">
          <div className="w-32 h-32 rounded-full border border-secondary/20 flex items-center justify-center">
            <Sparkles className="text-secondary" size={32} />
          </div>
        </div>
      </section>

      {/* STAT STRIP - A6c */}
      <div className="bg-secondary/5 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
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

      {/* PRODUCTS SECTION */}
      <section id="vault" className="py-24 bg-primary/50" ref={productReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${productReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader title="The Fragrance Vault" subtitle="Explore our curated selection of intense, long-lasting scents." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA.products.map((product, i) => (
              <div key={i} className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-secondary/20 transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <SafeImage 
                    src={DATA.images.products[i % DATA.images.products.length]} 
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
                    <a href="#contact" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all">
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Split Layout */}
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

      {/* TESTIMONIALS - Masonry-like grid */}
      <section id="reviews" className="py-24 bg-white/[0.02]" ref={testimonialReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader title="Loved by Abuja's Elite" />
          <div className="grid md:grid-cols-2 gap-8">
            {DATA.testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/5 relative group">
                <Quote size={60} className="absolute -top-4 -right-4 text-white/5 group-hover:text-secondary/10 transition-colors duration-500" />
                <div className="flex text-secondary mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
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

      {/* CONTACT SECTION - C2 */}
      <section id="contact" className="py-24 bg-primary" ref={contactReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 rounded-[40px] overflow-hidden border border-white/5 grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-gradient-to-br from-secondary/10 via-transparent to-transparent">
              <h2 className="text-5xl font-heading font-bold mb-8">Ready to Stand Out?</h2>
              <p className="text-white/60 text-lg mb-12">
                Order your next signature scent today. Send us a message and we'll help you find the perfect match based on your preferences.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-1">WhatsApp</p>
                    <a href={`https://wa.me/${DATA.brand.name}`} className="text-xl font-bold hover:text-secondary transition-colors">+234 8103639822</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:contact@adinasscents.com" className="text-xl font-bold hover:text-secondary transition-colors">contact@adinasscents.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold">Abuja, FCT, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-20 border-l border-white/5">
              {!formSubmitted ? (
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60">Full Name</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-secondary transition-colors text-white outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60">Phone Number</label>
                      <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-secondary transition-colors text-white outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Your Inquiry</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-secondary transition-colors text-white outline-none appearance-none">
                      <option className="bg-primary">Place an Order</option>
                      <option className="bg-primary">Fragrance Consultation</option>
                      <option className="bg-primary">Corporate Gifting</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">Message</label>
                    <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-secondary transition-colors text-white outline-none resize-none" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-secondary text-primary font-black text-lg rounded-xl hover:bg-accent transition-all animate-glow">
                    SEND MESSAGE
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center animate-scaleIn">
                  <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4">Message Sent!</h3>
                  <p className="text-white/60 max-w-xs mx-auto mb-10">
                    Thank you for reaching out. Our fragrance concierge will contact you shortly via WhatsApp.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="text-secondary font-bold hover:underline">
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 bg-primary relative overflow-hidden">
        {/* L6b Gradient Rule */}
        <div className="py-16 flex items-center gap-6 px-8 max-w-6xl mx-auto mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
          <span className="text-secondary font-mono text-xs tracking-[0.3em] uppercase whitespace-nowrap">
            Est. Abuja 2024
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-2">
            <a href="#home" className="inline-flex items-center gap-3 mb-6">
              <span className="font-heading text-4xl font-black text-secondary tracking-tighter">AS</span>
              <span className="text-white text-xl font-heading font-bold tracking-tight">Adinas Scents</span>
            </a>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
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
              <li><a href="#vault" className="hover:text-secondary transition-colors">Fragrance Vault</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">Our Story</a></li>
              <li><a href="#reviews" className="hover:text-secondary transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
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
    </main>
  );
}