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
    <section className="py-24 bg-[#0a0b1e] overflow-hidden relative scroll-mt-24" id="testimonials">
      {/* Decorative Light Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#6071dd]/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2c328a]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#6071dd] text-xs font-bold uppercase tracking-widest mb-4">
              <Star className="h-3 w-3 fill-current" /> Community Voice
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Trusted by <span className="text-[#6071dd]">Visionary</span> Parents
            </h2>
            <p className="text-gray-400 text-lg font-medium">
              Join hundreds of families who have chosen Koshy's Global Academia for excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:flex gap-8 items-center border-l border-white/10 pl-8"
          >
            <div>
              <div className="text-3xl font-black text-white">4.9/5</div>
              <div className="text-sm text-gray-500 font-bold uppercase tracking-tighter">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#6071dd]">100%</div>
              <div className="text-sm text-gray-500 font-bold uppercase tracking-tighter">Safety Record</div>
            </div>
          </motion.div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee flex gap-8 py-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card 
                key={i} 
                className="w-[350px] md:w-[450px] shrink-0 p-8 bg-white/5 border-white/10 backdrop-blur-md rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group/card relative"
              >
                <Quote className="absolute top-6 right-8 h-12 w-12 text-white/5 group-hover/card:text-[#6071dd]/20 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-[#6071dd] text-[#6071dd]" />
                  ))}
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed font-medium italic">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 ring-2 ring-[#6071dd]/20 ring-offset-4 ring-offset-[#0a0b1e]">
                    <AvatarFallback className="bg-gradient-to-br from-[#1f2150] to-[#6071dd] text-white font-black">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-bold flex items-center gap-2">
                      {t.name} <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="text-xs text-[#6071dd] font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Required CSS for Marquee - Place in global CSS or keep here */}
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
