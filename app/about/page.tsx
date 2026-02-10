"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Users, Target, Award, TrendingUp, Eye, Heart,
    Zap, Shield, Globe, CheckCircle, ArrowRight,
    Briefcase, Code, Lightbulb, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============== HERO SECTION ==============
function AboutHero() {
    return (
        <section className="relative min-h-[70vh] pt-32 pb-20 overflow-hidden bg-black">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">SBS Corp</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        A Global Professional IT Services Company Delivering Excellence
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
                >
                    {[
                        { number: "20", label: "Years", suffix: "+" },
                        { number: "500", label: "Clients", suffix: "+" },
                        { number: "50", label: "Countries", suffix: "+" },
                        { number: "98", label: "Success Rate", suffix: "%" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
                        >
                            <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 mb-2">
                                {stat.number}{stat.suffix}
                            </p>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ============== OUR STORY SECTION ==============
function OurStorySection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-blue-400">Story</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        SBS Corp is a Professional IT Services Company
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-gray-300 leading-relaxed mb-6">
                            We are a global professional IT services company that delivers innovative solutions to help businesses transform and thrive in the digital age. With over two decades of experience, we have established ourselves as a trusted partner for organizations seeking to leverage technology for competitive advantage.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Our team of expert consultants, developers, and strategists work collaboratively with clients to understand their unique challenges and deliver tailored solutions that drive measurable results. We combine deep industry expertise with cutting-edge technology to create value at every stage of the digital transformation journey.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            From AI and machine learning to cloud computing and cybersecurity, we offer a comprehensive suite of services designed to help organizations navigate the complexities of modern technology and achieve their business objectives.
                        </p>
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
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Our Team"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 px-6 py-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30"
                            >
                                <p className="text-white font-semibold">20+ Years Excellence</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== VISION & MISSION SECTION ==============
function VisionMissionSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Our Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-linear-to-r r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/10 rounded-3xl"
                    >
                        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                            <Eye className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To be the world&apos;s most trusted technology partner, empowering organizations to achieve their full potential through innovative digital solutions and transformative consulting services.
                        </p>
                    </motion.div>

                    {/* Our Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 bg-linear-to-r r from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/10 rounded-3xl"
                    >
                        <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                            <Target className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To deliver exceptional value to our clients by combining deep industry expertise, cutting-edge technology, and a commitment to excellence in everything we do. We strive to build lasting partnerships based on trust, innovation, and measurable results.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ============== VALUES SECTION ==============
const values = [
    {
        icon: Heart,
        title: "Integrity",
        description: "We uphold the highest standards of integrity in all our actions, building trust through transparency and ethical practices.",
        color: "from-red-400 to-pink-500"
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "We embrace innovation and continuously seek new ways to solve complex challenges and deliver value to our clients.",
        color: "from-yellow-400 to-orange-500"
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "We believe in the power of collaboration, working together with clients and partners to achieve shared success.",
        color: "from-blue-400 to-cyan-500"
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We are committed to excellence in everything we do, striving for the highest quality in our services and solutions.",
        color: "from-purple-400 to-indigo-500"
    },
    {
        icon: Shield,
        title: "Accountability",
        description: "We take ownership of our commitments and hold ourselves accountable for delivering on our promises.",
        color: "from-green-400 to-emerald-500"
    },
    {
        icon: Globe,
        title: "Global Perspective",
        description: "We bring a global perspective to local challenges, leveraging our worldwide experience and expertise.",
        color: "from-cyan-400 to-blue-500"
    }
];

function ValuesSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-purple-400">Values</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        The principles that guide everything we do
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all"
                        >
                            <div className={`w-16 h-16 bg-linear-to-r r ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                <value.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== LEADERSHIP TEAM SECTION ==============
const leaders = [
    {
        name: "John Anderson",
        role: "Chief Executive Officer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        bio: "20+ years of experience in technology leadership and business transformation."
    },
    {
        name: "Sarah Chen",
        role: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        bio: "Expert in AI, cloud computing, and enterprise architecture with 15+ years experience."
    },
    {
        name: "Michael Rodriguez",
        role: "Chief Operating Officer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        bio: "Specializes in operational excellence and global service delivery management."
    }
];

function LeadershipSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Leadership <span className="text-cyan-400">Team</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Meet the visionaries driving our success
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                                <p className="text-blue-400 font-semibold mb-3">{leader.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{leader.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== WHAT WE DO SECTION ==============
const services = [
    {
        icon: Code,
        title: "Digital Transformation",
        description: "End-to-end digital transformation services to modernize your business operations."
    },
    {
        icon: Briefcase,
        title: "IT Consulting",
        description: "Strategic IT consulting to align technology with your business objectives."
    },
    {
        icon: Lightbulb,
        title: "Innovation Labs",
        description: "Collaborative innovation labs to explore emerging technologies and solutions."
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets."
    },
    {
        icon: Globe,
        title: "Cloud Services",
        description: "Cloud migration, management, and optimization services."
    },
    {
        icon: TrendingUp,
        title: "Data Analytics",
        description: "Advanced analytics and AI solutions to drive data-driven decisions."
    }
];

function WhatWeDoSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What We <span className="text-orange-400">Do</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Comprehensive IT services to drive your business forward
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-orange-400/50 transition-all"
                        >
                            <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                                <service.icon className="w-7 h-7 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== WHY CHOOSE US SECTION ==============
const reasons = [
    {
        title: "Proven Track Record",
        description: "20+ years of delivering successful projects across 50+ countries"
    },
    {
        title: "Expert Team",
        description: "Certified professionals with deep industry and technical expertise"
    },
    {
        title: "Innovation Focus",
        description: "Cutting-edge solutions leveraging the latest technologies"
    },
    {
        title: "Client-Centric",
        description: "Tailored solutions designed around your unique business needs"
    }
];

function WhyChooseUsSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r r from-blue-500/10 via-purple-500/5 to-pink-500/10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">SBS Corp?</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
                        >
                            <div className="shrink-0">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                                <p className="text-gray-400">{reason.description}</p>
                            </div>
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
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Warm Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r r from-orange-500/10 via-red-500/5 to-purple-500/10" />
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
                            Your Business?
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                        Let&apos;s discuss how we can help you achieve your business goals with innovative technology solutions.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                    >
                        Get In Touch
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

// ============== MAIN PAGE ==============
export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <Navbar />
            <AboutHero />
            <OurStorySection />
            <VisionMissionSection />
            <ValuesSection />
            <LeadershipSection />
            <WhatWeDoSection />
            <WhyChooseUsSection />
            <CTASection />
            <Footer />
        </main>
    );
}
