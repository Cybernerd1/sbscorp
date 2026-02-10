"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern Office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-500 text-sm font-medium uppercase tracking-wider">
              Mission
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Our Mission
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed mb-8"
          >
            Our mission is to be a leading Next Generation IT services provider, 
            delivering a best-in-class portfolio of services, including advanced 
            Artificial Intelligence (AI) solutions, to meet the evolving needs of our clients.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 leading-relaxed"
          >
            SBS Corp aims to serve as a global, comprehensive solution provider, 
            addressing all customer requirements through a seamless integration of 
            innovative, cost-effective, and time-efficient services. By combining our 
            deep technical expertise with cutting-edge AI capabilities, we empower clients 
            to achieve operational excellence, drive innovation, and realize sustainable 
            business success.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
