"use client";

import { motion } from "framer-motion";

const services = [
  "Site Design",
  "Dashboard",
  "NFT ART",
  "Development",
  "Strategy",
  "Maintain Db",
  "Cloud Services",
  "AI Solutions",
  "Analytics",
  "Integration"
];

export default function MarqueeSection() {
  return (
    <section className="py-8 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-8"
        >
          {[...services, ...services].map((service, idx) => (
            <div key={idx} className="flex items-center gap-4 shrink-0">
              <span className="text-orange-500 text-xl">✦</span>
              <span className="text-white font-medium text-lg whitespace-nowrap">{service}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-8"
        >
          {[...services, ...services].map((service, idx) => (
            <div key={idx} className="flex items-center gap-4 shrink-0">
              <span className="text-orange-500 text-xl">✦</span>
              <span className="text-white font-medium text-lg whitespace-nowrap">{service}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
