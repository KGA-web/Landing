import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

interface HeroProps {
  onScrollToAdmission: () => void;
}

export function Hero({ onScrollToAdmission }: HeroProps) {
  return (
    // Updated background to utilize Deep Space and White for a cleaner look
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white font-sans">
      {/* Background patterns utilizing brand Navy at low opacity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6071dd] opacity-5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2c328a] opacity-5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              // Styled with Brand Navy and Black
              className="inline-block mb-6 px-4 py-2 bg-[#2c328a] text-white rounded-full text-sm font-semibold tracking-wide shadow-md"
            >
              Nurturing Young Minds Since Excellence
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              // Heading uses Accent Blue to Brand Navy Gradient
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#6071dd] to-[#2c328a] bg-clip-text text-transparent leading-[1.1]"
            >
              Koshys Global Academia
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              // Text in a dark grey/black for maximum readability
              className="text-lg md:text-xl text-black/70 mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
            >
              Where education meets innovation. We provide world-class learning experiences 
              that inspire creativity, foster curiosity, and build confident future leaders.
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
                // Solid Primary Navy with Deep Space Hover
                className="bg-[#2c328a] hover:bg-[#1f2150] text-white px-10 py-7 text-xl font-bold group transition-all duration-300 rounded-xl shadow-xl shadow-[#2c328a]/20"
              >
                Apply for Admission
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                // Outline uses the Navy brand color
                className="px-10 py-7 text-xl font-bold border-2 border-[#2c328a] text-[#2c328a] hover:bg-[#2c328a]/5 transition-colors rounded-xl"
              >
                Explore Programs
              </Button>
            </motion.div>

            {/* Contact Info using Brand Accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-base font-semibold text-black/60"
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(31,33,80,0.3)] border-4 border-white">
              <img
                src="/Reading.jpeg" 
                alt="Happy children learning"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2150]/40 to-transparent"></div>
            </div>

            {/* Floating Stats using Deep Space and Accent Blue */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
            >
              <div className="text-4xl font-black text-[#2c328a]">500+</div>
              <div className="text-sm font-bold text-black/50 tracking-wider uppercase">Happy Students</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
            >
              <div className="text-4xl font-black text-[#6071dd]">15+</div>
              <div className="text-sm font-bold text-black/50 tracking-wider uppercase">Years Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-[#2c328a]/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-[#2c328a] rounded-full mt-1"
          />
        </div>
      </motion.div>
    </section>
  );
}
