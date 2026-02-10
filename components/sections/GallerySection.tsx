"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
        title: "Team Collaboration",
        category: "Workspace"
    },
    {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
        title: "Strategy Meeting",
        category: "Business"
    },
    {
        src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
        title: "Tech Innovation",
        category: "Technology"
    },
    {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        title: "Client Workshop",
        category: "Training"
    },
    {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
        title: "Development Hub",
        category: "Technology"
    },
    {
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
        title: "Executive Briefing",
        category: "Business"
    },
    {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
        title: "Team Success",
        category: "Culture"
    },
    {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
        title: "Innovation Lab",
        category: "Research"
    }
];

export default function GallerySection() {
    return (
        <section className="py-24 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Project <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">Gallery</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A glimpse into our collaborative environment and successful project deliveries.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${index === 0 || index === 5 ? "row-span-2" : ""
                                }`}
                        >
                            <div className="relative w-full h-full min-h-[200px]">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <span className="text-orange-400 text-xs font-medium uppercase tracking-wider">{image.category}</span>
                                <h4 className="text-white font-semibold mt-1">{image.title}</h4>
                            </div>

                            {/* Border Glow */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/50 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
