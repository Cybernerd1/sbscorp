"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black" />
      
      {/* City Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80')] bg-cover bg-bottom opacity-30" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-1.5 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-500 text-sm font-medium uppercase tracking-wider">
            Vision
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-8"
        >
          Our Vision
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
        >
          Our vision is to deliver high-quality services in Application Development, 
          Enterprise Integration, Business Consulting, and Artificial Intelligence 
          (AI) solutions, providing comprehensive IT and consulting support for 
          small, medium, and large businesses under one roof.
        </motion.p>
        
        {/* Glassmorphism Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
        >
          <p className="text-gray-400 leading-relaxed">
            SBS Corp is committed to delivering value-added services pivotal to our 
            clients&apos; success. We empower our customers with a competitive edge by 
            leveraging our core technical expertise, domain knowledge, and advanced 
            AI-driven capabilities to drive innovation, optimize processes, and achieve 
            sustainable business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
