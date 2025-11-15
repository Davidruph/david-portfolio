"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function About() {
  const aboutText = `I'm a seasoned Software Developer with 5+ years of extensive proficiency in JavaScript and PHP. Specialized in building startup applications, excelling in code optimization, debugging, and providing strategic solutions.

Expert in full-stack development using MERN Stack, Laravel, AMD CodeIgniter. Skilled in database design, API development, and converting high-fidelity designs into pixel-perfect implementations.

Committed to upholding industry best practices in design and documentation. Passionate about clean code, performance optimization, and mentoring junior developers.`;

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "23+" },
    { label: "Technologies", value: "15+" },
    { label: "Interns Trained", value: "5+" }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-purple-400 font-semibold uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Crafting Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Excellence
              </span>
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                {aboutText}
              </p>

              <div className="flex gap-4 pt-8">
                <motion.a
                  href="/david-agbugba-cv.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-blue-400 text-blue-300 rounded-lg font-semibold hover:bg-blue-400/10 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </motion.a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-colors backdrop-blur-sm"
                >
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
