"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 98 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 90 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 }
    ],
    backend: [
      { name: "Laravel", level: 95 },
      { name: "Codeigniter", level: 95 },
      { name: "MySQL", level: 95 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 95 }
    ],
    tools: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS (EC2, S3, RDS)", level: 80 },
      { name: "BitBucket & GitLab", level: 90 },
      { name: "Redis Cache", level: 85 },
      { name: "MySQL Stored Procedures", level: 90 }
    ]
  };

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & DevOps" }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-purple-400 font-semibold uppercase tracking-widest">
              Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Technical
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Skillset
              </span>
            </h2>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center mb-16 flex-wrap"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "border border-purple-400/30 text-purple-300 hover:border-purple-400/60"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData[selectedCategory as keyof typeof skillsData].map(
              (skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-purple-500/20 hover:border-purple-500/50 transition-all backdrop-blur-sm group"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {skill.name}
                    </h3>
                    <span className="text-purple-400 font-bold text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-slate-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        delay: idx * 0.1,
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
