"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Zap, Leaf } from "lucide-react";

const expertiseItems = [
  {
    icon: Globe,
    title: "Global expansion",
    description: "Navigate international markets with strategic planning and local insights."
  },
  {
    icon: Zap,
    title: "Digital disruption",
    description: "Transform challenges into opportunities with innovative digital solutions."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Develop strategies that balance growth with environmental and social responsibility."
  }
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 px-6 bg-[#0d111a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-bl-[100px]" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Building expertise to solve your most important problems
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From digital manufacturing and SAP implementation to cloud migration and 
              intelligent finance solutions, we deliver comprehensive expertise across 
              manufacturing operations, product lifecycle management, and advanced 
              analytics to transform your business challenges into competitive advantages.
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 border border-orange-500/30 text-orange-500 font-medium rounded hover:bg-orange-500 hover:text-white transition-all"
            >
              Learn how we can help
              <span>→</span>
            </Link>
          </motion.div>
          
          {/* Right - Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {expertiseItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-orange-500/20 transition-all"
              >
                <div className="w-10 h-10 shrink-0 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-500 mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
