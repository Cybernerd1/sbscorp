"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Warm Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 via-red-500/5 to-purple-500/10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">
              Digital Journey?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how SBS Corp can help you achieve your business transformation goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
