"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-black">
      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              SBS Corp
              <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-500 to-red-500"
              >
                Solutions.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed"
            >
              Data-driven solutions to drive performance models. Systematic results for faster deployment and sustainable growth.
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              GET STARTED
            </motion.a>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex gap-6"
            >
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(249, 115, 22, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-4 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", delay: 0.9 }}
                  className="text-3xl font-bold text-white"
                >
                  240+
                </motion.div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Partners</div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(249, 115, 22, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-4 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", delay: 1 }}
                  className="text-3xl font-bold text-orange-500"
                >
                  92%
                </motion.div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Faster Technology</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[400px] h-[400px]"
            >
              {/* Glow Effect */}
              <motion.div 
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-linear-to-br from-orange-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl" 
              />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
                  alt="AI Technology"
                  fill
                  className="object-cover"
                />
                {/* Colorful Overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-orange-500/40 via-transparent to-purple-500/40 mix-blend-overlay" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
