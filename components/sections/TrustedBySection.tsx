"use client";

import { motion, Variants } from "framer-motion";

const clients = [
  "BIO-RAD", "ADIENT", "METROPOLITAN", "BOEING", "Unilever", "Western Digital",
  "Bristow", "Apple", "ALTERA", "AMD", "APPLIED MATERIALS", "Chico's",
  "ExxonMobil", "Roche", "Honeywell", "JUNIPER", "LEEYO", "Motorola",
  "OfficeMax", "ServiceNow", "Shane Co.", "SMUD", "Tesla", "Texas Instruments",
  "Shell", "HITACHI", "Stryker"
];

const stats = [
  { value: "500+", label: "Global Clients" },
  { value: "20+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export default function TrustedBySection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Trusted by <span className="text-orange-500">Industry Leaders</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From Fortune 500 companies to innovative startups, we partner with organizations across
            industries to deliver transformative solutions that drive real business results.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-16"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 40px rgba(249, 115, 22, 0.15)"
              }}
              className="group relative p-4 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10 text-center">
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                  {client}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 mb-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.4 + idx * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-orange-500 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 mb-6">
            Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions
          </p>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
          >
            Become Our Next Success Story
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
