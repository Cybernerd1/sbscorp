"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const insights = [
  {
    category: "AI Technology",
    date: "August 2025",
    title: "Agentic AI in Action: Autonomous Systems Redefine Workflows",
    excerpt: "Exploring how agentic AI is automating complex decision-making processes in enterprises, with real-world examples from...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    href: "/insights/agentic-ai"
  },
  {
    category: "Quantum Technology",
    date: "July 2025",
    title: "Quantum Sensing Advances: Real-World Applications in 2025",
    excerpt: "Highlighting recent breakthroughs in quantum sensing, including navigation and material analysis, and their impact on...",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    href: "/insights/quantum-sensing"
  },
  {
    category: "Sustainability",
    date: "June 2025",
    title: "AI-Driven Sustainability: Optimizing Energy Use in Data...",
    excerpt: "How AI and edge computing are reducing the carbon footprint of data centers, with insights from major tech providers in mid-...",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    href: "/insights/ai-sustainability"
  },
  {
    category: "AI Technology",
    date: "January 2025",
    title: "Generative AI Revolution: Transforming Enterprise...",
    excerpt: "How generative AI tools like ChatGPT, Claude, and custom LLMs are reshaping business processes, custom...",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    href: "/insights/generative-ai"
  }
];

export default function InsightsSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest insights
            </h2>
            <p className="text-gray-400 max-w-xl">
              Stay ahead with our latest research, trends and expert perspectives on the most 
              pressing business issues.
            </p>
          </motion.div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-orange-500/50 hover:text-orange-500 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-orange-500/50 hover:text-orange-500 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/20 transition-all"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-md">
                  {insight.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <span className="text-orange-500 text-sm mb-2 block">{insight.date}</span>
                <h3 className="text-white font-semibold mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>
                <Link 
                  href={insight.href}
                  className="inline-flex items-center gap-1 text-orange-500 text-sm font-medium hover:gap-2 transition-all"
                >
                  Read more
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
