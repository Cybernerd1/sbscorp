"use client";

import { motion } from "framer-motion";
import { Handshake, Users, Globe, Building2 } from "lucide-react";

const partners = [
  {
    name: "SAP",
    badge: "200 million users worldwide",
    description: "Global leader in enterprise application software, database, analytics, and intelligent technologies",
    features: ["Enterprise Resource Planning", "Cloud Solutions", "Digital Transformation"]
  },
  {
    name: "Engineering Group",
    badge: "$1.3B+ annual revenue",
    description: "Global software maker and system integrator with comprehensive technology solutions",
    features: ["12,000 professionals", "65 office locations", "Digital Industry Solutions"]
  },
  {
    name: "Persistent Systems",
    badge: "11,000 employees worldwide",
    description: "Global solutions company delivering digital business acceleration and enterprise modernization",
    features: ["Digital Acceleration", "Enterprise Modernization", "Global Presence"]
  },
  {
    name: "NMSDC",
    badge: "National Impact",
    description: "Leading corporate membership organization committed to supplier diversity solutions",
    features: ["Supplier Diversity", "Minority Business Support", "Corporate Partnerships"]
  },
  {
    name: "Diligent Global",
    badge: "500+ employees on 5 continents",
    description: "Global technology services provider helping organizations leverage technology investments",
    features: ["Technology Investment", "Global Services", "Business Competitiveness"]
  }
];

const stats = [
  { icon: Handshake, value: "6+", label: "Strategic Partners" },
  { icon: Users, value: "480K+", label: "Combined Customer Base" },
  { icon: Building2, value: "33K+", label: "Global Professionals" },
  { icon: Globe, value: "200+", label: "Countries Served" }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
      delay: idx * 0.1
    }
  })
};

export default function PartnersSection() {
  return (
    <section className="py-24 px-6 bg-[#0d111a] relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.5, rotate: 12 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-20 w-24 h-24 border-2 border-orange-500/30 rounded-lg pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.3, rotate: -12 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-32 right-32 w-16 h-16 border-2 border-orange-500/20 rounded-lg pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-medium uppercase tracking-wider mb-4"
          >
            Strategic Alliances
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by <span className="text-orange-500">Industry Giants</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our strategic partnerships with world-renowned technology leaders empower us to deliver
            cutting-edge solutions that transform businesses and drive unprecedented growth across industries.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {partners.slice(0, 3).map((partner, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 60px rgba(249, 115, 22, 0.15)",
                borderColor: "rgba(249, 115, 22, 0.3)"
              }}
              className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500"
            >
              {/* Logo Placeholder */}
              <div className="h-16 mb-4 flex items-center justify-center bg-zinc-800/50 rounded-xl">
                <span className="text-2xl font-bold text-white">{partner.name}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>

              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-medium rounded-full mb-4"
              >
                {partner.badge}
              </motion.span>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {partner.description}
              </p>

              <ul className="space-y-2">
                {partner.features.map((feature, fIdx) => (
                  <motion.li
                    key={fIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + fIdx * 0.1 }}
                    className="flex items-center gap-2 text-gray-500 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {partners.slice(3).map((partner, idx) => (
            <motion.div
              key={idx}
              custom={idx + 3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 60px rgba(249, 115, 22, 0.15)",
                borderColor: "rgba(249, 115, 22, 0.3)"
              }}
              className="group p-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500"
            >
              <div className="h-14 mb-4 flex items-center justify-center bg-zinc-800/50 rounded-xl">
                <span className="text-xl font-bold text-white">{partner.name}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>

              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-medium rounded-full mb-3"
              >
                {partner.badge}
              </motion.span>

              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                {partner.description}
              </p>

              <ul className="space-y-1.5">
                {partner.features.map((feature, fIdx) => (
                  <motion.li
                    key={fIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + fIdx * 0.1 }}
                    className="flex items-center gap-2 text-gray-500 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.5 + idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 text-orange-500 flex items-center justify-center">
                <stat.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
