"use client";

import { motion } from 'motion/react';
import { Card } from '@/app/components/ui/card';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Quote, Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Anusha V.",
    role: "Parent of Deeksha (LKG)",
    content: "My daughter is studying so well in all subjects within just 5 months. KGA started teaching Kannada so early, which surprised us. The school has a colorful ambience and the non-teaching staff take care of kids very well. Highly recommended!",
    initials: "AV",
  },
  {
    name: "Mamatha",
    role: "Parent of Vaishnav (Nursery)",
    content: "Very nicely planned and organized academic programmes. Lots of effort by all teachers. I am very grateful to the Coordinators and Principal. My child is being groomed very well.",
    initials: "MA",
  },
  {
    name: "Nagesh JS",
    role: "Parent of Chethas Gowda (1st Std)",
    content: "A very good school with qualified teachers. The campus and infrastructure are very spacious and impressive. Our son is very happy, and that makes us happy.",
    initials: "NJ",
  },
  {
    name: "Mahantesh Sasanur",
    role: "Parent of Aadyaveer (Nursery)",
    content: "Well planned curriculum and study material, excellent teaching and very supportive staff.",
    initials: "MS",
  }
];

export function Testimonials() {
  return (
    // UPDATED SECTION BACKGROUND
    <section className="py-24 relative overflow-hidden scroll-mt-24" id="testimonials">
      {/* Base Rich Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b1e] via-[#1f2150] to-[#0a0b1e] -z-20"></div>
      
      {/* Professional Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgNDBoNDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjNjA3MWRkIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoMXY0MEgwek0wIDBoNDB2MUgweiIvPjwvc3ZnPg==')] opacity-20 -z-10"></div>

      {/* Enhanced Decorative Light Glows using Brand Colors */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#6071dd]/20 to-transparent rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 -z-10" />
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#2c328a]/20 to-transparent rounded-full blur-[140px] translate-x-1/4 translate-y-1/4 -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6071dd]/10 border border-[#6071dd]/20 text-[#6071dd] text-xs font-bold uppercase tracking-widest mb-4">
              <Star className="h-3 w-3 fill-current" /> Community Voice
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6071dd] to-white">Visionary</span> Parents
            </h2>
            <p className="text-[#e0e7ff] text-lg font-medium opacity-80">
              Join hundreds of families who have chosen Koshy's Global Academia for excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:flex gap-8 items-center border-l border-[#6071dd]/20 pl-8"
          >
            <div>
              <div className="text-3xl font-black text-white">4.9/5</div>
              <div className="text-sm text-[#a5b4fc] font-bold uppercase tracking-tighter">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#6071dd]">100%</div>
              <div className="text-sm text-[#a5b4fc] font-bold uppercase tracking-tighter">Safety Record</div>
            </div>
          </motion.div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative flex overflow-x-hidden group py-8">
           {/* Added subtle fade gradient on edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0b1e] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0b1e] to-transparent z-10"></div>
          
          <div className="animate-marquee flex gap-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card 
                key={i} 
                // Enhanced glassmorphism and borders
                className="w-[350px] md:w-[450px] shrink-0 p-8 bg-[#1f2150]/30 border-[#6071dd]/20 backdrop-blur-lg rounded-[2.5rem] hover:bg-[#1f2150]/50 hover:border-[#6071dd]/40 transition-all duration-500 group/card relative shadow-xl"
              >
                <Quote className="absolute top-6 right-8 h-12 w-12 text-[#6071dd]/10 group-hover/card:text-[#6071dd]/30 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-[#6071dd] text-[#6071dd]" />
                  ))}
                </div>

                <p className="text-gray-200 mb-8 leading-relaxed font-medium italic">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 ring-2 ring-[#6071dd]/30 ring-offset-4 ring-offset-[#0a0b1e]">
                    <AvatarFallback className="bg-gradient-to-br from-[#2c328a] to-[#6071dd] text-white font-black">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-bold flex items-center gap-2">
                      {t.name} <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="text-xs text-[#6071dd] font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Required CSS for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
