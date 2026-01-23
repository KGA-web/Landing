"use client";

import { motion } from 'motion/react';
import { Card } from '@/app/components/ui/card';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Quote, Star, CheckCircle2, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Anusha V.",
    role: "Parent of Deeksha (LKG)",
    content: "My daughter is studying so well in all subjects within just 5 months. KGA started teaching Kannada so early, which surprised us. The school has a colorful ambience and the non-teaching staff take care of kids very well.",
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
    content: "Well planned curriculum and study material, excellent teaching and very supportive staff. The environment is perfect for early growth.",
    initials: "MS",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1f2150]" id="testimonials">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgdmlld0JveD0nMCAwIDYwIDYwJz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djRoLTR2LTRoNHptMCA2djRoLTR2LTRoNHptMCA2djRoLTR2LTRoNHptLTYtOHY0aC00di00aDR6bS02IDB2NGgtNHYtNGg0em0tNiAwdjRoLTR2LTRoNHptLTYgMHY0aC00di00aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#6071dd]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            {/* UPDATED: White BG, Dark Text */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-white text-[#1f2150] text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Star className="h-3 w-3 fill-[#6071dd] text-[#6071dd]" /> Community Voice
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Trusted by <span className="text-[#8fa1ff]">Visionary</span> Parents
              {/* text-[#8fa1ff] is a lighter, brighter version of the brand blue */}
            </h2>
            <p className="text-gray-300 text-lg font-medium">
              Join hundreds of families who have chosen Koshy's Global Academia.
            </p>
          </motion.div>

          <div className="hidden md:flex gap-4">
             <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <div className="text-2xl font-black text-white">4.9</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Rating</div>
             </div>
             <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                {/* UPDATED: Lighter Blue Text */}
                <div className="text-2xl font-black text-[#8fa1ff]">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Safety</div>
             </div>
          </div>
        </div>

        {/* --- Infinite Marquee --- */}
        <div className="relative flex overflow-x-hidden group py-4">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1f2150] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1f2150] to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee flex gap-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card 
                key={i} 
                className="w-[380px] md:w-[480px] shrink-0 p-8 bg-white border-none rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.01] relative flex flex-col justify-between"
              >
                {/* Top Section */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <Quote className="h-10 w-10 text-[#1f2150]/10" />
                </div>

                {/* Content - Dark Text */}
                <p className="text-[#1f2150] text-lg leading-relaxed font-medium mb-8">
                  "{t.content}"
                </p>

                {/* Bottom Profile Section */}
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
                      <AvatarFallback className="bg-gradient-to-br from-[#1f2150] to-[#2c328a] text-white font-bold text-sm">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-[#1f2150] font-black text-base">{t.name}</h4>
                        <BadgeCheck className="h-4 w-4 text-[#6071dd]" />
                    </div>
                    <span className="inline-block mt-0.5 text-xs font-bold text-[#6071dd] bg-[#6071dd]/10 px-2 py-0.5 rounded-md uppercase tracking-wide">
                        {t.role}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
