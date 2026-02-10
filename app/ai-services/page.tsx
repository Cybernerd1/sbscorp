"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    DollarSign, Lightbulb, Users, Settings, Smile, Shield,
    Brain, Cpu, Layers, Zap, Bot, LineChart, Database, Activity,
    Check, ArrowRight, Calendar, Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============== HERO SECTION ==============
function AIServicesHero() {
    // Generate stable random positions for stars
    const stars = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        top: `${(i * 17 + 23) % 100}%`,
        left: `${(i * 31 + 11) % 100}%`,
        size: i % 3 === 0 ? 2 : 1,
        delay: (i * 0.1) % 3,
        duration: 2 + (i % 3),
    }));

    // Floating particles positions
    const particles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        top: `${(i * 19 + 7) % 100}%`,
        left: `${(i * 23 + 13) % 100}%`,
        delay: (i * 0.2) % 4,
    }));

    return (
        <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-linear-to-r  from-[#0a0a1a] via-[#0d0d20] to-black">
            {/* Starfield Background */}
            <div className="absolute inset-0 overflow-hidden">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                        }}
                    />
                ))}
            </div>

            {/* Cosmic Glow Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.08, 0.15, 0.08]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Glowing Horizon Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-60" />
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-blue-500/20 via-blue-500/5 to-transparent pointer-events-none"
            />

            {/* Horizon Glow Reflection */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-48 bg-linear-to-t from-blue-500/10 to-transparent blur-3xl pointer-events-none" />

            {/* Floating Glowing Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                    style={{
                        top: particle.top,
                        left: particle.left,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 4 + (particle.id % 3),
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}

            {/* Floating 3D Objects/Crystals */}
            <motion.div
                animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[15%] w-8 h-8 opacity-40"
            >
                <div className="w-full h-full bg-linear-to-r r from-blue-400 to-purple-500 rotate-45 rounded-sm shadow-lg shadow-blue-500/30" />
            </motion.div>
            <motion.div
                animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[35%] left-[10%] w-6 h-6 opacity-30"
            >
                <div className="w-full h-full bg-linear-to-r r from-cyan-400 to-blue-500 rotate-45 rounded-sm shadow-lg shadow-cyan-500/30" />
            </motion.div>
            <motion.div
                animate={{ y: [-10, 25, -10], rotate: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute bottom-[30%] right-[8%] w-5 h-5 opacity-35"
            >
                <div className="w-full h-full bg-linear-to-r r from-purple-400 to-pink-500 rotate-45 rounded-sm shadow-lg shadow-purple-500/30" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
                        >
                            AI Services
                            <br />
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-500 to-red-500"
                            >
                                Intelligent Solutions.
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
                        >
                            Leverage cutting-edge artificial intelligence to transform your business operations, enhance customer experiences, and drive measurable ROI through our comprehensive AI services and platforms.
                        </motion.p>

                        <motion.a
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(249, 115, 22, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            href="#ai-values"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                        >
                            Explore AI Solutions
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        {/* Floating Stats - Holographic Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-12 flex gap-4"
                        >
                            <motion.div
                                whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(59, 130, 246, 0.3)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="px-6 py-4 bg-linear-to-r r from-blue-900/40 to-blue-950/60 backdrop-blur-md rounded-2xl border border-blue-500/30 relative overflow-hidden"
                            >
                                {/* Holographic shine effect */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full animate-shimmer" />
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-xs text-blue-300 uppercase tracking-wider">AI Projects</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(59, 130, 246, 0.3)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="px-6 py-4 bg-linear-to-r r from-blue-900/40 to-blue-950/60 backdrop-blur-md rounded-2xl border border-blue-500/30 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full animate-shimmer" />
                                <div className="text-3xl font-bold text-orange-500">95%</div>
                                <div className="text-xs text-blue-300 uppercase tracking-wider">Client Satisfaction</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right - AI Visual with Holographic Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[400px] h-[400px]"
                        >
                            {/* Outer Glow Ring */}
                            <motion.div
                                animate={{
                                    opacity: [0.2, 0.4, 0.2],
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                                }}
                                className="absolute -inset-8 rounded-full border-2 border-blue-500/30"
                            />

                            {/* Second Ring */}
                            <motion.div
                                animate={{ rotate: [360, 0] }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 rounded-full border border-purple-500/20"
                            />

                            {/* Main Glow Effect */}
                            <motion.div
                                animate={{
                                    opacity: [0.4, 0.7, 0.4],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-linear-to-r r from-blue-500/40 via-purple-500/30 to-cyan-500/40 rounded-full blur-3xl"
                            />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-500/40 shadow-2xl shadow-blue-500/30">
                                <Image
                                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                                    alt="AI Technology"
                                    fill
                                    className="object-cover"
                                />
                                {/* Holographic Overlay */}
                                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/30 via-transparent to-purple-500/30 mix-blend-overlay" />
                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-linear-to-r  from-cyan-400/20 via-transparent to-blue-500/20"
                                />
                            </div>

                            {/* Floating AI Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-r r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/40"
                            >
                                <Brain className="w-8 h-8 text-white" />
                            </motion.div>

                            {/* Floating Holographic Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.8 },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -left-20 top-1/4 px-4 py-3 bg-linear-to-r r from-blue-900/60 to-blue-950/80 backdrop-blur-md rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20"
                            >
                                <div className="text-xs text-blue-300 uppercase tracking-wider mb-1">AI-Powered</div>
                                <div className="text-sm text-white font-medium">Automation</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 1 },
                                    y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
                                }}
                                className="absolute -right-16 bottom-1/3 px-4 py-3 bg-linear-to-r r from-purple-900/60 to-purple-950/80 backdrop-blur-md rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/20"
                            >
                                <div className="text-xs text-purple-300 uppercase tracking-wider mb-1">Smart</div>
                                <div className="text-sm text-white font-medium">Analytics</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== AI VALUES SECTION ==============
const valuesData = [
    {
        icon: <DollarSign className="w-6 h-6" />,
        iconColor: "from-green-500 to-emerald-500",
        title: "Strategic Value Creation",
        description: "Transform AI investments into sustainable business value through strategic implementation and optimization",
        metric: "5.2x ROI",
        metricColor: "text-green-500"
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        iconColor: "from-blue-500 to-cyan-500",
        title: "Innovation Acceleration",
        description: "Fast-track breakthrough innovations with AI-powered ideation, testing, and market validation",
        metric: "300% Faster",
        metricColor: "text-blue-500"
    },
    {
        icon: <Users className="w-6 h-6" />,
        iconColor: "from-orange-500 to-red-500",
        title: "Workforce Amplification",
        description: "Augment human capabilities with intelligent systems that enhance decision-making and creativity",
        metric: "65% Efficiency",
        metricColor: "text-orange-500"
    },
    {
        icon: <Settings className="w-6 h-6" />,
        iconColor: "from-pink-500 to-rose-500",
        title: "Operational Excellence",
        description: "Achieve operational perfection through self-optimizing processes and predictive maintenance",
        metric: "45% Cost Save",
        metricColor: "text-orange-500"
    },
    {
        icon: <Smile className="w-6 h-6" />,
        iconColor: "from-amber-500 to-yellow-500",
        title: "Experience Revolution",
        description: "Create memorable experiences through AI that understands, anticipates, and exceeds expectations",
        metric: "92% NPS Score",
        metricColor: "text-blue-500"
    },
    {
        icon: <Shield className="w-6 h-6" />,
        iconColor: "from-teal-500 to-cyan-500",
        title: "Ethical AI Leadership",
        description: "Lead with responsible AI practices that build trust, ensure fairness, and maintain transparency",
        metric: "Zero Bias",
        metricColor: "text-green-500"
    }
];

function AIValuesSection() {
    return (
        <section id="ai-values" className="min-h-screen py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Background Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        AI at the <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">Core of Our Values</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        For over a decade, SBS Corp has pioneered transformative AI solutions that reshape industries and redefine possibilities. Our human-centered approach to AI development ensures technology serves humanity while driving unprecedented business results.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {valuesData.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, borderColor: "rgba(249, 115, 22, 0.3)" }}
                            className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 bg-linear-to-r r ${value.iconColor} rounded-xl flex items-center justify-center text-white mb-5`}>
                                {value.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{value.description}</p>

                            <div className={`text-2xl font-bold ${value.metricColor}`}>
                                {value.metric}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== AI OFFERINGS SECTION ==============
const offeringsData = [
    {
        icon: <Brain className="w-6 h-6" />,
        title: "SBS CognitiveCore™",
        description: "Revolutionary AI platform that creates self-learning business ecosystems with adaptive intelligence and contextual decision-making",
        features: [
            "Adaptive Learning Architecture",
            "Contextual Business Intelligence",
            "Self-Optimizing Workflows",
            "Predictive Business Modeling"
        ]
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "SBS IntelliFlow™",
        description: "Advanced process intelligence platform that orchestrates complex business operations through autonomous decision engines",
        features: [
            "Autonomous Process Orchestration",
            "Dynamic Resource Management",
            "Intelligent Risk Assessment",
            "Real-time Performance Optimization"
        ]
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "SBS Innovation Studios",
        description: "Collaborative AI development environments where breakthrough solutions are conceived, prototyped, and scaled",
        features: [
            "Rapid Innovation Prototyping",
            "Cross-Industry Solution Design"
        ]
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "SBS EdgeIntelligence™",
        description: "Next-generation edge computing solutions that bring AI processing power directly to your operational frontlines",
        features: [
            "Edge-Native AI Processing",
            "Real-time Decision Systems"
        ]
    }
];

function AIOfferingsSection() {
    return (
        <section className="min-h-screen py-24 px-6 bg-black relative overflow-hidden">
            {/* Rotating Orbital Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[600px] h-[600px] rounded-full border border-white/5"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[450px] h-[450px] rounded-full border border-orange-500/10"
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[300px] h-[300px] rounded-full border border-purple-500/10"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">AI Offerings</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Revolutionary AI platforms engineered to create intelligent business ecosystems, accelerate innovation cycles, and establish sustainable competitive advantages through breakthrough technology.
                    </p>
                </motion.div>

                {/* Offerings Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {offeringsData.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, borderColor: "rgba(249, 115, 22, 0.3)" }}
                            className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-linear-to-r r from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center mb-6">
                                {offering.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400 mb-3">{offering.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{offering.description}</p>

                            <ul className="space-y-2">
                                {offering.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== AI CAPABILITIES SECTION ==============
const capabilitiesData = [
    {
        icon: <Brain className="w-6 h-6" />,
        iconColor: "from-blue-500 to-cyan-500",
        title: "Cognitive Computing",
        features: [
            "Neural Network Architecture",
            "Contextual Language Understanding",
            "Creative Content Synthesis",
            "Adaptive Conversation Systems",
            "Intelligent Document Intelligence"
        ]
    },
    {
        icon: <LineChart className="w-6 h-6" />,
        iconColor: "from-pink-500 to-rose-500",
        title: "Predictive Intelligence",
        features: [
            "Future State Modeling",
            "Behavioral Pattern Analysis",
            "Visual Intelligence Systems",
            "Personalization Engines",
            "Risk Prediction Algorithms"
        ]
    },
    {
        icon: <Bot className="w-6 h-6" />,
        iconColor: "from-orange-500 to-red-500",
        title: "Autonomous Systems",
        features: [
            "Self-Managing Processes",
            "Dynamic Workflow Adaptation",
            "Intelligent Decision Trees",
            "Smart Content Processing",
            "Process Intelligence Mining"
        ]
    },
    {
        icon: <Activity className="w-6 h-6" />,
        iconColor: "from-green-500 to-emerald-500",
        title: "Intelligence Platforms",
        features: [
            "Stream Processing Architecture",
            "Strategic Business Intelligence",
            "Interactive Data Storytelling",
            "Continuous Performance Intelligence",
            "Insight Discovery Engines"
        ]
    }
];

function AICapabilitiesSection() {
    return (
        <section className="min-h-screen py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Neural Lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-linear-to-r from-transparent via-orange-500 to-transparent"
                        style={{
                            top: `${15 + i * 12}%`,
                            left: 0,
                            right: 0,
                        }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            scaleX: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Advanced <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">AI Capabilities</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Explore our comprehensive range of AI technologies and capabilities designed to address diverse business needs.
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilitiesData.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, borderColor: "rgba(249, 115, 22, 0.3)" }}
                            className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                        >
                            <div className={`w-12 h-12 bg-linear-to-r r ${capability.iconColor} text-white rounded-xl flex items-center justify-center mb-5`}>
                                {capability.icon}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-4">{capability.title}</h3>

                            <ul className="space-y-2">
                                {capability.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-400">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0 mt-1.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== SUCCESS STORIES SECTION ==============
const successStoriesData = [
    {
        category: "Manufacturing",
        categoryColor: "text-orange-500",
        title: "Global Manufacturing Intelligence Revolution",
        description: "SBS CognitiveCore™ for predictive maintenance and quality optimization",
        metrics: [
            "$15M operational savings",
            "45% reduction in downtime",
            "78% prediction accuracy",
            "60% faster decision-making"
        ]
    },
    {
        category: "Financial Services",
        categoryColor: "text-blue-500",
        title: "Financial Services Risk Intelligence",
        description: "SBS IntelliFlow™ for intelligent risk management and compliance automation",
        metrics: [
            "99.7% fraud detection rate",
            "85% faster compliance reporting",
            "52% risk assessment efficiency",
            "Zero regulatory violations"
        ]
    },
    {
        category: "Healthcare",
        categoryColor: "text-red-500",
        title: "Healthcare Patient Experience Innovation",
        description: "SBS EdgeIntelligence™ for real-time patient monitoring and care optimization",
        metrics: [
            "300% improvement in patient outcomes",
            "90% reduction in wait times",
            "95% patient satisfaction",
            "50% cost per patient reduction"
        ]
    }
];

function SuccessStoriesSection() {
    return (
        <section className="min-h-screen py-24 px-6 bg-black relative overflow-hidden">
            {/* Floating Data Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Proven <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">Success Stories</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Real-world AI implementations delivering measurable business outcomes across industries.
                    </p>
                </motion.div>

                {/* Stories Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {successStoriesData.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, borderColor: "rgba(249, 115, 22, 0.3)" }}
                            className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                        >
                            <span className={`inline-block text-xs font-semibold ${story.categoryColor} uppercase tracking-wider mb-4`}>
                                {story.category}
                            </span>

                            <h3 className="text-xl font-bold text-white mb-3">{story.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{story.description}</p>

                            <ul className="space-y-3">
                                {story.metrics.map((metric, mIndex) => (
                                    <li key={mIndex} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-green-500" />
                                        </div>
                                        {metric}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== CTA SECTION ==============
function CTASection() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center py-24 px-6 bg-black relative overflow-hidden">
            {/* Warm Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r r from-orange-500/10 via-red-500/5 to-purple-500/10" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black to-transparent" />

            {/* Animated Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to Transform Your
                        <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">
                            Business with AI?
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                        Let&apos;s discuss how our AI solutions can drive measurable ROI and competitive advantage for your organization.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                        >
                            <Calendar className="w-5 h-5" />
                            Schedule AI Consultation
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                        >
                            Contact Sales
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ============== MAIN PAGE ==============
export default function AIServicesPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <Navbar />
            <AIServicesHero />
            <AIValuesSection />
            <AIOfferingsSection />
            <AICapabilitiesSection />
            <SuccessStoriesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
