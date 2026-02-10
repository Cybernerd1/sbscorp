"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Zap, BarChart3, ShieldCheck, Code2 } from "lucide-react";

const services = [
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "AI & Machine Learning",
        desc: "Deploy intelligent systems that learn and adapt to your business needs, automating complex workflows.",
        color: "from-pink-500 to-rose-500"
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Enterprise Integration",
        desc: "Seamlessly connect disparate systems and data sources to create a unified operational ecosystem.",
        color: "from-cyan-500 to-blue-500"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Cloud Transformation",
        desc: "Accelerate your journey to the cloud with scalable, secure, and cost-effective infrastructure solutions.",
        color: "from-amber-500 to-orange-500"
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        title: "Custom Development",
        desc: "Build tailor-made applications that solve unique business challenges with robust, modern tech stacks.",
        color: "from-emerald-500 to-green-500"
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Business Analytics",
        desc: "Turn raw data into actionable insights with advanced visualization and predictive analytics tools.",
        color: "from-purple-500 to-indigo-500"
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Security & Compliance",
        desc: "Protect your digital assets with enterprise-grade security protocols and compliance frameworks.",
        color: "from-red-500 to-pink-600"
    }
];

export default function Features() {
    return (
        <section id="services" className="relative py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Our Core <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">Capabilities</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We deliver comprehensive technology solutions designed to propel your business forward in the digital age.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${service.color} p-0.5 mb-6`}>
                                <div className="w-full h-full bg-black/90 rounded-[7px] flex items-center justify-center text-white">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
