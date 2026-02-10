"use client";

import { motion } from "framer-motion";
import { Server, Code, Briefcase, Layers } from "lucide-react";

const deliveryModels = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "Offsite",
    description: "Remote teams working from our secure facilities"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Offshore",
    description: "Cost-effective solutions from global talent pools"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Onsite",
    description: "Dedicated professionals at your location"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Hybrid",
    description: "Flexible combination tailored to your needs"
  }
];

const services = [
  "Technical Support",
  "Application Development",
  "Project Management",
  "Quality Assurance",
  "Infrastructure Management",
  "Data Analytics"
];

export default function OnDemandSection() {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* 3D Cards Stack */}
              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-full aspect-4/3 rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 border border-white/10 p-8 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-32 h-24 rounded-xl bg-linear-to-br from-orange-500 to-red-500 shadow-xl shadow-orange-500/20 flex items-center justify-center"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs opacity-80">Client Retention</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-28 h-20 rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 shadow-xl shadow-cyan-500/20 flex items-center justify-center"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="text-white text-center">
                    <div className="text-xl font-bold">24/7</div>
                    <div className="text-xs opacity-80">Availability</div>
                  </div>
                </motion.div>
                
                {/* Main Content */}
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Flexible Delivery Models</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {deliveryModels.map((model, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-400">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                          {model.icon}
                        </div>
                        <span className="text-sm">{model.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">On-Demand Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Scalable <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400">Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              SBS Corp leverages an Offsite/Offshore/Onsite delivery model for flexible and scalable solutions. Our on-demand services include technical support, application development, project management, and more.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {services.map((service, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-orange-500/50 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {service}
                </motion.span>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:brightness-110 transition-all shadow-lg shadow-orange-500/25"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
