"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brain, 
  LineChart, 
  Zap, 
  Factory, 
  Settings, 
  Layers, 
  Cpu, 
  Server, 
  Cloud, 
  BarChart3, 
  Wallet, 
  Database 
} from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "ConvokeAI",
    description: "Generative AI platform delivering real business transformation with intelligent automation, enhanced customer experiences, and data-driven insights.",
    href: "/solutions/convoke-ai"
  },
  {
    icon: LineChart,
    title: "AI-Powered Analytics",
    description: "Transform raw data into actionable insights with advanced AI analytics, predictive modeling, and intelligent business intelligence solutions.",
    href: "/solutions/analytics"
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Streamline operations with AI-driven automation that reduces manual tasks, improves accuracy, and accelerates business processes.",
    href: "/solutions/automation"
  },
  {
    icon: Factory,
    title: "Factory of the Future",
    description: "Transforming manufacturing through cutting-edge technology, intelligent processes, and innovative solutions that drive efficiency and competitive advantage.",
    href: "/solutions/factory-of-future"
  },
  {
    icon: Settings,
    title: "Manufacturing Operations Management",
    description: "Optimize production processes, improve efficiency, and ensure quality through advanced manufacturing execution systems and real-time monitoring.",
    href: "/solutions/manufacturing-operations"
  },
  {
    icon: Layers,
    title: "Product Lifecycle Management",
    description: "Streamline product development from concept to retirement with integrated PLM solutions that enhance collaboration and reduce time-to-market.",
    href: "/solutions/product-lifecycle"
  },
  {
    icon: Cpu,
    title: "Digital Manufacturing",
    description: "Leverage IoT, AI, and automation to create smart factories that adapt, learn, and optimize production in real-time.",
    href: "/solutions/digital-manufacturing"
  },
  {
    icon: Server,
    title: "SAP Implementation Integration Services",
    description: "Seamlessly integrate SAP solutions to unify business processes, enhance data visibility, and drive operational excellence.",
    href: "/solutions/sap-integration"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Transform your infrastructure into an intelligent engine of growth with scalable, secure, and intelligent cloud solutions.",
    href: "/solutions/cloud-services"
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Transform manufacturing data into actionable insights through advanced analytics, predictive modeling, and business intelligence.",
    href: "/solutions/analytics"
  },
  {
    icon: Wallet,
    title: "Intelligent Finance",
    description: "Implement smart financial systems that automate processes, improve accuracy, and provide real-time financial visibility across operations.",
    href: "/solutions/intelligent-finance"
  },
  {
    icon: Database,
    title: "IOT Big Data",
    description: "Harness the power of connected devices and big data analytics to optimize manufacturing processes and enable predictive maintenance.",
    href: "/solutions/iot-big-data"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function SolutionsGridSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            That&apos;s where we come in.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-3xl"
          >
            We help businesses transform, grow and succeed in an ever-changing landscape by providing 
            expert advice and innovative solutions tailored to your unique challenges.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(249, 115, 22, 0.15)",
                borderColor: "rgba(249, 115, 22, 0.3)"
              }}
              className="group relative p-6 bg-zinc-900/50 hover:bg-zinc-900/80 rounded-2xl border border-white/5 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-transparent to-transparent pointer-events-none"
              />
              
              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-12 h-12 mb-5 flex items-center justify-center text-orange-500"
              >
                <solution.icon className="w-8 h-8" strokeWidth={1.5} />
              </motion.div>
              
              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {solution.title}
              </h3>
              
              {/* Description */}
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-5 group-hover:text-gray-300 transition-colors duration-300">
                {solution.description}
              </p>
              
              {/* Link */}
              <Link 
                href={solution.href}
                className="relative z-10 inline-flex items-center gap-2 text-orange-500 text-sm font-medium group-hover:gap-3 transition-all duration-300"
              >
                Explore Solution
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
