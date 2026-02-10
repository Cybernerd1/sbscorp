"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "SBS Corp transformed our digital infrastructure completely. Their expertise in enterprise integration saved us countless hours.",
    author: "Michael Chen",
    role: "CTO, TechVentures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5
  },
  {
    quote: "The AI solutions provided by SBS Corp have revolutionized our customer service. We've seen a 40% improvement.",
    author: "Sarah Johnson",
    role: "VP Operations, GlobalRetail",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5
  },
  {
    quote: "Their managed services team is exceptional. 24/7 support means we never worry about downtime.",
    author: "David Park",
    role: "CEO, FinanceFirst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-t from-orange-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Our happy Customers
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-zinc-900/80 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={t.image} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-white font-semibold">{t.author}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
