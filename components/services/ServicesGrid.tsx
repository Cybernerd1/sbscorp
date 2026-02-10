"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      title: "Managed Services",
      description: "Comprehensive IT infrastructure management and support services to keep your business running smoothly. Our 24/7 monitoring and proactive support ensures maximum uptime and optimal performance for your critical systems.",
      benefits: [
        "99.9% Uptime SLA",
        "Cost Reduction",
        "Expert Support"
      ],
      features: [
        "24/7 System Monitoring",
        "Proactive Maintenance",
        "Infrastructure Management",
        "Performance Optimization",
        "Security Management",
        "Backup & Recovery"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "Consulting Services",
      description: "Strategic IT consulting to align technology initiatives with your business objectives and drive digital transformation. Our expert consultants provide deep industry insights and tailored solutions for your unique challenges.",
      benefits: [
        "Strategic Alignment",
        "Innovation Focus",
        "Expert Guidance"
      ],
      features: [
        "Strategic IT Planning",
        "Technology Assessment",
        "Digital Transformation Roadmap",
        "Best Practice Implementation",
        "Change Management",
        "Process Optimization"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      title: "On Demand Services",
      description: "Flexible, scalable IT services available when you need them most. From project support to specialized expertise, our on-demand services provide rapid deployment and expert resources to meet your immediate business needs.",
      benefits: [
        "Instant Scalability",
        "Expert Access",
        "Project Agility"
      ],
      features: [
        "Flexible Resource Scaling",
        "Expert Technical Resources",
        "Project-Based Support",
        "Rapid Deployment",
        "Specialized Skills",
        "Cost-Effective Solutions"
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Service Offerings
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Three comprehensive service models designed to meet your unique business
            needs and accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              features={service.features}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
