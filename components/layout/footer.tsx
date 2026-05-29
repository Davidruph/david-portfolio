"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "Home",       href: "#home"       },
      { label: "About",      href: "#about"      },
      { label: "Projects",   href: "#projects"   },
      { label: "Experience", href: "#experience" },
      { label: "Contact",    href: "#contact"    }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub",   href: "https://github.com/Davidruph"                        },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/david-agbugba-119b2b120" }
    ]
  }
];

const SOCIALS = [
  { Icon: Github,   href: "https://github.com/Davidruph",                            label: "GitHub"   },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/david-agbugba-119b2b120",     label: "LinkedIn" },
  { Icon: Twitter,  href: "https://x.com/Davidruph",                                 label: "Twitter"  },
  { Icon: Mail,     href: "mailto:dagbugba@yahoo.com",                               label: "Email"    }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-warm-950 border-t border-warm-700/60 py-16 px-4">
      {/* Subtle amber glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-600 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <span className="text-warm-950 font-bold text-sm">DA</span>
              </div>
              <span className="text-warm-100 font-bold text-lg">
                David<span className="text-amber-400">.</span>
              </span>
            </div>
            <p className="text-warm-500 text-sm leading-relaxed mb-3">
              Crafting fast, beautiful, and intuitive digital experiences.
            </p>
            <p className="text-warm-600 text-xs">© {year} David Agbugba.</p>
          </motion.div>

          {/* Link sections */}
          {FOOTER_LINKS.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <h4 className="text-warm-200 font-semibold text-sm mb-4 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <motion.li key={link.label} whileHover={{ x: 4 }}>
                    <a
                      href={link.href}
                      className="text-warm-500 hover:text-amber-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            viewport={{ once: true }}
          >
            <h4 className="text-warm-200 font-semibold text-sm mb-4 uppercase tracking-wider">Get in Touch</h4>
            <motion.a
              href="mailto:dagbugba@yahoo.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="block w-full px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-warm-950 rounded-lg font-bold text-sm text-center transition-colors mb-3"
            >
              Contact Me
            </motion.a>
            <p className="text-warm-600 text-xs leading-relaxed">
              Have a project? Let&apos;s create something exceptional together.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8"
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-warm-600 text-sm">Built with Next.js &amp; Framer Motion</p>

          <div className="flex items-center gap-2.5">
            {SOCIALS.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                title={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-warm-800 border border-warm-700 hover:border-amber-500/60 flex items-center justify-center text-warm-500 hover:text-amber-400 transition-all"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="flex items-center gap-1.5 text-warm-500 hover:text-amber-400 transition-colors text-sm"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
