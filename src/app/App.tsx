import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
import { MandatoryDisclosure } from './components/MandatoryDisclosure'; // Make sure you created this file!

// 1. We create a "Home" component that holds the main landing page
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

// 2. The App component now acts as the Router
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
    </div>
  );
}
