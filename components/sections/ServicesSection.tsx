"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "User Interface design",
  "User Experience Design",
  "Mobile Application design"
];

const stats = [
  { value: "5M+", label: "Customer" },
  { value: "450M+", label: "Coverage" },
  { value: "22%", label: "Earning" },
  { value: "8.03%", label: "Interest" }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-20"
        >
          Our Services
        </motion.h2>

        {/* Service Block */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              UI/UX Design
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Hands-on learning picked the innovation projects. Solve Real 235
              On The Cloud. Create new e-commerce websites. Conduct
              how to be updated of your UX design.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-orange-500" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:text-orange-500 transition-colors group">
              LEARN MORE
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                  alt="UI/UX Design"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-orange-500 rounded-xl text-white font-semibold text-sm shadow-lg shadow-orange-500/30"
              >
                UI/UX
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-zinc-900/50 rounded-3xl border border-white/5"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
