"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface ProductCardProps {
  category: string;
  categoryColor: string;
  image: string;
  title: string;
  description: string;
  features: string[];
  technicalSpecs: string[];
  delay?: number;
}

export default function ProductCard({
  category,
  categoryColor,
  image,
  title,
  description,
  features,
  technicalSpecs,
  delay = 0
}: ProductCardProps) {
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
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/70 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-4 py-1.5 ${categoryColor} text-white text-xs font-semibold rounded-full shadow-lg`}>
              {category}
            </span>
          </div>

          {/* Icon Button */}
          <div className="absolute bottom-4 right-4">
            <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
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

          {/* Technical Specs */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Technical Specs:</h4>
            <div className="flex flex-wrap gap-2">
              {technicalSpecs.map((spec, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full border border-orange-500/20"
                >
                  {spec}
                </span>
              ))}
            </div>
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
