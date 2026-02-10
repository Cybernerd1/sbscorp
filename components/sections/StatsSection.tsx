"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "140+", label: "Enterprise Clients" },
    { value: "24/7", label: "Support Available" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" }
];

export default function StatsSection() {
    return (
        <section className="py-16 px-6 bg-slate-900/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400 mb-2"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
