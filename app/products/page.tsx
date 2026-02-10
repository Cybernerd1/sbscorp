"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/products/ProductCard";
import { 
  DollarIcon, 
  LightbulbIcon, 
  UsersIcon, 
  SettingsIcon, 
  SmileyIcon, 
  ShieldIcon 
} from "@/components/GradientIcons";

export default function ProductsPage() {
  const products = [
    {
      category: "Data Management",
      categoryColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      title: "MDSLite",
      description: "Lightweight master data management solution for seamless data integration and governance.",
      features: [
        "Real-time Data Synchronization",
        "Data Quality Management",
        "Workflow Automation",
        "Multi-system Integration"
      ],
      technicalSpecs: ["Cloud-based", "REST API", "24/7 Support"]
    },
    {
      category: "Mobile Solutions",
      categoryColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      title: "FLEXMOBEX",
      description: "Flexible mobile expense management solution with intelligent automation and analytics.",
      features: [
        "Automated Expense Tracking",
        "Receipt Recognition",
        "Approval Workflows",
        "Real-time Reporting"
      ],
      technicalSpecs: ["iOS & Android", "Offline Capable", "Cloud Sync"]
    },
    {
      category: "Mobile Platform",
      categoryColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      title: "ITECH MOBILE",
      description: "Comprehensive mobile platform for enterprise applications and digital transformation.",
      features: [
        "Cross-platform Development",
        "Enterprise Security",
        "API Integration",
        "Performance Analytics"
      ],
      technicalSpecs: ["Multi-platform", "Enterprise Grade", "Scalable"]
    },
    {
      category: "Infrastructure",
      categoryColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      title: "FlexPod",
      description: "Converged infrastructure solution combining compute, storage, and networking in a unified platform.",
      features: [
        "Converged Infrastructure",
        "Simplified Management",
        "Scalable Architecture",
        "High Availability"
      ],
      technicalSpecs: ["Hybrid Cloud", "VMware Compatible", "Cisco UCS"]
    },
    {
      category: "Utility Management",
      categoryColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "FlexUtility",
      description: "Comprehensive utility management platform for optimizing resource consumption and costs.",
      features: [
        "Resource Monitoring",
        "Cost Optimization",
        "Usage Analytics",
        "Automated Billing"
      ],
      technicalSpecs: ["API Integration", "Real-time Monitoring", "Cloud-based"]
    },
    {
      category: "Migration Tools",
      categoryColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      title: "Transport Migration Utility",
      description: "Specialized tool for seamless system migrations with minimal downtime and data integrity.",
      features: [
        "Zero-downtime Migration",
        "Data Validation",
        "Rollback Capabilities",
        "Progress Tracking"
      ],
      technicalSpecs: ["Multi-system Support", "Automated Testing", "Risk Mitigation"]
    },
    {
      category: "Real Estate",
      categoryColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      title: "Real Estate Management Integration",
      description: "Integrated platform for comprehensive real estate portfolio management and operations.",
      features: [
        "Property Management",
        "Tenant Portal",
        "Financial Reporting",
        "Maintenance Tracking"
      ],
      technicalSpecs: ["Web-based", "Mobile Access", "Integration Ready"]
    }
  ];

  const benefits = [
    {
      icon: <DollarIcon />,
      title: "Strategic Value Creation",
      description: "Transform AI investments into sustainable business value through strategic implementation and optimization",
      metric: "5.2x ROI"
    },
    {
      icon: <LightbulbIcon />,
      title: "Innovation Acceleration",
      description: "Fast-track breakthrough innovations with AI-powered ideation, testing, and market validation",
      metric: "300% Faster"
    },
    {
      icon: <UsersIcon />,
      title: "Workforce Amplification",
      description: "Augment human capabilities with intelligent systems that enhance decision-making and creativity",
      metric: "65% Efficiency"
    },
    {
      icon: <SettingsIcon />,
      title: "Operational Excellence",
      description: "Achieve operational perfection through self-optimizing processes and predictive maintenance",
      metric: "45% Cost Save"
    },
    {
      icon: <SmileyIcon />,
      title: "Experience Revolution",
      description: "Create memorable experiences through AI that understands, anticipates, and exceeds expectations",
      metric: "92% NPS Score"
    },
    {
      icon: <ShieldIcon />,
      title: "Ethical AI Leadership",
      description: "Lead with responsible AI practices that build trust, ensure fairness, and maintain transparency",
      metric: "Zero Bias"
    }
  ];

  const whyChoose = [
    {
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: "Enterprise Security",
      description: "Built with advanced security protocols and compliance standards."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      title: "High Performance",
      description: "Optimized for speed and efficiency in demanding environments."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Scalable Architecture",
      description: "Grows with your business from startup to enterprise scale."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Innovative products that{" "}
              <span className="bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                drive digital excellence.
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Discover our comprehensive portfolio of enterprise-grade products engineered to streamline operations, enhance productivity, and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Explore Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-linear-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 rounded-2xl transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-2xl font-bold bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    {benefit.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Product Suite
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From data management to mobile solutions, our products are engineered to meet the evolving needs of modern enterprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our products are built with enterprise-grade security, scalability, and performance in mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Our Products?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Request a demo or contact our product specialists to learn how our solutions can benefit your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              Start Your Digital Transformation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
