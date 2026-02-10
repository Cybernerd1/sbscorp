"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  delay?: number;
}

export default function ServiceCard({ 
  image,
  title, 
  description, 
  benefits,
  features,
  delay = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(249, 115, 22, 0.15)" }}
      className="group relative bg-linear-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-300"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300" />
      
      <div className="relative z-10">
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
          
          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>
          </div>

          {/* Description Overlay - Shows on Hover */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6"
          >
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              {description}
            </p>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          
          {/* Benefits */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits:</h4>
            <div className="flex flex-wrap gap-2">
              {benefits.map((benefit, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.1 * index }}
                  className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full border border-orange-500/20"
                >
                  {benefit}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Service Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.1 * index }}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <svg className="w-4 h-4 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(249, 115, 22, 1)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
