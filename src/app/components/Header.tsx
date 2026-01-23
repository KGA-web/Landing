import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react'; // Added MapPin for the contact CTA

interface HeaderProps {
  onScrollToAdmission: () => void;
}

export function Header({ onScrollToAdmission }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoUrl = "/Asset%203.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UPDATED: Navigation items with Testimonials and correct ID for About
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#why-choose-us' }, // Redirected to Features
    { label: 'Programs', href: '#programs' },
    { label: 'Testimonials', href: '#testimonials' }, // Added Testimonials
    { label: 'Admissions', href: '#admission-form' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-2'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-1.5 bg-white rounded-xl shadow-sm transition-all duration-300 ring-1 ring-gray-200`}>
              <img 
                src={logoUrl} 
                alt="Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-xl md:text-2xl tracking-tight leading-[1.1] text-[#1f2150]">
                Koshys Global
              </span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.25em] uppercase mt-0.5 text-[#2c328a]">
                ACADEMIA
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:scale-105 text-[#1f2150] hover:text-[#2c328a]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {/* UPDATED: Contact Us now redirects to the Contact Section */}
            <a 
              href="#contact" 
              className="flex items-center gap-2 text-sm font-bold transition-colors text-[#1f2150] hover:text-[#2c328a]"
            >
              <MapPin className="h-4 w-4" />
              <span>Contact Us</span>
            </a>
            <Button
              size="lg"
              onClick={onScrollToAdmission}
              className="bg-[#2c328a] hover:bg-[#1f2150] text-white font-black px-8 py-6 rounded-xl shadow-lg shadow-[#2c328a]/20 transition-all hover:-translate-y-1"
            >
              Book Campus Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full text-[#1f2150]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-[100px] bg-white shadow-2xl border-t border-gray-100 font-sans p-6"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#1f2150] hover:text-[#2c328a] text-2xl font-black tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* Added Contact for Mobile Menu */}
              <a
                href="#contact"
                className="text-[#1f2150] hover:text-[#2c328a] text-2xl font-black tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                onClick={() => {
                  onScrollToAdmission();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#2c328a] hover:bg-[#1f2150] text-white w-full py-8 text-xl font-black rounded-2xl"
              >
                Book Campus Tour Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
