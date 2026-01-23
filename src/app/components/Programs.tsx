import { motion } from 'motion/react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Sparkles, BookOpen, Microscope, GraduationCap, Download } from 'lucide-react';

const programs = [
  {
    title: 'Pre-Primary Foundation',
    focus: 'Holistic Development',
    icon: Sparkles,
    image: '/Playgroup.jpg', 
    description: 'A playful learning environment focused on nurturing social skills, emotional intelligence, and creative expression through exploration.',
    highlights: ['Experiential Learning', 'Sensory Activities', 'Creative Arts', 'Social Skills'],
  },
  {
    title: 'Primary Excellence',
    focus: 'Core Literacy & STEM',
    icon: BookOpen,
    image: '/Primary.jpg',
    description: 'Building a robust academic foundation with an emphasis on inquiry-based learning and early critical thinking skills.',
    highlights: ['Conceptual Math', 'Language Arts', 'STEM Introduction', 'Environmental Awareness'],
  },
  {
    title: 'Middle Years Program',
    focus: 'Analytical Thinking',
    icon: Microscope,
    image: '/middle (1).jpg',
    description: 'Advanced curriculum designed to foster independent research, leadership, and complex problem-solving abilities.',
    highlights: ['Robotics & AI', 'Scientific Inquiry', 'Leadership Workshops', 'Global Perspectives'],
  },
  {
    title: 'Senior Secondary',
    focus: 'College & Career Ready',
    icon: GraduationCap,
    image: '/Student.jpeg',
    description: 'Comprehensive preparation for university success through specialized academic streams and career mentorship.',
    highlights: ['Specialized Streams', 'Career Guidance', 'University Prep', 'Advanced Research'],
  },
];

export function Programs() {
  const handleDownload = () => {
    // Direct Download conversion for Google Drive
    const brochureUrl = "https://shorturl.at/ixEm8";
    
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.target = "_blank"; 
    link.setAttribute('download', 'Koshys_Global_Academia_Brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-white font-sans" id="programs">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#1f2150] tracking-tight">
            Our Academic Programs
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto font-medium">
            Tailored educational pathways designed to nurture excellence at every stage of growth.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full border-none shadow-[0_15px_50px_rgba(31,33,80,0.06)] hover:shadow-[0_20px_60px_rgba(31,33,80,0.12)] transition-all duration-500 group cursor-pointer rounded-[2.5rem]">
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f2150]/90 via-[#1f2150]/20 to-transparent"></div>
                    
                    {/* Focus Badge */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <Icon className="h-4 w-4 text-[#2c328a]" />
                      <span className="text-[#2c328a] font-bold text-xs uppercase tracking-wider">
                        {program.focus}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <h3 className="text-3xl font-black mb-4 text-[#1f2150] group-hover:text-[#2c328a] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-black/60 mb-8 leading-relaxed font-medium text-lg">
                      {program.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {program.highlights.map((highlight, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-[#6071dd]/10 text-[#2c328a] hover:bg-[#6071dd]/20 border-none px-4 py-1.5 rounded-lg text-sm font-bold"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* --- DOWNLOAD BROCHURE CTA (PERFECTLY CENTERED) --- */}
        <div className="mt-20 flex justify-center w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl flex flex-col items-center justify-center p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#1f2150] to-[#2c328a] text-center shadow-2xl overflow-hidden relative"
          >
            {/* Background Decoration */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#6071dd]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Explore Our Full Curriculum
              </h3>
              <p className="text-white/80 text-lg mb-10 max-w-xl font-medium">
                Download the 2024-25 Prospectus for a detailed look at our facilities, 
                fee structure, and academic roadmap.
              </p>
              
              <Button 
                onClick={handleDownload}
                size="lg"
                className="bg-white text-[#1f2150] hover:bg-[#6071dd] hover:text-white font-black px-12 py-8 rounded-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl group text-lg"
              >
                <Download className="h-6 w-6 group-hover:animate-bounce" />
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
