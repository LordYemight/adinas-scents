'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { DATA } from '@/lib/data';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const contactReveal = useScrollReveal<HTMLElement>();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-primary">
      <Navbar />

      <section className="pt-32 pb-24" ref={contactReveal.ref}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're here to help you find your signature scent. Reach out for consultations, orders, or inquiries.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl md:rounded-[40px] overflow-hidden border border-white/5 grid lg:grid-cols-2">
            <div className="p-8 lg:p-20 bg-gradient-to-br from-secondary/10 via-transparent to-transparent">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Get in Touch</h2>
              <p className="text-white/60 text-lg mb-12">
                Our fragrance experts are ready to assist you. Whether you need a recommendation or have a specific request, we're just a message away.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-1">WhatsApp</p>
                    <a href="https://wa.me/2348103639822" className="text-xl font-bold hover:text-secondary transition-colors break-words">+234 8103639822</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:contact@adinasscents.com" className="text-xl font-bold hover:text-secondary transition-colors break-all">contact@adinasscents.com</a>
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

            <div className="p-8 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/5">
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

      <Footer />
    </main>
  );
}
