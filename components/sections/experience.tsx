"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Software Architect/Developer",
    company: "Techvibes International Limited",
    location: "FCT Abuja, Nigeria",
    duration: "Dec 2022 – Present",
    description:
      "Led product updates, supervised interns, and delivered performant user interfaces. Built scalable applications including a school management system and subscription platform. Collaborated on API integrations, performed code reviews, and implemented optimised SQL queries and unit tests.",
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
    location: "Remote",
    duration: "Sep 2023 – Aug 2024",
    description:
      "Implemented pixel-perfect UI components and collaborated on large-scale design projects. Built real-time validation algorithms, optimised reusable React modules, and developed React-based tools including an asset risk assessment system and a social platform with AI integration.",
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
    duration: "May 2020 – Nov 2022",
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

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="relative py-28 px-4 bg-warm-900 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.07, 0.16, 0.07] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 -right-48 w-[440px] h-[440px] bg-amber-700 rounded-full blur-[130px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            Work History
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-warm-100 mt-4 leading-tight">
            Professional
            <span className="block text-amber-400">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-4">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/60 via-amber-500/20 to-transparent" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="pl-12 relative"
            >
              {/* Dot */}
              <motion.div
                animate={{ scale: open === i ? 1.3 : 1 }}
                className="absolute left-0 top-5 w-8 h-8 rounded-full bg-warm-800 border-2 border-amber-500/60 flex items-center justify-center"
              >
                <div
                  className={`w-2 h-2 rounded-full transition-colors ${open === i ? "bg-amber-400" : "bg-warm-500"}`}
                />
              </motion.div>

              {/* Card */}
              <div
                className={`rounded-2xl border transition-all cursor-pointer ${
                  open === i
                    ? "bg-warm-800 border-amber-500/50"
                    : "bg-warm-800/60 border-warm-600 hover:border-amber-500/30"
                }`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* Always-visible summary */}
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`text-xl font-bold transition-colors ${open === i ? "text-amber-400" : "text-warm-100"}`}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-amber-500/80 font-medium mt-0.5 text-sm">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-3 text-xs text-warm-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500/70" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-500/70" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-5 h-5 text-warm-500 mt-1 flex-shrink-0" />
                  </motion.div>
                </div>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-warm-600/60 pt-4 space-y-4">
                        <p className="text-warm-300 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-warm-500 text-sm text-center"
        >
          Open to exciting opportunities · Remote &amp; On-site
        </motion.p>
      </div>
    </section>
  );
}
