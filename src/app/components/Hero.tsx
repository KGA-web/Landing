'use client';

import { motion } from 'framer-motion'; 

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
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* IMAGE SECTION WITH FLOATING STATS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 w-full max-w-[90%] sm:max-w-md lg:max-w-none mx-auto"
          >
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(31,33,80,0.2)] border-4 border-white group aspect-[4/3] lg:aspect-square">
              <img
                src="/Reading.jpeg" 
                alt="Students learning"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="eager" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2150]/30 to-transparent"></div>
            </div>

            {/* STAT CARD 1: Happy Students */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 z-20"
            >
              <div className="text-2xl md:text-4xl font-black text-[#2c328a]">500+</div>
              <div className="text-[10px] md:text-xs font-bold text-black/40 tracking-widest uppercase mt-1">Happy Students</div>
            </motion.div>

            {/* STAT CARD 2: Years Excellence */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-6 -right-4 md:-right-10 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 z-20"
            >
              <div className="text-2xl md:text-4xl font-black text-[#6071dd]">15+</div>
              <div className="text-[10px] md:text-xs font-bold text-black/40 tracking-widest uppercase mt-1">Years Excellence</div>
            </motion.div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-[#2c328a] leading-tight"
            >
              The Premium CBSE School in Bangalore
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-lg text-black/70 mb-8 md:mb-10 leading-relaxed font-medium"
            >
              Experience world-class education at Koshys Global Academia. We empower students to become the leaders of tomorrow.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onScrollToAdmission}
                className="bg-[#2c328a] hover:bg-[#1f2150] text-white px-10 py-5 text-lg font-bold rounded-2xl shadow-xl transition-all active:scale-95"
              >
                Apply for Admission
              </button>
              
              <button 
                className="px-10 py-5 text-lg font-bold border-2 border-[#2c328a] text-[#2c328a] rounded-2xl bg-transparent hover:bg-[#2c328a]/5 transition-all"
              >
                Explore Programs
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-3 text-black/60 font-bold">
                <div className="w-8 h-[2px] bg-[#6071dd]"></div>
                <span>Contact: +91 90353 32189</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
