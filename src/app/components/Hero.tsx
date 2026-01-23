'use client';

import { motion } from 'motion/react';
import Image from 'next/image'; // Optimized Next.js Image component
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

interface HeroProps {
  onScrollToAdmission: () => void;
}

export function Hero({ onScrollToAdmission }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white font-sans pt-28 pb-12 lg:pt-0 lg:pb-0">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#6071dd] opacity-5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#2c328a] opacity-5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Top Image - Visible on Mobile (Order 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(31,33,80,0.2)] border-4 border-white group aspect-[4/3] lg:aspect-square">
              {/* Using Next.js Image for optimization */}
              <Image
                src="/Reading.jpeg" 
                alt="Students learning at Koshys Global Academia"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2150]/30 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 z-20"
            >
              <div className="text-3xl md:text-4xl font-black text-[#2c328a]">300+</div>
              <div className="text-[10px] md:text-sm font-bold text-black/50 tracking-wider uppercase">Happy Students</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -5 }}
              className="absolute -top-6 -right-4 md:-right-8 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 z-20"
            >
              <div className="text-3xl md:text-4xl font-black text-[#6071dd]">05+</div>
              <div className="text-[10px] md:text-sm font-bold text-black/50 tracking-wider uppercase">Years Excellence</div>
            </motion.div>
          </motion.div>

          {/* Text Content (Order 2) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-[#2c328a] text-white rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-md"
            >
              Nurturing Minds, Inspiring Futures
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#6071dd] to-[#2c328a] bg-clip-text text-transparent leading-[1.1]"
            >
              The Premium CBSE School in Bangalore, <br />
              for Future Leaders
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-xl text-black/70 mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
            >
              Experience world-class education at Koshys Global Academia. We blend innovation with tradition 
              to prepare your child for global success in a changing world.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                onClick={onScrollToAdmission}
                className="bg-[#2c328a] hover:bg-[#1f2150] text-white px-8 py-7 text-lg font-bold group transition-all duration-300 rounded-xl shadow-xl shadow-[#2c328a]/20"
              >
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-7 text-lg font-bold border-2 border-[#2c328a] text-[#2c328a] hover:bg-[#2c328a]/5 transition-colors rounded-xl"
              >
                Explore Programs
              </Button>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm md:text-base font-semibold text-black/60"
            >
              <div className="flex items-center gap-3 group cursor-pointer hover:text-[#2c328a] transition-colors">
                <div className="p-2 bg-[#6071dd]/10 rounded-lg">
                    <Phone className="h-5 w-5 text-[#2c328a]" />
                </div>
                <span>+91 90353 32189</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:text-[#2c328a] transition-colors">
                <div className="p-2 bg-[#6071dd]/10 rounded-lg">
                    <Mail className="h-5 w-5 text-[#2c328a]" />
                </div>
                <span>info@koshysglobalacademia.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
