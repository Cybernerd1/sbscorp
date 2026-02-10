"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    name: "Automotive",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    href: "/industries/automotive"
  },
  {
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    href: "/industries/manufacturing"
  },
  {
    name: "Consumer Packaged Goods & Retail",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80",
    href: "/industries/cpg-retail"
  },
  {
    name: "High Tech",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    href: "/industries/high-tech"
  },
  {
    name: "Life Sciences",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
    href: "/industries/life-sciences"
  },
  {
    name: "Aerospace",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    href: "/industries/aerospace"
  },
  {
    name: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
    href: "/industries/oil-gas"
  },
  {
    name: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    href: "/industries/retail"
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
    href: "/industries/healthcare"
  },
  {
    name: "Financial Services",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    href: "/industries/financial-services"
  },
  {
    name: "Telecommunications",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    href: "/industries/telecommunications"
  },
  {
    name: "Government & Public Sector",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=600&q=80",
    href: "/industries/government"
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 mb-4">
            Industries we serve
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized expertise across a wide range of industries to help clients navigate their unique challenges.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link href={industry.href} className="group block">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg text-center group-hover:bg-orange-500 transition-colors">
                      <span className="text-sm font-medium text-gray-800 group-hover:text-white transition-colors">
                        {industry.name}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
