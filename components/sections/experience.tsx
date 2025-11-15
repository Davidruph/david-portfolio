"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Architect & Team Lead",
      company: "Techvibes International Limited",
      location: "FCT Abuja, Nigeria",
      duration: "Dec 2022 - Present",
      description:
        "Led product updates, supervised interns, and delivered performant user interfaces. Built scalable applications including a school management system and subscription platform. Collaborated on API integrations, performed code reviews, and implemented optimized SQL queries and unit tests.",
      highlights: [
        "Product Engineering",
        "Team Leadership",
        "Data Architecture",
        "Subscription Systems"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Oaks Intelligence Limited",
      location: "Lagos, Nigeria",
      duration: "Sep 2023 - Aug 2024",
      description:
        "Implemented pixel-perfect UI components and collaborated on large-scale design projects. Built real-time validation algorithms, optimized reusable React modules, and developed React-based tools including an asset risk assessment system and a social platform with AI integration.",
      highlights: [
        "UI Engineering",
        "React & Next.js",
        "MERN Stack",
        "AI Integration"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Fiverr (Freelance)",
      location: "Remote",
      duration: "May 2020 - Nov 2022",
      description:
        "Built full-stack applications for global clients, delivering intuitive UIs and reliable backend systems. Collaborated closely with clients, executed QA testing, and completed projects using Laravel, MERN Stack, and multiple database systems.",
      highlights: [
        "Full-Stack Development",
        "Client Collaboration",
        "QA & Testing",
        "Database Design"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
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
              Work History
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Experience
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent rounded-full" />

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="pl-12 group cursor-pointer"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  className="absolute -left-3.5 top-2 w-7 h-7 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-slate-950 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"
                />

                {/* Content card */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-purple-500/20 group-hover:border-purple-500/50 transition-all backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <motion.div whileHover={{ x: 5 }}>
                      <ChevronRight className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <motion.span
                        key={highlight}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30 hover:border-purple-500/60 transition-colors cursor-default"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400">
              More opportunities available • Open to collaboration
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
