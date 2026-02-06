'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HeaderProps {
  onScrollToAdmission: () => void;
}

export function Header({ onScrollToAdmission }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoUrl = "/Asset 8.png"; 
  // TODO: Update this with your actual live domain URL
  const siteUrl = "https://admissions.koshysglobalacademia.com"; 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#why-choose-us' },
    { label: 'Programs', href: '#programs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Admissions', href: '#admission-form' },
  ];

  // --- SEO: Schema Markup Configuration ---
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "name": "Koshys Global Academia",
        "url": siteUrl,
        "logo": `${siteUrl}${logoUrl}`,
        "description": "Koshys Global Academia offering world-class education and campus facilities."
      },
      {
        "@type": "SiteNavigationElement",
        "name": navItems.map((item) => item.label),
        "url": navItems.map((item) => `${siteUrl}/${item.href.replace('#', '')}`)
      }
    ]
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      {/* SEO Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={logoUrl} 
              alt="Koshys Global Academia" 
              className="h-10 md:h-14 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="text-sm font-bold uppercase text-[#1f2150] hover:text-[#2c328a]">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button onClick={onScrollToAdmission} className="bg-[#2c328a] text-white font-bold rounded-xl px-6">
              Book Campus Tour
            </Button>
          </div>

          {/* Mobile Toggle Button (Fixed) */}
          <button 
            className="lg:hidden p-2 text-[#1f2150]" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            // 👇 The line below fixes the Accessibility Error
            aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item, index) => (
                <a key={index} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#1f2150]">
                  {item.label}
                </a>
              ))}
              <Button onClick={() => { onScrollToAdmission(); setIsMobileMenuOpen(false); }} className="w-full bg-[#2c328a] py-6 text-lg">
                Book Campus Tour
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
