'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Section tracking for Home page
      if (pathname === '/') {
        const sections = ['home', 'whyunboxed', 'vault', 'about', 'reviews', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navItems = [
    { name: 'Home', href: '/', sectionId: 'home' },
    { name: 'Vault', href: '/vault' },
    { name: 'Our Story', href: '/#about', sectionId: 'about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.href === pathname) return true;
    if (item.sectionId && pathname === '/' && activeSection === item.sectionId) return true;
    return false;
  };

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-heading text-3xl font-black text-secondary tracking-tighter group-hover:text-accent transition-colors">
            AS
          </span>
          <span className="hidden sm:block text-white/60 text-[10px] font-mono tracking-[0.3em] uppercase border-l border-white/20 pl-3">
            Adinas Scents
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm font-medium tracking-widest uppercase transition-all duration-300 ${isActive(item) ? 'text-secondary' : 'text-white/70 hover:text-secondary'}`}
            >
              {item.name}
              {isActive(item) && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-secondary animate-in fade-in slide-in-from-left-2 duration-500" />
              )}
            </Link>
          ))}
          <Link href="/contact" className="bg-secondary text-primary px-6 py-2.5 rounded-full font-bold text-sm tracking-tight hover:bg-accent hover:scale-105 transition-all shadow-lg animate-glow">
            SHOP COLLECTION
          </Link>
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
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => {
                    setMenuOpen(false);
                    handleNavClick(e, item.href);
                  }}
                  className={`text-2xl font-heading font-bold transition-colors ${isActive(item) ? 'text-secondary' : 'text-white hover:text-secondary'}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="bg-secondary text-primary px-6 py-4 rounded-xl font-black text-center mt-4">
                SHOP COLLECTION
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
