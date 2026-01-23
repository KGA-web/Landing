'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap, Target, BarChart, Camera } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const roles = [
  'Digital Marketers',
  'Growth Hackers',
  'Brand Strategists',
  'Video Editors',
  'Creative Directors',
];

export default function GraphikardiaHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeRole, setActiveRole] = useState(0);
  const animationFrameRef = useRef<number>();

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = containerRef.current.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Neon Spotlight
    const gradient = ctx.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, 220);
    gradient.addColorStop(0, 'rgba(236, 72, 153, 0.15)'); // Pink-500
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Service Tags Reveal
    ctx.font = 'bold 14px "Inter", sans-serif';
    ctx.textAlign = 'center';
    
    roles.forEach((_, index) => {
      const angle = (index / roles.length) * Math.PI * 2;
      const x = canvas.width / 2 + Math.cos(angle) * 300;
      const y = canvas.height / 2 + Math.sin(angle) * 300;

      const dist = Math.sqrt(Math.pow(mousePos.x - x, 2) + Math.pow(mousePos.y - y, 2));
      const opacity = Math.max(0, 1 - dist / 200);

      if (opacity > 0) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = '#ec4899';
        ctx.fillText('• DISRUPT •', x, y);
        ctx.restore();
      }
    });
  }, [mousePos]);

  useEffect(() => {
    const animate = () => {
      drawCanvas();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameRef.current!);
  }, [drawCanvas]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] text-white font-sans"
    >
      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-500/10 blur-[120px] rounded-full" />
      
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1 border border-pink-500/30 bg-pink-500/5 text-pink-400 rounded-full text-[10px] font-black tracking-[0.2em] uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          Next-Gen Creative Partner
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-4">
          GRAPHIKARDIA
        </h1>

        <div className="h-24 flex flex-col items-center justify-center overflow-hidden">
          <span className="text-xs uppercase tracking-[0.5em] text-white/40 mb-2">We Are Your</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ y: 30, opacity: 0, skewY: 10 }}
              animate={{ y: 0, opacity: 1, skewY: 0 }}
              exit={{ y: -30, opacity: 0, skewY: -10 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
            >
              {roles[activeRole]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p 
          className="max-w-xl mx-auto text-white/50 text-base md:text-lg mt-8 mb-12 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We don't just market; we dominate. Transforming brands through high-impact 
          visuals and data-driven growth hacking.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Button className="bg-white text-black hover:bg-pink-500 hover:text-white px-10 py-7 text-lg font-black rounded-none transition-all duration-300 transform hover:-translate-y-1">
            START A PROJECT <ArrowUpRight className="ml-2" />
          </Button>
          <Button variant="outline" className="border-white/20 text-white px-10 py-7 text-lg font-black rounded-none hover:bg-white/5">
            VIEW REEL
          </Button>
        </motion.div>
      </div>

      {/* Edge Service Indicators */}
      <div className="absolute hidden lg:flex flex-col gap-8 left-12 top-1/2 -translate-y-1/2 opacity-20">
        <Zap size={20} /> <Target size={20} /> <BarChart size={20} /> <Camera size={20} />
      </div>
    </section>
  );
}
