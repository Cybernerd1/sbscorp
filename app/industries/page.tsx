"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Car, Factory, ShoppingCart, Cpu, Heart, Plane,
    Droplet, Store, Activity, Building, Radio,
    CheckCircle, ArrowRight, Briefcase, Shield, Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============== HERO SECTION ==============
function IndustriesHero() {
    // Generate stable random positions for stars
    const stars = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        top: `${(i * 17 + 23) % 100}%`,
        left: `${(i * 31 + 11) % 100}%`,
        size: i % 3 === 0 ? 2 : 1,
        delay: (i * 0.1) % 3,
        duration: 2 + (i % 3),
    }));

    // Industry icons floating around
    const industryIcons = [
        { Icon: Car, color: "text-blue-400", position: { top: "20%", left: "10%" }, delay: 0 },
        { Icon: Factory, color: "text-purple-400", position: { top: "60%", left: "15%" }, delay: 0.5 },
        { Icon: Heart, color: "text-cyan-400", position: { top: "30%", right: "10%" }, delay: 1 },
        { Icon: Cpu, color: "text-orange-400", position: { top: "70%", right: "15%" }, delay: 1.5 },
        { Icon: Plane, color: "text-indigo-400", position: { top: "15%", right: "25%" }, delay: 2 },
        { Icon: Building, color: "text-emerald-400", position: { top: "75%", left: "25%" }, delay: 2.5 },
    ];

    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

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

            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] pointer-events-none"
            />

            {/* Floating Industry Icons */}
            {industryIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${item.color} opacity-10`}
                    style={item.position}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut"
                    }}
                >
                    <item.Icon className="w-24 h-24" strokeWidth={1} />
                </motion.div>
            ))}

            {/* Holographic Industry Cards */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-1/3 left-8 hidden lg:block"
            >
                <div className="relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Car className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">Automotive</p>
                            <p className="text-gray-400 text-xs">Electric Vehicles</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute top-1/2 right-8 hidden lg:block"
            >
                <div className="relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                            <Heart className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">Healthcare</p>
                            <p className="text-gray-400 text-xs">Digital Health</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="absolute bottom-32 left-1/4 hidden lg:block"
            >
                <div className="relative p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">High Tech</p>
                            <p className="text-gray-400 text-xs">Innovation</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    Industries <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">We Serve</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12"
                >
                    We are addressing our customers&apos; key business challenges by offering our consulting expertise paired with the best Software Solutions on the market
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                    >
                        <Briefcase className="w-5 h-5" />
                        13 Industry Verticals
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all"
                    >
                        Explore Solutions
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>

                {/* Industry Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
                >
                    {[
                        { number: "500+", label: "Global Clients" },
                        { number: "13", label: "Industries" },
                        { number: "98%", label: "Success Rate" },
                        { number: "24/7", label: "Support" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
                        >
                            <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ============== AUTOMOTIVE SECTION ==============
const automotiveFeatures = [
    {
        title: "Quality, Regulations, Cost",
        description: "Accelerate profitable new opportunities, while ensuring quality, fulfilling global/local requirements, and minimizing expenses."
    },
    {
        title: "Mass Production to Mass Customization",
        description: "Improve visibility, efficiency, and control of manufacturing production and operations, within and across global/local plants."
    },
    {
        title: "New Customer Experience",
        description: "Dream, explore, validate then seamlessly produce bold new mobility options for demanding global consumers."
    }
];

function AutomotiveSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1617886322207-d81e61a1e8c8?w=800&q=80"
                                alt="Automotive Technology"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30"
                            >
                                <Car className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Automotive
                        </h2>
                        <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                            Electric, Connected & Autonomous Vehicles
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Next-generation vehicle success requires advanced creative design, shared intelligence, systems engineering and multi-domain collaboration.
                        </p>

                        <div className="space-y-6">
                            {automotiveFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== MANUFACTURING SECTION ==============
const manufacturingFeatures = [
    {
        title: "Production of One",
        description: "Adopt a smart and flexible business environment to develop and deliver personalized products more rapidly than ever before."
    },
    {
        title: "Intelligent Connected Systems",
        description: "Connect systems, people and data to streamline multiple disciplines, drive innovation and generate more business."
    },
    {
        title: "New Selling Experience",
        description: "Move beyond simply selling products. Provide customized experiences that raise your customers' level of satisfaction and deepen brand loyalty."
    },
    {
        title: "Product as a Service",
        description: "Keep operations running smoothly and expand after-sales revenue potential by including servicing needs at the beginning of the product development process."
    },
    {
        title: "Data Economy",
        description: "Invest in systems and skill sets that allow you to capitalize on big data and use advanced analytics to improve business profitability."
    }
];

function ManufacturingSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Manufacturing
                        </h2>
                        <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                            Smart Manufacturing Solutions
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Transform your manufacturing operations with intelligent systems, data-driven insights, and flexible production capabilities.
                        </p>

                        <div className="space-y-4">
                            {manufacturingFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-3"
                                >
                                    <div className="shrink-0 w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                                alt="Manufacturing"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 right-6 w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30"
                            >
                                <Factory className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== CONSUMER PACKAGED GOODS & RETAIL SECTION ==============
const cpgRetailFeatures = [
    {
        title: "The New Consumer",
        description: "Consumer behavior and preferences are shifting faster than ever and companies must react more quickly to deliver meaningful innovation on shorter timelines."
    },
    {
        title: "Margin Pressure",
        description: "Investor pressure is mounting for companies to drive sustainable growth and increase profits with the same or fewer resources."
    },
    {
        title: "Regulatory Compliance",
        description: "Expand and modify portfolios to support health and wellness trends and manage regulatory compliance efficiently."
    },
    {
        title: "Production Complexity",
        description: "Demand for more personalized products is leading to an increase in SKUs. Managing production complexity to provide the right product at the right time is critical."
    },
    {
        title: "The Last Mile",
        description: "Consumers are dictating how and when they receive products forcing companies to use agile new models for product delivery."
    }
];

function CPGRetailSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                                alt="Consumer Packaged Goods & Retail"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30"
                            >
                                <ShoppingCart className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Consumer Packaged Goods & Retail
                        </h2>
                        <h3 className="text-2xl font-semibold text-green-400 mb-6">
                            Next-Generation Consumer Experiences
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Navigate rapidly changing consumer preferences and deliver meaningful innovation on shorter timelines.
                        </p>

                        <div className="space-y-6">
                            {cpgRetailFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== HIGH TECH SECTION ==============
const highTechFeatures = [
    {
        title: "Be Agile and Responsive",
        description: "Foster your organization's speed and efficiency by perfectly orchestrating the broad spectrum of skills and resources across engineering and business disciplines."
    },
    {
        title: "Make Product Experiences",
        description: "Place the customer in the center of your innovation for delivering optimal experiences that are connected, contextual and continuously improved."
    },
    {
        title: "Master Margin Pressures",
        description: "Create sustainable business with first-of-a-kind innovation, delivered by a flexible and efficient, global value and production chain."
    },
    {
        title: "Reinvent the Marketplace",
        description: "Whether threat or opportunity - disruptive change can happen any time."
    },
    {
        title: "Reduce Business Complexity",
        description: "Turning complexity to become a competitive advantage, with data-driven and model-based collaboration on a single platform."
    }
];

function HighTechSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            High Tech
                        </h2>
                        <h3 className="text-2xl font-semibold text-orange-400 mb-6">
                            Innovation at Digital Speed
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Foster organizational speed and efficiency by orchestrating skills and resources across engineering and business disciplines.
                        </p>

                        <div className="space-y-4">
                            {highTechFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-3"
                                >
                                    <div className="shrink-0 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                                alt="High Tech"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 right-6 w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30"
                            >
                                <Cpu className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== LIFE SCIENCES SECTION ==============
const lifeSciencesFeatures = [
    {
        title: "Personalized Health",
        description: "Develop a holistic approach to care that encompasses genomics, behavior and the environment, leveraging technology advancements."
    },
    {
        title: "Total Quality",
        description: "Drive your global regulatory strategy while ensuring unmatched quality, safety and efficacy."
    },
    {
        title: "Knowledge Capitalization",
        description: "Connect systems, people and data in a virtual ecosystem to drive innovation and generate competitive advantage."
    },
    {
        title: "Development and Manufacturing Excellence",
        description: "Transform Development and Manufacturing Operations to meet the market demands."
    },
    {
        title: "Reinventing the Value Chain",
        description: "Reinvent the value chain and partnerships to accelerate your business."
    }
];

function LifeSciencesSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
                                alt="Life Sciences"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30"
                            >
                                <Heart className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Life Sciences
                        </h2>
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                            Transforming Healthcare Delivery
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Develop holistic approaches to care that leverage technology advancements, genomics, behavior and environmental factors.
                        </p>

                        <div className="space-y-6">
                            {lifeSciencesFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== AEROSPACE SECTION ==============
const aerospaceFeatures = [
    {
        title: "Disruptive Innovation",
        description: "Accelerate from concept to delivery from years to months."
    },
    {
        title: "Design to Cost",
        description: "Accelerate program maturity from concept to manufacturing while driving 40-60% of cost out."
    },
    {
        title: "Agility of Rate",
        description: "Manage the first time every time from initial delivery, to ramp up and adjustments for ongoing production."
    },
    {
        title: "Supply Chain Reinvention",
        description: "Drive integration to improve visibility, on-time delivery and first-time quality."
    }
];

function AerospaceSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Aerospace
                        </h2>
                        <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
                            Next-Generation Aviation & Space
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Accelerate from concept to delivery, driving innovation in aerospace design, manufacturing, and operations.
                        </p>

                        <div className="space-y-4">
                            {aerospaceFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-3"
                                >
                                    <div className="shrink-0 w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80"
                                alt="Aerospace"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 right-6 w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30"
                            >
                                <Plane className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== OIL & GAS SECTION ==============
const oilGasFeatures = [
    {
        title: "Innovation & Profitability",
        description: "Build competitive advantage to add value, counter growing complexity, and boost revenue and margin."
    },
    {
        title: "Health, Safety, Environment & Social License",
        description: "Facilitate compliance by efficiently managing regulations, contracts, and requirements."
    },
    {
        title: "Managing Complexity & Risk",
        description: "Improve construction and operations agility and deliver on time and on budget."
    },
    {
        title: "Market Uncertainty",
        description: "Offset price volatility with business improvement that brings agility to adapt to changing market conditions."
    },
    {
        title: "Workforce Dynamics",
        description: "Create an engaging and productive work environment."
    }
];

function OilGasSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80"
                                alt="Oil & Gas"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30"
                            >
                                <Droplet className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Oil & Gas
                        </h2>
                        <h3 className="text-2xl font-semibold text-amber-400 mb-6">
                            Energy Transformation
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Build competitive advantage while managing complexity, risk, and evolving environmental requirements.
                        </p>

                        <div className="space-y-6">
                            {oilGasFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== RETAIL SECTION ==============
const retailFeatures = [
    {
        title: "Sustainable, Secure and Resilient Future",
        description: "For cities to remain vibrant entities, they must be continuously reinvented and revitalized, while having the ability to replenish resources."
    },
    {
        title: "Respect the Art",
        description: "Architecture is a creative pursuit. To build something beautiful and to make a positive impact on the built environment are the rewards sought by those called to the profession."
    },
    {
        title: "Modernize Craftsmanship",
        description: "Modern tools and digitized knowledge are revolutionizing the art and science of buildings and infrastructure by allowing architecture, engineering and construction professionals to gain precision and control."
    },
    {
        title: "Maximize Project Outcomes",
        description: "Construction: Cities & Territories are undergoing drastic transformations to meet skyrocketing demand, to design more effectively and efficiently, and to deliver at unprecedented speeds."
    },
    {
        title: "Create Collectively",
        description: "Stakeholders of construction projects, cities, and territories need access to real-time information and way to seamlessly exchange knowledge. Digital continuity increases the possibilities for shared authorship in project delivery and encourages collaboration across."
    }
];

function RetailSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Retail
                        </h2>
                        <h3 className="text-2xl font-semibold text-pink-400 mb-6">
                            Sustainable, Secure and Resilient Future
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Create sustainable, secure and resilient retail experiences that adapt to changing consumer demands.
                        </p>

                        <div className="space-y-4">
                            {retailFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-3"
                                >
                                    <div className="shrink-0 w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-pink-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                                alt="Retail"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 right-6 w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30"
                            >
                                <Store className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== HEALTHCARE SECTION ==============
const healthcareFeatures = [
    {
        title: "Digital Transformation",
        description: "Leverage digital technologies to improve patient care, operational efficiency, and clinical outcomes."
    },
    {
        title: "Data-Driven Care",
        description: "Utilize healthcare analytics and AI to enable precision medicine and personalized treatment plans."
    },
    {
        title: "Regulatory Compliance",
        description: "Navigate complex healthcare regulations while maintaining the highest standards of patient safety and data security."
    }
];

function HealthcareSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                                alt="Healthcare"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30"
                            >
                                <Activity className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Healthcare
                        </h2>
                        <h3 className="text-2xl font-semibold text-red-400 mb-6">
                            Digital Health Innovation
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Transform healthcare delivery with digital solutions, telemedicine, and data-driven insights for better patient outcomes.
                        </p>

                        <div className="space-y-6">
                            {healthcareFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== FINANCIAL SERVICES SECTION ==============
const financialFeatures = [
    {
        title: "Digital Banking",
        description: "Transform traditional banking services with innovative digital solutions and enhanced customer experiences."
    },
    {
        title: "Regulatory Technology",
        description: "Implement RegTech solutions to manage compliance efficiently while reducing operational risk."
    },
    {
        title: "Blockchain Innovation",
        description: "Leverage distributed ledger technology to create new financial products and improve transaction transparency."
    }
];

function FinancialServicesSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Financial Services
                        </h2>
                        <h3 className="text-2xl font-semibold text-emerald-400 mb-6">
                            Fintech Innovation
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Drive financial innovation with blockchain solutions, digital banking, and advanced analytics for competitive advantage.
                        </p>

                        <div className="space-y-4">
                            {financialFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-3"
                                >
                                    <div className="shrink-0 w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                                alt="Financial Services"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 right-6 w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30"
                            >
                                <Building className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== TELECOMMUNICATIONS SECTION ==============
const telecomFeatures = [
    {
        title: "5G Infrastructure",
        description: "Deploy and optimize 5G networks to enable ultra-low latency applications and massive IoT connectivity."
    },
    {
        title: "Network Virtualization",
        description: "Implement software-defined networking and network function virtualization for flexible, scalable operations."
    },
    {
        title: "Edge Computing",
        description: "Develop edge computing capabilities to support real-time applications and reduce latency."
    }
];

function TelecommunicationsSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                                alt="Telecommunications"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/30"
                            >
                                <Radio className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Telecommunications
                        </h2>
                        <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                            5G & Connectivity Solutions
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Enable next-generation connectivity with 5G networks, IoT solutions, and advanced communication platforms.
                        </p>

                        <div className="space-y-6">
                            {telecomFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-sky-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== CTA SECTION ==============
function CTASection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Warm Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 via-red-500/5 to-purple-500/10" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black to-transparent" />

            {/* Animated Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to Transform
                        <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">
                            Your Industry?
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                        Let&apos;s discuss how our industry-specific solutions can drive innovation and growth for your business.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                    >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

// ============== GOVERNMENT & PUBLIC SECTOR SECTION ==============
const governmentFeatures = [
    {
        title: "Digital Services",
        description: "Modernize government services with citizen-centric digital platforms that improve accessibility and efficiency."
    },
    {
        title: "Smart Cities",
        description: "Implement IoT and data analytics to create intelligent urban infrastructure and improve quality of life."
    },
    {
        title: "Cybersecurity",
        description: "Protect critical infrastructure and citizen data with advanced cybersecurity frameworks and practices."
    }
];

function GovernmentPublicSectorSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Government & Public Sector
                        </h2>
                        <h3 className="text-2xl font-semibold text-slate-400 mb-6">
                            Digital Government Services
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Transform public services with digital solutions, smart city initiatives, and citizen-centric platforms.
                        </p>

                        <div className="space-y-4">
                            {governmentFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-3"
                                >
                                    <div className="shrink-0 w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                                alt="Government & Public Sector"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 right-6 w-14 h-14 bg-slate-500 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-500/30"
                            >
                                <Shield className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== SERVICES SECTION ==============
const servicesFeatures = [
    {
        title: "Increasing Regulatory Oversight",
        description: "How can you transform regulatory scrutiny into a competitive advantage?"
    },
    {
        title: "Changing Customer Demands",
        description: "How can you leverage technology to address the demands of an increasingly elegant customer base?"
    },
    {
        title: "Emerging Disruptive Technologies",
        description: "How are innovative digital technologies providing you with new opportunities for value creation?"
    },
    {
        title: "Increased Environmental Regulations",
        description: "Optimize logistics across the supply chain to strengthen sustainability."
    },
    {
        title: "Competitive Dynamics Landscape",
        description: "In a fiercely competitive and fragmented market, how can you gain competitive advantage?"
    }
];

function ServicesSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                                alt="Services"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Icon Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30"
                            >
                                <Headphones className="w-7 h-7 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Services
                        </h2>
                        <h3 className="text-2xl font-semibold text-teal-400 mb-6">
                            Transforming Service Excellence
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Address key business challenges with innovative service solutions that drive competitive advantage.
                        </p>

                        <div className="space-y-6">
                            {servicesFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== MAIN PAGE ==============
export default function IndustriesPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <Navbar />
            <IndustriesHero />
            <AutomotiveSection />
            <ManufacturingSection />
            <CPGRetailSection />
            <HighTechSection />
            <LifeSciencesSection />
            <AerospaceSection />
            <OilGasSection />
            <RetailSection />
            <HealthcareSection />
            <FinancialServicesSection />
            <TelecommunicationsSection />
            <GovernmentPublicSectorSection />
            <ServicesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
