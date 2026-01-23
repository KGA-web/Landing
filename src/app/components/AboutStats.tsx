import { motion } from 'motion/react';
import { Users, Award, BookOpen, Trophy, Cpu, Dumbbell, Laptop } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '300+',
    label: 'Students Enrolled',
    color: 'from-[#2c328a] to-[#6071dd]',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Expert Faculty',
    color: 'from-[#1f2150] to-[#2c328a]',
  },
  {
    icon: BookOpen,
    value: '05+',
    label: 'Years of Excellence',
    color: 'from-[#6071dd] to-[#2c328a]',
  },
  {
    icon: Trophy,
    value: '70+',
    label: 'Awards & Achievements',
    color: 'from-[#2c328a] to-[#1f2150]',
  },
];

export function AboutStats() {
  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#1f2150] tracking-tight">
            Nurturing Future Leaders
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto leading-relaxed font-medium">
            At Koshy's Global Academia, we blend traditional excellence with 
            cutting-edge technology to prepare students for a global future.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-[0_15px_40px_rgba(31,33,80,0.08)] text-center group border border-gray-50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black mb-2 text-[#1f2150]">{stat.value}</div>
                <div className="text-[#2c328a] font-bold tracking-widest uppercase text-[10px]">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Grid with Icons and Descriptions */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Sports Activities */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5] border-4 border-white"
          >
            <img
              src="/Ground.jpeg" 
              alt="Sports Activities"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2150]/90 via-[#1f2150]/20 to-transparent flex items-end p-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Dumbbell className="h-5 w-5 text-[#9caaff]" />
                  <span className="text-white font-black tracking-widest text-xs uppercase bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">Athletics</span>
                </div>
                <h3 className="text-white text-2xl font-black mt-1">Sports & Physical Growth</h3>
                <p className="text-white/80 text-sm mt-2 font-medium leading-tight">State-of-the-art facilities for athletic excellence and teamwork.</p>
              </div>
            </div>
          </motion.div>

          {/* Smart Classroom Learning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5] border-4 border-white"
          >
            <img
              src="/Class.jpeg" 
              alt="Smart Classroom Learning"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2150]/90 via-[#1f2150]/20 to-transparent flex items-end p-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Laptop className="h-5 w-5 text-[#9caaff]" />
                  <span className="text-white font-black tracking-widest text-xs uppercase bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">Academic Excellence</span>
                </div>
                <h3 className="text-white text-2xl font-black mt-1">Smart Classroom Learning</h3>
                <p className="text-white/80 text-sm mt-2 font-medium leading-tight">Interactive digital environments for modern conceptual learning.</p>
              </div>
            </div>
          </motion.div>

          {/* Robotic and AI Lab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5] border-4 border-white"
          >
            <img
              src="/C.Lab.jpeg" 
              alt="Robotic and AI Integrated Learning"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c328a]/90 via-[#2c328a]/20 to-transparent flex items-end p-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="h-5 w-5 text-[#9caaff]" />
                  <span className="text-white font-black tracking-widest text-xs uppercase bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">Innovation Hub</span>
                </div>
                <h3 className="text-white text-2xl font-black mt-1">Robotics & AI Learning</h3>
                <p className="text-white/80 text-sm mt-2 font-medium leading-tight">Advanced laboratory for future-ready technical skills.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
