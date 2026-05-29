"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title:   "Radiant Hyve",
    tagline: "The operating system for modern childcare centres",
    description:
      "Automate admin, simplify parent communication, manage billing, and scale your childcare centre — all in one powerful platform.",
    metrics:  ["Multi-tenant architecture", "Real-time messaging", "Billing automation"],
    tags:     ["Node.js", "Flutter", "React", "React Query", "MySQL", "Tailwind", "WebSockets"],
    link:     "https://radianthyve.com/",
    github:   "https://github.com/Davidruph/Radiant-Hyve-Backend",
    image:    "/radiant-hyve.png",
    featured: true
  },
  {
    title:   "MailCheetah AI",
    tagline: "SaaS email campaign platform",
    description:
      "Manages campaigns, subscribers, and newsletters with AI-powered copy. Reduced newsletter design time by 50% for 1,000+ subscribers.",
    metrics:  ["1,000+ subscribers", "50% faster design", "AI copy generation"],
    tags:     ["CodeIgniter 4", "Grape.js", "OpenAI", "MySQL", "Bootstrap"],
    link:     "https://mailcheetah.ai/",
    github:   null,
    image:    "/mailcheetah.png"
  },
  {
    title:   "Vorkio",
    tagline: "AI-powered crypto analytics platform",
    description:
      "Real-time token insights, risk scoring, on-chain data analysis, and portfolio optimisation for data-driven investors.",
    metrics:  ["On-chain analytics", "Risk scoring engine", "Multi-tenant SaaS"],
    tags:     ["Next.js", "Supabase", "Moralis", "React Query", "Shadcn UI"],
    link:     "https://vorkio.vercel.app/",
    github:   null,
    image:    "/vorkio.png"
  },
  {
    title:   "QampusPlus — New",
    tagline: "Modern school management app",
    description:
      "CBT exams, result generation, assignment tracking, and billing management for students, staff, parents, and super admins.",
    metrics:  ["CBT exam engine", "Role-based dashboards", "Billing system"],
    tags:     ["React", "Redux", "RTK Query", "Tailwind", "Node.js", "Prisma"],
    link:     "https://qampusplusapp.com/",
    github:   null,
    image:    "/newqplus.png"
  },
  {
    title:   "QampusPlus — Legacy",
    tagline: "School management system (Laravel)",
    description:
      "Earlier version built with Laravel. Features student result generation, assessments, role-based dashboards, and billing.",
    metrics:  ["Laravel + Blade", "Real-time via WebSockets", "Multi-role system"],
    tags:     ["Laravel", "Blade", "MySQL", "jQuery", "Bootstrap"],
    link:     "https://school.qampusplus.com/",
    github:   null,
    image:    "/oldqplus.png"
  },
  {
    title:   "Kommunita",
    tagline: "Cross-platform community platform",
    description:
      "Connects businesses with users sharing similar interests. Improved user retention by 20% through enhanced UX and AI-driven recommendations.",
    metrics:  ["20% retention lift", "AI-driven feeds", "Real-time chat"],
    tags:     ["React", "Redux", "Tailwind", "RTK Query", "WebSockets"],
    link:     "https://kommunita.com/",
    github:   null,
    image:    "/kommunita.png"
  }
];

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

export default function Projects() {
  const featured = PROJECTS[0];
  const rest     = PROJECTS.slice(1);

  return (
    <section
      id="projects"
      className="relative py-28 px-4 bg-warm-950 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.07, 0.16, 0.07] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-amber-600 rounded-full blur-[140px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-warm-100 mt-4 leading-tight">
            Featured
            <span className="block text-amber-400">Projects</span>
          </h2>
          <p className="text-warm-400 mt-4 max-w-xl mx-auto text-sm">
            Real products built for real businesses — from concept to production.
          </p>
        </motion.div>

        {/* ── Featured card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 rounded-3xl overflow-hidden border border-warm-600 hover:border-amber-500/50 transition-all group bg-warm-800"
        >
          <div className="grid lg:grid-cols-2 min-h-[420px]">
            {/* Image */}
            <div className="relative overflow-hidden bg-warm-700 min-h-[260px] lg:min-h-0">
              <motion.img
                src={featured.image}
                alt={featured.title}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-warm-800/60 pointer-events-none" />

              {/* Featured badge */}
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1 bg-amber-500 text-warm-950 text-xs font-bold rounded-full uppercase tracking-wider">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col justify-center">
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-2">
                {featured.tagline}
              </p>
              <h3 className="text-3xl font-bold text-warm-100 mb-4">
                {featured.title}
              </h3>
              <p className="text-warm-300 leading-relaxed mb-6 text-sm">
                {featured.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs bg-warm-700 text-warm-300 border border-warm-600 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <motion.a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-warm-950 rounded-xl font-semibold text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </motion.a>
                {featured.github && (
                  <motion.a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-warm-600 hover:border-amber-500/60 text-warm-200 hover:text-amber-400 rounded-xl font-semibold text-sm transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rest.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-warm-600 hover:border-amber-500/50 bg-warm-800 transition-all"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-warm-700">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-95 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-800/80 to-transparent pointer-events-none" />

                {/* Hover overlay link */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="p-3 bg-amber-500/90 rounded-full">
                    <ExternalLink className="w-5 h-5 text-warm-950" />
                  </span>
                </motion.a>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-1">
                  {project.tagline}
                </p>
                <h3 className="text-warm-100 font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-warm-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.metrics.slice(0, 2).map((m) => (
                    <span
                      key={m}
                      className="px-2 py-0.5 text-[11px] font-medium bg-amber-500/10 text-amber-300/80 border border-amber-500/25 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] bg-warm-700 text-warm-400 border border-warm-600 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] text-warm-500">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
