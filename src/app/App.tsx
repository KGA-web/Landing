import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 👇 1. IMPORT VERCEL ANALYTICS (Must be /react for Vite apps)
import { Analytics } from "@vercel/analytics/react";

// COMPONENT IMPORTS
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
import { MandatoryDisclosure } from './components/MandatoryDisclosure'; 

// 1. Home Page Component
const HomePage = () => {
  const scrollToAdmission = () => {
    const element = document.getElementById('admission-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Header onScrollToAdmission={scrollToAdmission} />
      <main>
        <Hero onScrollToAdmission={scrollToAdmission} />
        <AboutStats />
        <Features />      
        <Programs />
        <Testimonials />  
        <div id="admission-form">
          <AdmissionForm />
        </div>
        <ContactSection /> 
      </main>
      <Footer />
    </>
  );
};

// 2. Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* New Mandatory Disclosure Page */}
        <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
      </Routes>
      
      <Toaster position="top-right" richColors />

      {/* 👇 2. ADD ANALYTICS COMPONENT HERE */}
      <Analytics />
      
    </div>
  );
}
