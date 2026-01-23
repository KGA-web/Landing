"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { GraduationCap, Users, Award, BookOpen, Globe, Sparkles } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import React from 'react';

const features = [
  {
    icon: GraduationCap,
    title: 'World-Class Curriculum',
    description: 'International standards integrated with local culture, preparing students for global success.',
    color: 'from-[#1f2150] to-[#2c328a]',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Highly qualified educators dedicated to nurturing each child\'s individual potential.',
    color: 'from-[#2c328a] to-[#6071dd]',
  },
  {
    icon: Award,
    title: 'Holistic Development',
    description: 'A balanced focus on academic excellence, sports, arts, and character building.',
    color: 'from-[#1f2150] to-[#6071dd]',
  },
  {
    icon: BookOpen,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities including smart classrooms, labs, and sports complex.',
    color: 'from-[#6071dd] to-[#1f2150]',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description: 'International collaborations and exchange programs for diverse cultural awareness.',
    color: 'from-[#2c328a] to-[#6071dd]',
  },
  {
    icon: Sparkles,
    title: 'Innovation & Tech',
    description: 'Coding labs and STEM programs designed for future-ready technical mastery.',
    color: 'from-[#1f2150] to-[#2c328a]',
  },
];

function TiltCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-full"
    >
      <Card className="group relative p-10 h-full bg-white/80 backdrop-blur-sm border-none shadow-[0_10px_40px_rgba(31,33,80,0.05)] hover:shadow-[0_40px_80px_rgba(31,33,80,0.15)] transition-shadow duration-500 rounded-[3rem] overflow-hidden">
        
        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(96,113,221,0.15)_0%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${feature.color} flex items-center justify-center mb-10 shadow-lg`}
          >
            <Icon className="h-10 w-10 text-white" />
          </motion.div>

          <h3 className="text-2xl font-black mb-4 text-[#1f2150] leading-tight">
            {feature.title}
          </h3>
          
          <p className="text-black/60 leading-relaxed font-medium text-lg">
            {feature.description}
          </p>
          
          <div className="mt-8 flex items-center gap-2">
            <div className="h-1 w-12 bg-[#6071dd] rounded-full group-hover:w-20 transition-all duration-500" />
            <div className="h-1 w-1 bg-[#6071dd] rounded-full" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="py-32 bg-[#fcfdff] relative overflow-hidden scroll-mt-24" id="why-choose-us" style={{ perspective: "1500px" }}>
      <div className="absolute top-0 inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6071dd]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1f2150]/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f2150]/5 text-[#1f2150] font-bold text-xs uppercase tracking-widest mb-6">
            <Sparkles className="h-4 w-4" /> Why KGA?
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#1f2150] tracking-tighter">
            Where Potential <br /> Meets <span className="text-[#6071dd]">Purpose</span>
          </h2>
          <p className="text-xl text-black/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Our educational framework is built on three pillars: <br />
            <strong>Inquiry, Innovation, and Integrity.</strong>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <TiltCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
