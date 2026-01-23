import React from 'react';
import { motion } from 'framer-motion';

// Component Imports - Since App.tsx and the components folder are both in /src/app/
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutStats } from './components/AboutStats';
import { Features } from './components/Features'; 
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { AdmissionForm } from './components/AdmissionForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer'; 
import { Toaster } from './components/ui/sonner';

export default function App() {
  const scrollToAdmission = () => {
    const element = document.getElementById('admission-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onScrollToAdmission={scrollToAdmission} />
      <main>
        <Hero onScrollToAdmission={scrollToAdmission} />
        <AboutStats />
        <Features />      
        <Programs />
        <Testimonials />  
        <AdmissionForm />
        <ContactSection /> 
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
