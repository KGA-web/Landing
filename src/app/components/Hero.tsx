'use client';

// 1. CHANGED: switched to standard 'framer-motion'
// If you get an error here, change it back to 'motion/react'
import { motion } from 'framer-motion'; 

// 2. REMOVED: external Button component (temporarily) to prevent crashes
// import { Button } from '@/app/components/ui/button'; 

// 3. REMOVED: icons (temporarily)
// import { ArrowRight, Phone, Mail } from 'lucide-react';

interface HeroProps {
  onScrollToAdmission: () => void;
}

export function Hero({ onScrollToAdmission }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white font-sans pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute top-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-[#6071dd] opacity-5 blur-[80px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-[#2c328a] opacity-5 blur-[80px] md:blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Top Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 w-full max-w-[90%] sm:max-w-md lg:max-w-none mx-auto"
          >
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(31,33,80,0.2)] border-4 border-white group aspect-[4/3] lg:aspect-square">
              {/* Standard HTML Image Tag */}
              <img
                src="/Reading.jpeg" 
                alt="Students learning"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="eager" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2150]/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-[#2c328a]"
            >
              The Premium CBSE School in Bangalore
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-black/70 mb-8 md:mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0"
            >
              Experience world-class education at Koshys Global Academia.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
            >
              {/* USING STANDARD BUTTONS TO TEST */}
              <button 
                onClick={onScrollToAdmission}
                className="bg-[#2c328a] text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl"
              >
                Apply for Admission
              </button>
              
              <button 
                className="px-8 py-4 text-lg font-bold border-2 border-[#2c328a] text-[#2c328a] rounded-xl bg-transparent"
              >
                Explore Programs
              </button>
            </motion.div>

            <div className="mt-8 text-black/60 font-semibold">
                Contact: +91 90353 32189
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
