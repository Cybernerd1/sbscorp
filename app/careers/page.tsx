"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Briefcase, MapPin, Clock, DollarSign, Users,
    TrendingUp, Heart, Zap, Target, Award,
    CheckCircle, ArrowRight, Code, Lightbulb,
    Globe, Shield, Star, Rocket
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

// ============== HERO SECTION ==============
function CareersHero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black">
            {/* Animated Gradient Orbs */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" 
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" 
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Shape Your <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">Future</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                        Join SBS Corp and help us shape the future of technology. We&apos;re looking for passionate individuals who want to make a difference.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#open-positions"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                        >
                            View Open Positions
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#why-join"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all"
                        >
                            Learn More
                        </motion.a>
                    </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { icon: Users, label: "Global Team", value: "500+" },
                        { icon: Globe, label: "Countries", value: "50+" },
                        { icon: Award, label: "Awards Won", value: "25+" },
                        { icon: TrendingUp, label: "Growth Rate", value: "40%" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                        >
                            <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                            <p className="text-gray-300 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ============== WHY CHOOSE SBS SECTION ==============
const benefits = [
    {
        icon: Lightbulb,
        title: "Innovation & Impact",
        description: "Work on cutting-edge projects that make a real difference in the world.",
        color: "from-yellow-400 to-orange-500"
    },
    {
        icon: Users,
        title: "Collaborative Culture",
        description: "Join a diverse team of talented professionals who support each other.",
        color: "from-blue-400 to-cyan-500"
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Continuous learning opportunities and clear career advancement paths.",
        color: "from-green-400 to-emerald-500"
    },
    {
        icon: Heart,
        title: "Work-Life Balance",
        description: "Flexible work arrangements and comprehensive wellness programs.",
        color: "from-red-400 to-pink-500"
    }
];

function WhyChooseSBSSection() {
    return (
        <section id="why-join" className="py-24 px-6 bg-black relative overflow-hidden">
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
                        Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">SBS Corp?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Discover what makes SBS Corp a great place to build your career
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-white/20 transition-all text-center"
                        >
                            <div className={`w-16 h-16 bg-linear-to-r r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                <benefit.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== OPEN POSITIONS SECTION ==============
const positions = [
    {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote / New York",
        type: "Full-time",
        salary: "$120k - $180k",
        description: "We're looking for an experienced full stack developer to join our engineering team.",
        requirements: ["5+ years experience", "React & Node.js", "Cloud platforms", "Agile methodology"]
    },
    {
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote / San Francisco",
        type: "Full-time",
        salary: "$100k - $150k",
        description: "Join our design team to create beautiful and intuitive user experiences.",
        requirements: ["3+ years experience", "Figma proficiency", "Design systems", "User research"]
    },
    {
        title: "DevOps Engineer",
        department: "Infrastructure",
        location: "Remote / London",
        type: "Full-time",
        salary: "$110k - $160k",
        description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
        requirements: ["4+ years experience", "AWS/Azure/GCP", "CI/CD", "Kubernetes"]
    },
    {
        title: "Data Scientist",
        department: "Analytics",
        location: "Remote / Singapore",
        type: "Full-time",
        salary: "$130k - $190k",
        description: "Apply machine learning and statistical analysis to solve complex business problems.",
        requirements: ["PhD or Masters", "Python/R", "ML frameworks", "Big data tools"]
    }
];

function OpenPositionsSection() {
    return (
        <section id="open-positions" className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Open <span className="text-orange-400">Positions</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Find your perfect role and join our team of innovators
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {positions.map((position, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-orange-400/50 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                                    <p className="text-orange-400 font-semibold">{position.department}</p>
                                </div>
                                <div className="px-4 py-2 bg-orange-500/20 rounded-full">
                                    <p className="text-orange-400 text-sm font-semibold">{position.type}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{position.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <DollarSign className="w-4 h-4" />
                                    <span className="text-sm">{position.salary}</span>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6">{position.description}</p>

                            <div className="mb-6">
                                <p className="text-white font-semibold mb-3">Requirements:</p>
                                <div className="flex flex-wrap gap-2">
                                    {position.requirements.map((req, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300"
                                        >
                                            {req}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
                            >
                                Apply Now
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============== APPLICATION FORM SECTION ==============
function ApplicationFormSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        linkedin: "",
        portfolio: "",
        coverLetter: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Gradient Orb */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Apply <span className="text-purple-400">Now</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Fill out the form below and we&apos;ll get back to you soon
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white font-semibold mb-2">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white font-semibold mb-2">Phone *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">Position *</label>
                            <select
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-orange-400 transition-colors"
                            >
                                <option value="" className="bg-slate-900">Select Position</option>
                                <option value="developer" className="bg-slate-900">Senior Full Stack Developer</option>
                                <option value="designer" className="bg-slate-900">UX/UI Designer</option>
                                <option value="devops" className="bg-slate-900">DevOps Engineer</option>
                                <option value="data-scientist" className="bg-slate-900">Data Scientist</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white font-semibold mb-2">Years of Experience *</label>
                            <input
                                type="number"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                                placeholder="5"
                            />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-2">LinkedIn Profile</label>
                            <input
                                type="url"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                                placeholder="https://linkedin.com/in/johndoe"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-white font-semibold mb-2">Portfolio / GitHub</label>
                        <input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                            placeholder="https://github.com/johndoe"
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-white font-semibold mb-2">Cover Letter *</label>
                        <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                            placeholder="Tell us why you'd be a great fit for this role..."
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                    >
                        Submit Application
                    </motion.button>

                    <p className="text-gray-400 text-sm text-center mt-6">
                        By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                </motion.form>
            </div>
        </section>
    );
}

// ============== MAIN PAGE ==============
export default function CareersPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <Navbar />
            <CareersHero />
            <WhyChooseSBSSection />
            <OpenPositionsSection />
            <ApplicationFormSection />
            <Footer />
        </main>
    );
}
