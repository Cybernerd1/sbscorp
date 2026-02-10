"use client";

import { motion } from "framer-motion";
import { Bot, ThumbsUp, TrendingUp, Clock } from "lucide-react";

const stats = [
    { icon: Bot, value: "50+", label: "Gen AI Projects Delivered" },
    { icon: ThumbsUp, value: "95%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "70%", label: "Process Efficiency Gains" },
    { icon: Clock, value: "24/7", label: "AI-Powered Operations" }
];

export default function GenAISection() {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-5xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block mb-6"
                >
                    <span className="px-5 py-2 bg-orange-500 rounded-full text-white text-sm font-medium">
                        Generative AI for Next-Generation IT
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                >
                    Transformative Gen AI Solutions
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-3xl md:text-4xl font-bold text-orange-500 mb-8"
                >
                    Driving Business Success
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    At SBS Corp, our Generative AI solutions are engineered to align with your business objectives,
                    delivering intelligent systems that optimize processes, enhance decision-making, and drive
                    sustainable growth. Our AI-first approach empowers organizations to unlock new opportunities
                    and achieve measurable ROI.
                </motion.p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
