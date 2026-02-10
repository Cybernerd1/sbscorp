"use client";

import { motion } from "framer-motion";
import { Globe, Clock, Headphones, Users } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Coverage",
    description: "Multi-continent presence for seamless 24/7 support"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance across all time zones"
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Expert Team",
    description: "Highly skilled professionals at your service"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "140+ Enterprises",
    description: "Trusted by leading businesses worldwide"
  }
];

export default function ManagedServicesSection() {
  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Managed Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Follow The Sun <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">24/7 Support</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our "follow the sun" model provides continuous 24/7 support across multiple continents. We manage complex services for over 140 enterprise-wide businesses, ensuring your operations never skip a beat.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - 3D World Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glowing Orb */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-2xl"
              />
              
              {/* Globe Container */}
              <div className="relative w-full h-full rounded-full bg-linear-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Grid Lines */}
                <div className="absolute inset-4 rounded-full border border-white/5" />
                <div className="absolute inset-12 rounded-full border border-white/5" />
                <div className="absolute inset-20 rounded-full border border-white/5" />
                
                {/* Connection Points */}
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-[20%] left-[30%] w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                />
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-[35%] right-[25%] w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"
                />
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-[30%] left-[40%] w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                />
                
                {/* Center Text */}
                <div className="text-center z-10">
                  <div className="text-5xl font-bold text-white mb-2">140+</div>
                  <div className="text-gray-400 text-sm">Enterprise Clients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
