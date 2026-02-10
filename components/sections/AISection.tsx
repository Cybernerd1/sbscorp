"use client";

import { motion } from "framer-motion";
import { Brain, Zap, TrendingUp, Bot } from "lucide-react";

const aiFeatures = [
    {
        icon: <Brain className="w-8 h-8" />,
        title: "Predictive Intelligence",
        description: "Forecast trends and make data-driven decisions with advanced ML models"
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: "Autonomous Systems",
        description: "Deploy self-learning systems that optimize operations automatically"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Cognitive Computing",
        description: "Process natural language and unstructured data at scale"
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Enhanced ROI",
        description: "Drive measurable business outcomes with AI-powered automation"
    }
];

export default function AISection() {
    return (
        <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-purple-500/10"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-12 rounded-full border border-cyan-500/10"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-24 rounded-full border border-orange-500/10"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">AI Services</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Transform with <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-orange-400">Artificial Intelligence</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Leverage AI to transform business operations, enhance customer experiences, and drive ROI through intelligent automation.
                    </p>
                </motion.div>

                {/* AI Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aiFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-6 rounded-2xl bg-linear-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-16 h-16 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-5"
                                >
                                    {feature.icon}
                                </motion.div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
