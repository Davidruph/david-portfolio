"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "MailCheetah AI",
      description:
        "SaaS application for managing campaigns, subscribers, and newsletters. Enhanced user experience for over 1,000 subscribers, reduced newsletter design time by 50%.",
      tags: [
        "Grape JS",
        "CodeIgniter 4",
        "MySQL",
        "OpenAI",
        "JavaScript",
        "Bootstrap"
      ],
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      link: "https://mailcheetah.ai/",
      github: "#",
      feature_image: "/mailcheetah.png"
    },
    {
      title: "Vorkio",
      description:
        "AI-powered crypto analytics platform that provides real-time token insights, risk scoring, on-chain data analysis, and portfolio optimization to support data-driven investment decisions.",
      tags: [
        "Next JS",
        "React Query",
        "Tailwind CSS",
        "Shadcn UI",
        "websockets",
        "AI Integration",
        "Supabase",
        "Moralis",
        "Multitenant Architecture"
      ],
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      link: "https://vorkio.vercel.app/",
      github: "#",
      feature_image: "/vorkio.png"
    },

    {
      title: "QampusPlus (Legacy Version)",
      description:
        "Earlier version of the school management system built with Laravel, featuring student result generation, assessments, role-based dashboards, and billing management for schools and super admins.",
      tags: ["Laravel", "Blade", "MySQL", "jQuery", "Bootstrap", "Web Sockets"],
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      link: "https://school.qampusplus.com/",
      github: "#",
      feature_image: "/oldqplus.png"
    },
    {
      title: "QampusPlus (New Version)",
      description:
        "School management app for generating results, conducting CBT exams, tracking assignments, and managing students, staff, parents, and billing for super admins.",
      tags: ["React JS", "Redux", "RTK Query", "Tailwind", "Node.js", "Prisma"],
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      link: "https://qampusplusapp.com/",
      github: "#",
      feature_image: "/newqplus.png"
    },
    {
      title: "Kommunita",
      description:
        "Cross-platform tool for connecting businesses with users sharing similar interests. Improved user retention by 20% through enhanced UI/UX design and functionality.",
      tags: [
        "React JS",
        "Redux",
        "Tailwind CSS",
        "RTK Query",
        "websockets",
        "AI Integration"
      ],
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      link: "https://kommunita.com/",
      github: "#",
      feature_image: "/kommunita.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="project"
      className="relative min-h-screen py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="absolute bottom-40 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
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
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-6">
              Featured
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Showcase of my best work built with modern technologies and
              creative solutions
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(idx)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                className="group h-full rounded-2xl border border-purple-500/20 hover:border-purple-500/50 overflow-hidden transition-all backdrop-blur-sm"
              >
                {/* Image background */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
                  {/* Gradient layer */}
                  <motion.div
                    style={{ background: project.image }}
                    animate={{ scale: hoveredProject === idx ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  />

                  {/* Project image on top of gradient */}
                  {project.feature_image && (
                    <motion.img
                      src={project.feature_image}
                      alt={project.title}
                      animate={{ scale: hoveredProject === idx ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                  {/* Icons on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredProject === idx ? 1 : 0,
                      y: hoveredProject === idx ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-all"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-all"
                    >
                      <Github className="w-6 h-6" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-medium border border-purple-500/40 hover:border-purple-500/70 transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
            >
              <Code2 className="w-5 h-5" />
              View All Projects
            </motion.button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
