"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5 / CSS3",   level: "expert"      },
      { name: "JavaScript",     level: "expert"      },
      { name: "TypeScript",     level: "advanced"    },
      { name: "React",          level: "expert"      },
      { name: "Next.js",        level: "advanced"    },
      { name: "Tailwind CSS",   level: "expert"      },
      { name: "Bootstrap",      level: "expert"      },
      { name: "Framer Motion",  level: "advanced"    }
    ]
  },
  {
    label: "Backend",
    skills: [
      { name: "Laravel",        level: "expert"      },
      { name: "CodeIgniter 4",  level: "expert"      },
      { name: "Node.js",        level: "advanced"    },
      { name: "MySQL",          level: "expert"      },
      { name: "PostgreSQL",     level: "advanced"    },
      { name: "MongoDB",        level: "advanced"    },
      { name: "REST APIs",      level: "expert"      },
      { name: "WebSockets",     level: "advanced"    }
    ]
  },
  {
    label: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub",   level: "expert"      },
      { name: "Docker",         level: "advanced"    },
      { name: "AWS (EC2/S3/RDS)", level: "advanced"  },
      { name: "Redis",          level: "advanced"    },
      { name: "BitBucket",      level: "expert"      },
      { name: "GitLab",         level: "advanced"    },
      { name: "SQL Stored Procs", level: "expert"    },
      { name: "OpenAI APIs",    level: "advanced"    }
    ]
  }
];

const LEVEL_STYLES: Record<string, string> = {
  expert:   "bg-amber-500/15 text-amber-300 border-amber-500/40 hover:bg-amber-500/25 hover:border-amber-400/70",
  advanced: "bg-warm-700 text-warm-200 border-warm-600 hover:bg-warm-600 hover:border-amber-500/40 hover:text-amber-300"
};

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.04 } }
};

const chip = {
  hidden:  { opacity: 0, y: 14, scale: 0.92 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.35 } }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-4 bg-warm-900 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[440px] h-[440px] bg-orange-700 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-warm-100 mt-4 leading-tight">
            Technical
            <span className="block text-amber-400">Skillset</span>
          </h2>
          <p className="text-warm-400 mt-4 max-w-xl mx-auto text-sm">
            <span className="inline-flex items-center gap-1.5 mr-4">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50 border border-amber-400 inline-block" />
              Core expertise
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-warm-700 border border-warm-500 inline-block" />
              Advanced proficiency
            </span>
          </p>
        </motion.div>

        {/* Groups */}
        <div className="grid md:grid-cols-3 gap-10">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.12, duration: 0.6 }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-warm-700" />
                <span className="text-amber-400 font-bold text-sm uppercase tracking-widest px-1">
                  {group.label}
                </span>
                <div className="h-px flex-1 bg-warm-700" />
              </div>

              {/* Chips */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {group.skills.map((s) => (
                  <motion.span
                    key={s.name}
                    variants={chip}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium border cursor-default transition-all ${
                      LEVEL_STYLES[s.level]
                    }`}
                  >
                    {s.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-warm-500 text-sm mt-16"
        >
          Always exploring — currently learning more about AI integrations and edge deployments.
        </motion.p>
      </div>
    </section>
  );
}
