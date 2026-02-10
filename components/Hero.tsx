"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            Next Gen Enterprise Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Transform Your <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-cyan-400 to-emerald-400 animate-text-gradient">
              Digital Future
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            We empower businesses with cutting-edge AI, cloud integration, and strategic consulting to drive innovation and growth in the digital era.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              Start Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
              View Case Studies
            </button>
          </div>
          
          <div className="pt-8 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple placeholders for logos */}
            <span className="text-xl font-bold text-white/50">Microsoft</span>
            <span className="text-xl font-bold text-white/50">Google Cloud</span>
            <span className="text-xl font-bold text-white/50">AWS Partner</span>
          </div>
        </motion.div>

        {/* 3D Content Placeholder (Scene is in background, but this space is reserved for layout balance) */}
        <div className="hidden lg:block h-[600px] w-full" />
        
      </div>
    </section>
  );
}
