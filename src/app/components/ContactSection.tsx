import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ExternalLink, ArrowRight } from 'lucide-react';

export function ContactSection() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Koshys+Global+Academia+Kannur+Bangalore";

  const contactData = [
    { 
      icon: <MapPin className="text-[#6071dd] h-6 w-6" />, 
      title: "Campus Address", 
      desc: "Koshys Global Academia, Kannur, Bangalore, Karnataka 562149",
      actionText: "Open in Maps",
      link: mapUrl
    },
    { 
      icon: <Phone className="text-[#6071dd] h-6 w-6" />, 
      title: "Contact Numbers", 
      desc: "+91 90353 32189 / +91 80 1234 5678",
      actionText: "Whatsapp Us",
      link: "https://wa.me/+919035332189"
    },
    { 
      icon: <Clock className="text-[#6071dd] h-6 w-6" />, 
      title: "Office Hours", 
      desc: "Mon - Sat: 8:30 AM - 4:30 PM (Sunday Closed)",
      actionText: "Schedule Visit",
      link: "#admission-form" 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#f8faff] rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#6071dd] font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1f2150] mb-4">Visit Our Campus</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">
            Experience our world-class infrastructure and vibrant learning environment firsthand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-[#f8faff] rounded-[3rem] border border-transparent hover:border-[#6071dd]/20 hover:bg-white hover:shadow-[0_20px_60px_rgba(96,113,221,0.1)] transition-all duration-500 group"
            >
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-[#6071dd] transition-colors duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>

              <h4 className="font-bold text-2xl text-[#1f2150] mb-4">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-8 font-medium">
                {item.desc}
              </p>
              
              <a 
                href={item.link}
                target={item.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#6071dd] font-extrabold group/btn"
              >
                <span className="relative">
                  {item.actionText}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#6071dd] scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
                </span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
