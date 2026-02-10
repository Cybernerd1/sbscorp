"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Zap, Cpu, Database, Cloud, LineChart, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

// Starfield component
const Starfield = () => {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate stars only on client side
    setStars(
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  if (stars.length === 0) return null; // Don't render until client-side

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating 3D Icon Component
const FloatingIcon = ({
  Icon,
  delay,
  x,
  y,
  rotation
}: {
  Icon: any;
  delay: number;
  x: string;
  y: string;
  rotation: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotateZ: 0 }}
    animate={{
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
      rotateZ: [0, rotation, rotation * 2],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    className="absolute"
    style={{ left: x, top: y }}
  >
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full" />
      {/* Icon container */}
      <div className="relative p-4 bg-linear-to-br from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-orange-500/30">
        <Icon className="w-8 h-8 text-orange-400" strokeWidth={1.5} />
      </div>
    </div>
  </motion.div>
);

export default function HeroSection() {
  const MotionImage = motion(Image)
  return (
    <section className="relative min-h-screen pt-24 pb-0 overflow-hidden bg-linear-to-b from-black via-blue-950/20 to-black">
      {/* Starfield Background */}
      <Starfield />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Floating 3D Icons */}
      <FloatingIcon Icon={Brain} delay={0} x="10%" y="20%" rotation={360} />
      <FloatingIcon Icon={Zap} delay={1} x="85%" y="15%" rotation={-360} />
      <FloatingIcon Icon={Cpu} delay={2} x="15%" y="60%" rotation={180} />
      <FloatingIcon Icon={Database} delay={1.5} x="80%" y="65%" rotation={-180} />
      <FloatingIcon Icon={Cloud} delay={0.5} x="90%" y="40%" rotation={270} />
      <FloatingIcon Icon={LineChart} delay={2.5} x="5%" y="45%" rotation={-270} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center min-h-[calc(100vh-6rem)] justify-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Transform Your Business with
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-500 to-red-500"
              >
                AI-Powered Solutions
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Data-driven solutions to drive performance models. Systematic results for faster deployment and sustainable growth.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(249, 115, 22, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30"
            >
              GET STARTED
              <span>→</span>
            </motion.a>
          </motion.div>

          {/* AI Character Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative w-full max-w-5xl mt-16 mb-12"
          >
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Central AI Character - 3D Rendered */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-[450px] h-[450px]"
              >
                {/* Glow Effect Behind Character */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-linear-to-b from-orange-500/30 via-blue-500/20 to-transparent blur-3xl rounded-full"
                />

                {/* Character Image */}
                <motion.div
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <MotionImage
                    src="/ai-character-final.png"
                    alt="AI Character"
                    width={450}
                    height={450}
                    priority
                    className="object-contain relative z-10"
                    animate={{
                      filter: [
                        "drop-shadow(0 0 20px rgba(249,115,22,0.3))",
                        "drop-shadow(0 0 45px rgba(249,115,22,0.6))",
                        "drop-shadow(0 0 20px rgba(249,115,22,0.3))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Floating UI Panels */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute left-0 top-1/4 z-10"
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotateY: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="p-4 bg-linear-to-br from-zinc-900/80 to-blue-950/40 backdrop-blur-xl rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-500/20"
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-orange-400" />
                    <div>
                      <div className="text-xs text-gray-400">AI-Powered</div>
                      <div className="text-sm font-bold text-white">Automation</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute right-0 top-1/3 z-10"
              >
                <motion.div
                  animate={{ y: [0, 10, 0], rotateY: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="p-4 bg-linear-to-br from-zinc-900/80 to-blue-950/40 backdrop-blur-xl rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-500/20"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-orange-400" />
                    <div>
                      <div className="text-xs text-gray-400">Smart</div>
                      <div className="text-sm font-bold text-white">Analytics</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute left-1/4 bottom-0 z-10"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="p-3 bg-linear-to-br from-zinc-900/80 to-blue-950/40 backdrop-blur-xl rounded-xl border border-orange-500/30 shadow-lg shadow-orange-500/20"
                >
                  {/* <Database className="w-5 h-5 text-orange-400" /> */}
                </motion.div>
              </motion.div>
            </div>

            {/* Glassmorphic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Brain, title: "AI-Powered Automation", desc: "Intelligent systems that learn and adapt" },
                { icon: Zap, title: "Lightning Fast", desc: "Deploy solutions in record time" },
                { icon: Database, title: "Data Intelligence", desc: "Transform data into actionable insights" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 60px rgba(249, 115, 22, 0.2)",
                  }}
                  className="group relative p-6 bg-linear-to-br from-zinc-900/80 to-blue-950/30 backdrop-blur-xl rounded-3xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-blue-500/10 rounded-3xl transition-all duration-500" />

                  <div className="relative z-10">
                    {/* 3D Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-linear-to-br from-orange-500/20 to-blue-500/20 rounded-2xl border border-orange-500/30"
                    >
                      <item.icon className="w-8 h-8 text-orange-400" strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {[
              { value: "240+", label: "Global Partners" },
              { value: "92%", label: "Faster Technology" },
              { value: "500+", label: "Projects Delivered" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-8 py-4 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-orange-500/20"
              >
                <div className="text-3xl font-bold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Curved Horizon Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(249, 115, 22, 0.3) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.6) 50%, transparent 100%)",
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.5)",
          }}
        />
      </div>
    </section>
  );
}

