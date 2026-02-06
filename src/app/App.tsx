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

  
// 1. Home Page Component with SCHEMA MARKUP
const HomePage = () => {
  const scrollToAdmission = () => {
    const element = document.getElementById('admission-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- SCHEMA MARKUP START ---
  // This helps Google understand your location, brand, and FAQs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "School",
        "@id": "https://admissions.koshysglobalacademia.com", // Replace with actual domain
        "name": "Koshys Global Academia",
        "url": "https://admissions.koshysglobalacademia.com",
        "logo": "https://admissions.koshysglobalacademia.com/Asset 8.png",
        "image": "https://admissions.koshysglobalacademia.com/Asset 8.png",
        "description": "A premier educational institution located on Hennur-Bagalur Road offering world-class facilities and curriculum.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hennur-Bagalur Road, Kannur",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "562149",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "13.107367893177063", // Approximate coords for Hennur-Bagalur area , 
          "longitude": "77.66632834232894"
        },
        "telephone": "+91-90353 32189", // TODO: Add real phone number
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "16:30"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/people/Koshys-Global-Academia/61585427528285/", // TODO: Add your social links
          "https://www.instagram.com/kga_official_in/",
          "https://wa.me/+919035332189"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
         {
            "@type": "Question",
            "name": "Where is Koshys Global Academia located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are conveniently located on Hennur-Bagalur Road, Bengaluru, providing easy access for students residing in North Bangalore and surrounding areas."
            }
          },
          {
            "@type": "Question",
            "name": "What curriculum does Koshys Global Academia follow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Koshys Global Academia offers a comprehensive curriculum designed to foster academic excellence and holistic development. Please contact our admissions team for specific details on CBSE board affiliations."
            }
          },
          {
            "@type": "Question",
            "name": "Does the school provide transport facilities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer safe and well-connected transport facilities covering major routes across North Bangalore to ensure a hassle-free commute for our students."
            }
          },
          {
            "@type": "Question",
            "name": "What is the admission process for new students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The admission process is simple: 1. Fill out the enquiry form on our website. 2. Book a campus tour. 3. Meet with our counselors. 4. Complete the registration formalities."
            }
          },
          {
            "@type": "Question",
            "name": "Are there sports and extracurricular activities available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We believe in holistic education and offer a wide range of extracurriculars including sports, arts, music, and robotics to nurture every child's unique talents."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book a campus tour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book a campus tour instantly by clicking the 'Book Campus Tour' button on our website or by filling out the admission form below."
            }
          }
        ]
      }
    ]
  };
  // --- SCHEMA MARKUP END ---

  return (
    <>
      {/* Inject Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
