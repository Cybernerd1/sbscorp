"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const results = [
  "30% increase in customer satisfaction scores within 6 months",
  "25% reduction in operational costs through automation",
  "15% growth in digital banking users year-over-year"
];

export default function CaseStudySection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Client success stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how we&apos;ve helped organizations like yours overcome challenges and achieve their goals.
          </p>
        </motion.div>

        {/* Case Study Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-500 text-sm font-medium mb-6">
              Financial Services
            </span>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Global bank transforms digital customer experience
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              A leading global bank wanted to revolutionize its digital banking platform to 
              improve customer experience and operational efficiency. Our team of experts 
              helped develop and implement a comprehensive digital transformation strategy.
            </p>
            
            {/* Results */}
            <ul className="space-y-4 mb-8">
              {results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-orange-500" />
                  </div>
                  {result}
                </li>
              ))}
            </ul>
            
            <Link 
              href="/case-studies/global-bank"
              className="inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all"
            >
              Read full case study
              <span>→</span>
            </Link>
          </motion.div>
          
          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Client success"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
